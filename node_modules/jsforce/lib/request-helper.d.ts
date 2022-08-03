/// <reference types="node" />
import { PassThrough } from 'stream';
import { HttpRequest, HttpRequestOptions, HttpResponse } from './types';
/**
 *
 */
export declare function createHttpRequestHandlerStreams(req: HttpRequest): {
    input: PassThrough;
    output: PassThrough;
    stream: import("stream").Duplex;
};
/**
 *
 */
export declare function isRedirect(status: number): boolean;
/**
 *
 */
export declare function performRedirectRequest(req: HttpRequest, res: Omit<HttpResponse, 'body'>, followRedirect: NonNullable<HttpRequestOptions['followRedirect']>, counter: number, redirectCallback: (req: HttpRequest) => void): void;
/**
 *
 */
export declare function executeWithTimeout<T>(execFn: () => Promise<T>, msec: number | undefined, cancelCallback?: () => void): Promise<T>;
