import {
  ERROR,
  getScannerViolationType,
  GithubAnnotation,
  GithubCheckRun,
  RIGHT,
} from "../common";
import { Octokit } from "@octokit/action";
import { context } from "@actions/github";
import { BaseReporter } from "./reporter.types";
import { ScannerViolation } from "../sfdxCli";

export class AnnotationsReporter extends BaseReporter<GithubAnnotation> {
  private performGithubRequest<T>(body: GithubCheckRun) {
    const octokit = new Octokit();
    const owner = context.repo.owner;
    const repo = context.repo.repo;

    const endpoint = `POST /repos/${owner}/${repo}/check-runs`;

    return octokit.request(endpoint, body) as Promise<T>;
  }
  async write() {
    console.log("Creating Check Runs using GitHub REST API...");

    // TODO: Change
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

      await this.performGithubRequest(request);
    }
  }

  translate(filePath: string, violation: ScannerViolation, engine: string) {
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
    return { violationType };
  }
}
