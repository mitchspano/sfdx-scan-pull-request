import { ERROR, isHaltingViolation, RIGHT, WARNING } from "./index";

export class CheckRuns {
  constructor({ gitHubRestApiClient, comments, inputs }) {
    this.gitHubRestApiClient = gitHubRestApiClient;
    this.comments = comments;
    this.inputs = inputs;
    this.hasHaltingError = false;
  }

  async write() {
    console.log("Creating Check Runs using GitHub REST API...");
    const { octokit, owner, repo } = this.gitHubRestApiClient;

    const method = `POST /repos/${owner}/${repo}/check-runs`; // /repos/{owner}/{repo}/check-runs
    const annotations = Object.values(this.comments).flat();

    if (annotations) {
      const request = {
        name: "sfdx-scanner",
        head_sha: this.inputs.commitSha,
        status: "completed",
        conclusion: "neutral",
        output: {
          title: "Results from sfdx-scanner",
          summary: `${annotations.length} violations found`,
          annotations: annotations,
        },
      };

      await octokit.request(method, request);
    }
  }

  /**
   * @description Translates a violation object into a comment
   * with a formatted body
   * @param {Violation} violation Violation from the sfdx scanner
   * @param {String} engine Engine from the sfdx scanner
   * @returns Comment
   */
  translate(filePath, violation, engine) {
    let type = isHaltingViolation(violation, engine) ? ERROR : WARNING;
    if (type === ERROR) {
      this.hasHaltingError = true;
    }
    let endLine = violation.endLine
      ? parseInt(violation.endLine)
      : parseInt(violation.line);
    let startLine = parseInt(violation.line);
    if (endLine === startLine) {
      endLine++;
    }
    return {
      path: filePath,
      start_side: RIGHT,
      annotation_level: "notice",
      start_line: startLine,
      end_line: endLine,
      message: `${violation.category} ${violation.message}\n${violation.url}`,
      title: `${violation.ruleName} (sev: ${violation.severity})`,
    };
  }
}
