export declare type Optional<T> = T | null | undefined;
export declare type StringKeys<O> = Extract<keyof O, string>;
export declare type PickIfMatch<O extends {
    [name: string]: any;
}, P extends string> = Pick<O, Extract<P, keyof O>>;
export declare type IsEqualType<S, T> = [S] extends [T] ? [T] extends [S] ? true : false : false;
export declare type ConditionalPartial<O, IsPartial extends boolean> = IsPartial extends true ? Partial<O> : O;
