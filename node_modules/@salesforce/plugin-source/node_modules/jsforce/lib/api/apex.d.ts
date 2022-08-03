import Connection from '../connection';
import { HttpRequest, HttpMethods, Schema } from '../types';
/**
 * API class for Apex REST endpoint call
 */
export declare class Apex<S extends Schema> {
    _conn: Connection<S>;
    /**
     *
     */
    constructor(conn: Connection<S>);
    _baseUrl(): string;
    /**
     * @private
     */
    _createRequestParams(method: HttpMethods, path: string, body?: Object, options?: {
        headers?: HttpRequest['headers'];
    }): HttpRequest;
    /**
     * Call Apex REST service in GET request
     */
    get<R = unknown>(path: string, options?: Object): import("../util/promise").StreamPromise<R>;
    /**
     * Call Apex REST service in POST request
     */
    post<R = unknown>(path: string, body?: Object, options?: Object): import("../util/promise").StreamPromise<R>;
    /**
     * Call Apex REST service in PUT request
     */
    put<R = unknown>(path: string, body?: Object, options?: Object): import("../util/promise").StreamPromise<R>;
    /**
     * Call Apex REST service in PATCH request
     */
    patch<R = unknown>(path: string, body?: Object, options?: Object): import("../util/promise").StreamPromise<R>;
    /**
     * Call Apex REST service in DELETE request
     */
    delete<R = unknown>(path: string, options?: Object): import("../util/promise").StreamPromise<R>;
    /**
     * Synonym of Apex#delete()
     */
    del: <R = unknown>(path: string, options?: Object | undefined) => import("../util/promise").StreamPromise<R>;
}
export default Apex;
