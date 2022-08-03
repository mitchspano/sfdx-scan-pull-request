"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SessionRefreshDelegate = void 0;

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _logger = require("./util/logger");

/**
 *
 */

/**
 *
 */
class SessionRefreshDelegate {
  constructor(conn, refreshFn) {
    (0, _defineProperty2.default)(this, "_refreshFn", void 0);
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "_logger", void 0);
    (0, _defineProperty2.default)(this, "_lastRefreshedAt", undefined);
    (0, _defineProperty2.default)(this, "_refreshPromise", undefined);
    this._conn = conn;
    this._logger = conn._logLevel ? SessionRefreshDelegate._logger.createInstance(conn._logLevel) : SessionRefreshDelegate._logger;
    this._refreshFn = refreshFn;
  }
  /**
   * Refresh access token
   * @private
   */


  async refresh(since) {
    // Callback immediately When refreshed after designated time
    if (this._lastRefreshedAt && this._lastRefreshedAt > since) {
      return;
    }

    if (this._refreshPromise) {
      await this._refreshPromise;
      return;
    }

    try {
      this._logger.info('<refresh token>');

      this._refreshPromise = new _promise.default((resolve, reject) => {
        this._refreshFn(this._conn, (err, accessToken, res) => {
          if (!err) {
            this._logger.debug('Connection refresh completed.');

            this._conn.accessToken = accessToken;

            this._conn.emit('refresh', accessToken, res);

            resolve();
          } else {
            reject(err);
          }
        });
      });
      await this._refreshPromise;

      this._logger.info('<refresh complete>');
    } finally {
      this._refreshPromise = undefined;
      this._lastRefreshedAt = (0, _now.default)();
    }
  }

  isRefreshing() {
    return !!this._refreshPromise;
  }

  async waitRefresh() {
    return this._refreshPromise;
  }

}

