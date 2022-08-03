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

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "ReportMetadata", {
  enumerable: true,
  get: function () {
    return _types.ReportMetadata;
  }
});

_Object$defineProperty(exports, "ReportExecuteResult", {
  enumerable: true,
  get: function () {
    return _types.ReportExecuteResult;
  }
});

_Object$defineProperty(exports, "ReportRetrieveResult", {
  enumerable: true,
  get: function () {
    return _types.ReportRetrieveResult;
  }
});

_Object$defineProperty(exports, "ReportDescribeResult", {
  enumerable: true,
  get: function () {
    return _types.ReportDescribeResult;
  }
});

_Object$defineProperty(exports, "ReportInfo", {
  enumerable: true,
  get: function () {
    return _types.ReportInfo;
  }
});

_Object$defineProperty(exports, "ReportInstanceInfo", {
  enumerable: true,
  get: function () {
    return _types.ReportInstanceInfo;
  }
});

_Object$defineProperty(exports, "DashboardMetadata", {
  enumerable: true,
  get: function () {
    return _types.DashboardMetadata;
  }
});

_Object$defineProperty(exports, "DashboardResult", {
  enumerable: true,
  get: function () {
    return _types.DashboardResult;
  }
});

_Object$defineProperty(exports, "DashboardStatusResult", {
  enumerable: true,
  get: function () {
    return _types.DashboardStatusResult;
  }
});

_Object$defineProperty(exports, "DashboardRefreshResult", {
  enumerable: true,
  get: function () {
    return _types.DashboardRefreshResult;
  }
});

_Object$defineProperty(exports, "DashboardInfo", {
  enumerable: true,
  get: function () {
    return _types.DashboardInfo;
  }
});

exports.default = exports.Analytics = exports.Dashboard = exports.Report = exports.ReportInstance = void 0;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _jsforce = require("../jsforce");

var _types = require("./analytics/types");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*----------------------------------------------------------------------------------*/

/**
 * Report object class in Analytics API
 */
class ReportInstance {
  /**
   *
   */
  constructor(report, id) {
    (0, _defineProperty2.default)(this, "_report", void 0);
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    this._report = report;
    this._conn = report._conn;
    this.id = id;
  }
  /**
   * Retrieve report result asynchronously executed
   */


  retrieve() {
    const url = [this._conn._baseUrl(), 'analytics', 'reports', this._report.id, 'instances', this.id].join('/');
    return this._conn.request(url);
  }

}
/*----------------------------------------------------------------------------------*/

/**
 * Report object class in Analytics API
 */


exports.ReportInstance = ReportInstance;

class Report {
  /**
   *
   */
  constructor(conn, id) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "delete", this.destroy);
    (0, _defineProperty2.default)(this, "del", this.destroy);
    (0, _defineProperty2.default)(this, "run", this.execute);
    (0, _defineProperty2.default)(this, "exec", this.execute);
    this._conn = conn;
    this.id = id;
  }
  /**
   * Describe report metadata
   */


  describe() {
    var url = [this._conn._baseUrl(), 'analytics', 'reports', this.id, 'describe'].join('/');
    return this._conn.request(url);
  }
  /**
   * Destroy a report
   */


  destroy() {
    const url = [this._conn._baseUrl(), 'analytics', 'reports', this.id].join('/');
    return this._conn.request({
      method: 'DELETE',
      url
    });
  }
  /**
   * Synonym of Analytics~Report#destroy()
   */


  /**
   * Clones a given report
   */
  clone(name) {
    const url = [this._conn._baseUrl(), 'analytics', 'reports'].join('/') + '?cloneId=' + this.id;
    const config = {
      reportMetadata: {
        name
      }
    };
    return this._conn.request({
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      body: (0, _stringify.default)(config)
    });
  }
  /**
   * Explain plan for executing report
   */


  explain() {
    const url = '/query/?explain=' + this.id;
    return this._conn.request(url);
  }
  /**
   * Run report synchronously
   */


  execute(options = {}) {
    const url = [this._conn._baseUrl(), 'analytics', 'reports', this.id].join('/') + '?includeDetails=' + (options.details ? 'true' : 'false');
    return this._conn.request(_objectSpread({
      url
    }, options.metadata ? {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: (0, _stringify.default)(options.metadata)
    } : {
      method: 'GET'
    }));
  }
  /**
   * Synonym of Analytics~Report#execute()
   */


  /**
   * Run report asynchronously
   */
  executeAsync(options = {}) {
    const url = [this._conn._baseUrl(), 'analytics', 'reports', this.id, 'instances'].join('/') + (options.details ? '?includeDetails=true' : '');
    return this._conn.request(_objectSpread({
      method: 'POST',
      url
    }, options.metadata ? {
      headers: {
        'Content-Type': 'application/json'
      },
      body: (0, _stringify.default)(options.metadata)
    } : {
      body: ''
    }));
  }
  /**
   * Get report instance for specified instance ID
   */


  instance(id) {
    return new ReportInstance(this, id);
  }
  /**
   * List report instances which had been executed asynchronously
   */


  instances() {
    const url = [this._conn._baseUrl(), 'analytics', 'reports', this.id, 'instances'].join('/');
    return this._conn.request(url);
  }

}
/*----------------------------------------------------------------------------------*/

