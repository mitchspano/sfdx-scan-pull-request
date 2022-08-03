"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.string.replace");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Parsable = exports.Serializable = exports.RecordStream = void 0;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _stream = require("stream");

var _csv = require("./csv");

var _stream2 = require("./util/stream");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @private
 */
function evalMapping(value, mapping) {
  if (typeof value === 'string') {
    const m = /^\$\{(\w+)\}$/.exec(value);

    if (m) {
      return mapping[m[1]];
    }

    return value.replace(/\$\{(\w+)\}/g, ($0, prop) => {
      const v = mapping[prop];
      return typeof v === 'undefined' || v === null ? '' : String(v);
    });
  }

  return value;
}
/**
 * @private
 */


function convertRecordForSerialization(record, options = {}) {
  var _context;

  return (0, _reduce.default)(_context = (0, _keys.default)(record)).call(_context, (rec, key) => {
    const value = rec[key];
    let urec;

    if (key === 'attributes') {
      // 'attributes' prop will be ignored
      urec = _objectSpread({}, rec);
      delete urec[key];
      return urec;
    } else if (options.nullValue && value === null) {
      return _objectSpread(_objectSpread({}, rec), {}, {
        [key]: options.nullValue
      });
    } else if (value !== null && typeof value === 'object') {
      var _context2;

      const precord = convertRecordForSerialization(value, options);
      return (0, _reduce.default)(_context2 = (0, _keys.default)(precord)).call(_context2, (prec, pkey) => {
        prec[`${key}.${pkey}`] = precord[pkey]; // eslint-disable-line no-param-reassign

        return prec;
      }, _objectSpread({}, rec));
    }

    return rec;
  }, record);
}
/**
 * @private
 */


function createPipelineStream(s1, s2) {
  s1.pipe(s2);
  return (0, _stream2.concatStreamsAsDuplex)(s1, s2, {
    writableObjectMode: true
  });
}

/**
 * @private
 */
const CSVStreamConverter = {
  serialize(options = {}) {
    const {
      nullValue
    } = options,
          csvOpts = (0, _objectWithoutProperties2.default)(options, ["nullValue"]);
    return createPipelineStream( // eslint-disable-next-line no-use-before-define
    (0, _map.default)(RecordStream).call(RecordStream, record => convertRecordForSerialization(record, options)), (0, _csv.serializeCSVStream)(csvOpts));
  },

  parse(options = {}) {
    return (0, _csv.parseCSVStream)(options);
  }

};
/**
 * @private
 */

const DataStreamConverters = {
  csv: CSVStreamConverter
};
/**
 * Class for Record Stream
 *
 * @class
 * @constructor
 * @extends stream.Transform
 */

class RecordStream extends _stream.PassThrough {
  /**
   *
   */
  constructor() {
    super({
      objectMode: true
    });
    (0, _defineProperty2.default)(this, "addListener", this.on);
  }
  /**
   * Get record stream of queried records applying the given mapping function
   */


  map(fn) {
    return this.pipe((0, _map.default)(RecordStream).call(RecordStream, fn));
  }
  /**
   * Get record stream of queried records, applying the given filter function
   */


  filter(fn) {
    return this.pipe((0, _filter.default)(RecordStream).call(RecordStream, fn));
  }
  /* @override */


  on(ev, fn) {
    return super.on(ev === 'record' ? 'data' : ev, fn);
  }
  /* @override */


  /* --------------------------------------------------- */

  /**
   * Create a record stream which maps records and pass them to downstream
   */
  static map(fn) {
    const mapStream = new _stream.Transform({
      objectMode: true,

      transform(record, enc, callback) {
        const rec = fn(record) || record; // if not returned record, use same record

        mapStream.push(rec);
        callback();
      }

    });
    return mapStream;
  }
  /**
   * Create mapping stream using given record template
   */


