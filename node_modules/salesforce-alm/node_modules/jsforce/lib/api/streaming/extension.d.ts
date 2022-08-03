/**
 * Faye Client extensions: https://faye.jcoglan.com/browser/extensions.html
 *
 * For use with Streaming.prototype.createClient()
 **/
/**
 * Constructor for an auth failure detector extension
 *
 * Based on new feature released with Salesforce Spring '18:
 * https://releasenotes.docs.salesforce.com/en-us/spring18/release-notes/rn_messaging_cometd_auth_validation.htm?edition=&impact=
 *
 * Example triggering error message:
 *
 * ```
 * {
 *   "ext":{
 *     "sfdc":{"failureReason":"401::Authentication invalid"},
 *     "replay":true},
 *   "advice":{"reconnect":"none"},
 *   "channel":"/meta/handshake",
 *   "error":"403::Handshake denied",
 *   "successful":false
 * }
 * ```
 *
 * Example usage:
 *
 * ```javascript
 * const jsforce = require('jsforce');
 * const { StreamingExtension } = require('jsforce/api/streaming');
 *
 * const conn = new jsforce.Connection({ … });
 *
 * const channel = "/event/My_Event__e";
 *
 * // Exit the Node process when auth fails
 * const exitCallback = () => process.exit(1);
 * const authFailureExt = new StreamingExtension.AuthFailure(exitCallback);
 *
 * const fayeClient = conn.streaming.createClient([ authFailureExt ]);
 *
 * const subscription = fayeClient.subscribe(channel, data => {
 *   console.log('topic received data', data);
 * });
 *
 * subscription.cancel();
 * ```
 *
 * @param {Function} failureCallback - Invoked when authentication becomes invalid
 */
export declare class AuthFailure {
    _failureCallback: Function;
    constructor(failureCallback: Function);
    incoming(message: any, callback: Function): void;
}
/**
 * Constructor for a durable streaming replay extension
 *
 * Modified from original Salesforce demo source code:
 * https://github.com/developerforce/SalesforceDurableStreamingDemo/blob/3d4a56eac956f744ad6c22e6a8141b6feb57abb9/staticresources/cometdReplayExtension.resource
 *
 * Example usage:
 *
 * ```javascript
 * const jsforce = require('jsforce');
 * const { StreamingExtension } = require('jsforce/api/streaming');
 
 * const conn = new jsforce.Connection({ … });
 *
 * const channel = "/event/My_Event__e";
 * const replayId = -2; // -2 is all retained events
 *
 * const replayExt = new StreamingExtension.Replay(channel, replayId);
 *
 * const fayeClient = conn.streaming.createClient([ replayExt ]);
 *
 * const subscription = fayeClient.subscribe(channel, data => {
 *   console.log('topic received data', data);
 * });
 *
 * subscription.cancel();
 * ```
 */
export declare class Replay {
    _extensionEnabled: boolean;
    _replay: number | null | undefined;
    _channel: string;
    constructor(channel: string, replayId?: number | null);
    setExtensionEnabled(extensionEnabled: boolean): void;
    setReplay(replay: string): void;
    setChannel(channel: string): void;
    incoming(message: any, callback: Function): void;
    outgoing(message: any, callback: Function): void;
}
