"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Chatter = exports.Resource = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _jsforce = require("../jsforce");

var _function = require("../util/function");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty2(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context4; _forEachInstanceProperty2(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*--------------------------------------------*/

/**
 * A class representing chatter API request
 */
class Request {
  constructor(chatter, request) {
    (0, _defineProperty2.default)(this, "_chatter", void 0);
    (0, _defineProperty2.default)(this, "_request", void 0);
    (0, _defineProperty2.default)(this, "_promise", void 0);
    this._chatter = chatter;
    this._request = request;
  }
  /**
   * Retrieve parameters in batch request form
   */


  batchParams() {
    const {
      method,
      url,
      body
    } = this._request;
    return _objectSpread({
      method,
      url: this._chatter._normalizeUrl(url)
    }, typeof body !== 'undefined' ? {
      richInput: body
    } : {});
  }
  /**
   * Retrieve parameters in batch request form
   *
   * @method Chatter~Request#promise
   * @returns {Promise.<Chatter~RequestResult>}
   */


  promise() {
    return this._promise || (this._promise = this._chatter._request(this._request));
  }
  /**
   * Returns Node.js Stream object for request
   *
   * @method Chatter~Request#stream
   * @returns {stream.Stream}
   */


  stream() {
    return this._chatter._request(this._request).stream();
  }
  /**
   * Promise/A+ interface
   * http://promises-aplus.github.io/promises-spec/
   *
   * Delegate to deferred promise, return promise instance for batch result
   */


  then(onResolve, onReject) {
    return this.promise().then(onResolve, onReject);
  }

}

function apppendQueryParamsToUrl(url, queryParams) {
  if (queryParams) {
    var _context;

    const qstring = (0, _map.default)(_context = (0, _keys.default)(queryParams)).call(_context, name => {
      var _queryParams$name;

      return `${name}=${encodeURIComponent(String((_queryParams$name = queryParams[name]) !== null && _queryParams$name !== void 0 ? _queryParams$name : ''))}`;
    }).join('&');
    url += ((0, _indexOf.default)(url).call(url, '?') > 0 ? '&' : '?') + qstring;
  }

  return url;
}
/*------------------------------*/


class Resource extends Request {
  /**
   *
   */
  constructor(chatter, url, queryParams) {
    super(chatter, {
      method: 'GET',
      url: apppendQueryParamsToUrl(url, queryParams)
    });
    (0, _defineProperty2.default)(this, "_url", void 0);
    (0, _defineProperty2.default)(this, "delete", this.destroy);
    (0, _defineProperty2.default)(this, "del", this.destroy);
    this._url = this._request.url;
  }
  /**
   * Create a new resource
   */


  create(data) {
    return this._chatter.request({
      method: 'POST',
      url: this._url,
      body: data
    });
  }
  /**
   * Retrieve resource content
   */


  retrieve() {
    return this._chatter.request({
      method: 'GET',
      url: this._url
    });
  }
  /**
   * Update specified resource
   */


  update(data) {
    return this._chatter.request({
      method: 'POST',
      url: this._url,
      body: data
    });
  }
  /**
   * Delete specified resource
   */


  destroy() {
    return this._chatter.request({
      method: 'DELETE',
      url: this._url
    });
  }
  /**
   * Synonym of Resource#destroy()
   */


}
/*------------------------------*/

/**
 * API class for Chatter REST API call
 */


exports.Resource = Resource;

class Chatter {
  /**
   *
   */
  constructor(conn) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    this._conn = conn;
  }
  /**
   * Sending request to API endpoint
   * @private
   */


  _request(req_) {
    const {
      method,
      url: url_,
      headers: headers_,
      body: body_
    } = req_;
    let headers = headers_ !== null && headers_ !== void 0 ? headers_ : {};
    let body;

    if (/^(put|post|patch)$/i.test(method)) {
      if ((0, _function.isObject)(body_)) {
        headers = _objectSpread(_objectSpread({}, headers_), {}, {
          'Content-Type': 'application/json'
        });
        body = (0, _stringify.default)(body_);
      } else {
        body = body_;
      }
    }

    const url = this._normalizeUrl(url_);

    return this._conn.request({
      method,
      url,
      headers,
      body
    });
  }
  /**
   * Convert path to site root relative url
   * @private
   */


  _normalizeUrl(url) {
    if ((0, _indexOf.default)(url).call(url, '/chatter/') === 0 || (0, _indexOf.default)(url).call(url, '/connect/') === 0) {
      return '/services/data/v' + this._conn.version + url;
    } else if (/^\/v[\d]+\.[\d]+\//.test(url)) {
      return '/services/data' + url;
    } else if ((0, _indexOf.default)(url).call(url, '/services/') !== 0 && url[0] === '/') {
      return '/services/data/v' + this._conn.version + '/chatter' + url;
    } else {
      return url;
    }
  }
  /**
   * Make a request for chatter API resource
   */


  request(req) {
    return new Request(this, req);
  }
  /**
   * Make a resource request to chatter API
   */


  resource(url, queryParams) {
    return new Resource(this, url, queryParams);
  }
  /**
   * Make a batch request to chatter API
   */


  async batch(requests) {
    var _context2;

    const deferreds = (0, _map.default)(requests).call(requests, request => {
      const deferred = defer();
      request._promise = deferred.promise;
      return deferred;
    });
    const res = await this.request({
      method: 'POST',
      url: this._normalizeUrl('/connect/batch'),
      body: {
        batchRequests: (0, _map.default)(requests).call(requests, request => request.batchParams())
      }
    });
    (0, _forEach.default)(_context2 = res.results).call(_context2, (result, i) => {
      const deferred = deferreds[i];

      if (result.statusCode >= 400) {
        deferred.reject(result.result);
      } else {
        deferred.resolve(result.result);
      }
    });
    return res;
  }

}

exports.Chatter = Chatter;

function defer() {
  let resolve_ = () => {};

  let reject_ = () => {};

  const promise = new _promise.default((resolve, reject) => {
    resolve_ = resolve;
    reject_ = reject;
  });
  return {
    promise,
    resolve: resolve_,
    reject: reject_
  };
}
/*--------------------------------------------*/

/*
 * Register hook in connection instantiation for dynamically adding this API module features
 */


(0, _jsforce.registerModule)('chatter', conn => new Chatter(conn));
var _default = Chatter;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvY2hhdHRlci50cyJdLCJuYW1lcyI6WyJSZXF1ZXN0IiwiY29uc3RydWN0b3IiLCJjaGF0dGVyIiwicmVxdWVzdCIsIl9jaGF0dGVyIiwiX3JlcXVlc3QiLCJiYXRjaFBhcmFtcyIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJfbm9ybWFsaXplVXJsIiwicmljaElucHV0IiwicHJvbWlzZSIsIl9wcm9taXNlIiwic3RyZWFtIiwidGhlbiIsIm9uUmVzb2x2ZSIsIm9uUmVqZWN0IiwiYXBwcGVuZFF1ZXJ5UGFyYW1zVG9VcmwiLCJxdWVyeVBhcmFtcyIsInFzdHJpbmciLCJuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU3RyaW5nIiwiam9pbiIsIlJlc291cmNlIiwiZGVzdHJveSIsIl91cmwiLCJjcmVhdGUiLCJkYXRhIiwicmV0cmlldmUiLCJ1cGRhdGUiLCJDaGF0dGVyIiwiY29ubiIsIl9jb25uIiwicmVxXyIsInVybF8iLCJoZWFkZXJzIiwiaGVhZGVyc18iLCJib2R5XyIsInRlc3QiLCJ2ZXJzaW9uIiwicmVxIiwicmVzb3VyY2UiLCJiYXRjaCIsInJlcXVlc3RzIiwiZGVmZXJyZWRzIiwiZGVmZXJyZWQiLCJkZWZlciIsInJlcyIsImJhdGNoUmVxdWVzdHMiLCJyZXN1bHRzIiwicmVzdWx0IiwiaSIsInN0YXR1c0NvZGUiLCJyZWplY3QiLCJyZXNvbHZlIiwicmVzb2x2ZV8iLCJyZWplY3RfIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFHQTs7Ozs7O0FBK0JBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLE9BQU4sQ0FBbUM7QUFLakNDLEVBQUFBLFdBQVcsQ0FBQ0MsT0FBRCxFQUFzQkMsT0FBdEIsRUFBcUQ7QUFBQTtBQUFBO0FBQUE7QUFDOUQsU0FBS0MsUUFBTCxHQUFnQkYsT0FBaEI7QUFDQSxTQUFLRyxRQUFMLEdBQWdCRixPQUFoQjtBQUNE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ekIsRUFBOEI7QUFDNUJQLFFBQUFBLFFBQVEsQ0FBQ1EsTUFBVCxDQUFnQkgsTUFBTSxDQUFDQSxNQUF2QjtBQUNELE9BRkQsTUFFTztBQUNMTCxRQUFBQSxRQUFRLENBQUNTLE9BQVQsQ0FBaUJKLE1BQU0sQ0FBQ0EsTUFBeEI7QUFDRDtBQUNGLEtBUEQ7QUFRQSxXQUFPSCxHQUFQO0FBQ0Q7O0FBbEdvQzs7OztBQXFHdkMsU0FBU0QsS0FBVCxHQUFvQjtBQUNsQixNQUFJUyxRQUF5QyxHQUFHLE1BQU0sQ0FBRSxDQUF4RDs7QUFDQSxNQUFJQyxPQUF5QixHQUFHLE1BQU0sQ0FBRSxDQUF4Qzs7QUFDQSxRQUFNOUMsT0FBTyxHQUFHLHFCQUFlLENBQUM0QyxPQUFELEVBQVVELE1BQVYsS0FBcUI7QUFDbERFLElBQUFBLFFBQVEsR0FBR0QsT0FBWDtBQUNBRSxJQUFBQSxPQUFPLEdBQUdILE1BQVY7QUFDRCxHQUhlLENBQWhCO0FBSUEsU0FBTztBQUNMM0MsSUFBQUEsT0FESztBQUVMNEMsSUFBQUEsT0FBTyxFQUFFQyxRQUZKO0FBR0xGLElBQUFBLE1BQU0sRUFBRUc7QUFISCxHQUFQO0FBS0Q7QUFFRDs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLDZCQUFlLFNBQWYsRUFBMkJ6QixJQUFELElBQVUsSUFBSUQsT0FBSixDQUFZQyxJQUFaLENBQXBDO2VBRWVELE8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIE1hbmFnZXMgU2FsZXNmb3JjZSBDaGF0dGVyIFJFU1QgQVBJIGNhbGxzXG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cbiAqL1xuaW1wb3J0IHsgcmVnaXN0ZXJNb2R1bGUgfSBmcm9tICcuLi9qc2ZvcmNlJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4uL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIFNjaGVtYSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbC9mdW5jdGlvbic7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQ2hhdHRlclJlcXVlc3RQYXJhbXMgPSBPbWl0PEh0dHBSZXF1ZXN0LCAnYm9keSc+ICYge1xuICBib2R5Pzogc3RyaW5nIHwgb2JqZWN0IHwgbnVsbDtcbn07XG5cbmV4cG9ydCB0eXBlIEJhdGNoUmVxdWVzdFBhcmFtcyA9IHtcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICByaWNoSW5wdXQ/OiBhbnk7XG59O1xuXG50eXBlIEJhdGNoUmVxdWVzdFR1cHBsZTxTIGV4dGVuZHMgU2NoZW1hLCBSVCBleHRlbmRzIGFueVtdPiA9IHtcbiAgW0sgaW4ga2V5b2YgUlRdOiBSZXF1ZXN0PFMsIFJUW0tdPjtcbn07XG5cbnR5cGUgQmF0Y2hSZXN1bHRUdXBwbGU8UlQgZXh0ZW5kcyBhbnlbXT4gPSB7XG4gIFtLIGluIGtleW9mIFJUXToge1xuICAgIHN0YXR1c0NvZGU6IG51bWJlcjtcbiAgICByZXN1bHQ6IFJUW0tdO1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQmF0Y2hSZXNwb25zZTxSVCBleHRlbmRzIGFueVtdPiA9IHtcbiAgaGFzRXJyb3JzOiBib29sZWFuO1xuICByZXN1bHRzOiBCYXRjaFJlc3VsdFR1cHBsZTxSVD47XG59O1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogQSBjbGFzcyByZXByZXNlbnRpbmcgY2hhdHRlciBBUEkgcmVxdWVzdFxuICovXG5jbGFzcyBSZXF1ZXN0PFMgZXh0ZW5kcyBTY2hlbWEsIFI+IHtcbiAgX2NoYXR0ZXI6IENoYXR0ZXI8Uz47XG4gIF9yZXF1ZXN0OiBDaGF0dGVyUmVxdWVzdFBhcmFtcztcbiAgX3Byb21pc2U6IFByb21pc2U8Uj4gfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoY2hhdHRlcjogQ2hhdHRlcjxTPiwgcmVxdWVzdDogQ2hhdHRlclJlcXVlc3RQYXJhbXMpIHtcbiAgICB0aGlzLl9jaGF0dGVyID0gY2hhdHRlcjtcbiAgICB0aGlzLl9yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBwYXJhbWV0ZXJzIGluIGJhdGNoIHJlcXVlc3QgZm9ybVxuICAgKi9cbiAgYmF0Y2hQYXJhbXMoKSB7XG4gICAgY29uc3QgeyBtZXRob2QsIHVybCwgYm9keSB9ID0gdGhpcy5fcmVxdWVzdDtcbiAgICByZXR1cm4ge1xuICAgICAgbWV0aG9kLFxuICAgICAgdXJsOiB0aGlzLl9jaGF0dGVyLl9ub3JtYWxpemVVcmwodXJsKSxcbiAgICAgIC4uLih0eXBlb2YgYm9keSAhPT0gJ3VuZGVmaW5lZCcgPyB7IHJpY2hJbnB1dDogYm9keSB9IDoge30pLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgcGFyYW1ldGVycyBpbiBiYXRjaCByZXF1ZXN0IGZvcm1cbiAgICpcbiAgICogQG1ldGhvZCBDaGF0dGVyflJlcXVlc3QjcHJvbWlzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48Q2hhdHRlcn5SZXF1ZXN0UmVzdWx0Pn1cbiAgICovXG4gIHByb21pc2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3Byb21pc2UgfHwgKHRoaXMuX3Byb21pc2UgPSB0aGlzLl9jaGF0dGVyLl9yZXF1ZXN0KHRoaXMuX3JlcXVlc3QpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBOb2RlLmpzIFN0cmVhbSBvYmplY3QgZm9yIHJlcXVlc3RcbiAgICpcbiAgICogQG1ldGhvZCBDaGF0dGVyflJlcXVlc3Qjc3RyZWFtXG4gICAqIEByZXR1cm5zIHtzdHJlYW0uU3RyZWFtfVxuICAgKi9cbiAgc3RyZWFtKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGF0dGVyLl9yZXF1ZXN0PFI+KHRoaXMuX3JlcXVlc3QpLnN0cmVhbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb21pc2UvQSsgaW50ZXJmYWNlXG4gICAqIGh0dHA6Ly9wcm9taXNlcy1hcGx1cy5naXRodWIuaW8vcHJvbWlzZXMtc3BlYy9cbiAgICpcbiAgICogRGVsZWdhdGUgdG8gZGVmZXJyZWQgcHJvbWlzZSwgcmV0dXJuIHByb21pc2UgaW5zdGFuY2UgZm9yIGJhdGNoIHJlc3VsdFxuICAgKi9cbiAgdGhlbjxVPihcbiAgICBvblJlc29sdmU/OiAodmFsdWU6IFIpID0+IFUgfCBQcm9taXNlTGlrZTxVPixcbiAgICBvblJlamVjdD86IChlOiBhbnkpID0+IFUgfCBQcm9taXNlTGlrZTxVPixcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZSgpLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwcGVuZFF1ZXJ5UGFyYW1zVG9VcmwoXG4gIHVybDogc3RyaW5nLFxuICBxdWVyeVBhcmFtcz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBudWxsIH0gfCBudWxsLFxuKSB7XG4gIGlmIChxdWVyeVBhcmFtcykge1xuICAgIGNvbnN0IHFzdHJpbmcgPSBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcylcbiAgICAgIC5tYXAoXG4gICAgICAgIChuYW1lKSA9PlxuICAgICAgICAgIGAke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhxdWVyeVBhcmFtc1tuYW1lXSA/PyAnJykpfWAsXG4gICAgICApXG4gICAgICAuam9pbignJicpO1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA+IDAgPyAnJicgOiAnPycpICsgcXN0cmluZztcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgY2xhc3MgUmVzb3VyY2U8UyBleHRlbmRzIFNjaGVtYSwgUj4gZXh0ZW5kcyBSZXF1ZXN0PFMsIFI+IHtcbiAgX3VybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY2hhdHRlcjogQ2hhdHRlcjxTPixcbiAgICB1cmw6IHN0cmluZyxcbiAgICBxdWVyeVBhcmFtcz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBudWxsIH0gfCBudWxsLFxuICApIHtcbiAgICBzdXBlcihjaGF0dGVyLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiBhcHBwZW5kUXVlcnlQYXJhbXNUb1VybCh1cmwsIHF1ZXJ5UGFyYW1zKSxcbiAgICB9KTtcbiAgICB0aGlzLl91cmwgPSB0aGlzLl9yZXF1ZXN0LnVybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcmVzb3VyY2VcbiAgICovXG4gIGNyZWF0ZTxSMSA9IGFueT4oZGF0YTogc3RyaW5nIHwgb2JqZWN0IHwgbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9jaGF0dGVyLnJlcXVlc3Q8UjE+KHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiB0aGlzLl91cmwsXG4gICAgICBib2R5OiBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHJlc291cmNlIGNvbnRlbnRcbiAgICovXG4gIHJldHJpZXZlPFIxID0gUj4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXR0ZXIucmVxdWVzdDxSMT4oe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzcGVjaWZpZWQgcmVzb3VyY2VcbiAgICovXG4gIHVwZGF0ZTxSMSA9IGFueT4oZGF0YTogb2JqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXR0ZXIucmVxdWVzdDxSMT4oe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6IHRoaXMuX3VybCxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHNwZWNpZmllZCByZXNvdXJjZVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhdHRlci5yZXF1ZXN0PHZvaWQ+KHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6IHRoaXMuX3VybCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5vbnltIG9mIFJlc291cmNlI2Rlc3Ryb3koKVxuICAgKi9cbiAgZGVsZXRlID0gdGhpcy5kZXN0cm95O1xuXG4gIC8qKlxuICAgKiBTeW5vbnltIG9mIFJlc291cmNlI2Rlc3Ryb3koKVxuICAgKi9cbiAgZGVsID0gdGhpcy5kZXN0cm95O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKipcbiAqIEFQSSBjbGFzcyBmb3IgQ2hhdHRlciBSRVNUIEFQSSBjYWxsXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGF0dGVyPFMgZXh0ZW5kcyBTY2hlbWE+IHtcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25uOiBDb25uZWN0aW9uPFM+KSB7XG4gICAgdGhpcy5fY29ubiA9IGNvbm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZGluZyByZXF1ZXN0IHRvIEFQSSBlbmRwb2ludFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlcXVlc3Q8Uj4ocmVxXzogQ2hhdHRlclJlcXVlc3RQYXJhbXMpIHtcbiAgICBjb25zdCB7IG1ldGhvZCwgdXJsOiB1cmxfLCBoZWFkZXJzOiBoZWFkZXJzXywgYm9keTogYm9keV8gfSA9IHJlcV87XG4gICAgbGV0IGhlYWRlcnMgPSBoZWFkZXJzXyA/PyB7fTtcbiAgICBsZXQgYm9keTtcbiAgICBpZiAoL14ocHV0fHBvc3R8cGF0Y2gpJC9pLnRlc3QobWV0aG9kKSkge1xuICAgICAgaWYgKGlzT2JqZWN0KGJvZHlfKSkge1xuICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgIC4uLmhlYWRlcnNfLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH07XG4gICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5Xyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5ID0gYm9keV87XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IHRoaXMuX25vcm1hbGl6ZVVybCh1cmxfKTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PFI+KHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnMsXG4gICAgICBib2R5LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgcGF0aCB0byBzaXRlIHJvb3QgcmVsYXRpdmUgdXJsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfbm9ybWFsaXplVXJsKHVybDogc3RyaW5nKSB7XG4gICAgaWYgKHVybC5pbmRleE9mKCcvY2hhdHRlci8nKSA9PT0gMCB8fCB1cmwuaW5kZXhPZignL2Nvbm5lY3QvJykgPT09IDApIHtcbiAgICAgIHJldHVybiAnL3NlcnZpY2VzL2RhdGEvdicgKyB0aGlzLl9jb25uLnZlcnNpb24gKyB1cmw7XG4gICAgfSBlbHNlIGlmICgvXlxcL3ZbXFxkXStcXC5bXFxkXStcXC8vLnRlc3QodXJsKSkge1xuICAgICAgcmV0dXJuICcvc2VydmljZXMvZGF0YScgKyB1cmw7XG4gICAgfSBlbHNlIGlmICh1cmwuaW5kZXhPZignL3NlcnZpY2VzLycpICE9PSAwICYmIHVybFswXSA9PT0gJy8nKSB7XG4gICAgICByZXR1cm4gJy9zZXJ2aWNlcy9kYXRhL3YnICsgdGhpcy5fY29ubi52ZXJzaW9uICsgJy9jaGF0dGVyJyArIHVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHJlcXVlc3QgZm9yIGNoYXR0ZXIgQVBJIHJlc291cmNlXG4gICAqL1xuICByZXF1ZXN0PFIgPSB1bmtub3duPihyZXE6IENoYXR0ZXJSZXF1ZXN0UGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0PFMsIFI+KHRoaXMsIHJlcSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHJlc291cmNlIHJlcXVlc3QgdG8gY2hhdHRlciBBUElcbiAgICovXG4gIHJlc291cmNlPFIgPSB1bmtub3duPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBxdWVyeVBhcmFtcz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBudWxsIH0gfCBudWxsLFxuICApIHtcbiAgICByZXR1cm4gbmV3IFJlc291cmNlPFMsIFI+KHRoaXMsIHVybCwgcXVlcnlQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBiYXRjaCByZXF1ZXN0IHRvIGNoYXR0ZXIgQVBJXG4gICAqL1xuICBhc3luYyBiYXRjaDxSVCBleHRlbmRzIGFueVtdPihcbiAgICByZXF1ZXN0czogQmF0Y2hSZXF1ZXN0VHVwcGxlPFMsIFJUPixcbiAgKTogUHJvbWlzZTxCYXRjaFJlc3BvbnNlPFJUPj4ge1xuICAgIGNvbnN0IGRlZmVycmVkcyA9IHJlcXVlc3RzLm1hcCgocmVxdWVzdCkgPT4ge1xuICAgICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgICAgcmVxdWVzdC5fcHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2U7XG4gICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5yZXF1ZXN0PEJhdGNoUmVzcG9uc2U8UlQ+Pih7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogdGhpcy5fbm9ybWFsaXplVXJsKCcvY29ubmVjdC9iYXRjaCcpLFxuICAgICAgYm9keToge1xuICAgICAgICBiYXRjaFJlcXVlc3RzOiByZXF1ZXN0cy5tYXAoKHJlcXVlc3QpID0+IHJlcXVlc3QuYmF0Y2hQYXJhbXMoKSksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlcy5yZXN1bHRzLmZvckVhY2goKHJlc3VsdCwgaSkgPT4ge1xuICAgICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcnJlZHNbaV07XG4gICAgICBpZiAocmVzdWx0LnN0YXR1c0NvZGUgPj0gNDAwKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChyZXN1bHQucmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LnJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZlcjxUPigpIHtcbiAgbGV0IHJlc29sdmVfOiAocjogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkID0gKCkgPT4ge307XG4gIGxldCByZWplY3RfOiAoZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzb2x2ZV8gPSByZXNvbHZlO1xuICAgIHJlamVjdF8gPSByZWplY3Q7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHByb21pc2UsXG4gICAgcmVzb2x2ZTogcmVzb2x2ZV8sXG4gICAgcmVqZWN0OiByZWplY3RfLFxuICB9O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qXG4gKiBSZWdpc3RlciBob29rIGluIGNvbm5lY3Rpb24gaW5zdGFudGlhdGlvbiBmb3IgZHluYW1pY2FsbHkgYWRkaW5nIHRoaXMgQVBJIG1vZHVsZSBmZWF0dXJlc1xuICovXG5yZWdpc3Rlck1vZHVsZSgnY2hhdHRlcicsIChjb25uKSA9PiBuZXcgQ2hhdHRlcihjb25uKSk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYXR0ZXI7XG4iXX0=