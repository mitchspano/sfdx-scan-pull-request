"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Client", {
  enumerable: true,
  get: function () {
    return _faye.Client;
  }
});

_Object$defineProperty(exports, "Subscription", {
  enumerable: true,
  get: function () {
    return _faye.Subscription;
  }
});

exports.StreamingExtension = exports.default = exports.Streaming = void 0;

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = require("events");

var _faye = require("faye");

var _jsforce = require("../jsforce");

var StreamingExtension = _interopRequireWildcard(require("./streaming/extension"));

exports.StreamingExtension = StreamingExtension;

/**
 * @file Manages Streaming APIs
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

/*--------------------------------------------*/

/**
 * Streaming API topic class
 */
class Topic {
  constructor(streaming, name) {
    (0, _defineProperty2.default)(this, "_streaming", void 0);
    (0, _defineProperty2.default)(this, "name", void 0);
    this._streaming = streaming;
    this.name = name;
  }
  /**
   * Subscribe listener to topic
   */


  subscribe(listener) {
    return this._streaming.subscribe(this.name, listener);
  }
  /**
   * Unsubscribe listener from topic
   */


  unsubscribe(subscr) {
    this._streaming.unsubscribe(this.name, subscr);

    return this;
  }

}
/*--------------------------------------------*/

/**
 * Streaming API Generic Streaming Channel
 */


class Channel {
  constructor(streaming, name) {
    (0, _defineProperty2.default)(this, "_streaming", void 0);
    (0, _defineProperty2.default)(this, "_id", void 0);
    (0, _defineProperty2.default)(this, "name", void 0);
    this._streaming = streaming;
    this.name = name;
  }
  /**
   * Subscribe to channel
   */


  subscribe(listener) {
    return this._streaming.subscribe(this.name, listener);
  }

  unsubscribe(subscr) {
    this._streaming.unsubscribe(this.name, subscr);

    return this;
  }

  async push(events) {
    const isArray = (0, _isArray.default)(events);
    const pushEvents = (0, _isArray.default)(events) ? events : [events];
    const conn = this._streaming._conn;

    if (!this._id) {
      this._id = conn.sobject('StreamingChannel').findOne({
        Name: this.name
      }, ['Id']).then(rec => rec === null || rec === void 0 ? void 0 : rec.Id);
    }

    const id = await this._id;

    if (!id) {
      throw new Error(`No streaming channel available for name: ${this.name}`);
    }

    const channelUrl = `/sobjects/StreamingChannel/${id}/push`;
    const rets = await conn.requestPost(channelUrl, {
      pushEvents
    });
    return isArray ? rets : rets[0];
  }

}
/*--------------------------------------------*/

/**
 * Streaming API class
 */


