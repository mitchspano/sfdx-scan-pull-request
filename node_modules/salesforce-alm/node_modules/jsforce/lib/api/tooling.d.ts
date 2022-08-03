import Connection from '../connection';
import Cache, { CachedFunction } from '../cache';
import SObject from '../sobject';
import { DescribeGlobalResult, DescribeSObjectResult, HttpRequest, Schema, SObjectNames } from '../types';
/**
 *
 */
export declare type ExecuteAnonymousResult = {
    compiled: boolean;
    compileProblem: string | null;
    success: boolean;
    line: number;
    column: number;
    exceptionMessage: string | null;
    exceptionStackTrace: string | null;
};
export declare type RunTestLevel = 'RunSpecifiedTests' | 'RunLocalTests' | 'RunAllTestsInOrg';
declare type TestsNode = {
    classId: string;
    testMethods?: string[];
} | {
    className: string;
    testMethods?: string[];
};
export declare type RunTestsRequest = {
    tests: TestsNode[];
    maxFailedTests?: number;
    testLevel?: RunTestLevel;
    skipCodeCoverage?: boolean;
};
export declare type RunTestsAsyncRequest = {
    classids?: string;
    classNames?: string;
    suiteids?: string;
    suiteNames?: string;
    maxFailedTests?: number;
    testLevel?: RunTestLevel;
    skipCodeCoverage?: boolean;
} | {
    tests: TestsNode[];
    maxFailedTests?: number;
    testLevel?: RunTestLevel;
    skipCodeCoverage?: boolean;
};
declare type CodeCoverageResult = {
    id: string;
    locationsNotCovered: any[];
    name: string;
    namespace: string | null;
    numLocations: number;
    numLocationsNotCovered: number;
    type: string;
};
declare type CodeCoverageWarning = {
    id: string;
    message: string;
    name: string | null;
    namespace: string | null;
};
declare type FlowCoverageResult = {
    elementsNotCovered: string[];
    flowId: string;
    flowName: string;
    flowNamespace: string | null;
    numElements: number;
    numElementsNotCovered: number;
    processType: string;
};
declare type FlowCoverageWarning = {
    flowId: string;
    flowName: string;
    flowNamespace: string | null;
    message: string;
};
declare type RunTestSuccess = {
    id: string;
    methodName: string;
    name: string;
    namespace: string | null;
    seeAllData: boolean;
    time: number;
};
declare type RunTestFailure = {
    id: string;
    message: string;
    methodName: string;
    name: string;
    namespace: string | null;
    seeAllData: boolean;
    stackTrace: string;
    time: number;
    type: string;
};
export declare type RunTestsResult = {
    apexLogId: string;
    codeCoverage: CodeCoverageResult[];
    codeCoverageWarnings: CodeCoverageWarning[];
    flowCoverage: FlowCoverageResult[];
    flowCoverageWarnings: FlowCoverageWarning[];
    numFailures: number;
    numTestsRun: number;
    successes: RunTestSuccess[];
    failures: RunTestFailure[];
    totalTime: number;
};
declare type ConstructorDeclaration = {
    methodDoc: string | null;
    name: string;
    parameters: Array<{
        name: string;
        type: string;
    }>;
    references: any[];
};
declare type MethodDeclaration = {
    argTypes: string[];
    isStatic: boolean;
    methodDoc: string | null;
    name: string;
    parameters: Array<{
        name: string;
        type: string;
    }>;
    references: any[];
};
declare type PropertyDeclaration = {
    name: string;
    references: any[];
};
declare type ClassDeclaration = {
    constructors: ConstructorDeclaration[];
    methods: MethodDeclaration[];
    properties: PropertyDeclaration[];
};
export declare type CompletionsResult = {
    publicDeclarations?: {
        [namespace: string]: {
            [name: string]: ClassDeclaration;
        };
    };
};
/**
 * API class for Tooling API call
 */
