import * as sfdxCli from "sfdx-cli/dist/cli";

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

const cli = async <T>(cliArgs: string[]) => {
  const currentCliVersion: string = require("../package.json").dependencies[
    "sfdx-cli"
  ].replace(/>(|=)|~|\^/, "");

  // create a copy of what the current argv's are to reset to later
  // the CLI parses everything after the 2nd argument as "stuff that gets passed to SFDX"
  const originalArgv = [...process.argv];
  process.argv = ["node", "unused", ...cliArgs, "--json"];

  // this is currently a void method, which is a bit unfortunate as the "run" function
  // retains the response returned by any sub-command until the penultimate moment
  // which locks us into using the FINDINGS_OUTPUT file to get around this restriction.
  // long-term, I hope to be able to convince the SFDX team to propagate command responses directly
  // which would allow them to be awaitable and parseable right here
  const result = (await sfdxCli.create(currentCliVersion, "stable").run()) as T;

  process.argv = originalArgv;
  return result;
};

export async function scanFiles(
  scannerFlags: ScannerFlags
): Promise<ScannerFinding[]> {
  const scannerCliArgs = (
    Object.keys(scannerFlags) as Array<keyof ScannerFlags>
  )
    .map<string[]>((key) =>
      scannerFlags[key] ? ([`--${key}`, scannerFlags[key]] as string[]) : []
    )
    .reduce((acc, [one, two]) => (one && two ? [...acc, one, two] : acc), []);

  return cli<ScannerFinding[]>(["scanner:run", ...scannerCliArgs]);
}
