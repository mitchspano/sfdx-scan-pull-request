import * as sfdxCli from "sfdx-cli/dist/cli";
import Run from "@salesforce/sfdx-scanner/lib/commands/scanner/run";
import * as eslintStrat from "@salesforce/sfdx-scanner/lib/lib/eslint/TypescriptEslintStrategy";
import * as espree from "espree";
import { assert } from "console";

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

type SfdxPlugin = {
  name: string;
};

const cli = async <T>(commandName: string, cliArgs: string[] = []) => {
  const currentCliVersion: string = require("../package.json").dependencies[
    "sfdx-cli"
  ].replace(/>(|=)|~|\^/, "");

  // create a copy of what the current argv's are to reset to later
  // the CLI parses everything after the 2nd argument as "stuff that gets passed to SFDX"
  const originalArgv = [...process.argv];
  process.argv = ["node", "unused", commandName, ...cliArgs];

  let result = null as T;
  try {
    result = (await sfdxCli.create(currentCliVersion, "stable").run()) as T;
  } catch (_) {
  } finally {
    process.argv = originalArgv;
  }
  return result;
};

export async function scanFiles(
  scannerFlags: ScannerFlags
): Promise<ScannerFinding[]> {
  performTreeShakingChecks();
  const scanCommandName = "scanner:run";
  const scannerPluginName = "@salesforce/sfdx-scanner";

  const plugins = await cli<SfdxPlugin[]>("plugins");
  const matchedPlugin = plugins.find(
    (plugin) => plugin.name === scannerPluginName
  );
  if (!matchedPlugin) {
    // scanner isn't installed! let's proceed with the installation
    await cli("plugins:link", [`node_modules/${scannerPluginName}`]);
  }
  const scannerCliArgs = (
    Object.keys(scannerFlags) as Array<keyof ScannerFlags>
  )
    .map<string[]>((key) =>
      scannerFlags[key] ? ([`--${key}`, scannerFlags[key]] as string[]) : []
    )
    .reduce((acc, [one, two]) => (one && two ? [...acc, one, two] : acc), []);

  return cli<ScannerFinding[]>(scanCommandName, [...scannerCliArgs, "--json"]);
}

function performTreeShakingChecks() {
  // we have some indirect dependencies which, without explicit code references to them
  // will fail to be bundled correctly
  assert(typeof Run.run === "function");
  assert(eslintStrat !== undefined);
  assert(espree !== undefined);
}
