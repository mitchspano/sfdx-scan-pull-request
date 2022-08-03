/// <reference types="node" />
import * as fs from 'fs-extra';
export declare function touch(p: string): Promise<void>;
export declare function ls(dir: string): Promise<{
    path: string;
    stat: fs.Stats;
}[]>;
export declare function wait(ms: number, unref?: boolean): Promise<void>;
