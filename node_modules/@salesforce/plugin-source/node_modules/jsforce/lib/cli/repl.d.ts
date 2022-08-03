/// <reference types="node" />
import { REPLServer } from 'repl';
import { Transform } from 'stream';
import { Cli } from './cli';
/**
 *
 */
export declare class Repl {
    _cli: Cli;
    _in: Transform;
    _out: Transform;
    _interactive: boolean;
    _paused: boolean;
    _replServer: REPLServer | undefined;
    constructor(cli: Cli);
    /**
     *
     */
    start(options?: {
        interactive?: boolean;
        prettyPrint?: string | number;
        evalScript?: string;
    }): this;
    /**
     *
     */
    _defineAdditionalCommands(): void;
    /**
     *
     */
    pause(): void;
    /**
     *
     */
    resume(): void;
    /**
     *
     */
    complete(line: string): Promise<(string | string[])[] | undefined>;
    /**
     * Map all jsforce object to REPL context
     * @private
     */
    _defineBuiltinVars(context: {
        [varName: string]: any;
    }): void;
}
export default Repl;
