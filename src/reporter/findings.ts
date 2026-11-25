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

import { Context } from "@actions/github/lib/context";
import { AnnotationLevel } from "../common";
import { ScannerViolation, ScannerViolationType } from "../sfdxCli";

/**
 * @description A violation that was reported for this run: on a pull request,
 * only violations that span a changed line.
 */
export type Finding = {
  path: string;
  startLine: number;
  endLine: number;
  level: AnnotationLevel;
  violationType: ScannerViolationType;
  violation: ScannerViolation;
};

export const LEVEL_ORDER: AnnotationLevel[] = ["failure", "warning", "notice"];

/**
 * @description Most severe first: blocking findings, then by severity, file and line.
 */
export function sortFindings(findings: Finding[]): Finding[] {
  return [...findings].sort(
    (a, b) =>
      LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level) ||
      a.violation.severity - b.violation.severity ||
      a.path.localeCompare(b.path) ||
      a.startLine - b.startLine
  );
}

/**
 * @description Escapes text for HTML, and keeps it inside one markdown table cell.
 */
export function cell(value: string): string {
  return value
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "\\|")
    .replace(/\r?\n/g, " ");
}

export function formatLines(finding: Finding): string {
  return finding.startLine === finding.endLine
    ? `${finding.startLine}`
    : `${finding.startLine}-${finding.endLine}`;
}

export function formatRule(finding: Finding): string {
  const rule = cell(`${finding.violation.engine}:${finding.violation.ruleName}`);
  return finding.violation.url ? `[${rule}](${finding.violation.url})` : rule;
}

export function plural(count: number, noun: string): string {
  return `${count} ${noun}${count === 1 ? "" : "s"}`;
}

/**
 * @description URL of the file at the reported commit, to link line numbers.
 */
export function getFileUrlBase(context: Context): string | undefined {
  const sha = context.payload?.pull_request?.head?.sha ?? context.sha;
  const repo = context.payload?.repository?.full_name;
  return repo && sha ? `${context.serverUrl}/${repo}/blob/${sha}` : undefined;
}
