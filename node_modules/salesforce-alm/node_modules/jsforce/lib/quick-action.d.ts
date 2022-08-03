/**
 * @file Represents Salesforce QuickAction
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import Connection from './connection';
import { DescribeQuickActionDetailResult, Record, Optional, Schema } from './types';
/**
 * type definitions
 */
export declare type QuickActionDefaultValues = {
    [name: string]: any;
};
export declare type QuickActionResult = {
    id: string;
    feedItemIds: Optional<string[]>;
    success: boolean;
    created: boolean;
    contextId: string;
    errors: Object[];
};
/**
 * A class for quick action
 */
export declare class QuickAction<S extends Schema> {
    _conn: Connection<S>;
    _path: string;
    /**
     *
     */
    constructor(conn: Connection<S>, path: string);
    /**
     * Describe the action's information (including layout, etc.)
     */
    describe(): Promise<DescribeQuickActionDetailResult>;
    /**
     * Retrieve default field values in the action (for given record, if specified)
     */
    defaultValues(contextId?: string): Promise<QuickActionDefaultValues>;
    /**
     * Execute the action for given context Id and record information
     */
    execute(contextId: string, record: Record): Promise<QuickActionResult>;
}
export default QuickAction;
