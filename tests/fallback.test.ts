// `jest` must be the global (not imported) for @swc/jest to hoist jest.mock
import { afterAll, afterEach, beforeEach, describe, expect, it } from "@jest/globals";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { Context } from "@actions/github/lib/context";

const request = jest.fn<(...args: unknown[]) => Promise<unknown>>();
const paginate = jest.fn<(...args: unknown[]) => Promise<unknown>>();
jest.mock("@octokit/action", () => ({
  Octokit: jest.fn().mockImplementation(() => ({ request, paginate })),
}));
jest.mock("@actions/github", () => ({
  context: { repo: { owner: "upstream", repo: "repo" }, payload: {}, sha: "" },
}));

import {
  buildFindingsTable,
  Finding,
  getReadOnlyReason,
  isPermissionDenied,
  MAX_ANNOTATIONS_PER_LEVEL,
  reportWithoutApi,
} from "../src/reporter/fallback";
import { AnnotationsReporter } from "../src/reporter/annoations-reporter";
import { CommentsReporter } from "../src/reporter/comments-reporter";
import { PluginInputs } from "../src/common";
import { ScannerViolation } from "../src/sfdxCli";

const HEAD_SHA = "a".repeat(40);

const forkContext = {
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

const permissionError = Object.assign(
  new Error("Resource not accessible by integration"),
  { status: 403 }
);

const violation = (overrides: Partial<ScannerViolation> = {}): ScannerViolation => ({
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

const finding = (overrides: Partial<Finding> = {}): Finding => ({
  path: "force-app/Foo.cls",
  startLine: 3,
  endLine: 5,
  level: "warning",
  violationType: "Warning",
  violation: violation(),
  ...overrides,
});

const inputs: PluginInputs = {
  severityThreshold: 0,
  strictlyEnforcedRules: "",
  deleteResolvedComments: true,
  reportMode: "check-runs",
  target: "",
};

let stdout: string[];
let spies: { mockRestore: () => void }[];
// core.summary caches the file path on first use, so every test shares one file
const summaryDir = mkdtempSync(join(tmpdir(), "summary-"));
const summaryFile = join(summaryDir, "summary.md");

beforeEach(() => {
  stdout = [];
  spies = [
    jest.spyOn(process.stdout, "write").mockImplementation((chunk) => {
      stdout.push(String(chunk));
      return true;
    }),
    jest.spyOn(console, "log").mockImplementation((...args) => {
      stdout.push(args.join(" ") + "\n");
    }),
    jest.spyOn(console, "error").mockImplementation(() => undefined),
  ];
  writeFileSync(summaryFile, "");
  process.env.GITHUB_STEP_SUMMARY = summaryFile;
  process.exitCode = undefined;
});

afterEach(() => {
  spies.forEach((spy) => spy.mockRestore());
  request.mockReset();
  paginate.mockReset();
  delete process.env.GITHUB_STEP_SUMMARY;
  process.exitCode = undefined;
});

afterAll(() => {
  rmSync(summaryDir, { recursive: true, force: true });
});

const annotationCommands = () =>
  stdout.join("").split("\n").filter((l) => /^::(error|warning|notice) /.test(l));

describe("isPermissionDenied", () => {
  it("matches a 403 for a missing permission", () => {
    expect(isPermissionDenied(permissionError)).toBe(true);
    expect(
      isPermissionDenied({
        status: 403,
        message: "",
        response: { data: { message: "Resource not accessible by integration" } },
      })
    ).toBe(true);
  });

  it("does not match a secondary rate limit or other errors", () => {
    expect(
      isPermissionDenied({
        status: 403,
        message: "You have exceeded a secondary rate limit",
      })
    ).toBe(false);
    expect(isPermissionDenied({ status: 422, message: "Validation Failed" })).toBe(false);
    expect(isPermissionDenied(undefined)).toBe(false);
  });
});

describe("getReadOnlyReason", () => {
  it("names the fork", () => {
    expect(getReadOnlyReason(forkContext, "checks")).toContain(
      "from the fork contributor/repo"
    );
  });

  it("explains Dependabot", () => {
    const context = {
      actor: "dependabot[bot]",
      payload: { pull_request: { head: { repo: { full_name: "a/b" } }, base: { repo: { full_name: "a/b" } } } },
    } as unknown as Context;
    expect(getReadOnlyReason(context, "checks")).toContain("Dependabot");
  });

  it("otherwise asks for the missing permission", () => {
    const context = { actor: "me", payload: {} } as unknown as Context;
    expect(getReadOnlyReason(context, "pull-requests")).toContain(
      "permissions: pull-requests: write"
    );
  });
});

describe("buildFindingsTable", () => {
  it("escapes values that would break the table or render as HTML", () => {
    const table = buildFindingsTable([
      finding({
        violation: violation({ message: "Use List<String> | not\nraw & arrays", url: undefined }),
      }),
    ]);
    expect(table).toContain("Use List&lt;String&gt; \\| not raw &amp; arrays");
    expect(table.split("\n")).toHaveLength(3);
  });

  it("links locations and sorts the most severe first", () => {
    const table = buildFindingsTable(
      [
        finding({ level: "notice", violation: violation({ ruleName: "Low", severity: 5 }) }),
        finding({ level: "failure", violationType: "Error", startLine: 9, endLine: 9 }),
      ],
      "https://github.com/upstream/repo/blob/sha"
    );
    const rows = table.split("\n").slice(2);
    expect(rows[0]).toContain(
      "[force-app/Foo.cls:9](https://github.com/upstream/repo/blob/sha/force-app/Foo.cls#L9)"
    );
    expect(rows[1]).toContain("pmd:Low");
  });
});

describe("reportWithoutApi", () => {
  it("logs the table, writes the job summary and annotates the files", async () => {
    await reportWithoutApi([finding()], "Read-only token.", forkContext);

    const log = stdout.join("");
    expect(log).toContain("Salesforce Code Analyzer: 1 violation found");
    expect(log).toContain("| Warning | 4 |");
    expect(annotationCommands()).toEqual([
      "::warning title=ApexDoc (sev%3A 4),file=force-app/Foo.cls,line=3,endLine=5::Missing ApexDoc%0Ahttps://example.com/ApexDoc",
    ]);

    const written = readFileSync(summaryFile, "utf8");
    expect(written).toContain("Read-only token.");
    expect(written).toContain(
      `https://github.com/upstream/repo/blob/${HEAD_SHA}/force-app/Foo.cls#L3-L5`
    );
  });

  it("caps annotations per level and lists the rest in the summary", async () => {
    const many = Array.from({ length: MAX_ANNOTATIONS_PER_LEVEL + 3 }, (_, i) =>
      finding({ startLine: i + 1, endLine: i + 1 })
    );
    await reportWithoutApi(
      [...many, finding({ level: "failure", violationType: "Error" })],
      "Read-only token.",
      forkContext
    );

    const commands = annotationCommands();
    expect(commands.filter((c) => c.startsWith("::warning"))).toHaveLength(
      MAX_ANNOTATIONS_PER_LEVEL
    );
    expect(commands.filter((c) => c.startsWith("::error"))).toHaveLength(1);
    const written = readFileSync(summaryFile, "utf8");
    expect(written).toContain("3 more are listed below");
    expect(written.match(/^\| Warning /gm)).toHaveLength(MAX_ANNOTATIONS_PER_LEVEL + 3);
  });

  it("still logs when there is no job summary", async () => {
    delete process.env.GITHUB_STEP_SUMMARY;
    await reportWithoutApi([finding()], "Read-only token.", forkContext);
    expect(stdout.join("")).toContain("1 violation found");
    expect(readFileSync(summaryFile, "utf8")).toBe("");
  });
});

describe("reporters on a read-only token", () => {
  it("check-runs mode falls back when the check run is denied", async () => {
    request.mockRejectedValue(permissionError);
    const reporter = new AnnotationsReporter({ context: forkContext, inputs });
    reporter.translateViolationToReport("force-app/Foo.cls", violation(), "pmd");

    await reporter.write();

    expect(request).toHaveBeenCalledTimes(1);
    expect(annotationCommands()).toHaveLength(1);
    expect(readFileSync(summaryFile, "utf8")).toContain(
      "from the fork contributor/repo"
    );
  });

  it("comments mode stops after the first denied comment and skips deletions", async () => {
    paginate.mockResolvedValue([
      { id: 1, line: 1, path: "old.cls", body: "<!--sfdx-scanner--> stale", user: { type: "Bot" } },
    ]);
    request.mockRejectedValue(permissionError);
    const reporter = new CommentsReporter({
      context: forkContext,
      inputs: { ...inputs, reportMode: "comments" },
    });
    reporter.translateViolationToReport("force-app/Foo.cls", violation(), "pmd", { start: 3, end: 4 });
    reporter.translateViolationToReport(
      "force-app/Foo.cls",
      violation({ line: "8", endLine: "8", ruleName: "Other" }),
      "pmd",
      { start: 8, end: 8 }
    );

    await reporter.write();

    // One denied POST, no further POSTs and no DELETE
    expect(request).toHaveBeenCalledTimes(1);
    expect(String(request.mock.calls[0][0])).toMatch(/^POST /);
    expect(annotationCommands()).toHaveLength(2);
    expect(readFileSync(summaryFile, "utf8")).toContain("2 violations found");
  });

  it("strictly enforced findings still fail the action", async () => {
    request.mockRejectedValue(permissionError);
    const reporter = new AnnotationsReporter({
      context: forkContext,
      inputs: { ...inputs, severityThreshold: 4 },
    });
    reporter.translateViolationToReport("force-app/Foo.cls", violation(), "pmd");

    await reporter.write();

    expect(process.exitCode).toBe(1);
    expect(annotationCommands().some((c) => c.startsWith("::error title=ApexDoc"))).toBe(true);
  });
});
