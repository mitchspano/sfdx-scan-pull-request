// `jest` must be the global (not imported) for @swc/jest to hoist jest.mock
import { afterEach, describe, expect, it } from "@jest/globals";
import { summary } from "@actions/core";
import { Context } from "@actions/github/lib/context";

const request = jest.fn<(...args: unknown[]) => Promise<unknown>>();
const paginate = jest.fn<(...args: unknown[]) => Promise<unknown>>();
jest.mock("@octokit/action", () => ({
  Octokit: jest.fn().mockImplementation(() => ({ request, paginate })),
}));
// The reporters read the PR number and repo from this module's context, so it
// must describe the same pull request as the context passed to them
jest.mock("@actions/github", () => ({
  context: {
    repo: { owner: "upstream", repo: "repo" },
    payload: { pull_request: { number: 7 } },
    sha: "",
  },
}));

import { AnnotationsReporter } from "../src/reporter/annoations-reporter";
import { CommentsReporter } from "../src/reporter/comments-reporter";
import { buildJobSummary, writeJobSummary } from "../src/reporter/job-summary";
import { filterFindingsToDiffScope } from "../src/diff-scope";
import { Reporter } from "../src/reporter/reporter.types";
import { GithubComment } from "../src/reporter/reporter.types";
import {
  captureOutput,
  finding,
  HEAD_SHA,
  inputs,
  permissionError,
  sameRepoContext,
  violation,
} from "./helpers";

const output = captureOutput();

afterEach(() => {
  request.mockReset();
  paginate.mockReset();
});

const calls = (method: string): [string, unknown][] =>
  (request.mock.calls as [string, unknown][]).filter(([endpoint]) =>
    endpoint.startsWith(`${method} `)
  );

const commentsReporter = (overrides: Partial<typeof inputs> = {}) =>
  new CommentsReporter({
    context: sameRepoContext,
    inputs: { ...inputs, reportMode: "comments", ...overrides },
  });

// The comment the reporter would post for a violation, as GitHub returns it
const existingCommentFor = (
  v: ReturnType<typeof violation>,
  anchor: { start: number; end: number },
  id: number
) => {
  const reporter = commentsReporter();
  reporter.translateViolationToReport(v.fileName, v, v.engine, anchor);
  const [comment] = (reporter as unknown as { issues: GithubComment[] }).issues;
  return { ...comment, id, url: `https://github.com/comment/${id}`, user: { type: "Bot" } };
};

