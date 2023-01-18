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

const cli = async <T>(commandName: string, cliArgs: string[] = []) => {
  const currentCliVersion: string = require("../package.json").dependencies[
    "sfdx-cli"
  ].replace(/>(|=)|~|\^/, "");

  // create a copy of what the current argv's are to reset to later
  // the CLI parses everything after the 2nd argument as "stuff that gets passed to SFDX"
  const originalArgv = [...process.argv];
  process.argv = ["node", "unused", commandName, ...cliArgs, "--json"];

  const result = (await sfdxCli.create(currentCliVersion, "stable").run()) as T;

  process.argv = originalArgv;
  return result;
};

export async function scanFiles(
  scannerFlags: ScannerFlags
): Promise<ScannerFinding[]> {
  const scanCommandName = "scanner:run";
  try {
    await cli<string>(scanCommandName, ["--help"]);
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      err.message === `Command ${scanCommandName} not found`
    ) {
      // scanner isn't installed! let's proceed with the installation to fix https://github.com/mitchspano/sfdx-scan-pull-request/issues/4
    }
  }

  const scannerCliArgs = (
    Object.keys(scannerFlags) as Array<keyof ScannerFlags>
  )
    .map<string[]>((key) =>
      scannerFlags[key] ? ([`--${key}`, scannerFlags[key]] as string[]) : []
    )
    .reduce((acc, [one, two]) => (one && two ? [...acc, one, two] : acc), []);

  return cli<ScannerFinding[]>(scanCommandName, scannerCliArgs);
}
