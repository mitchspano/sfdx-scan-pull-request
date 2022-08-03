"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

require("core-js/modules/es.array.iterator");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.HttpProxyTransport = exports.XdProxyTransport = exports.CanvasTransport = exports.JsonpTransport = exports.Transport = void 0;

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _request = _interopRequireWildcard(require("./request"));

var _promise2 = require("./util/promise");

var _jsonp = _interopRequireDefault(require("./browser/jsonp"));

var _canvas = _interopRequireDefault(require("./browser/canvas"));

var _ref, _process$env$HTTPS_PR;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Normarize Salesforce API host name
 * @private
 */
function normalizeApiHost(apiHost) {
  const m = /(\w+)\.(visual\.force|salesforce)\.com$/.exec(apiHost);

  if (m) {
    return `${m[1]}.salesforce.com`;
  }

  return apiHost;
}

(0, _request.setDefaults)({
  httpProxy: (_ref = (_process$env$HTTPS_PR = process.env.HTTPS_PROXY) !== null && _process$env$HTTPS_PR !== void 0 ? _process$env$HTTPS_PR : process.env.HTTP_PROXY) !== null && _ref !== void 0 ? _ref : undefined,
  timeout: process.env.HTTP_TIMEOUT ? (0, _parseInt2.default)(process.env.HTTP_TIMEOUT, 10) : undefined
});
const baseUrl = typeof window !== 'undefined' && window.location && window.location.host ? `https://${normalizeApiHost(window.location.host)}` : process.env.LOCATION_BASE_URL || '';
/**
 * Class for HTTP request transport
 *
 * @class
 * @protected
 */

class Transport {
  /**
   */
  httpRequest(req, options = {}) {
    return _promise2.StreamPromise.create(() => {
      const createStream = this.getRequestStreamCreator();
      const stream = createStream(req, options);
      const promise = new _promise.default((resolve, reject) => {
        stream.on('complete', res => resolve(res)).on('error', reject);
      });
      return {
        stream,
        promise
      };
    });
  }
  /**
   * @protected
   */


  getRequestStreamCreator() {
    return _request.default;
  }

}
/**
 * Class for JSONP request transport
 */


exports.Transport = Transport;

class JsonpTransport extends Transport {
  constructor(jsonpParam) {
    super();
    (0, _defineProperty2.default)(this, "_jsonpParam", void 0);
    this._jsonpParam = jsonpParam;
  }

  getRequestStreamCreator() {
    const jsonpRequest = _jsonp.default.createRequest(this._jsonpParam);

    return params => jsonpRequest(params);
  }

}
/**
 * Class for Sfdc Canvas request transport
 */


exports.JsonpTransport = JsonpTransport;
(0, _defineProperty2.default)(JsonpTransport, "supprted", _jsonp.default.supported);

class CanvasTransport extends Transport {
  constructor(signedRequest) {
    super();
    (0, _defineProperty2.default)(this, "_signedRequest", void 0);
    this._signedRequest = signedRequest;
  }

  getRequestStreamCreator() {
    const canvasRequest = _canvas.default.createRequest(this._signedRequest);

    return params => canvasRequest(params);
  }

}
/* @private */


exports.CanvasTransport = CanvasTransport;
(0, _defineProperty2.default)(CanvasTransport, "supported", _canvas.default.supported);

function createXdProxyRequest(req, proxyUrl) {
  const headers = {
    'salesforceproxy-endpoint': req.url
  };

  if (req.headers) {
    for (const name of (0, _keys.default)(req.headers)) {
      headers[name] = req.headers[name];
    }
  }

  const nocache = `${(0, _now.default)()}.${String(Math.random()).substring(2)}`;
  return _objectSpread({
    method: req.method,
    url: `${proxyUrl}?${nocache}`,
    headers
  }, req.body != null ? {
    body: req.body
  } : {});
}
/**
 * Class for HTTP request transport using cross-domain AJAX proxy service
 */


