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
  getReadOnlyReason,
  isPermissionDenied,
  MAX_ANNOTATIONS_PER_LEVEL,
  reportWithoutApi,
} from "../src/reporter/fallback";
import { Finding } from "../src/reporter/findings";
import { buildJobSummary, writeJobSummary } from "../src/reporter/job-summary";
import { filterFindingsToDiffScope } from "../src/diff-scope";
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

  it("sorts the most severe first", () => {
    const rows = buildFindingsTable([
      finding({ level: "notice", violation: violation({ ruleName: "Low", severity: 5 }) }),
      finding({ level: "failure", violationType: "Error", startLine: 9, endLine: 9 }),
    ])
      .split("\n")
      .slice(2);
    expect(rows[0]).toContain("force-app/Foo.cls:9");
    expect(rows[1]).toContain("pmd:Low");
  });
});

describe("buildJobSummary", () => {
  const summaryOf = (findings: Finding[], notes: string[] = []) =>
    buildJobSummary(findings, forkContext, "on changed lines", notes);

  it("groups findings into a collapsible section per file", () => {
    const md = summaryOf([
      finding({ path: "b/Warn.cls", startLine: 9, endLine: 9 }),
      finding({ path: "b/Warn.cls", startLine: 2, endLine: 4 }),
      finding({ path: "a/Error.cls", level: "failure", violationType: "Error" }),
    ]);

    expect(md).toContain("**3 violations** on changed lines in 2 files: 1 error, 2 warnings.");
    const sections = md.split("<details>").slice(1);
    // Files with errors first, then each file's findings in line order
    expect(sections[0]).toContain("<summary><code>a/Error.cls</code>: 1 error</summary>");
    expect(sections[1]).toContain("<summary><code>b/Warn.cls</code>: 2 warnings</summary>");
    expect(sections[1].indexOf("Warn.cls#L2-L4")).toBeLessThan(
      sections[1].indexOf("Warn.cls#L9)")
    );
    // GitHub only renders markdown inside <details> after a blank line
    expect(sections[1]).toMatch(/<\/summary>\n\n\| Lines /);
    expect(sections[1]).toMatch(/\|\n\n<\/details>/);
  });

  it("links lines to the file at the head commit and escapes paths", () => {
    const md = summaryOf([finding({ path: "force-app/<odd> name.cls" })]);
    expect(md).toContain(
      `[3-5](https://github.com/upstream/repo/blob/${HEAD_SHA}/force-app/%3Codd%3E%20name.cls#L3-L5)`
    );
    expect(md).toContain("<code>force-app/&lt;odd&gt; name.cls</code>");
  });

  it("includes notes and says when there are no findings", () => {
    const md = summaryOf([], ["Read-only token."]);
    expect(md).toContain("No violations on changed lines.");
    expect(md).toContain("Read-only token.");
    expect(md).not.toContain("<details>");
  });
});

describe("reportWithoutApi", () => {
  it("logs the table and annotates the files", () => {
    const notes = reportWithoutApi([finding()], "Read-only token.");

    const log = stdout.join("");
    expect(log).toContain("Salesforce Code Analyzer: 1 violation found");
    expect(log).toContain("| Warning | 4 |");
    expect(annotationCommands()).toEqual([
      "::warning title=ApexDoc (sev%3A 4),file=force-app/Foo.cls,line=3,endLine=5::Missing ApexDoc%0Ahttps://example.com/ApexDoc",
    ]);
    expect(notes).toEqual(["Results could not be posted to the pull request. Read-only token."]);
  });

  it("caps annotations per level and notes how many were left out", () => {
    const many = Array.from({ length: MAX_ANNOTATIONS_PER_LEVEL + 3 }, (_, i) =>
      finding({ startLine: i + 1, endLine: i + 1 })
    );
    const failures = many.map((f) => ({ ...f, level: "failure" as const, violationType: "Error" as const }));
    const notes = reportWithoutApi([...many, ...failures], "Read-only token.");

    const commands = annotationCommands();
    expect(commands.filter((c) => c.startsWith("::warning"))).toHaveLength(
      MAX_ANNOTATIONS_PER_LEVEL
    );
    // One error slot is left for the action's own setFailed message
    expect(commands.filter((c) => c.startsWith("::error"))).toHaveLength(
      MAX_ANNOTATIONS_PER_LEVEL - 1
    );
    expect(notes[1]).toContain("so 7 findings are only listed below");
  });
});

