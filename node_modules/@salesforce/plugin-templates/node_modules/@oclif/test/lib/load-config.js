"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require("@oclif/config");
/**
 * loads CLI plugin/multi config
 * @param {loadConfig.Options} opts options
 * @return {Promise<Config.IConfig>} config
 */
function loadConfig(opts = {}) {
    return {
        async run(ctx) {
            ctx.config = await Config.load(opts.root || loadConfig.root);
            return ctx.config;
        },
    };
}
exports.loadConfig = loadConfig;
(function (loadConfig) {
})(loadConfig = exports.loadConfig || (exports.loadConfig = {}));
