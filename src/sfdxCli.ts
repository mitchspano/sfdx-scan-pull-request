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

import { execSync } from "child_process";

export type ScannerFinding = {
  fileName: string;
  engine: string;
  violations: ScannerViolation[];
};

export type ScannerFlags = {
  category?: string;
  engine?: string;
  env?: string;
  eslintconfig?: string;
  pmdconfig?: string;
  target: string;
  tsConfig?: string;
};

export type ScannerViolation = {
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

type SfdxCommandResult<T> = {
  status: 1 | 0;
  result: T;
};

const cli = async <T>(commandName: string, cliArgs: string[] = []) => {
  let result = null as T;
  try {
    const cliCommand = `npx sfdx ${commandName} ${cliArgs.join(" ")}`;
    console.log(cliCommand);
    result = (
      JSON.parse(execSync(cliCommand).toString()) as SfdxCommandResult<T>
    ).result;
  } catch (err) {
    throw err;
  }
  return result;
};

export async function scanFiles(scannerFlags: ScannerFlags) {
  scannerFlags.target = `"` + scannerFlags.target + `"`;
  const scannerCliArgs = (
    Object.keys(scannerFlags) as Array<keyof ScannerFlags>
  )
    .map<string[]>((key) =>
      scannerFlags[key] ? ([`--${key}`, scannerFlags[key]] as string[]) : []
    )
    .reduce((acc, [one, two]) => (one && two ? [...acc, one, two] : acc), []);

  return cli<ScannerFinding[] | string>("scanner:run", [
    ...scannerCliArgs,
    "--json",
  ]);
}

export async function registerRule(path: string, language: string) {
  return cli<ScannerFinding[] | string>("scanner:rule:add", [
    `--path="${path}"`,
    `--language="${language}"`,
    "--json",
  ]);
}
