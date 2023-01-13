import * as sfdxCli from "sfdx-cli/dist/cli";
import fs from "fs";

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
  // actually works with tsbuild tree-shaking - it's a bingo!
  const currentCliVersion: string = require("../package.json").dependencies[
    "sfdx-cli"
  ].replace(/>(|=)|~|\^/, "");
  const originalArgv = [...process.argv];

  process.argv = ["node", "unused", ...cliArgs];
  const sfdx = sfdxCli.create(currentCliVersion, "stable");
  await sfdx.run();
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
    fs.readFile(FINDINGS_OUTPUT, (_, data) => {
      resolve(JSON.parse(data.toString()));
    });
  });
}
