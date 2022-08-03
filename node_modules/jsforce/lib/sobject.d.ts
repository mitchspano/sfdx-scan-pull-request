/// <reference types="node" />
/**
 *
 */
import { Logger } from './util/logger';
import { Record, DescribeLayoutResult, DescribeCompactLayoutsResult, DescribeApprovalLayoutsResult, Optional, DmlOptions, SaveResult, UpsertResult, RetrieveOptions, Schema, SObjectNames, SObjectRecord, SObjectInputRecord, SObjectUpdateRecord, SObjectFieldNames, FieldProjectionConfig, FieldPathSpecifier, FieldPathScopedProjection } from './types';
import Connection from './connection';
import RecordReference from './record-reference';
import Query, { QueryOptions, QueryField, QueryCondition, QueryConfig } from './query';
import QuickAction from './quick-action';
import { CachedFunction } from './cache';
import { Readable } from 'stream';
export declare type FindOptions<S extends Schema, N extends SObjectNames<S>> = Partial<QueryOptions & Pick<QueryConfig<S, N>, 'sort' | 'includes'> & {
    limit: number;
    offset: number;
}>;
/**
 * A class for organizing all SObject access
 */
export declare class SObject<S extends Schema, N extends SObjectNames<S>, FieldNames extends SObjectFieldNames<S, N> = SObjectFieldNames<S, N>, RetrieveRecord extends SObjectRecord<S, N, '*'> = SObjectRecord<S, N, '*'>, InputRecord extends SObjectInputRecord<S, N> = SObjectInputRecord<S, N>, UpdateRecord extends SObjectUpdateRecord<S, N> = SObjectUpdateRecord<S, N>> {
    static _logger: Logger;
    type: N;
    _conn: Connection<S>;
    _logger: Logger;
    layouts$: CachedFunction<(ln?: string) => Promise<DescribeLayoutResult>>;
    layouts$$: CachedFunction<(ln?: string) => DescribeLayoutResult>;
    compactLayouts$: CachedFunction<() => Promise<DescribeCompactLayoutsResult>>;
    compactLayouts$$: CachedFunction<() => DescribeCompactLayoutsResult>;
    approvalLayouts$: CachedFunction<() => Promise<DescribeApprovalLayoutsResult>>;
    approvalLayouts$$: CachedFunction<() => DescribeApprovalLayoutsResult>;
    /**
     *
     */
    constructor(conn: Connection<S>, type: N);
    /**
     * Create records
     */
    create(records: InputRecord[], options?: DmlOptions): Promise<SaveResult[]>;
    create(records: InputRecord, options?: DmlOptions): Promise<SaveResult>;
    create(records: InputRecord | InputRecord[], options?: DmlOptions): Promise<SaveResult | SaveResult[]>;
    /**
     * Synonym of SObject#create()
     */
    insert: {
        (records: InputRecord[], options?: DmlOptions | undefined): Promise<SaveResult[]>;
        (records: InputRecord, options?: DmlOptions | undefined): Promise<SaveResult>;
        (records: InputRecord | InputRecord[], options?: DmlOptions | undefined): Promise<SaveResult | SaveResult[]>;
    };
    /**
     * Retrieve specified records
     */
    retrieve(ids: string[], options?: RetrieveOptions): Promise<RetrieveRecord[]>;
    retrieve(ids: string, options?: RetrieveOptions): Promise<RetrieveRecord>;
    retrieve(ids: string | string[], options?: RetrieveOptions): Promise<RetrieveRecord | RetrieveRecord[]>;
    /**
     * Update records
     */
    update(records: UpdateRecord[], options?: DmlOptions): Promise<SaveResult[]>;
    update(records: UpdateRecord, options?: DmlOptions): Promise<SaveResult>;
    update(records: UpdateRecord | UpdateRecord[], options?: DmlOptions): Promise<SaveResult | SaveResult[]>;
    /**
     * Upsert records
     */
    upsert(records: InputRecord[], extIdField: FieldNames, options?: DmlOptions): Promise<UpsertResult[]>;
    upsert(records: InputRecord, extIdField: FieldNames, options?: DmlOptions): Promise<UpsertResult>;
    upsert(records: InputRecord | InputRecord[], extIdField: FieldNames, options?: DmlOptions): Promise<UpsertResult | UpsertResult[]>;
    /**
     * Delete records
     */
    destroy(ids: string[], options?: DmlOptions): Promise<SaveResult[]>;
    destroy(ids: string, options?: DmlOptions): Promise<SaveResult>;
    destroy(ids: string | string[], options?: DmlOptions): Promise<SaveResult | SaveResult[]>;
    /**
     * Synonym of SObject#destroy()
     */
    delete: {
        (ids: string[], options?: DmlOptions | undefined): Promise<SaveResult[]>;
        (ids: string, options?: DmlOptions | undefined): Promise<SaveResult>;
        (ids: string | string[], options?: DmlOptions | undefined): Promise<SaveResult | SaveResult[]>;
    };
    /**
     * Synonym of SObject#destroy()
     */
    del: {
        (ids: string[], options?: DmlOptions | undefined): Promise<SaveResult[]>;
        (ids: string, options?: DmlOptions | undefined): Promise<SaveResult>;
        (ids: string | string[], options?: DmlOptions | undefined): Promise<SaveResult | SaveResult[]>;
    };
    /**
     * Call Bulk#load() to execute bulkload, returning batch object
     */
    bulkload(operation: 'insert' | 'update' | 'upsert' | 'delete' | 'hardDelete', optionsOrInput?: Object | Record[] | Readable | string, input?: Record[] | Readable | string): import("./api/bulk").Batch<S, "update" | "insert" | "upsert" | "delete" | "hardDelete">;
    /**
     * Bulkly insert input data using bulk API
     */
    createBulk(input?: Record[] | Readable | string): import("./api/bulk").Batch<S, "update" | "insert" | "upsert" | "delete" | "hardDelete">;
    /**
     * Synonym of SObject#createBulk()
     */
    insertBulk: (input?: string | Readable | Record[] | undefined) => import("./api/bulk").Batch<S, "update" | "insert" | "upsert" | "delete" | "hardDelete">;
    /**
     * Bulkly update records by input data using bulk API
     */
    updateBulk(input?: Record[] | Readable | string): import("./api/bulk").Batch<S, "update" | "insert" | "upsert" | "delete" | "hardDelete">;
    /**
     * Bulkly upsert records by input data using bulk API
     */
    upsertBulk(input?: Record[] | Readable | string, extIdField?: string): import("./api/bulk").Batch<S, "update" | "insert" | "upsert" | "delete" | "hardDelete">;
    /**
     * Bulkly delete records specified by input data using bulk API
     */
    destroyBulk(input?: Record[] | Readable | string): import("./api/bulk").Batch<S, "update" | "insert" | "upsert" | "delete" | "hardDelete">;
    /**
     * Synonym of SObject#destroyBulk()
     */
    deleteBulk: (input?: string | Readable | Record[] | undefined) => import("./api/bulk").Batch<S, "update" | "insert" | "upsert" | "delete" | "hardDelete">;
    /**
     * Bulkly hard delete records specified in input data using bulk API
     */
    destroyHardBulk(input: Record[] | Readable): import("./api/bulk").Batch<S, "update" | "insert" | "upsert" | "delete" | "hardDelete">;
    /**
     * Synonym of SObject#destroyHardBulk()
     */
    deleteHardBulk: (input: Record[] | Readable) => import("./api/bulk").Batch<S, "update" | "insert" | "upsert" | "delete" | "hardDelete">;
    /**
     * Describe SObject metadata
     */
    describe(): Promise<import("./types").DescribeSObjectResult>;
    /**
     *
     */
    describe$(): Promise<import("./types").DescribeSObjectResult>;
    /**
     *
     */
    describe$$(): import("./types").DescribeSObjectResult;
    /**
     * Get record representation instance by given id
     */
    record(id: string): RecordReference<S, N>;
    /**
     * Retrieve recently accessed records
     */
    recent(): Promise<Record[]>;
    /**
     * Retrieve the updated records
     */
    updated(start: string | Date, end: string | Date): Promise<import("./types").UpdatedResult>;
    /**
     * Retrieve the deleted records
     */
    deleted(start: string | Date, end: string | Date): Promise<import("./types").DeletedResult>;
    /**
     * Describe layout information for SObject
     */
    layouts(layoutName?: string): Promise<DescribeLayoutResult>;
    /**
     * @typedef {Object} CompactLayoutInfo
     * @prop {Array.<Object>} compactLayouts - Array of compact layouts
     * @prop {String} defaultCompactLayoutId - ID of default compact layout
     * @prop {Array.<Object>} recordTypeCompactLayoutMappings - Array of record type mappings
     */
    /**
     * Describe compact layout information defined for SObject
     *
     * @param {Callback.<CompactLayoutInfo>} [callback] - Callback function
     * @returns {Promise.<CompactLayoutInfo>}
     */
    compactLayouts(): Promise<DescribeCompactLayoutsResult>;
    /**
     * Describe compact layout information defined for SObject
     *
     * @param {Callback.<ApprovalLayoutInfo>} [callback] - Callback function
     * @returns {Promise.<ApprovalLayoutInfo>}
     */
    approvalLayouts(): Promise<DescribeApprovalLayoutsResult>;
    /**
     * Find and fetch records which matches given conditions
     */
    find<R extends Record = Record>(conditions?: Optional<QueryCondition<S, N>>): Query<S, N, SObjectRecord<S, N, '*', R>, 'Records'>;
    find<R extends Record = Record, FP extends FieldPathSpecifier<S, N> = FieldPathSpecifier<S, N>, FPC extends FieldProjectionConfig = FieldPathScopedProjection<S, N, FP>>(conditions: Optional<QueryCondition<S, N>>, fields?: Optional<QueryField<S, N, FP>>, options?: FindOptions<S, N>): Query<S, N, SObjectRecord<S, N, FPC, R>, 'Records'>;
    /**
     * Fetch one record which matches given conditions
     */
    findOne<R extends Record = Record>(conditions?: Optional<QueryCondition<S, N>>): Query<S, N, SObjectRecord<S, N, '*', R>, 'SingleRecord'>;
    findOne<R extends Record = Record, FP extends FieldPathSpecifier<S, N> = FieldPathSpecifier<S, N>, FPC extends FieldProjectionConfig = FieldPathScopedProjection<S, N, FP>>(conditions: Optional<QueryCondition<S, N>>, fields?: Optional<QueryField<S, N, FP>>, options?: FindOptions<S, N>): Query<S, N, SObjectRecord<S, N, FPC, R>, 'SingleRecord'>;
    /**
     * Find and fetch records only by specifying fields to fetch.
     */
    select<R extends Record = Record, FP extends FieldPathSpecifier<S, N> = FieldPathSpecifier<S, N>, FPC extends FieldProjectionConfig = FieldPathScopedProjection<S, N, FP>>(fields: QueryField<S, N, FP>): Query<S, N, SObjectRecord<S, N, FPC, R>, 'Records'>;
    /**
     * Count num of records which matches given conditions
     */
    count(conditions?: Optional<QueryCondition<S, N>>): Query<S, N, SObjectRecord<S, N, "*" | FieldPathScopedProjection<S, N, Extract<keyof S["SObjects"][N]["Fields"], string>> | FieldPathScopedProjection<S, N, { [K in Extract<keyof S["SObjects"][N]["ParentReferences"], string>]?: "*" | ("*" | Extract<keyof Extract<S["SObjects"][N]["ParentReferences"][K], import("./types").SObjectDefinition<string>>["Fields"], string> | { [K_1 in Extract<keyof Extract<S["SObjects"][N]["ParentReferences"][K], import("./types").SObjectDefinition<string>>["ParentReferences"], string>]?: "*" | ("*" | Extract<keyof Extract<Extract<S["SObjects"][N]["ParentReferences"][K], import("./types").SObjectDefinition<string>>["ParentReferences"][K_1], import("./types").SObjectDefinition<string>>["Fields"], string> | { [K_2 in Extract<keyof Extract<Extract<S["SObjects"][N]["ParentReferences"][K], import("./types").SObjectDefinition<string>>["ParentReferences"][K_1], import("./types").SObjectDefinition<string>>["ParentReferences"], string>]?: "*" | ("*" | Extract<keyof Extract<Extract<Extract<S["SObjects"][N]["ParentReferences"][K], import("./types").SObjectDefinition<string>>["ParentReferences"][K_1], import("./types").SObjectDefinition<string>>["ParentReferences"][K_2], import("./types").SObjectDefinition<string>>["Fields"], string>[])[] | undefined; })[] | undefined; })[] | undefined; }>, Record, {}>, "Count">;
    /**
     * Returns the list of list views for the SObject
     *
     * @param {Callback.<ListViewsInfo>} [callback] - Callback function
     * @returns {Promise.<ListViewsInfo>}
     */
    listviews(): import("./util/promise").StreamPromise<unknown>;
    /**
     * Returns the list view info in specifed view id
     *
     * @param {String} id - List view ID
     * @returns {ListView}
     */
    listview(id: string): ListView;
    /**
     * Returns all registered quick actions for the SObject
     *
     * @param {Callback.<Array.<QuickAction~QuickActionInfo>>} [callback] - Callback function
     * @returns {Promise.<Array.<QuickAction~QuickActionInfo>>}
     */
    quickActions(): import("./util/promise").StreamPromise<unknown>;
    /**
     * Get reference for specified quick aciton in the SObject
     *
     * @param {String} actionName - Name of the quick action
     * @returns {QuickAction}
     */
    quickAction(actionName: string): QuickAction<S>;
}
/**
 * A class for organizing list view information
 *
 * @protected
 * @class ListView
 * @param {Connection} conn - Connection instance
 * @param {SObject} type - SObject type
 * @param {String} id - List view ID
 */
declare class ListView {
    _conn: Connection;
    type: string;
    id: string;
    /**
     *
     */
    constructor(conn: Connection, type: string, id: string);
    /**
     * Executes query for the list view and returns the resulting data and presentation information.
     */
    results(): import("./util/promise").StreamPromise<unknown>;
    /**
     * Returns detailed information about a list view
     */
    describe(options?: {
        headers?: {
            [name: string]: string;
        };
    }): import("./util/promise").StreamPromise<unknown>;
    /**
     * Explain plan for executing list view
     */
    explain(): import("./util/promise").StreamPromise<any>;
}
export default SObject;
