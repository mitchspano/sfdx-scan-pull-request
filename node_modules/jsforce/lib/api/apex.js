"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Apex = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _jsforce = require("../jsforce");

/**
 * @file Manages Salesforce Apex REST endpoint calls
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

/**
 * API class for Apex REST endpoint call
 */
class Apex {
  /**
   *
   */
  constructor(conn) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "del", this.delete);
    this._conn = conn;
  }
  /* @private */


  _baseUrl() {
    return `${this._conn.instanceUrl}/services/apexrest`;
  }
  /**
   * @private
   */


  _createRequestParams(method, path, body, options = {}) {
    const headers = typeof options.headers === 'object' ? options.headers : {};

    if (!/^(GET|DELETE)$/i.test(method)) {
      headers['content-type'] = 'application/json';
    }

    const params = {
      method,
      url: this._baseUrl() + path,
      headers
    };

    if (body) {
      params.body = (0, _stringify.default)(body);
    }

    return params;
  }
  /**
   * Call Apex REST service in GET request
   */


  get(path, options) {
    return this._conn.request(this._createRequestParams('GET', path, undefined, options));
  }
  /**
   * Call Apex REST service in POST request
   */


  post(path, body, options) {
    const params = this._createRequestParams('POST', path, body, options);

    return this._conn.request(params);
  }
  /**
   * Call Apex REST service in PUT request
   */


  put(path, body, options) {
    const params = this._createRequestParams('PUT', path, body, options);

    return this._conn.request(params);
  }
  /**
   * Call Apex REST service in PATCH request
   */


  patch(path, body, options) {
    const params = this._createRequestParams('PATCH', path, body, options);

    return this._conn.request(params);
  }
  /**
   * Call Apex REST service in DELETE request
   */


  delete(path, options) {
    return this._conn.request(this._createRequestParams('DELETE', path, undefined, options));
  }
  /**
   * Synonym of Apex#delete()
   */


}
/*--------------------------------------------*/

/*
 * Register hook in connection instantiation for dynamically adding this API module features
 */


