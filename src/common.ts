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

export function getGithubFilePath(commitId: string, filePath: string) {
  return ["..", "tree", commitId, filePath].join("/");
}