  static recordMapStream(record, noeval) {
    return (0, _map.default)(RecordStream).call(RecordStream, rec => {
      const mapped = {
        Id: rec.Id
      };

      for (const prop of (0, _keys.default)(record)) {
        mapped[prop] = noeval ? record[prop] : evalMapping(record[prop], rec);
      }

      return mapped;
    });
  }
  /**
   * Create a record stream which filters records and pass them to downstream
   *
   * @param {RecordFilterFunction} fn - Record filtering function
   * @returns {RecordStream.Serializable}
   */


  static filter(fn) {
    const filterStream = new _stream.Transform({
      objectMode: true,

      transform(record, enc, callback) {
        if (fn(record)) {
          filterStream.push(record);
        }

        callback();
      }

    });
    return filterStream;
  }

}
/**
 * @class RecordStream.Serializable
 * @extends {RecordStream}
 */


exports.RecordStream = RecordStream;

class Serializable extends RecordStream {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "_dataStreams", {});
  }

  /**
   * Get readable data stream which emits serialized record data
   */
  stream(type = 'csv', options = {}) {
    if (this._dataStreams[type]) {
      return this._dataStreams[type];
    }

    const converter = DataStreamConverters[type];

    if (!converter) {
      throw new Error(`Converting [${type}] data stream is not supported.`);
    }

    const dataStream = new _stream.PassThrough();
    this.pipe(converter.serialize(options)).pipe(dataStream);
    this._dataStreams[type] = dataStream;
    return dataStream;
  }

}
/**
 * @class RecordStream.Parsable
 * @extends {RecordStream}
 */


exports.Serializable = Serializable;

class Parsable extends RecordStream {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "_dataStreams", {});
    (0, _defineProperty2.default)(this, "_execParse", false);
    (0, _defineProperty2.default)(this, "_incomings", []);
    (0, _defineProperty2.default)(this, "addListener", this.on);
  }

  /**
   * Get writable data stream which accepts serialized record data
   */
  stream(type = 'csv', options = {}) {
    if (this._dataStreams[type]) {
      return this._dataStreams[type];
    }

    const converter = DataStreamConverters[type];

    if (!converter) {
      throw new Error(`Converting [${type}] data stream is not supported.`);
    }

    const dataStream = new _stream.PassThrough();
    const parserStream = converter.parse(options);
    parserStream.on('error', err => this.emit('error', err));
    parserStream.pipe(this).pipe(new _stream.PassThrough({
      objectMode: true,
      highWaterMark: 500 * 1000
    }));

    if (this._execParse) {
      dataStream.pipe(parserStream);
    } else {
      this._incomings.push([dataStream, parserStream]);
    }

    this._dataStreams[type] = dataStream;
    return dataStream;
  }
  /* @override */


  on(ev, fn) {
    if (ev === 'readable' || ev === 'record') {
      if (!this._execParse) {
        this._execParse = true;

        for (const [dataStream, parserStream] of this._incomings) {
          dataStream.pipe(parserStream);
        }
      }
    }

    return super.on(ev, fn);
  }
  /* @override */


}