class Streaming extends _events.EventEmitter {
  /**
   *
   */
  constructor(conn) {
    super();
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "_topics", {});
    (0, _defineProperty2.default)(this, "_fayeClients", {});
    this._conn = conn;
  }
  /* @private */


  _createClient(forChannelName, extensions) {
    var _context;

    // forChannelName is advisory, for an API workaround. It does not restrict or select the channel.
    const needsReplayFix = typeof forChannelName === 'string' && (0, _indexOf.default)(forChannelName).call(forChannelName, '/u/') === 0;
    const endpointUrl = [this._conn.instanceUrl, // special endpoint "/cometd/replay/xx.x" is only available in 36.0.
    // See https://releasenotes.docs.salesforce.com/en-us/summer16/release-notes/rn_api_streaming_classic_replay.htm
    'cometd' + (needsReplayFix === true && this._conn.version === '36.0' ? '/replay' : ''), this._conn.version].join('/');
    const fayeClient = new _faye.Client(endpointUrl, {});
    fayeClient.setHeader('Authorization', 'OAuth ' + this._conn.accessToken);

    if ((0, _isArray.default)(extensions)) {
      for (const extension of extensions) {
        fayeClient.addExtension(extension);
      }
    } // prevent streaming API server error


    const dispatcher = fayeClient._dispatcher;

    if ((0, _indexOf.default)(_context = dispatcher.getConnectionTypes()).call(_context, 'callback-polling') === -1) {
      dispatcher.selectTransport('long-polling');
      dispatcher._transport.batching = false;
    }

    return fayeClient;
  }
  /** @private **/


  _getFayeClient(channelName) {
    const isGeneric = (0, _indexOf.default)(channelName).call(channelName, '/u/') === 0;
    const clientType = isGeneric ? 'generic' : 'pushTopic';

    if (!this._fayeClients[clientType]) {
      this._fayeClients[clientType] = this._createClient(channelName);
    }

    return this._fayeClients[clientType];
  }
  /**
   * Get named topic
   */


  topic(name) {
    this._topics = this._topics || {};
    const topic = this._topics[name] = this._topics[name] || new Topic(this, name);
    return topic;
  }
  /**
   * Get channel for channel name
   */


  channel(name) {
    return new Channel(this, name);
  }
  /**
   * Subscribe topic/channel
   */


  subscribe(name, listener) {
    const channelName = (0, _indexOf.default)(name).call(name, '/') === 0 ? name : '/topic/' + name;

    const fayeClient = this._getFayeClient(channelName);

    return fayeClient.subscribe(channelName, listener);
  }
  /**
   * Unsubscribe topic
   */


  unsubscribe(name, subscription) {
    const channelName = (0, _indexOf.default)(name).call(name, '/') === 0 ? name : '/topic/' + name;

    const fayeClient = this._getFayeClient(channelName);

    fayeClient.unsubscribe(channelName, subscription);
    return this;
  }
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


  createClient(extensions) {
    return this._createClient(null, extensions);
  }

}

exports.Streaming = Streaming;

/*--------------------------------------------*/

/*
 * Register hook in connection instantiation for dynamically adding this API module features
 */
