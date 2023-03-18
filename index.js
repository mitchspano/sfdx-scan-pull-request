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

const { execSync } = require("child_process");
const { Octokit } = require("@octokit/action");
const copy = require("recursive-copy");
const core = require("@actions/core");
const fs = require("fs");
const github = require("@actions/github");
const parse = require("parse-diff");
const path = require("path");
const { CheckRuns } = require("./check-runs");
const { Comments } = require("./comments");

const DIFF_OUTPUT = "diffBetweenCurrentAndParentBranch.txt";

const FINDINGS_OUTPUT = "sfdx-scanner-findings.json";
const TEMP_DIR_NAME = "temporary";

const TYPES_OF_INTEREST = new Set().add("add").add("delete");

const filePathToChangedLines = {};
const filePathToComments = {};
let findings = [];
let inputs = {};
let pullRequest = {};
let scannerCliArgs = "";

/**
 * @description Collects and verifies the inputs from the action context and metadata
 * https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs
 */
function initialSetup() {
  // TODO: validate inputs
  inputs = {
    severityThreshold: core.getInput("severity-threshold"),
    strictlyEnforcedRules: core.getInput("strictly-enforced-rules"),
    category: core.getInput("category"),
    engine: core.getInput("engine"),
    eslintEnv: core.getInput("eslint-env"),
    eslintConfig: core.getInput("eslintconfig"),
    pmdConfig: core.getInput("pmdconfig"),
    tsConfig: core.getInput("tsconfig"),
    commitSha: core.getInput("commit_sha"),
    useComments: core.getInput("use-comments") === 'true',
  };

  let category = inputs.category ? `--category="${inputs.category}"` : "";
  let engine = inputs.engine ? `--engine="${inputs.engine}"` : "";
  let eslintEnv = inputs.eslintEnv ? `--env="${inputs.eslintEnv}"` : "";
  let eslintConfig = inputs.eslintConfig
    ? `--eslintconfig="${inputs.eslintConfig}"`
    : "";
  let pmdConfig = inputs.pmdConfig ? `--pmdconfig="${inputs.pmdConfig}"` : "";
  let tsConfig = inputs.tsConfig ? `--tsconfig="${inputs.tsConfig}"` : "";
  scannerCliArgs = `${category} ${engine} ${eslintEnv} ${eslintConfig} ${pmdConfig} ${tsConfig}`;

  pullRequest = github.context?.payload?.pull_request;

  const params = {
    gitHubRestApiClient: getGithubRestApiClient(),
    comments: filePathToComments,
    inputs,
  };
  this.publisher = inputs.useComments
    ? new Comments(params)
    : new CheckRuns(params);
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
  execSync(`git remote add -f destination ${pullRequest.base.repo.clone_url}`);
  execSync(`git remote update`);
  execSync(
    `git diff destination/${pullRequest?.base?.ref}...origin/${pullRequest?.head?.ref} > ${DIFF_OUTPUT}`
  );
  const files = parse(fs.readFileSync(DIFF_OUTPUT).toString());
  for (let file of files) {
    if (fs.existsSync(file.to)) {
      let changedLines = new Set();
      for (let chunk of file.chunks) {
        for (let change of chunk.changes) {
          if (TYPES_OF_INTEREST.has(change.type)) {
            changedLines.add(change.ln);
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
  let filesWithChanges = Object.keys(filePathToChangedLines);
  for (let file of filesWithChanges) {
    await copy(file, path.join(TEMP_DIR_NAME, file), {
      overwrite: true,
    }).catch(function (error) {
      core.setFailed("Copy failed: " + error);
    });
  }
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
  let filePath = path.join(process.cwd(), FINDINGS_OUTPUT);
  if (fs.existsSync(filePath) === false) {
    console.log("No files applicable files identified in the difference...");
    process.exit();
  }
  findings = JSON.parse(fs.readFileSync(filePath).toString());
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

  for (let finding of this.findings) {
    let filePath = finding.fileName.replace(process.cwd() + "/", "");
    let relevantLines = filePathToChangedLines[filePath];
    for (let violation of finding.violations) {
      if (isInChangedLines(violation, relevantLines)) {
        if (!filePathToComments[filePath]) {
          filePathToComments[filePath] = [];
        }
        violation.isHalting = isHaltingViolation(violation, finding.engine);
        this.publisher.translate(filePath, violation, finding.engine);
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
function isInChangedLines(violation, relevantLines) {
  if (!violation.endLine) {
    return relevantLines && relevantLines.has(parseInt(violation.line, 10));
  }
  for (
    let i = parseInt(violation.line);
    i <= parseInt(violation.endLine);
    i++
  ) {
    if (!relevantLines || relevantLines.has(i) === false) {
      return false;
    }
  }
  return true;
}

/**
 * @description Calculates if a violation will cause halting or not.
 * @param {Violation} violation Violation from the sfdx scanner
 * @param {String} engine Engine from the sfdx scanner
 * @returns Boolean
 */
function isHaltingViolation(violation, engine) {
  if (
    this.inputs.severityThreshold &&
    this.inputs.severityThreshold <= violation.severity
  ) {
    return true;
  }
  if (!this.inputs.strictlyEnforcedRules) {
    return false;
  }
  let violationDetail = {
    engine: engine,
    category: violation.category,
    rule: violation.ruleName,
  };
  for (let enforcedRule of JSON.parse(this.inputs.strictlyEnforcedRules)) {
    if (
      Object.entries(violationDetail).toString() ===
      Object.entries(enforcedRule).toString()
    ) {
      return true;
    }
  }
  return false;
}

async function writeToGitHub() {
  await this.publisher.write();
  if (this.publisher.hasHaltingError === true) {
    core.setFailed("A serious error has been identified");
  }
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
  filterFindingsToDiffScope();
  await writeToGitHub();
}

main();
