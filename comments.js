const { ERROR, RIGHT, WARNING } = require("./common");

const core = require("@actions/core");

const COMMENT_HEADER = `| Engine | Category | Rule | Severity | Type |
| --- | --- | --- | --- | --- |`;

class Comments {
  constructor({ gitHubRestApiClient }) {
    this.gitHubRestApiClient = gitHubRestApiClient;
    this.hasHaltingError = false;
    this.comments = [];
  }

  /**
   * @description Writes the relevant comments to the GitHub pull request.
   * Uses the octokit to post the comments to the PR.
   */
  async write() {
    console.log("Writing comments using GitHub REST API...");
    const { octokit, owner, prNumber, repo } = this.gitHubRestApiClient;
    const existingComments = await this.getExistingComments();

    for (let comment of this.comments) {
      // TODO: Add in resolving comments when the issue has been resolved?
      console.log({comment});
      const existingComment = existingComments.find((existingComment) =>
        this.matchComment(comment, existingComment)
      );
      if (!existingComment) {
        const method = `POST /repos/${owner}/${repo}/pulls/${prNumber}/comments`;
        await octokit.request(method, comment);
      } else {
        console.log(`Skipping existing comment ${existingComment.url}`);
      }
    }

    if (this.hasHaltingError === true) {
      core.setFailed("A serious error has been identified");
    }
  }

  async getExistingComments() {
    console.log("Getting existing comments using GitHub REST API...");
    const { octokit, owner, prNumber, repo } = this.gitHubRestApiClient;

    const method = `GET /repos/${owner}/${repo}/pulls/${prNumber}/comments`;
    return await octokit.paginate(method);
  }

  matchComment(commentA, commentB) {
    return (
      commentA.line === commentB.line &&
      commentA.body === commentB.body &&
      commentA.path === commentB.path
    );
  }

  /**
   * @description Translates a violation object into a comment
   * with a formatted body
   * @param {string} filePath path to the file
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
    this.comments.push({
      commit_id: this.pullRequest?.head?.sha,
      path: filePath,
      start_line: startLine,
      start_side: RIGHT,
      side: RIGHT,
      line: endLine,
      body: `${COMMENT_HEADER}
| ${engine} | ${violation.category} | ${violation.ruleName} | ${violation.severity} | ${type} |

[${violation.message}](${violation.url})`,
    });
  }
}

module.exports = { Comments };
