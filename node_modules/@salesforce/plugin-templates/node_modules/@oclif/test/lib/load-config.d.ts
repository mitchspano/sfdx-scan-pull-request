import * as Config from '@oclif/config';
/**
 * loads CLI plugin/multi config
 * @param {loadConfig.Options} opts options
 * @return {Promise<Config.IConfig>} config
 */
export declare function loadConfig(opts?: loadConfig.Options): {
    run(ctx: {
        config: Config.IConfig;
    }): Promise<Config.IConfig>;
};
export declare namespace loadConfig {
    let root: string;
    interface Options {
        root?: string;
        reset?: boolean;
    }
}