describe("CommentsReporter", () => {
  it("posts new comments, skips existing ones and deletes resolved ones", async () => {
    const kept = violation({ ruleName: "Kept", line: "3", endLine: "3" });
    const added = violation({ ruleName: "Added", line: "8", endLine: "9" });
    const resolved = violation({ ruleName: "Resolved", line: "20", endLine: "20" });
    paginate.mockResolvedValue([
      existingCommentFor(kept, { start: 3, end: 3 }, 1),
      existingCommentFor(resolved, { start: 20, end: 20 }, 2),
      // Not ours: a person's comment, and a bot comment without the marker
      { id: 3, line: 5, path: "force-app/Foo.cls", body: "Looks good", user: { type: "User" } },
      { id: 4, line: 5, path: "force-app/Foo.cls", body: "Other bot", user: { type: "Bot" } },
    ]);
    request.mockResolvedValue({});
    const reporter = commentsReporter();
    reporter.translateViolationToReport(kept.fileName, kept, "pmd", { start: 3, end: 3 });
    reporter.translateViolationToReport(added.fileName, added, "pmd", { start: 8, end: 9 });

    await reporter.write();

    expect(calls("POST")).toHaveLength(1);
    expect(calls("POST")[0]).toEqual([
      "POST /repos/upstream/repo/pulls/7/comments",
      expect.objectContaining({
        commit_id: HEAD_SHA,
        path: "force-app/Foo.cls",
        start_line: 8,
        line: 9,
        side: "RIGHT",
      }),
    ]);
    expect(calls("DELETE").map(([endpoint]) => endpoint)).toEqual([
      "DELETE /repos/upstream/repo/pulls/comments/2",
    ]);
    expect(output.log()).toContain("Skipping existing comment https://github.com/comment/1");
  });

  it("keeps resolved comments unless delete-resolved-comments is set", async () => {
    paginate.mockResolvedValue([
      existingCommentFor(violation({ line: "20", endLine: "20" }), { start: 20, end: 20 }, 2),
    ]);
    request.mockResolvedValue({});

    await commentsReporter({ deleteResolvedComments: false }).write();

    expect(calls("DELETE")).toHaveLength(0);
  });

  it("omits start_line for a single-line comment", async () => {
    paginate.mockResolvedValue([]);
    request.mockResolvedValue({});
    const reporter = commentsReporter();
    reporter.translateViolationToReport("force-app/Foo.cls", violation(), "pmd", { start: 4, end: 4 });

    await reporter.write();

    const [, body] = calls("POST")[0] as [string, GithubComment];
    expect(body.line).toBe(4);
    expect(body).not.toHaveProperty("start_line");
  });

  it("keeps posting after a failure that is not a permission denial", async () => {
    paginate.mockResolvedValue([]);
    request
      .mockRejectedValueOnce(Object.assign(new Error("Validation Failed"), { status: 422 }))
      .mockResolvedValue({});
    const reporter = commentsReporter();
    reporter.translateViolationToReport("force-app/Foo.cls", violation(), "pmd", { start: 3, end: 3 });
    reporter.translateViolationToReport(
      "force-app/Foo.cls",
      violation({ ruleName: "Other", line: "8", endLine: "8" }),
      "pmd",
      { start: 8, end: 8 }
    );

    await reporter.write();
    await reporter.writeSummary();

    expect(calls("POST")).toHaveLength(2);
    expect(output.errors().join("\n")).toContain("Error when writing comments");
    expect(output.annotations()).toHaveLength(0);
    expect(output.summary()).not.toContain("Couldn't");
  });

  it("still posts when existing comments cannot be fetched", async () => {
    paginate.mockRejectedValue(new Error("Server Error"));
    request.mockResolvedValue({});
    const reporter = commentsReporter();
    reporter.translateViolationToReport("force-app/Foo.cls", violation(), "pmd", { start: 3, end: 3 });

    await reporter.write();

    expect(calls("POST")).toHaveLength(1);
    expect(output.errors().join("\n")).toContain("Error when fetching existing comments");
  });

  it("logs a failed delete and keeps deleting", async () => {
    paginate.mockResolvedValue([
      existingCommentFor(violation({ line: "20", endLine: "20" }), { start: 20, end: 20 }, 2),
      existingCommentFor(violation({ line: "30", endLine: "30" }), { start: 30, end: 30 }, 3),
    ]);
    request
      .mockRejectedValueOnce(Object.assign(new Error("Server Error"), { status: 500 }))
      .mockResolvedValue({});
    const reporter = commentsReporter();

    await reporter.write();
    await reporter.writeSummary();

    expect(calls("DELETE")).toHaveLength(2);
    expect(output.errors()).toContain("Error when deleting a comment: 500 Server Error");
    expect(output.summary()).not.toContain("Couldn't");
  });

  it("asks for pull-requests: write when a same-repo comment is denied", async () => {
    paginate.mockResolvedValue([]);
    request.mockRejectedValue(permissionError);
    const reporter = commentsReporter();
    reporter.translateViolationToReport("force-app/Foo.cls", violation(), "pmd", { start: 3, end: 3 });

    await reporter.write();
    await reporter.writeSummary();

    expect(output.summary()).toContain(
      "Couldn't post review comments: the workflow needs `permissions: pull-requests: write`."
    );
  });
});

