import { PluginInputs } from "../common";
import { ScannerViolation } from "../sfdxCli";
import { Context } from "@actions/github/lib/context";

export type ReporterProps = {
  context: Context;
  inputs: PluginInputs;
};

abstract class Reporter {
  protected hasHaltingError;
  protected inputs: PluginInputs;
  protected issues;
  protected context: Context;
  constructor({ context, inputs }: ReporterProps) {
    this.hasHaltingError = false;
    this.issues = [];
    this.context = context;
    this.inputs = inputs;
  }

  public write();
  public translate(
    filePath: string,
    violation: ScannerViolation,
    engine: string
  ): { violationType: string };
}
