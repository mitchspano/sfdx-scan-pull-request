"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
const hook = async function (options) {
    // Run individual hooks serially since oclif runs hooks in parallel, which causes UX problems in this case
    await this.config.runHook('plugins:preinstall:verify:version', options);
    await this.config.runHook('plugins:preinstall:verify:signature', options);
};
exports.default = hook;
//# sourceMappingURL=pluginsPreinstall.js.map