describe("AnnotationsReporter", () => {
  const reporterWith = (count: number) => {
    const reporter = new AnnotationsReporter({ context: sameRepoContext, inputs });
    for (let i = 1; i <= count; i++) {
      reporter.translateViolationToReport(
        "force-app/Foo.cls",
        violation({ line: String(i), endLine: String(i) }),
        "pmd"
      );
    }
    return reporter;
  };

  it("creates one check run, then appends annotations 50 at a time", async () => {
    request.mockResolvedValue({ data: { id: 99 } });

    await reporterWith(120).write();

    const [[postEndpoint, postBody]] = calls("POST") as [string, { output: { annotations: unknown[] } }][];
    expect(postEndpoint).toBe("POST /repos/upstream/repo/check-runs");
    expect(postBody.output.annotations).toHaveLength(50);
    const patches = calls("PATCH") as [string, { output: { annotations: unknown[] } }][];
    expect(patches.map(([endpoint]) => endpoint)).toEqual([
      "PATCH /repos/upstream/repo/check-runs/99",
      "PATCH /repos/upstream/repo/check-runs/99",
    ]);
    expect(patches.map(([, body]) => body.output.annotations.length)).toEqual([50, 20]);
  });

  it("concludes neutral with findings and success without", async () => {
    request.mockResolvedValue({ data: { id: 99 } });
    await reporterWith(1).write();
    await reporterWith(0).write();

    const conclusions = calls("POST").map(([, body]) => (body as { conclusion: string }).conclusion);
    expect(conclusions).toEqual(["neutral", "success"]);
  });

  it("falls back with the error when the check run fails for another reason", async () => {
    request.mockRejectedValue(Object.assign(new Error("Server Error"), { status: 500 }));
    const reporter = reporterWith(1);

    await reporter.write();
    await reporter.writeSummary();

    expect(output.annotations()).toHaveLength(1);
    expect(output.summary()).toContain("Couldn't create the check run: Server Error.");
    // One line, not the request with every annotation
    expect(output.errors()).toEqual(["GitHub request failed: 500 Server Error"]);
  });
});

describe("filterFindingsToDiffScope", () => {
  const recordingReporter = () => {
    const reported: { path: string; rule: string; anchor?: { start: number; end: number } }[] = [];
    const reporter = {
      translateViolationToReport: (path, v, _engine, anchor) => {
        reported.push({ path, rule: v.ruleName, anchor });
      },
    } as Partial<Reporter> as Reporter;
    return { reporter, reported };
  };

  it("reports every violation in target mode, without an anchor", () => {
    const { reporter, reported } = recordingReporter();
    filterFindingsToDiffScope(
      [violation({ ruleName: "A" }), violation({ ruleName: "B", fileName: "force-app/Bar.cls" })],
      new Map(),
      { ...inputs, target: "force-app" },
      reporter
    );
    expect(reported).toEqual([
      { path: "force-app/Foo.cls", rule: "A", anchor: undefined },
      { path: "force-app/Bar.cls", rule: "B", anchor: undefined },
    ]);
  });

  it("matches absolute paths from Code Analyzer to the diff's relative paths", () => {
    const { reporter, reported } = recordingReporter();
    filterFindingsToDiffScope(
      [violation({ fileName: `${process.cwd()}/force-app/Foo.cls`, line: "3", endLine: "6" })],
      new Map([["force-app/Foo.cls", new Set([5, 6])]]),
      inputs,
      reporter
    );
    expect(reported).toEqual([
      { path: "force-app/Foo.cls", rule: "ApexDoc", anchor: { start: 5, end: 6 } },
    ]);
  });
});

describe("job summary edge cases", () => {
  it("does not link lines when the repository is unknown", () => {
    const md = buildJobSummary(
      [finding()],
      { payload: {}, sha: "" } as unknown as Context,
      "on changed lines"
    );
    expect(md).toContain("| 3-5 | Warning |");
    expect(md).not.toContain("](https://github.com/");
  });

  it("logs instead of failing when the summary cannot be written", async () => {
    const write = jest.spyOn(summary, "write").mockRejectedValueOnce(new Error("disk full"));
    try {
      await writeJobSummary([finding()], sameRepoContext, "on changed lines");
    } finally {
      write.mockRestore();
      summary.emptyBuffer();
    }
    expect(output.errors().join("\n")).toContain("Unable to write the job summary: disk full");
  });
});
