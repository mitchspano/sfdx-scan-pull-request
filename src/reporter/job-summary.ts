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

import { summary } from "@actions/core";
import { Context } from "@actions/github/lib/context";
import {
  cell,
  Finding,
  formatLines,
  formatRule,
  getFileUrlBase,
  plural,
} from "./findings";

function countByType(findings: Finding[]): string {
  const errors = findings.filter((f) => f.violationType === "Error").length;
  const warnings = findings.length - errors;
  return [
    errors ? plural(errors, "error") : "",
    warnings ? plural(warnings, "warning") : "",
  ]
    .filter(Boolean)
    .join(", ");
}

function linesCell(finding: Finding, fileUrlBase?: string): string {
  const lines = formatLines(finding);
  if (!fileUrlBase) {
    return lines;
  }
  const anchor = `#L${finding.startLine}${
    finding.endLine !== finding.startLine ? `-L${finding.endLine}` : ""
  }`;
  return `[${lines}](${fileUrlBase}/${encodeURI(finding.path)}${anchor})`;
}

/**
 * @description One collapsible section per file, files with the most errors
 * first, and each file's findings in line order.
 */
export function buildFileSections(findings: Finding[], fileUrlBase?: string): string {
  const byFile = new Map<string, Finding[]>();
  for (const finding of findings) {
    byFile.set(finding.path, [...(byFile.get(finding.path) ?? []), finding]);
  }
  const errorCount = (fs: Finding[]) =>
    fs.filter((f) => f.violationType === "Error").length;
  const files = [...byFile.entries()].sort(
    ([pathA, a], [pathB, b]) =>
      errorCount(b) - errorCount(a) || pathA.localeCompare(pathB)
  );

  return files
    .map(([path, fileFindings]) => {
      const rows = [...fileFindings]
        .sort(
          (a, b) =>
            a.startLine - b.startLine ||
            a.endLine - b.endLine ||
            a.violation.ruleName.localeCompare(b.violation.ruleName)
        )
        .map(
          (f) =>
            `| ${linesCell(f, fileUrlBase)} | ${f.violationType} | ${
              f.violation.severity
            } | ${formatRule(f)} | ${cell(f.violation.message)} |`
        );
      // Blank lines around the table let GitHub render markdown inside <details>
      return [
        "<details>",
        `<summary><code>${cell(path)}</code>: ${countByType(fileFindings)}</summary>`,
        "",
        "| Lines | Type | Severity | Rule | Message |",
        "| --- | --- | --- | --- | --- |",
        ...rows,
        "",
        "</details>",
      ].join("\n");
    })
    .join("\n\n");
}

/**
 * @description Builds the job summary markdown for the run's findings.
 * @param scope Where the findings come from, e.g. "on changed lines"
 * @param notes Extra paragraphs, e.g. why results could not be posted
 */
export function buildJobSummary(
  findings: Finding[],
  context: Context,
  scope: string,
  notes: string[] = []
): string {
  const fileCount = new Set(findings.map((f) => f.path)).size;
  const overview = findings.length
    ? `**${plural(findings.length, "violation")}** ${scope} in ${plural(
        fileCount,
        "file"
      )}: ${countByType(findings)}.`
    : `No violations ${scope}.`;
  return [
    "## Salesforce Code Analyzer",
    "",
    overview,
    ...notes.flatMap((note) => ["", note]),
    ...(findings.length
      ? ["", buildFileSections(findings, getFileUrlBase(context))]
      : []),
    "",
  ].join("\n");
}

/**
 * @description Writes the findings to the job summary. The summary file only
 * exists on GitHub runners, not e.g. under `act`.
 */
export async function writeJobSummary(
  findings: Finding[],
  context: Context,
  scope: string,
  notes: string[] = []
) {
  if (!process.env.GITHUB_STEP_SUMMARY) {
    return;
  }
  try {
    await summary
      .addRaw(buildJobSummary(findings, context, scope, notes), true)
      .write();
  } catch (e) {
    console.error("Unable to write the job summary: " + (e as Error).message);
  }
}
