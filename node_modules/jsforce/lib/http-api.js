"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.HttpApi = void 0;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = require("events");

var _xml2js = _interopRequireDefault(require("xml2js"));

var _logger = require("./util/logger");

var _promise = require("./util/promise");

var _csv = require("./csv");

var _stream = require("./util/stream");

/**
 *
 */

/** @private */
function parseJSON(str) {
  return JSON.parse(str);
}
/** @private */


async function parseXML(str) {
  return _xml2js.default.parseStringPromise(str, {
    explicitArray: false
  });
}
/** @private */


function parseText(str) {
  return str;
}
/**
 * HTTP based API class with authorization hook
 */


class HttpApi extends _events.EventEmitter {
  constructor(conn, options) {
    super();
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "_logger", void 0);
    (0, _defineProperty2.default)(this, "_transport", void 0);
    (0, _defineProperty2.default)(this, "_responseType", void 0);
    (0, _defineProperty2.default)(this, "_noContentResponse", void 0);
    this._conn = conn;
    this._logger = conn._logLevel ? HttpApi._logger.createInstance(conn._logLevel) : HttpApi._logger;
    this._responseType = options.responseType;
    this._transport = options.transport || conn._transport;
    this._noContentResponse = options.noContentResponse;
  }
  /**
   * Callout to API endpoint using http
   */


  request(request) {
    return _promise.StreamPromise.create(() => {
      const {
        stream,
        setStream
      } = (0, _stream.createLazyStream)();

      const promise = (async () => {
        const refreshDelegate = this.getRefreshDelegate();
        /* TODO decide remove or not this section */

        /*
        // remember previous instance url in case it changes after a refresh
        const lastInstanceUrl = conn.instanceUrl;
         // check to see if the token refresh has changed the instance url
        if(lastInstanceUrl !== conn.instanceUrl){
          // if the instance url has changed
          // then replace the current request urls instance url fragment
          // with the updated instance url
          request.url = request.url.replace(lastInstanceUrl,conn.instanceUrl);
        }
        */

        if (refreshDelegate && refreshDelegate.isRefreshing()) {
          await refreshDelegate.waitRefresh();
          const bodyPromise = this.request(request);
          setStream(bodyPromise.stream());
          const body = await bodyPromise;
          return body;
        } // hook before sending


        this.beforeSend(request);
        this.emit('request', request);

        this._logger.debug(`<request> method=${request.method}, url=${request.url}`);

        const requestTime = (0, _now.default)();

        const requestPromise = this._transport.httpRequest(request);

        setStream(requestPromise.stream());
        let response;

        try {
          response = await requestPromise;
        } catch (err) {
          this._logger.error(err);

          throw err;
        } finally {
          const responseTime = (0, _now.default)();

          this._logger.debug(`elapsed time: ${responseTime - requestTime} msec`);
        }

        if (!response) {
          return;
        }

        this._logger.debug(`<response> status=${String(response.statusCode)}, url=${request.url}`);

        this.emit('response', response); // Refresh token if session has been expired and requires authentication
        // when session refresh delegate is available

        if (this.isSessionExpired(response) && refreshDelegate) {
          await refreshDelegate.refresh(requestTime);
          return this.request(request);
        }

        if (this.isErrorResponse(response)) {
          const err = await this.getError(response);
          throw err;
        }

        const body = await this.getResponseBody(response);
        return body;
      })();

      return {
        stream,
        promise
      };
    });
  }
  /**
   * @protected
   */


  getRefreshDelegate() {
    return this._conn._refreshDelegate;
  }
  /**
   * @protected
   */


  beforeSend(request) {
    /* eslint-disable no-param-reassign */
    const headers = request.headers || {};

    if (this._conn.accessToken) {
      headers.Authorization = `Bearer ${this._conn.accessToken}`;
    }

    if (this._conn._callOptions) {
      const callOptions = [];

      for (const name of (0, _keys.default)(this._conn._callOptions)) {
        callOptions.push(`${name}=${this._conn._callOptions[name]}`);
      }

      headers['Sforce-Call-Options'] = callOptions.join(', ');
    }

    request.headers = headers;
  }
  /**
   * Detect response content mime-type
   * @protected
   */


  getResponseContentType(response) {
    return this._responseType || response.headers && response.headers['content-type'];
  }
  /**
   * @private
   */


  async parseResponseBody(response) {
    const contentType = this.getResponseContentType(response) || '';
    const parseBody = /^(text|application)\/xml(;|$)/.test(contentType) ? parseXML : /^application\/json(;|$)/.test(contentType) ? parseJSON : /^text\/csv(;|$)/.test(contentType) ? _csv.parseCSV : parseText;

    try {
      return parseBody(response.body);
    } catch (e) {
      return response.body;
    }
  }
  /**
   * Get response body
   * @protected
   */


  async getResponseBody(response) {
    if (response.statusCode === 204) {
      // No Content
      return this._noContentResponse;
    }

    const body = await this.parseResponseBody(response);
    let err;

    if (this.hasErrorInResponseBody(body)) {
      err = await this.getError(response, body);
      throw err;
    }

    if (response.statusCode === 300) {
      // Multiple Choices
      throw new HttpApiError('Multiple records found', 'MULTIPLE_CHOICES', body);
    }

    return body;
  }
  /**
   * Detect session expiry
   * @protected
   */


  isSessionExpired(response) {
    return response.statusCode === 401;
  }
  /**
   * Detect error response
   * @protected
   */


  isErrorResponse(response) {
    return response.statusCode >= 400;
  }
  /**
   * Detect error in response body
   * @protected
   */


  hasErrorInResponseBody(_body) {
    return false;
  }
  /**
   * Parsing error message in response
   * @protected
   */


  parseError(body) {
    const errors = body;
    return (0, _isArray.default)(errors) ? errors[0] : errors;
  }
  /**
   * Get error message in response
   * @protected
   */


  async getError(response, body) {
    let error;

    try {
      error = this.parseError(body || (await this.parseResponseBody(response)));
    } catch (e) {// eslint-disable no-empty
    }

    error = typeof error === 'object' && error !== null && typeof error.message === 'string' ? error : {
      errorCode: `ERROR_HTTP_${response.statusCode}`,
      message: response.body
    };
    return new HttpApiError(error.message, error.errorCode);
  }

}
/**
 *
 */


