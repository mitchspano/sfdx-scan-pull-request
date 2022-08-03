/// <reference types="node" />
/**
 *
 */
import { Duplex } from 'stream';
import { HttpRequest, HttpRequestOptions, HttpResponse } from './types';
import { StreamPromise } from './util/promise';
/**
 * Class for HTTP request transport
 *
 * @class
 * @protected
 */
export declare class Transport {
    /**
     */
    httpRequest(req: HttpRequest, options?: HttpRequestOptions): StreamPromise<HttpResponse>;
    /**
     * @protected
     */
    getRequestStreamCreator(): (req: HttpRequest, options: HttpRequestOptions) => Duplex;
}
/**
 * Class for JSONP request transport
 */
export declare class JsonpTransport extends Transport {
    static supprted: boolean;
    _jsonpParam: string;
    constructor(jsonpParam: string);
    getRequestStreamCreator(): (req: HttpRequest, options: HttpRequestOptions) => Duplex;
}
/**
 * Class for Sfdc Canvas request transport
 */
export declare class CanvasTransport extends Transport {
    static supported: boolean;
    _signedRequest: any;
    constructor(signedRequest: any);
    getRequestStreamCreator(): (req: HttpRequest, options: HttpRequestOptions) => Duplex;
}
/**
 * Class for HTTP request transport using cross-domain AJAX proxy service
 */
export declare class XdProxyTransport extends Transport {
    _xdProxyUrl: string;
    constructor(xdProxyUrl: string);
    /**
     * Make HTTP request via AJAX proxy
     */
    httpRequest(req: HttpRequest, _options?: HttpRequestOptions): StreamPromise<HttpResponse>;
}
/**
 * Class for HTTP request transport using a proxy server
 */
export declare class HttpProxyTransport extends Transport {
    _httpProxy: string;
    constructor(httpProxy: string);
    /**
     * Make HTTP request via proxy server
     */
    httpRequest(req: HttpRequest, options_?: HttpRequestOptions): StreamPromise<HttpResponse>;
}
export default Transport;
