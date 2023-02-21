/*
   Copyright 2022 Mitch Spano
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
	 https://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import { getInput, setFailed } from "@actions/core";
import { Octokit } from "@octokit/action";
import copy from "recursive-copy";
import { context } from "@actions/github";
import { join } from "path";

import { getDiffInPullRequest, GithubPullRequest } from "./git-actions";

import {
  scanFiles,
  ScannerFinding,
  ScannerFlags,
  ScannerViolation,
  ScannerViolationType,
} from "./sfdxCli";

type PluginInputs = {
  severityThreshold: number;
  strictlyEnforcedRules: string;
};

type GithubComment = {
  commit_id: string;
  path: string;
  start_line: number;
  start_side: GithubCommentSide;
  side: GithubCommentSide;
  line: number;
  body: string;
  url?: string;
};

type GithubCommentSide = "RIGHT";

const COMMMENT_HEADER = `| Engine | Category | Rule | Severity | Type |
| --- | --- | --- | --- | --- |`;
const TEMP_DIR_NAME = "temporary";

let hasHaltingError = false;

/**
 * @description Collects and verifies the inputs from the action context and metadata
 * https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs
 */
function initialSetup() {
  const scannerFlags = {
    category: getInput("category"),
    engine: getInput("engine"),
    env: getInput("eslint-env"),
    eslintconfig: getInput("eslintconfig"),
    pmdconfig: getInput("pmdconfig"),
    target: TEMP_DIR_NAME,
    tsConfig: getInput("tsconfig"),
  };

  // TODO: validate inputs
  const inputs = {
    severityThreshold: parseInt(getInput("severity-threshold")) || 5,
    strictlyEnforcedRules: getInput("strictly-enforced-rules"),
  };
  return {
    inputs,
    pullRequest: context?.payload?.pull_request,
    scannerFlags,
  };
}

function getGithubRestApiClient(
  pullRequest: typeof context.payload.pull_request
) {
  const octokit = new Octokit();
  const owner = pullRequest?.base?.repo?.owner?.login;
  const repo = pullRequest?.base?.repo?.name;
  const prNumber = pullRequest?.number;
  return { octokit, owner, prNumber, repo };
}

/**
 * @description Validate that the action is called from within the scope of a pull request
 */
function validatePullRequestContext(pullRequest: GithubPullRequest) {
  console.log("Validating that this action was invoked from a pull request...");
  if (!pullRequest) {
    setFailed(
      "This action is only applicable when invoked in the context of a pull request."
    );
    process.exit();
  }
}

/**
 * @description Moves all folders and files which were present in the
 * git difference to a temporary folder.
 */
async function recursivelyMoveFilesToTempFolder(
  filePathToChangedLines: Map<string, Set<number>>
) {
  console.log("Recursively moving all files to the temp folder...");
  const filesWithChanges = Object.keys(filePathToChangedLines);
  for (let file of filesWithChanges) {
    await copy(file, join(TEMP_DIR_NAME, file), {
      overwrite: true,
    }).catch((error: Error) => {
      setFailed("Copy failed: " + error);
    });
  }
  return filePathToChangedLines;
}

async function getExistingComments(pullRequest: GithubPullRequest) {
  console.log("Getting existing comments using GitHub REST API...");
  const { octokit, owner, prNumber, repo } =
    getGithubRestApiClient(pullRequest);

  const method = `GET /repos/${owner}/${repo}/pulls/${prNumber}/comments`;
  return (await octokit.paginate(method)) as GithubComment[];
}

/**
 * @description Uses the sfdx scanner to run static code analysis on
 * all files within the temporary directory.
 */
export async function performStaticCodeAnalysisOnFilesInDiff(
  scannerFlags: ScannerFlags
) {
  console.log(
    "Performing static code analysis on all of the files in the difference..."
  );

  const findings = await scanFiles(scannerFlags);
  for (let finding of findings) {
    finding.fileName = finding.fileName.replace(
      join(process.cwd(), TEMP_DIR_NAME),
      process.cwd()
    );
  }
  return findings;
}

/**
 * @description Parses the findings from the sfdx scanner execution
 * and determines if any of the findings are for lines which have changed.
 * If a finding exists and covers a changed line, then translate that finding
 * object into a comment object.
 */
function filterFindingsToDiffScope(
  findings: ScannerFinding[],
  filePathToChangedLines: Map<string, Set<number>>,
  inputs: PluginInputs,
  pullRequest: GithubPullRequest
) {
  console.log(
    "Filtering the findings to just the lines which are part of the pull request..."
  );
  const filePathToComments = new Map<string, GithubComment[]>();
  for (let finding of findings) {
    const filePath = finding.fileName.replace(process.cwd() + "/", "");
    const relevantLines =
      filePathToChangedLines.get(filePath) || new Set<number>();
    for (let violation of finding.violations) {
      if (isInChangedLines(violation, relevantLines)) {
        if (!filePathToComments.has(filePath)) {
          filePathToComments.set(filePath, []);
        }
        filePathToComments
          .get(filePath)
          ?.push(
            translateViolationToComment(
              filePath,
              violation,
              finding.engine,
              inputs,
              pullRequest
            )
          );
      }
    }
  }
  return filePathToComments;
}

