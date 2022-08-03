import Connection from '../connection';
import { Schema, Record, SoapSchemaDef, SoapSchema } from '../types';
import { LeadConvert, LeadConvertResult, MergeRequest, MergeResult, EmptyRecycleBinResult, DescribeTabSetResult, GetServerTimestampResult, GetUserInfoResult, ResetPasswordResult, SaveResult, UpsertResult, DeleteResult } from './soap/schema';
/**
 * API class for Partner SOAP call
 */
export declare class SoapApi<S extends Schema> {
    _conn: Connection<S>;
    constructor(conn: Connection<S>);
    /**
     * Call SOAP Api (Partner) endpoint
     * @private
     */
    _invoke(method: string, message: object, schema: SoapSchema | SoapSchemaDef): Promise<any>;
    /**
     * Converts a Lead into an Account, Contact, or (optionally) an Opportunity.
     */
    convertLead(leadConverts: Partial<LeadConvert>[]): Promise<LeadConvertResult[]>;
    convertLead(leadConvert: Partial<LeadConvert>): Promise<LeadConvertResult>;
    convertLead(leadConvert: Partial<LeadConvert> | Partial<LeadConvert>[]): Promise<LeadConvertResult | LeadConvertResult[]>;
    /**
     * Merge up to three records into one
     */
    merge(mergeRequests: Partial<MergeRequest>[]): Promise<MergeResult[]>;
    merge(mergeRequest: Partial<MergeRequest>): Promise<MergeResult>;
    merge(mergeRequest: Partial<MergeRequest> | Partial<MergeRequest>[]): Promise<MergeResult | MergeResult[]>;
    /**
     * Delete records from the recycle bin immediately
     */
    emptyRecycleBin(ids: string[]): Promise<EmptyRecycleBinResult>;
    /**
     * Returns information about the standard and custom apps available to the logged-in user
     */
    describeTabs(): Promise<DescribeTabSetResult[]>;
    /**
     * Retrieves the current system timestamp (Coordinated Universal Time (UTC) time zone) from the API
     */
    getServerTimestamp(): Promise<GetServerTimestampResult>;
    /**
     * Retrieves personal information for the user associated with the current session
     */
    getUserInfo(): Promise<GetUserInfoResult>;
    /**
     * Sets the specified user’s password to the specified value
     */
    setPassword(userId: string, password: string): Promise<string>;
    /**
     * Resets the specified user’s password
     */
    resetPassword(userId: string): Promise<ResetPasswordResult>;
    /**
     * Adds one or more new records to your organization’s data
     */
    create(sObject: Record[]): Promise<SaveResult[]>;
    create(sObject: Record): Promise<SaveResult>;
    create(sObjects: Record | Record[]): Promise<SaveResult | SaveResult[]>;
    /**
     * Updates one or more existing records in your organization’s data.
     */
    update(sObject: Record[]): Promise<SaveResult[]>;
    update(sObject: Record): Promise<SaveResult>;
    update(sObjects: Record | Record[]): Promise<SaveResult | SaveResult[]>;
    /**
     * Creates new records and updates existing records in your organization’s data.
     */
    upsert(externalIdFieldName: string, sObjects: Record[]): Promise<UpsertResult[]>;
    upsert(externalIdFieldName: string, sObject: Record): Promise<UpsertResult>;
    upsert(externalIdFieldName: string, sObjects: Record | Record[]): Promise<UpsertResult | UpsertResult[]>;
    /**
     * Deletes one or more records from your organization’s data
     */
    delete(ids: string | string[]): Promise<DeleteResult[]>;
    delete(id: string): Promise<DeleteResult>;
    delete(ids: string | string[]): Promise<DeleteResult | DeleteResult[]>;
}
export default SoapApi;
