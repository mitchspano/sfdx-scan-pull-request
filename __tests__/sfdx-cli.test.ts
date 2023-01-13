import { expect, it, describe } from "@jest/globals";
import fs from "fs";
import path from "path";

import { FINDINGS_OUTPUT, scanFiles } from "../src/sfdxCli";

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
    fs.unlinkSync(FINDINGS_OUTPUT);
  });

  it("reports violations successfully", async () => {
    const findings = await scanFiles([
      "--target",
      path.join(process.cwd(), "__tests__/ExampleClass.cls"),
      "--engine",
      "pmd",
    ]);
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
