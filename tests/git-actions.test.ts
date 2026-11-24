import { expect, it, describe, beforeAll, afterAll } from "@jest/globals";
import { execFileSync } from "child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

import { getDiffInPullRequest } from "../src/git-actions";

const git = (cwd: string, ...args: string[]) =>
  execFileSync("git", args, {
    cwd,
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: "test",
      GIT_AUTHOR_EMAIL: "test@example.com",
      GIT_COMMITTER_NAME: "test",
      GIT_COMMITTER_EMAIL: "test@example.com",
    },
  })
    .toString()
    .trim();

const commitFile = (cwd: string, file: string, content: string) => {
  writeFileSync(join(cwd, file), content);
  git(cwd, "add", file);
  git(cwd, "commit", "-q", "-m", `update ${file}`);
  return git(cwd, "rev-parse", "HEAD");
};

describe("getDiffInPullRequest", () => {
  let root: string;
  let checkout: string;
  let baseSha: string;
  let headSha: string;

  // upstream <- fork; the PR branch exists only in the fork.
  // checkout mimics actions/checkout of refs/pull/1/merge with fetch-depth: 0.
  beforeAll(() => {
    root = mkdtempSync(join(tmpdir(), "git-actions-test-"));
    const upstream = join(root, "upstream");
    const fork = join(root, "fork");
    checkout = join(root, "checkout");

    git(root, "init", "-q", "-b", "main", upstream);
    commitFile(upstream, "Existing.cls", "line 1\nline 2\nline 3\n");

    git(root, "clone", "-q", upstream, fork);
    // A branch name a PR author could pick to attempt command injection
    git(fork, "checkout", "-q", "-b", "x$(touch${IFS}pwned)");
    commitFile(fork, "Existing.cls", "line 1\nchanged\nline 3\n");
    headSha = commitFile(fork, "Added.cls", "a\nb\n");

    // The base moves on after the PR was opened
    baseSha = git(upstream, "rev-parse", "HEAD");
    commitFile(upstream, "Unrelated.cls", "unrelated\n");

    // GitHub exposes the fork's commits on the upstream as refs/pull/1/head
    git(upstream, "fetch", "-q", fork, `${headSha}:refs/pull/1/head`);
    git(root, "clone", "-q", upstream, checkout);
    git(checkout, "fetch", "-q", "origin", "refs/pull/1/head");
    git(checkout, "checkout", "-q", "--detach", "FETCH_HEAD");
  });

  afterAll(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it("diffs a fork PR by commit SHA, without its head branch", async () => {
    const diff = await getDiffInPullRequest(baseSha, headSha, checkout);

    expect([...diff.keys()].sort()).toEqual(["Added.cls", "Existing.cls"]);
    expect([...diff.get("Existing.cls")!]).toEqual([2]);
    expect([...diff.get("Added.cls")!]).toEqual([1, 2]);
  });

  it("does not leave files in the workspace", async () => {
    const before = readdirSync(checkout).sort();
    await getDiffInPullRequest(baseSha, headSha, checkout);
    expect(readdirSync(checkout).sort()).toEqual(before);
    expect(existsSync(join(checkout, "pwned"))).toBe(false);
  });

  it.each([
    "main",
    "x$(touch pwned)",
    "--output=/tmp/pwned",
    `${"a".repeat(40)};touch pwned`,
    undefined,
  ])("rejects a non-SHA ref: %s", async (ref) => {
    await expect(
      getDiffInPullRequest(baseSha, ref as string, checkout)
    ).rejects.toThrow("Invalid head commit SHA");
    expect(existsSync(join(checkout, "pwned"))).toBe(false);
  });

  it("explains how to fix a missing commit", async () => {
    await expect(
      getDiffInPullRequest("f".repeat(40), headSha, checkout)
    ).rejects.toThrow("fetch-depth: 0");
  });
});
