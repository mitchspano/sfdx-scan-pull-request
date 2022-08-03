/// <reference types="node" />
/**
 * @file Manages asynchronous method response cache
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { EventEmitter } from 'events';
/**
 * type def
 */
export declare type CachingOptions = {
    key?: string | ((...args: any[]) => string);
    namespace?: string;
    strategy: 'NOCACHE' | 'HIT' | 'IMMEDIATE';
};
declare type CacheValue<T> = {
    error?: Error;
    result: T;
};
export declare type CachedFunction<Fn> = Fn & {
    clear: (...args: any[]) => void;
};
/**
 * Class for managing cache entry
 *
 * @private
 * @class
 * @constructor
 * @template T
 */
declare class CacheEntry<T> extends EventEmitter {
    _fetching: boolean;
    _value: CacheValue<T> | void;
    /**
     * Get value in the cache entry
     *
     * @param {() => Promise<T>} [callback] - Callback function callbacked the cache entry updated
     * @returns {T|undefined}
     */
    get(callback?: (v: T) => any): CacheValue<T> | void;
    /**
     * Set value in the cache entry
     */
    set(value: CacheValue<T>): void;
    /**
     * Clear cached value
     */
    clear(): void;
}
/**
 * Caching manager for async methods
 *
 * @class
 * @constructor
 */
export declare class Cache {
    private _entries;
    /**
     * retrive cache entry, or create if not exists.
     *
     * @param {String} [key] - Key of cache entry
     * @returns {CacheEntry}
     */
    get(key: string): CacheEntry<any>;
    /**
     * clear cache entries prefix matching given key
     */
    clear(key?: string): void;
    /**
     * Enable caching for async call fn to lookup the response cache first,
     * then invoke original if no cached value.
     */
    createCachedFunction<Fn extends Function>(fn: Fn, scope: any, options?: CachingOptions): CachedFunction<Fn>;
}
export default Cache;
