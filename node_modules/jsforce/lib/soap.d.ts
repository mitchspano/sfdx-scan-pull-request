/**
 * @file Manages method call to SOAP endpoint
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import HttpApi from './http-api';
import Connection from './connection';
import { Schema, HttpResponse, HttpRequest, SoapSchema, SoapSchemaDef } from './types';
/**
 *
 */
export declare function castTypeUsingSchema(value: unknown, schema?: SoapSchema | SoapSchemaDef, schemaDict?: {
    [name: string]: SoapSchemaDef;
}): any;
/**
 *
 */
export declare type SOAPOptions = {
    endpointUrl: string;
    xmlns?: string;
};
/**
 * Class for SOAP endpoint of Salesforce
 *
 * @protected
 * @class
 * @constructor
 * @param {Connection} conn - Connection instance
 * @param {Object} options - SOAP endpoint setting options
 * @param {String} options.endpointUrl - SOAP endpoint URL
 * @param {String} [options.xmlns] - XML namespace for method call (default is "urn:partner.soap.sforce.com")
 */
export declare class SOAP<S extends Schema> extends HttpApi<S> {
    _endpointUrl: string;
    _xmlns: string;
    constructor(conn: Connection<S>, options: SOAPOptions);
    /**
     * Invoke SOAP call using method and arguments
     */
    invoke(method: string, args: object, schema?: SoapSchema | SoapSchemaDef, schemaDict?: {
        [name: string]: SoapSchemaDef;
    }): Promise<any>;
    /** @override */
    beforeSend(request: HttpRequest & {
        _message: object;
    }): void;
    /** @override **/
    isSessionExpired(response: HttpResponse): boolean;
    /** @override **/
    parseError(body: string): {
        errorCode: string | undefined;
        message: string | undefined;
    };
    /** @override **/
    getResponseBody(response: HttpResponse): Promise<unknown>;
    /**
     * @private
     */
    _createEnvelope(message: object): string;
}
export default SOAP;
