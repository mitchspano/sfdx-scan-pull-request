/// <reference types="node" />
import Connection from '../connection';
import { HttpRequest, Schema } from '../types';
/**
 *
 */
export declare type ChatterRequestParams = Omit<HttpRequest, 'body'> & {
    body?: string | object | null;
};
export declare type BatchRequestParams = {
    method: string;
    url: string;
    richInput?: any;
};
declare type BatchRequestTupple<S extends Schema, RT extends any[]> = {
    [K in keyof RT]: Request<S, RT[K]>;
};
declare type BatchResultTupple<RT extends any[]> = {
    [K in keyof RT]: {
        statusCode: number;
        result: RT[K];
    };
};
export declare type BatchResponse<RT extends any[]> = {
    hasErrors: boolean;
    results: BatchResultTupple<RT>;
};
/**
 * A class representing chatter API request
 */
declare class Request<S extends Schema, R> {
    _chatter: Chatter<S>;
    _request: ChatterRequestParams;
    _promise: Promise<R> | undefined;
    constructor(chatter: Chatter<S>, request: ChatterRequestParams);
    /**
     * Retrieve parameters in batch request form
     */
    batchParams(): {
        richInput?: string | object | null;
        method: import("../types").HttpMethods;
        url: string;
    };
    /**
     * Retrieve parameters in batch request form
     *
     * @method Chatter~Request#promise
     * @returns {Promise.<Chatter~RequestResult>}
     */
    promise(): Promise<R>;
    /**
     * Returns Node.js Stream object for request
     *
     * @method Chatter~Request#stream
     * @returns {stream.Stream}
     */
    stream(): import("stream").Duplex;
    /**
     * Promise/A+ interface
     * http://promises-aplus.github.io/promises-spec/
     *
     * Delegate to deferred promise, return promise instance for batch result
     */
    then<U>(onResolve?: (value: R) => U | PromiseLike<U>, onReject?: (e: any) => U | PromiseLike<U>): Promise<U>;
}
export declare class Resource<S extends Schema, R> extends Request<S, R> {
    _url: string;
    /**
     *
     */
    constructor(chatter: Chatter<S>, url: string, queryParams?: {
        [name: string]: string | number | boolean | null;
    } | null);
    /**
     * Create a new resource
     */
    create<R1 = any>(data: string | object | null): Request<S, R1>;
    /**
     * Retrieve resource content
     */
    retrieve<R1 = R>(): Request<S, R1>;
    /**
     * Update specified resource
     */
    update<R1 = any>(data: object): Request<S, R1>;
    /**
     * Delete specified resource
     */
    destroy(): Request<S, void>;
    /**
     * Synonym of Resource#destroy()
     */
    delete: () => Request<S, void>;
    /**
     * Synonym of Resource#destroy()
     */
    del: () => Request<S, void>;
}
/**
 * API class for Chatter REST API call
 */
export declare class Chatter<S extends Schema> {
    _conn: Connection<S>;
    /**
     *
     */
    constructor(conn: Connection<S>);
    /**
     * Sending request to API endpoint
     * @private
     */
    _request<R>(req_: ChatterRequestParams): import("../util/promise").StreamPromise<R>;
    /**
     * Convert path to site root relative url
     * @private
     */
    _normalizeUrl(url: string): string;
    /**
     * Make a request for chatter API resource
     */
    request<R = unknown>(req: ChatterRequestParams): Request<S, R>;
    /**
     * Make a resource request to chatter API
     */
    resource<R = unknown>(url: string, queryParams?: {
        [name: string]: string | number | boolean | null;
    } | null): Resource<S, R>;
    /**
     * Make a batch request to chatter API
     */
    batch<RT extends any[]>(requests: BatchRequestTupple<S, RT>): Promise<BatchResponse<RT>>;
}
export default Chatter;