class XdProxyTransport extends Transport {
  constructor(xdProxyUrl) {
    super();
    (0, _defineProperty2.default)(this, "_xdProxyUrl", void 0);
    this._xdProxyUrl = xdProxyUrl;
  }
  /**
   * Make HTTP request via AJAX proxy
   */


  httpRequest(req, _options = {}) {
    const xdProxyUrl = this._xdProxyUrl;
    const {
      url,
      body
    } = req,
          rreq = (0, _objectWithoutProperties2.default)(req, ["url", "body"]);
    const canonicalUrl = (0, _indexOf.default)(url).call(url, '/') === 0 ? baseUrl + url : url;
    const xdProxyReq = createXdProxyRequest(_objectSpread(_objectSpread({}, rreq), {}, {
      url: canonicalUrl,
      body
    }), xdProxyUrl);
    return super.httpRequest(xdProxyReq, {
      followRedirect: redirectUrl => createXdProxyRequest(_objectSpread(_objectSpread({}, rreq), {}, {
        method: 'GET',
        url: redirectUrl
      }), xdProxyUrl)
    });
  }

}
/**
 * Class for HTTP request transport using a proxy server
 */


exports.XdProxyTransport = XdProxyTransport;

class HttpProxyTransport extends Transport {
  constructor(httpProxy) {
    super();
    (0, _defineProperty2.default)(this, "_httpProxy", void 0);
    this._httpProxy = httpProxy;
  }
  /**
   * Make HTTP request via proxy server
   */


  httpRequest(req, options_ = {}) {
    const options = _objectSpread(_objectSpread({}, options_), {}, {
      httpProxy: this._httpProxy
    });

    return super.httpRequest(req, options);
  }

}

