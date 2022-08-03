/// <reference types="node" />
import { EventEmitter } from 'events';
import VERSION from './VERSION';
import Connection from './connection';
import OAuth2 from './oauth2';
import SfDate from './date';
import { Registry } from './registry';
import { BrowserClient } from './browser/client';
/**
 *
 */
declare class JSforce extends EventEmitter {
    VERSION: typeof VERSION;
    Connection: typeof Connection;
    OAuth2: typeof OAuth2;
    SfDate: typeof SfDate;
    Date: typeof SfDate;
    BrowserClient: typeof BrowserClient;
    registry: Registry;
    browser: BrowserClient;
}
export declare function registerModule(name: string, factory: (conn: Connection) => any): void;
declare const jsforce: JSforce;
export default jsforce;
