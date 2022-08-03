/// <reference types="node" />
/**
 *
 */
import { Duplex } from 'stream';
/**
 *
 */
export declare type StreamPromiseBuilder<T> = () => {
    stream: Duplex;
    promise: Promise<T>;
};
/**
 *
 */
export declare class StreamPromise<T> extends Promise<T> {
    stream(): Duplex;
    static create<T>(builder: StreamPromiseBuilder<T>): StreamPromise<T>;
}
