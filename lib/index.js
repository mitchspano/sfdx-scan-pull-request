"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const action_1 = require("@octokit/action");
const recursive_copy_1 = __importDefault(require("recursive-copy"));
const core_1 = __importDefault(require("@actions/core"));
const fs_1 = __importDefault(require("fs"));
const github_1 = __importDefault(require("@actions/github"));
const parse_diff_1 = __importDefault(require("parse-diff"));
const path_1 = __importDefault(require("path"));
const COMMMENT_HEADER = `| Engine | Category | Rule | Severity | Type |
| --- | --- | --- | --- | --- |`;
const DIFF_OUTPUT = "diffBetweenCurrentAndParentBranch.txt";
const FINDINGS_OUTPUT = "sfdx-scanner-findings.json";
const TEMP_DIR_NAME = "temporary";
const TYPES_OF_INTEREST = new Set().add("add").add("del");
const filePathToChangedLines = {};
const filePathToComments = {};
const existingComments = [];
const inputs = {
    severityThreshold: 5,
    strictlyEnforcedRules: "",
};
let findings = [];
let pullRequest = {};
let hasHaltingError = false;
let scannerCliArgs = "";
/**
 * @description Collects and verifies the inputs from the action context and metadata
 * https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs
 */
function initialSetup() {
    const scannerFlags = {
        category: core_1.default.getInput("category"),
        engine: core_1.default.getInput("engine"),
        env: core_1.default.getInput("eslint-env"),
        eslintconfig: core_1.default.getInput("eslintconfig"),
        pmdconfig: core_1.default.getInput("pmdconfig"),
        tsConfig: core_1.default.getInput("tsconfig"),
    };
    scannerCliArgs = Object.keys(scannerFlags)
        .map((key) => `${scannerFlags[key] ? `--${key}="${scannerFlags[key]}"` : ""}`)
        .join(" ");
    // TODO: validate inputs
    inputs.severityThreshold = parseInt(core_1.default.getInput("severity-threshold")) || 5;
    inputs.strictlyEnforcedRules = core_1.default.getInput("strictly-enforced-rules");
    pullRequest = github_1.default.context.payload.pull_request;
}
function getGithubRestApiClient() {
    var _a, _b, _c, _d, _e;
    const octokit = new action_1.Octokit();
    const owner = (_c = (_b = (_a = pullRequest === null || pullRequest === void 0 ? void 0 : pullRequest.base) === null || _a === void 0 ? void 0 : _a.repo) === null || _b === void 0 ? void 0 : _b.owner) === null || _c === void 0 ? void 0 : _c.login;
    const repo = (_e = (_d = pullRequest === null || pullRequest === void 0 ? void 0 : pullRequest.base) === null || _d === void 0 ? void 0 : _d.repo) === null || _e === void 0 ? void 0 : _e.name;
    const prNumber = pullRequest === null || pullRequest === void 0 ? void 0 : pullRequest.number;
    return { octokit, owner, prNumber, repo };
}
/**
 * @description Validate that the action is called from within the scope of a pull request
 */
function validatePullRequestContext() {
    console.log("Validating that this action was invoked from a pull request...");
    if (!pullRequest) {
        core_1.default.setFailed("This action is only applicable when invoked in the context of a pull request.");
        process.exit();
    }
}
/**
 * @description Calculates the diff for all files within the pull request and
 * populates a map of filePath -> Set of changed line numbers
 */
function getDiffInPullRequest() {
    var _a, _b, _c, _d;
    console.log("Getting difference within the pull request...");
    (0, child_process_1.execSync)(`git remote add -f destination ${(_b = (_a = pullRequest === null || pullRequest === void 0 ? void 0 : pullRequest.base) === null || _a === void 0 ? void 0 : _a.repo) === null || _b === void 0 ? void 0 : _b.clone_url}`);
    (0, child_process_1.execSync)(`git remote update`);
    (0, child_process_1.execSync)(`git diff destination/${(_c = pullRequest === null || pullRequest === void 0 ? void 0 : pullRequest.base) === null || _c === void 0 ? void 0 : _c.ref}...origin/${(_d = pullRequest === null || pullRequest === void 0 ? void 0 : pullRequest.head) === null || _d === void 0 ? void 0 : _d.ref} > ${DIFF_OUTPUT}`);
    const files = (0, parse_diff_1.default)(fs_1.default.readFileSync(DIFF_OUTPUT).toString());
    for (let file of files) {
        if (file.to && fs_1.default.existsSync(file.to)) {
            let changedLines = new Set();
            for (let chunk of file.chunks) {
                for (let change of chunk.changes) {
                    if (TYPES_OF_INTEREST.has(change.type)) {
                        changedLines.add((change || change).ln);
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
function recursivelyMoveFilesToTempFolder() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Recursively moving all files to the temp folder...");
        const filesWithChanges = Object.keys(filePathToChangedLines);
        for (let file of filesWithChanges) {
            yield (0, recursive_copy_1.default)(file, path_1.default.join(TEMP_DIR_NAME, file), {
                overwrite: true,
            }).catch(function (error) {
                core_1.default.setFailed("Copy failed: " + error);
            });
        }
    });
}
function getExistingComments() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Getting existing comments using GitHub REST API...");
        const { octokit, owner, prNumber, repo } = getGithubRestApiClient();
        const method = `GET /repos/${owner}/${repo}/pulls/${prNumber}/comments`;
        existingComments.push(...(yield octokit.paginate(method)));
    });
}
/**
 * @description Uses the sfdx scanner to run static code analysis on
 * all files within the temporary directory.
 */
