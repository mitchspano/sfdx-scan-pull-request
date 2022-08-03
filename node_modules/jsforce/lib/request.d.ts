/// <reference types="node" />
import { Duplex } from 'stream';
import { HttpRequest, HttpRequestOptions } from './types';
/**
 *
 */
export declare function setDefaults(defaults_: HttpRequestOptions): void;
/**
 *
 */
export default function request(req: HttpRequest, options_?: HttpRequestOptions): Duplex;
