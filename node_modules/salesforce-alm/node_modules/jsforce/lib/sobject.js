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

require("core-js/modules/es.array.sort");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SObject = void 0;

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _logger = require("./util/logger");

var _recordReference = _interopRequireDefault(require("./record-reference"));

var _query = _interopRequireWildcard(require("./query"));

var _quickAction = _interopRequireDefault(require("./quick-action"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context5; _forEachInstanceProperty(_context5 = ownKeys(Object(source))).call(_context5, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * A class for organizing all SObject access
 */
class SObject {
  // layouts: (ln?: string) => Promise<DescribeLayoutResult>;
  // compactLayouts: () => Promise<DescribeCompactLayoutsResult>;
  // approvalLayouts: () => Promise<DescribeApprovalLayoutsResult>;

  /**
   *
   */
  constructor(conn, type) {
    (0, _defineProperty2.default)(this, "type", void 0);
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "_logger", void 0);
    (0, _defineProperty2.default)(this, "layouts$", void 0);
    (0, _defineProperty2.default)(this, "layouts$$", void 0);
    (0, _defineProperty2.default)(this, "compactLayouts$", void 0);
    (0, _defineProperty2.default)(this, "compactLayouts$$", void 0);
    (0, _defineProperty2.default)(this, "approvalLayouts$", void 0);
    (0, _defineProperty2.default)(this, "approvalLayouts$$", void 0);
    (0, _defineProperty2.default)(this, "insert", this.create);
    (0, _defineProperty2.default)(this, "delete", this.destroy);
    (0, _defineProperty2.default)(this, "del", this.destroy);
    (0, _defineProperty2.default)(this, "insertBulk", this.createBulk);
    (0, _defineProperty2.default)(this, "deleteBulk", this.destroyBulk);
    (0, _defineProperty2.default)(this, "deleteHardBulk", this.destroyHardBulk);
    this.type = type;
    this._conn = conn;
    this._logger = conn._logLevel ? SObject._logger.createInstance(conn._logLevel) : SObject._logger;
    const cache = this._conn.cache;

    const layoutCacheKey = layoutName => layoutName ? `layouts.namedLayouts.${layoutName}` : `layouts.${this.type}`;

    const layouts = SObject.prototype.layouts;
    this.layouts = cache.createCachedFunction(layouts, this, {
      key: layoutCacheKey,
      strategy: 'NOCACHE'
    });
    this.layouts$ = cache.createCachedFunction(layouts, this, {
      key: layoutCacheKey,
      strategy: 'HIT'
    });
    this.layouts$$ = cache.createCachedFunction(layouts, this, {
      key: layoutCacheKey,
      strategy: 'IMMEDIATE'
    });
    const compactLayoutCacheKey = `compactLayouts.${this.type}`;
    const compactLayouts = SObject.prototype.compactLayouts;
    this.compactLayouts = cache.createCachedFunction(compactLayouts, this, {
      key: compactLayoutCacheKey,
      strategy: 'NOCACHE'
    });
    this.compactLayouts$ = cache.createCachedFunction(compactLayouts, this, {
      key: compactLayoutCacheKey,
      strategy: 'HIT'
    });
    this.compactLayouts$$ = cache.createCachedFunction(compactLayouts, this, {
      key: compactLayoutCacheKey,
      strategy: 'IMMEDIATE'
    });
    const approvalLayoutCacheKey = `approvalLayouts.${this.type}`;
    const approvalLayouts = SObject.prototype.approvalLayouts;
    this.approvalLayouts = cache.createCachedFunction(approvalLayouts, this, {
      key: approvalLayoutCacheKey,
      strategy: 'NOCACHE'
    });
    this.approvalLayouts$ = cache.createCachedFunction(approvalLayouts, this, {
      key: approvalLayoutCacheKey,
      strategy: 'HIT'
    });
    this.approvalLayouts$$ = cache.createCachedFunction(approvalLayouts, this, {
      key: approvalLayoutCacheKey,
      strategy: 'IMMEDIATE'
    });
  }
  /**
   * Create records
   */


  create(records, options) {
    return this._conn.create(this.type, records, options);
  }
  /**
   * Synonym of SObject#create()
   */


  retrieve(ids, options) {
    return this._conn.retrieve(this.type, ids, options);
  }
  /**
   * Update records
   */


  update(records, options) {
    return this._conn.update(this.type, records, options);
  }
  /**
   * Upsert records
   */


  upsert(records, extIdField, options) {
    return this._conn.upsert(this.type, records, extIdField, options);
  }
  /**
   * Delete records
   */


  destroy(ids, options) {
    return this._conn.destroy(this.type, ids, options);
  }
  /**
   * Synonym of SObject#destroy()
   */


  /**
   * Call Bulk#load() to execute bulkload, returning batch object
   */
  bulkload(operation, optionsOrInput, input) {
    return this._conn.bulk.load(this.type, operation, optionsOrInput, input);
  }
  /**
   * Bulkly insert input data using bulk API
   */


  createBulk(input) {
    return this.bulkload('insert', input);
  }
  /**
   * Synonym of SObject#createBulk()
   */


  /**
   * Bulkly update records by input data using bulk API
   */
  updateBulk(input) {
    return this.bulkload('update', input);
  }
  /**
   * Bulkly upsert records by input data using bulk API
   */


  upsertBulk(input, extIdField) {
    return this.bulkload('upsert', {
      extIdField
    }, input);
  }
  /**
   * Bulkly delete records specified by input data using bulk API
   */


  destroyBulk(input) {
    return this.bulkload('delete', input);
  }
  /**
   * Synonym of SObject#destroyBulk()
   */


  /**
   * Bulkly hard delete records specified in input data using bulk API
   */
  destroyHardBulk(input) {
    return this.bulkload('hardDelete', input);
  }
  /**
   * Synonym of SObject#destroyHardBulk()
   */


  /**
   * Describe SObject metadata
   */
  describe() {
    return this._conn.describe(this.type);
  }
  /**
   *
   */


  describe$() {
    return this._conn.describe$(this.type);
  }
  /**
   *
   */


  describe$$() {
    return this._conn.describe$$(this.type);
  }
  /**
   * Get record representation instance by given id
   */


  record(id) {
    return new _recordReference.default(this._conn, this.type, id);
  }
  /**
   * Retrieve recently accessed records
   */


  recent() {
    return this._conn.recent(this.type);
  }
  /**
   * Retrieve the updated records
   */


  updated(start, end) {
    return this._conn.updated(this.type, start, end);
  }
  /**
   * Retrieve the deleted records
   */


  deleted(start, end) {
    return this._conn.deleted(this.type, start, end);
  }
  /**
   * Describe layout information for SObject
   */


  async layouts(layoutName) {
    const url = `/sobjects/${this.type}/describe/${layoutName ? `namedLayouts/${layoutName}` : 'layouts'}`;
    const body = await this._conn.request(url);
    return body;
  }
  /**
   * @typedef {Object} CompactLayoutInfo
   * @prop {Array.<Object>} compactLayouts - Array of compact layouts
   * @prop {String} defaultCompactLayoutId - ID of default compact layout
   * @prop {Array.<Object>} recordTypeCompactLayoutMappings - Array of record type mappings
   */

  /**
   * Describe compact layout information defined for SObject
   *
   * @param {Callback.<CompactLayoutInfo>} [callback] - Callback function
   * @returns {Promise.<CompactLayoutInfo>}
   */


  async compactLayouts() {
    const url = `/sobjects/${this.type}/describe/compactLayouts`;
    const body = await this._conn.request(url);
    return body;
  }
  /**
   * Describe compact layout information defined for SObject
   *
   * @param {Callback.<ApprovalLayoutInfo>} [callback] - Callback function
   * @returns {Promise.<ApprovalLayoutInfo>}
   */


  async approvalLayouts() {
    const url = `/sobjects/${this.type}/describe/approvalLayouts`;
    const body = await this._conn.request(url);
    return body;
  }
  /**
   * Find and fetch records which matches given conditions
   */


  find(conditions, fields, options = {}) {
    const {
      sort,
      limit,
      offset
    } = options,
          qoptions = (0, _objectWithoutProperties2.default)(options, ["sort", "limit", "offset"]);
    const config = {
      fields: fields == null ? undefined : fields,
      includes: (0, _includes.default)(options),
      table: this.type,
      conditions: conditions == null ? undefined : conditions,
      sort,
      limit,
      offset
    };
    const query = new _query.default(this._conn, config, qoptions);
    return query.setResponseTarget(_query.ResponseTargets.Records);
  }
  /**
   * Fetch one record which matches given conditions
   */


  findOne(conditions, fields, options = {}) {
    var _context;

    const query = (0, _find.default)(_context = this).call(_context, conditions, fields, _objectSpread(_objectSpread({}, options), {}, {
      limit: 1
    }));
    return query.setResponseTarget(_query.ResponseTargets.SingleRecord);
  }
  /**
   * Find and fetch records only by specifying fields to fetch.
   */


  select(fields) {
    var _context2;

    return (0, _find.default)(_context2 = this).call(_context2, null, fields);
  }
  /**
   * Count num of records which matches given conditions
   */


  count(conditions) {
    var _context3;

    const query = (0, _find.default)(_context3 = this).call(_context3, conditions, 'count()');
    return query.setResponseTarget(_query.ResponseTargets.Count);
  }
  /**
   * Returns the list of list views for the SObject
   *
   * @param {Callback.<ListViewsInfo>} [callback] - Callback function
   * @returns {Promise.<ListViewsInfo>}
   */


  listviews() {
    const url = `${this._conn._baseUrl()}/sobjects/${this.type}/listviews`;
    return this._conn.request(url);
  }
  /**
   * Returns the list view info in specifed view id
   *
   * @param {String} id - List view ID
   * @returns {ListView}
   */


  listview(id) {
    return new ListView(this._conn, this.type, id); // eslint-disable-line no-use-before-define
  }
  /**
   * Returns all registered quick actions for the SObject
   *
   * @param {Callback.<Array.<QuickAction~QuickActionInfo>>} [callback] - Callback function
   * @returns {Promise.<Array.<QuickAction~QuickActionInfo>>}
   */


  quickActions() {
    return this._conn.request(`/sobjects/${this.type}/quickActions`);
  }
  /**
   * Get reference for specified quick aciton in the SObject
   *
   * @param {String} actionName - Name of the quick action
   * @returns {QuickAction}
   */


  quickAction(actionName) {
    return new _quickAction.default(this._conn, `/sobjects/${this.type}/quickActions/${actionName}`);
  }

}
/**
 * A class for organizing list view information
 *
 * @protected
 * @class ListView
 * @param {Connection} conn - Connection instance
 * @param {SObject} type - SObject type
 * @param {String} id - List view ID
 */


exports.SObject = SObject;
(0, _defineProperty2.default)(SObject, "_logger", (0, _logger.getLogger)('sobject'));

class ListView {
  /**
   *
   */
  constructor(conn, type, id) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "type", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    this._conn = conn;
    this.type = type;
    this.id = id;
  }
  /**
   * Executes query for the list view and returns the resulting data and presentation information.
   */


  results() {
    const url = `${this._conn._baseUrl()}/sobjects/${this.type}/listviews/${this.id}/results`;
    return this._conn.request(url);
  }
  /**
   * Returns detailed information about a list view
   */


  describe(options = {}) {
    const url = `${this._conn._baseUrl()}/sobjects/${this.type}/listviews/${this.id}/describe`;
    return this._conn.request({
      method: 'GET',
      url,
      headers: options.headers
    });
  }
  /**
   * Explain plan for executing list view
   */


  explain() {
    const url = `/query/?explain=${this.id}`;
    return this._conn.request(url);
  }

}

var _default = SObject; // TODO Bulk

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zb2JqZWN0LnRzIl0sIm5hbWVzIjpbIlNPYmplY3QiLCJjb25zdHJ1Y3RvciIsImNvbm4iLCJ0eXBlIiwiY3JlYXRlIiwiZGVzdHJveSIsImNyZWF0ZUJ1bGsiLCJkZXN0cm95QnVsayIsImRlc3Ryb3lIYXJkQnVsayIsIl9jb25uIiwiX2xvZ2dlciIsIl9sb2dMZXZlbCIsImNyZWF0ZUluc3RhbmNlIiwiY2FjaGUiLCJsYXlvdXRDYWNoZUtleSIsImxheW91dE5hbWUiLCJsYXlvdXRzIiwicHJvdG90eXBlIiwiY3JlYXRlQ2FjaGVkRnVuY3Rpb24iLCJrZXkiLCJzdHJhdGVneSIsImxheW91dHMkIiwibGF5b3V0cyQkIiwiY29tcGFjdExheW91dENhY2hlS2V5IiwiY29tcGFjdExheW91dHMiLCJjb21wYWN0TGF5b3V0cyQiLCJjb21wYWN0TGF5b3V0cyQkIiwiYXBwcm92YWxMYXlvdXRDYWNoZUtleSIsImFwcHJvdmFsTGF5b3V0cyIsImFwcHJvdmFsTGF5b3V0cyQiLCJhcHByb3ZhbExheW91dHMkJCIsInJlY29yZHMiLCJvcHRpb25zIiwicmV0cmlldmUiLCJpZHMiLCJ1cGRhdGUiLCJ1cHNlcnQiLCJleHRJZEZpZWxkIiwiYnVsa2xvYWQiLCJvcGVyYXRpb24iLCJvcHRpb25zT3JJbnB1dCIsImlucHV0IiwiYnVsayIsImxvYWQiLCJ1cGRhdGVCdWxrIiwidXBzZXJ0QnVsayIsImRlc2NyaWJlIiwiZGVzY3JpYmUkIiwiZGVzY3JpYmUkJCIsInJlY29yZCIsImlkIiwiUmVjb3JkUmVmZXJlbmNlIiwicmVjZW50IiwidXBkYXRlZCIsInN0YXJ0IiwiZW5kIiwiZGVsZXRlZCIsInVybCIsImJvZHkiLCJyZXF1ZXN0IiwiZmluZCIsImNvbmRpdGlvbnMiLCJmaWVsZHMiLCJzb3J0IiwibGltaXQiLCJvZmZzZXQiLCJxb3B0aW9ucyIsImNvbmZpZyIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwidGFibGUiLCJxdWVyeSIsIlF1ZXJ5Iiwic2V0UmVzcG9uc2VUYXJnZXQiLCJSZXNwb25zZVRhcmdldHMiLCJSZWNvcmRzIiwiZmluZE9uZSIsIlNpbmdsZVJlY29yZCIsInNlbGVjdCIsImNvdW50IiwiQ291bnQiLCJsaXN0dmlld3MiLCJfYmFzZVVybCIsImxpc3R2aWV3IiwiTGlzdFZpZXciLCJxdWlja0FjdGlvbnMiLCJxdWlja0FjdGlvbiIsImFjdGlvbk5hbWUiLCJRdWlja0FjdGlvbiIsInJlc3VsdHMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZXhwbGFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQXNCQTs7QUFDQTs7QUFPQTs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ08sTUFBTUEsT0FBTixDQU9MO0FBT0E7QUFHQTtBQUdBOztBQU1BO0FBQ0Y7QUFDQTtBQUNFQyxFQUFBQSxXQUFXLENBQUNDLElBQUQsRUFBc0JDLElBQXRCLEVBQStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBc0VqQyxLQUFLQyxNQXRFNEI7QUFBQSxrREE0SWpDLEtBQUtDLE9BNUk0QjtBQUFBLCtDQWlKcEMsS0FBS0EsT0FqSitCO0FBQUEsc0RBd0s3QixLQUFLQyxVQXhLd0I7QUFBQSxzREFrTTdCLEtBQUtDLFdBbE13QjtBQUFBLDBEQThNekIsS0FBS0MsZUE5TW9CO0FBQ3hDLFNBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtNLEtBQUwsR0FBYVAsSUFBYjtBQUNBLFNBQUtRLE9BQUwsR0FBZVIsSUFBSSxDQUFDUyxTQUFMLEdBQ1hYLE9BQU8sQ0FBQ1UsT0FBUixDQUFnQkUsY0FBaEIsQ0FBK0JWLElBQUksQ0FBQ1MsU0FBcEMsQ0FEVyxHQUVYWCxPQUFPLENBQUNVLE9BRlo7QUFHQSxVQUFNRyxLQUFLLEdBQUcsS0FBS0osS0FBTCxDQUFXSSxLQUF6Qjs7QUFDQSxVQUFNQyxjQUFjLEdBQUlDLFVBQUQsSUFDckJBLFVBQVUsR0FDTCx3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QUFFK0IsTUFBQUEsTUFBTSxFQUFFLEtBQVY7QUFBaUJqQyxNQUFBQSxHQUFqQjtBQUFzQmtDLE1BQUFBLE9BQU8sRUFBRTNELE9BQU8sQ0FBQzJEO0FBQXZDLEtBQW5CLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VDLEVBQUFBLE9BQU8sR0FBRztBQUNSLFVBQU1uQyxHQUFHLEdBQUksbUJBQWtCLEtBQUtQLEVBQUcsRUFBdkM7QUFDQSxXQUFPLEtBQUt6QyxLQUFMLENBQVdrRCxPQUFYLENBQXdCRixHQUF4QixDQUFQO0FBQ0Q7O0FBeENZOztlQTJDQXpELE8sRUFFZiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuaW1wb3J0IHsgTG9nZ2VyLCBnZXRMb2dnZXIgfSBmcm9tICcuL3V0aWwvbG9nZ2VyJztcbmltcG9ydCB7XG4gIFJlY29yZCxcbiAgRGVzY3JpYmVMYXlvdXRSZXN1bHQsXG4gIERlc2NyaWJlQ29tcGFjdExheW91dHNSZXN1bHQsXG4gIERlc2NyaWJlQXBwcm92YWxMYXlvdXRzUmVzdWx0LFxuICBPcHRpb25hbCxcbiAgRG1sT3B0aW9ucyxcbiAgU2F2ZVJlc3VsdCxcbiAgVXBzZXJ0UmVzdWx0LFxuICBSZXRyaWV2ZU9wdGlvbnMsXG4gIFNjaGVtYSxcbiAgU09iamVjdE5hbWVzLFxuICBTT2JqZWN0UmVjb3JkLFxuICBTT2JqZWN0SW5wdXRSZWNvcmQsXG4gIFNPYmplY3RVcGRhdGVSZWNvcmQsXG4gIFNPYmplY3RGaWVsZE5hbWVzLFxuICBGaWVsZFByb2plY3Rpb25Db25maWcsXG4gIEZpZWxkUGF0aFNwZWNpZmllcixcbiAgRmllbGRQYXRoU2NvcGVkUHJvamVjdGlvbixcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IFJlY29yZFJlZmVyZW5jZSBmcm9tICcuL3JlY29yZC1yZWZlcmVuY2UnO1xuaW1wb3J0IFF1ZXJ5LCB7XG4gIFJlc3BvbnNlVGFyZ2V0cyxcbiAgUXVlcnlPcHRpb25zLFxuICBRdWVyeUZpZWxkLFxuICBRdWVyeUNvbmRpdGlvbixcbiAgUXVlcnlDb25maWcsXG59IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IFF1aWNrQWN0aW9uIGZyb20gJy4vcXVpY2stYWN0aW9uJztcbmltcG9ydCB7IENhY2hlZEZ1bmN0aW9uIH0gZnJvbSAnLi9jYWNoZSc7XG5pbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gJ3N0cmVhbSc7XG5cbmV4cG9ydCB0eXBlIEZpbmRPcHRpb25zPFMgZXh0ZW5kcyBTY2hlbWEsIE4gZXh0ZW5kcyBTT2JqZWN0TmFtZXM8Uz4+ID0gUGFydGlhbDxcbiAgUXVlcnlPcHRpb25zICZcbiAgICBQaWNrPFF1ZXJ5Q29uZmlnPFMsIE4+LCAnc29ydCcgfCAnaW5jbHVkZXMnPiAmIHtcbiAgICAgIGxpbWl0OiBudW1iZXI7XG4gICAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICB9XG4+O1xuXG4vKipcbiAqIEEgY2xhc3MgZm9yIG9yZ2FuaXppbmcgYWxsIFNPYmplY3QgYWNjZXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBTT2JqZWN0PFxuICBTIGV4dGVuZHMgU2NoZW1hLFxuICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxuICBGaWVsZE5hbWVzIGV4dGVuZHMgU09iamVjdEZpZWxkTmFtZXM8UywgTj4gPSBTT2JqZWN0RmllbGROYW1lczxTLCBOPixcbiAgUmV0cmlldmVSZWNvcmQgZXh0ZW5kcyBTT2JqZWN0UmVjb3JkPFMsIE4sICcqJz4gPSBTT2JqZWN0UmVjb3JkPFMsIE4sICcqJz4sXG4gIElucHV0UmVjb3JkIGV4dGVuZHMgU09iamVjdElucHV0UmVjb3JkPFMsIE4+ID0gU09iamVjdElucHV0UmVjb3JkPFMsIE4+LFxuICBVcGRhdGVSZWNvcmQgZXh0ZW5kcyBTT2JqZWN0VXBkYXRlUmVjb3JkPFMsIE4+ID0gU09iamVjdFVwZGF0ZVJlY29yZDxTLCBOPlxuPiB7XG4gIHN0YXRpYyBfbG9nZ2VyID0gZ2V0TG9nZ2VyKCdzb2JqZWN0Jyk7XG5cbiAgdHlwZTogTjtcbiAgX2Nvbm46IENvbm5lY3Rpb248Uz47XG4gIF9sb2dnZXI6IExvZ2dlcjtcblxuICAvLyBsYXlvdXRzOiAobG4/OiBzdHJpbmcpID0+IFByb21pc2U8RGVzY3JpYmVMYXlvdXRSZXN1bHQ+O1xuICBsYXlvdXRzJDogQ2FjaGVkRnVuY3Rpb248KGxuPzogc3RyaW5nKSA9PiBQcm9taXNlPERlc2NyaWJlTGF5b3V0UmVzdWx0Pj47XG4gIGxheW91dHMkJDogQ2FjaGVkRnVuY3Rpb248KGxuPzogc3RyaW5nKSA9PiBEZXNjcmliZUxheW91dFJlc3VsdD47XG4gIC8vIGNvbXBhY3RMYXlvdXRzOiAoKSA9PiBQcm9taXNlPERlc2NyaWJlQ29tcGFjdExheW91dHNSZXN1bHQ+O1xuICBjb21wYWN0TGF5b3V0cyQ6IENhY2hlZEZ1bmN0aW9uPCgpID0+IFByb21pc2U8RGVzY3JpYmVDb21wYWN0TGF5b3V0c1Jlc3VsdD4+O1xuICBjb21wYWN0TGF5b3V0cyQkOiBDYWNoZWRGdW5jdGlvbjwoKSA9PiBEZXNjcmliZUNvbXBhY3RMYXlvdXRzUmVzdWx0PjtcbiAgLy8gYXBwcm92YWxMYXlvdXRzOiAoKSA9PiBQcm9taXNlPERlc2NyaWJlQXBwcm92YWxMYXlvdXRzUmVzdWx0PjtcbiAgYXBwcm92YWxMYXlvdXRzJDogQ2FjaGVkRnVuY3Rpb248XG4gICAgKCkgPT4gUHJvbWlzZTxEZXNjcmliZUFwcHJvdmFsTGF5b3V0c1Jlc3VsdD5cbiAgPjtcbiAgYXBwcm92YWxMYXlvdXRzJCQ6IENhY2hlZEZ1bmN0aW9uPCgpID0+IERlc2NyaWJlQXBwcm92YWxMYXlvdXRzUmVzdWx0PjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4sIHR5cGU6IE4pIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xuICAgIHRoaXMuX2xvZ2dlciA9IGNvbm4uX2xvZ0xldmVsXG4gICAgICA/IFNPYmplY3QuX2xvZ2dlci5jcmVhdGVJbnN0YW5jZShjb25uLl9sb2dMZXZlbClcbiAgICAgIDogU09iamVjdC5fbG9nZ2VyO1xuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5fY29ubi5jYWNoZTtcbiAgICBjb25zdCBsYXlvdXRDYWNoZUtleSA9IChsYXlvdXROYW1lOiBzdHJpbmcpID0+XG4gICAgICBsYXlvdXROYW1lXG4gICAgICAgID8gYGxheW91dHMubmFtZWRMYXlvdXRzLiR7bGF5b3V0TmFtZX1gXG4gICAgICAgIDogYGxheW91dHMuJHt0aGlzLnR5cGV9YDtcbiAgICBjb25zdCBsYXlvdXRzID0gU09iamVjdC5wcm90b3R5cGUubGF5b3V0cztcbiAgICB0aGlzLmxheW91dHMgPSBjYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihsYXlvdXRzLCB0aGlzLCB7XG4gICAgICBrZXk6IGxheW91dENhY2hlS2V5LFxuICAgICAgc3RyYXRlZ3k6ICdOT0NBQ0hFJyxcbiAgICB9KTtcbiAgICB0aGlzLmxheW91dHMkID0gY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24obGF5b3V0cywgdGhpcywge1xuICAgICAga2V5OiBsYXlvdXRDYWNoZUtleSxcbiAgICAgIHN0cmF0ZWd5OiAnSElUJyxcbiAgICB9KTtcbiAgICB0aGlzLmxheW91dHMkJCA9IGNhY2hlLmNyZWF0ZUNhY2hlZEZ1bmN0aW9uKGxheW91dHMsIHRoaXMsIHtcbiAgICAgIGtleTogbGF5b3V0Q2FjaGVLZXksXG4gICAgICBzdHJhdGVneTogJ0lNTUVESUFURScsXG4gICAgfSkgYXMgYW55O1xuICAgIGNvbnN0IGNvbXBhY3RMYXlvdXRDYWNoZUtleSA9IGBjb21wYWN0TGF5b3V0cy4ke3RoaXMudHlwZX1gO1xuICAgIGNvbnN0IGNvbXBhY3RMYXlvdXRzID0gU09iamVjdC5wcm90b3R5cGUuY29tcGFjdExheW91dHM7XG4gICAgdGhpcy5jb21wYWN0TGF5b3V0cyA9IGNhY2hlLmNyZWF0ZUNhY2hlZEZ1bmN0aW9uKGNvbXBhY3RMYXlvdXRzLCB0aGlzLCB7XG4gICAgICBrZXk6IGNvbXBhY3RMYXlvdXRDYWNoZUtleSxcbiAgICAgIHN0cmF0ZWd5OiAnTk9DQUNIRScsXG4gICAgfSk7XG4gICAgdGhpcy5jb21wYWN0TGF5b3V0cyQgPSBjYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihjb21wYWN0TGF5b3V0cywgdGhpcywge1xuICAgICAga2V5OiBjb21wYWN0TGF5b3V0Q2FjaGVLZXksXG4gICAgICBzdHJhdGVneTogJ0hJVCcsXG4gICAgfSk7XG4gICAgdGhpcy5jb21wYWN0TGF5b3V0cyQkID0gY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24oY29tcGFjdExheW91dHMsIHRoaXMsIHtcbiAgICAgIGtleTogY29tcGFjdExheW91dENhY2hlS2V5LFxuICAgICAgc3RyYXRlZ3k6ICdJTU1FRElBVEUnLFxuICAgIH0pIGFzIGFueTtcbiAgICBjb25zdCBhcHByb3ZhbExheW91dENhY2hlS2V5ID0gYGFwcHJvdmFsTGF5b3V0cy4ke3RoaXMudHlwZX1gO1xuICAgIGNvbnN0IGFwcHJvdmFsTGF5b3V0cyA9IFNPYmplY3QucHJvdG90eXBlLmFwcHJvdmFsTGF5b3V0cztcbiAgICB0aGlzLmFwcHJvdmFsTGF5b3V0cyA9IGNhY2hlLmNyZWF0ZUNhY2hlZEZ1bmN0aW9uKGFwcHJvdmFsTGF5b3V0cywgdGhpcywge1xuICAgICAga2V5OiBhcHByb3ZhbExheW91dENhY2hlS2V5LFxuICAgICAgc3RyYXRlZ3k6ICdOT0NBQ0hFJyxcbiAgICB9KTtcbiAgICB0aGlzLmFwcHJvdmFsTGF5b3V0cyQgPSBjYWNoZS5jcmVhdGVDYWNoZWRGdW5jdGlvbihhcHByb3ZhbExheW91dHMsIHRoaXMsIHtcbiAgICAgIGtleTogYXBwcm92YWxMYXlvdXRDYWNoZUtleSxcbiAgICAgIHN0cmF0ZWd5OiAnSElUJyxcbiAgICB9KTtcbiAgICB0aGlzLmFwcHJvdmFsTGF5b3V0cyQkID0gY2FjaGUuY3JlYXRlQ2FjaGVkRnVuY3Rpb24oYXBwcm92YWxMYXlvdXRzLCB0aGlzLCB7XG4gICAgICBrZXk6IGFwcHJvdmFsTGF5b3V0Q2FjaGVLZXksXG4gICAgICBzdHJhdGVneTogJ0lNTUVESUFURScsXG4gICAgfSkgYXMgYW55O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSByZWNvcmRzXG4gICAqL1xuICBjcmVhdGUocmVjb3JkczogSW5wdXRSZWNvcmRbXSwgb3B0aW9ucz86IERtbE9wdGlvbnMpOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XG4gIGNyZWF0ZShyZWNvcmRzOiBJbnB1dFJlY29yZCwgb3B0aW9ucz86IERtbE9wdGlvbnMpOiBQcm9taXNlPFNhdmVSZXN1bHQ+O1xuICBjcmVhdGUoXG4gICAgcmVjb3JkczogSW5wdXRSZWNvcmQgfCBJbnB1dFJlY29yZFtdLFxuICAgIG9wdGlvbnM/OiBEbWxPcHRpb25zLFxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQgfCBTYXZlUmVzdWx0W10+O1xuICBjcmVhdGUocmVjb3JkczogSW5wdXRSZWNvcmQgfCBJbnB1dFJlY29yZFtdLCBvcHRpb25zPzogRG1sT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9jb25uLmNyZWF0ZSh0aGlzLnR5cGUsIHJlY29yZHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgU09iamVjdCNjcmVhdGUoKVxuICAgKi9cbiAgaW5zZXJ0ID0gdGhpcy5jcmVhdGU7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHNwZWNpZmllZCByZWNvcmRzXG4gICAqL1xuICByZXRyaWV2ZShpZHM6IHN0cmluZ1tdLCBvcHRpb25zPzogUmV0cmlldmVPcHRpb25zKTogUHJvbWlzZTxSZXRyaWV2ZVJlY29yZFtdPjtcbiAgcmV0cmlldmUoaWRzOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXRyaWV2ZU9wdGlvbnMpOiBQcm9taXNlPFJldHJpZXZlUmVjb3JkPjtcbiAgcmV0cmlldmUoXG4gICAgaWRzOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBvcHRpb25zPzogUmV0cmlldmVPcHRpb25zLFxuICApOiBQcm9taXNlPFJldHJpZXZlUmVjb3JkIHwgUmV0cmlldmVSZWNvcmRbXT47XG4gIHJldHJpZXZlKGlkczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbnM/OiBSZXRyaWV2ZU9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXRyaWV2ZSh0aGlzLnR5cGUsIGlkcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHJlY29yZHNcbiAgICovXG4gIHVwZGF0ZShyZWNvcmRzOiBVcGRhdGVSZWNvcmRbXSwgb3B0aW9ucz86IERtbE9wdGlvbnMpOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XG4gIHVwZGF0ZShyZWNvcmRzOiBVcGRhdGVSZWNvcmQsIG9wdGlvbnM/OiBEbWxPcHRpb25zKTogUHJvbWlzZTxTYXZlUmVzdWx0PjtcbiAgdXBkYXRlKFxuICAgIHJlY29yZHM6IFVwZGF0ZVJlY29yZCB8IFVwZGF0ZVJlY29yZFtdLFxuICAgIG9wdGlvbnM/OiBEbWxPcHRpb25zLFxuICApOiBQcm9taXNlPFNhdmVSZXN1bHQgfCBTYXZlUmVzdWx0W10+O1xuICB1cGRhdGUocmVjb3JkczogVXBkYXRlUmVjb3JkIHwgVXBkYXRlUmVjb3JkW10sIG9wdGlvbnM/OiBEbWxPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4udXBkYXRlKHRoaXMudHlwZSwgcmVjb3Jkcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogVXBzZXJ0IHJlY29yZHNcbiAgICovXG4gIHVwc2VydChcbiAgICByZWNvcmRzOiBJbnB1dFJlY29yZFtdLFxuICAgIGV4dElkRmllbGQ6IEZpZWxkTmFtZXMsXG4gICAgb3B0aW9ucz86IERtbE9wdGlvbnMsXG4gICk6IFByb21pc2U8VXBzZXJ0UmVzdWx0W10+O1xuICB1cHNlcnQoXG4gICAgcmVjb3JkczogSW5wdXRSZWNvcmQsXG4gICAgZXh0SWRGaWVsZDogRmllbGROYW1lcyxcbiAgICBvcHRpb25zPzogRG1sT3B0aW9ucyxcbiAgKTogUHJvbWlzZTxVcHNlcnRSZXN1bHQ+O1xuICB1cHNlcnQoXG4gICAgcmVjb3JkczogSW5wdXRSZWNvcmQgfCBJbnB1dFJlY29yZFtdLFxuICAgIGV4dElkRmllbGQ6IEZpZWxkTmFtZXMsXG4gICAgb3B0aW9ucz86IERtbE9wdGlvbnMsXG4gICk6IFByb21pc2U8VXBzZXJ0UmVzdWx0IHwgVXBzZXJ0UmVzdWx0W10+O1xuICB1cHNlcnQoXG4gICAgcmVjb3JkczogSW5wdXRSZWNvcmQgfCBJbnB1dFJlY29yZFtdLFxuICAgIGV4dElkRmllbGQ6IEZpZWxkTmFtZXMsXG4gICAgb3B0aW9ucz86IERtbE9wdGlvbnMsXG4gICkge1xuICAgIHJldHVybiB0aGlzLl9jb25uLnVwc2VydCh0aGlzLnR5cGUsIHJlY29yZHMsIGV4dElkRmllbGQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSByZWNvcmRzXG4gICAqL1xuICBkZXN0cm95KGlkczogc3RyaW5nW10sIG9wdGlvbnM/OiBEbWxPcHRpb25zKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xuICBkZXN0cm95KGlkczogc3RyaW5nLCBvcHRpb25zPzogRG1sT3B0aW9ucyk6IFByb21pc2U8U2F2ZVJlc3VsdD47XG4gIGRlc3Ryb3koXG4gICAgaWRzOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBvcHRpb25zPzogRG1sT3B0aW9ucyxcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0IHwgU2F2ZVJlc3VsdFtdPjtcbiAgZGVzdHJveShpZHM6IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb25zPzogRG1sT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9jb25uLmRlc3Ryb3kodGhpcy50eXBlLCBpZHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgU09iamVjdCNkZXN0cm95KClcbiAgICovXG4gIGRlbGV0ZSA9IHRoaXMuZGVzdHJveTtcblxuICAvKipcbiAgICogU3lub255bSBvZiBTT2JqZWN0I2Rlc3Ryb3koKVxuICAgKi9cbiAgZGVsID0gdGhpcy5kZXN0cm95O1xuXG4gIC8qKlxuICAgKiBDYWxsIEJ1bGsjbG9hZCgpIHRvIGV4ZWN1dGUgYnVsa2xvYWQsIHJldHVybmluZyBiYXRjaCBvYmplY3RcbiAgICovXG4gIGJ1bGtsb2FkKFxuICAgIG9wZXJhdGlvbjogJ2luc2VydCcgfCAndXBkYXRlJyB8ICd1cHNlcnQnIHwgJ2RlbGV0ZScgfCAnaGFyZERlbGV0ZScsXG4gICAgb3B0aW9uc09ySW5wdXQ/OiBPYmplY3QgfCBSZWNvcmRbXSB8IFJlYWRhYmxlIHwgc3RyaW5nLFxuICAgIGlucHV0PzogUmVjb3JkW10gfCBSZWFkYWJsZSB8IHN0cmluZyxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4uYnVsay5sb2FkKHRoaXMudHlwZSwgb3BlcmF0aW9uLCBvcHRpb25zT3JJbnB1dCwgaW5wdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1bGtseSBpbnNlcnQgaW5wdXQgZGF0YSB1c2luZyBidWxrIEFQSVxuICAgKi9cbiAgY3JlYXRlQnVsayhpbnB1dD86IFJlY29yZFtdIHwgUmVhZGFibGUgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5idWxrbG9hZCgnaW5zZXJ0JywgaW5wdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgU09iamVjdCNjcmVhdGVCdWxrKClcbiAgICovXG4gIGluc2VydEJ1bGsgPSB0aGlzLmNyZWF0ZUJ1bGs7XG5cbiAgLyoqXG4gICAqIEJ1bGtseSB1cGRhdGUgcmVjb3JkcyBieSBpbnB1dCBkYXRhIHVzaW5nIGJ1bGsgQVBJXG4gICAqL1xuICB1cGRhdGVCdWxrKGlucHV0PzogUmVjb3JkW10gfCBSZWFkYWJsZSB8IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmJ1bGtsb2FkKCd1cGRhdGUnLCBpbnB1dCk7XG4gIH1cblxuICAvKipcbiAgICogQnVsa2x5IHVwc2VydCByZWNvcmRzIGJ5IGlucHV0IGRhdGEgdXNpbmcgYnVsayBBUElcbiAgICovXG4gIHVwc2VydEJ1bGsoaW5wdXQ/OiBSZWNvcmRbXSB8IFJlYWRhYmxlIHwgc3RyaW5nLCBleHRJZEZpZWxkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVsa2xvYWQoJ3Vwc2VydCcsIHsgZXh0SWRGaWVsZCB9LCBpbnB1dCk7XG4gIH1cblxuICAvKipcbiAgICogQnVsa2x5IGRlbGV0ZSByZWNvcmRzIHNwZWNpZmllZCBieSBpbnB1dCBkYXRhIHVzaW5nIGJ1bGsgQVBJXG4gICAqL1xuICBkZXN0cm95QnVsayhpbnB1dD86IFJlY29yZFtdIHwgUmVhZGFibGUgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5idWxrbG9hZCgnZGVsZXRlJywgaW5wdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgU09iamVjdCNkZXN0cm95QnVsaygpXG4gICAqL1xuICBkZWxldGVCdWxrID0gdGhpcy5kZXN0cm95QnVsaztcblxuICAvKipcbiAgICogQnVsa2x5IGhhcmQgZGVsZXRlIHJlY29yZHMgc3BlY2lmaWVkIGluIGlucHV0IGRhdGEgdXNpbmcgYnVsayBBUElcbiAgICovXG4gIGRlc3Ryb3lIYXJkQnVsayhpbnB1dDogUmVjb3JkW10gfCBSZWFkYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmJ1bGtsb2FkKCdoYXJkRGVsZXRlJywgaW5wdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgU09iamVjdCNkZXN0cm95SGFyZEJ1bGsoKVxuICAgKi9cbiAgZGVsZXRlSGFyZEJ1bGsgPSB0aGlzLmRlc3Ryb3lIYXJkQnVsaztcblxuICAvKipcbiAgICogRGVzY3JpYmUgU09iamVjdCBtZXRhZGF0YVxuICAgKi9cbiAgZGVzY3JpYmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4uZGVzY3JpYmUodGhpcy50eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgZGVzY3JpYmUkKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uLmRlc2NyaWJlJCh0aGlzLnR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBkZXNjcmliZSQkKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uLmRlc2NyaWJlJCQodGhpcy50eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVjb3JkIHJlcHJlc2VudGF0aW9uIGluc3RhbmNlIGJ5IGdpdmVuIGlkXG4gICAqL1xuICByZWNvcmQoaWQ6IHN0cmluZyk6IFJlY29yZFJlZmVyZW5jZTxTLCBOPiB7XG4gICAgcmV0dXJuIG5ldyBSZWNvcmRSZWZlcmVuY2UodGhpcy5fY29ubiwgdGhpcy50eXBlLCBpZCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgcmVjZW50bHkgYWNjZXNzZWQgcmVjb3Jkc1xuICAgKi9cbiAgcmVjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uLnJlY2VudCh0aGlzLnR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSB1cGRhdGVkIHJlY29yZHNcbiAgICovXG4gIHVwZGF0ZWQoc3RhcnQ6IHN0cmluZyB8IERhdGUsIGVuZDogc3RyaW5nIHwgRGF0ZSkge1xuICAgIHJldHVybiB0aGlzLl9jb25uLnVwZGF0ZWQodGhpcy50eXBlLCBzdGFydCwgZW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgZGVsZXRlZCByZWNvcmRzXG4gICAqL1xuICBkZWxldGVkKHN0YXJ0OiBzdHJpbmcgfCBEYXRlLCBlbmQ6IHN0cmluZyB8IERhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5kZWxldGVkKHRoaXMudHlwZSwgc3RhcnQsIGVuZCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmUgbGF5b3V0IGluZm9ybWF0aW9uIGZvciBTT2JqZWN0XG4gICAqL1xuICBhc3luYyBsYXlvdXRzKGxheW91dE5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPERlc2NyaWJlTGF5b3V0UmVzdWx0PiB7XG4gICAgY29uc3QgdXJsID0gYC9zb2JqZWN0cy8ke3RoaXMudHlwZX0vZGVzY3JpYmUvJHtcbiAgICAgIGxheW91dE5hbWUgPyBgbmFtZWRMYXlvdXRzLyR7bGF5b3V0TmFtZX1gIDogJ2xheW91dHMnXG4gICAgfWA7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMuX2Nvbm4ucmVxdWVzdCh1cmwpO1xuICAgIHJldHVybiBib2R5IGFzIERlc2NyaWJlTGF5b3V0UmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IENvbXBhY3RMYXlvdXRJbmZvXG4gICAqIEBwcm9wIHtBcnJheS48T2JqZWN0Pn0gY29tcGFjdExheW91dHMgLSBBcnJheSBvZiBjb21wYWN0IGxheW91dHNcbiAgICogQHByb3Age1N0cmluZ30gZGVmYXVsdENvbXBhY3RMYXlvdXRJZCAtIElEIG9mIGRlZmF1bHQgY29tcGFjdCBsYXlvdXRcbiAgICogQHByb3Age0FycmF5LjxPYmplY3Q+fSByZWNvcmRUeXBlQ29tcGFjdExheW91dE1hcHBpbmdzIC0gQXJyYXkgb2YgcmVjb3JkIHR5cGUgbWFwcGluZ3NcbiAgICovXG4gIC8qKlxuICAgKiBEZXNjcmliZSBjb21wYWN0IGxheW91dCBpbmZvcm1hdGlvbiBkZWZpbmVkIGZvciBTT2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7Q2FsbGJhY2suPENvbXBhY3RMYXlvdXRJbmZvPn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxDb21wYWN0TGF5b3V0SW5mbz59XG4gICAqL1xuICBhc3luYyBjb21wYWN0TGF5b3V0cygpOiBQcm9taXNlPERlc2NyaWJlQ29tcGFjdExheW91dHNSZXN1bHQ+IHtcbiAgICBjb25zdCB1cmwgPSBgL3NvYmplY3RzLyR7dGhpcy50eXBlfS9kZXNjcmliZS9jb21wYWN0TGF5b3V0c2A7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMuX2Nvbm4ucmVxdWVzdCh1cmwpO1xuICAgIHJldHVybiBib2R5IGFzIERlc2NyaWJlQ29tcGFjdExheW91dHNSZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmUgY29tcGFjdCBsYXlvdXQgaW5mb3JtYXRpb24gZGVmaW5lZCBmb3IgU09iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge0NhbGxiYWNrLjxBcHByb3ZhbExheW91dEluZm8+fSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICogQHJldHVybnMge1Byb21pc2UuPEFwcHJvdmFsTGF5b3V0SW5mbz59XG4gICAqL1xuICBhc3luYyBhcHByb3ZhbExheW91dHMoKTogUHJvbWlzZTxEZXNjcmliZUFwcHJvdmFsTGF5b3V0c1Jlc3VsdD4ge1xuICAgIGNvbnN0IHVybCA9IGAvc29iamVjdHMvJHt0aGlzLnR5cGV9L2Rlc2NyaWJlL2FwcHJvdmFsTGF5b3V0c2A7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMuX2Nvbm4ucmVxdWVzdCh1cmwpO1xuICAgIHJldHVybiBib2R5IGFzIERlc2NyaWJlQXBwcm92YWxMYXlvdXRzUmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW5kIGZldGNoIHJlY29yZHMgd2hpY2ggbWF0Y2hlcyBnaXZlbiBjb25kaXRpb25zXG4gICAqL1xuICBmaW5kPFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQ+KFxuICAgIGNvbmRpdGlvbnM/OiBPcHRpb25hbDxRdWVyeUNvbmRpdGlvbjxTLCBOPj4sXG4gICk6IFF1ZXJ5PFMsIE4sIFNPYmplY3RSZWNvcmQ8UywgTiwgJyonLCBSPiwgJ1JlY29yZHMnPjtcbiAgZmluZDxcbiAgICBSIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkLFxuICAgIEZQIGV4dGVuZHMgRmllbGRQYXRoU3BlY2lmaWVyPFMsIE4+ID0gRmllbGRQYXRoU3BlY2lmaWVyPFMsIE4+LFxuICAgIEZQQyBleHRlbmRzIEZpZWxkUHJvamVjdGlvbkNvbmZpZyA9IEZpZWxkUGF0aFNjb3BlZFByb2plY3Rpb248UywgTiwgRlA+XG4gID4oXG4gICAgY29uZGl0aW9uczogT3B0aW9uYWw8UXVlcnlDb25kaXRpb248UywgTj4+LFxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgTiwgRlA+PixcbiAgICBvcHRpb25zPzogRmluZE9wdGlvbnM8UywgTj4sXG4gICk6IFF1ZXJ5PFMsIE4sIFNPYmplY3RSZWNvcmQ8UywgTiwgRlBDLCBSPiwgJ1JlY29yZHMnPjtcbiAgZmluZChcbiAgICBjb25kaXRpb25zPzogT3B0aW9uYWw8UXVlcnlDb25kaXRpb248UywgTj4+LFxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgTiwgRmllbGRQYXRoU3BlY2lmaWVyPFMsIE4+Pj4sXG4gICAgb3B0aW9uczogRmluZE9wdGlvbnM8UywgTj4gPSB7fSxcbiAgKTogUXVlcnk8UywgTiwgYW55LCAnUmVjb3Jkcyc+IHtcbiAgICBjb25zdCB7IHNvcnQsIGxpbWl0LCBvZmZzZXQsIC4uLnFvcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGNvbmZpZzogUXVlcnlDb25maWc8UywgTj4gPSB7XG4gICAgICBmaWVsZHM6IGZpZWxkcyA9PSBudWxsID8gdW5kZWZpbmVkIDogZmllbGRzLFxuICAgICAgaW5jbHVkZXM6IG9wdGlvbnMuaW5jbHVkZXMsXG4gICAgICB0YWJsZTogdGhpcy50eXBlLFxuICAgICAgY29uZGl0aW9uczogY29uZGl0aW9ucyA9PSBudWxsID8gdW5kZWZpbmVkIDogY29uZGl0aW9ucyxcbiAgICAgIHNvcnQsXG4gICAgICBsaW1pdCxcbiAgICAgIG9mZnNldCxcbiAgICB9O1xuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5PFMsIE4+KHRoaXMuX2Nvbm4sIGNvbmZpZywgcW9wdGlvbnMpO1xuICAgIHJldHVybiBxdWVyeS5zZXRSZXNwb25zZVRhcmdldChSZXNwb25zZVRhcmdldHMuUmVjb3Jkcyk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggb25lIHJlY29yZCB3aGljaCBtYXRjaGVzIGdpdmVuIGNvbmRpdGlvbnNcbiAgICovXG4gIGZpbmRPbmU8UiBleHRlbmRzIFJlY29yZCA9IFJlY29yZD4oXG4gICAgY29uZGl0aW9ucz86IE9wdGlvbmFsPFF1ZXJ5Q29uZGl0aW9uPFMsIE4+PixcbiAgKTogUXVlcnk8UywgTiwgU09iamVjdFJlY29yZDxTLCBOLCAnKicsIFI+LCAnU2luZ2xlUmVjb3JkJz47XG4gIGZpbmRPbmU8XG4gICAgUiBleHRlbmRzIFJlY29yZCA9IFJlY29yZCxcbiAgICBGUCBleHRlbmRzIEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPiA9IEZpZWxkUGF0aFNwZWNpZmllcjxTLCBOPixcbiAgICBGUEMgZXh0ZW5kcyBGaWVsZFByb2plY3Rpb25Db25maWcgPSBGaWVsZFBhdGhTY29wZWRQcm9qZWN0aW9uPFMsIE4sIEZQPlxuICA+KFxuICAgIGNvbmRpdGlvbnM6IE9wdGlvbmFsPFF1ZXJ5Q29uZGl0aW9uPFMsIE4+PixcbiAgICBmaWVsZHM/OiBPcHRpb25hbDxRdWVyeUZpZWxkPFMsIE4sIEZQPj4sXG4gICAgb3B0aW9ucz86IEZpbmRPcHRpb25zPFMsIE4+LFxuICApOiBRdWVyeTxTLCBOLCBTT2JqZWN0UmVjb3JkPFMsIE4sIEZQQywgUj4sICdTaW5nbGVSZWNvcmQnPjtcbiAgZmluZE9uZShcbiAgICBjb25kaXRpb25zPzogT3B0aW9uYWw8UXVlcnlDb25kaXRpb248UywgTj4+LFxuICAgIGZpZWxkcz86IE9wdGlvbmFsPFF1ZXJ5RmllbGQ8UywgTiwgRmllbGRQYXRoU3BlY2lmaWVyPFMsIE4+Pj4sXG4gICAgb3B0aW9uczogRmluZE9wdGlvbnM8UywgTj4gPSB7fSxcbiAgKTogUXVlcnk8UywgTiwgYW55LCAnU2luZ2xlUmVjb3JkJz4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5maW5kKGNvbmRpdGlvbnMsIGZpZWxkcywgeyAuLi5vcHRpb25zLCBsaW1pdDogMSB9KTtcbiAgICByZXR1cm4gcXVlcnkuc2V0UmVzcG9uc2VUYXJnZXQoUmVzcG9uc2VUYXJnZXRzLlNpbmdsZVJlY29yZCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbmQgZmV0Y2ggcmVjb3JkcyBvbmx5IGJ5IHNwZWNpZnlpbmcgZmllbGRzIHRvIGZldGNoLlxuICAgKi9cbiAgc2VsZWN0PFxuICAgIFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQsXG4gICAgRlAgZXh0ZW5kcyBGaWVsZFBhdGhTcGVjaWZpZXI8UywgTj4gPSBGaWVsZFBhdGhTcGVjaWZpZXI8UywgTj4sXG4gICAgRlBDIGV4dGVuZHMgRmllbGRQcm9qZWN0aW9uQ29uZmlnID0gRmllbGRQYXRoU2NvcGVkUHJvamVjdGlvbjxTLCBOLCBGUD5cbiAgPihcbiAgICBmaWVsZHM6IFF1ZXJ5RmllbGQ8UywgTiwgRlA+LFxuICApOiBRdWVyeTxTLCBOLCBTT2JqZWN0UmVjb3JkPFMsIE4sIEZQQywgUj4sICdSZWNvcmRzJz4ge1xuICAgIHJldHVybiB0aGlzLmZpbmQobnVsbCwgZmllbGRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3VudCBudW0gb2YgcmVjb3JkcyB3aGljaCBtYXRjaGVzIGdpdmVuIGNvbmRpdGlvbnNcbiAgICovXG4gIGNvdW50KGNvbmRpdGlvbnM/OiBPcHRpb25hbDxRdWVyeUNvbmRpdGlvbjxTLCBOPj4pIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuZmluZChjb25kaXRpb25zLCAnY291bnQoKScpO1xuICAgIHJldHVybiBxdWVyeS5zZXRSZXNwb25zZVRhcmdldChSZXNwb25zZVRhcmdldHMuQ291bnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbGlzdCB2aWV3cyBmb3IgdGhlIFNPYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtDYWxsYmFjay48TGlzdFZpZXdzSW5mbz59IFtjYWxsYmFja10gLSBDYWxsYmFjayBmdW5jdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48TGlzdFZpZXdzSW5mbz59XG4gICAqL1xuICBsaXN0dmlld3MoKSB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5fY29ubi5fYmFzZVVybCgpfS9zb2JqZWN0cy8ke3RoaXMudHlwZX0vbGlzdHZpZXdzYDtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0KHVybCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGlzdCB2aWV3IGluZm8gaW4gc3BlY2lmZWQgdmlldyBpZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBMaXN0IHZpZXcgSURcbiAgICogQHJldHVybnMge0xpc3RWaWV3fVxuICAgKi9cbiAgbGlzdHZpZXcoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgTGlzdFZpZXcodGhpcy5fY29ubiwgdGhpcy50eXBlLCBpZCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCByZWdpc3RlcmVkIHF1aWNrIGFjdGlvbnMgZm9yIHRoZSBTT2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7Q2FsbGJhY2suPEFycmF5LjxRdWlja0FjdGlvbn5RdWlja0FjdGlvbkluZm8+Pn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxBcnJheS48UXVpY2tBY3Rpb25+UXVpY2tBY3Rpb25JbmZvPj59XG4gICAqL1xuICBxdWlja0FjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdChgL3NvYmplY3RzLyR7dGhpcy50eXBlfS9xdWlja0FjdGlvbnNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVmZXJlbmNlIGZvciBzcGVjaWZpZWQgcXVpY2sgYWNpdG9uIGluIHRoZSBTT2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25OYW1lIC0gTmFtZSBvZiB0aGUgcXVpY2sgYWN0aW9uXG4gICAqIEByZXR1cm5zIHtRdWlja0FjdGlvbn1cbiAgICovXG4gIHF1aWNrQWN0aW9uKGFjdGlvbk5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUXVpY2tBY3Rpb24oXG4gICAgICB0aGlzLl9jb25uLFxuICAgICAgYC9zb2JqZWN0cy8ke3RoaXMudHlwZX0vcXVpY2tBY3Rpb25zLyR7YWN0aW9uTmFtZX1gLFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGNsYXNzIGZvciBvcmdhbml6aW5nIGxpc3QgdmlldyBpbmZvcm1hdGlvblxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEBjbGFzcyBMaXN0Vmlld1xuICogQHBhcmFtIHtDb25uZWN0aW9ufSBjb25uIC0gQ29ubmVjdGlvbiBpbnN0YW5jZVxuICogQHBhcmFtIHtTT2JqZWN0fSB0eXBlIC0gU09iamVjdCB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBMaXN0IHZpZXcgSURcbiAqL1xuY2xhc3MgTGlzdFZpZXcge1xuICBfY29ubjogQ29ubmVjdGlvbjtcbiAgdHlwZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbiwgdHlwZTogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29ubiA9IGNvbm47XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgcXVlcnkgZm9yIHRoZSBsaXN0IHZpZXcgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBkYXRhIGFuZCBwcmVzZW50YXRpb24gaW5mb3JtYXRpb24uXG4gICAqL1xuICByZXN1bHRzKCkge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuX2Nvbm4uX2Jhc2VVcmwoKX0vc29iamVjdHMvJHt0aGlzLnR5cGV9L2xpc3R2aWV3cy8ke1xuICAgICAgdGhpcy5pZFxuICAgIH0vcmVzdWx0c2A7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgYSBsaXN0IHZpZXdcbiAgICovXG4gIGRlc2NyaWJlKG9wdGlvbnM6IHsgaGVhZGVycz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9IH0gPSB7fSkge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuX2Nvbm4uX2Jhc2VVcmwoKX0vc29iamVjdHMvJHt0aGlzLnR5cGV9L2xpc3R2aWV3cy8ke1xuICAgICAgdGhpcy5pZFxuICAgIH0vZGVzY3JpYmVgO1xuICAgIHJldHVybiB0aGlzLl9jb25uLnJlcXVlc3QoeyBtZXRob2Q6ICdHRVQnLCB1cmwsIGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBsYWluIHBsYW4gZm9yIGV4ZWN1dGluZyBsaXN0IHZpZXdcbiAgICovXG4gIGV4cGxhaW4oKSB7XG4gICAgY29uc3QgdXJsID0gYC9xdWVyeS8/ZXhwbGFpbj0ke3RoaXMuaWR9YDtcbiAgICByZXR1cm4gdGhpcy5fY29ubi5yZXF1ZXN0PGFueT4odXJsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTT2JqZWN0O1xuXG4vLyBUT0RPIEJ1bGtcbiJdfQ==