/**
 * Dashboard object class in the Analytics API
 */


exports.Report = Report;

class Dashboard {
  /**
   *
   */
  constructor(conn, id) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "delete", this.destroy);
    (0, _defineProperty2.default)(this, "del", this.destroy);
    this._conn = conn;
    this.id = id;
  }
  /**
   * Describe dashboard metadata
   *
   * @method Analytics~Dashboard#describe
   * @param {Callback.<Analytics-DashboardMetadata>} [callback] - Callback function
   * @returns {Promise.<Analytics-DashboardMetadata>}
   */


  describe() {
    const url = [this._conn._baseUrl(), 'analytics', 'dashboards', this.id, 'describe'].join('/');
    return this._conn.request(url);
  }
  /**
   * Get details about dashboard components
   */


  components(componentIds) {
    const url = [this._conn._baseUrl(), 'analytics', 'dashboards', this.id].join('/');
    const config = {
      componentIds: (0, _isArray.default)(componentIds) ? componentIds : typeof componentIds === 'string' ? [componentIds] : undefined
    };
    return this._conn.request({
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      body: (0, _stringify.default)(config)
    });
  }
  /**
   * Get dashboard status
   */


  status() {
    const url = [this._conn._baseUrl(), 'analytics', 'dashboards', this.id, 'status'].join('/');
    return this._conn.request(url);
  }
  /**
   * Refresh a dashboard
   */


  refresh() {
    const url = [this._conn._baseUrl(), 'analytics', 'dashboards', this.id].join('/');
    return this._conn.request({
      method: 'PUT',
      url,
      body: ''
    });
  }
  /**
   * Clone a dashboard
   */


  clone(config, folderId) {
    const url = [this._conn._baseUrl(), 'analytics', 'dashboards'].join('/') + '?cloneId=' + this.id;

    if (typeof config === 'string') {
      config = {
        name: config,
        folderId
      };
    }

    return this._conn.request({
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      body: (0, _stringify.default)(config)
    });
  }
  /**
   * Destroy a dashboard
   */


  destroy() {
    const url = [this._conn._baseUrl(), 'analytics', 'dashboards', this.id].join('/');
    return this._conn.request({
      method: 'DELETE',
      url
    });
  }
  /**
   * Synonym of Analytics~Dashboard#destroy()
   */


}
/*----------------------------------------------------------------------------------*/

/**
 * API class for Analytics API
 */


exports.Dashboard = Dashboard;

class Analytics {
  /**
   *
   */
  constructor(conn) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    this._conn = conn;
  }
  /**
   * Get report object of Analytics API
   */


  report(id) {
    return new Report(this._conn, id);
  }
  /**
   * Get recent report list
   */


  reports() {
    const url = [this._conn._baseUrl(), 'analytics', 'reports'].join('/');
    return this._conn.request(url);
  }
  /**
   * Get dashboard object of Analytics API
   */


  dashboard(id) {
    return new Dashboard(this._conn, id);
  }
  /**
   * Get recent dashboard list
   */


  dashboards() {
    var url = [this._conn._baseUrl(), 'analytics', 'dashboards'].join('/');
    return this._conn.request(url);
  }

}
/*--------------------------------------------*/