exports.HttpProxyTransport = HttpProxyTransport;
var _default = Transport;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc3BvcnQudHMiXSwibmFtZXMiOlsibm9ybWFsaXplQXBpSG9zdCIsImFwaUhvc3QiLCJtIiwiZXhlYyIsImh0dHBQcm94eSIsInByb2Nlc3MiLCJlbnYiLCJIVFRQU19QUk9YWSIsIkhUVFBfUFJPWFkiLCJ1bmRlZmluZWQiLCJ0aW1lb3V0IiwiSFRUUF9USU1FT1VUIiwiYmFzZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsIkxPQ0FUSU9OX0JBU0VfVVJMIiwiVHJhbnNwb3J0IiwiaHR0cFJlcXVlc3QiLCJyZXEiLCJvcHRpb25zIiwiU3RyZWFtUHJvbWlzZSIsImNyZWF0ZSIsImNyZWF0ZVN0cmVhbSIsImdldFJlcXVlc3RTdHJlYW1DcmVhdG9yIiwic3RyZWFtIiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsInJlcyIsInJlcXVlc3QiLCJKc29ucFRyYW5zcG9ydCIsImNvbnN0cnVjdG9yIiwianNvbnBQYXJhbSIsIl9qc29ucFBhcmFtIiwianNvbnBSZXF1ZXN0IiwianNvbnAiLCJjcmVhdGVSZXF1ZXN0IiwicGFyYW1zIiwic3VwcG9ydGVkIiwiQ2FudmFzVHJhbnNwb3J0Iiwic2lnbmVkUmVxdWVzdCIsIl9zaWduZWRSZXF1ZXN0IiwiY2FudmFzUmVxdWVzdCIsImNhbnZhcyIsImNyZWF0ZVhkUHJveHlSZXF1ZXN0IiwicHJveHlVcmwiLCJoZWFkZXJzIiwidXJsIiwibmFtZSIsIm5vY2FjaGUiLCJTdHJpbmciLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwibWV0aG9kIiwiYm9keSIsIlhkUHJveHlUcmFuc3BvcnQiLCJ4ZFByb3h5VXJsIiwiX3hkUHJveHlVcmwiLCJfb3B0aW9ucyIsInJyZXEiLCJjYW5vbmljYWxVcmwiLCJ4ZFByb3h5UmVxIiwiZm9sbG93UmVkaXJlY3QiLCJyZWRpcmVjdFVybCIsIkh0dHBQcm94eVRyYW5zcG9ydCIsIl9odHRwUHJveHkiLCJvcHRpb25zXyJdLCJtYXBw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RSxLQUFLZ0U7QUFBbEMsTUFBYjs7QUFDQSxXQUFPLE1BQU1sRCxXQUFOLENBQWtCQyxHQUFsQixFQUF1QkMsT0FBdkIsQ0FBUDtBQUNEOztBQWQrQzs7O2VBaUJuQ0gsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuaW1wb3J0IHsgRHVwbGV4IH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCByZXF1ZXN0LCB7IHNldERlZmF1bHRzIH0gZnJvbSAnLi9yZXF1ZXN0JztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwUmVxdWVzdE9wdGlvbnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU3RyZWFtUHJvbWlzZSB9IGZyb20gJy4vdXRpbC9wcm9taXNlJztcbmltcG9ydCBqc29ucCBmcm9tICcuL2Jyb3dzZXIvanNvbnAnO1xuaW1wb3J0IGNhbnZhcyBmcm9tICcuL2Jyb3dzZXIvY2FudmFzJztcblxuLyoqXG4gKiBOb3JtYXJpemUgU2FsZXNmb3JjZSBBUEkgaG9zdCBuYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVBcGlIb3N0KGFwaUhvc3Q6IHN0cmluZykge1xuICBjb25zdCBtID0gLyhcXHcrKVxcLih2aXN1YWxcXC5mb3JjZXxzYWxlc2ZvcmNlKVxcLmNvbSQvLmV4ZWMoYXBpSG9zdCk7XG4gIGlmIChtKSB7XG4gICAgcmV0dXJuIGAke21bMV19LnNhbGVzZm9yY2UuY29tYDtcbiAgfVxuICByZXR1cm4gYXBpSG9zdDtcbn1cblxuc2V0RGVmYXVsdHMoe1xuICBodHRwUHJveHk6IHByb2Nlc3MuZW52LkhUVFBTX1BST1hZID8/IHByb2Nlc3MuZW52LkhUVFBfUFJPWFkgPz8gdW5kZWZpbmVkLFxuICB0aW1lb3V0OiBwcm9jZXNzLmVudi5IVFRQX1RJTUVPVVRcbiAgICA/IHBhcnNlSW50KHByb2Nlc3MuZW52LkhUVFBfVElNRU9VVCwgMTApXG4gICAgOiB1bmRlZmluZWQsXG59KTtcblxuY29uc3QgYmFzZVVybCA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaG9zdFxuICAgID8gYGh0dHBzOi8vJHtub3JtYWxpemVBcGlIb3N0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KX1gXG4gICAgOiBwcm9jZXNzLmVudi5MT0NBVElPTl9CQVNFX1VSTCB8fCAnJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgSFRUUCByZXF1ZXN0IHRyYW5zcG9ydFxuICpcbiAqIEBjbGFzc1xuICogQHByb3RlY3RlZFxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNwb3J0IHtcbiAgLyoqXG4gICAqL1xuICBodHRwUmVxdWVzdChcbiAgICByZXE6IEh0dHBSZXF1ZXN0LFxuICAgIG9wdGlvbnM6IEh0dHBSZXF1ZXN0T3B0aW9ucyA9IHt9LFxuICApOiBTdHJlYW1Qcm9taXNlPEh0dHBSZXNwb25zZT4ge1xuICAgIHJldHVybiBTdHJlYW1Qcm9taXNlLmNyZWF0ZSgoKSA9PiB7XG4gICAgICBjb25zdCBjcmVhdGVTdHJlYW0gPSB0aGlzLmdldFJlcXVlc3RTdHJlYW1DcmVhdG9yKCk7XG4gICAgICBjb25zdCBzdHJlYW0gPSBjcmVhdGVTdHJlYW0ocmVxLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxIdHRwUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc3RyZWFtXG4gICAgICAgICAgLm9uKCdjb21wbGV0ZScsIChyZXM6IEh0dHBSZXNwb25zZSkgPT4gcmVzb2x2ZShyZXMpKVxuICAgICAgICAgIC5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBzdHJlYW0sIHByb21pc2UgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBnZXRSZXF1ZXN0U3RyZWFtQ3JlYXRvcigpOiAoXG4gICAgcmVxOiBIdHRwUmVxdWVzdCxcbiAgICBvcHRpb25zOiBIdHRwUmVxdWVzdE9wdGlvbnMsXG4gICkgPT4gRHVwbGV4IHtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIGZvciBKU09OUCByZXF1ZXN0IHRyYW5zcG9ydFxuICovXG5leHBvcnQgY2xhc3MgSnNvbnBUcmFuc3BvcnQgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICBzdGF0aWMgc3VwcHJ0ZWQ6IGJvb2xlYW4gPSBqc29ucC5zdXBwb3J0ZWQ7XG4gIF9qc29ucFBhcmFtOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoanNvbnBQYXJhbTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9qc29ucFBhcmFtID0ganNvbnBQYXJhbTtcbiAgfVxuXG4gIGdldFJlcXVlc3RTdHJlYW1DcmVhdG9yKCk6IChcbiAgICByZXE6IEh0dHBSZXF1ZXN0LFxuICAgIG9wdGlvbnM6IEh0dHBSZXF1ZXN0T3B0aW9ucyxcbiAgKSA9PiBEdXBsZXgge1xuICAgIGNvbnN0IGpzb25wUmVxdWVzdCA9IGpzb25wLmNyZWF0ZVJlcXVlc3QodGhpcy5fanNvbnBQYXJhbSk7XG4gICAgcmV0dXJuIChwYXJhbXMpID0+IGpzb25wUmVxdWVzdChwYXJhbXMpO1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgZm9yIFNmZGMgQ2FudmFzIHJlcXVlc3QgdHJhbnNwb3J0XG4gKi9cbmV4cG9ydCBjbGFzcyBDYW52YXNUcmFuc3BvcnQgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICBzdGF0aWMgc3VwcG9ydGVkOiBib29sZWFuID0gY2FudmFzLnN1cHBvcnRlZDtcbiAgX3NpZ25lZFJlcXVlc3Q6IGFueTtcblxuICBjb25zdHJ1Y3RvcihzaWduZWRSZXF1ZXN0OiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3NpZ25lZFJlcXVlc3QgPSBzaWduZWRSZXF1ZXN0O1xuICB9XG5cbiAgZ2V0UmVxdWVzdFN0cmVhbUNyZWF0b3IoKTogKFxuICAgIHJlcTogSHR0cFJlcXVlc3QsXG4gICAgb3B0aW9uczogSHR0cFJlcXVlc3RPcHRpb25zLFxuICApID0+IER1cGxleCB7XG4gICAgY29uc3QgY2FudmFzUmVxdWVzdCA9IGNhbnZhcy5jcmVhdGVSZXF1ZXN0KHRoaXMuX3NpZ25lZFJlcXVlc3QpO1xuICAgIHJldHVybiAocGFyYW1zKSA9PiBjYW52YXNSZXF1ZXN0KHBhcmFtcyk7XG4gIH1cbn1cblxuLyogQHByaXZhdGUgKi9cbmZ1bmN0aW9uIGNyZWF0ZVhkUHJveHlSZXF1ZXN0KHJlcTogSHR0cFJlcXVlc3QsIHByb3h5VXJsOiBzdHJpbmcpOiBIdHRwUmVxdWVzdCB7XG4gIGNvbnN0IGhlYWRlcnM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICdzYWxlc2ZvcmNlcHJveHktZW5kcG9pbnQnOiByZXEudXJsLFxuICB9O1xuICBpZiAocmVxLmhlYWRlcnMpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMocmVxLmhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzW25hbWVdID0gcmVxLmhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9XG4gIGNvbnN0IG5vY2FjaGUgPSBgJHtEYXRlLm5vdygpfS4ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zdWJzdHJpbmcoMil9YDtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IHJlcS5tZXRob2QsXG4gICAgdXJsOiBgJHtwcm94eVVybH0/JHtub2NhY2hlfWAsXG4gICAgaGVhZGVycyxcbiAgICAuLi4ocmVxLmJvZHkgIT0gbnVsbCA/IHsgYm9keTogcmVxLmJvZHkgfSA6IHt9KSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDbGFzcyBmb3IgSFRUUCByZXF1ZXN0IHRyYW5zcG9ydCB1c2luZyBjcm9zcy1kb21haW4gQUpBWCBwcm94eSBzZXJ2aWNlXG4gKi9cbmV4cG9ydCBjbGFzcyBYZFByb3h5VHJhbnNwb3J0IGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgX3hkUHJveHlVcmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih4ZFByb3h5VXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3hkUHJveHlVcmwgPSB4ZFByb3h5VXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgSFRUUCByZXF1ZXN0IHZpYSBBSkFYIHByb3h5XG4gICAqL1xuICBodHRwUmVxdWVzdChyZXE6IEh0dHBSZXF1ZXN0LCBfb3B0aW9uczogSHR0cFJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB4ZFByb3h5VXJsID0gdGhpcy5feGRQcm94eVVybDtcbiAgICBjb25zdCB7IHVybCwgYm9keSwgLi4ucnJlcSB9ID0gcmVxO1xuICAgIGNvbnN0IGNhbm9uaWNhbFVybCA9IHVybC5pbmRleE9mKCcvJykgPT09IDAgPyBiYXNlVXJsICsgdXJsIDogdXJsO1xuICAgIGNvbnN0IHhkUHJveHlSZXEgPSBjcmVhdGVYZFByb3h5UmVxdWVzdChcbiAgICAgIHsgLi4ucnJlcSwgdXJsOiBjYW5vbmljYWxVcmwsIGJvZHkgfSxcbiAgICAgIHhkUHJveHlVcmwsXG4gICAgKTtcbiAgICByZXR1cm4gc3VwZXIuaHR0cFJlcXVlc3QoeGRQcm94eVJlcSwge1xuICAgICAgZm9sbG93UmVkaXJlY3Q6IChyZWRpcmVjdFVybCkgPT5cbiAgICAgICAgY3JlYXRlWGRQcm94eVJlcXVlc3QoXG4gICAgICAgICAgeyAuLi5ycmVxLCBtZXRob2Q6ICdHRVQnLCB1cmw6IHJlZGlyZWN0VXJsIH0sXG4gICAgICAgICAgeGRQcm94eVVybCxcbiAgICAgICAgKSxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIGZvciBIVFRQIHJlcXVlc3QgdHJhbnNwb3J0IHVzaW5nIGEgcHJveHkgc2VydmVyXG4gKi9cbmV4cG9ydCBjbGFzcyBIdHRwUHJveHlUcmFuc3BvcnQgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICBfaHR0cFByb3h5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoaHR0cFByb3h5OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2h0dHBQcm94eSA9IGh0dHBQcm94eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIEhUVFAgcmVxdWVzdCB2aWEgcHJveHkgc2VydmVyXG4gICAqL1xuICBodHRwUmVxdWVzdChyZXE6IEh0dHBSZXF1ZXN0LCBvcHRpb25zXzogSHR0cFJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBvcHRpb25zID0geyAuLi5vcHRpb25zXywgaHR0cFByb3h5OiB0aGlzLl9odHRwUHJveHkgfTtcbiAgICByZXR1cm4gc3VwZXIuaHR0cFJlcXVlc3QocmVxLCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc3BvcnQ7XG4iXX0=