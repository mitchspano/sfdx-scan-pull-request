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

exports.default = exports.RecordReference = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 *
 */

/**
 * Remote reference to record information
 */
class RecordReference {
  /**
   *
   */
  constructor(conn, type, id) {
    (0, _defineProperty2.default)(this, "type", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "delete", this.destroy);
    (0, _defineProperty2.default)(this, "del", this.destroy);
    this._conn = conn;
    this.type = type;
    this.id = id;
  }
  /**
   * Retrieve record field information
   */


  async retrieve(options) {
    const rec = await this._conn.retrieve(this.type, this.id, options);
    return rec;
  }
  /**
   * Update record field information
   */


  async update(record, options) {
    const record_ = _objectSpread(_objectSpread({}, record), {}, {
      Id: this.id
    });

    return this._conn.update(this.type, record_, options);
  }
  /**
   * Delete record field
   */


  destroy(options) {
    return this._conn.destroy(this.type, this.id, options);
  }
  /**
   * Synonym of Record#destroy()
   */


  /**
   * Get blob field as stream
   *
   * @param {String} fieldName - Blob field name
   * @returns {stream.Stream}
   */
  blob(fieldName) {
    const url = [this._conn._baseUrl(), 'sobjects', this.type, this.id, fieldName].join('/');
    return this._conn.request(url).stream();
  }

}

