"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.configureAutoUpdate = exports.configureUpdateSites = exports.UPDATE_DISABLED_DEMO = exports.UPDATE_DISABLED_NPM = exports.UPDATE_DISABLED_INSTALLER = void 0;
const os = require("os");
const path = require("path");
const command_1 = require("@oclif/command");
const config_1 = require("@oclif/config");
const kit_1 = require("@salesforce/kit");
const ts_types_1 = require("@salesforce/ts-types");
const Debug = require("debug");
const shelljs_1 = require("shelljs");
const lazyRequire = require("./lazyRequire");
const env_1 = require("./util/env");
const debug = Debug('sfdx');
exports.UPDATE_DISABLED_INSTALLER = 'Manual and automatic CLI updates have been disabled by setting "SFDX_AUTOUPDATE_DISABLE=true". ' +
    'To check for a new version, unset that environment variable.';
exports.UPDATE_DISABLED_NPM = 'Use "npm update --global sfdx-cli" to update npm-based installations.';
exports.UPDATE_DISABLED_DEMO = 'Manual and automatic CLI updates have been disabled in DEMO mode. ' +
    'To check for a new version, unset the environment variable SFDX_ENV.';
function configureUpdateSites(config, env = env_1.default) {
    const s3Host = env.getS3HostOverride();
    if (s3Host) {
        // Override config value if set via envar
        (0, kit_1.set)(config, 'pjson.oclif.update.s3.host', s3Host);
    }
    const npmRegistry = env.getNpmRegistryOverride();
    if (npmRegistry) {
        // Override config value if set via envar
        (0, kit_1.set)(config, 'pjson.oclif.warn-if-update-available.registry', npmRegistry);
    }
}
exports.configureUpdateSites = configureUpdateSites;
function configureAutoUpdate(envars) {
    if (envars.isDemoMode()) {
        // Disable autoupdates in demo mode
        envars.setAutoupdateDisabled(true);
        envars.setUpdateInstructions(exports.UPDATE_DISABLED_DEMO);
        return;
    }
    if (envars.isInstaller()) {
        envars.normalizeAutoupdateDisabled();
        if (envars.isAutoupdateDisabled()) {
            envars.setUpdateInstructions(exports.UPDATE_DISABLED_INSTALLER);
        }
        return;
    }
    // Not an installer, so this must be running from an npm installation
    if (!envars.isAutoupdateDisabledSet()) {
        // Disable autoupdates if run from an npm install or in local dev, if not explicitly set
        envars.setAutoupdateDisabled(true);
    }
    if (envars.isAutoupdateDisabled()) {
        envars.setUpdateInstructions(exports.UPDATE_DISABLED_NPM);
    }
}
exports.configureAutoUpdate = configureAutoUpdate;
function debugCliInfo(version, channel, env, config) {
    function debugSection(section, items) {
        const pad = 25;
        debug('%s:', section.padStart(pad));
        items.forEach(([name, value]) => debug('%s: %s', name.padStart(pad), value));
    }
    debugSection('OS', [
        ['platform', os.platform()],
        ['architecture', os.arch()],
        ['release', os.release()],
        ['shell', config.shell],
    ]);
    debugSection('NODE', [['version', process.versions.node]]);
    debugSection('CLI', [
        ['version', version],
        ['channel', channel],
        ['bin', config.bin],
        ['data', config.dataDir],
        ['cache', config.cacheDir],
        ['config', config.configDir],
    ]);
    debugSection('ENV', [
        'NODE_OPTIONS',
        env_1.Env.DISABLE_AUTOUPDATE_LEGACY,
        'SFDX_BINPATH',
        'SFDX_COMPILE_CACHE',
        env_1.Env.DISABLE_AUTOUPDATE_OCLIF,
        env_1.Env.CLI_MODE,
        env_1.Env.CLI_INSTALLER,
        env_1.Env.LAZY_LOAD_MODULES,
        env_1.Env.NPM_REGISTRY,
        'SFDX_REDIRECTED',
        env_1.Env.S3_HOST,
        env_1.Env.UPDATE_INSTRUCTIONS,
    ].map((key) => [key, env.getString(key, '<not set>')]));
    debugSection('ARGS', process.argv.map((arg, i) => [i.toString(), arg]));
}
class SfdxMain extends command_1.Main {
    // Function which returns Version object which includes cli version, plugin versions, OS and its version.
    getVersionDetail(isVerbose) {
        const versions = this.config.userAgent.split(' ');
        const cliVersion = versions[0];
        const architecture = versions[1];
        const nodeVersion = versions[2];
        if (!isVerbose)
            return { cliVersion, architecture, nodeVersion };
        const pluginVersion = (0, shelljs_1.exec)('sfdx plugins --core', {
            silent: true,
        }).toString();
        const pluginVersions = pluginVersion.split('\n');
        pluginVersions.pop();
        const osVersion = `${os.type()} ${os.release()}`;
        return { cliVersion, architecture, nodeVersion, pluginVersions, osVersion };
    }
    printVersionDetails(versionDetails, isJson) {
        var _a;
        if (isJson) {
            this.log(`${JSON.stringify(versionDetails, null, '\t')}`);
        }
        else {
            this.log(` CLI Version : \n\t${versionDetails.cliVersion}`);
            this.log(`\n Architecture: \n\t${versionDetails.architecture}`);
            this.log(`\n Node Version : \n\t${versionDetails.nodeVersion}`);
            this.log('\n Plugin Version: ');
            (_a = versionDetails.pluginVersions) === null || _a === void 0 ? void 0 : _a.forEach((plugin) => {
                this.log(`\t${plugin}`);
            });
            this.log(`\n OS and Version: \n\t${versionDetails.osVersion}`);
        }
    }
    _version() {
        const options = new Set(this.argv);
        // Checking if options doesn't have --verbose and --json
        if (!options.has('--verbose') && !options.has('--json')) {
            this.log(this.config.userAgent);
        }
        else {
            const versionDetails = this.getVersionDetail(options.has('--verbose'));
            this.printVersionDetails(versionDetails, options.has('--json'));
        }
        return this.exit(0);
    }
}
function create(version, channel, run, env = env_1.default) {
    const root = path.resolve(__dirname, '..');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pjson = require(path.resolve(__dirname, '..', 'package.json'));
    const args = process.argv.slice(2);
    return {
        async run() {
            const config = new config_1.Config({ name: (0, ts_types_1.get)(pjson, 'oclif.bin'), root, version, channel });
            await config.load();
            configureUpdateSites(config, env);
            configureAutoUpdate(env);
            debugCliInfo(version, channel, env, config);
            if (args[1] !== 'update' && env.isLazyRequireEnabled()) {
                lazyRequire.start(config);
            }
            // I think the run method is used in test.
            return (run ? run(args, config) : await SfdxMain.run(args, config));
        },
    };
}
exports.create = create;
//# sourceMappingURL=cli.js.map