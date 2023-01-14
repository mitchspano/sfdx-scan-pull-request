import { expect, it, describe } from "@jest/globals";
import { execSync } from "child_process";
import { writeFileSync, unlinkSync } from "fs";

import { git, getDiffInPullRequest } from "../src/git-actions";

const testFilePath = "github-test-file";

describe("Git action tests", () => {
  it("returns diff info successfully", async () => {
    writeFileSync(testFilePath, "some data to write");
    git.add(testFilePath);

    const diff = await getDiffInPullRequest([
      `origin/${execSync("git rev-parse --abbrev-ref HEAD").toString().trim()}`,
    ]);

    const newLines = diff.get(testFilePath);
    expect(newLines).toBeTruthy();
    expect(newLines?.size).toBeGreaterThan(0);

    unlinkSync(testFilePath);
    git.add(testFilePath);
  });

  it("adds remote origin", async () => {
    await getDiffInPullRequest(
      [],
      "https://github.com/mitchspano/sfdx-scan-pull-request.git"
    );

    expect(
      (await git.getRemotes()).filter((remote) => remote.name === "destination")
    ).toBeTruthy();

    git.removeRemote("destination");
  });
});
