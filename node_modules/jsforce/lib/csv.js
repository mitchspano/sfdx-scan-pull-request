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

exports.parseCSV = parseCSV;
exports.toCSV = toCSV;
exports.parseCSVStream = parseCSVStream;
exports.serializeCSVStream = serializeCSVStream;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _es = _interopRequireDefault(require("csv-parse/lib/es5"));

var _sync = _interopRequireDefault(require("csv-parse/lib/es5/sync"));

var _es2 = _interopRequireDefault(require("csv-stringify/lib/es5"));

var _sync2 = _interopRequireDefault(require("csv-stringify/lib/es5/sync"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @private
 */
function parseCSV(str, options) {
  return (0, _sync.default)(str, _objectSpread(_objectSpread({}, options), {}, {
    columns: true
  }));
}
/**
 * @private
 */


function toCSV(records, options) {
  return (0, _sync2.default)(records, _objectSpread(_objectSpread({}, options), {}, {
    header: true
  }));
}
/**
 * @private
 */


function parseCSVStream(options) {
  return (0, _es.default)(_objectSpread(_objectSpread({}, options), {}, {
    columns: true
  }));
}
/**
 * @private
 */


function serializeCSVStream(options) {
  return (0, _es2.default)(_objectSpread(_objectSpread({}, options), {}, {
    header: true
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jc3YudHMiXSwibmFtZXMiOlsicGFyc2VDU1YiLCJzdHIiLCJvcHRpb25zIiwiY29sdW1ucyIsInRvQ1NWIiwicmVjb3JkcyIsImhlYWRlciIsInBhcnNlQ1NWU3RyZWFtIiwic2VyaWFsaXplQ1NWU3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQStCQyxPQUEvQixFQUE4RDtBQUNuRSxTQUFPLG1CQUFhRCxHQUFiLGtDQUF1QkMsT0FBdkI7QUFBZ0NDLElBQUFBLE9BQU8sRUFBRTtBQUF6QyxLQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLEtBQVQsQ0FBZUMsT0FBZixFQUFrQ0gsT0FBbEMsRUFBbUU7QUFDeEUsU0FBTyxvQkFBaUJHLE9BQWpCLGtDQUErQkgsT0FBL0I7QUFBd0NJLElBQUFBLE1BQU0sRUFBRTtBQUFoRCxLQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLGNBQVQsQ0FBd0JMLE9BQXhCLEVBQXdEO0FBQzdELFNBQU8saURBQWNBLE9BQWQ7QUFBdUJDLElBQUFBLE9BQU8sRUFBRTtBQUFoQyxLQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNLLGtCQUFULENBQTRCTixPQUE1QixFQUFnRTtBQUNyRSxTQUFPLGtEQUFrQkEsT0FBbEI7QUFBMkJJLElBQUFBLE1BQU0sRUFBRTtBQUFuQyxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKi9cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ3N0cmVhbSc7XG5pbXBvcnQgY3N2UGFyc2UsIHsgT3B0aW9ucyBhcyBQYXJzZU9wdHMgfSBmcm9tICdjc3YtcGFyc2UvbGliL2VzNSc7XG5pbXBvcnQgY3N2UGFyc2VTeW5jIGZyb20gJ2Nzdi1wYXJzZS9saWIvZXM1L3N5bmMnO1xuaW1wb3J0IGNzdlN0cmluZ2lmeSwgeyBPcHRpb25zIGFzIFN0cmluZ2lmeU9wdHMgfSBmcm9tICdjc3Ytc3RyaW5naWZ5L2xpYi9lczUnO1xuaW1wb3J0IGNzdlN0cmluZ2lmeVN5bmMgZnJvbSAnY3N2LXN0cmluZ2lmeS9saWIvZXM1L3N5bmMnO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNTVihzdHI6IHN0cmluZywgb3B0aW9ucz86IFBhcnNlT3B0cyk6IE9iamVjdFtdIHtcbiAgcmV0dXJuIGNzdlBhcnNlU3luYyhzdHIsIHsgLi4ub3B0aW9ucywgY29sdW1uczogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9DU1YocmVjb3JkczogT2JqZWN0W10sIG9wdGlvbnM/OiBTdHJpbmdpZnlPcHRzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNzdlN0cmluZ2lmeVN5bmMocmVjb3JkcywgeyAuLi5vcHRpb25zLCBoZWFkZXI6IHRydWUgfSk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ1NWU3RyZWFtKG9wdGlvbnM/OiBQYXJzZU9wdHMpOiBUcmFuc2Zvcm0ge1xuICByZXR1cm4gY3N2UGFyc2UoeyAuLi5vcHRpb25zLCBjb2x1bW5zOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVDU1ZTdHJlYW0ob3B0aW9ucz86IFN0cmluZ2lmeU9wdHMpOiBUcmFuc2Zvcm0ge1xuICByZXR1cm4gY3N2U3RyaW5naWZ5KHsgLi4ub3B0aW9ucywgaGVhZGVyOiB0cnVlIH0pO1xufVxuIl19