import * as sfdxCli from "sfdx-cli/dist/cli";
import flush from "@oclif/command/flush";

const cli = (() => {
  // actually works with tsbuild tree-shaking - it's a bingo!
  const currentCliVersion: string = require("../package.json").dependencies[
    "sfdx-cli"
  ].replace(/>(|=)|~|\^/, "");
  sfdxCli
    .create(currentCliVersion, "stable")
    .run()
    .then(flush)
    .catch((_: Error) => {});
})();

export default cli as unknown as (cliArgs: string) => void;
