/**
 *
 */
export declare type SoapSchemaDef = {
    type: string;
    extends?: string;
    props: {
        readonly [key: string]: SoapSchema;
    };
};
export declare type SoapSchema = readonly ['?', SoapSchema] | readonly [SoapSchema] | readonly SoapSchema[] | {
    readonly '?': {
        readonly [key: string]: SoapSchema;
    };
} | {
    readonly [key: string]: SoapSchema;
} | string | null;
declare type UndefKey<T extends {}, K extends keyof T = keyof T> = K extends keyof T ? undefined extends T[K] ? K : never : never;
declare type PartialForUndefined<T extends {}, UK extends keyof T = UndefKey<T>, RK extends keyof T = Exclude<keyof T, UK>> = [UK] extends [never] ? {
    -readonly [K in RK]-?: T[K];
} : [RK] extends [never] ? {
    -readonly [K in UK]+?: T[K];
} : {
    -readonly [K in UK]+?: T[K];
} & {
    -readonly [K in RK]-?: T[K];
};
declare type SchemaTypeDict = {
    [name: string]: {};
};
export declare type SoapSchemaType<T extends SoapSchemaDef, TypeDict extends SchemaTypeDict = SchemaTypeDict> = T['extends'] extends string ? TypeDict[T['extends']] & SoapSchemaElementType<T['props'], TypeDict, T['type']> : SoapSchemaElementType<T['props'], TypeDict, T['type']>;
export declare type SoapSchemaElementType<T extends SoapSchema, TypeDict extends SchemaTypeDict = SchemaTypeDict, N extends string = ''> = T extends readonly ['?', any] ? Array<SoapSchemaElementType<T[1], TypeDict, N>> | null | undefined : T extends readonly [any] ? Array<SoapSchemaElementType<T[0], TypeDict, N>> : T extends readonly any[] ? Array<SoapSchemaElementType<T[number], TypeDict, N>> : T extends {
    readonly '?': {
        readonly [key: string]: any;
    };
} ? PartialForUndefined<{
    [K in keyof T['?']]: SoapSchemaElementType<T['?'][K], TypeDict, N>;
}> | null | undefined : T extends {
    readonly [key: string]: any;
} ? PartialForUndefined<{
    [K in keyof T]: SoapSchemaElementType<T[K], TypeDict, N>;
}> : T extends 'string' ? string : T extends 'number' ? number : T extends 'boolean' ? boolean : T extends 'any' ? any : T extends '?string' ? string | null | undefined : T extends '?number' ? number | null | undefined : T extends '?boolean' ? boolean | null | undefined : T extends '?any' ? any | null | undefined : T extends N ? any : T extends keyof TypeDict ? TypeDict[T] : T extends null ? null : never;
export {};
