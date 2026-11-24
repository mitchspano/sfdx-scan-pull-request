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

import parse from "parse-diff";
import { closeSync, mkdtempSync, openSync, readFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { context } from "@actions/github";
import { execFileSync } from "child_process";

export type GithubPullRequest = typeof context.payload.pull_request | undefined;

// Full SHA-1 or SHA-256 object names
const COMMIT_SHA = /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/;

function assertValidSha(sha: string, label: string) {
  if (!COMMIT_SHA.test(sha ?? "")) {
    throw new Error(`Invalid ${label} commit SHA: ${JSON.stringify(sha)}`);
  }
}

function hasCommit(sha: string, cwd: string) {
  try {
    execFileSync("git", ["cat-file", "-e", `${sha}^{commit}`], {
      cwd,
      stdio: "ignore",
    });
    return true;
  } catch {
    return false;
  }
}

/**
 * @description Fetches the base and head commits with their history when they
 * are not available, e.g. after a default `fetch-depth: 1` checkout. GitHub
 * serves any reachable commit by SHA, including a fork's head commit via
 * `refs/pull/<number>/head`.
 */
function ensureCommitsAvailable(baseSha: string, headSha: string, cwd: string) {
  const isShallow =
    execFileSync("git", ["rev-parse", "--is-shallow-repository"], { cwd })
      .toString()
      .trim() === "true";
  if (!isShallow && hasCommit(baseSha, cwd) && hasCommit(headSha, cwd)) {
    return;
  }
  console.log("Fetching the pull request commits and their history...");
  const args = ["fetch", "--no-tags", "--no-recurse-submodules", "--quiet"];
  if (isShallow) {
    // A merge base is needed for the diff, so the full history is required
    args.push("--unshallow");
  }
  try {
    execFileSync("git", [...args, "origin", baseSha, headSha], {
      cwd,
      stdio: ["ignore", "ignore", "inherit"],
    });
  } catch {
    // Reported below with a clearer message
  }
  for (const [sha, label] of [
    [baseSha, "base"],
    [headSha, "head"],
  ]) {
    if (!hasCommit(sha, cwd)) {
      throw new Error(
        `The ${label} commit ${sha} is not in the local repository and could not be fetched. ` +
          "Check out the repository with `fetch-depth: 0`."
      );
    }
  }
}

/**
 * @description Calculates the diff for all files within the pull request and
 * populates a map of filePath -> Set of changed line numbers.
 *
 * Diffs commit SHAs rather than branch names: the head branch of a pull
 * request from a fork does not exist in the base repository, and branch names
 * are chosen by the pull request author, so they must never reach a shell.
 * Both commits are present after `actions/checkout` with `fetch-depth: 0`,
 * because the checked-out merge commit has the head commit as a parent;
 * otherwise they are fetched from `origin`.
 */
export async function getDiffInPullRequest(
  baseSha: string,
  headSha: string,
  cwd = process.cwd()
) {
  console.log("Getting difference within the pull request ...", {
    baseSha,
    headSha,
  });
  assertValidSha(baseSha, "base");
  assertValidSha(headSha, "head");
  ensureCommitsAvailable(baseSha, headSha, cwd);

  /**
   * Keeping git diff output in memory throws `code: 'ENOBUFS'` error when
   * called from within action. Writing to file, then reading avoids this error.
   */
  const outDir = mkdtempSync(join(tmpdir(), "pr-diff-"));
  const outFile = join(outDir, "diff.txt");
  let diff: string;
  try {
    const fd = openSync(outFile, "w");
    try {
      execFileSync("git", ["diff", `${baseSha}...${headSha}`], {
        cwd,
        stdio: ["ignore", fd, "inherit"],
      });
    } finally {
      closeSync(fd);
    }
    diff = readFileSync(outFile, "utf8");
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }

  const files = parse(diff);
  const filePathToChangedLines = new Map<string, Set<number>>();
  for (let file of files) {
    if (file.to && file.to !== "/dev/null") {
      const changedLines = new Set<number>();
      for (let chunk of file.chunks) {
        for (let change of chunk.changes) {
          // Only added lines have line numbers in the new file; a deleted
          // line's number refers to the old file.
          if (change.type === "add") {
            changedLines.add(change.ln);
          }
        }
      }
      filePathToChangedLines.set(file.to, changedLines);
    }
  }
  return filePathToChangedLines;
}
