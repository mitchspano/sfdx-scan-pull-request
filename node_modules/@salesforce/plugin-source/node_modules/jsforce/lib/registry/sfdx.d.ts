import Connection from '../connection';
import { Registry, ConnectionConfig, ClientConfig } from './types';
import { Schema } from '../types';
declare type SfdxOrgList = {
    nonScratchOrgs: SfdxOrgInfo[];
    scratchOrgs: SfdxOrgInfo[];
};
declare type SfdxOrgInfo = {
    orgId: string;
    accessToken: string;
    instanceUrl: string;
    loginUrl: string;
    username: string;
    clientId: string;
    isDevHub: boolean;
    connectedStatus: string;
    lastUsed: string;
    alias?: string;
};
/**
 *
 */
export declare class SfdxRegistry implements Registry {
    _cliPath: string | undefined;
    _orgList: Promise<SfdxOrgList> | undefined;
    _orgInfoMap: {
        [name: string]: Promise<SfdxOrgInfo>;
    };
    _defaultOrgInfo: Promise<SfdxOrgInfo> | undefined;
    constructor({ cliPath }: {
        cliPath?: string;
    });
    _createCommand(command: string, options?: {
        [option: string]: any;
    }, args?: string[]): string;
    _execCommand<T>(command: string, options?: {
        [option: string]: any;
    }, args?: string[]): Promise<T>;
    _getOrgList(): Promise<SfdxOrgList>;
    getConnectionNames(): Promise<string[]>;
    getConnection<S extends Schema = Schema>(name?: string): Promise<Connection<S> | null>;
    _getOrgInfo(username?: string): Promise<SfdxOrgInfo>;
    _memoOrgInfo(pOrgInfo: Promise<SfdxOrgInfo>, username?: string): void;
    getConnectionConfig(name?: string): Promise<{
        accessToken: string;
        instanceUrl: string;
        loginUrl: string;
    } | null>;
    saveConnectionConfig(_name: string, _connConfig: ConnectionConfig): Promise<void>;
    setDefaultConnection(_name: string): Promise<void>;
    removeConnectionConfig(name: string): Promise<void>;
    getClientConfig(_name: string): Promise<null>;
    getClientNames(): Promise<never[]>;
    registerClientConfig(_name: string, _clientConfig: ClientConfig): Promise<void>;
}
export {};
