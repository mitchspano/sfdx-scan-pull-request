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

import { execSync } from "child_process";
import { Octokit } from "@octokit/action";
import copy from "recursive-copy";
import core from "@actions/core";
import fs from "fs";
import github, { context } from "@actions/github";
import parse, { AddChange, ChangeType, DeleteChange } from "parse-diff";
import path from "path";

type PluginInputs = {
  severityThreshold: number;
  strictlyEnforcedRules: string;
};

type ScannerFlags = {
  category: string;
  engine: string;
  env: string;
  eslintconfig: string;
  pmdconfig: string;
  tsConfig: string;
};

type ScannerFinding = {
  fileName: string;
  engine: string;
  violations: ScannerViolation[];
};

type ScannerViolation = UrlObject & {
  category: string;
  endLine: string;
  line: string;
  message: string;
  ruleName: string;
  severity: number;
};

type ScannerViolationType = "Error" | "Warning";

type GithubComment = UrlObject & {
  commit_id: string;
  path: string;
  start_line: number;
  start_side: GithubCommentSide;
  side: GithubCommentSide;
  line: number;
  body: string;
};

type UrlObject = {
  url?: string;
};

type GithubCommentSide = "RIGHT";

const COMMMENT_HEADER = `| Engine | Category | Rule | Severity | Type |
| --- | --- | --- | --- | --- |`;
const DIFF_OUTPUT = "diffBetweenCurrentAndParentBranch.txt";
const FINDINGS_OUTPUT = "sfdx-scanner-findings.json";
const TEMP_DIR_NAME = "temporary";
const TYPES_OF_INTEREST = new Set<ChangeType>().add("add").add("del");

const filePathToChangedLines = {} as { [key in string]: Set<number> };
const filePathToComments = {} as { [key in string]: GithubComment[] };
const existingComments = [] as GithubComment[];
const inputs = {
  severityThreshold: 0,
  strictlyEnforcedRules: "",
} as PluginInputs;

let findings = [] as ScannerFinding[];
let pullRequest = {} as typeof context.payload.pull_request;
let hasHaltingError = false;
let scannerCliArgs = "";

/**
 * @description Collects and verifies the inputs from the action context and metadata
 * https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs
 */
function initialSetup() {
  const scannerFlags = {
    category: core.getInput("category"),
    engine: core.getInput("engine"),
    env: core.getInput("eslint-env"),
    eslintconfig: core.getInput("eslintconfig"),
    pmdconfig: core.getInput("pmdconfig"),
    tsConfig: core.getInput("tsconfig"),
  } as ScannerFlags;

  scannerCliArgs = (Object.keys(scannerFlags) as Array<keyof ScannerFlags>)
    .map(
      (key) => `${scannerFlags[key] ? `--${key}="${scannerFlags[key]}"` : ""}`
    )
    .join(" ");
  // TODO: validate inputs
  inputs.severityThreshold = parseInt(core.getInput("severity-threshold")) || 5;
  inputs.strictlyEnforcedRules = core.getInput("strictly-enforced-rules");
  pullRequest = github.context.payload.pull_request;
}

function getGithubRestApiClient() {
  const octokit = new Octokit();
  const owner = pullRequest?.base?.repo?.owner?.login;
  const repo = pullRequest?.base?.repo?.name;
  const prNumber = pullRequest?.number;
  return { octokit, owner, prNumber, repo };
}

/**
 * @description Validate that the action is called from within the scope of a pull request
 */
function validatePullRequestContext() {
  console.log("Validating that this action was invoked from a pull request...");
  if (!pullRequest) {
    core.setFailed(
      "This action is only applicable when invoked in the context of a pull request."
    );
    process.exit();
  }
}

/**
 * @description Calculates the diff for all files within the pull request and
 * populates a map of filePath -> Set of changed line numbers
 */
function getDiffInPullRequest() {
  console.log("Getting difference within the pull request...");
  execSync(
    `git remote add -f destination ${pullRequest?.base?.repo?.clone_url}`
  );
  execSync(`git remote update`);
  execSync(
    `git diff destination/${pullRequest?.base?.ref}...origin/${pullRequest?.head?.ref} > ${DIFF_OUTPUT}`
  );
  const files = parse(fs.readFileSync(DIFF_OUTPUT).toString());
  for (let file of files) {
    if (file.to && fs.existsSync(file.to)) {
      let changedLines = new Set<number>();
      for (let chunk of file.chunks) {
        for (let change of chunk.changes) {
          if (TYPES_OF_INTEREST.has(change.type)) {
            changedLines.add(
              ((change as AddChange) || (change as DeleteChange)).ln
            );
          }
        }
      }
      filePathToChangedLines[file.to] = changedLines;
    }
  }
}

/**
 * @description Moves all folders and files which were present in the
 * git difference to a temporary folder.
 */
