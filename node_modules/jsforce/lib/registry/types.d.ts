/**
 * @file Registry for connection information, cached in local file system
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { Connection } from '..';
import { Schema } from '../types';
export declare type ConnectionConfig = {
    instanceUrl?: string;
    accessToken?: string;
    refreshToken?: string;
    loginUrl?: string;
    oauth2?: ClientConfig;
};
export declare type PersistConnectionConfig = {
    client?: string;
    instanceUrl?: string;
    accessToken?: string;
};
export declare type ClientConfig = {
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    loginUrl?: string;
};
export declare type RegistryConfig = {
    default?: string;
    clients?: {
        [name: string]: ClientConfig;
    };
    connections?: {
        [name: string]: PersistConnectionConfig;
    };
};
/**
 *
 */
export interface Registry {
    getConnectionNames(): Promise<string[]>;
    getConnection<S extends Schema = Schema>(name?: string): Promise<Connection<S> | null>;
    getConnectionConfig(name?: string): Promise<ConnectionConfig | null>;
    saveConnectionConfig(name: string, connConfig: ConnectionConfig): Promise<void>;
    setDefaultConnection(name: string): Promise<void>;
    removeConnectionConfig(name: string): Promise<void>;
    getClientConfig(name: string): Promise<ClientConfig | null>;
    getClientNames(): Promise<string[]>;
    registerClientConfig(name: string, clientConfig: ClientConfig): Promise<void>;
}
