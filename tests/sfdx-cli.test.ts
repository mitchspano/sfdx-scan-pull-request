import { expect, it, describe } from "@jest/globals";
import path from "path";

import { scanFiles } from "../src/sfdxCli";

const thirtySecondsRunTime = 1000 * 30;

describe("CLI tests!", () => {
  it(
    "reports pmd violations successfully",
    async () => {
      const scannerFlags = {
        engine: "pmd",
        pmdconfig: undefined,
        target: path.join(process.cwd(), "tests/ExampleClass.cls"),
      };

      const findings = await scanFiles(scannerFlags);
      expect(findings).toBeTruthy();

      if (typeof findings === "string") {
        // auto fail the test if no violations were found
        expect(findings).toBeFalsy();
        return;
      }

      const scannerViolations = findings[0].violations;
      expect(scannerViolations.length).toBe(4);
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
    },
    thirtySecondsRunTime
  );

  it(
    "reports eslint violations successully",
    async () => {
      const scannerFlags = {
        engine: "eslint",
        target: path.join(process.cwd(), "tests/example-lwc.js"),
      };

      const findings = await scanFiles(scannerFlags);

      if (typeof findings === "string") {
        // auto fail the test if no violations were found
        expect(findings).toBeFalsy();
        return;
      }

      expect(findings).toBeTruthy();
      expect(findings[0]?.violations.length).toBeGreaterThan(0);

      expect(
        findings[0].violations.filter(
          (violation) => violation.ruleName === "no-console"
        )
      ).toBeTruthy();
    },
    thirtySecondsRunTime
  );
});
