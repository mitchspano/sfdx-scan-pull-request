/// <reference types="node" />
/**
 * @file Manages Salesforce Bulk API related operations
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { EventEmitter } from 'events';
import { Duplex, Readable, Writable } from 'stream';
import Connection from '../connection';
import { Serializable, Parsable } from '../record-stream';
import { Logger } from '../util/logger';
import { HttpMethods, Record, Schema } from '../types';
export declare type BulkOperation = 'insert' | 'update' | 'upsert' | 'delete' | 'hardDelete' | 'query' | 'queryAll';
export declare type BulkOptions = {
    extIdField?: string;
    concurrencyMode?: 'Serial' | 'Parallel';
    assignmentRuleId?: string;
};
export declare type JobState = 'Open' | 'Closed' | 'Aborted' | 'Failed' | 'Unknown';
export declare type JobInfo = {
    id: string;
    object: string;
    operation: BulkOperation;
    state: JobState;
};
export declare type BatchState = 'Queued' | 'InProgress' | 'Completed' | 'Failed' | 'NotProcessed';
export declare type BatchInfo = {
    id: string;
    jobId: string;
    state: BatchState;
    stateMessage: string;
    numberRecordsProcessed: string;
    numberRecordsFailed: string;
    totalProcessingTime: string;
};
export declare type BulkQueryBatchResult = Array<{
    id: string;
    batchId: string;
    jobId: string;
}>;
export declare type BulkIngestBatchResult = Array<{
    id: string | null;
    success: boolean;
    errors: string[];
}>;
export declare type BatchResult<Opr extends BulkOperation> = Opr extends 'query' | 'queryAll' ? BulkQueryBatchResult : BulkIngestBatchResult;
declare type BulkRequest = {
    method: HttpMethods;
    path: string;
    body?: string;
    headers?: {
        [name: string]: string;
    };
    responseType?: string;
};
/**
 * Class for Bulk API Job
 */
export declare class Job<S extends Schema, Opr extends BulkOperation> extends EventEmitter {
    type: string | null;
    operation: Opr | null;
    options: BulkOptions;
    id: string | null;
    state: JobState;
    _bulk: Bulk<S>;
    _batches: {
        [id: string]: Batch<S, Opr>;
    };
    _jobInfo: Promise<JobInfo> | undefined;
    _error: Error | undefined;
    /**
     *
     */
    constructor(bulk: Bulk<S>, type: string | null, operation: Opr | null, options: BulkOptions | null, jobId?: string);
    /**
     * Return latest jobInfo from cache
     */
    info(): Promise<JobInfo>;
    /**
     * Open new job and get jobinfo
     */
    open(): Promise<JobInfo>;
    /**
     * Create a new batch instance in the job
     */
    createBatch(): Batch<S, Opr>;
    /**
     * Get a batch instance specified by given batch ID
     */
    batch(batchId: string): Batch<S, Opr>;
    /**
     * Check the latest job status from server
     */
    check(): Promise<JobInfo>;
    /**
     * Wait till the job is assigned to server
     */
    ready(): Promise<string>;
    /**
     * List all registered batch info in job
     */
    list(): Promise<BatchInfo[]>;
    /**
     * Close opened job
     */
    close(): Promise<JobInfo | undefined>;
    /**
     * Set the status to abort
     */
    abort(): Promise<JobInfo | undefined>;
    /**
     * @private
     */
    _changeState(state: JobState): Promise<JobInfo>;
}
/**
 * Batch (extends Writable)
 */
export declare class Batch<S extends Schema, Opr extends BulkOperation> extends Writable {
    job: Job<S, Opr>;
    id: string | undefined;
    _bulk: Bulk<S>;
    _uploadStream: Serializable;
    _downloadStream: Parsable;
    _dataStream: Duplex;
    _result: Promise<BatchResult<Opr>> | undefined;
    _error: Error | undefined;
    /**
     *
     */
    constructor(job: Job<S, Opr>, id?: string);
    /**
     * Connect batch API and create stream instance of request/response
     *
     * @private
     */
    _createRequestStream(): Duplex;
    /**
     * Implementation of Writable
     */
    _write(record_: Record, enc: string, cb: () => void): void;
    /**
     * Returns duplex stream which accepts CSV data input and batch result output
     */
    stream(): Duplex;
    /**
     * Execute batch operation
     */
    execute(input?: string | Record[] | Readable): this;
    run: (input?: string | Readable | Record[] | undefined) => this;
    exec: (input?: string | Readable | Record[] | undefined) => this;
    /**
     * Promise/A+ interface
     * Delegate to promise, return promise instance for batch result
     */
    then(onResolved: (res: BatchResult<Opr>) => void, onReject: (err: any) => void): Promise<void>;
    /**
     * Check the latest batch status in server
     */
    check(): Promise<BatchInfo>;
    /**
     * Polling the batch result and retrieve
     */
    poll(interval: number, timeout: number): void;
    /**
     * Retrieve batch result
     */
    retrieve(): Promise<BulkQueryBatchResult | BulkIngestBatchResult>;
    /**
     * Fetch query result as a record stream
     * @param {String} resultId - Result id
     * @returns {RecordStream} - Record stream, convertible to CSV data stream
     */
    result(resultId: string): Parsable<Record>;
}
/**
 * Class for Bulk API
 *
 * @class
 */
export declare class Bulk<S extends Schema> {
    _conn: Connection<S>;
    _logger: Logger;
    /**
     * Polling interval in milliseconds
     */
    pollInterval: number;
    /**
     * Polling timeout in milliseconds
     * @type {Number}
     */
    pollTimeout: number;
    /**
     *
     */
    constructor(conn: Connection<S>);
    /**
     *
     */
    _request<T>(request_: BulkRequest): import("../util/promise").StreamPromise<T>;
    /**
     * Create and start bulkload job and batch
     */
    load<Opr extends BulkOperation>(type: string, operation: Opr, input?: Record[] | Readable | string): Batch<S, Opr>;
    load<Opr extends BulkOperation>(type: string, operation: Opr, optionsOrInput?: BulkOptions | Record[] | Readable | string, input?: Record[] | Readable | string): Batch<S, Opr>;
    /**
     * Execute bulk query and get record stream
     */
    query(soql: string): Parsable<Record>;
    /**
     * Create a new job instance
     */
    createJob<Opr extends BulkOperation>(type: string, operation: Opr, options?: BulkOptions): Job<S, Opr>;
    /**
     * Get a job instance specified by given job ID
     *
     * @param {String} jobId - Job ID
     * @returns {Bulk~Job}
     */
    job<Opr extends BulkOperation>(jobId: string): Job<S, Opr>;
}
export default Bulk;
