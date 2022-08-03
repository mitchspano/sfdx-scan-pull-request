/// <reference types="node" />
/**
 *
 */
import { Transform } from 'stream';
import { HttpRequest } from '../types';
declare function createRequest(jsonpParam?: string, timeout?: number): (params: HttpRequest) => Transform;
declare const _default: {
    supported: boolean;
    createRequest: typeof createRequest;
};
export default _default;
