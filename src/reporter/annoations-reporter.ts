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

import { getScannerViolationType } from "../common";
import { Octokit } from "@octokit/action";
import { context } from "@actions/github";
import {
  BaseReporter,
  GithubAnnotation,
  GithubCheckRun,
} from "./reporter.types";
import { ScannerViolation } from "../sfdxCli";

export const ERROR = "Error";
export const RIGHT = "RIGHT";

export class AnnotationsReporter extends BaseReporter<GithubAnnotation> {
  /**
   * @description Executes the REST request to submit the Check Run to GitHub
   * @param body
   * @private
   */
  private performGithubRequest<T>(body: GithubCheckRun) {
    const octokit = new Octokit();
    const owner = context.repo.owner;
    const repo = context.repo.repo;

    const endpoint = `POST /repos/${owner}/${repo}/check-runs`;

    return octokit.request(endpoint, body) as Promise<T>;
  }

  /**
   * @description Writes the Check Run to GitHub
   */
  async write() {
    console.log("Creating Check Runs using GitHub REST API...");

    let conclusion: "failure" | "success" | "neutral";
    if (this.hasHaltingError) {
      conclusion = "failure";
    } else {
      conclusion = this.issues.length === 0 ? "success" : "neutral";
    }

    const commit_id = this.context.payload?.pull_request
      ? this.context.payload.pull_request.head.sha
      : this.context.sha;

    if (this.issues) {
      const request: GithubCheckRun = {
        name: "sfdx-scanner",
        head_sha: commit_id,
        status: "completed",
        conclusion: conclusion,
        output: {
          title: "Results from sfdx-scanner",
          summary: `${this.issues.length} violations found`,
          annotations: this.issues,
        },
      };

      this.checkHasHaltingError();

      try {
        await this.performGithubRequest(request);
      } catch (error) {
        console.error(
          "Error when creating check run: " + JSON.stringify(error, null, 2)
        );
      }
    }
  }

  /**
   * @description Translates a violation object into a comment
   *  with a formatted body
   * @param filePath File path that the violation took place in
   * @param violation sfdx-scanner violation
   * @param engine The engine that discovered the violation
   */
  translateViolationToReport(
    filePath: string,
    violation: ScannerViolation,
    engine: string
  ) {
    const violationType = getScannerViolationType(
      this.inputs,
      violation,
      engine
    );
    if (violationType === ERROR) {
      this.hasHaltingError = true;
    }
    let endLine = violation.endLine
      ? parseInt(violation.endLine)
      : parseInt(violation.line);
    let startLine = parseInt(violation.line);
    if (endLine === startLine) {
      endLine++;
    }
    this.issues.push({
      path: filePath,
      start_side: RIGHT,
      annotation_level: "notice",
      start_line: startLine,
      end_line: endLine,
      message: `${violation.category} ${violation.message}\n${violation.url}`,
      title: `${violation.ruleName} (sev: ${violation.severity})`,
    });
  }
}
