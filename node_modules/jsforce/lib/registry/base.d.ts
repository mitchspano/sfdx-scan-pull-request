import Connection from '../connection';
import { RegistryConfig, Registry, ConnectionConfig, PersistConnectionConfig, ClientConfig } from './types';
import { Schema } from '../types';
/**
 *
 */
export declare class BaseRegistry implements Registry {
    _registryConfig: RegistryConfig;
    _saveConfig(): void;
    _getClients(): {
        [name: string]: ClientConfig;
    };
    _getConnections(): {
        [name: string]: PersistConnectionConfig;
    };
    getConnectionNames(): Promise<string[]>;
    getConnection<S extends Schema = Schema>(name: string): Promise<Connection<S> | null>;
    getConnectionConfig(name?: string): Promise<{
        instanceUrl?: string | undefined;
        accessToken?: string | undefined;
    } | {
        oauth2: {
            clientId?: string | undefined;
            clientSecret?: string | undefined;
            redirectUri?: string | undefined;
            loginUrl?: string | undefined;
        };
        instanceUrl?: string | undefined;
        accessToken?: string | undefined;
    } | null>;
    saveConnectionConfig(name: string, connConfig: ConnectionConfig): Promise<void>;
    _findClientName({ clientId, loginUrl }: ClientConfig): string | null;
    setDefaultConnection(name: string): Promise<void>;
    removeConnectionConfig(name: string): Promise<void>;
    getClientConfig(name: string): Promise<{
        clientId?: string | undefined;
        clientSecret?: string | undefined;
        redirectUri?: string | undefined;
        loginUrl?: string | undefined;
    }>;
    getClientNames(): Promise<string[]>;
    registerClientConfig(name: string, clientConfig: ClientConfig): Promise<void>;
}