exports.RecordReference = RecordReference;
var _default = RecordReference;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWNvcmQtcmVmZXJlbmNlLnRzIl0sIm5hbWVzIjpbIlJlY29yZFJlZmVyZW5jZSIsImNvbnN0cnVjdG9yIiwiY29ubiIsInR5cGUiLCJpZCIsImRlc3Ryb3kiLCJfY29ubiIsInJldHJpZXZlIiwib3B0aW9ucyIsInJlYyIsInVwZGF0ZSIsInJlY29yZCIsInJlY29yZF8iLCJJZCIsImJsb2IiLCJmaWVsZE5hbWUiLCJ1cmwiLCJfYmFzZVVybCIsImpvaW4iLCJyZXF1ZXN0Iiwic3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVdBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLGVBQU4sQ0FLTDtBQUtBO0FBQ0Y7QUFDQTtBQUNFQyxFQUFBQSxXQUFXLENBQUNDLElBQUQsRUFBc0JDLElBQXRCLEVBQStCQyxFQUEvQixFQUEyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQWdDN0MsS0FBS0MsT0FoQ3dDO0FBQUEsK0NBcUNoRCxLQUFLQSxPQXJDMkM7QUFDcEQsU0FBS0MsS0FBTCxHQUFhSixJQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsRUFBTCxHQUFVQSxFQUFWO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQUNFLFFBQU1HLFFBQU4sQ0FBZUMsT0FBZixFQUEwQztBQUN4QyxVQUFNQyxHQUFHLEdBQUcsTUFBTSxLQUFLSCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsS0FBS0osSUFBekIsRUFBK0IsS0FBS0MsRUFBcEMsRUFBd0NJLE9BQXhDLENBQWxCO0FBQ0EsV0FBT0MsR0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxRQUFNQyxNQUFOLENBQWFDLE1BQWIsRUFBa0NILE9BQWxDLEVBQXdEO0FBQ3RELFVBQU1JLE9BQU8sbUNBQVFELE1BQVI7QUFBZ0JFLE1BQUFBLEVBQUUsRUFBRSxLQUFLVDtBQUF6QixNQUFiOztBQUNBLFdBQU8sS0FBS0UsS0FBTCxDQUFXSSxNQUFYLENBQWtCLEtBQUtQLElBQXZCLEVBQTZCUyxPQUE3QixFQUFzQ0osT0FBdEMsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRUgsRUFBQUEsT0FBTyxDQUFDRyxPQUFELEVBQXVCO0FBQzVCLFdBQU8sS0FBS0YsS0FBTCxDQUFXRCxPQUFYLENBQW1CLEtBQUtGLElBQXhCLEVBQThCLEtBQUtDLEVBQW5DLEVBQXVDSSxPQUF2QyxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQVFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFTSxFQUFBQSxJQUFJLENBQUNDLFNBQUQsRUFBb0I7QUFDdEIsVUFBTUMsR0FBRyxHQUFHLENBQ1YsS0FBS1YsS0FBTCxDQUFXVyxRQUFYLEVBRFUsRUFFVixVQUZVLEVBR1YsS0FBS2QsSUFISyxFQUlWLEtBQUtDLEVBSkssRUFLVlcsU0FMVSxFQU1WRyxJQU5VLENBTUwsR0FOSyxDQUFaO0FBT0EsV0FBTyxLQUFLWixLQUFMLENBQVdhLE9BQVgsQ0FBbUJILEdBQW5CLEVBQXdCSSxNQUF4QixFQUFQO0FBQ0Q7O0FBOUREOzs7ZUFpRWFwQixlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICovXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHtcbiAgUmV0cmlldmVPcHRpb25zLFxuICBEbWxPcHRpb25zLFxuICBTY2hlbWEsXG4gIFNPYmplY3ROYW1lcyxcbiAgU09iamVjdElucHV0UmVjb3JkLFxuICBTT2JqZWN0VXBkYXRlUmVjb3JkLFxufSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBSZW1vdGUgcmVmZXJlbmNlIHRvIHJlY29yZCBpbmZvcm1hdGlvblxuICovXG5leHBvcnQgY2xhc3MgUmVjb3JkUmVmZXJlbmNlPFxuICBTIGV4dGVuZHMgU2NoZW1hLFxuICBOIGV4dGVuZHMgU09iamVjdE5hbWVzPFM+LFxuICBJbnB1dFJlY29yZCBleHRlbmRzIFNPYmplY3RJbnB1dFJlY29yZDxTLCBOPiA9IFNPYmplY3RJbnB1dFJlY29yZDxTLCBOPixcbiAgUmV0cmlldmVSZWNvcmQgZXh0ZW5kcyBTT2JqZWN0VXBkYXRlUmVjb3JkPFMsIE4+ID0gU09iamVjdFVwZGF0ZVJlY29yZDxTLCBOPlxuPiB7XG4gIHR5cGU6IE47XG4gIGlkOiBzdHJpbmc7XG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbjxTPiwgdHlwZTogTiwgaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHJlY29yZCBmaWVsZCBpbmZvcm1hdGlvblxuICAgKi9cbiAgYXN5bmMgcmV0cmlldmUob3B0aW9ucz86IFJldHJpZXZlT3B0aW9ucykge1xuICAgIGNvbnN0IHJlYyA9IGF3YWl0IHRoaXMuX2Nvbm4ucmV0cmlldmUodGhpcy50eXBlLCB0aGlzLmlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVjIGFzIFJldHJpZXZlUmVjb3JkO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSByZWNvcmQgZmllbGQgaW5mb3JtYXRpb25cbiAgICovXG4gIGFzeW5jIHVwZGF0ZShyZWNvcmQ6IElucHV0UmVjb3JkLCBvcHRpb25zPzogRG1sT3B0aW9ucykge1xuICAgIGNvbnN0IHJlY29yZF8gPSB7IC4uLnJlY29yZCwgSWQ6IHRoaXMuaWQgfTtcbiAgICByZXR1cm4gdGhpcy5fY29ubi51cGRhdGUodGhpcy50eXBlLCByZWNvcmRfLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgcmVjb3JkIGZpZWxkXG4gICAqL1xuICBkZXN0cm95KG9wdGlvbnM/OiBEbWxPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4uZGVzdHJveSh0aGlzLnR5cGUsIHRoaXMuaWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bm9ueW0gb2YgUmVjb3JkI2Rlc3Ryb3koKVxuICAgKi9cbiAgZGVsZXRlID0gdGhpcy5kZXN0cm95O1xuXG4gIC8qKlxuICAgKiBTeW5vbnltIG9mIFJlY29yZCNkZXN0cm95KClcbiAgICovXG4gIGRlbCA9IHRoaXMuZGVzdHJveTtcblxuICAvKipcbiAgICogR2V0IGJsb2IgZmllbGQgYXMgc3RyZWFtXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZE5hbWUgLSBCbG9iIGZpZWxkIG5hbWVcbiAgICogQHJldHVybnMge3N0cmVhbS5TdHJlYW19XG4gICAqL1xuICBibG9iKGZpZWxkTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsID0gW1xuICAgICAgdGhpcy5fY29ubi5fYmFzZVVybCgpLFxuICAgICAgJ3NvYmplY3RzJyxcbiAgICAgIHRoaXMudHlwZSxcbiAgICAgIHRoaXMuaWQsXG4gICAgICBmaWVsZE5hbWUsXG4gICAgXS5qb2luKCcvJyk7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm4ucmVxdWVzdCh1cmwpLnN0cmVhbSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZFJlZmVyZW5jZTtcbiJdfQ==