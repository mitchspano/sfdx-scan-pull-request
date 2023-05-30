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

import { PluginInputs } from "../common";
import { ScannerViolation } from "../sfdxCli";
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
  translateViolationToReport(
    filePath: string,
    violation: ScannerViolation,
    engine: string
  ): void;
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
  translateViolationToReport(
    _filePath: string,
    _violation: ScannerViolation,
    _engine: string
  ): void {
    throw new Error("Method not implemented.");
  }

  checkHasHaltingError() {
    if (this.hasHaltingError) {
      setFailed(
        "One or more errors have been identified within the structure of the code that will need to be resolved before continuing."
      );
    }
  }
}
