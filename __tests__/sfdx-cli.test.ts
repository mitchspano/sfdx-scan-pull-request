import { expect, it, describe } from "@jest/globals";
import fs from "fs";
import path from "path";

import { FINDINGS_OUTPUT, scanFiles } from "../src/sfdxCli";

/**
 * Totally goofy hack that allows the CLI to return data to us
 * during tests - in local runs, this was taking about 9 seconds
 * to complete scans, using 20 seconds for now as a safe buffer
 */
jest.useFakeTimers();
jest.setTimeout(20000);

jest.mock("@oclif/errors/lib/logger", () => {
  return {
    Logger: class Logger {
      log = jest.fn();
      flush = jest.fn().mockResolvedValue("");
    },
  };
});

describe("CLI tests!", () => {
  afterEach(() => {
    try {
      fs.unlinkSync(FINDINGS_OUTPUT);
    } catch (_) {
      // swallow any exceptions
    }
  });

  it("reports violations successfully", async () => {
    const scannerFlags = {
      engine: "pmd",
      target: path.join(process.cwd(), "__tests__/ExampleClass.cls"),
    };
    const findings = await scanFiles(scannerFlags);
    expect(fs.statSync(FINDINGS_OUTPUT).isFile()).toBeTruthy();
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