(0, _jsforce.registerModule)('streaming', conn => new Streaming(conn));
var _default = Streaming;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvc3RyZWFtaW5nLnRzIl0sIm5hbWVzIjpbIlRvcGljIiwiY29uc3RydWN0b3IiLCJzdHJlYW1pbmciLCJuYW1lIiwiX3N0cmVhbWluZyIsInN1YnNjcmliZSIsImxpc3RlbmVyIiwidW5zdWJzY3JpYmUiLCJzdWJzY3IiLCJDaGFubmVsIiwicHVzaCIsImV2ZW50cyIsImlzQXJyYXkiLCJwdXNoRXZlbnRzIiwiY29ubiIsIl9jb25uIiwiX2lkIiwic29iamVjdCIsImZpbmRPbmUiLCJOYW1lIiwidGhlbiIsInJlYyIsIklkIiwiaWQiLCJFcnJvciIsImNoYW5uZWxVcmwiLCJyZXRzIiwicmVxdWVzdFBvc3QiLCJTdHJlYW1pbmciLCJFdmVudEVtaXR0ZXIiLCJfY3JlYXRlQ2xpZW50IiwiZm9yQ2hhbm5lbE5hbWUiLCJleHRlbnNpb25zIiwibmVlZHNSZXBsYXlGaXgiLCJlbmRwb2ludFVybCIsImluc3RhbmNlVXJsIiwidmVyc2lvbiIsImpvaW4iLCJmYXllQ2xpZW50IiwiQ2xpZW50Iiwic2V0SGVhZGVyIiwiYWNjZXNzVG9rZW4iLCJleHRlbnNpb24iLCJhZGRFeHRlbnNpb24iLCJkaXNwYXRjaGVyIiwiX2Rpc3BhdGNoZXIiLCJnZXRDb25uZWN0aW9uVHlwZXMiLCJzZWxlY3RUcmFuc3BvcnQiLCJfdHJhbnNwb3J0IiwiYmF0Y2hpbmciLCJfZ2V0RmF5ZUNsaWVudCIsImNoYW5uZWxOYW1lIiwiaXNHZW5lcmljIiwiY2xpZW50VHlwZSIsIl9mYXllQ2xpZW50cyIsInRvcGljIiwiX3RvcGljcyIsImNoYW5uZWwiLCJzdWJzY3JpcHRpb24iLCJjcmVhdGVDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFUQTtBQUNBO0FBQ0E7QUFDQTs7QUEwQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsS0FBTixDQUFnRDtBQUk5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RUFBa0M3QyxRQUFsQyxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFQyxFQUFBQSxXQUFXLENBQUNKLElBQUQsRUFBZXVELFlBQWYsRUFBMkM7QUFDcEQsVUFBTVAsV0FBVyxHQUFHLHNCQUFBaEQsSUFBSSxNQUFKLENBQUFBLElBQUksRUFBUyxHQUFULENBQUosS0FBc0IsQ0FBdEIsR0FBMEJBLElBQTFCLEdBQWlDLFlBQVlBLElBQWpFOztBQUNBLFVBQU1tQyxVQUFVLEdBQUcsS0FBS1ksY0FBTCxDQUFvQkMsV0FBcEIsQ0FBbkI7O0FBQ0FiLElBQUFBLFVBQVUsQ0FBQy9CLFdBQVgsQ0FBdUI0QyxXQUF2QixFQUFvQ08sWUFBcEM7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0VDLEVBQUFBLFlBQVksQ0FBQzNCLFVBQUQsRUFBb0I7QUFDOUIsV0FBTyxLQUFLRixhQUFMLENBQW1CLElBQW5CLEVBQXlCRSxVQUF6QixDQUFQO0FBQ0Q7O0FBL0kyRDs7OztBQW9KOUQ7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQWUsV0FBZixFQUE2QmxCLElBQUQsSUFBVSxJQUFJYyxTQUFKLENBQWNkLElBQWQsQ0FBdEM7ZUFFZWMsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgTWFuYWdlcyBTdHJlYW1pbmcgQVBJc1xuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XG4gKi9cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgeyBDbGllbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ2ZheWUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJNb2R1bGUgfSBmcm9tICcuLi9qc2ZvcmNlJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4uL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgUmVjb3JkLCBTY2hlbWEgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgKiBhcyBTdHJlYW1pbmdFeHRlbnNpb24gZnJvbSAnLi9zdHJlYW1pbmcvZXh0ZW5zaW9uJztcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBTdHJlYW1pbmdNZXNzYWdlPFIgZXh0ZW5kcyBSZWNvcmQ+ID0ge1xuICBldmVudDoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBjcmVhdGVkRGF0ZTogc3RyaW5nO1xuICAgIHJlcGxheUlkOiBudW1iZXI7XG4gIH07XG4gIHNvYmplY3Q6IFI7XG59O1xuXG5leHBvcnQgdHlwZSBHZW5lcmljU3RyZWFtaW5nTWVzc2FnZSA9IHtcbiAgZXZlbnQ6IHtcbiAgICBjcmVhdGVkRGF0ZTogc3RyaW5nO1xuICAgIHJlcGxheUlkOiBudW1iZXI7XG4gIH07XG4gIHBheWxvYWQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFB1c2hFdmVudCA9IHtcbiAgcGF5bG9hZDogc3RyaW5nO1xuICB1c2VySWRzOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFB1c2hFdmVudFJlc3VsdCA9IHtcbiAgZmFub3V0Q291bnQ6IG51bWJlcjtcbiAgdXNlck9ubGluZVN0YXR1czoge1xuICAgIFt1c2VySWQ6IHN0cmluZ106IGJvb2xlYW47XG4gIH07XG59O1xuXG5leHBvcnQgeyBDbGllbnQsIFN1YnNjcmlwdGlvbiB9O1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogU3RyZWFtaW5nIEFQSSB0b3BpYyBjbGFzc1xuICovXG5jbGFzcyBUb3BpYzxTIGV4dGVuZHMgU2NoZW1hLCBSIGV4dGVuZHMgUmVjb3JkPiB7XG4gIF9zdHJlYW1pbmc6IFN0cmVhbWluZzxTPjtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHN0cmVhbWluZzogU3RyZWFtaW5nPFM+LCBuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdHJlYW1pbmcgPSBzdHJlYW1pbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgbGlzdGVuZXIgdG8gdG9waWNcbiAgICovXG4gIHN1YnNjcmliZShsaXN0ZW5lcjogKG1lc3NhZ2U6IFN0cmVhbWluZ01lc3NhZ2U8Uj4pID0+IHZvaWQpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLl9zdHJlYW1pbmcuc3Vic2NyaWJlKHRoaXMubmFtZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGxpc3RlbmVyIGZyb20gdG9waWNcbiAgICovXG4gIHVuc3Vic2NyaWJlKHN1YnNjcjogU3Vic2NyaXB0aW9uKSB7XG4gICAgdGhpcy5fc3RyZWFtaW5nLnVuc3Vic2NyaWJlKHRoaXMubmFtZSwgc3Vic2NyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogU3RyZWFtaW5nIEFQSSBHZW5lcmljIFN0cmVhbWluZyBDaGFubmVsXG4gKi9cbmNsYXNzIENoYW5uZWw8UyBleHRlbmRzIFNjaGVtYT4ge1xuICBfc3RyZWFtaW5nOiBTdHJlYW1pbmc8Uz47XG4gIF9pZDogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHwgdW5kZWZpbmVkO1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc3RyZWFtaW5nOiBTdHJlYW1pbmc8Uz4sIG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0cmVhbWluZyA9IHN0cmVhbWluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBjaGFubmVsXG4gICAqL1xuICBzdWJzY3JpYmUobGlzdGVuZXI6IEZ1bmN0aW9uKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZWFtaW5nLnN1YnNjcmliZSh0aGlzLm5hbWUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKHN1YnNjcjogU3Vic2NyaXB0aW9uKSB7XG4gICAgdGhpcy5fc3RyZWFtaW5nLnVuc3Vic2NyaWJlKHRoaXMubmFtZSwgc3Vic2NyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1c2goZXZlbnRzOiBQdXNoRXZlbnQpOiBQcm9taXNlPFB1c2hFdmVudFJlc3VsdD47XG4gIHB1c2goZXZlbnRzOiBQdXNoRXZlbnQpOiBQcm9taXNlPFB1c2hFdmVudFJlc3VsdFtdPjtcbiAgYXN5bmMgcHVzaChldmVudHM6IFB1c2hFdmVudCB8IFB1c2hFdmVudFtdKSB7XG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKTtcbiAgICBjb25zdCBwdXNoRXZlbnRzID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogW2V2ZW50c107XG4gICAgY29uc3QgY29ubjogQ29ubmVjdGlvbiA9ICh0aGlzLl9zdHJlYW1pbmcuX2Nvbm4gYXMgdW5rbm93bikgYXMgQ29ubmVjdGlvbjtcbiAgICBpZiAoIXRoaXMuX2lkKSB7XG4gICAgICB0aGlzLl9pZCA9IGNvbm5cbiAgICAgICAgLnNvYmplY3QoJ1N0cmVhbWluZ0NoYW5uZWwnKVxuICAgICAgICAuZmluZE9uZSh7IE5hbWU6IHRoaXMubmFtZSB9LCBbJ0lkJ10pXG4gICAgICAgIC50aGVuKChyZWMpID0+IHJlYz8uSWQpO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IGF3YWl0IHRoaXMuX2lkO1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc3RyZWFtaW5nIGNoYW5uZWwgYXZhaWxhYmxlIGZvciBuYW1lOiAke3RoaXMubmFtZX1gKTtcbiAgICB9XG4gICAgY29uc3QgY2hhbm5lbFVybCA9IGAvc29iamVjdHMvU3RyZWFtaW5nQ2hhbm5lbC8ke2lkfS9wdXNoYDtcbiAgICBjb25zdCByZXRzID0gYXdhaXQgY29ubi5yZXF1ZXN0UG9zdDxQdXNoRXZlbnRSZXN1bHRbXT4oY2hhbm5lbFVybCwge1xuICAgICAgcHVzaEV2ZW50cyxcbiAgICB9KTtcbiAgICByZXR1cm4gaXNBcnJheSA/IHJldHMgOiByZXRzWzBdO1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBTdHJlYW1pbmcgQVBJIGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmc8UyBleHRlbmRzIFNjaGVtYT4gZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBfY29ubjogQ29ubmVjdGlvbjxTPjtcbiAgX3RvcGljczogeyBbbmFtZTogc3RyaW5nXTogVG9waWM8UywgUmVjb3JkPiB9ID0ge307XG4gIF9mYXllQ2xpZW50czogeyBbY2xpZW50VHlwZTogc3RyaW5nXTogQ2xpZW50IH0gPSB7fTtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xuICB9XG5cbiAgLyogQHByaXZhdGUgKi9cbiAgX2NyZWF0ZUNsaWVudChmb3JDaGFubmVsTmFtZT86IHN0cmluZyB8IG51bGwsIGV4dGVuc2lvbnM/OiBhbnlbXSkge1xuICAgIC8vIGZvckNoYW5uZWxOYW1lIGlzIGFkdmlzb3J5LCBmb3IgYW4gQVBJIHdvcmthcm91bmQuIEl0IGRvZXMgbm90IHJlc3RyaWN0IG9yIHNlbGVjdCB0aGUgY2hhbm5lbC5cbiAgICBjb25zdCBuZWVkc1JlcGxheUZpeCA9XG4gICAgICB0eXBlb2YgZm9yQ2hhbm5lbE5hbWUgPT09ICdzdHJpbmcnICYmIGZvckNoYW5uZWxOYW1lLmluZGV4T2YoJy91LycpID09PSAwO1xuICAgIGNvbnN0IGVuZHBvaW50VXJsID0gW1xuICAgICAgdGhpcy5fY29ubi5pbnN0YW5jZVVybCxcbiAgICAgIC8vIHNwZWNpYWwgZW5kcG9pbnQgXCIvY29tZXRkL3JlcGxheS94eC54XCIgaXMgb25seSBhdmFpbGFibGUgaW4gMzYuMC5cbiAgICAgIC8vIFNlZSBodHRwczovL3JlbGVhc2Vub3Rlcy5kb2NzLnNhbGVzZm9yY2UuY29tL2VuLXVzL3N1bW1lcjE2L3JlbGVhc2Utbm90ZXMvcm5fYXBpX3N0cmVhbWluZ19jbGFzc2ljX3JlcGxheS5odG1cbiAgICAgICdjb21ldGQnICtcbiAgICAgICAgKG5lZWRzUmVwbGF5Rml4ID09PSB0cnVlICYmIHRoaXMuX2Nvbm4udmVyc2lvbiA9PT0gJzM2LjAnXG4gICAgICAgICAgPyAnL3JlcGxheSdcbiAgICAgICAgICA6ICcnKSxcbiAgICAgIHRoaXMuX2Nvbm4udmVyc2lvbixcbiAgICBdLmpvaW4oJy8nKTtcbiAgICBjb25zdCBmYXllQ2xpZW50ID0gbmV3IENsaWVudChlbmRwb2ludFVybCwge30pO1xuICAgIGZheWVDbGllbnQuc2V0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ09BdXRoICcgKyB0aGlzLl9jb25uLmFjY2Vzc1Rva2VuKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShleHRlbnNpb25zKSkge1xuICAgICAgZm9yIChjb25zdCBleHRlbnNpb24gb2YgZXh0ZW5zaW9ucykge1xuICAgICAgICBmYXllQ2xpZW50LmFkZEV4dGVuc2lvbihleHRlbnNpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBwcmV2ZW50IHN0cmVhbWluZyBBUEkgc2VydmVyIGVycm9yXG4gICAgY29uc3QgZGlzcGF0Y2hlciA9IChmYXllQ2xpZW50IGFzIGFueSkuX2Rpc3BhdGNoZXI7XG4gICAgaWYgKGRpc3BhdGNoZXIuZ2V0Q29ubmVjdGlvblR5cGVzKCkuaW5kZXhPZignY2FsbGJhY2stcG9sbGluZycpID09PSAtMSkge1xuICAgICAgZGlzcGF0Y2hlci5zZWxlY3RUcmFuc3BvcnQoJ2xvbmctcG9sbGluZycpO1xuICAgICAgZGlzcGF0Y2hlci5fdHJhbnNwb3J0LmJhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYXllQ2xpZW50O1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICoqL1xuICBfZ2V0RmF5ZUNsaWVudChjaGFubmVsTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgaXNHZW5lcmljID0gY2hhbm5lbE5hbWUuaW5kZXhPZignL3UvJykgPT09IDA7XG4gICAgY29uc3QgY2xpZW50VHlwZSA9IGlzR2VuZXJpYyA/ICdnZW5lcmljJyA6ICdwdXNoVG9waWMnO1xuICAgIGlmICghdGhpcy5fZmF5ZUNsaWVudHNbY2xpZW50VHlwZV0pIHtcbiAgICAgIHRoaXMuX2ZheWVDbGllbnRzW2NsaWVudFR5cGVdID0gdGhpcy5fY3JlYXRlQ2xpZW50KGNoYW5uZWxOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZheWVDbGllbnRzW2NsaWVudFR5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuYW1lZCB0b3BpY1xuICAgKi9cbiAgdG9waWM8UiBleHRlbmRzIFJlY29yZCA9IFJlY29yZD4obmFtZTogc3RyaW5nKTogVG9waWM8UywgUj4ge1xuICAgIHRoaXMuX3RvcGljcyA9IHRoaXMuX3RvcGljcyB8fCB7fTtcbiAgICBjb25zdCB0b3BpYyA9ICh0aGlzLl90b3BpY3NbbmFtZV0gPVxuICAgICAgdGhpcy5fdG9waWNzW25hbWVdIHx8IG5ldyBUb3BpYzxTLCBSPih0aGlzLCBuYW1lKSk7XG4gICAgcmV0dXJuIHRvcGljIGFzIFRvcGljPFMsIFI+O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGFubmVsIGZvciBjaGFubmVsIG5hbWVcbiAgICovXG4gIGNoYW5uZWwobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFubmVsKHRoaXMsIG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0b3BpYy9jaGFubmVsXG4gICAqL1xuICBzdWJzY3JpYmUobmFtZTogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24pOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IGNoYW5uZWxOYW1lID0gbmFtZS5pbmRleE9mKCcvJykgPT09IDAgPyBuYW1lIDogJy90b3BpYy8nICsgbmFtZTtcbiAgICBjb25zdCBmYXllQ2xpZW50ID0gdGhpcy5fZ2V0RmF5ZUNsaWVudChjaGFubmVsTmFtZSk7XG4gICAgcmV0dXJuIGZheWVDbGllbnQuc3Vic2NyaWJlKGNoYW5uZWxOYW1lLCBsaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdG9waWNcbiAgICovXG4gIHVuc3Vic2NyaWJlKG5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pIHtcbiAgICBjb25zdCBjaGFubmVsTmFtZSA9IG5hbWUuaW5kZXhPZignLycpID09PSAwID8gbmFtZSA6ICcvdG9waWMvJyArIG5hbWU7XG4gICAgY29uc3QgZmF5ZUNsaWVudCA9IHRoaXMuX2dldEZheWVDbGllbnQoY2hhbm5lbE5hbWUpO1xuICAgIGZheWVDbGllbnQudW5zdWJzY3JpYmUoY2hhbm5lbE5hbWUsIHN1YnNjcmlwdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgU3RyZWFtaW5nIGNsaWVudCwgb3B0aW9uYWxseSB3aXRoIGV4dGVuc2lvbnNcbiAgICpcbiAgICogU2VlIEZheWUgZG9jcyBmb3IgaW1wbGVtZW50YXRpb24gZGV0YWlsczogaHR0cHM6Ly9mYXllLmpjb2dsYW4uY29tL2Jyb3dzZXIvZXh0ZW5zaW9ucy5odG1sXG4gICAqXG4gICAqIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QganNmb3JjZSA9IHJlcXVpcmUoJ2pzZm9yY2UnKTtcbiAgICpcbiAgICogLy8gRXN0YWJsaXNoIGEgU2FsZXNmb3JjZSBjb25uZWN0aW9uLiAoRGV0YWlscyBlbGlkZWQpXG4gICAqIGNvbnN0IGNvbm4gPSBuZXcganNmb3JjZS5Db25uZWN0aW9uKHsg4oCmIH0pO1xuICAgKlxuICAgKiBjb25zdCBmYXllQ2xpZW50ID0gY29ubi5zdHJlYW1pbmcuY3JlYXRlQ2xpZW50KCk7XG4gICAqXG4gICAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGZheWVDbGllbnQuc3Vic2NyaWJlKGNoYW5uZWwsIGRhdGEgPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKCd0b3BpYyByZWNlaXZlZCBkYXRhJywgZGF0YSk7XG4gICAqIH0pO1xuICAgKlxuICAgKiBzdWJzY3JpcHRpb24uY2FuY2VsKCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBFeGFtcGxlIHdpdGggZXh0ZW5zaW9ucywgdXNpbmcgUmVwbGF5ICYgQXV0aCBGYWlsdXJlIGV4dGVuc2lvbnMgaW4gYSBzZXJ2ZXItc2lkZSBOb2RlLmpzIGFwcDpcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBqc2ZvcmNlID0gcmVxdWlyZSgnanNmb3JjZScpO1xuICAgKiBjb25zdCB7IFN0cmVhbWluZ0V4dGVuc2lvbiB9ID0gcmVxdWlyZSgnanNmb3JjZS9hcGkvc3RyZWFtaW5nJyk7XG4gICAqXG4gICAqIC8vIEVzdGFibGlzaCBhIFNhbGVzZm9yY2UgY29ubmVjdGlvbi4gKERldGFpbHMgZWxpZGVkKVxuICAgKiBjb25zdCBjb25uID0gbmV3IGpzZm9yY2UuQ29ubmVjdGlvbih7IOKApiB9KTtcbiAgICpcbiAgICogY29uc3QgY2hhbm5lbCA9IFwiL2V2ZW50L015X0V2ZW50X19lXCI7XG4gICAqIGNvbnN0IHJlcGxheUlkID0gLTI7IC8vIC0yIGlzIGFsbCByZXRhaW5lZCBldmVudHNcbiAgICpcbiAgICogY29uc3QgZXhpdENhbGxiYWNrID0gKCkgPT4gcHJvY2Vzcy5leGl0KDEpO1xuICAgKiBjb25zdCBhdXRoRmFpbHVyZUV4dCA9IG5ldyBTdHJlYW1pbmdFeHRlbnNpb24uQXV0aEZhaWx1cmUoZXhpdENhbGxiYWNrKTtcbiAgICpcbiAgICogY29uc3QgcmVwbGF5RXh0ID0gbmV3IFN0cmVhbWluZ0V4dGVuc2lvbi5SZXBsYXkoY2hhbm5lbCwgcmVwbGF5SWQpO1xuICAgKlxuICAgKiBjb25zdCBmYXllQ2xpZW50ID0gY29ubi5zdHJlYW1pbmcuY3JlYXRlQ2xpZW50KFtcbiAgICogICBhdXRoRmFpbHVyZUV4dCxcbiAgICogICByZXBsYXlFeHRcbiAgICogXSk7XG4gICAqXG4gICAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGZheWVDbGllbnQuc3Vic2NyaWJlKGNoYW5uZWwsIGRhdGEgPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKCd0b3BpYyByZWNlaXZlZCBkYXRhJywgZGF0YSk7XG4gICAqIH0pO1xuICAgKlxuICAgKiBzdWJzY3JpcHRpb24uY2FuY2VsKCk7XG4gICAqIGBgYFxuICAgKi9cbiAgY3JlYXRlQ2xpZW50KGV4dGVuc2lvbnM6IGFueVtdKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUNsaWVudChudWxsLCBleHRlbnNpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgeyBTdHJlYW1pbmdFeHRlbnNpb24gfTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKlxuICogUmVnaXN0ZXIgaG9vayBpbiBjb25uZWN0aW9uIGluc3RhbnRpYXRpb24gZm9yIGR5bmFtaWNhbGx5IGFkZGluZyB0aGlzIEFQSSBtb2R1bGUgZmVhdHVyZXNcbiAqL1xucmVnaXN0ZXJNb2R1bGUoJ3N0cmVhbWluZycsIChjb25uKSA9PiBuZXcgU3RyZWFtaW5nKGNvbm4pKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtaW5nO1xuIl19