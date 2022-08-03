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

var _process$env$HTTP_PRO;

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
  httpProxy: (_process$env$HTTP_PRO = process.env.HTTP_PROXY) !== null && _process$env$HTTP_PRO !== void 0 ? _process$env$HTTP_PRO : undefined,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc3BvcnQudHMiXSwibmFtZXMiOlsibm9ybWFsaXplQXBpSG9zdCIsImFwaUhvc3QiLCJtIiwiZXhlYyIsImh0dHBQcm94eSIsInByb2Nlc3MiLCJlbnYiLCJIVFRQX1BST1hZIiwidW5kZWZpbmVkIiwidGltZW91dCIsIkhUVFBfVElNRU9VVCIsImJhc2VVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJMT0NBVElPTl9CQVNFX1VSTCIsIlRyYW5zcG9ydCIsImh0dHBSZXF1ZXN0IiwicmVxIiwib3B0aW9ucyIsIlN0cmVhbVByb21pc2UiLCJjcmVhdGUiLCJjcmVhdGVTdHJlYW0iLCJnZXRSZXF1ZXN0U3RyZWFtQ3JlYXRvciIsInN0cmVhbSIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib24iLCJyZXMiLCJyZXF1ZXN0IiwiSnNvbnBUcmFuc3BvcnQiLCJjb25zdHJ1Y3RvciIsImpzb25wUGFyYW0iLCJfanNvbnBQYXJhbSIsImpzb25wUmVxdWVzdCIsImpzb25wIiwiY3JlYXRlUmVxdWVzdCIsInBhcmFtcyIsInN1cHBvcnRlZCIsIkNhbnZhc1RyYW5zcG9ydCIsInNpZ25lZFJlcXVlc3QiLCJfc2lnbmVkUmVxdWVzdCIsImNhbnZhc1JlcXVlc3QiLCJjYW52YXMiLCJjcmVhdGVYZFByb3h5UmVxdWVzdCIsInByb3h5VXJsIiwiaGVhZGVycyIsInVybCIsIm5hbWUiLCJub2NhY2hlIiwiU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInN1YnN0cmluZyIsIm1ldGhvZCIsImJvZHkiLCJYZFByb3h5VHJhbnNwb3J0IiwieGRQcm94eVVybCIsIl94ZFByb3h5VXJsIiwiX29wdGlvbnMiLCJycmVxIiwiY2Fub25pY2FsVXJsIiwieGRQcm94eVJlcSIsImZvbGxvd1JlZGlyZWN0IiwicmVkaXJlY3RVcmwiLCJIdHRwUHJveHlUcmFuc3BvcnQiLCJfaHR0cFByb3h5Iiwib3B0aW9uc18iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBMkM7QUFDekMsUUFBTUMsQ0FBQyxHQUFHLDBDQUEwQ0MsSUFBMUMsQ0FBK0NGLE9BQS9DLENBQVY7O0FBQ0EsTUFBSUMsQ0FBSixFQUFPO0FBQ0wsV0FBUSxHQUFFQSxDQUFDLENBQUMsQ0FBRCxDQUFJLGlCQUFmO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNEOztBQUVELDBCQUFZO0FBQ1ZHLEVBQUFBLFNBQVMsMkJBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFkLHlFQUE0QkMsU0FEM0I7QUFFVkMsRUFBQUEsT0FBTyxFQUFFSixPQUFPLENBQUNDLEdBQVIsQ0FBWUksWUFBWixHQUNMLHdCQUFTTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUksWUFBckIsRUFBbUMsRUFBbkMsQ0FESyxHQUVMRjtBQUpNLENBQVo7QUFPQSxNQUFNRyxPQUFPLEdBQ1gsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsTUFBTSxDQUFDQyxRQUF4QyxJQUFvREQsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFwRSxHQUNLLFdBQVVkLGdCQUFnQixDQUFDWSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWpCLENBQXVCLEVBRHRELEdBRUlULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxpQkFBWixJQUFpQyxFQUh2QztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxTQUFOLENBQWdCO0FBQ3JCO0FBQ0Y7QUFDRUMsRUFBQUEsV0FBVyxDQUNUQyxHQURTLEVBRVRDLE9BQTJCLEdBQUcsRUFGckIsRUFHb0I7QUFDN0IsV0FBT0Msd0JBQWNDLE1BQWQsQ0FBcUIsTUFBTTtBQUNoQyxZQUFNQyxZQUFZLEdBQUcsS0FBS0MsdUJBQUwsRUFBckI7QUFDQSxZQUFNQyxNQUFNLEdBQUdGLFlBQVksQ0FBQ0osR0FBRCxFQUFNQyxPQUFOLENBQTNCO0FBQ0EsWUFBTU0sT0FBTyxHQUFHLHFCQUEwQixDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDN0RILFFBQUFBLE1BQU0sQ0FDSEksRUFESCxDQUNNLFVBRE4sRUFDbUJDLEdBQUQsSUFBdUJILE9BQU8sQ0FBQ0csR0FBRCxDQURoRCxFQUVHRCxFQUZILENBRU0sT0FGTixFQUVlRCxNQUZmO0FBR0QsT0FKZSxDQUFoQjtBQUtBLGFBQU87QUFBRUgsUUFBQUEsTUFBRjtBQUFVQyxRQUFBQTtBQUFWLE9BQVA7QUFDRCxLQVRNLENBQVA7QUFVRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VGLEVBQUFBLHVCQUF1QixHQUdYO0FBQ1YsV0FBT08sZ0JBQVA7QUFDRDs7QUEzQm9CO0FBOEJ2QjtBQUNBO0FBQ0E7Ozs7O0FBQ08sTUFBTUMsY0FBTixTQUE2QmYsU0FBN0IsQ0FBdUM7QUFJNUNnQixFQUFBQSxXQUFXLENBQUNDLFVBQUQsRUFBcUI7QUFDOUI7QUFEOEI7QUFFOUIsU0FBS0MsV0FBTCxHQUFtQkQsVUFBbkI7QUFDRDs7QUFFRFYsRUFBQUEsdUJBQXVCLEdBR1g7QUFDVixVQUFNWSxZQUFZLEdBQUdDLGVBQU1DLGFBQU4sQ0FBb0IsS0FBS0gsV0FBekIsQ0FBckI7O0FBQ0EsV0FBUUksTUFBRCxJQUFZSCxZQUFZLENBQUNHLE1BQUQsQ0FBL0I7QUFDRDs7QUFmMkM7QUFrQjlDO0FBQ0E7QUFDQTs7Ozs4QkFwQmFQLGMsY0FDZ0JLLGVBQU1HLFM7O0FBb0I1QixNQUFNQyxlQUFOLFNBQThCeEIsU0FBOUIsQ0FBd0M7QUFJN0NnQixFQUFBQSxXQUFXLENBQUNTLGFBQUQsRUFBcUI7QUFDOUI7QUFEOEI7QUFFOUIsU0FBS0MsY0FBTCxHQUFzQkQsYUFBdEI7QUFDRDs7QUFFRGxCLEVBQUFBLHVCQUF1QixHQUdYO0FBQ1YsVUFBTW9CLGFBQWEsR0FBR0MsZ0JBQU9QLGFBQVAsQ0FBcUIsS0FBS0ssY0FBMUIsQ0FBdEI7O0FBQ0EsV0FBUUosTUFBRCxJQUFZSyxhQUFhLENBQUNMLE1BQUQsQ0FBaEM7QUFDRDs7QUFmNEM7QUFrQi9DOzs7OzhCQWxCYUUsZSxlQUNpQkksZ0JBQU9MLFM7O0FBa0JyQyxTQUFTTSxvQkFBVCxDQUE4QjNCLEdBQTlCLEVBQWdENEIsUUFBaEQsRUFBK0U7QUFDN0UsUUFBTUMsT0FBbUMsR0FBRztBQUMxQyxnQ0FBNEI3QixHQUFHLENBQUM4QjtBQURVLEdBQTVDOztBQUdBLE1BQUk5QixHQUFHLENBQUM2QixPQUFSLEVBQWlCO0FBQ2YsU0FBSyxNQUFNRSxJQUFYLElBQW1CLG1CQUFZL0IsR0FBRyxDQUFDNkIsT0FBaEIsQ0FBbkIsRUFBNkM7QUFDM0NBLE1BQUFBLE9BQU8sQ0FBQ0UsSUFBRCxDQUFQLEdBQWdCL0IsR0FBRyxDQUFDNkIsT0FBSixDQUFZRSxJQUFaLENBQWhCO0FBQ0Q7QUFDRjs7QUFDRCxRQUFNQyxPQUFPLEdBQUksR0FBRSxtQkFBVyxJQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxFQUFELENBQU4sQ0FBc0JDLFNBQXRCLENBQWdDLENBQWhDLENBQW1DLEVBQXBFO0FBQ0E7QUFDRUMsSUFBQUEsTUFBTSxFQUFFckMsR0FBRyxDQUFDcUMsTUFEZDtBQUVFUCxJQUFBQSxHQUFHLEVBQUcsR0FBRUYsUUFBUyxJQUFHSSxPQUFRLEVBRjlCO0FBR0VILElBQUFBO0FBSEYsS0FJTTdCLEdBQUcsQ0FBQ3NDLElBQUosSUFBWSxJQUFaLEdBQW1CO0FBQUVBLElBQUFBLElBQUksRUFBRXRDLEdBQUcsQ0FBQ3NDO0FBQVosR0FBbkIsR0FBd0MsRUFKOUM7QUFNRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTUMsZ0JBQU4sU0FBK0J6QyxTQUEvQixDQUF5QztBQUc5Q2dCLEVBQUFBLFdBQVcsQ0FBQzBCLFVBQUQsRUFBcUI7QUFDOUI7QUFEOEI7QUFFOUIsU0FBS0MsV0FBTCxHQUFtQkQsVUFBbkI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0V6QyxFQUFBQSxXQUFXLENBQUNDLEdBQUQsRUFBbUIwQyxRQUE0QixHQUFHLEVBQWxELEVBQXNEO0FBQy9ELFVBQU1GLFVBQVUsR0FBRyxLQUFLQyxXQUF4QjtBQUNBLFVBQU07QUFBRVgsTUFBQUEsR0FBRjtBQUFPUSxNQUFBQTtBQUFQLFFBQXlCdEMsR0FBL0I7QUFBQSxVQUFzQjJDLElBQXRCLDBDQUErQjNDLEdBQS9CO0FBQ0EsVUFBTTRDLFlBQVksR0FBRyxzQkFBQWQsR0FBRyxNQUFILENBQUFBLEdBQUcsRUFBUyxHQUFULENBQUgsS0FBcUIsQ0FBckIsR0FBeUJyQyxPQUFPLEdBQUdxQyxHQUFuQyxHQUF5Q0EsR0FBOUQ7QUFDQSxVQUFNZSxVQUFVLEdBQUdsQixvQkFBb0IsaUNBQ2hDZ0IsSUFEZ0M7QUFDMUJiLE1BQUFBLEdBQUcsRUFBRWMsWUFEcUI7QUFDUE4sTUFBQUE7QUFETyxRQUVyQ0UsVUFGcUMsQ0FBdkM7QUFJQSxXQUFPLE1BQU16QyxXQUFOLENBQWtCOEMsVUFBbEIsRUFBOEI7QUFDbkNDLE1BQUFBLGNBQWMsRUFBR0MsV0FBRCxJQUNkcEIsb0JBQW9CLGlDQUNiZ0IsSUFEYTtBQUNQTixRQUFBQSxNQUFNLEVBQUUsS0FERDtBQUNRUCxRQUFBQSxHQUFHLEVBQUVpQjtBQURiLFVBRWxCUCxVQUZrQjtBQUZhLEtBQTlCLENBQVA7QUFPRDs7QUExQjZDO0FBNkJoRDtBQUNBO0FBQ0E7Ozs7O0FBQ08sTUFBTVEsa0JBQU4sU0FBaUNsRCxTQUFqQyxDQUEyQztBQUdoRGdCLEVBQUFBLFdBQVcsQ0FBQzVCLFNBQUQsRUFBb0I7QUFDN0I7QUFENkI7QUFFN0IsU0FBSytELFVBQUwsR0FBa0IvRCxTQUFsQjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRWEsRUFBQUEsV0FBVyxDQUFDQyxHQUFELEVBQW1Ca0QsUUFBNEIsR0FBRyxFQUFsRCxFQUFzRDtBQUMvRCxVQUFNakQsT0FBTyxtQ0FBUWlELFFBQVI7QUFBa0JoRSxNQUFBQSxTQUFTLEVBQUUsS0FBSytEO0FBQWxDLE1BQWI7O0FBQ0EsV0FBTyxNQUFNbEQsV0FBTixDQUFrQkMsR0FBbEIsRUFBdUJDLE9BQXZCLENBQVA7QUFDRDs7QUFkK0M7OztlQWlCbkNILFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKi9cbmltcG9ydCB7IER1cGxleCB9IGZyb20gJ3N0cmVhbSc7XG5pbXBvcnQgcmVxdWVzdCwgeyBzZXREZWZhdWx0cyB9IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cFJlcXVlc3RPcHRpb25zLCBIdHRwUmVzcG9uc2UgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFN0cmVhbVByb21pc2UgfSBmcm9tICcuL3V0aWwvcHJvbWlzZSc7XG5pbXBvcnQganNvbnAgZnJvbSAnLi9icm93c2VyL2pzb25wJztcbmltcG9ydCBjYW52YXMgZnJvbSAnLi9icm93c2VyL2NhbnZhcyc7XG5cbi8qKlxuICogTm9ybWFyaXplIFNhbGVzZm9yY2UgQVBJIGhvc3QgbmFtZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQXBpSG9zdChhcGlIb3N0OiBzdHJpbmcpIHtcbiAgY29uc3QgbSA9IC8oXFx3KylcXC4odmlzdWFsXFwuZm9yY2V8c2FsZXNmb3JjZSlcXC5jb20kLy5leGVjKGFwaUhvc3QpO1xuICBpZiAobSkge1xuICAgIHJldHVybiBgJHttWzFdfS5zYWxlc2ZvcmNlLmNvbWA7XG4gIH1cbiAgcmV0dXJuIGFwaUhvc3Q7XG59XG5cbnNldERlZmF1bHRzKHtcbiAgaHR0cFByb3h5OiBwcm9jZXNzLmVudi5IVFRQX1BST1hZID8/IHVuZGVmaW5lZCxcbiAgdGltZW91dDogcHJvY2Vzcy5lbnYuSFRUUF9USU1FT1VUXG4gICAgPyBwYXJzZUludChwcm9jZXNzLmVudi5IVFRQX1RJTUVPVVQsIDEwKVxuICAgIDogdW5kZWZpbmVkLFxufSk7XG5cbmNvbnN0IGJhc2VVcmwgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhvc3RcbiAgICA/IGBodHRwczovLyR7bm9ybWFsaXplQXBpSG9zdCh3aW5kb3cubG9jYXRpb24uaG9zdCl9YFxuICAgIDogcHJvY2Vzcy5lbnYuTE9DQVRJT05fQkFTRV9VUkwgfHwgJyc7XG5cbi8qKlxuICogQ2xhc3MgZm9yIEhUVFAgcmVxdWVzdCB0cmFuc3BvcnRcbiAqXG4gKiBAY2xhc3NcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYW5zcG9ydCB7XG4gIC8qKlxuICAgKi9cbiAgaHR0cFJlcXVlc3QoXG4gICAgcmVxOiBIdHRwUmVxdWVzdCxcbiAgICBvcHRpb25zOiBIdHRwUmVxdWVzdE9wdGlvbnMgPSB7fSxcbiAgKTogU3RyZWFtUHJvbWlzZTxIdHRwUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gU3RyZWFtUHJvbWlzZS5jcmVhdGUoKCkgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlU3RyZWFtID0gdGhpcy5nZXRSZXF1ZXN0U3RyZWFtQ3JlYXRvcigpO1xuICAgICAgY29uc3Qgc3RyZWFtID0gY3JlYXRlU3RyZWFtKHJlcSwgb3B0aW9ucyk7XG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8SHR0cFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHN0cmVhbVxuICAgICAgICAgIC5vbignY29tcGxldGUnLCAocmVzOiBIdHRwUmVzcG9uc2UpID0+IHJlc29sdmUocmVzKSlcbiAgICAgICAgICAub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgc3RyZWFtLCBwcm9taXNlIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZ2V0UmVxdWVzdFN0cmVhbUNyZWF0b3IoKTogKFxuICAgIHJlcTogSHR0cFJlcXVlc3QsXG4gICAgb3B0aW9uczogSHR0cFJlcXVlc3RPcHRpb25zLFxuICApID0+IER1cGxleCB7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyBmb3IgSlNPTlAgcmVxdWVzdCB0cmFuc3BvcnRcbiAqL1xuZXhwb3J0IGNsYXNzIEpzb25wVHJhbnNwb3J0IGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgc3RhdGljIHN1cHBydGVkOiBib29sZWFuID0ganNvbnAuc3VwcG9ydGVkO1xuICBfanNvbnBQYXJhbTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGpzb25wUGFyYW06IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fanNvbnBQYXJhbSA9IGpzb25wUGFyYW07XG4gIH1cblxuICBnZXRSZXF1ZXN0U3RyZWFtQ3JlYXRvcigpOiAoXG4gICAgcmVxOiBIdHRwUmVxdWVzdCxcbiAgICBvcHRpb25zOiBIdHRwUmVxdWVzdE9wdGlvbnMsXG4gICkgPT4gRHVwbGV4IHtcbiAgICBjb25zdCBqc29ucFJlcXVlc3QgPSBqc29ucC5jcmVhdGVSZXF1ZXN0KHRoaXMuX2pzb25wUGFyYW0pO1xuICAgIHJldHVybiAocGFyYW1zKSA9PiBqc29ucFJlcXVlc3QocGFyYW1zKTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIGZvciBTZmRjIENhbnZhcyByZXF1ZXN0IHRyYW5zcG9ydFxuICovXG5leHBvcnQgY2xhc3MgQ2FudmFzVHJhbnNwb3J0IGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgc3RhdGljIHN1cHBvcnRlZDogYm9vbGVhbiA9IGNhbnZhcy5zdXBwb3J0ZWQ7XG4gIF9zaWduZWRSZXF1ZXN0OiBhbnk7XG5cbiAgY29uc3RydWN0b3Ioc2lnbmVkUmVxdWVzdDogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zaWduZWRSZXF1ZXN0ID0gc2lnbmVkUmVxdWVzdDtcbiAgfVxuXG4gIGdldFJlcXVlc3RTdHJlYW1DcmVhdG9yKCk6IChcbiAgICByZXE6IEh0dHBSZXF1ZXN0LFxuICAgIG9wdGlvbnM6IEh0dHBSZXF1ZXN0T3B0aW9ucyxcbiAgKSA9PiBEdXBsZXgge1xuICAgIGNvbnN0IGNhbnZhc1JlcXVlc3QgPSBjYW52YXMuY3JlYXRlUmVxdWVzdCh0aGlzLl9zaWduZWRSZXF1ZXN0KTtcbiAgICByZXR1cm4gKHBhcmFtcykgPT4gY2FudmFzUmVxdWVzdChwYXJhbXMpO1xuICB9XG59XG5cbi8qIEBwcml2YXRlICovXG5mdW5jdGlvbiBjcmVhdGVYZFByb3h5UmVxdWVzdChyZXE6IEh0dHBSZXF1ZXN0LCBwcm94eVVybDogc3RyaW5nKTogSHR0cFJlcXVlc3Qge1xuICBjb25zdCBoZWFkZXJzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICAnc2FsZXNmb3JjZXByb3h5LWVuZHBvaW50JzogcmVxLnVybCxcbiAgfTtcbiAgaWYgKHJlcS5oZWFkZXJzKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKHJlcS5oZWFkZXJzKSkge1xuICAgICAgaGVhZGVyc1tuYW1lXSA9IHJlcS5oZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfVxuICBjb25zdCBub2NhY2hlID0gYCR7RGF0ZS5ub3coKX0uJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc3Vic3RyaW5nKDIpfWA7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiByZXEubWV0aG9kLFxuICAgIHVybDogYCR7cHJveHlVcmx9PyR7bm9jYWNoZX1gLFxuICAgIGhlYWRlcnMsXG4gICAgLi4uKHJlcS5ib2R5ICE9IG51bGwgPyB7IGJvZHk6IHJlcS5ib2R5IH0gOiB7fSksXG4gIH07XG59XG5cbi8qKlxuICogQ2xhc3MgZm9yIEhUVFAgcmVxdWVzdCB0cmFuc3BvcnQgdXNpbmcgY3Jvc3MtZG9tYWluIEFKQVggcHJveHkgc2VydmljZVxuICovXG5leHBvcnQgY2xhc3MgWGRQcm94eVRyYW5zcG9ydCBleHRlbmRzIFRyYW5zcG9ydCB7XG4gIF94ZFByb3h5VXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoeGRQcm94eVVybDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl94ZFByb3h5VXJsID0geGRQcm94eVVybDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIEhUVFAgcmVxdWVzdCB2aWEgQUpBWCBwcm94eVxuICAgKi9cbiAgaHR0cFJlcXVlc3QocmVxOiBIdHRwUmVxdWVzdCwgX29wdGlvbnM6IEh0dHBSZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeGRQcm94eVVybCA9IHRoaXMuX3hkUHJveHlVcmw7XG4gICAgY29uc3QgeyB1cmwsIGJvZHksIC4uLnJyZXEgfSA9IHJlcTtcbiAgICBjb25zdCBjYW5vbmljYWxVcmwgPSB1cmwuaW5kZXhPZignLycpID09PSAwID8gYmFzZVVybCArIHVybCA6IHVybDtcbiAgICBjb25zdCB4ZFByb3h5UmVxID0gY3JlYXRlWGRQcm94eVJlcXVlc3QoXG4gICAgICB7IC4uLnJyZXEsIHVybDogY2Fub25pY2FsVXJsLCBib2R5IH0sXG4gICAgICB4ZFByb3h5VXJsLFxuICAgICk7XG4gICAgcmV0dXJuIHN1cGVyLmh0dHBSZXF1ZXN0KHhkUHJveHlSZXEsIHtcbiAgICAgIGZvbGxvd1JlZGlyZWN0OiAocmVkaXJlY3RVcmwpID0+XG4gICAgICAgIGNyZWF0ZVhkUHJveHlSZXF1ZXN0KFxuICAgICAgICAgIHsgLi4ucnJlcSwgbWV0aG9kOiAnR0VUJywgdXJsOiByZWRpcmVjdFVybCB9LFxuICAgICAgICAgIHhkUHJveHlVcmwsXG4gICAgICAgICksXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyBmb3IgSFRUUCByZXF1ZXN0IHRyYW5zcG9ydCB1c2luZyBhIHByb3h5IHNlcnZlclxuICovXG5leHBvcnQgY2xhc3MgSHR0cFByb3h5VHJhbnNwb3J0IGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgX2h0dHBQcm94eTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGh0dHBQcm94eTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9odHRwUHJveHkgPSBodHRwUHJveHk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBIVFRQIHJlcXVlc3QgdmlhIHByb3h5IHNlcnZlclxuICAgKi9cbiAgaHR0cFJlcXVlc3QocmVxOiBIdHRwUmVxdWVzdCwgb3B0aW9uc186IEh0dHBSZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgLi4ub3B0aW9uc18sIGh0dHBQcm94eTogdGhpcy5faHR0cFByb3h5IH07XG4gICAgcmV0dXJuIHN1cGVyLmh0dHBSZXF1ZXN0KHJlcSwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNwb3J0O1xuIl19