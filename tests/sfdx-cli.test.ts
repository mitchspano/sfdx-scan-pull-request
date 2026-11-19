import { expect, it, describe } from "@jest/globals";

import { scanFiles } from "../src/sfdxCli";

const twoMinutes = 1000 * 120;

describe("CLI tests!", () => {
  it(
    "reports pmd violations successfully",
    () => {
      const violations = scanFiles({
        ruleSelector: "pmd",
        targets: ["tests/ExampleClass.cls"],
      });
      expect(violations.every((v) => v.engine === "pmd")).toBe(true);
      expect(violations[0].fileName).toBe("tests/ExampleClass.cls");
      expect(
        violations.find(
          (v) => v.ruleName === "ApexUnitTestClassShouldHaveAsserts"
        )
      ).toBeTruthy();
      expect(
        violations.find((v) => v.ruleName === "EmptyStatementBlock")
      ).toBeTruthy();
    },
    twoMinutes
  );

  it(
    "reports eslint violations successully",
    () => {
      const violations = scanFiles({
        ruleSelector: "eslint",
        targets: ["tests/example-lwc.js"],
      });
      expect(violations.find((v) => v.ruleName === "no-console")).toBeTruthy();
    },
    twoMinutes
  );

  it(
    "handles spaces in file names",
    () => {
      const violations = scanFiles({
        ruleSelector: "eslint",
        targets: ["README.md", "tests/Example Layout.layout-meta.xml"],
      });
      expect(violations).toEqual([]);
    },
    twoMinutes
  );

  it(
    "runs custom PMD rules from a config file",
    () => {
      const violations = scanFiles({
        ruleSelector: "NoTestClassesNamedExample",
        configFile: "tests/code-analyzer.yml",
        targets: ["tests/ExampleClass.cls"],
      });
      expect(violations.map((v) => v.ruleName)).toEqual([
        "NoTestClassesNamedExample",
      ]);
    },
    twoMinutes
  );
});
