import { expect, it, describe } from "@jest/globals";

import { getAnnotationLevel, getChangedLineAnchor } from "../src/common";
import { ScannerViolation } from "../src/sfdxCli";

const violation = (line: number, endLine?: number) =>
  ({
    line: String(line),
    endLine: endLine === undefined ? "" : String(endLine),
  }) as ScannerViolation;

describe("getChangedLineAnchor", () => {
  it("reports a violation when only some of its lines changed", () => {
    expect(getChangedLineAnchor(violation(1, 30), new Set([12]))).toEqual({
      start: 12,
      end: 12,
    });
  });

  it("anchors on the first run of consecutive changed lines", () => {
    expect(
      getChangedLineAnchor(violation(1, 30), new Set([5, 6, 7, 20, 21])),
    ).toEqual({ start: 5, end: 7 });
  });

  it("keeps the anchor inside the violation's range", () => {
    expect(
      getChangedLineAnchor(violation(5, 8), new Set([3, 4, 7, 8, 9, 10])),
    ).toEqual({ start: 7, end: 8 });
  });

  it("anchors a fully changed violation on its whole range", () => {
    expect(
      getChangedLineAnchor(violation(2, 4), new Set([1, 2, 3, 4, 5])),
    ).toEqual({ start: 2, end: 4 });
  });

  it("handles single-line violations without an end line", () => {
    expect(getChangedLineAnchor(violation(9), new Set([9]))).toEqual({
      start: 9,
      end: 9,
    });
    expect(getChangedLineAnchor(violation(9), new Set([8, 10]))).toBeUndefined();
  });

  it("skips violations with no changed lines", () => {
    expect(
      getChangedLineAnchor(violation(10, 20), new Set([1, 9, 21])),
    ).toBeUndefined();
  });
});

describe("getAnnotationLevel", () => {
  it("marks anything that blocks the build as failure (red)", () => {
    expect(getAnnotationLevel("Error", 1)).toBe("failure");
    expect(getAnnotationLevel("Error", 5)).toBe("failure");
  });

  it("marks non-blocking severities 1-3 as warning (yellow)", () => {
    expect(getAnnotationLevel("Warning", 1)).toBe("warning");
    expect(getAnnotationLevel("Warning", 3)).toBe("warning");
  });

  it("marks non-blocking severities 4-5 as notice (gray)", () => {
    expect(getAnnotationLevel("Warning", 4)).toBe("notice");
    expect(getAnnotationLevel("Warning", 5)).toBe("notice");
  });
});
