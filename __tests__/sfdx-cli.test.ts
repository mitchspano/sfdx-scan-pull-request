import { expect, it, describe } from "@jest/globals";
import path from "path";

import { scanFiles } from "../src/sfdxCli";

/**
 * Totally goofy hack that allows the CLI to return data to us
 * during tests - in local runs, this was taking about ~9-20 seconds
 * to complete scans, using 30 seconds for now as a safe buffer
 */
jest.useFakeTimers();
jest.setTimeout(30000);

describe("CLI tests!", () => {
  it("reports violations successfully", async () => {
    const scannerFlags = {
      engine: "pmd",
      pmdconfig: undefined,
      target: path.join(process.cwd(), "__tests__/ExampleClass.cls"),
    };
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
