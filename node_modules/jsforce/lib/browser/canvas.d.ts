/// <reference types="node" />
/**
 *
 */
import { Transform } from 'stream';
import { HttpRequest, SignedRequestObject } from '../types';
declare function createRequest(signedRequest: SignedRequestObject): (params: HttpRequest) => Transform;
declare const _default: {
    supported: boolean;
    createRequest: typeof createRequest;
};
export default _default;