exports.Parsable = Parsable;
var _default = RecordStream;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWNvcmQtc3RyZWFtLnRzIl0sIm5hbWVzIjpbImV2YWxNYXBwaW5nIiwidmFsdWUiLCJtYXBwaW5nIiwibSIsImV4ZWMiLCJyZXBsYWNlIiwiJDAiLCJwcm9wIiwidiIsIlN0cmluZyIsImNvbnZlcnRSZWNvcmRGb3JTZXJpYWxpemF0aW9uIiwicmVjb3JkIiwib3B0aW9ucyIsInJlYyIsImtleSIsInVyZWMiLCJudWxsVmFsdWUiLCJwcmVjb3JkIiwicHJlYyIsInBrZXkiLCJjcmVhdGVQaXBlbGluZVN0cmVhbSIsInMxIiwiczIiLCJwaXBlIiwid3JpdGFibGVPYmplY3RNb2RlIiwiQ1NWU3RyZWFtQ29udmVydGVyIiwic2VyaWFsaXplIiwiY3N2T3B0cyIsIlJlY29yZFN0cmVhbSIsInBhcnNlIiwiRGF0YVN0cmVhbUNvbnZlcnRlcnMiLCJjc3YiLCJQYXNzVGhyb3VnaCIsImNvbnN0cnVjdG9yIiwib2JqZWN0TW9kZSIsIm9uIiwibWFwIiwiZm4iLCJmaWx0ZXIiLCJldiIsIm1hcFN0cmVhbSIsIlRyYW5zZm9ybSIsInRyYW5zZm9ybSIsImVuYyIsImNhbGxiYWNrIiwicHVzaCIsInJlY29yZE1hcFN0cmVhbSIsIm5vZXZhbCIsIm1hcHBlZCIsIklkIiwiZmlsdGVyU3RyZWFtIiwiU2VyaWFsaXphYmxlIiwic3RyZWFtIiwidHlwZSIsIl9kYXRhU3RyZWFtcyIsImNvbnZlcnRlciIsIkVycm9yIiwiZGF0YVN0cmVhbSIsIlBhcnNhYmxlIiwicGFyc2VyU3RyZWFtIiwiZXJyIiwiZW1pdCIsImhpZ2hXYXRlck1hcmsiLCJfZXhlY1BhcnNlIiwiX2luY29taW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBRUE7O0FBQ0E7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWlDQyxPQUFqQyxFQUFzRTtBQUNwRSxNQUFJLE9B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Q3hDLFVBQUksQ0FBQyxLQUFLd0IsVUFBVixFQUFzQjtBQUNwQixhQUFLQSxVQUFMLEdBQWtCLElBQWxCOztBQUNBLGFBQUssTUFBTSxDQUFDTixVQUFELEVBQWFFLFlBQWIsQ0FBWCxJQUF5QyxLQUFLSyxVQUE5QyxFQUEwRDtBQUN4RFAsVUFBQUEsVUFBVSxDQUFDbEMsSUFBWCxDQUFnQm9DLFlBQWhCO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFdBQU8sTUFBTXhCLEVBQU4sQ0FBU0ksRUFBVCxFQUFhRixFQUFiLENBQVA7QUFDRDtBQUVEOzs7QUE1Q3VFOzs7ZUFnRDFEVCxZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBSZXByZXNlbnRzIHN0cmVhbSB0aGF0IGhhbmRsZXMgU2FsZXNmb3JjZSByZWNvcmQgYXMgc3RyZWFtIGRhdGFcbiAqIEBhdXRob3IgU2hpbmljaGkgVG9taXRhIDxzaGluaWNoaS50b21pdGFAZ21haWwuY29tPlxuICovXG5pbXBvcnQgeyBSZWFkYWJsZSwgV3JpdGFibGUsIER1cGxleCwgVHJhbnNmb3JtLCBQYXNzVGhyb3VnaCB9IGZyb20gJ3N0cmVhbSc7XG5pbXBvcnQgeyBSZWNvcmQsIE9wdGlvbmFsIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBzZXJpYWxpemVDU1ZTdHJlYW0sIHBhcnNlQ1NWU3RyZWFtIH0gZnJvbSAnLi9jc3YnO1xuaW1wb3J0IHsgY29uY2F0U3RyZWFtc0FzRHVwbGV4IH0gZnJvbSAnLi91dGlsL3N0cmVhbSc7XG5cbi8qKlxuICogdHlwZSBkZWZzXG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZFN0cmVhbVNlcmlhbGl6ZU9wdGlvbiA9IHtcbiAgbnVsbFZhbHVlPzogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgUmVjb3JkU3RyZWFtUGFyc2VPcHRpb24gPSB7fTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBldmFsTWFwcGluZyh2YWx1ZTogYW55LCBtYXBwaW5nOiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG0gPSAvXlxcJFxceyhcXHcrKVxcfSQvLmV4ZWModmFsdWUpO1xuICAgIGlmIChtKSB7XG4gICAgICByZXR1cm4gbWFwcGluZ1ttWzFdXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcJFxceyhcXHcrKVxcfS9nLCAoJDAsIHByb3ApID0+IHtcbiAgICAgIGNvbnN0IHYgPSBtYXBwaW5nW3Byb3BdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsID8gJycgOiBTdHJpbmcodik7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRSZWNvcmRGb3JTZXJpYWxpemF0aW9uKFxuICByZWNvcmQ6IFJlY29yZCxcbiAgb3B0aW9uczogeyBudWxsVmFsdWU/OiBib29sZWFuIH0gPSB7fSxcbik6IFJlY29yZCB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhyZWNvcmQpLnJlZHVjZSgocmVjOiBSZWNvcmQsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSAocmVjIGFzIGFueSlba2V5XTtcbiAgICBsZXQgdXJlYzogUmVjb3JkO1xuICAgIGlmIChrZXkgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgLy8gJ2F0dHJpYnV0ZXMnIHByb3Agd2lsbCBiZSBpZ25vcmVkXG4gICAgICB1cmVjID0geyAuLi5yZWMgfTtcbiAgICAgIGRlbGV0ZSB1cmVjW2tleV07XG4gICAgICByZXR1cm4gdXJlYztcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMubnVsbFZhbHVlICYmIHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4geyAuLi5yZWMsIFtrZXldOiBvcHRpb25zLm51bGxWYWx1ZSB9IGFzIFJlY29yZDtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IHByZWNvcmQgPSBjb252ZXJ0UmVjb3JkRm9yU2VyaWFsaXphdGlvbih2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMocHJlY29yZCkucmVkdWNlKFxuICAgICAgICAocHJlYzogUmVjb3JkLCBwa2V5KSA9PiB7XG4gICAgICAgICAgcHJlY1tgJHtrZXl9LiR7cGtleX1gXSA9IHByZWNvcmRbcGtleV07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICByZXR1cm4gcHJlYztcbiAgICAgICAgfSxcbiAgICAgICAgeyAuLi5yZWMgfSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZWM7XG4gIH0sIHJlY29yZCk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGlwZWxpbmVTdHJlYW0oczE6IER1cGxleCwgczI6IER1cGxleCkge1xuICBzMS5waXBlKHMyKTtcbiAgcmV0dXJuIGNvbmNhdFN0cmVhbXNBc0R1cGxleChzMSwgczIsIHsgd3JpdGFibGVPYmplY3RNb2RlOiB0cnVlIH0pO1xufVxuXG50eXBlIFN0cmVhbUNvbnZlcnRlciA9IHtcbiAgc2VyaWFsaXplOiAob3B0aW9ucz86IFJlY29yZFN0cmVhbVNlcmlhbGl6ZU9wdGlvbikgPT4gRHVwbGV4O1xuICBwYXJzZTogKG9wdGlvbnM/OiBSZWNvcmRTdHJlYW1QYXJzZU9wdGlvbikgPT4gRHVwbGV4O1xufTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBDU1ZTdHJlYW1Db252ZXJ0ZXI6IFN0cmVhbUNvbnZlcnRlciA9IHtcbiAgc2VyaWFsaXplKG9wdGlvbnM6IFJlY29yZFN0cmVhbVNlcmlhbGl6ZU9wdGlvbiA9IHt9KSB7XG4gICAgY29uc3QgeyBudWxsVmFsdWUsIC4uLmNzdk9wdHMgfSA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIGNyZWF0ZVBpcGVsaW5lU3RyZWFtKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICBSZWNvcmRTdHJlYW0ubWFwKChyZWNvcmQpID0+XG4gICAgICAgIGNvbnZlcnRSZWNvcmRGb3JTZXJpYWxpemF0aW9uKHJlY29yZCwgb3B0aW9ucyksXG4gICAgICApLFxuICAgICAgc2VyaWFsaXplQ1NWU3RyZWFtKGNzdk9wdHMpLFxuICAgICk7XG4gIH0sXG4gIHBhcnNlKG9wdGlvbnM6IFJlY29yZFN0cmVhbVBhcnNlT3B0aW9uID0ge30pIHtcbiAgICByZXR1cm4gcGFyc2VDU1ZTdHJlYW0ob3B0aW9ucyk7XG4gIH0sXG59O1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IERhdGFTdHJlYW1Db252ZXJ0ZXJzOiB7IFtrZXk6IHN0cmluZ106IFN0cmVhbUNvbnZlcnRlciB9ID0ge1xuICBjc3Y6IENTVlN0cmVhbUNvbnZlcnRlcixcbn07XG5cbi8qKlxuICogQ2xhc3MgZm9yIFJlY29yZCBTdHJlYW1cbiAqXG4gKiBAY2xhc3NcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgc3RyZWFtLlRyYW5zZm9ybVxuICovXG5leHBvcnQgY2xhc3MgUmVjb3JkU3RyZWFtPFIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQ+IGV4dGVuZHMgUGFzc1Rocm91Z2gge1xuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHsgb2JqZWN0TW9kZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVjb3JkIHN0cmVhbSBvZiBxdWVyaWVkIHJlY29yZHMgYXBwbHlpbmcgdGhlIGdpdmVuIG1hcHBpbmcgZnVuY3Rpb25cbiAgICovXG4gIG1hcDxSUiBleHRlbmRzIFJlY29yZD4oZm46IChyZWM6IFIpID0+IE9wdGlvbmFsPFJSPikge1xuICAgIHJldHVybiB0aGlzLnBpcGUoUmVjb3JkU3RyZWFtLm1hcDxSLCBSUj4oZm4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVjb3JkIHN0cmVhbSBvZiBxdWVyaWVkIHJlY29yZHMsIGFwcGx5aW5nIHRoZSBnaXZlbiBmaWx0ZXIgZnVuY3Rpb25cbiAgICovXG4gIGZpbHRlcihmbjogKHJlYzogUikgPT4gYm9vbGVhbik6IER1cGxleCB7XG4gICAgcmV0dXJuIHRoaXMucGlwZShSZWNvcmRTdHJlYW0uZmlsdGVyPFI+KGZuKSk7XG4gIH1cblxuICAvKiBAb3ZlcnJpZGUgKi9cbiAgb24oZXY6IHN0cmluZywgZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgIHJldHVybiBzdXBlci5vbihldiA9PT0gJ3JlY29yZCcgPyAnZGF0YScgOiBldiwgZm4pO1xuICB9XG5cbiAgLyogQG92ZXJyaWRlICovXG4gIGFkZExpc3RlbmVyID0gdGhpcy5vbjtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAvKipcbiAgICogQ3JlYXRlIGEgcmVjb3JkIHN0cmVhbSB3aGljaCBtYXBzIHJlY29yZHMgYW5kIHBhc3MgdGhlbSB0byBkb3duc3RyZWFtXG4gICAqL1xuICBzdGF0aWMgbWFwPFIxIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkLCBSMiBleHRlbmRzIFJlY29yZCA9IFJlY29yZD4oXG4gICAgZm46IChyZWM6IFIxKSA9PiBPcHRpb25hbDxSMj4sXG4gICkge1xuICAgIGNvbnN0IG1hcFN0cmVhbSA9IG5ldyBUcmFuc2Zvcm0oe1xuICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICAgIHRyYW5zZm9ybShyZWNvcmQsIGVuYywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVjID0gZm4ocmVjb3JkKSB8fCByZWNvcmQ7IC8vIGlmIG5vdCByZXR1cm5lZCByZWNvcmQsIHVzZSBzYW1lIHJlY29yZFxuICAgICAgICBtYXBTdHJlYW0ucHVzaChyZWMpO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbWFwU3RyZWFtO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtYXBwaW5nIHN0cmVhbSB1c2luZyBnaXZlbiByZWNvcmQgdGVtcGxhdGVcbiAgICovXG4gIHN0YXRpYyByZWNvcmRNYXBTdHJlYW08XG4gICAgUjEgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmQsXG4gICAgUjIgZXh0ZW5kcyBSZWNvcmQgPSBSZWNvcmRcbiAgPihyZWNvcmQ6IFIyLCBub2V2YWw/OiBib29sZWFuKSB7XG4gICAgcmV0dXJuIFJlY29yZFN0cmVhbS5tYXA8UjEsIFIyPigocmVjKSA9PiB7XG4gICAgICBjb25zdCBtYXBwZWQ6IFJlY29yZCA9IHsgSWQ6IHJlYy5JZCB9O1xuICAgICAgZm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHJlY29yZCkpIHtcbiAgICAgICAgbWFwcGVkW3Byb3BdID0gbm9ldmFsID8gcmVjb3JkW3Byb3BdIDogZXZhbE1hcHBpbmcocmVjb3JkW3Byb3BdLCByZWMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hcHBlZCBhcyBSMjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSByZWNvcmQgc3RyZWFtIHdoaWNoIGZpbHRlcnMgcmVjb3JkcyBhbmQgcGFzcyB0aGVtIHRvIGRvd25zdHJlYW1cbiAgICpcbiAgICogQHBhcmFtIHtSZWNvcmRGaWx0ZXJGdW5jdGlvbn0gZm4gLSBSZWNvcmQgZmlsdGVyaW5nIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtSZWNvcmRTdHJlYW0uU2VyaWFsaXphYmxlfVxuICAgKi9cbiAgc3RhdGljIGZpbHRlcjxSMSBleHRlbmRzIFJlY29yZCA9IFJlY29yZD4oZm46IChyZWM6IFIxKSA9PiBib29sZWFuKTogRHVwbGV4IHtcbiAgICBjb25zdCBmaWx0ZXJTdHJlYW0gPSBuZXcgVHJhbnNmb3JtKHtcbiAgICAgIG9iamVjdE1vZGU6IHRydWUsXG4gICAgICB0cmFuc2Zvcm0ocmVjb3JkLCBlbmMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChmbihyZWNvcmQpKSB7XG4gICAgICAgICAgZmlsdGVyU3RyZWFtLnB1c2gocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyU3RyZWFtO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFJlY29yZFN0cmVhbS5TZXJpYWxpemFibGVcbiAqIEBleHRlbmRzIHtSZWNvcmRTdHJlYW19XG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGU8UiBleHRlbmRzIFJlY29yZCA9IFJlY29yZD4gZXh0ZW5kcyBSZWNvcmRTdHJlYW08Uj4ge1xuICBfZGF0YVN0cmVhbXM6IHsgW3R5cGU6IHN0cmluZ106IER1cGxleCB9ID0ge307XG5cbiAgLyoqXG4gICAqIEdldCByZWFkYWJsZSBkYXRhIHN0cmVhbSB3aGljaCBlbWl0cyBzZXJpYWxpemVkIHJlY29yZCBkYXRhXG4gICAqL1xuICBzdHJlYW0odHlwZTogc3RyaW5nID0gJ2NzdicsIG9wdGlvbnM6IE9iamVjdCA9IHt9KTogRHVwbGV4IHtcbiAgICBpZiAodGhpcy5fZGF0YVN0cmVhbXNbdHlwZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9kYXRhU3RyZWFtc1t0eXBlXTtcbiAgICB9XG4gICAgY29uc3QgY29udmVydGVyOiBPcHRpb25hbDxTdHJlYW1Db252ZXJ0ZXI+ID0gRGF0YVN0cmVhbUNvbnZlcnRlcnNbdHlwZV07XG4gICAgaWYgKCFjb252ZXJ0ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29udmVydGluZyBbJHt0eXBlfV0gZGF0YSBzdHJlYW0gaXMgbm90IHN1cHBvcnRlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YVN0cmVhbSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuICAgIHRoaXMucGlwZShjb252ZXJ0ZXIuc2VyaWFsaXplKG9wdGlvbnMpKS5waXBlKGRhdGFTdHJlYW0pO1xuICAgIHRoaXMuX2RhdGFTdHJlYW1zW3R5cGVdID0gZGF0YVN0cmVhbTtcbiAgICByZXR1cm4gZGF0YVN0cmVhbTtcbiAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBSZWNvcmRTdHJlYW0uUGFyc2FibGVcbiAqIEBleHRlbmRzIHtSZWNvcmRTdHJlYW19XG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJzYWJsZTxSIGV4dGVuZHMgUmVjb3JkID0gUmVjb3JkPiBleHRlbmRzIFJlY29yZFN0cmVhbTxSPiB7XG4gIF9kYXRhU3RyZWFtczogeyBbdHlwZTogc3RyaW5nXTogRHVwbGV4IH0gPSB7fTtcbiAgX2V4ZWNQYXJzZTogYm9vbGVhbiA9IGZhbHNlO1xuICBfaW5jb21pbmdzOiBBcnJheTxbUmVhZGFibGUsIFdyaXRhYmxlXT4gPSBbXTtcblxuICAvKipcbiAgICogR2V0IHdyaXRhYmxlIGRhdGEgc3RyZWFtIHdoaWNoIGFjY2VwdHMgc2VyaWFsaXplZCByZWNvcmQgZGF0YVxuICAgKi9cbiAgc3RyZWFtKHR5cGU6IHN0cmluZyA9ICdjc3YnLCBvcHRpb25zOiBPYmplY3QgPSB7fSk6IER1cGxleCB7XG4gICAgaWYgKHRoaXMuX2RhdGFTdHJlYW1zW3R5cGVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGF0YVN0cmVhbXNbdHlwZV07XG4gICAgfVxuICAgIGNvbnN0IGNvbnZlcnRlcjogT3B0aW9uYWw8U3RyZWFtQ29udmVydGVyPiA9IERhdGFTdHJlYW1Db252ZXJ0ZXJzW3R5cGVdO1xuICAgIGlmICghY29udmVydGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnZlcnRpbmcgWyR7dHlwZX1dIGRhdGEgc3RyZWFtIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGFTdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goKTtcbiAgICBjb25zdCBwYXJzZXJTdHJlYW0gPSBjb252ZXJ0ZXIucGFyc2Uob3B0aW9ucyk7XG4gICAgcGFyc2VyU3RyZWFtLm9uKCdlcnJvcicsIChlcnIpID0+IHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpKTtcbiAgICBwYXJzZXJTdHJlYW1cbiAgICAgIC5waXBlKHRoaXMpXG4gICAgICAucGlwZShuZXcgUGFzc1Rocm91Z2goeyBvYmplY3RNb2RlOiB0cnVlLCBoaWdoV2F0ZXJNYXJrOiA1MDAgKiAxMDAwIH0pKTtcbiAgICBpZiAodGhpcy5fZXhlY1BhcnNlKSB7XG4gICAgICBkYXRhU3RyZWFtLnBpcGUocGFyc2VyU3RyZWFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5jb21pbmdzLnB1c2goW2RhdGFTdHJlYW0sIHBhcnNlclN0cmVhbV0pO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhU3RyZWFtc1t0eXBlXSA9IGRhdGFTdHJlYW07XG4gICAgcmV0dXJuIGRhdGFTdHJlYW07XG4gIH1cblxuICAvKiBAb3ZlcnJpZGUgKi9cbiAgb24oZXY6IHN0cmluZywgZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgIGlmIChldiA9PT0gJ3JlYWRhYmxlJyB8fCBldiA9PT0gJ3JlY29yZCcpIHtcbiAgICAgIGlmICghdGhpcy5fZXhlY1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX2V4ZWNQYXJzZSA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgW2RhdGFTdHJlYW0sIHBhcnNlclN0cmVhbV0gb2YgdGhpcy5faW5jb21pbmdzKSB7XG4gICAgICAgICAgZGF0YVN0cmVhbS5waXBlKHBhcnNlclN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLm9uKGV2LCBmbik7XG4gIH1cblxuICAvKiBAb3ZlcnJpZGUgKi9cbiAgYWRkTGlzdGVuZXIgPSB0aGlzLm9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRTdHJlYW07XG4iXX0=