exports.HttpApi = HttpApi;
(0, _defineProperty2.default)(HttpApi, "_logger", (0, _logger.getLogger)('http-api'));

class HttpApiError extends Error {
  constructor(message, errorCode, content) {
    super(message);
    (0, _defineProperty2.default)(this, "errorCode", void 0);
    (0, _defineProperty2.default)(this, "content", void 0);
    this.name = errorCode || this.name;
    this.errorCode = this.name;
    this.content = content;
  }

}

var _default = HttpApi;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9odHRwLWFwaS50cyJdLCJuYW1lcyI6WyJwYXJzZUpTT04iLCJzdHIiLCJKU09OIiwicGFyc2UiLCJwYXJzZVhNTCIsInhtbDJqcyIsInBhcnNlU3RyaW5nUHJvbWlzZSIsImV4cGxpY2l0QXJyYXkiLCJwYXJzZVRleHQiLCJIdHRwQXBpIiwiRXZlbnRFbWl0dGVyIiwiY29uc3RydWN0b3IiLCJjb25uIiwib3B0aW9ucyIsIl9jb25uIiwiX2xvZ2dlciIsIl9sb2dMZXZlbCIsImNyZWF0ZUluc3RhbmNlIiwiX3Jlc3BvbnNlVHlwZSIsInJlc3BvbnNlVHlwZSIsIl90cmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJfbm9Db250ZW50UmVzcG9uc2UiLCJub0NvbnRlbnRSZXNwb25zZSIsInJlcXVlc3QiLCJTdHJlYW1Qcm9taXNlIiwiY3JlYXRlIiwic3RyZWFtIiwic2V0U3RyZWFtIiwicHJvbWlzZSIsInJlZnJlc2hEZWxlZ2F0ZSIsImdldFJlZnJlc2hEZWxlZ2F0ZSIsImlzUmVmcmVzaGluZyIsIndhaXRSZWZyZXNoIiwiYm9keVByb21pc2UiLCJib2R5IiwiYmVmb3JlU2VuZCIsImVtaXQiLCJkZWJ1ZyIsIm1ldGhvZCIsInVybCIsInJlcXVlc3RUaW1lIiwicmVxdWVzdFByb21pc2UiLCJodHRwUmVxdWVzdCIsInJlc3BvbnNlIiwiZXJyIiwiZXJyb3IiLCJyZXNwb25zZVRpbWUiLCJTdHJpbmciLCJzdGF0dXNDb2RlIiwiaXNTZXNzaW9uRXhwaXJlZCIsInJlZnJlc2giLCJpc0Vycm9yUmVzcG9uc2UiLCJnZXRFcnJvciIsImdldFJlc3BvbnNlQm9keSIsIl9yZWZyZXNoRGVsZWdhdGUiLCJoZWFkZXJzIiwiYWNjZXNzVG9rZW4iLCJBdXRob3JpemF0aW9uIiwiX2NhbGxPcHRpb25zIiwiY2FsbE9wdGlvbnMiLCJuYW1lIiwicHVzaCIsImpvaW4iLCJnZXRSZXNwb25zZUNvbnRlbnRUeXBlIiwicGFyc2VSZXNwb25zZUJvZHkiLCJjb250ZW50VHlwZSIsInBhcnNlQm9keSIsInRlc3QiLCJwYXJzZUNTViIsImUiLCJoYXNFcnJvckluUmVzcG9uc2VCb2R5IiwiSHR0cEFwaUVycm9yIiwiX2JvZHkiLCJwYXJzZUVycm9yIiwiZXJyb3JzIiwibWVzc2FnZSIsImVycm9yQ29kZSIsIkVycm9yIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBRUE7O0FBWEE7QUFDQTtBQUNBOztBQVdBO0FBQ0EsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBZ0M7QUFDOUIsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEdBQVgsQ0FBUDtBQUNEO0FBRUQ7OztBQUNBLGVBQWVHLFFBQWYsQ0FBd0JILEdBQXhCLEVBQXFDO0FBQ25DLFNBQU9JLGdCQUFPQyxrQkFBUCxDQUEwQkwsR0FBMUIsRUFBK0I7QUFBRU0sSUFBQUEsYUFBYSxFQUFFO0FBQWpCLEdBQS9CLENBQVA7QUFDRDtBQUVEOzs7QUFDQSxTQUFTQyxTQUFULENBQW1CUCxHQUFuQixFQUFnQztBQUM5QixTQUFPQSxHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLE1BQU1RLE9BQU4sU0FBd0NDLG9CQUF4QyxDQUFxRDtBQVMxREMsRUFBQUEsV0FBVyxDQUFDQyxJQUFELEVBQXNCQyxPQUF0QixFQUFvQztBQUM3QztBQUQ2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRTdDLFNBQUtDLEtBQUwsR0FBYUYsSUFBYjtBQUNBLFNBQUtHLE9BQUwsR0FBZUgsSUFBSSxDQUFDSSxTQUFMLEdBQ1hQLE9BQU8sQ0FBQ00sT0FBUixDQUFnQkUsY0FBaEIsQ0FBK0JMLElBQUksQ0FBQ0ksU0FBcEMsQ0FEVyxHQUVYUCxPQUFPLENBQUNNLE9BRlo7QUFHQSxTQUFLRyxhQUFMLEdBQXFCTCxPQUFPLENBQUNNLFlBQTdCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQlAsT0FBTyxDQUFDUSxTQUFSLElBQXFCVCxJQUFJLENB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QixTQUF0QyxDQUFQO0FBQ0Q7O0FBM095RDtBQThPNUQ7QUFDQTtBQUNBOzs7OzhCQWhQYXBFLE8sYUFDTSx1QkFBVSxVQUFWLEM7O0FBZ1BuQixNQUFNK0QsWUFBTixTQUEyQk0sS0FBM0IsQ0FBaUM7QUFHL0JuRSxFQUFBQSxXQUFXLENBQUNpRSxPQUFELEVBQWtCQyxTQUFsQixFQUFrREUsT0FBbEQsRUFBaUU7QUFDMUUsVUFBTUgsT0FBTjtBQUQwRTtBQUFBO0FBRTFFLFNBQUtmLElBQUwsR0FBWWdCLFNBQVMsSUFBSSxLQUFLaEIsSUFBOUI7QUFDQSxTQUFLZ0IsU0FBTCxHQUFpQixLQUFLaEIsSUFBdEI7QUFDQSxTQUFLa0IsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O0FBUjhCOztlQVdsQnRFLE8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKi9cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgeG1sMmpzIGZyb20gJ3htbDJqcyc7XG5pbXBvcnQgeyBMb2dnZXIsIGdldExvZ2dlciB9IGZyb20gJy4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IHsgU3RyZWFtUHJvbWlzZSB9IGZyb20gJy4vdXRpbC9wcm9taXNlJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XG5pbXBvcnQgVHJhbnNwb3J0IGZyb20gJy4vdHJhbnNwb3J0JztcbmltcG9ydCB7IHBhcnNlQ1NWIH0gZnJvbSAnLi9jc3YnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgT3B0aW9uYWwsIFNjaGVtYSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlTGF6eVN0cmVhbSB9IGZyb20gJy4vdXRpbC9zdHJlYW0nO1xuXG4vKiogQHByaXZhdGUgKi9cbmZ1bmN0aW9uIHBhcnNlSlNPTihzdHI6IHN0cmluZykge1xuICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xufVxuXG4vKiogQHByaXZhdGUgKi9cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlWE1MKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiB4bWwyanMucGFyc2VTdHJpbmdQcm9taXNlKHN0ciwgeyBleHBsaWNpdEFycmF5OiBmYWxzZSB9KTtcbn1cblxuLyoqIEBwcml2YXRlICovXG5mdW5jdGlvbiBwYXJzZVRleHQoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBIVFRQIGJhc2VkIEFQSSBjbGFzcyB3aXRoIGF1dGhvcml6YXRpb24gaG9va1xuICovXG5leHBvcnQgY2xhc3MgSHR0cEFwaTxTIGV4dGVuZHMgU2NoZW1hPiBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIHN0YXRpYyBfbG9nZ2VyID0gZ2V0TG9nZ2VyKCdodHRwLWFwaScpO1xuXG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xuICBfbG9nZ2VyOiBMb2dnZXI7XG4gIF90cmFuc3BvcnQ6IFRyYW5zcG9ydDtcbiAgX3Jlc3BvbnNlVHlwZTogc3RyaW5nIHwgdm9pZDtcbiAgX25vQ29udGVudFJlc3BvbnNlOiBzdHJpbmcgfCB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4sIG9wdGlvbnM6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fY29ubiA9IGNvbm47XG4gICAgdGhpcy5fbG9nZ2VyID0gY29ubi5fbG9nTGV2ZWxcbiAgICAgID8gSHR0cEFwaS5fbG9nZ2VyLmNyZWF0ZUluc3RhbmNlKGNvbm4uX2xvZ0xldmVsKVxuICAgICAgOiBIdHRwQXBpLl9sb2dnZXI7XG4gICAgdGhpcy5fcmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgdGhpcy5fdHJhbnNwb3J0ID0gb3B0aW9ucy50cmFuc3BvcnQgfHwgY29ubi5fdHJhbnNwb3J0O1xuICAgIHRoaXMuX25vQ29udGVudFJlc3BvbnNlID0gb3B0aW9ucy5ub0NvbnRlbnRSZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsb3V0IHRvIEFQSSBlbmRwb2ludCB1c2luZyBodHRwXG4gICAqL1xuICByZXF1ZXN0PFIgPSB1bmtub3duPihyZXF1ZXN0OiBIdHRwUmVxdWVzdCk6IFN0cmVhbVByb21pc2U8Uj4ge1xuICAgIHJldHVybiBTdHJlYW1Qcm9taXNlLmNyZWF0ZTxSPigoKSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmVhbSwgc2V0U3RyZWFtIH0gPSBjcmVhdGVMYXp5U3RyZWFtKCk7XG4gICAgICBjb25zdCBwcm9taXNlID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVmcmVzaERlbGVnYXRlID0gdGhpcy5nZXRSZWZyZXNoRGVsZWdhdGUoKTtcbiAgICAgICAgLyogVE9ETyBkZWNpZGUgcmVtb3ZlIG9yIG5vdCB0aGlzIHNlY3Rpb24gKi9cbiAgICAgICAgLypcbiAgICAgICAgLy8gcmVtZW1iZXIgcHJldmlvdXMgaW5zdGFuY2UgdXJsIGluIGNhc2UgaXQgY2hhbmdlcyBhZnRlciBhIHJlZnJlc2hcbiAgICAgICAgY29uc3QgbGFzdEluc3RhbmNlVXJsID0gY29ubi5pbnN0YW5jZVVybDtcblxuICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlIHRva2VuIHJlZnJlc2ggaGFzIGNoYW5nZWQgdGhlIGluc3RhbmNlIHVybFxuICAgICAgICBpZihsYXN0SW5zdGFuY2VVcmwgIT09IGNvbm4uaW5zdGFuY2VVcmwpe1xuICAgICAgICAgIC8vIGlmIHRoZSBpbnN0YW5jZSB1cmwgaGFzIGNoYW5nZWRcbiAgICAgICAgICAvLyB0aGVuIHJlcGxhY2UgdGhlIGN1cnJlbnQgcmVxdWVzdCB1cmxzIGluc3RhbmNlIHVybCBmcmFnbWVudFxuICAgICAgICAgIC8vIHdpdGggdGhlIHVwZGF0ZWQgaW5zdGFuY2UgdXJsXG4gICAgICAgICAgcmVxdWVzdC51cmwgPSByZXF1ZXN0LnVybC5yZXBsYWNlKGxhc3RJbnN0YW5jZVVybCxjb25uLmluc3RhbmNlVXJsKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBpZiAocmVmcmVzaERlbGVnYXRlICYmIHJlZnJlc2hEZWxlZ2F0ZS5pc1JlZnJlc2hpbmcoKSkge1xuICAgICAgICAgIGF3YWl0IHJlZnJlc2hEZWxlZ2F0ZS53YWl0UmVmcmVzaCgpO1xuICAgICAgICAgIGNvbnN0IGJvZHlQcm9taXNlID0gdGhpcy5yZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICAgIHNldFN0cmVhbShib2R5UHJvbWlzZS5zdHJlYW0oKSk7XG4gICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IGJvZHlQcm9taXNlO1xuICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaG9vayBiZWZvcmUgc2VuZGluZ1xuICAgICAgICB0aGlzLmJlZm9yZVNlbmQocmVxdWVzdCk7XG5cbiAgICAgICAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgcmVxdWVzdCk7XG4gICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgPHJlcXVlc3Q+IG1ldGhvZD0ke3JlcXVlc3QubWV0aG9kfSwgdXJsPSR7cmVxdWVzdC51cmx9YCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCByZXF1ZXN0UHJvbWlzZSA9IHRoaXMuX3RyYW5zcG9ydC5odHRwUmVxdWVzdChyZXF1ZXN0KTtcblxuICAgICAgICBzZXRTdHJlYW0ocmVxdWVzdFByb21pc2Uuc3RyZWFtKCkpO1xuXG4gICAgICAgIGxldCByZXNwb25zZTogSHR0cFJlc3BvbnNlIHwgdm9pZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RQcm9taXNlO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICB0aGlzLl9sb2dnZXIuZGVidWcoXG4gICAgICAgICAgICBgZWxhcHNlZCB0aW1lOiAke3Jlc3BvbnNlVGltZSAtIHJlcXVlc3RUaW1lfSBtc2VjYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgIGA8cmVzcG9uc2U+IHN0YXR1cz0ke1N0cmluZyhyZXNwb25zZS5zdGF0dXNDb2RlKX0sIHVybD0ke1xuICAgICAgICAgICAgcmVxdWVzdC51cmxcbiAgICAgICAgICB9YCxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5lbWl0KCdyZXNwb25zZScsIHJlc3BvbnNlKTtcbiAgICAgICAgLy8gUmVmcmVzaCB0b2tlbiBpZiBzZXNzaW9uIGhhcyBiZWVuIGV4cGlyZWQgYW5kIHJlcXVpcmVzIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIC8vIHdoZW4gc2Vzc2lvbiByZWZyZXNoIGRlbGVnYXRlIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAodGhpcy5pc1Nlc3Npb25FeHBpcmVkKHJlc3BvbnNlKSAmJiByZWZyZXNoRGVsZWdhdGUpIHtcbiAgICAgICAgICBhd2FpdCByZWZyZXNoRGVsZWdhdGUucmVmcmVzaChyZXF1ZXN0VGltZSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Vycm9yUmVzcG9uc2UocmVzcG9uc2UpKSB7XG4gICAgICAgICAgY29uc3QgZXJyID0gYXdhaXQgdGhpcy5nZXRFcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlQm9keShyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiBib2R5O1xuICAgICAgfSkoKTtcbiAgICAgIHJldHVybiB7IHN0cmVhbSwgcHJvbWlzZSB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGdldFJlZnJlc2hEZWxlZ2F0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5fcmVmcmVzaERlbGVnYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGJlZm9yZVNlbmQocmVxdWVzdDogSHR0cFJlcXVlc3QpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGNvbnN0IGhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnMgfHwge307XG4gICAgaWYgKHRoaXMuX2Nvbm4uYWNjZXNzVG9rZW4pIHtcbiAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0aGlzLl9jb25uLmFjY2Vzc1Rva2VufWA7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25uLl9jYWxsT3B0aW9ucykge1xuICAgICAgY29uc3QgY2FsbE9wdGlvbnMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyh0aGlzLl9jb25uLl9jYWxsT3B0aW9ucykpIHtcbiAgICAgICAgY2FsbE9wdGlvbnMucHVzaChgJHtuYW1lfT0ke3RoaXMuX2Nvbm4uX2NhbGxPcHRpb25zW25hbWVdfWApO1xuICAgICAgfVxuICAgICAgaGVhZGVyc1snU2ZvcmNlLUNhbGwtT3B0aW9ucyddID0gY2FsbE9wdGlvbnMuam9pbignLCAnKTtcbiAgICB9XG4gICAgcmVxdWVzdC5oZWFkZXJzID0gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlY3QgcmVzcG9uc2UgY29udGVudCBtaW1lLXR5cGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZ2V0UmVzcG9uc2VDb250ZW50VHlwZShyZXNwb25zZTogSHR0cFJlc3BvbnNlKTogT3B0aW9uYWw8c3RyaW5nPiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3Jlc3BvbnNlVHlwZSB8fFxuICAgICAgKHJlc3BvbnNlLmhlYWRlcnMgJiYgcmVzcG9uc2UuaGVhZGVyc1snY29udGVudC10eXBlJ10pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgcGFyc2VSZXNwb25zZUJvZHkocmVzcG9uc2U6IEh0dHBSZXNwb25zZSkge1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gdGhpcy5nZXRSZXNwb25zZUNvbnRlbnRUeXBlKHJlc3BvbnNlKSB8fCAnJztcbiAgICBjb25zdCBwYXJzZUJvZHkgPSAvXih0ZXh0fGFwcGxpY2F0aW9uKVxcL3htbCg7fCQpLy50ZXN0KGNvbnRlbnRUeXBlKVxuICAgICAgPyBwYXJzZVhNTFxuICAgICAgOiAvXmFwcGxpY2F0aW9uXFwvanNvbig7fCQpLy50ZXN0KGNvbnRlbnRUeXBlKVxuICAgICAgPyBwYXJzZUpTT05cbiAgICAgIDogL150ZXh0XFwvY3N2KDt8JCkvLnRlc3QoY29udGVudFR5cGUpXG4gICAgICA/IHBhcnNlQ1NWXG4gICAgICA6IHBhcnNlVGV4dDtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHBhcnNlQm9keShyZXNwb25zZS5ib2R5KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuYm9keTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHJlc3BvbnNlIGJvZHlcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgYXN5bmMgZ2V0UmVzcG9uc2VCb2R5KHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjA0KSB7XG4gICAgICAvLyBObyBDb250ZW50XG4gICAgICByZXR1cm4gdGhpcy5fbm9Db250ZW50UmVzcG9uc2U7XG4gICAgfVxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLnBhcnNlUmVzcG9uc2VCb2R5KHJlc3BvbnNlKTtcbiAgICBsZXQgZXJyO1xuICAgIGlmICh0aGlzLmhhc0Vycm9ySW5SZXNwb25zZUJvZHkoYm9keSkpIHtcbiAgICAgIGVyciA9IGF3YWl0IHRoaXMuZ2V0RXJyb3IocmVzcG9uc2UsIGJvZHkpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMzAwKSB7XG4gICAgICAvLyBNdWx0aXBsZSBDaG9pY2VzXG4gICAgICB0aHJvdyBuZXcgSHR0cEFwaUVycm9yKFxuICAgICAgICAnTXVsdGlwbGUgcmVjb3JkcyBmb3VuZCcsXG4gICAgICAgICdNVUxUSVBMRV9DSE9JQ0VTJyxcbiAgICAgICAgYm9keSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVjdCBzZXNzaW9uIGV4cGlyeVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBpc1Nlc3Npb25FeHBpcmVkKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDAxO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVjdCBlcnJvciByZXNwb25zZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBpc0Vycm9yUmVzcG9uc2UocmVzcG9uc2U6IEh0dHBSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXNDb2RlID49IDQwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlY3QgZXJyb3IgaW4gcmVzcG9uc2UgYm9keVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBoYXNFcnJvckluUmVzcG9uc2VCb2R5KF9ib2R5OiBPcHRpb25hbDxzdHJpbmc+KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNpbmcgZXJyb3IgbWVzc2FnZSBpbiByZXNwb25zZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwYXJzZUVycm9yKGJvZHk6IGFueSkge1xuICAgIGNvbnN0IGVycm9ycyA9IGJvZHk7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZXJyb3JzKSA/IGVycm9yc1swXSA6IGVycm9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXJyb3IgbWVzc2FnZSBpbiByZXNwb25zZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBhc3luYyBnZXRFcnJvcihyZXNwb25zZTogSHR0cFJlc3BvbnNlLCBib2R5PzogYW55KTogUHJvbWlzZTxFcnJvcj4ge1xuICAgIGxldCBlcnJvcjtcbiAgICB0cnkge1xuICAgICAgZXJyb3IgPSB0aGlzLnBhcnNlRXJyb3IoYm9keSB8fCAoYXdhaXQgdGhpcy5wYXJzZVJlc3BvbnNlQm9keShyZXNwb25zZSkpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eVxuICAgIH1cbiAgICBlcnJvciA9XG4gICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmXG4gICAgICBlcnJvciAhPT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnXG4gICAgICAgID8gZXJyb3JcbiAgICAgICAgOiB7XG4gICAgICAgICAgICBlcnJvckNvZGU6IGBFUlJPUl9IVFRQXyR7cmVzcG9uc2Uuc3RhdHVzQ29kZX1gLFxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuYm9keSxcbiAgICAgICAgICB9O1xuICAgIHJldHVybiBuZXcgSHR0cEFwaUVycm9yKGVycm9yLm1lc3NhZ2UsIGVycm9yLmVycm9yQ29kZSk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5jbGFzcyBIdHRwQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGVycm9yQ29kZTogc3RyaW5nO1xuICBjb250ZW50OiBhbnk7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgZXJyb3JDb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkLCBjb250ZW50PzogYW55KSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gZXJyb3JDb2RlIHx8IHRoaXMubmFtZTtcbiAgICB0aGlzLmVycm9yQ29kZSA9IHRoaXMubmFtZTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBBcGk7XG4iXX0=