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

import { execFileSync } from "child_process";
import { mkdtempSync, readFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

export type ScannerFlags = {
  ruleSelector?: string;
  configFile?: string;
  targets: string[];
};

export type ScannerViolation = {
  fileName: string;
  engine: string;
  category: string;
  column: string;
  endColumn: string;
  endLine: string;
  line: string;
  message: string;
  ruleName: string;
  severity: number;
  url?: string;
};

export type ScannerViolationType = "Error" | "Warning";

type CodeAnalyzerLocation = {
  file: string;
  startLine: number;
  startColumn?: number;
  endLine?: number;
  endColumn?: number;
};

type CodeAnalyzerViolation = {
  rule: string;
  engine: string;
  severity: number;
  tags: string[];
  primaryLocationIndex: number;
  locations: CodeAnalyzerLocation[];
  message: string;
  resources?: string[];
};

/**
 * @description Runs `sf code-analyzer run` and returns its violations.
 * Selectors are whitespace delimited, e.g. "pmd:Security eslint:Recommended".
 */
export function scanFiles({ ruleSelector, configFile, targets }: ScannerFlags) {
  const outDir = mkdtempSync(join(tmpdir(), "code-analyzer-"));
  const outFile = join(outDir, "results.json");
  const args = ["code-analyzer", "run", "--output-file", outFile];
  for (const selector of (ruleSelector || "").split(/\s+/).filter(Boolean)) {
    args.push("--rule-selector", selector);
  }
  if (configFile) {
    args.push("--config-file", configFile);
  }
  for (const target of targets) {
    args.push("--target", target);
  }
  console.log(`sf ${args.join(" ")}`);
  try {
    execFileSync("sf", args, { stdio: ["ignore", "inherit", "inherit"] });
    const { violations } = JSON.parse(readFileSync(outFile, "utf8")) as {
      violations: CodeAnalyzerViolation[];
    };
    // Engine failures (e.g. a bad custom ruleset) are reported as violations with no file.
    const engineErrors = violations.filter(
      (v) => !v.locations[v.primaryLocationIndex]?.file
    );
    if (engineErrors.length) {
      throw new Error(engineErrors.map((v) => v.message).join("\n"));
    }
    return violations.map(toScannerViolation);
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
}

function toScannerViolation(v: CodeAnalyzerViolation): ScannerViolation {
  const loc = v.locations[v.primaryLocationIndex];
  return {
    fileName: loc.file,
    engine: v.engine,
    category: v.tags.join(", "),
    column: String(loc.startColumn ?? ""),
    endColumn: String(loc.endColumn ?? ""),
    endLine: String(loc.endLine ?? ""),
    line: String(loc.startLine),
    message: v.message,
    ruleName: v.rule,
    severity: v.severity,
    url: v.resources?.[0],
  };
}
