"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
const lazyRequire_1 = require("../lazyRequire");
const hook = (options) => {
    // Reset the type cache on CLI or plugin updates in case a dependency has changed types
    (0, lazyRequire_1.resetTypeCache)(options.config);
};
exports.default = hook;
//# sourceMappingURL=lazyRequire.js.map