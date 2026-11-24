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
import { context } from "@actions/github";

import { getDiffInPullRequest, GithubPullRequest } from "./git-actions";

import { scanFiles, ScannerFlags, ScannerViolation } from "./sfdxCli";
import { getChangedLineAnchor, PluginInputs } from "./common";
import { CommentsReporter } from "./reporter/comments-reporter";
import { AnnotationsReporter } from "./reporter/annoations-reporter";
import { Reporter } from "./reporter/reporter.types";

interface ExecSyncError {
  status: string;
  stack: string;
  output?: Buffer;
  message: string;
}

/**
 * @description Collects and verifies the inputs from the action context and metadata
 * https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs
 */
function initialSetup() {
  const scannerFlags: ScannerFlags = {
    ruleSelector: getInput("rule-selector"),
    configFile: getInput("config-file"),
    targets: [],
  };

  // Code Analyzer severities: 1 (Critical) through 5 (Info)
  const inputs: PluginInputs = {
    reportMode: getInput("report-mode") || "check-runs",
    severityThreshold: parseInt(getInput("severity-threshold")) || 0,
    strictlyEnforcedRules: getInput("strictly-enforced-rules"),
    deleteResolvedComments: getInput("delete-resolved-comments") === "true",
    target: context?.payload?.pull_request ? "" : getInput("target"),
  };

  const reporterParams = {
    inputs,
    context,
  };

  return {
    inputs,
    pullRequest: context?.payload?.pull_request,
    scannerFlags,
    reporter:
      inputs.reportMode === "comments"
        ? new CommentsReporter(reporterParams)
        : new AnnotationsReporter(reporterParams),
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
    setFailed(
      "This action is only applicable when invoked by a pull request, or with the target property supplied."
    );
  }
}

/**
 * @description Uses Salesforce Code Analyzer to run static code analysis on
 * the relevant files.
 */
export function performStaticCodeAnalysisOnFilesInDiff(
  scannerFlags: ScannerFlags
): ScannerViolation[] {
  console.log(
    "Performing static code analysis on all of the relevant files..."
  );
  try {
    return scanFiles(scannerFlags);
  } catch (err) {
    const typedErr = err as unknown as ExecSyncError;
    console.error({
      message: typedErr.message,
      status: typedErr.status,
      stack: typedErr.stack,
      output: typedErr.output?.toString(),
    });
    setFailed("Something went wrong when scanning the files.");
  }
  return [];
}

/**
 * @description Determines which violations are on lines which have changed
 * and passes those to the reporter.
 */
function filterFindingsToDiffScope(
  violations: ScannerViolation[],
  filePathToChangedLines: Map<string, Set<number>>,
  inputs: PluginInputs,
  reporter: Reporter
) {
  console.log(
    "Filtering the findings to just the lines which are part of the context..."
  );

  for (let violation of violations) {
    const filePath = violation.fileName.replace(process.cwd() + "/", "");
    if (inputs.target) {
      reporter.translateViolationToReport(filePath, violation, violation.engine);
      continue;
    }
    // Report when any line of the violation changed in the diff
    const anchor = getChangedLineAnchor(
      violation,
      filePathToChangedLines.get(filePath) || new Set<number>()
    );
    if (anchor) {
      reporter.translateViolationToReport(
        filePath,
        violation,
        violation.engine,
        anchor
      );
    }
  }
}

/**
 * @description Constructs an array the files which are to be scanned
 * @param filePathToChangedLines
 * @param target
 * @returns file paths to scan
 */
function getFilesToScan(
  filePathToChangedLines: Map<string, Set<number>>,
  target: string
): string[] {
  if (target) {
    return [target];
  }
  let pathsWithChangedLines = [];
  for (let [filePath, changedLines] of filePathToChangedLines) {
    if (changedLines.size > 0) {
      pathsWithChangedLines.push(filePath);
    }
  }
  return pathsWithChangedLines;
}

/**
 * @description Main method - injection point for code execution
 */
async function main() {
  console.log("Beginning sfdx-scan-pull-request run...");
  const { pullRequest, scannerFlags, reporter, inputs } = initialSetup();
  validateContext(pullRequest, inputs.target);
  let filePathToChangedLines = new Map<string, Set<number>>();
  if (!inputs.target) {
    try {
      filePathToChangedLines = await getDiffInPullRequest(
        pullRequest?.base?.sha,
        pullRequest?.head?.sha
      );
    } catch (e) {
      setFailed(`Unable to compute the pull request diff: ${(e as Error).message}`);
      return;
    }
  }

  const filesToScan = getFilesToScan(filePathToChangedLines, inputs.target);
  if (filesToScan.length === 0) {
    console.log("There are no files to scan - exiting now.");
    return;
  }
  scannerFlags.targets = filesToScan;

  const diffFindings = performStaticCodeAnalysisOnFilesInDiff(scannerFlags);
  filterFindingsToDiffScope(
    diffFindings,
    filePathToChangedLines,
    inputs,
    reporter
  );

  try {
    await reporter.write();
  } catch (e) {
    console.error(e);
    setFailed("An error occurred while trying to write to GitHub");
  }
}

main();
