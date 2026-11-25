/*
   Copyright 2022 Mitch Spano
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
	 https://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import { getChangedLineAnchor, PluginInputs } from "./common";
import { Reporter } from "./reporter/reporter.types";
import { ScannerViolation } from "./sfdxCli";

/**
 * @description Determines which violations are on lines which have changed
 * and passes those to the reporter.
 */
export function filterFindingsToDiffScope(
  violations: ScannerViolation[],
  filePathToChangedLines: Map<string, Set<number>>,
  inputs: PluginInputs,
  reporter: Reporter
) {
  console.log(
    "Filtering the findings to just the lines which are part of the context..."
  );

  for (let violation of violations) {
    const filePath = violation.fileName.replace(process.cwd() + "/", "");
    if (inputs.target) {
      reporter.translateViolationToReport(filePath, violation, violation.engine);
      continue;
    }
    // Report when any line of the violation changed in the diff
    const anchor = getChangedLineAnchor(
      violation,
      filePathToChangedLines.get(filePath) || new Set<number>()
    );
    if (anchor) {
      reporter.translateViolationToReport(
        filePath,
        violation,
        violation.engine,
        anchor
      );
    }
  }
}
