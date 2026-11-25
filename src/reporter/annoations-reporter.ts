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

import { getAnnotationLevel, getScannerViolationType } from "../common";
import { Octokit } from "@octokit/action";
import { context } from "@actions/github";
import {
  BaseReporter,
  GithubAnnotation,
  GithubCheckRun,
} from "./reporter.types";
import { ScannerViolation } from "../sfdxCli";
import {
  getReadOnlyReason,
  isPermissionDenied,
  reportWithoutApi,
} from "./fallback";

export const ERROR = "Error";
export const RIGHT = "RIGHT";
// GitHub accepts at most 50 annotations per check-run request
const MAX_ANNOTATIONS_PER_REQUEST = 50;

/**
 * @description A check run created moments ago can briefly 404 on update,
 * so retry a few times with a growing delay before giving up.
 */
export async function retryOnNotFound<T>(
  request: () => Promise<T>,
  attempts = 5,
  delayMs = 1000
): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await request();
    } catch (error) {
      if ((error as { status?: number }).status !== 404 || attempt >= attempts) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs * attempt));
    }
  }
}

export class AnnotationsReporter extends BaseReporter<GithubAnnotation> {
  /**
   * @description Executes the REST request to submit the Check Run to GitHub
   * @param body
   * @private
   */
  private async performGithubRequest(body: GithubCheckRun) {
    const octokit = new Octokit();
    const owner = context.repo.owner;
    const repo = context.repo.repo;
    const annotations = body.output.annotations;

    const { data } = await octokit.request(
      `POST /repos/${owner}/${repo}/check-runs`,
      {
        ...body,
        output: {
          ...body.output,
          annotations: annotations.slice(0, MAX_ANNOTATIONS_PER_REQUEST),
        },
      }
    );
    // Updating a check run appends annotations rather than replacing them
    for (
      let i = MAX_ANNOTATIONS_PER_REQUEST;
      i < annotations.length;
      i += MAX_ANNOTATIONS_PER_REQUEST
    ) {
      const update = () =>
        octokit.request(
          `PATCH /repos/${owner}/${repo}/check-runs/${data.id}`,
          {
            output: {
              title: body.output.title,
              summary: body.output.summary,
              annotations: annotations.slice(
                i,
                i + MAX_ANNOTATIONS_PER_REQUEST
              ),
            },
          }
        );
      await retryOnNotFound(update);
    }
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
          title: "Results from Salesforce Code Analyzer",
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
        // Any failure would otherwise lose the findings, so report them anyway
        this.summaryNotes.push(
          ...reportWithoutApi(
            this.findings,
            `Couldn't create the check run: ${
              isPermissionDenied(error)
                ? getReadOnlyReason(this.context, "checks")
                : (error as Error).message
            }`
          )
        );
      }
    }
  }

  /**
   * @description Translates a violation object into a comment
   *  with a formatted body
   * @param filePath File path that the violation took place in
   * @param violation Code Analyzer violation
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
    this.recordFinding(filePath, violation, violationType);
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
      annotation_level: getAnnotationLevel(violationType, violation.severity),
      start_line: startLine,
      end_line: endLine,
      message: `${violation.category} ${violation.message}${violation.url ? `\n${violation.url}` : ""}`,
      title: `${violation.ruleName} (sev: ${violation.severity})`,
    });
  }
}