const summaryWritten = () => readFileSync(summaryFile, "utf8");

describe("job summary", () => {
  it("is written when the check run is created", async () => {
    request.mockResolvedValue({ data: { id: 1 } });
    const reporter = new AnnotationsReporter({ context: forkContext, inputs });
    reporter.translateViolationToReport("force-app/Foo.cls", violation(), "pmd");

    await reporter.write();
    await reporter.writeSummary();

    expect(summaryWritten()).toContain("**1 violation** on changed lines in 1 file");
    expect(summaryWritten()).not.toContain("could not be posted");
    expect(annotationCommands()).toHaveLength(0);
  });

  it("is written when there are no findings", async () => {
    request.mockResolvedValue({ data: { id: 1 } });
    const reporter = new AnnotationsReporter({ context: forkContext, inputs });

    await reporter.write();
    await reporter.writeSummary();

    expect(summaryWritten()).toContain("No violations on changed lines.");
  });

  it("names the target outside a pull request", async () => {
    const reporter = new AnnotationsReporter({
      context: forkContext,
      inputs: { ...inputs, target: "force-app" },
    });
    await reporter.writeSummary();
    expect(summaryWritten()).toContain("No violations in `force-app`.");
  });

  it("is skipped when the runner has no summary file", async () => {
    delete process.env.GITHUB_STEP_SUMMARY;
    await writeJobSummary([finding()], forkContext, "on changed lines");
    expect(summaryWritten()).toBe("");
  });

  it("only lists violations that span a changed line", async () => {
    request.mockResolvedValue({ data: { id: 1 } });
    const reporter = new CommentsReporter({
      context: forkContext,
      inputs: { ...inputs, reportMode: "comments" },
    });
    paginate.mockResolvedValue([]);
    const changedLines = new Map([["force-app/Foo.cls", new Set([4, 20])]]);

    filterFindingsToDiffScope(
      [
        violation({ ruleName: "Spans", line: "3", endLine: "5" }),
        violation({ ruleName: "Starts", line: "20", endLine: "25" }),
        violation({ ruleName: "Before", line: "1", endLine: "3" }),
        violation({ ruleName: "Between", line: "6", endLine: "19" }),
        violation({ ruleName: "OtherFile", fileName: "force-app/Bar.cls", line: "4", endLine: "4" }),
      ],
      changedLines,
      inputs,
      reporter
    );
    await reporter.write();
    await reporter.writeSummary();

    const md = summaryWritten();
    expect(md).toContain("**2 violations** on changed lines in 1 file");
    expect(md).toContain("pmd:Spans");
    expect(md).toContain("pmd:Starts");
    expect(md).not.toMatch(/pmd:(Before|Between|OtherFile)/);
  });
});

describe("reporters on a read-only token", () => {
  it("check-runs mode falls back when the check run is denied", async () => {
    request.mockRejectedValue(permissionError);
    const reporter = new AnnotationsReporter({ context: forkContext, inputs });
    reporter.translateViolationToReport("force-app/Foo.cls", violation(), "pmd");

    await reporter.write();
    await reporter.writeSummary();

    expect(request).toHaveBeenCalledTimes(1);
    expect(annotationCommands()).toHaveLength(1);
    expect(summaryWritten()).toContain("from the fork contributor/repo");
    expect(summaryWritten()).toContain("<code>force-app/Foo.cls</code>");
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
    await reporter.writeSummary();

    // One denied POST, no further POSTs and no DELETE
    expect(request).toHaveBeenCalledTimes(1);
    expect(String(request.mock.calls[0][0])).toMatch(/^POST /);
    expect(annotationCommands()).toHaveLength(2);
    expect(summaryWritten()).toContain("**2 violations**");
    expect(summaryWritten()).toContain("from the fork contributor/repo");
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
