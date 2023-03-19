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
import { context } from "@actions/github";

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

type GithubExistingComment = GithubComment & {
  user: {
    type: "Bot" | "User";
  };
};

type GithubCommentSide = "RIGHT";

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
    target: context?.payload?.pull_request ? "" : getInput("target"),
    tsConfig: getInput("tsconfig"),
  } as ScannerFlags;

  // TODO: validate inputs. Technically the scanner's "max" violation level is 3,
  // where: 1 (high), 2 (moderate), and 3 (low)
  const inputs = {
    severityThreshold: parseInt(getInput("severity-threshold")) || 4,
    strictlyEnforcedRules: getInput("strictly-enforced-rules"),
  };
  return {
    inputs,
    pullRequest: context?.payload?.pull_request,
    scannerFlags,
  };
}

/**
 * @description Validate that the action is called correctly
 */
function validateContext(pullRequest: GithubPullRequest, target: string) {
  console.log(
    "Validating that this action was invoked from an acceptable context..."
  );
  if (!pullRequest && !target) {
    throw new Error(
      "This action is only applicable when invoked by a pull request, or with the target property supplied."
    );
  }
}

async function getExistingComments() {
  console.log("Getting existing comments using GitHub REST API...");
  return (await performGithubRequest<GithubExistingComment[]>("GET")).filter(
    (existingComment) => existingComment.user.type === "Bot"
  );
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
  return typeof findings === "string" ? [] : findings;
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
  scannerFlags: ScannerFlags
) {
  console.log(
    "Filtering the findings to just the lines which are part of the pull request..."
  );
  const filePathToComments = new Map<string, GithubComment[]>();
  let hasHaltingError = false;

  for (let finding of findings) {
    const filePath = finding.fileName.replace(process.cwd() + "/", "");
    const relevantLines =
      filePathToChangedLines.get(filePath) || new Set<number>();
    for (let violation of finding.violations) {
      if (!isInChangedLines(violation, relevantLines) && !scannerFlags.target) {
        continue;
      }
      if (!filePathToComments.has(filePath)) {
        filePathToComments.set(filePath, []);
      }

      const { comment, violationType } = translateViolationToComment(
        filePath,
        violation,
        finding.engine,
        inputs
      );
      if (violationType === "Error") {
        hasHaltingError = true;
      }
      filePathToComments.get(filePath)?.push(comment);
    }
  }
  return { filePathToComments, hasHaltingError };
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
  inputs: PluginInputs
): { comment: GithubComment; violationType: ScannerViolationType } {
  const startLine = parseInt(violation.line);
  let endLine = violation.endLine
    ? parseInt(violation.endLine)
    : parseInt(violation.line);
  if (endLine === startLine) {
    endLine++;
  }

  const violationType = getScannerViolationType(inputs, violation, engine);
  const commit_id = context.payload.pull_request
    ? context.payload.pull_request.head.sha
    : context.sha;

  const commentHeader = `| Engine | Category | Rule | Severity | Type | Message | File |
  | --- | --- | --- | --- | --- | --- | --- |`;
  return {
    comment: {
      commit_id,
      path: filePath,
      start_line: startLine,
      start_side: "RIGHT",
      side: "RIGHT",
      line: endLine,
      body: `${commentHeader}
| ${engine} | ${violation.category} | ${violation.ruleName} | ${
        violation.severity
      } | ${violationType} | [${violation.message.trim()}](${
        violation.url
      }) | [${filePath}](${getGithubFilePath(commit_id, filePath)}) |`,
    },
    violationType,
  };
}

function getGithubFilePath(commitId: string, filePath: string) {
  return ["..", "tree", commitId, filePath].join("/");
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
  hasHaltingError: boolean
) {
  console.log("Writing comments using GitHub REST API...");

  for (let [_, comments] of filePathToComments) {
    if (!comments) {
      continue;
    }
    for (let comment of comments) {
      const existingComment = existingComments.find((existingComment) =>
        matchComment(comment, existingComment)
      );
      if (!existingComment) {
        console.log("No matching comment found, uploading new comment");
        try {
          await performGithubRequest("POST", comment);
        } catch (err: unknown) {
          console.error("Error while uploading comments!", err);
          throw err as Error;
        }
      } else {
        // TODO: It would be nice to resolve comments when there's no longer a scan result for an existing comment but
        // at present, GitHub has no REST api support for this through Octokit (only GraphQL resolution is currently supported).
        console.log(`Skipping existing comment ${existingComment.url}`);
      }
    }
  }
  if (hasHaltingError) {
    throw new Error("A serious error has been identified");
  }
}

function matchComment(commentA: GithubComment, commentB: GithubComment) {
  // Removes the "File" property from each body
  // since that particular column is commit-specific (and thus would always differ)
  const getSanitizedBody = (body: string) =>
    body
      .split("|")
      .filter((bodySection) => bodySection)
      .slice(0, -1)
      .toString();
  return (
    commentA.line === commentB.line &&
    getSanitizedBody(commentA.body) === getSanitizedBody(commentB.body) &&
    commentA.path === commentB.path
  );
}

function performGithubRequest<T>(
  method: "POST" | "GET",
  optionalBody?: GithubComment
) {
  const octokit = new Octokit();
  const owner = context.repo.owner;
  const repo = context.repo.repo;
  const prNumber = context.payload.pull_request?.number;

  const endpoint = `${method} /repos/${owner}/${repo}/${
    prNumber ? `pulls/${prNumber}` : `commits/${context.sha}`
  }/comments`;

  return (
    method === "POST"
      ? octokit.request(endpoint, optionalBody)
      : octokit.paginate(endpoint)
  ) as Promise<T>;
}

function updateScannerTarget(
  filePathToChangedLines: Map<string, Set<number>>,
  scannerFlags: ScannerFlags
) {
  if (!scannerFlags.target) {
    scannerFlags.target = "";
    for (let [filePath, changedLines] of filePathToChangedLines) {
      if (changedLines.size > 0) {
        scannerFlags.target += filePath + ",";
      }
    }
    if (scannerFlags.target.endsWith(",")) {
      scannerFlags.target = scannerFlags.target.slice(
        0,
        scannerFlags.target.length - 1
      );
    }
  }
}

/**
 * @description Main method - injection point for code execution
 */
async function main() {
  console.log("Beginning sfdx-scan-pull-request run...");
  const { inputs, pullRequest, scannerFlags } = initialSetup();
  validateContext(pullRequest, scannerFlags.target);

  const [filePathToChangedLines, existingComments] = await Promise.all([
    getDiffInPullRequest(
      [pullRequest?.base?.ref, pullRequest?.head?.ref],
      pullRequest?.base?.repo?.clone_url
    ),
    getExistingComments(),
  ]);

  updateScannerTarget(filePathToChangedLines, scannerFlags);

  if (scannerFlags.target) {
    const diffFindings = await performStaticCodeAnalysisOnFilesInDiff(
      scannerFlags
    );
    const { filePathToComments, hasHaltingError } = filterFindingsToDiffScope(
      diffFindings,
      filePathToChangedLines,
      inputs,
      scannerFlags
    );
    writeComments(existingComments, filePathToComments, hasHaltingError);
  }
}

main().catch((error: Error) => {
  setFailed(`Error occurred while running action: ${error.message}`);
  process.exit();
});
