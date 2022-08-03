/**
 * @file Process class to manage/run workflow rule and approval process
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import Connection from './connection';
import { ProcessRules, Schema } from './types';
/**
 *
 */
export declare type ProcessRuleDefinition = {
    id: string;
    name: string;
    object: string;
};
/**
 *
 */
export declare type ProcessRuleTriggerResult = {
    success: true;
} | {
    success: false;
    errors: Array<{
        message: string;
    }>;
};
/**
 * A class which manages process (workflow) rules
 */
export declare class ProcessRule<S extends Schema> {
    _conn: Connection<S>;
    /**
     *
     */
    constructor(conn: Connection<S>);
    /**
     * Get all process rule definitions registered to sobjects
     */
    list(): Promise<ProcessRules>;
    /**
     * Trigger process rule for given entities
     */
    trigger(contextIds: string | string[]): import("./util/promise").StreamPromise<{
        errors: null;
        success: true;
    } | {
        errors: any[];
        success: false;
    }>;
}
/**
 *
 */
export declare type ApprovalProcessDefinition = {
    id: string;
    name: string;
    object: string;
    sortOrder: number;
    description: string | null;
};
/**
 *
 */
export declare type ApprovalProcessRequestResult = {
    success: true;
    actorIds: string[];
    entityId: string;
    instanceId: string;
    instanceStatus: string;
    newWorkItemIds: string[];
} | {
    success: false;
    errors: Array<{
        message: string;
    }>;
};
/**
 *
 */
export declare type ApprovalProcessActionOptions = {
    processDefinitionNameOrId?: string;
    skipEntryCriteria?: boolean;
};
/**
 * A class which manages approval processes
 */
export declare class ApprovalProcess<S extends Schema> {
    _conn: Connection<S>;
    /**
     *
     */
    constructor(conn: Connection<S>);
    /**
     * Get all approval process definitions registered to sobjects
     */
    list(): Promise<{
        [index: string]: ApprovalProcessDefinition;
    }>;
    /**
     * Send bulk requests for approval process
     */
    request(requests: Array<ApprovalProcessRequestConfig | ApprovalProcessRequest<S>>): import("./util/promise").StreamPromise<ApprovalProcessRequestResult[]>;
    /**
     * Create approval process request
     *
     * @private
     */
    _createRequest(actionType: 'Submit' | 'Approve' | 'Reject', contextId: string, comments?: string, options?: ApprovalProcessActionOptions): ApprovalProcessRequest<S>;
    /**
     * Submit approval request for an item
     */
    submit(contextId: string, comments?: string, options?: ApprovalProcessActionOptions): ApprovalProcessRequest<S>;
    /**
     * Approve approval request for an item
     */
    approve(workitemId: string, comments?: string, options?: ApprovalProcessActionOptions): ApprovalProcessRequest<S>;
    /**
     * Reject approval request for an item
     */
    reject(workitemId: string, comments?: string, options?: ApprovalProcessActionOptions): ApprovalProcessRequest<S>;
}
/**
 *
 */
export declare type ApprovalProcessRequestConfig = {
    actionType: 'Submit' | 'Approve' | 'Reject';
    contextId: string;
    comments?: string;
    nextApproverIds?: string[];
    processDefinitionNameOrId?: string;
    skipEntryCriteria?: boolean;
};
/**
 * A class representing approval process request
 */
declare class ApprovalProcessRequest<S extends Schema> {
    _process: ApprovalProcess<S>;
    _request: ApprovalProcessRequestConfig;
    _promise: Promise<ApprovalProcessRequestResult> | undefined;
    constructor(process: ApprovalProcess<S>, request: ApprovalProcessRequestConfig);
    /**
     * Promise/A+ interface
     * http://promises-aplus.github.io/promises-spec/
     */
    then<U>(onResolve?: (res: ApprovalProcessRequestResult) => U | PromiseLike<U> | null, onReject?: (err: any) => U | PromiseLike<U> | null): void;
}
/**
 * A class which manages process rules and approval processes
 */
export declare class Process<S extends Schema> {
    rule: ProcessRule<S>;
    approval: ApprovalProcess<S>;
    /**
     *
     */
    constructor(conn: Connection<S>);
}
export default Process;
