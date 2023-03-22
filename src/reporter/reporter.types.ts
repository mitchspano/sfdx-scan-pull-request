import { PluginInputs } from "../common";
import { ScannerViolation } from "../sfdxCli";
import { Context } from "@actions/github/lib/context";

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
export type GithubExistingComment = GithubComment & {
  user: {
    type: "Bot" | "User";
  };
  id?: string;
};

export type ReporterProps = {
  context: Context;
  inputs: PluginInputs;
};

export interface Reporter {
  write(): void;
  translate(
    filePath: string,
    violation: ScannerViolation,
    engine: string
  ): { violationType: string };
}

type GithubCommentSide = "RIGHT";

export abstract class BaseReporter<T> implements Reporter {
  protected hasHaltingError;
  protected inputs: PluginInputs;
  protected issues: T[];
  protected context: Context;
  constructor({ context, inputs }: ReporterProps) {
    this.hasHaltingError = false;
    this.issues = [];
    this.context = context;
    this.inputs = inputs;
  }

  write(): void {
    throw new Error("Method not implemented.");
  }
  translate(
    _filePath: string,
    _violation: ScannerViolation,
    _engine: string
  ): { violationType: string } {
    throw new Error("Method not implemented.");
  }
}