exports.SessionRefreshDelegate = SessionRefreshDelegate;
(0, _defineProperty2.default)(SessionRefreshDelegate, "_logger", (0, _logger.getLogger)('session-refresh-delegate'));
var _default = SessionRefreshDelegate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXNzaW9uLXJlZnJlc2gtZGVsZWdhdGUudHMiXSwibmFtZXMiOlsiU2Vzc2lvblJlZnJlc2hEZWxlZ2F0ZSIsImNvbnN0cnVjdG9yIiwiY29ubiIsInJlZnJlc2hGbiIsInVuZGVmaW5lZCIsIl9jb25uIiwiX2xvZ2dlciIsIl9sb2dMZXZlbCIsImNyZWF0ZUluc3RhbmNlIiwiX3JlZnJlc2hGbiIsInJlZnJlc2giLCJzaW5jZSIsIl9sYXN0UmVmcmVzaGVkQXQiLCJfcmVmcmVzaFByb21pc2UiLCJpbmZvIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImFjY2Vzc1Rva2VuIiwicmVzIiwiZGVidWciLCJlbWl0IiwiaXNSZWZyZXNoaW5nIiwid2FpdFJlZnJlc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBSEE7QUFDQTtBQUNBOztBQWNBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLHNCQUFOLENBQStDO0FBU3BEQyxFQUFBQSxXQUFXLENBQUNDLElBQUQsRUFBc0JDLFNBQXRCLEVBQXdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBSHpCQyxTQUd5QjtBQUFBLDJEQUZuQkEsU0FFbUI7QUFDakUsU0FBS0MsS0FBTCxHQUFhSCxJQUFiO0FBQ0EsU0FBS0ksT0FBTCxHQUFlSixJQUFJLENBQUNLLFNBQUwsR0FDWFAsc0JBQXNCLENBQUNNLE9BQXZCLENBQStCRSxjQUEvQixDQUE4Q04sSUFBSSxDQUFDSyxTQUFuRCxDQURXLEdBRVhQLHNCQUFzQixDQUFDTSxPQUYzQjtBQUdBLFNBQUtHLFVBQUwsR0FBa0JOLFNBQWxCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsUUFBTU8sT0FBTixDQUFjQyxLQUFkLEVBQTZCO0FBQzNCO0FBQ0EsUUFBSSxLQUFLQyxnQkFBTCxJQUF5QixLQUFLQSxnQkFBTCxHQUF3QkQsS0FBckQsRUFBNEQ7QUFDMUQ7QUFDRDs7QUFDRCxRQUFJLEtBQUtFLGVBQVQsRUFBMEI7QUFDeEIsWUFBTSxLQUFLQSxlQUFYO0FBQ0E7QUFDRDs7QUFDRCxRQUFJO0FBQ0YsV0FBS1AsT0FBTCxDQUFhUSxJQUFiLENBQWtCLGlCQUFsQjs7QUFDQSxXQUFLRCxlQUFMLEdBQXVCLHFCQUFZLENBQUNFLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0RCxhQUFLUCxVQUFMLENBQWdCLEtBQUtKLEtBQXJCLEVBQTRCLENBQUNZLEdBQUQsRUFBTUMsV0FBTixFQUFtQkMsR0FBbkIsS0FBMkI7QUFDckQsY0FBSSxDQUFDRixHQUFMLEVBQVU7QUFDUixpQkFBS1gsT0FBTCxDQUFhYyxLQUFiLENBQW1CLCtCQUFuQjs7QUFDQSxpQkFBS2YsS0FBTCxDQUFXYSxXQUFYLEdBQXlCQSxXQUF6Qjs7QUFDQSxpQkFBS2IsS0FBTCxDQUFXZ0IsSUFBWCxDQUFnQixTQUFoQixFQUEyQkgsV0FBM0IsRUFBd0NDLEdBQXhDOztBQUNBSixZQUFBQSxPQUFPO0FBQ1IsV0FMRCxNQUtPO0FBQ0xDLFlBQUFBLE1BQU0sQ0FBQ0MsR0FBRCxDQUFOO0FBQ0Q7QUFDRixTQVREO0FBVUQsT0FYc0IsQ0FBdkI7QUFZQSxZQUFNLEtBQUtKLGVBQVg7O0FBQ0EsV0FBS1AsT0FBTCxDQUFhUSxJQUFiLENBQWtCLG9CQUFsQjtBQUNELEtBaEJELFNBZ0JVO0FBQ1IsV0FBS0QsZUFBTCxHQUF1QlQsU0FBdkI7QUFDQSxXQUFLUSxnQkFBTCxHQUF3QixtQkFBeEI7QUFDRDtBQUNGOztBQUVEVSxFQUFBQSxZQUFZLEdBQVk7QUFDdEIsV0FBTyxDQUFDLENBQUMsS0FBS1QsZUFBZDtBQUNEOztBQUVELFFBQU1VLFdBQU4sR0FBb0I7QUFDbEIsV0FBTyxLQUFLVixlQUFaO0FBQ0Q7O0FBMURtRDs7OzhCQUF6Q2Isc0IsYUFDYyx1QkFBVSwwQkFBVixDO2VBNERaQSxzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuaW1wb3J0IHsgZ2V0TG9nZ2VyLCBMb2dnZXIgfSBmcm9tICcuL3V0aWwvbG9nZ2VyJztcbmltcG9ydCB7IENhbGxiYWNrLCBTY2hlbWEgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi9vYXV0aDInO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFNlc3Npb25SZWZyZXNoRnVuYzxTIGV4dGVuZHMgU2NoZW1hPiA9IChcbiAgY29ubjogQ29ubmVjdGlvbjxTPixcbiAgY2FsbGJhY2s6IENhbGxiYWNrPHN0cmluZywgVG9rZW5SZXNwb25zZT4sXG4pID0+IHZvaWQ7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25SZWZyZXNoRGVsZWdhdGU8UyBleHRlbmRzIFNjaGVtYT4ge1xuICBzdGF0aWMgX2xvZ2dlcjogTG9nZ2VyID0gZ2V0TG9nZ2VyKCdzZXNzaW9uLXJlZnJlc2gtZGVsZWdhdGUnKTtcblxuICBwcml2YXRlIF9yZWZyZXNoRm46IFNlc3Npb25SZWZyZXNoRnVuYzxTPjtcbiAgcHJpdmF0ZSBfY29ubjogQ29ubmVjdGlvbjxTPjtcbiAgcHJpdmF0ZSBfbG9nZ2VyOiBMb2dnZXI7XG4gIHByaXZhdGUgX2xhc3RSZWZyZXNoZWRBdDogbnVtYmVyIHwgdm9pZCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfcmVmcmVzaFByb21pc2U6IFByb21pc2U8dm9pZD4gfCB2b2lkID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4sIHJlZnJlc2hGbjogU2Vzc2lvblJlZnJlc2hGdW5jPFM+KSB7XG4gICAgdGhpcy5fY29ubiA9IGNvbm47XG4gICAgdGhpcy5fbG9nZ2VyID0gY29ubi5fbG9nTGV2ZWxcbiAgICAgID8gU2Vzc2lvblJlZnJlc2hEZWxlZ2F0ZS5fbG9nZ2VyLmNyZWF0ZUluc3RhbmNlKGNvbm4uX2xvZ0xldmVsKVxuICAgICAgOiBTZXNzaW9uUmVmcmVzaERlbGVnYXRlLl9sb2dnZXI7XG4gICAgdGhpcy5fcmVmcmVzaEZuID0gcmVmcmVzaEZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggYWNjZXNzIHRva2VuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyByZWZyZXNoKHNpbmNlOiBudW1iZXIpIHtcbiAgICAvLyBDYWxsYmFjayBpbW1lZGlhdGVseSBXaGVuIHJlZnJlc2hlZCBhZnRlciBkZXNpZ25hdGVkIHRpbWVcbiAgICBpZiAodGhpcy5fbGFzdFJlZnJlc2hlZEF0ICYmIHRoaXMuX2xhc3RSZWZyZXNoZWRBdCA+IHNpbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWZyZXNoUHJvbWlzZSkge1xuICAgICAgYXdhaXQgdGhpcy5fcmVmcmVzaFByb21pc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0aGlzLl9sb2dnZXIuaW5mbygnPHJlZnJlc2ggdG9rZW4+Jyk7XG4gICAgICB0aGlzLl9yZWZyZXNoUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEZuKHRoaXMuX2Nvbm4sIChlcnIsIGFjY2Vzc1Rva2VuLCByZXMpID0+IHtcbiAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKCdDb25uZWN0aW9uIHJlZnJlc2ggY29tcGxldGVkLicpO1xuICAgICAgICAgICAgdGhpcy5fY29ubi5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgdGhpcy5fY29ubi5lbWl0KCdyZWZyZXNoJywgYWNjZXNzVG9rZW4sIHJlcyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuX3JlZnJlc2hQcm9taXNlO1xuICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oJzxyZWZyZXNoIGNvbXBsZXRlPicpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9yZWZyZXNoUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhc3RSZWZyZXNoZWRBdCA9IERhdGUubm93KCk7XG4gICAgfVxuICB9XG5cbiAgaXNSZWZyZXNoaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3JlZnJlc2hQcm9taXNlO1xuICB9XG5cbiAgYXN5bmMgd2FpdFJlZnJlc2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZnJlc2hQcm9taXNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlc3Npb25SZWZyZXNoRGVsZWdhdGU7XG4iXX0=