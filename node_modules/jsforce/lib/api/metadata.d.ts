/// <reference types="node" />
/**
 * @file Manages Salesforce Metadata API
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { EventEmitter } from 'events';
import { Readable } from 'stream';
import Connection from '../connection';
import { Schema, SoapSchemaDef, SoapSchema } from '../types';
import { Metadata, SaveResult, UpsertResult, ListMetadataQuery, FileProperties, DescribeMetadataResult, RetrieveRequest, DeployOptions, RetrieveResult, DeployResult, AsyncResult, ApiSchemaTypes } from './metadata/schema';
export * from './metadata/schema';
/**
 *
 */
declare type MetadataType_<K extends keyof ApiSchemaTypes = keyof ApiSchemaTypes> = K extends keyof ApiSchemaTypes ? ApiSchemaTypes[K] extends Metadata ? K : never : never;
export declare type MetadataType = MetadataType_;
export declare type MetadataDefinition<T extends string, M extends Metadata = Metadata> = Metadata extends M ? T extends keyof ApiSchemaTypes & MetadataType ? ApiSchemaTypes[T] extends Metadata ? ApiSchemaTypes[T] : Metadata : Metadata : M;
declare type DeepPartial<T> = T extends any[] ? DeepPartial<T[number]>[] : T extends object ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : T;
export declare type InputMetadataDefinition<T extends string, M extends Metadata = Metadata> = DeepPartial<MetadataDefinition<T, M>>;
/**
 * Class for Salesforce Metadata API
 */
export declare class MetadataApi<S extends Schema> {
    _conn: Connection<S>;
    /**
     * Polling interval in milliseconds
     */
    pollInterval: number;
    /**
     * Polling timeout in milliseconds
     */
    pollTimeout: number;
    /**
     *
     */
    constructor(conn: Connection<S>);
    /**
     * Call Metadata API SOAP endpoint
     *
     * @private
     */
    _invoke(method: string, message: object, schema?: SoapSchema | SoapSchemaDef): Promise<any>;
    /**
     * Add one or more new metadata components to the organization.
     */
    create<M extends Metadata = Metadata, T extends MetadataType = MetadataType, MD extends InputMetadataDefinition<T, M> = InputMetadataDefinition<T, M>>(type: T, metadata: MD[]): Promise<SaveResult[]>;
    create<M extends Metadata = Metadata, T extends MetadataType = MetadataType, MD extends InputMetadataDefinition<T, M> = InputMetadataDefinition<T, M>>(type: T, metadata: MD): Promise<SaveResult>;
    create<M extends Metadata = Metadata, T extends MetadataType = MetadataType, MD extends InputMetadataDefinition<T, M> = InputMetadataDefinition<T, M>>(type: T, metadata: MD | MD[]): Promise<SaveResult | SaveResult[]>;
    /**
     * Read specified metadata components in the organization.
     */
    read<M extends Metadata = Metadata, T extends MetadataType = MetadataType, MD extends MetadataDefinition<T, M> = MetadataDefinition<T, M>>(type: T, fullNames: string[]): Promise<MD[]>;
    read<M extends Metadata = Metadata, T extends MetadataType = MetadataType, MD extends MetadataDefinition<T, M> = MetadataDefinition<T, M>>(type: T, fullNames: string): Promise<MD>;
    read<M extends Metadata = Metadata, T extends MetadataType = MetadataType, MD extends MetadataDefinition<T, M> = MetadataDefinition<T, M>>(type: T, fullNames: string | string[]): Promise<MD | MD[]>;
    /**
     * Update one or more metadata components in the organization.
     */
    update<M extends Metadata = Metadata, T extends string = string, MD extends InputMetadataDefinition<T, M> = InputMetadataDefinition<T, M>>(type: T, metadata: Partial<MD>[]): Promise<SaveResult[]>;
    update<M extends Metadata = Metadata, T extends string = string, MD extends InputMetadataDefinition<T, M> = InputMetadataDefinition<T, M>>(type: T, metadata: Partial<MD>): Promise<SaveResult>;
    update<M extends Metadata = Metadata, T extends string = string, MD extends InputMetadataDefinition<T, M> = InputMetadataDefinition<T, M>>(type: T, metadata: Partial<MD> | Partial<MD>[]): Promise<SaveResult | SaveResult[]>;
    /**
     * Upsert one or more components in your organization's data.
     */
    upsert<M extends Metadata = Metadata, T extends string = string, MD extends InputMetadataDefinition<T, M> = InputMetadataDefinition<T, M>>(type: T, metadata: MD[]): Promise<UpsertResult[]>;
    upsert<M extends Metadata = Metadata, T extends string = string, MD extends InputMetadataDefinition<T, M> = InputMetadataDefinition<T, M>>(type: T, metadata: MD): Promise<UpsertResult>;
    upsert<M extends Metadata = Metadata, T extends string = string, MD extends InputMetadataDefinition<T, M> = InputMetadataDefinition<T, M>>(type: T, metadata: MD | MD[]): Promise<UpsertResult | UpsertResult[]>;
    /**
     * Deletes specified metadata components in the organization.
     */
    delete(type: string, fullNames: string[]): Promise<SaveResult[]>;
    delete(type: string, fullNames: string): Promise<SaveResult>;
    delete(type: string, fullNames: string | string[]): Promise<SaveResult | SaveResult[]>;
    /**
     * Rename fullname of a metadata component in the organization
     */
    rename(type: string, oldFullName: string, newFullName: string): Promise<SaveResult>;
    /**
     * Retrieves the metadata which describes your organization, including Apex classes and triggers,
     * custom objects, custom fields on standard objects, tab sets that define an app,
     * and many other components.
     */
    describe(asOfVersion?: string): Promise<DescribeMetadataResult>;
    /**
     * Retrieves property information about metadata components in your organization
     */
    list(queries: ListMetadataQuery | ListMetadataQuery[], asOfVersion?: string): Promise<FileProperties[]>;
    /**
     * Checks the status of asynchronous metadata calls
     */
    checkStatus(asyncProcessId: string): AsyncResultLocator<S, AsyncResult>;
    /**
     * Retrieves XML file representations of components in an organization
     */
    retrieve(request: Partial<RetrieveRequest>): RetrieveResultLocator<S>;
    /**
     * Checks the status of declarative metadata call retrieve() and returns the zip file contents
     */
    checkRetrieveStatus(asyncProcessId: string): Promise<RetrieveResult>;
    /**
     * Will deploy a recently validated deploy request
     *
     * @param options.id = the deploy ID that's been validated already from a previous checkOnly deploy request
     * @param options.rest = a boolean whether or not to use the REST API
     * @returns the deploy ID of the recent validation request
     */
    deployRecentValidation(options: {
        id: string;
        rest?: boolean;
    }): Promise<string>;
    /**
     * Deploy components into an organization using zipped file representations
     * using the REST Metadata API instead of SOAP
     */
    deployRest(zipInput: Buffer, options?: Partial<DeployOptions>): DeployResultLocator<S>;
    /**
     * Deploy components into an organization using zipped file representations
     */
    deploy(zipInput: Readable | Buffer | string, options?: Partial<DeployOptions>): DeployResultLocator<S>;
    /**
     * Checks the status of declarative metadata call deploy()
     */
    checkDeployStatus(asyncProcessId: string, includeDetails?: boolean): Promise<DeployResult>;
}
/**
 * The locator class for Metadata API asynchronous call result
 */
