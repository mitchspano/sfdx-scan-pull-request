"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.replace");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.OAuth2 = void 0;

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _crypto = require("crypto");

var _querystring = _interopRequireDefault(require("querystring"));

var _transport = _interopRequireWildcard(require("./transport"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

const defaultOAuth2Config = {
  loginUrl: 'https://login.salesforce.com'
}; // Makes a nodejs base64 encoded string compatible with rfc4648 alternative encoding for urls.
// @param base64Encoded a nodejs base64 encoded string

function base64UrlEscape(base64Encoded) {
  // builtin node js base 64 encoding is not 64 url compatible.
  // See https://toolsn.ietf.org/html/rfc4648#section-5
  return base64Encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
/**
 * type defs
 */


/**
 * OAuth2 class
 */
class OAuth2 {
  /**
   *
   */
  constructor(config) {
    (0, _defineProperty2.default)(this, "loginUrl", void 0);
    (0, _defineProperty2.default)(this, "authzServiceUrl", void 0);
    (0, _defineProperty2.default)(this, "tokenServiceUrl", void 0);
    (0, _defineProperty2.default)(this, "revokeServiceUrl", void 0);
    (0, _defineProperty2.default)(this, "clientId", void 0);
    (0, _defineProperty2.default)(this, "clientSecret", void 0);
    (0, _defineProperty2.default)(this, "redirectUri", void 0);
    (0, _defineProperty2.default)(this, "codeVerifier", void 0);
    (0, _defineProperty2.default)(this, "_transport", void 0);
    const {
      loginUrl,
      authzServiceUrl,
      tokenServiceUrl,
      revokeServiceUrl,
      clientId,
      clientSecret,
      redirectUri,
      proxyUrl,
      httpProxy,
      useVerifier
    } = config;

    if (authzServiceUrl && tokenServiceUrl) {
      var _context;

      this.loginUrl = (0, _slice.default)(_context = authzServiceUrl.split('/')).call(_context, 0, 3).join('/');
      this.authzServiceUrl = authzServiceUrl;
      this.tokenServiceUrl = tokenServiceUrl;
      this.revokeServiceUrl = revokeServiceUrl || `${this.loginUrl}/services/oauth2/revoke`;
    } else {
      this.loginUrl = loginUrl || defaultOAuth2Config.loginUrl;
      this.authzServiceUrl = `${this.loginUrl}/services/oauth2/authorize`;
      this.tokenServiceUrl = `${this.loginUrl}/services/oauth2/token`;
      this.revokeServiceUrl = `${this.loginUrl}/services/oauth2/revoke`;
    }

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;

    if (proxyUrl) {
      this._transport = new _transport.XdProxyTransport(proxyUrl);
    } else if (httpProxy) {
      this._transport = new _transport.HttpProxyTransport(httpProxy);
    } else {
      this._transport = new _transport.default();
    }

    if (useVerifier) {
      // Set a code verifier string for OAuth authorization
      this.codeVerifier = base64UrlEscape((0, _crypto.randomBytes)(Math.ceil(128)).toString('base64'));
    }
  }
  /**
   * Get Salesforce OAuth2 authorization page URL to redirect user agent.
   */


  getAuthorizationUrl(params = {}) {
    var _context2;

    if (this.codeVerifier) {
      // code verifier must be a base 64 url encoded hash of 128 bytes of random data. Our random data is also
      // base 64 url encoded. See Connection.create();
      const codeChallenge = base64UrlEscape((0, _crypto.createHash)('sha256').update(this.codeVerifier).digest('base64'));
      params.code_challenge = codeChallenge;
    }

    const _params = _objectSpread(_objectSpread({}, params), {}, {
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri
    });

    return this.authzServiceUrl + ((0, _indexOf.default)(_context2 = this.authzServiceUrl).call(_context2, '?') >= 0 ? '&' : '?') + _querystring.default.stringify(_params);
  }
  /**
   * OAuth2 Refresh Token Flow
   */


  async refreshToken(refreshToken) {
    if (!this.clientId) {
      throw new Error('No OAuth2 client id information is specified');
    }

    const params = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: this.clientId
    };

    if (this.clientSecret) {
      params.client_secret = this.clientSecret;
    }

    const ret = await this._postParams(params);
    return ret;
  }
  /**
   * OAuth2 Web Server Authentication Flow (Authorization Code)
   * Access Token Request
   */


  async requestToken(code, params = {}) {
    if (!this.clientId || !this.redirectUri) {
      throw new Error('No OAuth2 client id or redirect uri configuration is specified');
    }

    const _params = _objectSpread(_objectSpread({}, params), {}, {
      grant_type: 'authorization_code',
      code,
      client_id: this.clientId,
      redirect_uri: this.redirectUri
    });

    if (this.clientSecret) {
      _params.client_secret = this.clientSecret;
    }

    const ret = await this._postParams(_params);
    return ret;
  }
  /**
   * OAuth2 Username-Password Flow (Resource Owner Password Credentials)
   */


  async authenticate(username, password) {
    if (!this.clientId || !this.clientSecret || !this.redirectUri) {
      throw new Error('No valid OAuth2 client configuration set');
    }

    const ret = await this._postParams({
      grant_type: 'password',
      username,
      password,
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri
    });
    return ret;
  }
  /**
   * OAuth2 Revoke Session Token
   */


  async revokeToken(token) {
    const response = await this._transport.httpRequest({
      method: 'POST',
      url: this.revokeServiceUrl,
      body: _querystring.default.stringify({
        token
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });

    if (response.statusCode >= 400) {
      let res = _querystring.default.parse(response.body);

      if (!res || !res.error) {
        res = {
          error: `ERROR_HTTP_${response.statusCode}`,
          error_description: response.body
        };
      }

      throw new class extends Error {
        constructor({
          error,
          error_description
        }) {
          super(error_description);
          this.name = error;
        }

      }(res);
    }
  }
  /**
   * @private
   */


  async _postParams(params) {
    if (this.codeVerifier) params.code_verifier = this.codeVerifier;
    const response = await this._transport.httpRequest({
      method: 'POST',
      url: this.tokenServiceUrl,
      body: _querystring.default.stringify(params),
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });
    let res;

    try {
      res = JSON.parse(response.body);
    } catch (e) {
      /* eslint-disable no-empty */
    }

    if (response.statusCode >= 400) {
      res = res || {
        error: `ERROR_HTTP_${response.statusCode}`,
        error_description: response.body
      };
      throw new class extends Error {
        constructor({
          error,
          error_description
        }) {
          super(error_description);
          this.name = error;
        }

      }(res);
    }

    return res;
  }

}

exports.OAuth2 = OAuth2;
var _default = OAuth2;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vYXV0aDIudHMiXSwibmFtZXMiOlsiZGVmYXVsdE9BdXRoMkNvbmZpZyIsImxvZ2luVXJsIiwiYmFzZTY0VXJsRXNjYXBlIiwiYmFzZTY0RW5jb2RlZCIsInJlcGxhY2UiLCJPQXV0aDIiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsImF1dGh6U2VydmljZVVybCIsInRva2VuU2VydmljZVVybCIsInJldm9rZVNlcnZpY2VVcmwiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsInJlZGlyZWN0VXJpIiwicHJveHlVcmwiLCJodHRwUHJveHkiLCJ1c2VWZXJpZmllciIsInNwbGl0Iiwiam9pbiIsIl90cmFuc3BvcnQiLCJYZFByb3h5VHJhbnNwb3J0IiwiSHR0cFByb3h5VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwiY29kZVZlcmlmaWVyIiwiTWF0aCIsImNlaWwiLCJ0b1N0cmluZyIsImdldEF1dGhvcml6YXRpb25VcmwiLCJwYXJhbXMiLCJjb2RlQ2hhbGxlbmdlIiwidXBkYXRlIiwiZGlnZXN0IiwiY29kZV9jaGFsbGVuZ2UiLCJfcGFyYW1zIiwicmVzcG9uc2VfdHlwZSIsImNsaWVudF9pZCIsInJlZGlyZWN0X3VyaSIsInF1ZXJ5c3RyaW5nIiwic3RyaW5naWZ5IiwicmVmcmVzaFRva2VuIiwiRXJyb3IiLCJncmFudF90eXBlIiwicmVmcmVzaF90b2tlbiIsImNsaWVudF9zZWNyZXQiLCJyZXQiLCJfcG9zdFBhcmFtcyIsInJlcXVlc3RUb2tlbiIsImNvZGUiLCJhdXRoZW50aWNhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmV2b2tlVG9rZW4iLCJ0b2tlbiIsInJlc3BvbnNlIiwiaHR0cFJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJib2R5IiwiaGVhZGVycyIsInN0YXR1c0NvZGUiLCJyZXMiLCJwYXJzZSIsImVycm9yIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJuYW1lIiwiY29kZV92ZXJpZmllciIsIkpTT04iLCJlIl0sIm1hcHBpbmdz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QztBQUdqRGdELE1BQUFBLElBQUksRUFBRXBCLHFCQUFZQyxTQUFaLENBQXNCVixNQUF0QixDQUgyQztBQUlqRDhCLE1BQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSndDLEtBQTVCLENBQXZCO0FBUUEsUUFBSUUsR0FBSjs7QUFDQSxRQUFJO0FBQ0ZBLE1BQUFBLEdBQUcsR0FBR00sSUFBSSxDQUFDTCxLQUFMLENBQVdSLFFBQVEsQ0FBQ0ksSUFBcEIsQ0FBTjtBQUNELEtBRkQsQ0FFRSxPQUFPVSxDQUFQLEVBQVU7QUFDVjtBQUNEOztBQUNELFFBQUlkLFFBQVEsQ0FBQ00sVUFBVCxJQUF1QixHQUEzQixFQUFnQztBQUM5QkMsTUFBQUEsR0FBRyxHQUFHQSxHQUFHLElBQUk7QUFDWEUsUUFBQUEsS0FBSyxFQUFHLGNBQWFULFFBQVEsQ0FBQ00sVUFBVyxFQUQ5QjtBQUVYSSxRQUFBQSxpQkFBaUIsRUFBRVYsUUFBUSxDQUFDSTtBQUZqQixPQUFiO0FBSUEsWUFBTSxJQUFLLGNBQWNqQixLQUFkLENBQW9CO0FBQzdCbEMsUUFBQUEsV0FBVyxDQUFDO0FBQ1Z3RCxVQUFBQSxLQURVO0FBRVZDLFVBQUFBO0FBRlUsU0FBRCxFQU1SO0FBQ0QsZ0JBQU1BLGlCQUFOO0FBQ0EsZUFBS0MsSUFBTCxHQUFZRixLQUFaO0FBQ0Q7O0FBVjRCLE9BQXpCLENBV0hGLEdBWEcsQ0FBTjtBQVlEOztBQUNELFdBQU9BLEdBQVA7QUFDRDs7QUFqT2lCOzs7ZUFvT0x2RCxNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICovXG5pbXBvcnQgeyBjcmVhdGVIYXNoLCByYW5kb21CeXRlcyB9IGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IFRyYW5zcG9ydCwgeyBYZFByb3h5VHJhbnNwb3J0LCBIdHRwUHJveHlUcmFuc3BvcnQgfSBmcm9tICcuL3RyYW5zcG9ydCc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0T0F1dGgyQ29uZmlnID0ge1xuICBsb2dpblVybDogJ2h0dHBzOi8vbG9naW4uc2FsZXNmb3JjZS5jb20nLFxufTtcblxuLy8gTWFrZXMgYSBub2RlanMgYmFzZTY0IGVuY29kZWQgc3RyaW5nIGNvbXBhdGlibGUgd2l0aCByZmM0NjQ4IGFsdGVybmF0aXZlIGVuY29kaW5nIGZvciB1cmxzLlxuLy8gQHBhcmFtIGJhc2U2NEVuY29kZWQgYSBub2RlanMgYmFzZTY0IGVuY29kZWQgc3RyaW5nXG5mdW5jdGlvbiBiYXNlNjRVcmxFc2NhcGUoYmFzZTY0RW5jb2RlZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gYnVpbHRpbiBub2RlIGpzIGJhc2UgNjQgZW5jb2RpbmcgaXMgbm90IDY0IHVybCBjb21wYXRpYmxlLlxuICAvLyBTZWUgaHR0cHM6Ly90b29sc24uaWV0Zi5vcmcvaHRtbC9yZmM0NjQ4I3NlY3Rpb24tNVxuICByZXR1cm4gYmFzZTY0RW5jb2RlZFxuICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKVxuICAgIC5yZXBsYWNlKC89L2csICcnKTtcbn1cblxuLyoqXG4gKiB0eXBlIGRlZnNcbiAqL1xuZXhwb3J0IHR5cGUgT0F1dGgyQ29uZmlnID0ge1xuICBjbGllbnRJZD86IHN0cmluZztcbiAgY2xpZW50U2VjcmV0Pzogc3RyaW5nO1xuICByZWRpcmVjdFVyaT86IHN0cmluZztcbiAgbG9naW5Vcmw/OiBzdHJpbmc7XG4gIGF1dGh6U2VydmljZVVybD86IHN0cmluZztcbiAgdG9rZW5TZXJ2aWNlVXJsPzogc3RyaW5nO1xuICByZXZva2VTZXJ2aWNlVXJsPzogc3RyaW5nO1xuICBwcm94eVVybD86IHN0cmluZztcbiAgaHR0cFByb3h5Pzogc3RyaW5nO1xuICB1c2VWZXJpZmllcj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBBdXRoelJlcXVlc3RQYXJhbXMgPSB7XG4gIHNjb3BlPzogc3RyaW5nO1xuICBzdGF0ZT86IHN0cmluZztcbiAgY29kZV9jaGFsbGVuZ2U/OiBzdHJpbmc7XG59ICYge1xuICBbYXR0cjogc3RyaW5nXTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgVG9rZW5SZXNwb25zZSA9IHtcbiAgdG9rZW5fdHlwZTogJ0JlYXJlcic7XG4gIGlkOiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbjogc3RyaW5nO1xuICByZWZyZXNoX3Rva2VuPzogc3RyaW5nO1xuICBzaWduYXR1cmU6IHN0cmluZztcbiAgaXNzdWVkX2F0OiBzdHJpbmc7XG4gIGluc3RhbmNlX3VybDogc3RyaW5nO1xuICBzZmRjX2NvbW11bml0eV91cmw/OiBzdHJpbmc7XG4gIHNmZGNfY29tbXVuaXR5X2lkPzogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBPQXV0aDIgY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIE9BdXRoMiB7XG4gIGxvZ2luVXJsOiBzdHJpbmc7XG4gIGF1dGh6U2VydmljZVVybDogc3RyaW5nO1xuICB0b2tlblNlcnZpY2VVcmw6IHN0cmluZztcbiAgcmV2b2tlU2VydmljZVVybDogc3RyaW5nO1xuICBjbGllbnRJZDogT3B0aW9uYWw8c3RyaW5nPjtcbiAgY2xpZW50U2VjcmV0OiBPcHRpb25hbDxzdHJpbmc+O1xuICByZWRpcmVjdFVyaTogT3B0aW9uYWw8c3RyaW5nPjtcbiAgY29kZVZlcmlmaWVyOiBPcHRpb25hbDxzdHJpbmc+O1xuXG4gIF90cmFuc3BvcnQ6IFRyYW5zcG9ydDtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogT0F1dGgyQ29uZmlnKSB7XG4gICAgY29uc3Qge1xuICAgICAgbG9naW5VcmwsXG4gICAgICBhdXRoelNlcnZpY2VVcmwsXG4gICAgICB0b2tlblNlcnZpY2VVcmwsXG4gICAgICByZXZva2VTZXJ2aWNlVXJsLFxuICAgICAgY2xpZW50SWQsXG4gICAgICBjbGllbnRTZWNyZXQsXG4gICAgICByZWRpcmVjdFVyaSxcbiAgICAgIHByb3h5VXJsLFxuICAgICAgaHR0cFByb3h5LFxuICAgICAgdXNlVmVyaWZpZXIsXG4gICAgfSA9IGNvbmZpZztcbiAgICBpZiAoYXV0aHpTZXJ2aWNlVXJsICYmIHRva2VuU2VydmljZVVybCkge1xuICAgICAgdGhpcy5sb2dpblVybCA9IGF1dGh6U2VydmljZVVybC5zcGxpdCgnLycpLnNsaWNlKDAsIDMpLmpvaW4oJy8nKTtcbiAgICAgIHRoaXMuYXV0aHpTZXJ2aWNlVXJsID0gYXV0aHpTZXJ2aWNlVXJsO1xuICAgICAgdGhpcy50b2tlblNlcnZpY2VVcmwgPSB0b2tlblNlcnZpY2VVcmw7XG4gICAgICB0aGlzLnJldm9rZVNlcnZpY2VVcmwgPVxuICAgICAgICByZXZva2VTZXJ2aWNlVXJsIHx8IGAke3RoaXMubG9naW5Vcmx9L3NlcnZpY2VzL29hdXRoMi9yZXZva2VgO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2luVXJsID0gbG9naW5VcmwgfHwgZGVmYXVsdE9BdXRoMkNvbmZpZy5sb2dpblVybDtcbiAgICAgIHRoaXMuYXV0aHpTZXJ2aWNlVXJsID0gYCR7dGhpcy5sb2dpblVybH0vc2VydmljZXMvb2F1dGgyL2F1dGhvcml6ZWA7XG4gICAgICB0aGlzLnRva2VuU2VydmljZVVybCA9IGAke3RoaXMubG9naW5Vcmx9L3NlcnZpY2VzL29hdXRoMi90b2tlbmA7XG4gICAgICB0aGlzLnJldm9rZVNlcnZpY2VVcmwgPSBgJHt0aGlzLmxvZ2luVXJsfS9zZXJ2aWNlcy9vYXV0aDIvcmV2b2tlYDtcbiAgICB9XG4gICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgIHRoaXMuY2xpZW50U2VjcmV0ID0gY2xpZW50U2VjcmV0O1xuICAgIHRoaXMucmVkaXJlY3RVcmkgPSByZWRpcmVjdFVyaTtcbiAgICBpZiAocHJveHlVcmwpIHtcbiAgICAgIHRoaXMuX3RyYW5zcG9ydCA9IG5ldyBYZFByb3h5VHJhbnNwb3J0KHByb3h5VXJsKTtcbiAgICB9IGVsc2UgaWYgKGh0dHBQcm94eSkge1xuICAgICAgdGhpcy5fdHJhbnNwb3J0ID0gbmV3IEh0dHBQcm94eVRyYW5zcG9ydChodHRwUHJveHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90cmFuc3BvcnQgPSBuZXcgVHJhbnNwb3J0KCk7XG4gICAgfVxuICAgIGlmICh1c2VWZXJpZmllcikge1xuICAgICAgLy8gU2V0IGEgY29kZSB2ZXJpZmllciBzdHJpbmcgZm9yIE9BdXRoIGF1dGhvcml6YXRpb25cbiAgICAgIHRoaXMuY29kZVZlcmlmaWVyID0gYmFzZTY0VXJsRXNjYXBlKFxuICAgICAgICByYW5kb21CeXRlcyhNYXRoLmNlaWwoMTI4KSkudG9TdHJpbmcoJ2Jhc2U2NCcpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IFNhbGVzZm9yY2UgT0F1dGgyIGF1dGhvcml6YXRpb24gcGFnZSBVUkwgdG8gcmVkaXJlY3QgdXNlciBhZ2VudC5cbiAgICovXG4gIGdldEF1dGhvcml6YXRpb25VcmwocGFyYW1zOiBBdXRoelJlcXVlc3RQYXJhbXMgPSB7fSkge1xuICAgIGlmICh0aGlzLmNvZGVWZXJpZmllcikge1xuICAgICAgLy8gY29kZSB2ZXJpZmllciBtdXN0IGJlIGEgYmFzZSA2NCB1cmwgZW5jb2RlZCBoYXNoIG9mIDEyOCBieXRlcyBvZiByYW5kb20gZGF0YS4gT3VyIHJhbmRvbSBkYXRhIGlzIGFsc29cbiAgICAgIC8vIGJhc2UgNjQgdXJsIGVuY29kZWQuIFNlZSBDb25uZWN0aW9uLmNyZWF0ZSgpO1xuICAgICAgY29uc3QgY29kZUNoYWxsZW5nZSA9IGJhc2U2NFVybEVzY2FwZShcbiAgICAgICAgY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHRoaXMuY29kZVZlcmlmaWVyKS5kaWdlc3QoJ2Jhc2U2NCcpLFxuICAgICAgKTtcbiAgICAgIHBhcmFtcy5jb2RlX2NoYWxsZW5nZSA9IGNvZGVDaGFsbGVuZ2U7XG4gICAgfVxuXG4gICAgY29uc3QgX3BhcmFtcyA9IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICdjb2RlJyxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcbiAgICAgIHJlZGlyZWN0X3VyaTogdGhpcy5yZWRpcmVjdFVyaSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmF1dGh6U2VydmljZVVybCArXG4gICAgICAodGhpcy5hdXRoelNlcnZpY2VVcmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICtcbiAgICAgIHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShfcGFyYW1zIGFzIHsgW25hbWU6IHN0cmluZ106IGFueSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogT0F1dGgyIFJlZnJlc2ggVG9rZW4gRmxvd1xuICAgKi9cbiAgYXN5bmMgcmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxUb2tlblJlc3BvbnNlPiB7XG4gICAgaWYgKCF0aGlzLmNsaWVudElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIE9BdXRoMiBjbGllbnQgaWQgaW5mb3JtYXRpb24gaXMgc3BlY2lmaWVkJyk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgfTtcbiAgICBpZiAodGhpcy5jbGllbnRTZWNyZXQpIHtcbiAgICAgIHBhcmFtcy5jbGllbnRfc2VjcmV0ID0gdGhpcy5jbGllbnRTZWNyZXQ7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuX3Bvc3RQYXJhbXMocGFyYW1zKTtcbiAgICByZXR1cm4gcmV0IGFzIFRva2VuUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogT0F1dGgyIFdlYiBTZXJ2ZXIgQXV0aGVudGljYXRpb24gRmxvdyAoQXV0aG9yaXphdGlvbiBDb2RlKVxuICAgKiBBY2Nlc3MgVG9rZW4gUmVxdWVzdFxuICAgKi9cbiAgYXN5bmMgcmVxdWVzdFRva2VuKFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICBwYXJhbXM6IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9ID0ge30sXG4gICk6IFByb21pc2U8VG9rZW5SZXNwb25zZT4ge1xuICAgIGlmICghdGhpcy5jbGllbnRJZCB8fCAhdGhpcy5yZWRpcmVjdFVyaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTm8gT0F1dGgyIGNsaWVudCBpZCBvciByZWRpcmVjdCB1cmkgY29uZmlndXJhdGlvbiBpcyBzcGVjaWZpZWQnLFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgX3BhcmFtczogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgICAuLi5wYXJhbXMsXG4gICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgIGNvZGUsXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RVcmksXG4gICAgfTtcbiAgICBpZiAodGhpcy5jbGllbnRTZWNyZXQpIHtcbiAgICAgIF9wYXJhbXMuY2xpZW50X3NlY3JldCA9IHRoaXMuY2xpZW50U2VjcmV0O1xuICAgIH1cbiAgICBjb25zdCByZXQgPSBhd2FpdCB0aGlzLl9wb3N0UGFyYW1zKF9wYXJhbXMpO1xuICAgIHJldHVybiByZXQgYXMgVG9rZW5SZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPQXV0aDIgVXNlcm5hbWUtUGFzc3dvcmQgRmxvdyAoUmVzb3VyY2UgT3duZXIgUGFzc3dvcmQgQ3JlZGVudGlhbHMpXG4gICAqL1xuICBhc3luYyBhdXRoZW50aWNhdGUoXG4gICAgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICApOiBQcm9taXNlPFRva2VuUmVzcG9uc2U+IHtcbiAgICBpZiAoIXRoaXMuY2xpZW50SWQgfHwgIXRoaXMuY2xpZW50U2VjcmV0IHx8ICF0aGlzLnJlZGlyZWN0VXJpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkIE9BdXRoMiBjbGllbnQgY29uZmlndXJhdGlvbiBzZXQnKTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gYXdhaXQgdGhpcy5fcG9zdFBhcmFtcyh7XG4gICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50U2VjcmV0LFxuICAgICAgcmVkaXJlY3RfdXJpOiB0aGlzLnJlZGlyZWN0VXJpLFxuICAgIH0pO1xuICAgIHJldHVybiByZXQgYXMgVG9rZW5SZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPQXV0aDIgUmV2b2tlIFNlc3Npb24gVG9rZW5cbiAgICovXG4gIGFzeW5jIHJldm9rZVRva2VuKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX3RyYW5zcG9ydC5odHRwUmVxdWVzdCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogdGhpcy5yZXZva2VTZXJ2aWNlVXJsLFxuICAgICAgYm9keTogcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHsgdG9rZW4gfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gNDAwKSB7XG4gICAgICBsZXQgcmVzOiBhbnkgPSBxdWVyeXN0cmluZy5wYXJzZShyZXNwb25zZS5ib2R5KTtcbiAgICAgIGlmICghcmVzIHx8ICFyZXMuZXJyb3IpIHtcbiAgICAgICAgcmVzID0ge1xuICAgICAgICAgIGVycm9yOiBgRVJST1JfSFRUUF8ke3Jlc3BvbnNlLnN0YXR1c0NvZGV9YCxcbiAgICAgICAgICBlcnJvcl9kZXNjcmlwdGlvbjogcmVzcG9uc2UuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyAoY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBlcnJvcl9kZXNjcmlwdGlvbixcbiAgICAgICAgfToge1xuICAgICAgICAgIGVycm9yOiBzdHJpbmc7XG4gICAgICAgICAgZXJyb3JfZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgfSkge1xuICAgICAgICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICB0aGlzLm5hbWUgPSBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfSkocmVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIF9wb3N0UGFyYW1zKHBhcmFtczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLmNvZGVWZXJpZmllcikgcGFyYW1zLmNvZGVfdmVyaWZpZXIgPSB0aGlzLmNvZGVWZXJpZmllcjtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fdHJhbnNwb3J0Lmh0dHBSZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiB0aGlzLnRva2VuU2VydmljZVVybCxcbiAgICAgIGJvZHk6IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGxldCByZXM7XG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UuYm9keSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gNDAwKSB7XG4gICAgICByZXMgPSByZXMgfHwge1xuICAgICAgICBlcnJvcjogYEVSUk9SX0hUVFBfJHtyZXNwb25zZS5zdGF0dXNDb2RlfWAsXG4gICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiByZXNwb25zZS5ib2R5LFxuICAgICAgfTtcbiAgICAgIHRocm93IG5ldyAoY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBlcnJvcl9kZXNjcmlwdGlvbixcbiAgICAgICAgfToge1xuICAgICAgICAgIGVycm9yOiBzdHJpbmc7XG4gICAgICAgICAgZXJyb3JfZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgfSkge1xuICAgICAgICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICB0aGlzLm5hbWUgPSBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfSkocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPQXV0aDI7XG4iXX0=