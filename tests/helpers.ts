// Shared fixtures for the reporter tests. Not a test file: jest only runs *.test.ts.
import { afterAll, afterEach, beforeEach } from "@jest/globals";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { Context } from "@actions/github/lib/context";
import { PluginInputs } from "../src/common";
import { Finding } from "../src/reporter/findings";
import { ScannerViolation } from "../src/sfdxCli";

export const HEAD_SHA = "a".repeat(40);

export const forkContext = {
  actor: "contributor",
  sha: "b".repeat(40),
  serverUrl: "https://github.com",
  repo: { owner: "upstream", repo: "repo" },
  payload: {
    repository: { full_name: "upstream/repo" },
    pull_request: {
      number: 7,
      head: { sha: HEAD_SHA, repo: { full_name: "contributor/repo" } },
      base: { repo: { full_name: "upstream/repo" } },
    },
  },
} as unknown as Context;

export const sameRepoContext = {
  ...forkContext,
  actor: "maintainer",
  payload: {
    ...forkContext.payload,
    pull_request: {
      ...forkContext.payload.pull_request,
      head: { sha: HEAD_SHA, repo: { full_name: "upstream/repo" } },
    },
  },
} as unknown as Context;

export const permissionError = Object.assign(
  new Error("Resource not accessible by integration"),
  { status: 403 }
);

export const violation = (
  overrides: Partial<ScannerViolation> = {}
): ScannerViolation => ({
  fileName: "force-app/Foo.cls",
  engine: "pmd",
  category: "Documentation",
  column: "1",
  endColumn: "1",
  line: "3",
  endLine: "5",
  message: "Missing ApexDoc",
  ruleName: "ApexDoc",
  severity: 4,
  url: "https://example.com/ApexDoc",
  ...overrides,
});

export const finding = (overrides: Partial<Finding> = {}): Finding => ({
  path: "force-app/Foo.cls",
  startLine: 3,
  endLine: 5,
  level: "warning",
  violationType: "Warning",
  violation: violation(),
  ...overrides,
});

export const inputs: PluginInputs = {
  severityThreshold: 0,
  strictlyEnforcedRules: "",
  deleteResolvedComments: true,
  reportMode: "check-runs",
  target: "",
};

/**
 * @description Captures stdout (where @actions/core writes annotation
 * commands) and the job summary file for each test. Call at the top level of
 * a test file.
 */
export function captureOutput() {
  let stdout: string[] = [];
  let errors: string[] = [];
  let spies: { mockRestore: () => void }[] = [];
  // core.summary caches the file path on first use, so every test shares one file
  const summaryDir = mkdtempSync(join(tmpdir(), "summary-"));
  const summaryFile = join(summaryDir, "summary.md");

  beforeEach(() => {
    stdout = [];
    errors = [];
    spies = [
      jest.spyOn(process.stdout, "write").mockImplementation((chunk) => {
        stdout.push(String(chunk));
        return true;
      }),
      jest.spyOn(console, "log").mockImplementation((...args) => {
        stdout.push(args.join(" ") + "\n");
      }),
      jest.spyOn(console, "error").mockImplementation((...args) => {
        errors.push(args.join(" "));
      }),
    ];
    writeFileSync(summaryFile, "");
    process.env.GITHUB_STEP_SUMMARY = summaryFile;
    process.exitCode = undefined;
  });

  afterEach(() => {
    spies.forEach((spy) => spy.mockRestore());
    delete process.env.GITHUB_STEP_SUMMARY;
    process.exitCode = undefined;
  });

  afterAll(() => {
    rmSync(summaryDir, { recursive: true, force: true });
  });

  return {
    summaryFile,
    log: () => stdout.join(""),
    errors: () => errors,
    summary: () => readFileSync(summaryFile, "utf8"),
    annotations: () =>
      stdout
        .join("")
        .split("\n")
        .filter((l) => /^::(error|warning|notice) /.test(l)),
  };
}
