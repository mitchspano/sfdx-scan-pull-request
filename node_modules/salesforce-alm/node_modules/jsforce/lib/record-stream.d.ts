/// <reference types="node" />
/**
 * @file Represents stream that handles Salesforce record as stream data
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { Readable, Writable, Duplex, Transform, PassThrough } from 'stream';
import { Record, Optional } from './types';
/**
 * type defs
 */
export declare type RecordStreamSerializeOption = {
    nullValue?: any;
};
export declare type RecordStreamParseOption = {};
/**
 * Class for Record Stream
 *
 * @class
 * @constructor
 * @extends stream.Transform
 */
export declare class RecordStream<R extends Record = Record> extends PassThrough {
    /**
     *
     */
    constructor();
    /**
     * Get record stream of queried records applying the given mapping function
     */
    map<RR extends Record>(fn: (rec: R) => Optional<RR>): Transform;
    /**
     * Get record stream of queried records, applying the given filter function
     */
    filter(fn: (rec: R) => boolean): Duplex;
    on(ev: string, fn: (...args: any[]) => void): this;
    addListener: (ev: string, fn: (...args: any[]) => void) => this;
    /**
     * Create a record stream which maps records and pass them to downstream
     */
    static map<R1 extends Record = Record, R2 extends Record = Record>(fn: (rec: R1) => Optional<R2>): Transform;
    /**
     * Create mapping stream using given record template
     */
    static recordMapStream<R1 extends Record = Record, R2 extends Record = Record>(record: R2, noeval?: boolean): Transform;
    /**
     * Create a record stream which filters records and pass them to downstream
     *
     * @param {RecordFilterFunction} fn - Record filtering function
     * @returns {RecordStream.Serializable}
     */
    static filter<R1 extends Record = Record>(fn: (rec: R1) => boolean): Duplex;
}
/**
 * @class RecordStream.Serializable
 * @extends {RecordStream}
 */
export declare class Serializable<R extends Record = Record> extends RecordStream<R> {
    _dataStreams: {
        [type: string]: Duplex;
    };
    /**
     * Get readable data stream which emits serialized record data
     */
    stream(type?: string, options?: Object): Duplex;
}
/**
 * @class RecordStream.Parsable
 * @extends {RecordStream}
 */
export declare class Parsable<R extends Record = Record> extends RecordStream<R> {
    _dataStreams: {
        [type: string]: Duplex;
    };
    _execParse: boolean;
    _incomings: Array<[Readable, Writable]>;
    /**
     * Get writable data stream which accepts serialized record data
     */
    stream(type?: string, options?: Object): Duplex;
    on(ev: string, fn: (...args: any[]) => void): this;
    addListener: (ev: string, fn: (...args: any[]) => void) => this;
}
export default RecordStream;
