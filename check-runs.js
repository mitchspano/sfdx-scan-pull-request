const { ERROR, RIGHT, WARNING } = require("./common");

class CheckRuns {
  constructor({ gitHubRestApiClient, inputs }) {
    this.gitHubRestApiClient = gitHubRestApiClient;
    this.inputs = inputs;
    this.hasHaltingError = false;
    this.annotations = {};
  }

  async write() {
    console.log("Creating Check Runs using GitHub REST API...");
    const { octokit, owner, repo } = this.gitHubRestApiClient;

    const method = `POST /repos/${owner}/${repo}/check-runs`;

    let conclusion;
    if (this.hasHaltingError) {
      conclusion = "failure";
    } else {
      conclusion = this.annotations.length === 0 ? "success" : "neutral";
    }

    if (this.annotations) {
      const request = {
        name: "sfdx-scanner",
        head_sha: this.inputs.commitSha,
        status: "completed",
        // action_required, cancelled, failure, neutral, success, skipped, stale, timed_out
        conclusion: conclusion,
        output: {
          title: "Results from sfdx-scanner",
          summary: `${this.annotations.length} violations found`,
          annotations: this.annotations,
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
    let type = violation.isHalting ? ERROR : WARNING;
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
    this.annotations.push({
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

module.exports = { CheckRuns };
