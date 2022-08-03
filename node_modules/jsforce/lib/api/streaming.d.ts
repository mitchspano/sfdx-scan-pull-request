/// <reference types="node" />
/**
 * @file Manages Streaming APIs
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { EventEmitter } from 'events';
import { Client, Subscription } from 'faye';
import Connection from '../connection';
import { Record, Schema } from '../types';
import * as StreamingExtension from './streaming/extension';
/**
 *
 */
export declare type StreamingMessage<R extends Record> = {
    event: {
        type: string;
        createdDate: string;
        replayId: number;
    };
    sobject: R;
};
export declare type GenericStreamingMessage = {
    event: {
        createdDate: string;
        replayId: number;
    };
    payload: string;
};
export declare type PushEvent = {
    payload: string;
    userIds: string[];
};
export declare type PushEventResult = {
    fanoutCount: number;
    userOnlineStatus: {
        [userId: string]: boolean;
    };
};
export { Client, Subscription };
/**
 * Streaming API topic class
 */
declare class Topic<S extends Schema, R extends Record> {
    _streaming: Streaming<S>;
    name: string;
    constructor(streaming: Streaming<S>, name: string);
    /**
     * Subscribe listener to topic
     */
    subscribe(listener: (message: StreamingMessage<R>) => void): Subscription;
    /**
     * Unsubscribe listener from topic
     */
    unsubscribe(subscr: Subscription): this;
}
/**
 * Streaming API Generic Streaming Channel
 */
declare class Channel<S extends Schema> {
    _streaming: Streaming<S>;
    _id: Promise<string | undefined> | undefined;
    name: string;
    constructor(streaming: Streaming<S>, name: string);
    /**
     * Subscribe to channel
     */
    subscribe(listener: Function): Subscription;
    unsubscribe(subscr: Subscription): this;
    push(events: PushEvent): Promise<PushEventResult>;
    push(events: PushEvent): Promise<PushEventResult[]>;
}
/**
 * Streaming API class
 */
export declare class Streaming<S extends Schema> extends EventEmitter {
    _conn: Connection<S>;
    _topics: {
        [name: string]: Topic<S, Record>;
    };
    _fayeClients: {
        [clientType: string]: Client;
    };
    /**
     *
     */
    constructor(conn: Connection<S>);
    _createClient(forChannelName?: string | null, extensions?: any[]): Client;
    /** @private **/
    _getFayeClient(channelName: string): Client;
    /**
     * Get named topic
     */
    topic<R extends Record = Record>(name: string): Topic<S, R>;
    /**
     * Get channel for channel name
     */
    channel(name: string): Channel<S>;
    /**
     * Subscribe topic/channel
     */
    subscribe(name: string, listener: Function): Subscription;
    /**
     * Unsubscribe topic
     */
    unsubscribe(name: string, subscription: Subscription): this;
    /**
     * Create a Streaming client, optionally with extensions
     *
     * See Faye docs for implementation details: https://faye.jcoglan.com/browser/extensions.html
     *
     * Example usage:
     *
     * ```javascript
     * const jsforce = require('jsforce');
     *
     * // Establish a Salesforce connection. (Details elided)
     * const conn = new jsforce.Connection({ … });
     *
     * const fayeClient = conn.streaming.createClient();
     *
     * const subscription = fayeClient.subscribe(channel, data => {
     *   console.log('topic received data', data);
     * });
     *
     * subscription.cancel();
     * ```
     *
     * Example with extensions, using Replay & Auth Failure extensions in a server-side Node.js app:
     *
     * ```javascript
     * const jsforce = require('jsforce');
     * const { StreamingExtension } = require('jsforce/api/streaming');
     *
     * // Establish a Salesforce connection. (Details elided)
     * const conn = new jsforce.Connection({ … });
     *
     * const channel = "/event/My_Event__e";
     * const replayId = -2; // -2 is all retained events
     *
     * const exitCallback = () => process.exit(1);
     * const authFailureExt = new StreamingExtension.AuthFailure(exitCallback);
     *
     * const replayExt = new StreamingExtension.Replay(channel, replayId);
     *
     * const fayeClient = conn.streaming.createClient([
     *   authFailureExt,
     *   replayExt
     * ]);
     *
     * const subscription = fayeClient.subscribe(channel, data => {
     *   console.log('topic received data', data);
     * });
     *
     * subscription.cancel();
     * ```
     */
    createClient(extensions: any[]): Client;
}
export { StreamingExtension };
export default Streaming;
