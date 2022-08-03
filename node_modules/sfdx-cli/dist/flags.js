"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocessCliFlags = void 0;
function preprocessCliFlags(process) {
    process.argv = process.argv.filter((arg) => {
        switch (arg) {
            case '--dev-debug': {
                // convert --dev-debug into a set of environment variables
                process.env.DEBUG = '*';
                process.env.SFDX_DEBUG = '1';
                process.env.SFDX_ENV = 'development';
                process.env.NODE_ENV = 'development';
                return false;
            }
            case '--dev-suspend': {
                // simply ignore --dev-suspend if provided... filtering args in batch scripts is hard
                return false;
            }
            default: {
                // retain all other cli args
                return true;
            }
        }
    });
}
exports.preprocessCliFlags = preprocessCliFlags;
//# sourceMappingURL=flags.js.map