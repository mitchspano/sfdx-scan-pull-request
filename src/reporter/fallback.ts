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

import { AnnotationProperties, error, notice, summary, warning } from "@actions/core";
import { Context } from "@actions/github/lib/context";
import { AnnotationLevel } from "../common";
import { ScannerViolation, ScannerViolationType } from "../sfdxCli";

/**
 * @description A finding as it would have been reported, kept so it can be
 * reported without the GitHub API when the token cannot write.
 */
export type Finding = {
  path: string;
  startLine: number;
  endLine: number;
  level: AnnotationLevel;
  violationType: ScannerViolationType;
  violation: ScannerViolation;
};

// GitHub shows at most 10 annotations of each level per step
export const MAX_ANNOTATIONS_PER_LEVEL = 10;

const LEVEL_ORDER: AnnotationLevel[] = ["failure", "warning", "notice"];

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

function sortFindings(findings: Finding[]): Finding[] {
  return [...findings].sort(
    (a, b) =>
      LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level) ||
      a.violation.severity - b.violation.severity ||
      a.path.localeCompare(b.path) ||
      a.startLine - b.startLine
  );
}

// Keeps a value inside one markdown table cell
function cell(value: string): string {
  return value
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "\\|")
    .replace(/\r?\n/g, " ");
}

function lines(finding: Finding): string {
  return finding.startLine === finding.endLine
    ? `${finding.startLine}`
    : `${finding.startLine}-${finding.endLine}`;
}

/**
 * @description Builds a markdown table of the findings. Locations link to the
 * file at the given commit when a repository URL is available.
 */
export function buildFindingsTable(findings: Finding[], fileUrlBase?: string): string {
  const rows = sortFindings(findings).map((f) => {
    const location = `${f.path}:${lines(f)}`;
    const locationCell = fileUrlBase
      ? `[${cell(location)}](${fileUrlBase}/${encodeURI(f.path)}#L${f.startLine}${
          f.endLine !== f.startLine ? `-L${f.endLine}` : ""
        })`
      : cell(location);
    const rule = cell(`${f.violation.engine}:${f.violation.ruleName}`);
    const message = cell(f.violation.message);
    return `| ${f.violationType} | ${f.violation.severity} | ${
      f.violation.url ? `[${rule}](${f.violation.url})` : rule
    } | ${locationCell} | ${message} |`;
  });
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
 * @description Reports findings without the GitHub API: a table in the log and
 * the job summary, plus workflow-command annotations, which need no token
 * permissions and still appear on the pull request's changed files.
 */
export async function reportWithoutApi(
  findings: Finding[],
  reason: string,
  context: Context
) {
  const sha = context.payload?.pull_request?.head?.sha ?? context.sha;
  const repo = context.payload?.repository?.full_name;
  const fileUrlBase =
    repo && sha ? `${context.serverUrl}/${repo}/blob/${sha}` : undefined;

  const heading = `Salesforce Code Analyzer: ${findings.length} violation${
    findings.length === 1 ? "" : "s"
  } found`;
  const note = `Results could not be posted to the pull request. ${reason}`;
  const table = findings.length ? buildFindingsTable(findings, fileUrlBase) : "";

  console.log(`${heading}\n${note}${table ? `\n\n${buildFindingsTable(findings)}` : ""}`);

  const sorted = sortFindings(findings);
  const omitted: Partial<Record<AnnotationLevel, number>> = {};
  for (const level of LEVEL_ORDER) {
    const ofLevel = sorted.filter((f) => f.level === level);
    ofLevel.slice(0, MAX_ANNOTATIONS_PER_LEVEL).forEach(annotate);
    if (ofLevel.length > MAX_ANNOTATIONS_PER_LEVEL) {
      omitted[level] = ofLevel.length - MAX_ANNOTATIONS_PER_LEVEL;
    }
  }
  const omittedCount = Object.values(omitted).reduce((a, b) => a + (b ?? 0), 0);

  // The summary file only exists on GitHub-hosted and self-hosted runners, not e.g. under `act`
  if (!process.env.GITHUB_STEP_SUMMARY) {
    return;
  }
  try {
    await summary
      .addHeading(heading, 2)
      .addRaw(note, true)
      .addRaw(
        omittedCount
          ? `\nOnly the first ${MAX_ANNOTATIONS_PER_LEVEL} findings of each level are annotated on the changed files; ${omittedCount} more are listed below.\n`
          : "",
        true
      )
      .addRaw(table ? `\n${table}\n` : "", true)
      .write();
  } catch (e) {
    console.error("Unable to write the job summary: " + (e as Error).message);
  }
}
