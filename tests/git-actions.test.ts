import { expect, it, describe } from "@jest/globals";
import { execSync } from "child_process";
import { writeFileSync, unlinkSync } from "fs";

import { getDiffInPullRequest } from "../src/git-actions";

// useful for local testing; omitted via CI runs due to ambiguous references
describe.skip("Git action tests", () => {
  it("returns diff info successfully", async () => {
    const testFilePath = "github-test-file";

    writeFileSync(testFilePath, "some data to write");
    execSync(`git add ${testFilePath}`);

    const diff = await getDiffInPullRequest([
      execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),
    ]);

    const newLines = diff.get(testFilePath);

    try {
      expect(newLines).toBeTruthy();
      expect(newLines?.size).toBeGreaterThan(0);
    } catch (_) {
      throw _;
    } finally {
      unlinkSync(testFilePath);
      execSync(`git add ${testFilePath}`);
    }
  });

  const fiftySecondsRunTime = 50 * 1000;

  it(
    "adds remote origin & properly points PR args to git remotes",
    async () => {
      const removeRemote = () => {
        try {
          execSync("git remote remove destination");
        } catch (_) {
          // no-op
        }
      };

      removeRemote();
      const pullRequestArgs = ["main", "main"];
      await getDiffInPullRequest(
        pullRequestArgs,
        "https://github.com/mitchspano/sfdx-scan-pull-request.git"
      );

      const remotes = execSync("git remote").toString();

      expect(remotes.indexOf("destination") > -1).toBeTruthy();
      removeRemote();
    },
    fiftySecondsRunTime
  );
});