function performStaticCodeAnalysisOnFilesInDiff() {
    console.log("Performing static code analysis on all of the files in the difference...");
    (0, child_process_1.execSync)(`node_modules/sfdx-cli/bin/run scanner:run ${scannerCliArgs} \
    --format json \
    --target "${TEMP_DIR_NAME}" \
    --outfile "${FINDINGS_OUTPUT}"`);
    const filePath = path_1.default.join(process.cwd(), FINDINGS_OUTPUT);
    if (fs_1.default.existsSync(filePath) === false) {
        console.log("No files applicable files identified in the difference...");
        process.exit();
    }
    findings = JSON.parse(fs_1.default.readFileSync(filePath));
    for (let finding of findings) {
        finding.fileName = finding.fileName.replace(path_1.default.join(process.cwd(), TEMP_DIR_NAME), process.cwd());
    }
}
/**
 * @description Parses the findings from the sfdx scanner execution
 * and determines if any of the findings are for lines which have changed.
 * If a finding exists and covers a changed line, then translate that finding
 * object into a comment object.
 */
function filterFindingsToDiffScope() {
    console.log("Filtering the findings to just the lines which are part of the pull request...");
    for (let finding of findings) {
        const filePath = finding.fileName.replace(process.cwd() + "/", "");
        const relevantLines = filePathToChangedLines[filePath];
        for (let violation of finding.violations) {
            if (isInChangedLines(violation, relevantLines)) {
                if (!filePathToComments[filePath]) {
                    filePathToComments[filePath] = [];
                }
                filePathToComments[filePath].push(translateViolationToComment(filePath, violation, finding.engine));
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
        return relevantLines && relevantLines.has(parseInt(violation.line));
    }
    for (let i = parseInt(violation.line); i <= parseInt(violation.endLine); i++) {
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
function translateViolationToComment(filePath, violation, engine) {
    var _a;
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
        commit_id: (_a = pullRequest === null || pullRequest === void 0 ? void 0 : pullRequest.head) === null || _a === void 0 ? void 0 : _a.sha,
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
function getScannerViolationType(violation, engine) {
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
    for (let enforcedRule of JSON.parse(inputs.strictlyEnforcedRules)) {
        if (Object.entries(violationDetail).toString() ===
            Object.entries(enforcedRule).toString()) {
            return "Error";
        }
    }
    return "Warning";
}
/**
 * @description Writes the relevant comments to the GitHub pull request.
 * Uses the octokit to post the comments to the PR.
 */
function writeComments() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Writing comments using GitHub REST API...");
        const { octokit, owner, prNumber, repo } = getGithubRestApiClient();
        for (let file in filePathToComments) {
            for (let comment of filePathToComments[file]) {
                // TODO: Add in resolving comments when the issue has been resolved?
                const existingComment = existingComments.find((existingComment) => matchComment(comment, existingComment));
                if (!existingComment) {
                    const method = `POST /repos/${owner}/${repo}/pulls/${prNumber}/comments`;
                    yield octokit.request(method, comment);
                }
                else {
                    console.log(`Skipping existing comment ${existingComment.url}`);
                }
            }
        }
        if (hasHaltingError === true) {
            core_1.default.setFailed("A serious error has been identified");
        }
    });
}
function matchComment(commentA, commentB) {
    return (commentA.line === commentB.line &&
        commentA.body === commentB.body &&
        commentA.path === commentB.path);
}
/**
 * @description Main method - injection point for code execution
 */
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        initialSetup();
        validatePullRequestContext();
        getDiffInPullRequest();
        yield recursivelyMoveFilesToTempFolder();
        performStaticCodeAnalysisOnFilesInDiff();
        yield getExistingComments();
        filterFindingsToDiffScope();
        writeComments();
    });
}
main();
