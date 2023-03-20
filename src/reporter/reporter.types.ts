import { PluginInputs } from "../common";
import { ScannerViolation } from "../sfdxCli";
import { Context } from "@actions/github/lib/context";

export type ReporterProps = {
  context: Context;
  inputs: PluginInputs;
};

export interface Reporter {
  write(): void;
  translate(
    filePath: string,
    violation: ScannerViolation,
    engine: string
  ): { violationType: string };
}

export abstract class BaseReporter implements Reporter {
  protected hasHaltingError;
  protected inputs: PluginInputs;
  protected issues: any[];
  protected context: Context;
  constructor({ context, inputs }: ReporterProps) {
    this.hasHaltingError = false;
    this.issues = [];
    this.context = context;
    this.inputs = inputs;
  }

  write(): void {
    throw new Error("Method not implemented.");
  }
  translate(
    _filePath: string,
    _violation: ScannerViolation,
    _engine: string
  ): { violationType: string } {
    throw new Error("Method not implemented.");
  }
}