exports.Apex = Apex;
(0, _jsforce.registerModule)('apex', conn => new Apex(conn));
var _default = Apex;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYXBleC50cyJdLCJuYW1lcyI6WyJBcGV4IiwiY29uc3RydWN0b3IiLCJjb25uIiwiZGVsZXRlIiwiX2Nvbm4iLCJfYmFzZVVybCIsImluc3RhbmNlVXJsIiwiX2NyZWF0ZVJlcXVlc3RQYXJhbXMiLCJtZXRob2QiLCJwYXRoIiwiYm9keSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwidGVzdCIsInBhcmFtcyIsInVybCIsImdldCIsInJlcXVlc3QiLCJ1bmRlZmluZWQiLCJwb3N0IiwicHV0IiwicGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFKQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDTyxNQUFNQSxJQUFOLENBQTZCO0FBR2xDO0FBQ0Y7QUFDQTtBQUNFQyxFQUFBQSxXQUFXLENBQUNDLElBQUQsRUFBc0I7QUFBQTtBQUFBLCtDQStFM0IsS0FBS0MsTUEvRXNCO0FBQy9CLFNBQUtDLEtBQUwsR0FBYUYsSUFBYjtBQUNEO0FBRUQ7OztBQUNBRyxFQUFBQSxRQUFRLEdBQUc7QUFDVCxXQUFRLEdBQUUsS0FBS0QsS0FBTCxDQUFXRSxXQUFZLG9CQUFqQztBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRUMsRUFBQUEsb0JBQW9CLENBQ2xCQyxNQURrQixFQUVsQkMsSUFGa0IsRUFHbEJDLElBSGtCLEVBSWxCQyxPQUE2QyxHQUFHLEVBSjlCLEVBS0w7QUFDYixVQUFNQyxPQUErQixHQUNuQyxPQUFPRCxPQUFPLENBQUNDLE9BQWYsS0FBMkIsUUFBM0IsR0FBc0NELE9BQU8sQ0FBQ0MsT0FBOUMsR0FBd0QsRUFEMUQ7O0FBRUEsUUFBSSxDQUFDLGtCQUFrQkMsSUFBbEIsQ0FBdUJMLE1BQXZCLENBQUwsRUFBcUM7QUFDbkNJLE1BQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsR0FBMEIsa0JBQTFCO0FBQ0Q7O0FBQ0QsVUFBTUUsTUFBbUIsR0FBRztBQUMxQk4sTUFBQUEsTUFEMEI7QUFFMUJPLE1BQUFBLEdBQUcsRUFBRSxLQUFLVixRQUFMLEtBQWtCSSxJQUZHO0FBRzFCRyxNQUFBQTtBQUgwQixLQUE1Qjs7QUFLQSxRQUFJRixJQUFKLEVBQVU7QUFDUkksTUFBQUEsTUFBTSxDQUFDSixJQUFQLEdBQWMsd0JBQWVBLElBQWYsQ0FBZDtBQUNEOztBQUNELFdBQU9JLE1BQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VFLEVBQUFBLEdBQUcsQ0FBY1AsSUFBZCxFQUE0QkUsT0FBNUIsRUFBOEM7QUFDL0MsV0FBTyxLQUFLUCxLQUFMLENBQVdhLE9BQVgsQ0FDTCxLQUFLVixvQkFBTCxDQUEwQixLQUExQixFQUFpQ0UsSUFBakMsRUFBdUNTLFNBQXZDLEVBQWtEUCxPQUFsRCxDQURLLENBQVA7QUFHRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VRLEVBQUFBLElBQUksQ0FBY1YsSUFBZCxFQUE0QkMsSUFBNUIsRUFBMkNDLE9BQTNDLEVBQTZEO0FBQy9ELFVBQU1HLE1BQU0sR0FBRyxLQUFLUCxvQkFBTCxDQUEwQixNQUExQixFQUFrQ0UsSUFBbEMsRUFBd0NDLElBQXhDLEVBQThDQyxPQUE5QyxDQUFmOztBQUNBLFdBQU8sS0FBS1AsS0FBTCxDQUFXYSxPQUFYLENBQXNCSCxNQUF0QixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFTSxFQUFBQSxHQUFHLENBQWNYLElBQWQsRUFBNEJDLElBQTVCLEVBQTJDQyxPQUEzQyxFQUE2RDtBQUM5RCxVQUFNRyxNQUFNLEdBQUcsS0FBS1Asb0JBQUwsQ0FBMEIsS0FBMUIsRUFBaUNFLElBQWpDLEVBQXVDQyxJQUF2QyxFQUE2Q0MsT0FBN0MsQ0FBZjs7QUFDQSxXQUFPLEtBQUtQLEtBQUwsQ0FBV2EsT0FBWCxDQUFzQkgsTUFBdEIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRU8sRUFBQUEsS0FBSyxDQUFjWixJQUFkLEVBQTRCQyxJQUE1QixFQUEyQ0MsT0FBM0MsRUFBNkQ7QUFDaEUsVUFBTUcsTUFBTSxHQUFHLEtBQUtQLG9CQUFMLENBQTBCLE9BQTFCLEVBQW1DRSxJQUFuQyxFQUF5Q0MsSUFBekMsRUFBK0NDLE9BQS9DLENBQWY7O0FBQ0EsV0FBTyxLQUFLUCxLQUFMLENBQVdhLE9BQVgsQ0FBc0JILE1BQXRCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VYLEVBQUFBLE1BQU0sQ0FBY00sSUFBZCxFQUE0QkUsT0FBNUIsRUFBOEM7QUFDbEQsV0FBTyxLQUFLUCxLQUFMLENBQVdhLE9BQVgsQ0FDTCxLQUFLVixvQkFBTCxDQUEwQixRQUExQixFQUFvQ0UsSUFBcEMsRUFBMENTLFNBQTFDLEVBQXFEUCxPQUFyRCxDQURLLENBQVA7QUFHRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBcEZvQztBQXdGcEM7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsNkJBQWUsTUFBZixFQUF3QlQsSUFBRCxJQUFVLElBQUlGLElBQUosQ0FBU0UsSUFBVCxDQUFqQztlQUVlRixJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBNYW5hZ2VzIFNhbGVzZm9yY2UgQXBleCBSRVNUIGVuZHBvaW50IGNhbGxzXG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cbiAqL1xuaW1wb3J0IHsgcmVnaXN0ZXJNb2R1bGUgfSBmcm9tICcuLi9qc2ZvcmNlJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4uL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBNZXRob2RzLCBTY2hlbWEgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQVBJIGNsYXNzIGZvciBBcGV4IFJFU1QgZW5kcG9pbnQgY2FsbFxuICovXG5leHBvcnQgY2xhc3MgQXBleDxTIGV4dGVuZHMgU2NoZW1hPiB7XG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbjxTPikge1xuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xuICB9XG5cbiAgLyogQHByaXZhdGUgKi9cbiAgX2Jhc2VVcmwoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX2Nvbm4uaW5zdGFuY2VVcmx9L3NlcnZpY2VzL2FwZXhyZXN0YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVJlcXVlc3RQYXJhbXMoXG4gICAgbWV0aG9kOiBIdHRwTWV0aG9kcyxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgYm9keT86IE9iamVjdCxcbiAgICBvcHRpb25zOiB7IGhlYWRlcnM/OiBIdHRwUmVxdWVzdFsnaGVhZGVycyddIH0gPSB7fSxcbiAgKTogSHR0cFJlcXVlc3Qge1xuICAgIGNvbnN0IGhlYWRlcnM6IEh0dHBSZXF1ZXN0WydoZWFkZXJzJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnMuaGVhZGVycyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmhlYWRlcnMgOiB7fTtcbiAgICBpZiAoIS9eKEdFVHxERUxFVEUpJC9pLnRlc3QobWV0aG9kKSkge1xuICAgICAgaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogSHR0cFJlcXVlc3QgPSB7XG4gICAgICBtZXRob2QsXG4gICAgICB1cmw6IHRoaXMuX2Jhc2VVcmwoKSArIHBhdGgsXG4gICAgICBoZWFkZXJzLFxuICAgIH07XG4gICAgaWYgKGJvZHkpIHtcbiAgICAgIHBhcmFtcy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBBcGV4IFJFU1Qgc2VydmljZSBpbiBHRVQgcmVxdWVzdFxuICAgKi9cbiAgZ2V0PFIgPSB1bmtub3duPihwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiBPYmplY3QpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PFI+KFxuICAgICAgdGhpcy5fY3JlYXRlUmVxdWVzdFBhcmFtcygnR0VUJywgcGF0aCwgdW5kZWZpbmVkLCBvcHRpb25zKSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgQXBleCBSRVNUIHNlcnZpY2UgaW4gUE9TVCByZXF1ZXN0XG4gICAqL1xuICBwb3N0PFIgPSB1bmtub3duPihwYXRoOiBzdHJpbmcsIGJvZHk/OiBPYmplY3QsIG9wdGlvbnM/OiBPYmplY3QpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLl9jcmVhdGVSZXF1ZXN0UGFyYW1zKCdQT1NUJywgcGF0aCwgYm9keSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdDxSPihwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgQXBleCBSRVNUIHNlcnZpY2UgaW4gUFVUIHJlcXVlc3RcbiAgICovXG4gIHB1dDxSID0gdW5rbm93bj4ocGF0aDogc3RyaW5nLCBib2R5PzogT2JqZWN0LCBvcHRpb25zPzogT2JqZWN0KSB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5fY3JlYXRlUmVxdWVzdFBhcmFtcygnUFVUJywgcGF0aCwgYm9keSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdDxSPihwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgQXBleCBSRVNUIHNlcnZpY2UgaW4gUEFUQ0ggcmVxdWVzdFxuICAgKi9cbiAgcGF0Y2g8UiA9IHVua25vd24+KHBhdGg6IHN0cmluZywgYm9keT86IE9iamVjdCwgb3B0aW9ucz86IE9iamVjdCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuX2NyZWF0ZVJlcXVlc3RQYXJhbXMoJ1BBVENIJywgcGF0aCwgYm9keSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdDxSPihwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgQXBleCBSRVNUIHNlcnZpY2UgaW4gREVMRVRFIHJlcXVlc3RcbiAgICovXG4gIGRlbGV0ZTxSID0gdW5rbm93bj4ocGF0aDogc3RyaW5nLCBvcHRpb25zPzogT2JqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdDxSPihcbiAgICAgIHRoaXMuX2NyZWF0ZVJlcXVlc3RQYXJhbXMoJ0RFTEVURScsIHBhdGgsIHVuZGVmaW5lZCwgb3B0aW9ucyksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5vbnltIG9mIEFwZXgjZGVsZXRlKClcbiAgICovXG4gIGRlbCA9IHRoaXMuZGVsZXRlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qXG4gKiBSZWdpc3RlciBob29rIGluIGNvbm5lY3Rpb24gaW5zdGFudGlhdGlvbiBmb3IgZHluYW1pY2FsbHkgYWRkaW5nIHRoaXMgQVBJIG1vZHVsZSBmZWF0dXJlc1xuICovXG5yZWdpc3Rlck1vZHVsZSgnYXBleCcsIChjb25uKSA9PiBuZXcgQXBleChjb25uKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwZXg7XG4iXX0=