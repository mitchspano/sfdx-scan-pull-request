"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const kit_1 = require("@salesforce/kit");
class Env extends kit_1.Env {
    constructor(env = process.env) {
        super(env);
    }
    normalizeAutoupdateDisabled() {
        // Ensure that the legacy envar always causes the oclif counterpart to be set
        if (this.getBoolean(Env.DISABLE_AUTOUPDATE_LEGACY)) {
            this.setBoolean(Env.DISABLE_AUTOUPDATE_OCLIF, true);
        }
        else if (this.getBoolean(Env.DISABLE_AUTOUPDATE_OCLIF)) {
            this.setBoolean(Env.DISABLE_AUTOUPDATE_LEGACY, true);
        }
    }
    isAutoupdateDisabled() {
        return this.getBoolean(Env.DISABLE_AUTOUPDATE_LEGACY) || this.getBoolean(Env.DISABLE_AUTOUPDATE_OCLIF);
    }
    isAutoupdateDisabledSet() {
        return !!this.getString(Env.DISABLE_AUTOUPDATE_LEGACY) || !!this.getString(Env.DISABLE_AUTOUPDATE_OCLIF);
    }
    setAutoupdateDisabled(value, updateInstructions) {
        this.setBoolean(Env.DISABLE_AUTOUPDATE_LEGACY, value);
        this.setBoolean(Env.DISABLE_AUTOUPDATE_OCLIF, value);
        if (updateInstructions) {
            this.setUpdateInstructions(updateInstructions);
        }
    }
    setUpdateInstructions(value) {
        this.setString(Env.UPDATE_INSTRUCTIONS, value);
    }
    isDemoMode() {
        return this.getString(Env.CLI_MODE, 'production').toLowerCase() === 'demo';
    }
    isInstaller() {
        return this.getBoolean(Env.CLI_INSTALLER);
    }
    getS3HostOverride() {
        return this.getString(Env.S3_HOST);
    }
    setS3HostOverride(value) {
        return this.setString(Env.S3_HOST, value);
    }
    getNpmRegistryOverride() {
        return this.getString(Env.NPM_REGISTRY);
    }
    setNpmRegistryOverride(value) {
        return this.setString(Env.NPM_REGISTRY, value);
    }
    isLazyRequireEnabled() {
        return this.getBoolean(Env.LAZY_LOAD_MODULES);
    }
}
exports.Env = Env;
Env.CLI_MODE = 'SFDX_ENV';
Env.CLI_INSTALLER = 'SFDX_INSTALLER';
Env.DISABLE_AUTOUPDATE_LEGACY = 'SFDX_AUTOUPDATE_DISABLE';
Env.DISABLE_AUTOUPDATE_OCLIF = 'SFDX_DISABLE_AUTOUPDATE';
Env.UPDATE_INSTRUCTIONS = 'SFDX_UPDATE_INSTRUCTIONS';
Env.S3_HOST = 'SFDX_S3_HOST';
Env.NPM_REGISTRY = 'SFDX_NPM_REGISTRY';
Env.LAZY_LOAD_MODULES = 'SFDX_LAZY_LOAD_MODULES';
exports.default = new Env();
//# sourceMappingURL=env.js.map