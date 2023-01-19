import parse, { AddChange, ChangeType, DeleteChange } from "parse-diff";
import { simpleGit } from "simple-git";
import { context } from "@actions/github";

const DESTINATION_REMOTE_NAME = "destination";

export type GithubPullRequest = typeof context.payload.pull_request | undefined;

export const git = simpleGit({
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
});

/**
 * @description Calculates the diff for all files within the pull request and
 * populates a map of filePath -> Set of changed line numbers
 */
export async function getDiffInPullRequest(
  diffArgs: string[],
  destination?: string
) {
  const filePathToChangedLines = new Map<string, Set<number>>();
  console.log("Getting difference within the pull request...");
  if (destination) {
    await git.addRemote(DESTINATION_REMOTE_NAME, destination);
    await git.remote(["update"]);
  }

  diffArgs = diffArgs.map(
    (diffArg, index) =>
      `${index === 0 ? "origin" : DESTINATION_REMOTE_NAME}/${diffArg}`
  );

  const diffString = await git.diff(diffArgs);
  const files = parse(diffString);

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
