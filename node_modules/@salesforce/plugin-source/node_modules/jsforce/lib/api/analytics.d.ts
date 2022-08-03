import Connection from '../connection';
import { Schema } from '../types';
import { ReportMetadata, ReportExecuteResult, ReportRetrieveResult, ReportDescribeResult, ReportInfo, ReportInstanceInfo, DashboardMetadata, DashboardResult, DashboardStatusResult, DashboardRefreshResult, DashboardInfo } from './analytics/types';
import { QueryExplainResult } from '../query';
export { ReportMetadata, ReportExecuteResult, ReportRetrieveResult, ReportDescribeResult, ReportInfo, ReportInstanceInfo, DashboardMetadata, DashboardResult, DashboardStatusResult, DashboardRefreshResult, DashboardInfo, };
export declare type ReportExecuteOptions = {
    details?: boolean;
    metadata?: {
        reportMetadata: Partial<ReportMetadata>;
    };
};
/**
 * Report object class in Analytics API
 */
export declare class ReportInstance<S extends Schema> {
    _report: Report<S>;
    _conn: Connection<S>;
    id: string;
    /**
     *
     */
    constructor(report: Report<S>, id: string);
    /**
     * Retrieve report result asynchronously executed
     */
    retrieve(): Promise<ReportRetrieveResult>;
}
/**
 * Report object class in Analytics API
 */
export declare class Report<S extends Schema> {
    _conn: Connection<S>;
    id: string;
    /**
     *
     */
    constructor(conn: Connection<S>, id: string);
    /**
     * Describe report metadata
     */
    describe(): Promise<ReportDescribeResult>;
    /**
     * Destroy a report
     */
    destroy(): Promise<void>;
    /**
     * Synonym of Analytics~Report#destroy()
     */
    delete: () => Promise<void>;
    /**
     * Synonym of Analytics~Report#destroy()
     */
    del: () => Promise<void>;
    /**
     * Clones a given report
     */
    clone(name: string): Promise<ReportDescribeResult>;
    /**
     * Explain plan for executing report
     */
    explain(): Promise<QueryExplainResult>;
    /**
     * Run report synchronously
     */
    execute(options?: ReportExecuteOptions): Promise<ReportExecuteResult>;
    /**
     * Synonym of Analytics~Report#execute()
     */
    run: (options?: ReportExecuteOptions) => Promise<ReportExecuteResult>;
    /**
     * Synonym of Analytics~Report#execute()
     */
    exec: (options?: ReportExecuteOptions) => Promise<ReportExecuteResult>;
    /**
     * Run report asynchronously
     */
    executeAsync(options?: ReportExecuteOptions): Promise<ReportInstanceInfo>;
    /**
     * Get report instance for specified instance ID
     */
    instance(id: string): ReportInstance<S>;
    /**
     * List report instances which had been executed asynchronously
     */
    instances(): Promise<ReportInstanceInfo[]>;
}
/**
 * Dashboard object class in the Analytics API
 */
export declare class Dashboard<S extends Schema> {
    _conn: Connection<S>;
    id: string;
    /**
     *
     */
    constructor(conn: Connection<S>, id: string);
    /**
     * Describe dashboard metadata
     *
     * @method Analytics~Dashboard#describe
     * @param {Callback.<Analytics-DashboardMetadata>} [callback] - Callback function
     * @returns {Promise.<Analytics-DashboardMetadata>}
     */
    describe(): Promise<DashboardMetadata>;
    /**
     * Get details about dashboard components
     */
    components(componentIds?: string | string[]): Promise<DashboardResult>;
    /**
     * Get dashboard status
     */
    status(): Promise<DashboardStatusResult>;
    /**
     * Refresh a dashboard
     */
    refresh(): Promise<DashboardRefreshResult>;
    /**
     * Clone a dashboard
     */
    clone(config: {
        name: string;
        folderId?: string;
    } | string, folderId?: string): Promise<DashboardMetadata>;
    /**
     * Destroy a dashboard
     */
    destroy(): Promise<void>;
    /**
     * Synonym of Analytics~Dashboard#destroy()
     */
    delete: () => Promise<void>;
    /**
     * Synonym of Analytics~Dashboard#destroy()
     */
    del: () => Promise<void>;
}
/**
 * API class for Analytics API
 */
export declare class Analytics<S extends Schema> {
    _conn: Connection<S>;
    /**
     *
     */
    constructor(conn: Connection<S>);
    /**
     * Get report object of Analytics API
     */
    report(id: string): Report<S>;
    /**
     * Get recent report list
     */
    reports(): import("../util/promise").StreamPromise<ReportInfo[]>;
    /**
     * Get dashboard object of Analytics API
     */
    dashboard(id: string): Dashboard<S>;
    /**
     * Get recent dashboard list
     */
    dashboards(): import("../util/promise").StreamPromise<DashboardInfo[]>;
}
export default Analytics;
