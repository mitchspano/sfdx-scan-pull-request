"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BANNED_PLUGINS = void 0;
const versions_1 = require("../versions");
const FORCE_PLUGINS = ['salesforce-alm', 'force-language-services'];
exports.BANNED_PLUGINS = {
    salesforcedx: `The salesforcedx plugin is deprecated.
    Installing it manually via 'sfdx plugins:install salesforcedx' is no longer supported and can result in duplicate commands and outdated plugins.
    See https://github.com/forcedotcom/cli/issues/1016 for more information about this change.`,
    'sfdx-cli': "'sfdx-cli' cannot be installed as a plugin. If you are trying to install an older version of the cli, visit https://sfdc.co/install-older-cli-versions for instructions",
};
const MIN_VERSION = '45.8.0';
/**
 * A CLI plugin preinstall hook that checks that the plugin's version is v7-compatible,
 * if it is recognized as a force namespace plugin.
 */
const hook = function (options) {
    if (options.plugin && options.plugin.type === 'npm') {
        const plugin = options.plugin;
        if (Object.keys(exports.BANNED_PLUGINS).includes(plugin.name)) {
            this.error(exports.BANNED_PLUGINS[plugin.name]);
        }
        if (FORCE_PLUGINS.includes(plugin.name) && (0, versions_1.isVersion)(plugin.tag) && (0, versions_1.compareVersions)(plugin.tag, MIN_VERSION) < 0) {
            this.error(`The ${plugin.name} plugin can only be installed using a specific version when ` +
                `the version is greater than or equal to ${MIN_VERSION}.`);
        }
    }
};
exports.default = hook;
//# sourceMappingURL=verifyPluginVersion.js.map