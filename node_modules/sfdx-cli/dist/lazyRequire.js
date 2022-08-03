"use strict";
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetTypeCache = exports.start = exports.lazyRequire = void 0;
const path = require("path");
const lazy_require_1 = require("@salesforce/lazy-require");
function getOrCreate(config, create) {
    if (exports.lazyRequire)
        return exports.lazyRequire;
    const typeCacheFile = path.join(config.cacheDir, 'module-types.json');
    return (exports.lazyRequire = create(typeCacheFile));
}
/**
 * Start lazy requiring type-compatible modules.
 */
// eslint-disable-next-line @typescript-eslint/unbound-method
function start(config, create = lazy_require_1.default.create) {
    getOrCreate(config, create).start();
}
exports.start = start;
/**
 * Return the lazy require type cache if it has been initialized.
 */
// eslint-disable-next-line @typescript-eslint/unbound-method
function resetTypeCache(config, create = lazy_require_1.default.create) {
    getOrCreate(config, create).resetTypeCache();
}
exports.resetTypeCache = resetTypeCache;
//# sourceMappingURL=lazyRequire.js.map