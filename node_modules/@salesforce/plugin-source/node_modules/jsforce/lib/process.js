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

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Process = exports.ApprovalProcess = exports.ProcessRule = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @file Process class to manage/run workflow rule and approval process
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

/**
 *
 */

/**
 *
 */

/**
 * A class which manages process (workflow) rules
 */
class ProcessRule {
  /**
   *
   */
  constructor(conn) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    this._conn = conn;
  }
  /**
   * Get all process rule definitions registered to sobjects
   */


  async list() {
    const res = await this._conn.request('/process/rules');
    return res.rules;
  }
  /**
   * Trigger process rule for given entities
   */


  trigger(contextIds) {
    const contextIds_ = (0, _isArray.default)(contextIds) ? contextIds : [contextIds]; // https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_process_rules_trigger.htm

    return this._conn.request({
      method: 'POST',
      url: '/process/rules/',
      body: (0, _stringify.default)({
        contextIds: contextIds_
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}
/**
 *
 */


exports.ProcessRule = ProcessRule;

/**
 * A class which manages approval processes
 */
class ApprovalProcess {
  /**
   *
   */
  constructor(conn) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    this._conn = conn;
  }
  /**
   * Get all approval process definitions registered to sobjects
   */


  async list() {
    const res = await this._conn.request('/process/approvals');
    return res.approvals;
  }
  /**
   * Send bulk requests for approval process
   */


  request(requests) {
    const requests_ = (0, _map.default)(requests).call(requests, req => '_request' in req ? req._request : req);
    return this._conn.request({
      method: 'POST',
      url: '/process/approvals',
      headers: {
        'content-type': 'application/json'
      },
      body: (0, _stringify.default)({
        requests: requests_
      })
    });
  }
  /**
   * Create approval process request
   *
   * @private
   */


  _createRequest(actionType, contextId, comments, options = {}) {
    return new ApprovalProcessRequest(this, _objectSpread({
      actionType,
      contextId,
      comments
    }, options));
  }
  /**
   * Submit approval request for an item
   */


  submit(contextId, comments, options) {
    return this._createRequest('Submit', contextId, comments, options);
  }
  /**
   * Approve approval request for an item
   */


  approve(workitemId, comments, options = {}) {
    return this._createRequest('Approve', workitemId, comments, options);
  }
  /**
   * Reject approval request for an item
   */


  reject(workitemId, comments, options = {}) {
    return this._createRequest('Reject', workitemId, comments, options);
  }

}
/**
 *
 */


exports.ApprovalProcess = ApprovalProcess;

/**
 * A class representing approval process request
 */
class ApprovalProcessRequest {
  constructor(process, request) {
    (0, _defineProperty2.default)(this, "_process", void 0);
    (0, _defineProperty2.default)(this, "_request", void 0);
    (0, _defineProperty2.default)(this, "_promise", void 0);
    this._process = process;
    this._request = request;
  }
  /**
   * Promise/A+ interface
   * http://promises-aplus.github.io/promises-spec/
   */


  then(onResolve, onReject) {
    if (!this._promise) {
      this._promise = this._process.request([this]).then(rets => rets[0]);
    }

    this._promise.then(onResolve, onReject);
  }

}
/**
 * A class which manages process rules and approval processes
 */


class Process {
  /**
   *
   */
  constructor(conn) {
    (0, _defineProperty2.default)(this, "rule", void 0);
    (0, _defineProperty2.default)(this, "approval", void 0);
    this.rule = new ProcessRule(conn);
    this.approval = new ApprovalProcess(conn);
  }

}

exports.Process = Process;
var _default = Process;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzLnRzIl0sIm5hbWVzIjpbIlByb2Nlc3NSdWxlIiwiY29uc3RydWN0b3IiLCJjb25uIiwiX2Nvbm4iLCJsaXN0IiwicmVzIiwicmVxdWVzdCIsInJ1bGVzIiwidHJpZ2dlciIsImNvbnRleHRJZHMiLCJjb250ZXh0SWRzXyIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJoZWFkZXJzIiwiQXBwcm92YWxQcm9jZXNzIiwiYXBwcm92YWxzIiwicmVxdWVzdHMiLCJyZXF1ZXN0c18iLCJyZXEiLCJfcmVxdWVzdCIsIl9jcmVhdGVSZXF1ZXN0IiwiYWN0aW9uVHlwZSIsImNvbnRleHRJZCIsImNvbW1lbnRzIiwib3B0aW9ucyIsIkFwcHJvdmFsUHJvY2Vzc1JlcXVlc3QiLCJzdWJtaXQiLCJhcHByb3ZlIiwid29ya2l0ZW1JZCIsInJlamVjdCIsInByb2Nlc3MiLCJfcHJvY2VzcyIsInRoZW4iLCJvblJlc29sdmUiLCJvblJlamVjdCIsIl9wcm9taXNlIiwicmV0cyIsIlByb2Nlc3MiLCJydWxlIiwiYXBwcm92YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBOztBQVVBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLFdBQU4sQ0FBb0M7QUFHekM7QUFDRjtBQUNBO0FBQ0VDLEVBQUFBLFdBQVcsQ0FBQ0MsSUFBRCxFQUFzQjtBQUFBO0FBQy9CLFNBQUtDLEtBQUwsR0FBYUQsSUFBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxRQUFNRSxJQUFOLEdBQWE7QUFDWCxVQUFNQyxHQUFHLEdBQUcsTUFBTSxLQUFLRixLQUFMLENBQVdHLE9BQVgsQ0FDaEIsZ0JBRGdCLENBQWxCO0FBR0EsV0FBT0QsR0FBRyxDQUFDRSxLQUFYO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFQyxFQUFBQSxPQUFPLENBQUNDLFVBQUQsRUFBZ0M7QUFDckMsVUFBTUMsV0FBVyxHQUFHLHNCQUFjRCxVQUFkLElBQTRCQSxVQUE1QixHQUF5QyxDQUFDQSxVQUFELENBQTdELENBRHFDLENBRXJDOztBQUNBLFdBQU8sS0FBS04sS0FBTCxDQUFXRyxPQUFYLENBVUw7QUFDQUssTUFBQUEsTUFBTSxFQUFFLE1BRFI7QUFFQUMsTUFBQUEsR0FBRyxFQUFFLGlCQUZMO0FBR0FDLE1BQUFBLElBQUksRUFBRSx3QkFBZTtBQUNuQkosUUFBQUEsVUFBVSxFQUFFQztBQURPLE9BQWYsQ0FITjtBQU1BSSxNQUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQU5ULEtBVkssQ0FBUDtBQW9CRDs7QUE5Q3dDO0FBaUQzQztBQUNBO0FBQ0E7Ozs7O0FBa0NBO0FBQ0E7QUFDQTtBQUNPLE1BQU1DLGVBQU4sQ0FBd0M7QUFHN0M7QUFDRjtBQUNBO0FBQ0VkLEVBQUFBLFdBQVcsQ0FBQ0MsSUFBRCxFQUFzQjtBQUFBO0FBQy9CLFNBQUtDLEtBQUwsR0FBYUQsSUFBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxRQUFNRSxJQUFOLEdBQWE7QUFDWCxVQUFNQyxHQUFHLEdBQUcsTUFBTSxLQUFLRixLQUFMLENBQVdHLE9BQVgsQ0FFZixvQkFGZSxDQUFsQjtBQUdBLFdBQU9ELEdBQUcsQ0FBQ1csU0FBWDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRVYsRUFBQUEsT0FBTyxDQUNMVyxRQURLLEVBRUw7QUFDQSxVQUFNQyxTQUFTLEdBQUcsa0JBQUFELFFBQVEsTUFBUixDQUFBQSxRQUFRLEVBQU1FLEdBQUQsSUFDN0IsY0FBY0EsR0FBZCxHQUFvQkEsR0FBRyxDQUFDQyxRQUF4QixHQUFtQ0QsR0FEWCxDQUExQjtBQUdBLFdBQU8sS0FBS2hCLEtBQUwsQ0FBV0csT0FBWCxDQUFtRDtBQUN4REssTUFBQUEsTUFBTSxFQUFFLE1BRGdEO0FBRXhEQyxNQUFBQSxHQUFHLEVBQUUsb0JBRm1EO0FBR3hERSxNQUFBQSxPQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEIsT0FIK0M7QUFJeERELE1BQUFBLElBQUksRUFBRSx3QkFBZTtBQUFFSSxRQUFBQSxRQUFRLEVBQUVDO0FBQVosT0FBZjtBQUprRCxLQUFuRCxDQUFQO0FBTUQ7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRUcsRUFBQUEsY0FBYyxDQUNaQyxVQURZLEVBRVpDLFNBRlksRUFHWkMsUUFIWSxFQUlaQyxPQUFxQyxHQUFHLEVBSjVCLEVBS1o7QUFDQSxXQUFPLElBQUlDLHNCQUFKLENBQTJCLElBQTNCO0FBQ0xKLE1BQUFBLFVBREs7QUFFTEMsTUFBQUEsU0FGSztBQUdMQyxNQUFBQTtBQUhLLE9BSUZDLE9BSkUsRUFBUDtBQU1EO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRUUsRUFBQUEsTUFBTSxDQUNKSixTQURJLEVBRUpDLFFBRkksRUFHSkMsT0FISSxFQUlKO0FBQ0EsV0FBTyxLQUFLSixjQUFMLENBQW9CLFFBQXBCLEVBQThCRSxTQUE5QixFQUF5Q0MsUUFBekMsRUFBbURDLE9BQW5ELENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VHLEVBQUFBLE9BQU8sQ0FDTEMsVUFESyxFQUVMTCxRQUZLLEVBR0xDLE9BQXFDLEdBQUcsRUFIbkMsRUFJTDtBQUNBLFdBQU8sS0FBS0osY0FBTCxDQUFvQixTQUFwQixFQUErQlEsVUFBL0IsRUFBMkNMLFFBQTNDLEVBQXFEQyxPQUFyRCxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFSyxFQUFBQSxNQUFNLENBQ0pELFVBREksRUFFSkwsUUFGSSxFQUdKQyxPQUFxQyxHQUFHLEVBSHBDLEVBSUo7QUFDQSxXQUFPLEtBQUtKLGNBQUwsQ0FBb0IsUUFBcEIsRUFBOEJRLFVBQTlCLEVBQTBDTCxRQUExQyxFQUFvREMsT0FBcEQsQ0FBUDtBQUNEOztBQXZGNEM7QUEwRi9DO0FBQ0E7QUFDQTs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxzQkFBTixDQUErQztBQUs3Q3pCLEVBQUFBLFdBQVcsQ0FDVDhCLE9BRFMsRUFFVHpCLE9BRlMsRUFHVDtBQUFBO0FBQUE7QUFBQTtBQUNBLFNBQUswQixRQUFMLEdBQWdCRCxPQUFoQjtBQUNBLFNBQUtYLFFBQUwsR0FBZ0JkLE9BQWhCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UyQixFQUFBQSxJQUFJLENBQ0ZDLFNBREUsRUFJRkMsUUFKRSxFQUtGO0FBQ0EsUUFBSSxDQUFDLEtBQUtDLFFBQVYsRUFBb0I7QUFDbEIsV0FBS0EsUUFBTCxHQUFnQixLQUFLSixRQUFMLENBQ2IxQixPQURhLENBQ0wsQ0FBQyxJQUFELENBREssRUFFYjJCLElBRmEsQ0FFUEksSUFBRCxJQUFlQSxJQUFJLENBQUMsQ0FBRCxDQUZYLENBQWhCO0FBR0Q7O0FBQ0QsU0FBS0QsUUFBTCxDQUFjSCxJQUFkLENBQW1CQyxTQUFuQixFQUE4QkMsUUFBOUI7QUFDRDs7QUE3QjRDO0FBZ0MvQztBQUNBO0FBQ0E7OztBQUNPLE1BQU1HLE9BQU4sQ0FBZ0M7QUFJckM7QUFDRjtBQUNBO0FBQ0VyQyxFQUFBQSxXQUFXLENBQUNDLElBQUQsRUFBc0I7QUFBQTtBQUFBO0FBQy9CLFNBQUtxQyxJQUFMLEdBQVksSUFBSXZDLFdBQUosQ0FBZ0JFLElBQWhCLENBQVo7QUFDQSxTQUFLc0MsUUFBTCxHQUFnQixJQUFJekIsZUFBSixDQUFvQmIsSUFBcEIsQ0FBaEI7QUFDRDs7QUFWb0M7OztlQWF4Qm9DLE8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIFByb2Nlc3MgY2xhc3MgdG8gbWFuYWdlL3J1biB3b3JrZmxvdyBydWxlIGFuZCBhcHByb3ZhbCBwcm9jZXNzXG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cbiAqL1xuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCB7IFByb2Nlc3NSdWxlcywgU2NoZW1hIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgUHJvY2Vzc1J1bGVEZWZpbml0aW9uID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG9iamVjdDogc3RyaW5nO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBQcm9jZXNzUnVsZVRyaWdnZXJSZXN1bHQgPVxuICB8IHtcbiAgICAgIHN1Y2Nlc3M6IHRydWU7XG4gICAgfVxuICB8IHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlO1xuICAgICAgZXJyb3JzOiBBcnJheTx7IG1lc3NhZ2U6IHN0cmluZyB9PjtcbiAgICB9O1xuXG4vKipcbiAqIEEgY2xhc3Mgd2hpY2ggbWFuYWdlcyBwcm9jZXNzICh3b3JrZmxvdykgcnVsZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFByb2Nlc3NSdWxlPFMgZXh0ZW5kcyBTY2hlbWE+IHtcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25uOiBDb25uZWN0aW9uPFM+KSB7XG4gICAgdGhpcy5fY29ubiA9IGNvbm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBwcm9jZXNzIHJ1bGUgZGVmaW5pdGlvbnMgcmVnaXN0ZXJlZCB0byBzb2JqZWN0c1xuICAgKi9cbiAgYXN5bmMgbGlzdCgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLl9jb25uLnJlcXVlc3Q8eyBydWxlczogUHJvY2Vzc1J1bGVzIH0+KFxuICAgICAgJy9wcm9jZXNzL3J1bGVzJyxcbiAgICApO1xuICAgIHJldHVybiByZXMucnVsZXM7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBwcm9jZXNzIHJ1bGUgZm9yIGdpdmVuIGVudGl0aWVzXG4gICAqL1xuICB0cmlnZ2VyKGNvbnRleHRJZHM6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY29udGV4dElkc18gPSBBcnJheS5pc0FycmF5KGNvbnRleHRJZHMpID8gY29udGV4dElkcyA6IFtjb250ZXh0SWRzXTtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5zYWxlc2ZvcmNlLmNvbS9kb2NzL2F0bGFzLmVuLXVzLmFwaV9yZXN0Lm1ldGEvYXBpX3Jlc3QvZG9tZV9wcm9jZXNzX3J1bGVzX3RyaWdnZXIuaHRtXG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdDxcbiAgICAgIHwge1xuICAgICAgICAgIGVycm9yczogbnVsbDtcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlO1xuICAgICAgICB9XG4gICAgICB8IHtcbiAgICAgICAgICAvLyBEb2NzIGRvbid0IHNheSB3aGF0IHRoZSB0cmlnZ2VyIGVycm9ycyBhcmVcbiAgICAgICAgICBlcnJvcnM6IGFueVtdO1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlO1xuICAgICAgICB9XG4gICAgPih7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJy9wcm9jZXNzL3J1bGVzLycsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbnRleHRJZHM6IGNvbnRleHRJZHNfLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQXBwcm92YWxQcm9jZXNzRGVmaW5pdGlvbiA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBvYmplY3Q6IHN0cmluZztcbiAgc29ydE9yZGVyOiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBBcHByb3ZhbFByb2Nlc3NSZXF1ZXN0UmVzdWx0ID1cbiAgfCB7XG4gICAgICBzdWNjZXNzOiB0cnVlO1xuICAgICAgYWN0b3JJZHM6IHN0cmluZ1tdO1xuICAgICAgZW50aXR5SWQ6IHN0cmluZztcbiAgICAgIGluc3RhbmNlSWQ6IHN0cmluZztcbiAgICAgIGluc3RhbmNlU3RhdHVzOiBzdHJpbmc7XG4gICAgICBuZXdXb3JrSXRlbUlkczogc3RyaW5nW107XG4gICAgfVxuICB8IHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlO1xuICAgICAgZXJyb3JzOiBBcnJheTx7IG1lc3NhZ2U6IHN0cmluZyB9PjtcbiAgICB9O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIEFwcHJvdmFsUHJvY2Vzc0FjdGlvbk9wdGlvbnMgPSB7XG4gIHByb2Nlc3NEZWZpbml0aW9uTmFtZU9ySWQ/OiBzdHJpbmc7XG4gIHNraXBFbnRyeUNyaXRlcmlhPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQSBjbGFzcyB3aGljaCBtYW5hZ2VzIGFwcHJvdmFsIHByb2Nlc3Nlc1xuICovXG5leHBvcnQgY2xhc3MgQXBwcm92YWxQcm9jZXNzPFMgZXh0ZW5kcyBTY2hlbWE+IHtcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25uOiBDb25uZWN0aW9uPFM+KSB7XG4gICAgdGhpcy5fY29ubiA9IGNvbm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBhcHByb3ZhbCBwcm9jZXNzIGRlZmluaXRpb25zIHJlZ2lzdGVyZWQgdG8gc29iamVjdHNcbiAgICovXG4gIGFzeW5jIGxpc3QoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5fY29ubi5yZXF1ZXN0PHtcbiAgICAgIGFwcHJvdmFsczogeyBbaW5kZXg6IHN0cmluZ106IEFwcHJvdmFsUHJvY2Vzc0RlZmluaXRpb24gfTtcbiAgICB9PignL3Byb2Nlc3MvYXBwcm92YWxzJyk7XG4gICAgcmV0dXJuIHJlcy5hcHByb3ZhbHM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBidWxrIHJlcXVlc3RzIGZvciBhcHByb3ZhbCBwcm9jZXNzXG4gICAqL1xuICByZXF1ZXN0KFxuICAgIHJlcXVlc3RzOiBBcnJheTxBcHByb3ZhbFByb2Nlc3NSZXF1ZXN0Q29uZmlnIHwgQXBwcm92YWxQcm9jZXNzUmVxdWVzdDxTPj4sXG4gICkge1xuICAgIGNvbnN0IHJlcXVlc3RzXyA9IHJlcXVlc3RzLm1hcCgocmVxKSA9PlxuICAgICAgJ19yZXF1ZXN0JyBpbiByZXEgPyByZXEuX3JlcXVlc3QgOiByZXEsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PEFwcHJvdmFsUHJvY2Vzc1JlcXVlc3RSZXN1bHRbXT4oe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvcHJvY2Vzcy9hcHByb3ZhbHMnLFxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHJlcXVlc3RzOiByZXF1ZXN0c18gfSksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFwcHJvdmFsIHByb2Nlc3MgcmVxdWVzdFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVJlcXVlc3QoXG4gICAgYWN0aW9uVHlwZTogJ1N1Ym1pdCcgfCAnQXBwcm92ZScgfCAnUmVqZWN0JyxcbiAgICBjb250ZXh0SWQ6IHN0cmluZyxcbiAgICBjb21tZW50cz86IHN0cmluZyxcbiAgICBvcHRpb25zOiBBcHByb3ZhbFByb2Nlc3NBY3Rpb25PcHRpb25zID0ge30sXG4gICkge1xuICAgIHJldHVybiBuZXcgQXBwcm92YWxQcm9jZXNzUmVxdWVzdCh0aGlzLCB7XG4gICAgICBhY3Rpb25UeXBlLFxuICAgICAgY29udGV4dElkLFxuICAgICAgY29tbWVudHMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdCBhcHByb3ZhbCByZXF1ZXN0IGZvciBhbiBpdGVtXG4gICAqL1xuICBzdWJtaXQoXG4gICAgY29udGV4dElkOiBzdHJpbmcsXG4gICAgY29tbWVudHM/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEFwcHJvdmFsUHJvY2Vzc0FjdGlvbk9wdGlvbnMsXG4gICkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVSZXF1ZXN0KCdTdWJtaXQnLCBjb250ZXh0SWQsIGNvbW1lbnRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHByb3ZlIGFwcHJvdmFsIHJlcXVlc3QgZm9yIGFuIGl0ZW1cbiAgICovXG4gIGFwcHJvdmUoXG4gICAgd29ya2l0ZW1JZDogc3RyaW5nLFxuICAgIGNvbW1lbnRzPzogc3RyaW5nLFxuICAgIG9wdGlvbnM6IEFwcHJvdmFsUHJvY2Vzc0FjdGlvbk9wdGlvbnMgPSB7fSxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVJlcXVlc3QoJ0FwcHJvdmUnLCB3b3JraXRlbUlkLCBjb21tZW50cywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVqZWN0IGFwcHJvdmFsIHJlcXVlc3QgZm9yIGFuIGl0ZW1cbiAgICovXG4gIHJlamVjdChcbiAgICB3b3JraXRlbUlkOiBzdHJpbmcsXG4gICAgY29tbWVudHM/OiBzdHJpbmcsXG4gICAgb3B0aW9uczogQXBwcm92YWxQcm9jZXNzQWN0aW9uT3B0aW9ucyA9IHt9LFxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlUmVxdWVzdCgnUmVqZWN0Jywgd29ya2l0ZW1JZCwgY29tbWVudHMsIG9wdGlvbnMpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQXBwcm92YWxQcm9jZXNzUmVxdWVzdENvbmZpZyA9IHtcbiAgYWN0aW9uVHlwZTogJ1N1Ym1pdCcgfCAnQXBwcm92ZScgfCAnUmVqZWN0JztcbiAgY29udGV4dElkOiBzdHJpbmc7XG4gIGNvbW1lbnRzPzogc3RyaW5nO1xuICBuZXh0QXBwcm92ZXJJZHM/OiBzdHJpbmdbXTtcbiAgcHJvY2Vzc0RlZmluaXRpb25OYW1lT3JJZD86IHN0cmluZztcbiAgc2tpcEVudHJ5Q3JpdGVyaWE/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBBIGNsYXNzIHJlcHJlc2VudGluZyBhcHByb3ZhbCBwcm9jZXNzIHJlcXVlc3RcbiAqL1xuY2xhc3MgQXBwcm92YWxQcm9jZXNzUmVxdWVzdDxTIGV4dGVuZHMgU2NoZW1hPiB7XG4gIF9wcm9jZXNzOiBBcHByb3ZhbFByb2Nlc3M8Uz47XG4gIF9yZXF1ZXN0OiBBcHByb3ZhbFByb2Nlc3NSZXF1ZXN0Q29uZmlnO1xuICBfcHJvbWlzZTogUHJvbWlzZTxBcHByb3ZhbFByb2Nlc3NSZXF1ZXN0UmVzdWx0PiB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm9jZXNzOiBBcHByb3ZhbFByb2Nlc3M8Uz4sXG4gICAgcmVxdWVzdDogQXBwcm92YWxQcm9jZXNzUmVxdWVzdENvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5fcHJvY2VzcyA9IHByb2Nlc3M7XG4gICAgdGhpcy5fcmVxdWVzdCA9IHJlcXVlc3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvbWlzZS9BKyBpbnRlcmZhY2VcbiAgICogaHR0cDovL3Byb21pc2VzLWFwbHVzLmdpdGh1Yi5pby9wcm9taXNlcy1zcGVjL1xuICAgKi9cbiAgdGhlbjxVPihcbiAgICBvblJlc29sdmU/OiAoXG4gICAgICByZXM6IEFwcHJvdmFsUHJvY2Vzc1JlcXVlc3RSZXN1bHQsXG4gICAgKSA9PiBVIHwgUHJvbWlzZUxpa2U8VT4gfCBudWxsLFxuICAgIG9uUmVqZWN0PzogKGVycjogYW55KSA9PiBVIHwgUHJvbWlzZUxpa2U8VT4gfCBudWxsLFxuICApIHtcbiAgICBpZiAoIXRoaXMuX3Byb21pc2UpIHtcbiAgICAgIHRoaXMuX3Byb21pc2UgPSB0aGlzLl9wcm9jZXNzXG4gICAgICAgIC5yZXF1ZXN0KFt0aGlzXSlcbiAgICAgICAgLnRoZW4oKHJldHM6IGFueSkgPT4gcmV0c1swXSk7XG4gICAgfVxuICAgIHRoaXMuX3Byb21pc2UudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgY2xhc3Mgd2hpY2ggbWFuYWdlcyBwcm9jZXNzIHJ1bGVzIGFuZCBhcHByb3ZhbCBwcm9jZXNzZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFByb2Nlc3M8UyBleHRlbmRzIFNjaGVtYT4ge1xuICBydWxlOiBQcm9jZXNzUnVsZTxTPjtcbiAgYXBwcm92YWw6IEFwcHJvdmFsUHJvY2VzczxTPjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4pIHtcbiAgICB0aGlzLnJ1bGUgPSBuZXcgUHJvY2Vzc1J1bGUoY29ubik7XG4gICAgdGhpcy5hcHByb3ZhbCA9IG5ldyBBcHByb3ZhbFByb2Nlc3MoY29ubik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvY2VzcztcbiJdfQ==