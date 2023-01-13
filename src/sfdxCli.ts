import * as sfdxCli from "sfdx-cli/dist/cli";
import flush from "@oclif/command/flush";

const cli = (() => {
  // actually works with tsbuild tree-shaking - it's a bingo!
  const currentCliVersion: string = require("../package.json").dependencies[
    "sfdx-cli"
  ].replace(/>(|=)|~|\^/, "");
  return new Promise((resolve) => {
    sfdxCli
      .create(currentCliVersion, "stable")
      .run()
      .then(flush)
      .catch((_: Error) => {})
      .finally(resolve);
  });
})();

export default cli as unknown as <T>(cliArgs: string) => Promise<T>;
