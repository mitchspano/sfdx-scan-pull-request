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

import { AnnotationProperties, error, notice, warning } from "@actions/core";
import { Context } from "@actions/github/lib/context";
import {
  cell,
  Finding,
  formatLines,
  formatRule,
  LEVEL_ORDER,
  plural,
  sortFindings,
} from "./findings";

// GitHub shows at most 10 annotations of each level per step
export const MAX_ANNOTATIONS_PER_LEVEL = 10;

/**
 * @description True when GitHub rejected a request because the token lacks
 * permission, e.g. the read-only GITHUB_TOKEN of a pull request from a fork.
 * Secondary rate limits are also 403s, so the message must match too.
 */
export function isPermissionDenied(err: unknown): boolean {
  const e = err as {
    status?: number;
    message?: string;
    response?: { data?: { message?: string } };
  };
  const message = `${e?.message ?? ""} ${e?.response?.data?.message ?? ""}`;
  return (
    e?.status === 403 && message.includes("Resource not accessible by integration")
  );
}

/**
 * @description Explains why the token could not write, so the user knows
 * whether there is anything to fix.
 */
export function getReadOnlyReason(context: Context, permission: string): string {
  const pr = context.payload?.pull_request;
  const headRepo = pr?.head?.repo?.full_name;
  const baseRepo = pr?.base?.repo?.full_name;
  if (headRepo && baseRepo && headRepo !== baseRepo) {
    return `This pull request is from the fork ${headRepo}, so its GITHUB_TOKEN is read-only.`;
  }
  if (context.actor === "dependabot[bot]") {
    return "Workflows triggered by Dependabot get a read-only GITHUB_TOKEN.";
  }
  return `The GITHUB_TOKEN cannot write. Grant the workflow \`permissions: ${permission}: write\`.`;
}

/**
 * @description A flat markdown table of the findings for the step log, most
 * severe first.
 */
export function buildFindingsTable(findings: Finding[]): string {
  const rows = sortFindings(findings).map(
    (f) =>
      `| ${f.violationType} | ${f.violation.severity} | ${formatRule(f)} | ${cell(
        `${f.path}:${formatLines(f)}`
      )} | ${cell(f.violation.message)} |`
  );
  return [
    "| Type | Severity | Rule | Location | Message |",
    "| --- | --- | --- | --- | --- |",
    ...rows,
  ].join("\n");
}

function annotate(finding: Finding) {
  const properties: AnnotationProperties = {
    title: `${finding.violation.ruleName} (sev: ${finding.violation.severity})`,
    file: finding.path,
    startLine: finding.startLine,
    endLine: finding.endLine,
  };
  const message = `${finding.violation.message.trim()}${
    finding.violation.url ? `\n${finding.violation.url}` : ""
  }`;
  if (finding.level === "failure") {
    error(message, properties);
  } else if (finding.level === "warning") {
    warning(message, properties);
  } else {
    notice(message, properties);
  }
}

/**
 * @description Reports findings without the GitHub API: a table in the step
 * log, plus workflow-command annotations, which need no token permissions and
 * still appear on the pull request's changed files.
 * @returns Notes for the job summary, which lists every finding
 */
export function reportWithoutApi(findings: Finding[], reason: string): string[] {
  const notes = [`Results could not be posted to the pull request. ${reason}`];
  console.log(
    `Salesforce Code Analyzer: ${plural(findings.length, "violation")} found\n${
      notes[0]
    }${findings.length ? `\n\n${buildFindingsTable(findings)}` : ""}`
  );

  const sorted = sortFindings(findings);
  let omitted = 0;
  for (const level of LEVEL_ORDER) {
    const ofLevel = sorted.filter((f) => f.level === level);
    // Failures also fail the action, and setFailed's message is an error annotation too
    const limit =
      level === "failure" ? MAX_ANNOTATIONS_PER_LEVEL - 1 : MAX_ANNOTATIONS_PER_LEVEL;
    ofLevel.slice(0, limit).forEach(annotate);
    omitted += Math.max(0, ofLevel.length - limit);
  }
  if (omitted) {
    notes.push(
      `GitHub shows at most ${MAX_ANNOTATIONS_PER_LEVEL} annotations of each level per step, so ${plural(
        omitted,
        "finding"
      )} ${omitted === 1 ? "is" : "are"} only listed below.`
    );
  }
  return notes;
}
