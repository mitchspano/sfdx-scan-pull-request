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

import { getGithubFilePath, getScannerViolationType } from "../common";

import core from "@actions/core";
import { Octokit } from "@octokit/action";
import { context } from "@actions/github";
import {
  BaseReporter,
  GithubComment,
  GithubExistingComment,
} from "./reporter.types";
import { ScannerViolation } from "../sfdxCli";

const HIDDEN_COMMENT_PREFIX = "<!--sfdx-scanner-->";

export class CommentsReporter extends BaseReporter<GithubComment> {
  private performGithubRequest<T>(
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

  private async performGithubDeleteRequest(comment: GithubExistingComment) {
    const octokit = new Octokit();
    const owner = context.repo.owner;
    const repo = context.repo.repo;
    const endpoint = `DELETE /repos/${owner}/${repo}/pulls/comments/${comment.id}`;
    await octokit.request(endpoint);
  }

  /**
   * @description Writes the relevant comments to the GitHub pull request.
   * Uses the octokit to post the comments to the PR.
   */
  async write() {
    console.log("Writing comments using GitHub REST API...");
    const existingComments = await this.getExistingComments();

    for (let comment of this.issues) {
      const existingComment = existingComments.find((existingComment) =>
        this.matchComment(comment, existingComment)
      );
      if (!existingComment) {
        await this.performGithubRequest("POST", comment);
      } else {
        console.log(`Skipping existing comment ${existingComment.url}`);
      }
    }

    if (this.hasHaltingError === true) {
      core.setFailed("A serious error has been identified");
    }

    if (this.inputs.deleteResolvedComments) {
      await this.deleteResolvedComments(this.issues, existingComments);
    }
  }

  // Can only delete comments via REST instead of resolving
  async deleteResolvedComments(newComments: any[], existingComments: any[]) {
    // Get all existing comments that are *not* in the new comments
    const resolvedComments = existingComments.filter(
      (existingComment) =>
        !newComments.find((newComment) =>
          this.matchComment(existingComment, newComment)
        )
    );

    for (let comment of resolvedComments) {
      if (comment.id) {
        console.log(
          `Removing the comment because the issue appears to be resolved: Id: ${comment.id}, File: ${comment?.path}, Body: ${comment.body}`
        );
        // This shouldn't use Promise.all() or there may be issues with GH API limits
        await this.performGithubDeleteRequest(comment);
      }
    }
  }

  async getExistingComments() {
    console.log("Getting existing comments using GitHub REST API...");
    return (
      await this.performGithubRequest<GithubExistingComment[]>("GET")
    ).filter(
      (comment) =>
        comment.body.includes(HIDDEN_COMMENT_PREFIX) &&
        comment.user.type === "Bot"
    );
  }

  matchComment(commentA: GithubComment, commentB: GithubComment) {
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

  translateViolationToReport(filePath: string, violation: ScannerViolation, engine: string) {
    const startLine = parseInt(violation.line);
    let endLine = violation.endLine
      ? parseInt(violation.endLine)
      : parseInt(violation.line);
    if (endLine === startLine) {
      endLine++;
    }

    const violationType = getScannerViolationType(
      this.inputs,
      violation,
      engine
    );
    const commit_id = this.context.payload.pull_request
      ? this.context.payload.pull_request.head.sha
      : this.context.sha;

    const commentHeader = `${HIDDEN_COMMENT_PREFIX}
  | Engine | Category | Rule | Severity | Type | Message | File |
  | --- | --- | --- | --- | --- | --- | --- |`;
    this.issues.push({
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
    });
    return { violationType };
  }
}