export declare class Tooling<S extends Schema> {
    _conn: Connection<S>;
    /**
     * Execute query by using SOQL
     */
    query: Connection<S>['query'];
    /**
     * Query next record set by using query locator
     */
    queryMore: Connection<S>['queryMore'];
    /**
     * Create records
     */
    create: Connection<S>['create'];
    _createSingle: (type: string, record: import("../types").Record, options: import("../types").DmlOptions) => Promise<unknown>;
    _createParallel: (type: string, records: import("../types").Record[], options: import("../types").DmlOptions) => Promise<unknown[]>;
    _createMany: (type: string, records: import("../types").Record[], options: import("../types").DmlOptions) => Promise<import("../types").SaveResult[]>;
    /**
     * Synonym of Tooling#create()
     */
    insert: {
        <N extends string, InputRecord extends Partial<import("../types").SObjectRecord<any, N, "*", import("../types").Record, {}>> = Partial<import("../types").SObjectRecord<any, N, "*", import("../types").Record, {}>>>(type: N, records: InputRecord[], options?: import("../types").DmlOptions | undefined): Promise<import("../types").SaveResult[]>;
        <N_1 extends string, InputRecord_1 extends Partial<import("../types").SObjectRecord<any, N_1, "*", import("../types").Record, {}>> = Partial<import("../types").SObjectRecord<any, N_1, "*", import("../types").Record, {}>>>(type: N_1, record: InputRecord_1, options?: import("../types").DmlOptions | undefined): Promise<import("../types").SaveResult>;
        <N_2 extends string, InputRecord_2 extends Partial<import("../types").SObjectRecord<any, N_2, "*", import("../types").Record, {}>> = Partial<import("../types").SObjectRecord<any, N_2, "*", import("../types").Record, {}>>>(type: N_2, records: InputRecord_2 | InputRecord_2[], options?: import("../types").DmlOptions | undefined): Promise<{
            success: true;
            id: string;
            errors: never[];
        } | {
            success: false;
            id?: undefined;
            errors: import("../types").SaveError[];
        } | import("../types").SaveResult[]>;
    };
    /**
     * Retrieve specified records
     */
    retrieve: Connection<S>['retrieve'];
    _retrieveSingle: (type: string, id: string, options: import("../types").RetrieveOptions) => Promise<unknown>;
    _retrieveParallel: (type: string, ids: string[], options: import("../types").RetrieveOptions) => Promise<unknown[]>;
    _retrieveMany: (type: string, ids: string[], options: import("../types").RetrieveOptions) => Promise<unknown>;
    /**
     * Update records
     */
    update: Connection<S>['update'];
    _updateSingle: (type: string, record: import("../types").Record, options: import("../types").DmlOptions) => Promise<import("../types").SaveResult>;
    _updateParallel: (type: string, records: import("../types").Record[], options: import("../types").DmlOptions) => Promise<import("../types").SaveResult[]>;
    _updateMany: (type: string, records: import("../types").Record[], options: import("../types").DmlOptions) => Promise<import("../types").SaveResult[]>;
    /**
     * Upsert records
     */
    upsert: Connection<S>['upsert'];
    /**
     * Delete records
     */
    destroy: Connection<S>['destroy'];
    _destroySingle: (type: string, id: string, options: import("../types").DmlOptions) => Promise<import("../types").SaveResult>;
    _destroyParallel: (type: string, ids: string[], options: import("../types").DmlOptions) => Promise<import("../types").SaveResult[]>;
    _destroyMany: (type: string, ids: string[], options: import("../types").DmlOptions) => Promise<import("../types").SaveResult[]>;
    /**
     * Synonym of Tooling#destroy()
     */
    delete: {
        <N extends string>(type: N, ids: string[], options?: import("../types").DmlOptions | undefined): Promise<import("../types").SaveResult[]>;
        <N_1 extends string>(type: N_1, id: string, options?: import("../types").DmlOptions | undefined): Promise<import("../types").SaveResult>;
        <N_2 extends string>(type: N_2, ids: string | string[], options?: import("../types").DmlOptions | undefined): Promise<{
            success: true;
            id: string;
            errors: never[];
        } | {
            success: false;
            id?: undefined;
            errors: import("../types").SaveError[];
        } | import("../types").SaveResult[]>;
    };
    /**
     * Synonym of Tooling#destroy()
     */
    del: {
        <N extends string>(type: N, ids: string[], options?: import("../types").DmlOptions | undefined): Promise<import("../types").SaveResult[]>;
        <N_1 extends string>(type: N_1, id: string, options?: import("../types").DmlOptions | undefined): Promise<import("../types").SaveResult>;
        <N_2 extends string>(type: N_2, ids: string | string[], options?: import("../types").DmlOptions | undefined): Promise<{
            success: true;
            id: string;
            errors: never[];
        } | {
            success: false;
            id?: undefined;
            errors: import("../types").SaveError[];
        } | import("../types").SaveResult[]>;
    };
    cache: Cache;
    /**
     * Describe SObject metadata
     */
    describe: CachedFunction<(type: string) => Promise<DescribeSObjectResult>>;
    describe$: CachedFunction<(type: string) => Promise<DescribeSObjectResult>>;
    describe$$: CachedFunction<(name: string) => DescribeSObjectResult>;
    /**
     * Synonym of Tooling#describe()
     */
    describeSObject: CachedFunction<(type: string) => Promise<DescribeSObjectResult>>;
    describeSObject$: CachedFunction<(type: string) => Promise<DescribeSObjectResult>>;
    describeSObject$$: CachedFunction<(name: string) => DescribeSObjectResult>;
    /**
     * Describe global SObjects
     */
    describeGlobal: CachedFunction<() => Promise<DescribeGlobalResult>>;
    describeGlobal$: CachedFunction<() => Promise<DescribeGlobalResult>>;
    describeGlobal$$: CachedFunction<(name: string) => DescribeGlobalResult>;
    /**
     * Get SObject instance
     */
    sobject: Connection<S>['sobject'];
    sobjects: {
        [N in SObjectNames<S>]?: SObject<S, N>;
    };
    /**
     *
     */
    constructor(conn: Connection<S>);
    /**
     * @private
     */
    _establish(): void;
    /**
     * @private
     */
    _baseUrl(): string;
    /**
     * @private
     */
    _supports(feature: string): boolean;
    /**
     *
     */
    request<R = unknown>(request: string | HttpRequest, options?: Object): import("../util/promise").StreamPromise<R>;
    /**
     * Executes Apex code anonymously
     */
    executeAnonymous(body: string): import("../util/promise").StreamPromise<ExecuteAnonymousResult>;
    /**
     * Executes Apex tests asynchronously
     */
    runTestsAsynchronous(req: RunTestsAsyncRequest): import("../util/promise").StreamPromise<string | null>;
    /**
     * Executes Apex tests synchronously
     */
    runTestsSynchronous(req: RunTestsRequest): import("../util/promise").StreamPromise<RunTestsResult | null>;
    /**
     * Retrieves available code completions of the referenced type
     */
    completions(type?: 'apex' | 'visualforce'): import("../util/promise").StreamPromise<CompletionsResult>;
}
export default Tooling;
