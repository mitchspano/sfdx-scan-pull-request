import { expect, it, describe } from "@jest/globals";
import path from "path";

import { scanFiles } from "../src/sfdxCli";

/**
 * Totally goofy hack that allows the CLI to return data to us
 * during tests - in local runs, this was taking about ~9-20 seconds
 * to complete scans, using 30 seconds for now as a safe buffer
 */
jest.useFakeTimers();
jest.setTimeout(1000 * 30);

const scannerFlags = {
  engine: "pmd",
  pmdconfig: undefined,
  target: path.join(process.cwd(), "__tests__/ExampleClass.cls"),
};

jest.mock("@oclif/core/lib/errors/logger", () => {
  return {
    Logger: class Logger {
      log = jest.fn();
      flush = jest.fn().mockResolvedValue("");
    },
  };
});

describe("CLI tests!", () => {
  it("reports violations successfully", async () => {
    const findings = await scanFiles(scannerFlags);
    expect(findings).toBeTruthy();

    const scannerViolations = findings[0].violations;
    expect(scannerViolations.length).toBe(2);
    expect(
      scannerViolations.find(
        (violation) =>
          violation.ruleName === "ApexUnitTestClassShouldHaveAsserts"
      )
    ).toBeTruthy();
    expect(
      scannerViolations.find(
        (violation) => violation.ruleName === "EmptyStatementBlock"
      )
    ).toBeTruthy();
  });
});
