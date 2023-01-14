import * as sfdxCli from "sfdx-cli/dist/cli";
import { readFile } from "fs";

export const FINDINGS_OUTPUT = "sfdx-scanner-findings.json";

export type ScannerFinding = {
  fileName: string;
  engine: string;
  violations: ScannerViolation[];
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

const cli = async (cliArgs: string[]) => {
  const currentCliVersion: string = require("../package.json").dependencies[
    "sfdx-cli"
  ].replace(/>(|=)|~|\^/, "");

  // create a copy of what the current argv's are to reset to later
  // the CLI parses everything after the 2nd argument as "stuff that gets passed to SFDX"
  const originalArgv = [...process.argv];
  process.argv = ["node", "unused", ...cliArgs];

  // this is currently a void method, which is a bit unfortunate as the "run" function
  // retains the response returned by any sub-command until the penultimate moment
  // which locks us into using the FINDINGS_OUTPUT file to get around this restriction.
  // long-term, I hope to be able to convince the SFDX team to propagate command responses directly
  // which would allow them to be awaitable and parseable right here
  await sfdxCli.create(currentCliVersion, "stable").run();

  process.argv = originalArgv;
};

export async function scanFiles(
  scannerCliArgs: string[]
): Promise<ScannerFinding[]> {
  await cli([
    "scanner:run",
    "--json",
    "--outfile",
    FINDINGS_OUTPUT,
    ...scannerCliArgs,
  ]);

  return new Promise((resolve) => {
    readFile(FINDINGS_OUTPUT, (_, data) => {
      resolve(JSON.parse(data.toString()));
    });
  });
}
