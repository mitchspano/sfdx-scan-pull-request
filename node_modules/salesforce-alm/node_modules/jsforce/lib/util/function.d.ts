/**
 *
 */
export declare function isObject(v: any): v is object;
/**
 *
 */
export declare function isMapObject(v: any): v is {
    [name: string]: unknown;
};
/**
 *
 */
export declare function isFunction(v: any): v is (...args: any[]) => any;
/**
 *
 */
export declare function isNumber(v: any): v is number;
/**
 * Detect whether the value has CommonJS Promise/A+ interface or not
 */
export declare function isPromiseLike(v: any): v is {
    then: Function;
};
/**
 *
 */
export declare function identityFunc<T>(a: T): T;
/**
 *
 */
export declare function emptyFunc(): void;
