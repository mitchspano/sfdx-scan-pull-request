"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

require("core-js/modules/es.array.iterator");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.BrowserClient = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _reverse = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reverse"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _setInterval2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-interval"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = require("events");

var _querystring = _interopRequireDefault(require("querystring"));

var _connection = _interopRequireDefault(require("../connection"));

var _oauth = _interopRequireDefault(require("../oauth2"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @private
 */
function popupWin(url, w, h) {
  const left = screen.width / 2 - w / 2;
  const top = screen.height / 2 - h / 2;
  return window.open(url, undefined, `location=yes,toolbar=no,status=no,menubar=no,width=${w},height=${h},top=${top},left=${left}`);
}
/**
 * @private
 */


function handleCallbackResponse() {
  const res = checkCallbackResponse();
  const state = localStorage.getItem('jsforce_state');

  if (res && state && res.body.state === state) {
    localStorage.removeItem('jsforce_state');
    const [prefix, promptType] = state.split('.');
    const cli = new BrowserClient(prefix);

    if (res.success) {
      cli._storeTokens(res.body);

      location.hash = '';
    } else {
      cli._storeError(res.body);
    }

    if (promptType === 'popup') {
      window.close();
    }

    return true;
  }
}
/**
 * @private
 */


function checkCallbackResponse() {
  let params;

  if (window.location.hash) {
    params = _querystring.default.parse(window.location.hash.substring(1));

    if (params.access_token) {
      return {
        success: true,
        body: params
      };
    }
  } else if (window.location.search) {
    params = _querystring.default.parse(window.location.search.substring(1));

    if (params.error) {
      return {
        success: false,
        body: params
      };
    }
  }
}
/**
 *
 */


/**
 *
 */
const DEFAULT_POPUP_WIN_WIDTH = 912;
const DEFAULT_POPUP_WIN_HEIGHT = 513;
/** @private **/

let clientIdx = 0;
/**
 *
 */

class BrowserClient extends _events.EventEmitter {
  /**
   *
   */
  constructor(prefix) {
    super();
    (0, _defineProperty2.default)(this, "_prefix", void 0);
    (0, _defineProperty2.default)(this, "_config", void 0);
    (0, _defineProperty2.default)(this, "_connection", void 0);
    this._prefix = prefix || 'jsforce' + clientIdx++;
  }

  get connection() {
    if (!this._connection) {
      this._connection = new _connection.default(this._config);
    }

    return this._connection;
  }
  /**
   *
   */


  init(config) {
    if (handleCallbackResponse()) {
      return;
    }

    this._config = config;

    const tokens = this._getTokens();

    if (tokens) {
      this.connection._establish(tokens);

      (0, _setTimeout2.default)(() => {
        this.emit('connect', this.connection);
      }, 10);
    }
  }
  /**
   *
   */


  login(options = {}) {
    var _this$_config, _size$width, _size$height;

    const {
      scope,
      size
    } = options;
    const oauth2 = new _oauth.default((_this$_config = this._config) !== null && _this$_config !== void 0 ? _this$_config : {});
    const rand = Math.random().toString(36).substring(2);
    const state = [this._prefix, 'popup', rand].join('.');
    localStorage.setItem('jsforce_state', state);
    const authzUrl = oauth2.getAuthorizationUrl(_objectSpread({
      response_type: 'token',
      state
    }, scope ? {
      scope
    } : {}));
    const pw = popupWin(authzUrl, (_size$width = size === null || size === void 0 ? void 0 : size.width) !== null && _size$width !== void 0 ? _size$width : DEFAULT_POPUP_WIN_WIDTH, (_size$height = size === null || size === void 0 ? void 0 : size.height) !== null && _size$height !== void 0 ? _size$height : DEFAULT_POPUP_WIN_HEIGHT);
    return new _promise.default((resolve, reject) => {
      if (!pw) {
        const state = [this._prefix, 'redirect', rand].join('.');
        localStorage.setItem('jsforce_state', state);
        const authzUrl = oauth2.getAuthorizationUrl(_objectSpread({
          response_type: 'token',
          state
        }, scope ? {
          scope
        } : {}));
        location.href = authzUrl;
        return;
      }

      this._removeTokens();

      const pid = (0, _setInterval2.default)(() => {
        try {
          if (!pw || pw.closed) {
            clearInterval(pid);

            const tokens = this._getTokens();

            if (tokens) {
              this.connection._establish(tokens);

              this.emit('connect', this.connection);
              resolve({
                status: 'connect'
              });
            } else {
              const err = this._getError();

              if (err) {
                reject(new Error(err.error + ': ' + err.error_description));
              } else {
                resolve({
                  status: 'cancel'
                });
              }
            }
          }
        } catch (e) {//
        }
      }, 1000);
    });
  }
  /**
   *
   */


  isLoggedIn() {
    return !!this.connection.accessToken;
  }
  /**
   *
   */


  logout() {
    this.connection.logout();

    this._removeTokens();

    this.emit('disconnect');
  }
  /**
   * @private
   */


  _getTokens() {
    const regexp = new RegExp('(^|;\\s*)' + this._prefix + '_loggedin=true(;|$)');

    if (document.cookie.match(regexp)) {
      const issuedAt = Number(localStorage.getItem(this._prefix + '_issued_at')); // 2 hours

      if ((0, _now.default)() < issuedAt + 2 * 60 * 60 * 1000) {
        let userInfo;
        const idUrl = localStorage.getItem(this._prefix + '_id');

        if (idUrl) {
          var _context;

          const [id, organizationId] = (0, _reverse.default)(_context = idUrl.split('/')).call(_context);
          userInfo = {
            id,
            organizationId,
            url: idUrl
          };
        }

        return {
          accessToken: localStorage.getItem(this._prefix + '_access_token'),
          instanceUrl: localStorage.getItem(this._prefix + '_instance_url'),
          userInfo
        };
      }
    }

    return null;
  }
  /**
   * @private
   */


  _storeTokens(params) {
    localStorage.setItem(this._prefix + '_access_token', params.access_token);
    localStorage.setItem(this._prefix + '_instance_url', params.instance_url);
    localStorage.setItem(this._prefix + '_issued_at', params.issued_at);
    localStorage.setItem(this._prefix + '_id', params.id);
    document.cookie = this._prefix + '_loggedin=true;';
  }
  /**
   * @private
   */


  _removeTokens() {
    localStorage.removeItem(this._prefix + '_access_token');
    localStorage.removeItem(this._prefix + '_instance_url');
    localStorage.removeItem(this._prefix + '_issued_at');
    localStorage.removeItem(this._prefix + '_id');
    document.cookie = this._prefix + '_loggedin=';
  }
  /**
   * @private
   */


  _getError() {
    try {
      var _localStorage$getItem;

      const err = JSON.parse((_localStorage$getItem = localStorage.getItem(this._prefix + '_error')) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : '');
      localStorage.removeItem(this._prefix + '_error');
      return err;
    } catch (e) {//
    }
  }
  /**
   * @private
   */


  _storeError(err) {
    localStorage.setItem(this._prefix + '_error', (0, _stringify.default)(err));
  }

}
/**
 *
 */


exports.BrowserClient = BrowserClient;
const client = new BrowserClient();
var _default = client;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icm93c2VyL2NsaWVudC50cyJdLCJuYW1lcyI6WyJwb3B1cFdpbiIsInVybCIsInciLCJoIiwibGVmdCIsInNjcmVlbiIsIndpZHRoIiwidG9wIiwiaGVpZ2h0Iiwid2luZG93Iiwib3BlbiIsInVuZGVmaW5lZCIsImhhbmRsZUNhbGxiYWNrUmVzcG9uc2UiLCJyZXMiLCJjaGVja0NhbGxiYWNrUmVzcG9uc2UiLCJzdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5IiwicmVtb3ZlSXRlbSIsInByZWZpeCIsInByb21wdFR5cGUiLCJzcGxpdCIsImNsaSIsIkJyb3dzZXJDbGllbnQiLCJzdWNjZXNzIiwiX3N0b3JlVG9rZW5zIiwibG9jYXRpb24iLCJoYXNoIiwiX3N0b3JlRXJyb3IiLCJjbG9zZSIsInBhcmFtcyIsInFzIiwicGFyc2UiLCJzdWJzdHJpbmciLCJhY2Nlc3NfdG9rZW4iLCJzZWFyY2giLCJlcnJvciIsIkRFRkFVTFRfUE9QVVBfV0lOX1dJRFRIIiwiREVGQVVMVF9QT1BVUF9XSU5fSEVJR0hUIiwiY2xpZW50SWR4IiwiRXZlbnRFbWl0dGVyIiwiY29uc3RydWN0b3IiLCJfcHJlZml4IiwiY29ubmVjdGlvbiIsIl9jb25uZWN0aW9uIiwiQ29ubmVjdGlvbiIsIl9jb25maWciLCJpbml0IiwiY29uZmlnIiwidG9rZW5zIiwiX2dldFRva2VucyIsIl9lc3RhYmxpc2giLCJlbWl0IiwibG9naW4iLCJvcHRpb25zIiwic2NvcGUiLCJzaXplIiwib2F1dGgyIiwiT0F1dGgyIiwicmFuZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsImpvaW4iLCJzZXRJdGVtIiwiYXV0aHpVcmwiLCJnZXRBdXRob3JpemF0aW9uVXJsIiwicmVzcG9uc2VfdHlwZSIsInB3IiwicmVzb2x2ZSIsInJlamVjdCIsImhyZWYiLCJfcmVtb3ZlVG9rZW5zIiwicGlkIiwiY2xvc2VkIiwiY2xlYXJJbnRlcnZhbCIsInN0YXR1cyIsImVyciIsIl9nZXRFcnJvciIsIkVycm9yIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlIiwiaXNMb2dnZWRJbiIsImFjY2Vzc1Rva2VuIiwibG9nb3V0IiwicmVnZXhwIiwiUmVnRXhwIiwiZG9jdW1lbnQiLCJjb29raWUiLCJtYXRjaCIsImlzc3VlZEF0IiwiTnVtYmVyIiwidXNlckluZm8iLCJpZFVybCIsImlkIiwib3JnYW5pemF0aW9uSWQiLCJpbnN0YW5jZVVybCIsImluc3RhbmNlX3VybCIsImlzc3VlZF9hdCIsIkpTT04iLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUErQkMsQ0FBL0IsRUFBMENDLENBQTFDLEVBQXFEO0FBQ25ELFFBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyxLQUFQLEdBQWUsQ0FBZixHQUFtQkosQ0FBQyxHQUFHLENBQXBDO0FBQ0EsUUFBTUssR0FBRyxHQUFHRixNQUFNLENBQUNHLE1BQVAsR0FBZ0IsQ0FBaEIsR0FBb0JMLENBQUMsR0FBRyxDQUFwQztBQUNBLFNBQU9NLE1BQU0sQ0FBQ0MsSUFBUCxDQUNMVCxHQURLLEVBRUxVLFNBRkssRUFHSixzREFBcURULENBQUUsV0FBVUMsQ0FBRSxRQUFPSSxHQUFJLFNBQVFILElBQUssRUFIdkYsQ0FBUDtBQUtEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTUSxzQkFBVCxHQUFrQztBQUNoQyxRQUFNQyxHQUFHLEdBQUdDLHFCQUFxQixFQUFqQztBQUNBLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGVBQXJCLENBQWQ7O0FBQ0EsTUFBSUosR0FBRyxJQUFJRSxLQUFQLElBQWdCRixHQUFHLENBQUNLLElBQUosQ0FBU0gsS0FBVCxLQUFtQkEsS0FBdkMsRUFBOEM7QUFDNUNDLElBQUFBLFlBQVksQ0FB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LElBQUFBLFlBQVksQ0FBQ0csVUFBYixDQUF3QixLQUFLd0IsT0FBTCxHQUFlLFlBQXZDO0FBQ0EzQixJQUFBQSxZQUFZLENBQUNHLFVBQWIsQ0FBd0IsS0FBS3dCLE9BQUwsR0FBZSxLQUF2QztBQUNBNkMsSUFBQUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLEtBQUs5QyxPQUFMLEdBQWUsWUFBakM7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VvQyxFQUFBQSxTQUFTLEdBQUc7QUFDVixRQUFJO0FBQUE7O0FBQ0YsWUFBTUQsR0FBRyxHQUFHc0IsSUFBSSxDQUFDbkUsS0FBTCwwQkFDVmpCLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFLMEIsT0FBTCxHQUFlLFFBQXBDLENBRFUseUVBQ3VDLEVBRHZDLENBQVo7QUFHQTNCLE1BQUFBLFlBQVksQ0FBQ0csVUFBYixDQUF3QixLQUFLd0IsT0FBTCxHQUFlLFFBQXZDO0FBQ0EsYUFBT21DLEdBQVA7QUFDRCxLQU5ELENBTUUsT0FBT0ksQ0FBUCxFQUFVLENBQ1Y7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRXJELEVBQUFBLFdBQVcsQ0FBQ2lELEdBQUQsRUFBVztBQUNwQjlELElBQUFBLFlBQVksQ0FBQ2lELE9BQWIsQ0FBcUIsS0FBS3RCLE9BQUwsR0FBZSxRQUFwQyxFQUE4Qyx3QkFBZW1DLEdBQWYsQ0FBOUM7QUFDRDs7QUFyTDZDO0FBd0xoRDtBQUNBO0FBQ0E7Ozs7QUFDQSxNQUFNdUIsTUFBTSxHQUFHLElBQUk3RSxhQUFKLEVBQWY7ZUFFZTZFLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIEJyb3dzZXIgY2xpZW50IGNvbm5lY3Rpb24gbWFuYWdlbWVudCBjbGFzc1xuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XG4gKi9cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgcXMgZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IENvbm5lY3Rpb24sIHsgQ29ubmVjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IE9BdXRoMiwgeyBUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vb2F1dGgyJztcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwb3B1cFdpbih1cmw6IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgY29uc3QgbGVmdCA9IHNjcmVlbi53aWR0aCAvIDIgLSB3IC8gMjtcbiAgY29uc3QgdG9wID0gc2NyZWVuLmhlaWdodCAvIDIgLSBoIC8gMjtcbiAgcmV0dXJuIHdpbmRvdy5vcGVuKFxuICAgIHVybCxcbiAgICB1bmRlZmluZWQsXG4gICAgYGxvY2F0aW9uPXllcyx0b29sYmFyPW5vLHN0YXR1cz1ubyxtZW51YmFyPW5vLHdpZHRoPSR7d30saGVpZ2h0PSR7aH0sdG9wPSR7dG9wfSxsZWZ0PSR7bGVmdH1gLFxuICApO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUNhbGxiYWNrUmVzcG9uc2UoKSB7XG4gIGNvbnN0IHJlcyA9IGNoZWNrQ2FsbGJhY2tSZXNwb25zZSgpO1xuICBjb25zdCBzdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqc2ZvcmNlX3N0YXRlJyk7XG4gIGlmIChyZXMgJiYgc3RhdGUgJiYgcmVzLmJvZHkuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2pzZm9yY2Vfc3RhdGUnKTtcbiAgICBjb25zdCBbcHJlZml4LCBwcm9tcHRUeXBlXSA9IHN0YXRlLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgY2xpID0gbmV3IEJyb3dzZXJDbGllbnQocHJlZml4KTtcbiAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgIGNsaS5fc3RvcmVUb2tlbnMocmVzLmJvZHkgYXMgVG9rZW5SZXNwb25zZSk7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaS5fc3RvcmVFcnJvcihyZXMuYm9keSk7XG4gICAgfVxuICAgIGlmIChwcm9tcHRUeXBlID09PSAncG9wdXAnKSB7XG4gICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja0NhbGxiYWNrUmVzcG9uc2UoKSB7XG4gIGxldCBwYXJhbXM7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgIHBhcmFtcyA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSk7XG4gICAgaWYgKHBhcmFtcy5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvZHk6IHBhcmFtcyB9O1xuICAgIH1cbiAgfSBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XG4gICAgcGFyYW1zID0gcXMucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgIGlmIChwYXJhbXMuZXJyb3IpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBib2R5OiBwYXJhbXMgfTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBMb2dpbk9wdGlvbnMgPSB7XG4gIHNjb3BlPzogc3RyaW5nO1xuICBzaXplPzogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9O1xufTtcblxuLyoqXG4gKlxuICovXG5jb25zdCBERUZBVUxUX1BPUFVQX1dJTl9XSURUSCA9IDkxMjtcbmNvbnN0IERFRkFVTFRfUE9QVVBfV0lOX0hFSUdIVCA9IDUxMztcblxuLyoqIEBwcml2YXRlICoqL1xubGV0IGNsaWVudElkeCA9IDA7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEJyb3dzZXJDbGllbnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBfcHJlZml4OiBzdHJpbmc7XG4gIF9jb25maWc6IENvbm5lY3Rpb25Db25maWcgfCB1bmRlZmluZWQ7XG4gIF9jb25uZWN0aW9uOiBDb25uZWN0aW9uIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJlZml4Pzogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9wcmVmaXggPSBwcmVmaXggfHwgJ2pzZm9yY2UnICsgY2xpZW50SWR4Kys7XG4gIH1cblxuICBnZXQgY29ubmVjdGlvbigpOiBDb25uZWN0aW9uIHtcbiAgICBpZiAoIXRoaXMuX2Nvbm5lY3Rpb24pIHtcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbih0aGlzLl9jb25maWcpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgaW5pdChjb25maWc6IENvbm5lY3Rpb25Db25maWcpIHtcbiAgICBpZiAoaGFuZGxlQ2FsbGJhY2tSZXNwb25zZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9nZXRUb2tlbnMoKTtcbiAgICBpZiAodG9rZW5zKSB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24uX2VzdGFibGlzaCh0b2tlbnMpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcsIHRoaXMuY29ubmVjdGlvbik7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBsb2dpbihvcHRpb25zOiBMb2dpbk9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgc2NvcGUsIHNpemUgfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qgb2F1dGgyID0gbmV3IE9BdXRoMih0aGlzLl9jb25maWcgPz8ge30pO1xuICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG4gICAgY29uc3Qgc3RhdGUgPSBbdGhpcy5fcHJlZml4LCAncG9wdXAnLCByYW5kXS5qb2luKCcuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2pzZm9yY2Vfc3RhdGUnLCBzdGF0ZSk7XG4gICAgY29uc3QgYXV0aHpVcmwgPSBvYXV0aDIuZ2V0QXV0aG9yaXphdGlvblVybCh7XG4gICAgICByZXNwb25zZV90eXBlOiAndG9rZW4nLFxuICAgICAgc3RhdGUsXG4gICAgICAuLi4oc2NvcGUgPyB7IHNjb3BlIH0gOiB7fSksXG4gICAgfSk7XG4gICAgY29uc3QgcHcgPSBwb3B1cFdpbihcbiAgICAgIGF1dGh6VXJsLFxuICAgICAgc2l6ZT8ud2lkdGggPz8gREVGQVVMVF9QT1BVUF9XSU5fV0lEVEgsXG4gICAgICBzaXplPy5oZWlnaHQgPz8gREVGQVVMVF9QT1BVUF9XSU5fSEVJR0hULFxuICAgICk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgc3RhdHVzOiBzdHJpbmcgfT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFwdykge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IFt0aGlzLl9wcmVmaXgsICdyZWRpcmVjdCcsIHJhbmRdLmpvaW4oJy4nKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2pzZm9yY2Vfc3RhdGUnLCBzdGF0ZSk7XG4gICAgICAgIGNvbnN0IGF1dGh6VXJsID0gb2F1dGgyLmdldEF1dGhvcml6YXRpb25Vcmwoe1xuICAgICAgICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbicsXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgLi4uKHNjb3BlID8geyBzY29wZSB9IDoge30pLFxuICAgICAgICB9KTtcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGF1dGh6VXJsO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW1vdmVUb2tlbnMoKTtcbiAgICAgIGNvbnN0IHBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIXB3IHx8IHB3LmNsb3NlZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwaWQpO1xuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5fZ2V0VG9rZW5zKCk7XG4gICAgICAgICAgICBpZiAodG9rZW5zKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5fZXN0YWJsaXNoKHRva2Vucyk7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcsIHRoaXMuY29ubmVjdGlvbik7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBzdGF0dXM6ICdjb25uZWN0JyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuX2dldEVycm9yKCk7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5lcnJvciArICc6ICcgKyBlcnIuZXJyb3JfZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiAnY2FuY2VsJyB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vXG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBpc0xvZ2dlZEluKCkge1xuICAgIHJldHVybiAhIXRoaXMuY29ubmVjdGlvbi5hY2Nlc3NUb2tlbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5sb2dvdXQoKTtcbiAgICB0aGlzLl9yZW1vdmVUb2tlbnMoKTtcbiAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldFRva2VucygpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKFxuICAgICAgJyhefDtcXFxccyopJyArIHRoaXMuX3ByZWZpeCArICdfbG9nZ2VkaW49dHJ1ZSg7fCQpJyxcbiAgICApO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUubWF0Y2gocmVnZXhwKSkge1xuICAgICAgY29uc3QgaXNzdWVkQXQgPSBOdW1iZXIoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX3ByZWZpeCArICdfaXNzdWVkX2F0JyksXG4gICAgICApO1xuICAgICAgLy8gMiBob3Vyc1xuICAgICAgaWYgKERhdGUubm93KCkgPCBpc3N1ZWRBdCArIDIgKiA2MCAqIDYwICogMTAwMCkge1xuICAgICAgICBsZXQgdXNlckluZm87XG4gICAgICAgIGNvbnN0IGlkVXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fcHJlZml4ICsgJ19pZCcpO1xuICAgICAgICBpZiAoaWRVcmwpIHtcbiAgICAgICAgICBjb25zdCBbaWQsIG9yZ2FuaXphdGlvbklkXSA9IGlkVXJsLnNwbGl0KCcvJykucmV2ZXJzZSgpO1xuICAgICAgICAgIHVzZXJJbmZvID0geyBpZCwgb3JnYW5pemF0aW9uSWQsIHVybDogaWRVcmwgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFjY2Vzc1Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9wcmVmaXggKyAnX2FjY2Vzc190b2tlbicpLFxuICAgICAgICAgIGluc3RhbmNlVXJsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9wcmVmaXggKyAnX2luc3RhbmNlX3VybCcpLFxuICAgICAgICAgIHVzZXJJbmZvLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3N0b3JlVG9rZW5zKHBhcmFtczogVG9rZW5SZXNwb25zZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX3ByZWZpeCArICdfYWNjZXNzX3Rva2VuJywgcGFyYW1zLmFjY2Vzc190b2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fcHJlZml4ICsgJ19pbnN0YW5jZV91cmwnLCBwYXJhbXMuaW5zdGFuY2VfdXJsKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9wcmVmaXggKyAnX2lzc3VlZF9hdCcsIHBhcmFtcy5pc3N1ZWRfYXQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX3ByZWZpeCArICdfaWQnLCBwYXJhbXMuaWQpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IHRoaXMuX3ByZWZpeCArICdfbG9nZ2VkaW49dHJ1ZTsnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVtb3ZlVG9rZW5zKCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3ByZWZpeCArICdfYWNjZXNzX3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fcHJlZml4ICsgJ19pbnN0YW5jZV91cmwnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9wcmVmaXggKyAnX2lzc3VlZF9hdCcpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3ByZWZpeCArICdfaWQnKTtcbiAgICBkb2N1bWVudC5jb29raWUgPSB0aGlzLl9wcmVmaXggKyAnX2xvZ2dlZGluPSc7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRFcnJvcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXJyID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fcHJlZml4ICsgJ19lcnJvcicpID8/ICcnLFxuICAgICAgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3ByZWZpeCArICdfZXJyb3InKTtcbiAgICAgIHJldHVybiBlcnI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy9cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zdG9yZUVycm9yKGVycjogYW55KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fcHJlZml4ICsgJ19lcnJvcicsIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgY2xpZW50ID0gbmV3IEJyb3dzZXJDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl19