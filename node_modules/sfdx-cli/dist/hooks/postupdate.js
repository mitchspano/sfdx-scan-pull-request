"use strict";
/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const path = require("path");
const cli_ux_1 = require("cli-ux");
const fs_extra_1 = require("fs-extra");
const shelljs_1 = require("shelljs");
const appInsights_1 = require("@salesforce/telemetry/lib/appInsights");
function sendEvent(data) {
    if (global.cliTelemetry && global.cliTelemetry.record) {
        global.cliTelemetry.record(data);
    }
}
function suggestAlternatives() {
    cli_ux_1.cli.log('Failed to update sf. Try uninstalling the CLI and re-installing it.');
    cli_ux_1.cli.log('Uninstall instructions: https://developer.salesforce.com/docs/atlas.en-us.234.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm');
    if (process.platform === 'win32') {
        cli_ux_1.cli.log('- installer: https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-x64.exe');
    }
    else if (process.platform === 'darwin') {
        cli_ux_1.cli.log('- installer: https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf.pkg');
    }
    else {
        cli_ux_1.cli.log('- download: https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-linux-x64.tar.gz');
    }
}
/**
 * In order to make the bundled version of `sf` available after
 * users run `sfdx update` we've added this hook which will copy
 * the sfdx executable and modify it for `sf`.
 */
// eslint-disable-next-line @typescript-eslint/require-await
const hook = async function (opts) {
    var _a;
    let success = false;
    cli_ux_1.cli.action.start('sfdx-cli: Updating sf');
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const pjson = (0, fs_extra_1.readJsonSync)(path.join(__dirname, '../../package.json'));
        let dataDirBin;
        let sfdxExec;
        let sfExec;
        if (os.type() === 'Windows_NT') {
            dataDirBin = path.join(process.env.LOCALAPPDATA, pjson.oclif.dirname, 'client', 'bin');
            sfdxExec = sfExec = path.join(dataDirBin, 'sfdx.cmd');
            sfExec = path.join(dataDirBin, 'sf.cmd');
        }
        else {
            dataDirBin = path.join(process.env.HOME, '.local', 'share', pjson.oclif.dirname, 'client', 'bin');
            sfdxExec = path.join(dataDirBin, 'sfdx');
            sfExec = path.join(dataDirBin, 'sf');
        }
        (0, fs_extra_1.writeFileSync)(sfExec, (0, fs_extra_1.readFileSync)(sfdxExec, { encoding: 'utf-8' }).replace(/sfdx/g, 'sf').replace(/SFDX/g, 'SF'));
        (0, shelljs_1.chmod)('+x', dataDirBin, sfExec);
        success = true;
    }
    catch (error) {
        const err = error;
        success = false;
        sendEvent({
            eventName: 'POST_SFDX_UPDATE_SF_UPDATE_ERROR',
            type: 'EVENT',
            message: err.message,
            stackTrace: (_a = err === null || err === void 0 ? void 0 : err.stack) === null || _a === void 0 ? void 0 : _a.replace(new RegExp(os.homedir(), 'g'), appInsights_1.AppInsights.GDPR_HIDDEN),
            sfdxVersion: opts.config.version,
        });
        return;
    }
    finally {
        cli_ux_1.cli.action.stop(success ? 'done' : 'failed');
        if (!success)
            suggestAlternatives();
    }
};
exports.default = hook;
//# sourceMappingURL=postupdate.js.map