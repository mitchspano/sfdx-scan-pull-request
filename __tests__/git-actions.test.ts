import { expect, it, describe } from "@jest/globals";
import { execSync } from "child_process";
import { writeFileSync, unlinkSync } from "fs";

import { git, getDiffInPullRequest } from "../src/git-actions";

describe("Git action tests", () => {
  it("returns diff info successfully", async () => {
    const testFilePath = "github-test-file";

    writeFileSync(testFilePath, "some data to write");
    git.add(testFilePath);

    const diff = await getDiffInPullRequest([
      execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),
    ]);

    const newLines = diff.get(testFilePath);
    expect(newLines).toBeTruthy();
    expect(newLines?.size).toBeGreaterThan(0);

    unlinkSync(testFilePath);
    git.add(testFilePath);
  });

  it("adds remote origin & properly points PR args to git remotes", async () => {
    try {
      await git.removeRemote("destination");
    } catch (_) {
      // no-op
    }
    const pullRequestArgs = ["main", "main"];

    await getDiffInPullRequest(
      pullRequestArgs,
      "https://github.com/mitchspano/sfdx-scan-pull-request.git"
    );

    expect(
      (await git.getRemotes()).filter((remote) => remote.name === "destination")
    ).toBeTruthy();
    await git.removeRemote("destination");
  });
});
