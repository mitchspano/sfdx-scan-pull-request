/// <reference types="node" />
/**
 * @file Browser client connection management class
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { EventEmitter } from 'events';
import Connection, { ConnectionConfig } from '../connection';
import { TokenResponse } from '../oauth2';
/**
 *
 */
export declare type LoginOptions = {
    scope?: string;
    size?: {
        width: number;
        height: number;
    };
};
/**
 *
 */
export declare class BrowserClient extends EventEmitter {
    _prefix: string;
    _config: ConnectionConfig | undefined;
    _connection: Connection | undefined;
    /**
     *
     */
    constructor(prefix?: string);
    get connection(): Connection;
    /**
     *
     */
    init(config: ConnectionConfig): void;
    /**
     *
     */
    login(options?: LoginOptions): Promise<{
        status: string;
    }>;
    /**
     *
     */
    isLoggedIn(): boolean;
    /**
     *
     */
    logout(): void;
    /**
     * @private
     */
    _getTokens(): {
        accessToken: string | null;
        instanceUrl: string | null;
        userInfo: {
            id: string;
            organizationId: string;
            url: string;
        } | undefined;
    } | null;
    /**
     * @private
     */
    _storeTokens(params: TokenResponse): void;
    /**
     * @private
     */
    _removeTokens(): void;
    /**
     * @private
     */
    _getError(): any;
    /**
     * @private
     */
    _storeError(err: any): void;
}
/**
 *
 */
declare const client: BrowserClient;
export default client;
