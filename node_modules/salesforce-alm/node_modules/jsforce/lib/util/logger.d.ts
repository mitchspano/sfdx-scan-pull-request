/**
 *
 */
export declare const LogLevels: {
    [level: string]: number;
};
export declare type LogLevelConfig = string | number | {
    [name: string]: string | number;
};
/**
 *
 */
export declare class Logger {
    _moduleName: string;
    _logLevel: number;
    constructor(moduleName: string, logLevelConfig?: LogLevelConfig);
    createInstance(logLevelConfig?: LogLevelConfig): Logger;
    setLogLevel(logLevel: string | number): void;
    log(logLevel: number, ...messages: Array<any>): void;
    debug(...messages: Array<any>): void;
    info(...messages: Array<any>): void;
    warn(...messages: Array<any>): void;
    error(...messages: Array<any>): void;
    fatal(...messages: Array<any>): void;
}
/**
 *
 */
export declare function getLogger(moduleName: string): Logger;
