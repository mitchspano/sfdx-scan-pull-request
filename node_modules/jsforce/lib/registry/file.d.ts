import { BaseRegistry } from './base';
/**
 *
 */
export declare class FileRegistry extends BaseRegistry {
    _configFilePath: string;
    constructor({ configFilePath }: {
        configFilePath?: string;
    });
    _saveConfig(): void;
}