export declare class AsyncResultLocator<S extends Schema, R extends {} = AsyncResult> extends EventEmitter {
    _meta: MetadataApi<S>;
    _promise: Promise<AsyncResult>;
    _id: string | undefined;
    /**
     *
     */
    constructor(meta: MetadataApi<S>, promise: Promise<AsyncResult>);
    /**
     * Promise/A+ interface
     * http://promises-aplus.github.io/promises-spec/
     *
     * @method Metadata~AsyncResultLocator#then
     */
    then<U, V>(onResolve?: ((result: AsyncResult) => U | Promise<U>) | null | undefined, onReject?: ((err: Error) => V | Promise<V>) | null | undefined): Promise<U | V>;
    /**
     * Check the status of async request
     */
    check(): Promise<AsyncResult>;
    /**
     * Polling until async call status becomes complete or error
     */
    poll(interval: number, timeout: number): void;
    /**
     * Check and wait until the async requests become in completed status
     */
    complete(): Promise<R>;
}
/**
 * The locator class to track retreive() Metadata API call result
 */
export declare class RetrieveResultLocator<S extends Schema> extends AsyncResultLocator<S, RetrieveResult> {
    /**
     * Check and wait until the async request becomes in completed status,
     * and retrieve the result data.
     */
    complete(): Promise<RetrieveResult>;
    /**
     * Change the retrieved result to Node.js readable stream
     */
    stream(): Readable;
}
/**
 * The locator class to track deploy() Metadata API call result
 *
 * @protected
 * @class Metadata~DeployResultLocator
 * @extends Metadata~AsyncResultLocator
 * @param {Metadata} meta - Metadata API object
 * @param {Promise.<Metadata~AsyncResult>} result - Promise object for async result of deploy() call
 */
export declare class DeployResultLocator<S extends Schema> extends AsyncResultLocator<S, DeployResult> {
    /**
     * Check and wait until the async request becomes in completed status,
     * and retrieve the result data.
     */
    complete(includeDetails?: boolean): Promise<DeployResult>;
}
export default MetadataApi;
