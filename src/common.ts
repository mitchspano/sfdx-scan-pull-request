import { ScannerViolation, ScannerViolationType } from "./sfdxCli";

export type PluginInputs = {
  severityThreshold: number;
  strictlyEnforcedRules: string;
  deleteResolvedComments: boolean;
  reportMode: string | "comments" | "check-runs";
  target: string;
};

export function getScannerViolationType(
  inputs: PluginInputs,
  violation: ScannerViolation,
  engine: string,
): ScannerViolationType {
  if (inputs.severityThreshold >= violation.severity) {
    return "Error";
  }
  if (!inputs.strictlyEnforcedRules) {
    return "Warning";
  }
  const enforcedRules = JSON.parse(inputs.strictlyEnforcedRules) as {
    engine: string;
    rule: string;
  }[];
  return enforcedRules.some(
    (r) => r.engine === engine && r.rule === violation.ruleName,
  )
    ? "Error"
    : "Warning";
}

export type AnnotationLevel = "failure" | "warning" | "notice";

/**
 * @description Colors a check-run annotation: red for anything that blocks the
 * build, yellow for non-blocking Critical/High/Moderate (1-3), gray for Low/Info (4-5).
 */
export function getAnnotationLevel(
  violationType: ScannerViolationType,
  severity: number,
): AnnotationLevel {
  if (violationType === "Error") {
    return "failure";
  }
  return severity <= 3 ? "warning" : "notice";
}

export type LineRange = { start: number; end: number };

/**
 * @description Finds where in the diff to anchor a violation. Returns the first
 * run of consecutive changed lines inside the violation's range, or undefined
 * when none of its lines changed. Consecutive changed lines are always in the
 * same diff hunk, so a review comment on them is accepted by GitHub.
 */
export function getChangedLineAnchor(
  violation: ScannerViolation,
  changedLines: Set<number>,
): LineRange | undefined {
  const start = parseInt(violation.line);
  const end = violation.endLine ? parseInt(violation.endLine) : start;
  for (let line = start; line <= end; line++) {
    if (changedLines.has(line)) {
      let anchorEnd = line;
      while (anchorEnd < end && changedLines.has(anchorEnd + 1)) {
        anchorEnd++;
      }
      return { start: line, end: anchorEnd };
    }
  }
  return undefined;
}

export function getGithubFilePath(commitId: string, filePath: string) {
  return ["..", "tree", commitId, filePath].join("/");
}
