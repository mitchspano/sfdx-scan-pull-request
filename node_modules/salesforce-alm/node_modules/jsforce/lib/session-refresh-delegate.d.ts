/**
 *
 */
import { Logger } from './util/logger';
import { Callback, Schema } from './types';
import Connection from './connection';
import { TokenResponse } from './oauth2';
/**
 *
 */
export declare type SessionRefreshFunc<S extends Schema> = (conn: Connection<S>, callback: Callback<string, TokenResponse>) => void;
/**
 *
 */
export declare class SessionRefreshDelegate<S extends Schema> {
    static _logger: Logger;
    private _refreshFn;
    private _conn;
    private _logger;
    private _lastRefreshedAt;
    private _refreshPromise;
    constructor(conn: Connection<S>, refreshFn: SessionRefreshFunc<S>);
    /**
     * Refresh access token
     * @private
     */
    refresh(since: number): Promise<void>;
    isRefreshing(): boolean;
    waitRefresh(): Promise<void>;
}
export default SessionRefreshDelegate;
