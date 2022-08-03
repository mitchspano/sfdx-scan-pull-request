/// <reference types="node" />
/**
 *
 */
import Connection from './connection';
import { RetrieveOptions, DmlOptions, Schema, SObjectNames, SObjectInputRecord, SObjectUpdateRecord } from './types';
/**
 * Remote reference to record information
 */
export declare class RecordReference<S extends Schema, N extends SObjectNames<S>, InputRecord extends SObjectInputRecord<S, N> = SObjectInputRecord<S, N>, RetrieveRecord extends SObjectUpdateRecord<S, N> = SObjectUpdateRecord<S, N>> {
    type: N;
    id: string;
    _conn: Connection<S>;
    /**
     *
     */
    constructor(conn: Connection<S>, type: N, id: string);
    /**
     * Retrieve record field information
     */
    retrieve(options?: RetrieveOptions): Promise<RetrieveRecord>;
    /**
     * Update record field information
     */
    update(record: InputRecord, options?: DmlOptions): Promise<import("./types").SaveResult>;
    /**
     * Delete record field
     */
    destroy(options?: DmlOptions): Promise<import("./types").SaveResult>;
    /**
     * Synonym of Record#destroy()
     */
    delete: (options?: DmlOptions | undefined) => Promise<import("./types").SaveResult>;
    /**
     * Synonym of Record#destroy()
     */
    del: (options?: DmlOptions | undefined) => Promise<import("./types").SaveResult>;
    /**
     * Get blob field as stream
     *
     * @param {String} fieldName - Blob field name
     * @returns {stream.Stream}
     */
    blob(fieldName: string): import("stream").Duplex;
}
export default RecordReference;
