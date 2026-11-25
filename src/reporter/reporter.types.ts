/*
   Copyright 2022 Mitch Spano
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
	 https://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import {
  AnnotationLevel,
  getAnnotationLevel,
  getScannerViolationType,
  LineRange,
  PluginInputs,
} from "../common";
import { ScannerViolation, ScannerViolationType } from "../sfdxCli";
import { Finding } from "./findings";
import { writeJobSummary } from "./job-summary";
import {
  describeError,
  getReadOnlyReason,
  isPermissionDenied,
  reportWithoutApi,
} from "./fallback";
import { Context } from "@actions/github/lib/context";
import { setFailed } from "@actions/core";

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
  annotation_level: AnnotationLevel;
  start_line: number;
  end_line: number;
  message: string;
  title: string;
};

export type GithubComment = {
  commit_id: string;
  path: string;
  // Omitted for single-line comments
  start_line?: number;
  start_side?: GithubCommentSide;
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
  write(): Promise<void>;
  /**
   * @description Lists every reported finding in the job summary
   */
  writeSummary(): Promise<void>;
  /**
   * @param anchor Changed lines within the violation, when reporting on a diff
   */
  translateViolationToReport(
    filePath: string,
    violation: ScannerViolation,
    engine: string,
    anchor?: LineRange
  ): void;
}

type GithubCommentSide = "RIGHT";

export abstract class BaseReporter<T> implements Reporter {
  protected hasHaltingError;
  protected inputs: PluginInputs;
  protected issues: T[];
  // Every reported violation, for reporting without the API if writes are denied
  protected findings: Finding[];
  // Extra paragraphs for the job summary, e.g. why results could not be posted
  protected summaryNotes: string[];
  protected context: Context;
  constructor({ context, inputs }: ReporterProps) {
    this.hasHaltingError = false;
    this.issues = [];
    this.findings = [];
    this.summaryNotes = [];
    this.context = context;
    this.inputs = inputs;
  }

  // What write() does, for messages, e.g. "create the check run"
  protected abstract readonly writeAction: string;
  // The token permission write() needs, e.g. "checks"
  protected abstract readonly writePermission: string;

  /**
   * @description Sends the issues to GitHub. Throws when the findings would
   * otherwise be lost, e.g. when the token cannot write.
   */
  protected abstract post(): Promise<void>;

  abstract translateViolationToReport(
    filePath: string,
    violation: ScannerViolation,
    engine: string,
    anchor?: LineRange
  ): void;

  /**
   * @description Fails the action for blocking findings, then posts the
   * issues. If posting fails, reports the findings without the API instead.
   */
  async write() {
    this.checkHasHaltingError();
    try {
      await this.post();
    } catch (error) {
      console.error(`GitHub request failed: ${describeError(error)}`);
      const reason = isPermissionDenied(error)
        ? getReadOnlyReason(this.context, this.writePermission)
        : (error as Error).message;
      this.summaryNotes.push(
        ...reportWithoutApi(this.findings, `Couldn't ${this.writeAction}: ${reason}`)
      );
    }
  }

  /**
   * @description Classifies a violation as an error or warning, records it
   * for the job summary, and marks the run as failing for errors.
   */
  protected classifyViolation(
    filePath: string,
    violation: ScannerViolation,
    engine: string
  ): ScannerViolationType {
    const violationType = getScannerViolationType(this.inputs, violation, engine);
    if (violationType === "Error") {
      this.hasHaltingError = true;
    }
    this.recordFinding(filePath, violation, violationType);
    return violationType;
  }

  // The commit the findings are reported on: the PR head, or the pushed commit
  protected get commitId(): string {
    return this.context.payload?.pull_request
      ? this.context.payload.pull_request.head.sha
      : this.context.sha;
  }

  async writeSummary() {
    await writeJobSummary(
      this.findings,
      this.context,
      this.inputs.target ? `in \`${this.inputs.target}\`` : "on changed lines",
      this.summaryNotes
    );
  }

  private recordFinding(
    path: string,
    violation: ScannerViolation,
    violationType: ScannerViolationType
  ) {
    const startLine = parseInt(violation.line);
    const endLine = violation.endLine ? parseInt(violation.endLine) : startLine;
    this.findings.push({
      path,
      startLine,
      endLine: Math.max(startLine, endLine),
      level: getAnnotationLevel(violationType, violation.severity),
      violationType,
      violation,
    });
  }

  checkHasHaltingError() {
    if (this.hasHaltingError) {
      setFailed(
        "One or more errors have been identified within the structure of the code that will need to be resolved before continuing."
      );
    }
  }
}
