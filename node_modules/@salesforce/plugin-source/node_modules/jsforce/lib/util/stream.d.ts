/// <reference types="node" />
import { Duplex, Readable, Writable } from 'stream';
export declare function createLazyStream(): {
    stream: Duplex;
    setStream: (str: Duplex) => void;
};
export declare function readAll(rs: Readable): Promise<string>;
export declare function concatStreamsAsDuplex(ws: Writable, rs: Readable, opts?: {
    writableObjectMode?: boolean;
    readableObjectMode?: boolean;
}): Duplex;
