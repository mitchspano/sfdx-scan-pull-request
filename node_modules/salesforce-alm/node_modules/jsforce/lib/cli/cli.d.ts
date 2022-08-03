import { Command } from 'commander';
import Repl from './repl';
import { Connection } from '..';
import { Optional } from '../types';
import { ClientConfig } from '../registry/types';
interface CliCommand extends Command {
    connection?: string;
    username?: string;
    password?: string;
    loginUrl?: string;
    sandbox?: boolean;
    evalScript?: string;
}
/**
 *
 */
export declare class Cli {
    _repl: Repl;
    _conn: Connection;
    _connName: string | undefined;
    _outputEnabled: boolean;
    _defaultLoginUrl: string | undefined;
    /**
     *
     */
    readCommand(): CliCommand;
    start(): Promise<void>;
    getCurrentConnection(): Connection<import("..").Schema>;
    print(...args: any[]): void;
    saveCurrentConnection(): void;
    setLoginServer(loginServer: Optional<string>): void;
    /**
     *
     */
    connect(options: {
        username?: string;
        password?: string;
        connection?: string;
        loginUrl?: string;
        sandbox?: boolean;
    }): Promise<void>;
    /**
     *
     */
    startPasswordAuth(username: string, password?: string): Promise<void>;
    /**
     *
     */
    loginByPassword(username: string, password: string | undefined, retryCount: number): Promise<{
        id: string;
    }>;
    /**
     *
     */
    disconnect(connName?: string): void;
    /**
     *
     */
    authorize(clientName: string): Promise<void>;
    /**
     *
     */
    downloadDefaultClientInfo(clientName: string): Promise<void>;
    waitCallback(serverUrl: string | undefined, state: string): Promise<{
        code: string;
        state: string;
    }>;
    /**
     *
     */
    register(clientName: string | undefined, clientConfig: ClientConfig): Promise<void>;
    /**
     *
     */
    listConnections(): Promise<void>;
    /**
     *
     */
    getConnectionNames(): Promise<string[]>;
    /**
     *
     */
    getClientNames(): Promise<string[]>;
    /**
     *
     */
    prompt(type: string, message: string): Promise<string>;
    /**
     *
     */
    promptMessage(message: string): Promise<string>;
    promptPassword(message: string): Promise<string>;
    /**
     *
     */
    promptConfirm(message: string): Promise<string>;
    /**
     *
     */
    openUrl(url: string): void;
    /**
     *
     */
    openUrlUsingSession(url?: string): void;
}
declare const cli: Cli;
export default cli;
