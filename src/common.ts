import { ScannerViolation, ScannerViolationType } from "./sfdxCli";

export type PluginInputs = {
  severityThreshold: number;
  strictlyEnforcedRules: string;
  deleteResolvedComments: boolean;
  reportMode: string | "comments" | "check-runs";
  target: string;
};

export type GithubComment = {
  commit_id: string;
  path: string;
  start_line: number;
  start_side: GithubCommentSide;
  side: GithubCommentSide;
  line: number;
  body: string;
  url?: string;
};

export type GithubCheckRun = {
  name: string;
  head_sha: string;
  status: string; // add
  conclusion:
    | "action_required"
    | "cancelled"
    | "failure"
    | "neutral"
    | "success"
    | "skipped"
    | "stale"
    | "timed_out";
  output: {
    title: string;
    summary: string;
    annotations: GithubAnnotation[];
  };
};

export type GithubAnnotation = {
  path: string;
  start_side: string;
  annotation_level: "notice"; // add,
  start_line: number;
  end_line: number;
  message: string;
  title: string;
};

export type GithubExistingComment = GithubComment & {
  user: {
    type: "Bot" | "User";
  };
  id?: string;
};

type GithubCommentSide = "RIGHT";

export const WARNING = "Warning";
export const ERROR = "Error";
export const RIGHT = "RIGHT";

export function getScannerViolationType(
  inputs: PluginInputs,
  violation: ScannerViolation,
  engine: string
): ScannerViolationType {
  if (inputs.severityThreshold <= violation.severity) {
    return "Error";
  }
  if (!inputs.strictlyEnforcedRules) {
    return "Warning";
  }
  let violationDetail = {
    engine: engine,
    category: violation.category,
    rule: violation.ruleName,
  };
  for (let enforcedRule of JSON.parse(inputs.strictlyEnforcedRules) as {
    [key in string]: string;
  }[]) {
    if (
      Object.entries(violationDetail).toString() ===
      Object.entries(enforcedRule).toString()
    ) {
      return "Error";
    }
  }
  return "Warning";
}

export function getGithubFilePath(commitId: string, filePath: string) {
  return ["..", "tree", commitId, filePath].join("/");
}