/*
 * Register hook in connection instantiation for dynamically adding this API module features
 */


exports.Analytics = Analytics;
(0, _jsforce.registerModule)('analytics', conn => new Analytics(conn));
var _default = Analytics;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYW5hbHl0aWNzLnRzIl0sIm5hbWVzIjpbIlJlcG9ydEluc3RhbmNlIiwiY29uc3RydWN0b3IiLCJyZXBvcnQiLCJpZCIsIl9yZXBvcnQiLCJfY29ubiIsInJldHJpZXZlIiwidXJsIiwiX2Jhc2VVcmwiLCJqb2luIiwicmVxdWVzdCIsIlJlcG9ydCIsImNvbm4iLCJkZXN0cm95IiwiZXhlY3V0ZSIsImRlc2NyaWJlIiwibWV0aG9kIiwiY2xvbmUiLCJuYW1lIiwiY29uZmlnIiwicmVwb3J0TWV0YWRhdGEiLCJoZWFkZXJzIiwiYm9keSIsImV4cGxhaW4iLCJvcHRpb25zIiwiZGV0YWlscyIsIm1ldGFkYXRhIiwiZXhlY3V0ZUFzeW5jIiwiaW5zdGFuY2UiLCJpbnN0YW5jZXMiLCJEYXNoYm9hcmQiLCJjb21wb25lbnRzIiwiY29tcG9uZW50SWRzIiwidW5kZWZpbmVkIiwic3RhdHVzIiwicmVmcmVzaCIsImZvbGRlcklkIiwiQW5hbHl0aWNzIiwicmVwb3J0cyIsImRhc2hib2FyZCIsImRhc2hib2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFHQTs7Ozs7O0FBcUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLGNBQU4sQ0FBdUM7QUFLNUM7QUFDRjtBQUNBO0FBQ0VDLEVBQUFBLFdBQVcsQ0FBQ0MsTUFBRCxFQUFvQkMsRUFBcEIsRUFBZ0M7QUFBQTtBQUFBO0FBQUE7QUFDekMsU0FBS0MsT0FBTCxHQUFlRixNQUFmO0FBQ0EsU0FBS0csS0FBTCxHQUFhSCxNQUFNLENBQUNHLEtBQXBCO0FBQ0EsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFRyxFQUFBQSxRQUFRLEdBQWtDO0FBQ3hDLFVB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QUFLTixLQUFoQixFQUF1QkYsRUFBdkIsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRW1DLEVBQUFBLE9BQU8sR0FBRztBQUNSLFVBQU0vQixHQUFHLEdBQUcsQ0FBQyxLQUFLRixLQUFMLENBQVdHLFFBQVgsRUFBRCxFQUF3QixXQUF4QixFQUFxQyxTQUFyQyxFQUFnREMsSUFBaEQsQ0FBcUQsR0FBckQsQ0FBWjtBQUNBLFdBQU8sS0FBS0osS0FBTCxDQUFXSyxPQUFYLENBQWlDSCxHQUFqQyxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFZ0MsRUFBQUEsU0FBUyxDQUFDcEMsRUFBRCxFQUFhO0FBQ3BCLFdBQU8sSUFBSTJCLFNBQUosQ0FBYyxLQUFLekIsS0FBbkIsRUFBMEJGLEVBQTFCLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VxQyxFQUFBQSxVQUFVLEdBQUc7QUFDWCxRQUFJakMsR0FBRyxHQUFHLENBQUMsS0FBS0YsS0FBTCxDQUFXRyxRQUFYLEVBQUQsRUFBd0IsV0FBeEIsRUFBcUMsWUFBckMsRUFBbURDLElBQW5ELENBQXdELEdBQXhELENBQVY7QUFDQSxXQUFPLEtBQUtKLEtBQUwsQ0FBV0ssT0FBWCxDQUFvQ0gsR0FBcEMsQ0FBUDtBQUNEOztBQXRDc0M7QUF5Q3pDOztBQUNBO0FBQ0E7QUFDQTs7OztBQUNBLDZCQUFlLFdBQWYsRUFBNkJLLElBQUQsSUFBVSxJQUFJeUIsU0FBSixDQUFjekIsSUFBZCxDQUF0QztlQUVleUIsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgTWFuYWdlcyBTYWxlc2ZvcmNlIEFuYWx5dGljcyBBUElcbiAqIEBhdXRob3IgU2hpbmljaGkgVG9taXRhIDxzaGluaWNoaS50b21pdGFAZ21haWwuY29tPlxuICovXG5pbXBvcnQgeyByZWdpc3Rlck1vZHVsZSB9IGZyb20gJy4uL2pzZm9yY2UnO1xuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi4vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge1xuICBSZXBvcnRNZXRhZGF0YSxcbiAgUmVwb3J0RXhlY3V0ZVJlc3VsdCxcbiAgUmVwb3J0UmV0cmlldmVSZXN1bHQsXG4gIFJlcG9ydERlc2NyaWJlUmVzdWx0LFxuICBSZXBvcnRJbmZvLFxuICBSZXBvcnRJbnN0YW5jZUluZm8sXG4gIERhc2hib2FyZE1ldGFkYXRhLFxuICBEYXNoYm9hcmRSZXN1bHQsXG4gIERhc2hib2FyZFN0YXR1c1Jlc3VsdCxcbiAgRGFzaGJvYXJkUmVmcmVzaFJlc3VsdCxcbiAgRGFzaGJvYXJkSW5mbyxcbn0gZnJvbSAnLi9hbmFseXRpY3MvdHlwZXMnO1xuaW1wb3J0IHsgUXVlcnlFeHBsYWluUmVzdWx0IH0gZnJvbSAnLi4vcXVlcnknO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHtcbiAgUmVwb3J0TWV0YWRhdGEsXG4gIFJlcG9ydEV4ZWN1dGVSZXN1bHQsXG4gIFJlcG9ydFJldHJpZXZlUmVzdWx0LFxuICBSZXBvcnREZXNjcmliZVJlc3VsdCxcbiAgUmVwb3J0SW5mbyxcbiAgUmVwb3J0SW5zdGFuY2VJbmZvLFxuICBEYXNoYm9hcmRNZXRhZGF0YSxcbiAgRGFzaGJvYXJkUmVzdWx0LFxuICBEYXNoYm9hcmRTdGF0dXNSZXN1bHQsXG4gIERhc2hib2FyZFJlZnJlc2hSZXN1bHQsXG4gIERhc2hib2FyZEluZm8sXG59O1xuXG5leHBvcnQgdHlwZSBSZXBvcnRFeGVjdXRlT3B0aW9ucyA9IHtcbiAgZGV0YWlscz86IGJvb2xlYW47XG4gIG1ldGFkYXRhPzoge1xuICAgIHJlcG9ydE1ldGFkYXRhOiBQYXJ0aWFsPFJlcG9ydE1ldGFkYXRhPjtcbiAgfTtcbn07XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKipcbiAqIFJlcG9ydCBvYmplY3QgY2xhc3MgaW4gQW5hbHl0aWNzIEFQSVxuICovXG5leHBvcnQgY2xhc3MgUmVwb3J0SW5zdGFuY2U8UyBleHRlbmRzIFNjaGVtYT4ge1xuICBfcmVwb3J0OiBSZXBvcnQ8Uz47XG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xuICBpZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IocmVwb3J0OiBSZXBvcnQ8Uz4sIGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBvcnQgPSByZXBvcnQ7XG4gICAgdGhpcy5fY29ubiA9IHJlcG9ydC5fY29ubjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgcmVwb3J0IHJlc3VsdCBhc3luY2hyb25vdXNseSBleGVjdXRlZFxuICAgKi9cbiAgcmV0cmlldmUoKTogUHJvbWlzZTxSZXBvcnRSZXRyaWV2ZVJlc3VsdD4ge1xuICAgIGNvbnN0IHVybCA9IFtcbiAgICAgIHRoaXMuX2Nvbm4uX2Jhc2VVcmwoKSxcbiAgICAgICdhbmFseXRpY3MnLFxuICAgICAgJ3JlcG9ydHMnLFxuICAgICAgdGhpcy5fcmVwb3J0LmlkLFxuICAgICAgJ2luc3RhbmNlcycsXG4gICAgICB0aGlzLmlkLFxuICAgIF0uam9pbignLycpO1xuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3Q8UmVwb3J0UmV0cmlldmVSZXN1bHQ+KHVybCk7XG4gIH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogUmVwb3J0IG9iamVjdCBjbGFzcyBpbiBBbmFseXRpY3MgQVBJXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvcnQ8UyBleHRlbmRzIFNjaGVtYT4ge1xuICBfY29ubjogQ29ubmVjdGlvbjxTPjtcbiAgaWQ6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4sIGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb25uID0gY29ubjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmUgcmVwb3J0IG1ldGFkYXRhXG4gICAqL1xuICBkZXNjcmliZSgpOiBQcm9taXNlPFJlcG9ydERlc2NyaWJlUmVzdWx0PiB7XG4gICAgdmFyIHVybCA9IFtcbiAgICAgIHRoaXMuX2Nvbm4uX2Jhc2VVcmwoKSxcbiAgICAgICdhbmFseXRpY3MnLFxuICAgICAgJ3JlcG9ydHMnLFxuICAgICAgdGhpcy5pZCxcbiAgICAgICdkZXNjcmliZScsXG4gICAgXS5qb2luKCcvJyk7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdDxSZXBvcnREZXNjcmliZVJlc3VsdD4odXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgcmVwb3J0XG4gICAqL1xuICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHVybCA9IFt0aGlzLl9jb25uLl9iYXNlVXJsKCksICdhbmFseXRpY3MnLCAncmVwb3J0cycsIHRoaXMuaWRdLmpvaW4oXG4gICAgICAnLycsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PHZvaWQ+KHsgbWV0aG9kOiAnREVMRVRFJywgdXJsIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgQW5hbHl0aWNzflJlcG9ydCNkZXN0cm95KClcbiAgICovXG4gIGRlbGV0ZSA9IHRoaXMuZGVzdHJveTtcblxuICAvKipcbiAgICogU3lub255bSBvZiBBbmFseXRpY3N+UmVwb3J0I2Rlc3Ryb3koKVxuICAgKi9cbiAgZGVsID0gdGhpcy5kZXN0cm95O1xuXG4gIC8qKlxuICAgKiBDbG9uZXMgYSBnaXZlbiByZXBvcnRcbiAgICovXG4gIGNsb25lKG5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVwb3J0RGVzY3JpYmVSZXN1bHQ+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgW3RoaXMuX2Nvbm4uX2Jhc2VVcmwoKSwgJ2FuYWx5dGljcycsICdyZXBvcnRzJ10uam9pbignLycpICtcbiAgICAgICc/Y2xvbmVJZD0nICtcbiAgICAgIHRoaXMuaWQ7XG4gICAgY29uc3QgY29uZmlnID0geyByZXBvcnRNZXRhZGF0YTogeyBuYW1lIH0gfTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PFJlcG9ydERlc2NyaWJlUmVzdWx0Pih7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29uZmlnKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBsYWluIHBsYW4gZm9yIGV4ZWN1dGluZyByZXBvcnRcbiAgICovXG4gIGV4cGxhaW4oKTogUHJvbWlzZTxRdWVyeUV4cGxhaW5SZXN1bHQ+IHtcbiAgICBjb25zdCB1cmwgPSAnL3F1ZXJ5Lz9leHBsYWluPScgKyB0aGlzLmlkO1xuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3Q8UXVlcnlFeHBsYWluUmVzdWx0Pih1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biByZXBvcnQgc3luY2hyb25vdXNseVxuICAgKi9cbiAgZXhlY3V0ZShvcHRpb25zOiBSZXBvcnRFeGVjdXRlT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxSZXBvcnRFeGVjdXRlUmVzdWx0PiB7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIFt0aGlzLl9jb25uLl9iYXNlVXJsKCksICdhbmFseXRpY3MnLCAncmVwb3J0cycsIHRoaXMuaWRdLmpvaW4oJy8nKSArXG4gICAgICAnP2luY2x1ZGVEZXRhaWxzPScgK1xuICAgICAgKG9wdGlvbnMuZGV0YWlscyA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3Q8UmVwb3J0RXhlY3V0ZVJlc3VsdD4oe1xuICAgICAgdXJsLFxuICAgICAgLi4uKG9wdGlvbnMubWV0YWRhdGFcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5tZXRhZGF0YSksXG4gICAgICAgICAgfVxuICAgICAgICA6IHsgbWV0aG9kOiAnR0VUJyB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW5vbnltIG9mIEFuYWx5dGljc35SZXBvcnQjZXhlY3V0ZSgpXG4gICAqL1xuICBydW4gPSB0aGlzLmV4ZWN1dGU7XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgQW5hbHl0aWNzflJlcG9ydCNleGVjdXRlKClcbiAgICovXG4gIGV4ZWMgPSB0aGlzLmV4ZWN1dGU7XG5cbiAgLyoqXG4gICAqIFJ1biByZXBvcnQgYXN5bmNocm9ub3VzbHlcbiAgICovXG4gIGV4ZWN1dGVBc3luYyhcbiAgICBvcHRpb25zOiBSZXBvcnRFeGVjdXRlT3B0aW9ucyA9IHt9LFxuICApOiBQcm9taXNlPFJlcG9ydEluc3RhbmNlSW5mbz4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICBbXG4gICAgICAgIHRoaXMuX2Nvbm4uX2Jhc2VVcmwoKSxcbiAgICAgICAgJ2FuYWx5dGljcycsXG4gICAgICAgICdyZXBvcnRzJyxcbiAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgJ2luc3RhbmNlcycsXG4gICAgICBdLmpvaW4oJy8nKSArIChvcHRpb25zLmRldGFpbHMgPyAnP2luY2x1ZGVEZXRhaWxzPXRydWUnIDogJycpO1xuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3Q8UmVwb3J0SW5zdGFuY2VJbmZvPih7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybCxcbiAgICAgIC4uLihvcHRpb25zLm1ldGFkYXRhXG4gICAgICAgID8ge1xuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zLm1ldGFkYXRhKSxcbiAgICAgICAgICB9XG4gICAgICAgIDogeyBib2R5OiAnJyB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVwb3J0IGluc3RhbmNlIGZvciBzcGVjaWZpZWQgaW5zdGFuY2UgSURcbiAgICovXG4gIGluc3RhbmNlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFJlcG9ydEluc3RhbmNlKHRoaXMsIGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IHJlcG9ydCBpbnN0YW5jZXMgd2hpY2ggaGFkIGJlZW4gZXhlY3V0ZWQgYXN5bmNocm9ub3VzbHlcbiAgICovXG4gIGluc3RhbmNlcygpOiBQcm9taXNlPFJlcG9ydEluc3RhbmNlSW5mb1tdPiB7XG4gICAgY29uc3QgdXJsID0gW1xuICAgICAgdGhpcy5fY29ubi5fYmFzZVVybCgpLFxuICAgICAgJ2FuYWx5dGljcycsXG4gICAgICAncmVwb3J0cycsXG4gICAgICB0aGlzLmlkLFxuICAgICAgJ2luc3RhbmNlcycsXG4gICAgXS5qb2luKCcvJyk7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdDxSZXBvcnRJbnN0YW5jZUluZm9bXT4odXJsKTtcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBEYXNoYm9hcmQgb2JqZWN0IGNsYXNzIGluIHRoZSBBbmFseXRpY3MgQVBJXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmQ8UyBleHRlbmRzIFNjaGVtYT4ge1xuICBfY29ubjogQ29ubmVjdGlvbjxTPjtcbiAgaWQ6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4sIGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb25uID0gY29ubjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmUgZGFzaGJvYXJkIG1ldGFkYXRhXG4gICAqXG4gICAqIEBtZXRob2QgQW5hbHl0aWNzfkRhc2hib2FyZCNkZXNjcmliZVxuICAgKiBAcGFyYW0ge0NhbGxiYWNrLjxBbmFseXRpY3MtRGFzaGJvYXJkTWV0YWRhdGE+fSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQHJldHVybnMge1Byb21pc2UuPEFuYWx5dGljcy1EYXNoYm9hcmRNZXRhZGF0YT59XG4gICAqL1xuICBkZXNjcmliZSgpOiBQcm9taXNlPERhc2hib2FyZE1ldGFkYXRhPiB7XG4gICAgY29uc3QgdXJsID0gW1xuICAgICAgdGhpcy5fY29ubi5fYmFzZVVybCgpLFxuICAgICAgJ2FuYWx5dGljcycsXG4gICAgICAnZGFzaGJvYXJkcycsXG4gICAgICB0aGlzLmlkLFxuICAgICAgJ2Rlc2NyaWJlJyxcbiAgICBdLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PERhc2hib2FyZE1ldGFkYXRhPih1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZXRhaWxzIGFib3V0IGRhc2hib2FyZCBjb21wb25lbnRzXG4gICAqL1xuICBjb21wb25lbnRzKGNvbXBvbmVudElkcz86IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxEYXNoYm9hcmRSZXN1bHQ+IHtcbiAgICBjb25zdCB1cmwgPSBbXG4gICAgICB0aGlzLl9jb25uLl9iYXNlVXJsKCksXG4gICAgICAnYW5hbHl0aWNzJyxcbiAgICAgICdkYXNoYm9hcmRzJyxcbiAgICAgIHRoaXMuaWQsXG4gICAgXS5qb2luKCcvJyk7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgY29tcG9uZW50SWRzOiBBcnJheS5pc0FycmF5KGNvbXBvbmVudElkcylcbiAgICAgICAgPyBjb21wb25lbnRJZHNcbiAgICAgICAgOiB0eXBlb2YgY29tcG9uZW50SWRzID09PSAnc3RyaW5nJ1xuICAgICAgICA/IFtjb21wb25lbnRJZHNdXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdDxEYXNoYm9hcmRSZXN1bHQ+KHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb25maWcpLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXNoYm9hcmQgc3RhdHVzXG4gICAqL1xuICBzdGF0dXMoKTogUHJvbWlzZTxEYXNoYm9hcmRTdGF0dXNSZXN1bHQ+IHtcbiAgICBjb25zdCB1cmwgPSBbXG4gICAgICB0aGlzLl9jb25uLl9iYXNlVXJsKCksXG4gICAgICAnYW5hbHl0aWNzJyxcbiAgICAgICdkYXNoYm9hcmRzJyxcbiAgICAgIHRoaXMuaWQsXG4gICAgICAnc3RhdHVzJyxcbiAgICBdLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PERhc2hib2FyZFN0YXR1c1Jlc3VsdD4odXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIGEgZGFzaGJvYXJkXG4gICAqL1xuICByZWZyZXNoKCk6IFByb21pc2U8RGFzaGJvYXJkUmVmcmVzaFJlc3VsdD4ge1xuICAgIGNvbnN0IHVybCA9IFtcbiAgICAgIHRoaXMuX2Nvbm4uX2Jhc2VVcmwoKSxcbiAgICAgICdhbmFseXRpY3MnLFxuICAgICAgJ2Rhc2hib2FyZHMnLFxuICAgICAgdGhpcy5pZCxcbiAgICBdLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PERhc2hib2FyZFJlZnJlc2hSZXN1bHQ+KHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICB1cmwsXG4gICAgICBib2R5OiAnJyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9uZSBhIGRhc2hib2FyZFxuICAgKi9cbiAgY2xvbmUoXG4gICAgY29uZmlnOiB7IG5hbWU6IHN0cmluZzsgZm9sZGVySWQ/OiBzdHJpbmcgfSB8IHN0cmluZyxcbiAgICBmb2xkZXJJZD86IHN0cmluZyxcbiAgKTogUHJvbWlzZTxEYXNoYm9hcmRNZXRhZGF0YT4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICBbdGhpcy5fY29ubi5fYmFzZVVybCgpLCAnYW5hbHl0aWNzJywgJ2Rhc2hib2FyZHMnXS5qb2luKCcvJykgK1xuICAgICAgJz9jbG9uZUlkPScgK1xuICAgICAgdGhpcy5pZDtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZyA9IHsgbmFtZTogY29uZmlnLCBmb2xkZXJJZCB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PERhc2hib2FyZE1ldGFkYXRhPih7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29uZmlnKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgZGFzaGJvYXJkXG4gICAqL1xuICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHVybCA9IFtcbiAgICAgIHRoaXMuX2Nvbm4uX2Jhc2VVcmwoKSxcbiAgICAgICdhbmFseXRpY3MnLFxuICAgICAgJ2Rhc2hib2FyZHMnLFxuICAgICAgdGhpcy5pZCxcbiAgICBdLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PHZvaWQ+KHsgbWV0aG9kOiAnREVMRVRFJywgdXJsIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgQW5hbHl0aWNzfkRhc2hib2FyZCNkZXN0cm95KClcbiAgICovXG4gIGRlbGV0ZSA9IHRoaXMuZGVzdHJveTtcblxuICAvKipcbiAgICogU3lub255bSBvZiBBbmFseXRpY3N+RGFzaGJvYXJkI2Rlc3Ryb3koKVxuICAgKi9cbiAgZGVsID0gdGhpcy5kZXN0cm95O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBBUEkgY2xhc3MgZm9yIEFuYWx5dGljcyBBUElcbiAqL1xuZXhwb3J0IGNsYXNzIEFuYWx5dGljczxTIGV4dGVuZHMgU2NoZW1hPiB7XG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbjxTPikge1xuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByZXBvcnQgb2JqZWN0IG9mIEFuYWx5dGljcyBBUElcbiAgICovXG4gIHJlcG9ydChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZXBvcnQodGhpcy5fY29ubiwgaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByZWNlbnQgcmVwb3J0IGxpc3RcbiAgICovXG4gIHJlcG9ydHMoKSB7XG4gICAgY29uc3QgdXJsID0gW3RoaXMuX2Nvbm4uX2Jhc2VVcmwoKSwgJ2FuYWx5dGljcycsICdyZXBvcnRzJ10uam9pbignLycpO1xuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3Q8UmVwb3J0SW5mb1tdPih1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXNoYm9hcmQgb2JqZWN0IG9mIEFuYWx5dGljcyBBUElcbiAgICovXG4gIGRhc2hib2FyZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXNoYm9hcmQodGhpcy5fY29ubiwgaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByZWNlbnQgZGFzaGJvYXJkIGxpc3RcbiAgICovXG4gIGRhc2hib2FyZHMoKSB7XG4gICAgdmFyIHVybCA9IFt0aGlzLl9jb25uLl9iYXNlVXJsKCksICdhbmFseXRpY3MnLCAnZGFzaGJvYXJkcyddLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PERhc2hib2FyZEluZm9bXT4odXJsKTtcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qXG4gKiBSZWdpc3RlciBob29rIGluIGNvbm5lY3Rpb24gaW5zdGFudGlhdGlvbiBmb3IgZHluYW1pY2FsbHkgYWRkaW5nIHRoaXMgQVBJIG1vZHVsZSBmZWF0dXJlc1xuICovXG5yZWdpc3Rlck1vZHVsZSgnYW5hbHl0aWNzJywgKGNvbm4pID0+IG5ldyBBbmFseXRpY3MoY29ubikpO1xuXG5leHBvcnQgZGVmYXVsdCBBbmFseXRpY3M7XG4iXX0=