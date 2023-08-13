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

import {
  scanFiles,
  registerRule,
  ScannerFinding,
  ScannerFlags,
  ScannerViolation,
} from "./sfdxCli";
import { PluginInputs } from "./common";
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
  const scannerFlags = {
    category: getInput("category"),
    engine: getInput("engine"),
    env: getInput("eslint-env"),
    eslintconfig: getInput("eslintconfig"),
    pmdconfig: getInput("pmdconfig"),
    tsConfig: getInput("tsconfig"),
  } as ScannerFlags;

  // TODO: validate inputs. Technically the scanner's "max" violation level is 3,
  // where: 1 (high), 2 (moderate), and 3 (low)
  const inputs: PluginInputs = {
    reportMode: getInput("report-mode") || "check-runs",
    customPmdRules: getInput("custom-pmd-rules"),
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
 * @description Uses the sfdx scanner to run static code analysis on
 * all files within the temporary directory.
 */
export async function performStaticCodeAnalysisOnFilesInDiff(
  scannerFlags: ScannerFlags
) {
  console.log(
    "Performing static code analysis on all of the relevant files..."
  );
  try {
    const findings = await scanFiles(scannerFlags);
    return typeof findings === "string" ? [] : findings;
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
 * @description Parses the findings from the sfdx scanner execution
 * and determines if any of the findings are for lines which have changed.
 * If a finding exists and covers a changed line, then translate that finding
 * object into a comment object.
 */
function filterFindingsToDiffScope(
  findings: ScannerFinding[],
  filePathToChangedLines: Map<string, Set<number>>,
  inputs: PluginInputs,
  reporter: Reporter
) {
  console.log(
    "Filtering the findings to just the lines which are part of the context..."
  );

  for (let finding of findings) {
    const filePath = finding.fileName.replace(process.cwd() + "/", "");
    const relevantLines =
      filePathToChangedLines.get(filePath) || new Set<number>();
    for (let violation of finding.violations) {
      if (!isInChangedLines(violation, relevantLines) && !inputs.target) {
        continue;
      }
      reporter.translateViolationToReport(filePath, violation, finding.engine);
    }
  }
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
    return relevantLines.has(parseInt(violation.line));
  }
  for (
    let i = parseInt(violation.line);
    i <= parseInt(violation.endLine);
    i++
  ) {
    if (relevantLines.has(i) == false) {
      return false;
    }
  }
  return true;
}

/**
 * @description Constructs an array the files which are to be scanned
 * @param filePathToChangedLines
 * @param target
 * @returns file paths to scan
 */
function getFilesToScan(
  filePathToChangedLines: Map<string, Set<number>>,
  target: String
): String[] {
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
 * @description Calls `scanner:rule:add` for every custom rule defined as input
 */
async function registerCustomPmdRules(rules: string) {
  for (let rule of JSON.parse(rules) as {
    [key in string]: string;
  }[]) {
    try {
      await registerRule(rule.path, rule.language);
    } catch (err) {
      const typedErr = err as unknown as ExecSyncError;
      console.error({
        message: typedErr.message,
        status: typedErr.status,
        stack: typedErr.stack,
        output: typedErr.output?.toString(),
      });
      setFailed("Something went wrong when registering custom rule.");
    }
  }
}

/**
 * @description Main method - injection point for code execution
 */
async function main() {
  console.log("Beginning sfdx-scan-pull-request run...");
  const { pullRequest, scannerFlags, reporter, inputs } = initialSetup();
  validateContext(pullRequest, inputs.target);
  let filePathToChangedLines = inputs.target
    ? new Map<string, Set<number>>()
    : await getDiffInPullRequest(
        pullRequest?.base?.ref,
        pullRequest?.head?.ref,
        pullRequest?.base?.repo?.clone_url
      );

  const filesToScan = getFilesToScan(filePathToChangedLines, inputs.target);
  if (filesToScan.length === 0) {
    console.log("There are no files to scan - exiting now.");
    return;
  }
  scannerFlags.target = filesToScan.join(",");

  if (inputs.customPmdRules) {
    registerCustomPmdRules(inputs.customPmdRules);
  }

  const diffFindings = await performStaticCodeAnalysisOnFilesInDiff(
    scannerFlags
  );
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