/**
 * @description Determines if all lines within a violation have changed
 * @returns Boolean
 */
function isInChangedLines(
  violation: ScannerViolation,
  relevantLines: Set<number>
) {
  if (!violation.endLine) {
    return relevantLines && relevantLines.has(parseInt(violation.line));
  }
  for (
    let i = parseInt(violation.line);
    i <= parseInt(violation.endLine);
    i++
  ) {
    if (!relevantLines || relevantLines.has(i) == false) {
      return false;
    }
  }
  return true;
}

/**
 * @description Translates a violation object into a comment
 * with a formatted body
 * @returns Comment
 */
function translateViolationToComment(
  filePath: string,
  violation: ScannerViolation,
  engine: string,
  inputs: PluginInputs,
  pullRequest: GithubPullRequest
): GithubComment {
  const type = getScannerViolationType(inputs, violation, engine);
  if (type === "Error") {
    hasHaltingError = true;
  }
  let endLine = violation.endLine
    ? parseInt(violation.endLine)
    : parseInt(violation.line);
  const startLine = parseInt(violation.line);
  if (endLine === startLine) {
    endLine++;
  }
  return {
    commit_id: pullRequest?.head?.sha,
    path: filePath,
    start_line: startLine,
    start_side: "RIGHT",
    side: "RIGHT",
    line: endLine,
    body: `${COMMMENT_HEADER} | ${engine} | ${violation.category} | ${violation.ruleName} | ${violation.severity} | ${type} | [${violation.message}](${violation.url})`,
  };
}

/**
 * @description Calculates if a violation will cause halting or not.
 * @returns Boolean
 */
function getScannerViolationType(
  inputs: PluginInputs,
  violation: ScannerViolation,
  engine: string
): ScannerViolationType {
  if (inputs.severityThreshold <= violation.severity) {
    return "Error";
  }
  if (!inputs.strictlyEnforcedRules) {
    return "Warning";
  }
  let violationDetail = {
    engine: engine,
    category: violation.category,
    rule: violation.ruleName,
  };
  for (let enforcedRule of JSON.parse(inputs.strictlyEnforcedRules) as {
    [key in string]: string;
  }[]) {
    if (
      Object.entries(violationDetail).toString() ===
      Object.entries(enforcedRule).toString()
    ) {
      return "Error";
    }
  }
  return "Warning";
}

/**
 * @description Writes the relevant comments to the GitHub pull request.
 * Uses the octokit to post the comments to the PR.
 */
async function writeComments(
  existingComments: GithubComment[],
  filePathToComments: Map<string, GithubComment[]>,
  pullRequest: GithubPullRequest,
  hasHaltingError: boolean
) {
  console.log("Writing comments using GitHub REST API...");
  const { octokit, owner, prNumber, repo } =
    getGithubRestApiClient(pullRequest);
  for (let file in filePathToComments) {
    for (let comment of filePathToComments.get(file) || []) {
      // TODO: Add in resolving comments when the issue has been resolved?
      const existingComment = existingComments.find((existingComment) =>
        matchComment(comment, existingComment)
      );
      if (!existingComment) {
        const method = `POST /repos/${owner}/${repo}/pulls/${prNumber}/comments`;
        await octokit.request(method, comment);
      } else {
        console.log(`Skipping existing comment ${existingComment.url}`);
      }
    }
  }
  if (hasHaltingError === true) {
    setFailed("A serious error has been identified");
  }
}

function matchComment(commentA: GithubComment, commentB: GithubComment) {
  return (
    commentA.line === commentB.line &&
    commentA.body === commentB.body &&
    commentA.path === commentB.path
  );
}

/**
 * @description Main method - injection point for code execution
 */
async function main() {
  console.log("Beginning sfdx-scan-pull-request run...");
  const { inputs, pullRequest, scannerFlags } = initialSetup();
  validatePullRequestContext(pullRequest);

  const [filePathToChangedLines, existingComments] = await Promise.all([
    getDiffInPullRequest(
      [pullRequest?.head?.ref, pullRequest?.base?.ref],
      pullRequest?.base?.repo?.clone_url
    ).then(recursivelyMoveFilesToTempFolder),
    getExistingComments(pullRequest),
  ]);

  // temporally depends on "recursivelyMoveFilesToTempFolder"
  // as we only scan updated files
  const diffFindings = await performStaticCodeAnalysisOnFilesInDiff(
    scannerFlags
  );
  const filePathToComments = filterFindingsToDiffScope(
    diffFindings,
    filePathToChangedLines,
    inputs,
    pullRequest
  );
  writeComments(
    existingComments,
    filePathToComments,
    pullRequest,
    hasHaltingError
  );
}

main().catch((error: Error) =>
  setFailed(`Error occurred while running action: ${error.message}`)
);
