"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const path = require("path");
const plugin_plugins_1 = require("@oclif/plugin-plugins");
const config_1 = require("@oclif/config");
const ts_types_1 = require("@salesforce/ts-types");
const cli_ux_1 = require("cli-ux");
const versions_1 = require("../versions");
const salesforcedxError = `You still have the deprecated salesforcedx plugin installed in Salesforce CLI. If you continue using this plugin, you'll be running old and out-of-date versions of sfdx commands.
    Uninstall the plugin with this command: 'sfdx plugins:uninstall salesforcedx'.
    See https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71063-june-17-2021 for more information about this change.`;
const MAX_VERSION = '7.107.0';
const hook = async () => {
    // PART 1: is the CLI recent enough that we don't allow salesforcedx?
    const root = path.resolve(__dirname, '..', '..');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pjson = require(path.resolve(root, 'package.json'));
    const config = new config_1.Config({ name: (0, ts_types_1.get)(pjson, 'oclif.bin'), root });
    await config.load();
    // early exit for old CLIs that shouldn't bother inspecting their plugins
    if ((0, versions_1.compareVersions)(config.version, MAX_VERSION) < 0) {
        return;
    }
    // PART 2: is the salesforcedx plugin installed?
    const plugins = new plugin_plugins_1.default(config);
    const installedUserPlugins = (await plugins.list())
        .filter((plugin) => plugin.type === 'user')
        .map((plugin) => plugin.name);
    cli_ux_1.cli.log(`user plugins are ${installedUserPlugins.join(', ')}`);
    if (installedUserPlugins.includes('salesforcedx')) {
        cli_ux_1.cli.warn(salesforcedxError);
    }
};
exports.default = hook;
//# sourceMappingURL=salesforcedx-check.js.map