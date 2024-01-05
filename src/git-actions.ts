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
import fs from "fs";
import { context } from "@actions/github";
import { execSync } from "child_process";

const DIFF_OUTPUT = "diffBetweenCurrentAndParentBranch.txt";

export type GithubPullRequest = typeof context.payload.pull_request | undefined;

/**
 * @description Calculates the diff for all files within the pull request and
 * populates a map of filePath -> Set of changed line numbers
 */
export async function getDiffInPullRequest(
  baseRef: string,
  headRef: string,
  destination?: string
) {
  console.log("Getting difference within the pull request ...", {
    baseRef,
    headRef,
  });
  if (destination) {
    execSync(`git remote add -f destination ${destination}`);
    execSync(`git remote update`);
  }
  /**
   * Keeping git diff output in memory throws `code: 'ENOBUFS'`  error when
   * called from within action. Writing to file, then reading avoids this error.
   */
  execSync(
    `git diff "destination/${baseRef}"..."origin/${headRef}" > ${DIFF_OUTPUT}`
  );
  const files = parse(fs.readFileSync(DIFF_OUTPUT).toString());
  const filePathToChangedLines = new Map<string, Set<number>>();
  for (let file of files) {
    if (file.to && file.to !== "/dev/null") {
      const changedLines = new Set<number>();
      for (let chunk of file.chunks) {
        for (let change of chunk.changes) {
          if (change.type === "add" || change.type === "del") {
            changedLines.add(change.ln);
          }
        }
      }
      filePathToChangedLines.set(file.to, changedLines);
    }
  }
  return filePathToChangedLines;
}
