/// <reference types="node" />
/**
 *
 */
import { EventEmitter } from 'events';
import { Logger } from './util/logger';
import { StreamPromise } from './util/promise';
import Connection from './connection';
import Transport from './transport';
import { HttpRequest, HttpResponse, Optional, Schema } from './types';
/**
 * HTTP based API class with authorization hook
 */
export declare class HttpApi<S extends Schema> extends EventEmitter {
    static _logger: Logger;
    _conn: Connection<S>;
    _logger: Logger;
    _transport: Transport;
    _responseType: string | void;
    _noContentResponse: string | void;
    constructor(conn: Connection<S>, options: any);
    /**
     * Callout to API endpoint using http
     */
    request<R = unknown>(request: HttpRequest): StreamPromise<R>;
    /**
     * @protected
     */
    getRefreshDelegate(): Optional<import("./session-refresh-delegate").SessionRefreshDelegate<S>>;
    /**
     * @protected
     */
    beforeSend(request: HttpRequest): void;
    /**
     * Detect response content mime-type
     * @protected
     */
    getResponseContentType(response: HttpResponse): Optional<string>;
    /**
     * @private
     */
    parseResponseBody(response: HttpResponse): Promise<any>;
    /**
     * Get response body
     * @protected
     */
    getResponseBody(response: HttpResponse): Promise<any>;
    /**
     * Detect session expiry
     * @protected
     */
    isSessionExpired(response: HttpResponse): boolean;
    /**
     * Detect error response
     * @protected
     */
    isErrorResponse(response: HttpResponse): boolean;
    /**
     * Detect error in response body
     * @protected
     */
    hasErrorInResponseBody(_body: Optional<string>): boolean;
    /**
     * Parsing error message in response
     * @protected
     */
    parseError(body: any): any;
    /**
     * Get error message in response
     * @protected
     */
    getError(response: HttpResponse, body?: any): Promise<Error>;
}
export default HttpApi;