async function recursivelyMoveFilesToTempFolder() {
  console.log("Recursively moving all files to the temp folder...");
  const filesWithChanges = Object.keys(filePathToChangedLines);
  for (let file of filesWithChanges) {
    await copy(file, path.join(TEMP_DIR_NAME, file), {
      overwrite: true,
    }).catch(function (error) {
      core.setFailed("Copy failed: " + error);
    });
  }
}

async function getExistingComments() {
  console.log("Getting existing comments using GitHub REST API...");
  const { octokit, owner, prNumber, repo } = getGithubRestApiClient();

  const method = `GET /repos/${owner}/${repo}/pulls/${prNumber}/comments`;
  existingComments.push(
    ...((await octokit.paginate(method)) as GithubComment[])
  );
}

/**
 * @description Uses the sfdx scanner to run static code analysis on
 * all files within the temporary directory.
 */
function performStaticCodeAnalysisOnFilesInDiff() {
  console.log(
    "Performing static code analysis on all of the files in the difference..."
  );
  execSync(
    `node_modules/sfdx-cli/bin/run scanner:run ${scannerCliArgs} \
    --format json \
    --target "${TEMP_DIR_NAME}" \
    --outfile "${FINDINGS_OUTPUT}"`
  );
  const filePath = path.join(process.cwd(), FINDINGS_OUTPUT);
  if (fs.existsSync(filePath) === false) {
    console.log("No files applicable files identified in the difference...");
    process.exit();
  }
  findings = JSON.parse(
    fs.readFileSync(filePath) as unknown as string
  ) as ScannerFinding[];
  for (let finding of findings) {
    finding.fileName = finding.fileName.replace(
      path.join(process.cwd(), TEMP_DIR_NAME),
      process.cwd()
    );
  }
}

/**
 * @description Parses the findings from the sfdx scanner execution
 * and determines if any of the findings are for lines which have changed.
 * If a finding exists and covers a changed line, then translate that finding
 * object into a comment object.
 */
function filterFindingsToDiffScope() {
  console.log(
    "Filtering the findings to just the lines which are part of the pull request..."
  );
  for (let finding of findings) {
    const filePath = finding.fileName.replace(process.cwd() + "/", "");
    const relevantLines = filePathToChangedLines[filePath];
    for (let violation of finding.violations) {
      if (isInChangedLines(violation, relevantLines)) {
        if (!filePathToComments[filePath]) {
          filePathToComments[filePath] = [] as GithubComment[];
        }
        filePathToComments[filePath].push(
          translateViolationToComment(filePath, violation, finding.engine)
        );
      }
    }
  }
}

/**
 * @description Determines if all lines within a violation have changed
 * @param {Violation} violation Violation from the sfdx scanner
 * @param {Set<Integer>} relevantLines Lines in the file which have changed
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
 * @param {Violation} violation Violation from the sfdx scanner
 * @param {String} engine Engine from the sfdx scanner
 * @returns Comment
 */
function translateViolationToComment(
  filePath: string,
  violation: ScannerViolation,
  engine: string
): GithubComment {
  const type = getScannerViolationType(violation, engine);
  if (type === "Error") {
    hasHaltingError = true;
  }
  let endLine = violation.endLine
    ? parseInt(violation.endLine)
    : parseInt(violation.line);
  let startLine = parseInt(violation.line);
  if (endLine == startLine) {
    endLine++;
  }
  return {
    commit_id: pullRequest?.head?.sha,
    path: filePath,
    start_line: startLine,
    start_side: "RIGHT",
    side: "RIGHT",
    line: endLine,
    body: `${COMMMENT_HEADER}
| ${engine} | ${violation.category} | ${violation.ruleName} | ${violation.severity} | ${type} |

[${violation.message}](${violation.url})`,
  };
}

/**
 * @description Calculates if a violation will cause halting or not.
 * @param {Violation} violation Violation from the sfdx scanner
 * @param {String} engine Engine from the sfdx scanner
 * @returns Boolean
 */
function getScannerViolationType(
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
async function writeComments() {
  console.log("Writing comments using GitHub REST API...");
  const { octokit, owner, prNumber, repo } = getGithubRestApiClient();
  for (let file in filePathToComments) {
    for (let comment of filePathToComments[file]) {
      // TODO: Add in resolving comments when the issue has been resolved?
      const existingComment = existingComments.find((existingComment) =>
        matchComment(comment as GithubComment, existingComment)
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
    core.setFailed("A serious error has been identified");
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
  initialSetup();
  validatePullRequestContext();
  getDiffInPullRequest();
  await recursivelyMoveFilesToTempFolder();
  performStaticCodeAnalysisOnFilesInDiff();
  await getExistingComments();
  filterFindingsToDiffScope();
  writeComments();
}

main();
