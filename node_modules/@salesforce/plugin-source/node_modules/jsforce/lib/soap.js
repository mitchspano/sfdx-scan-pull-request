"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.replace");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.castTypeUsingSchema = castTypeUsingSchema;
exports.default = exports.SOAP = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _httpApi = _interopRequireDefault(require("./http-api"));

var _function = require("./util/function");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 *
 */
function getPropsSchema(schema, schemaDict) {
  if (schema.extends && schemaDict[schema.extends]) {
    const extendSchema = schemaDict[schema.extends];
    return _objectSpread(_objectSpread({}, getPropsSchema(extendSchema, schemaDict)), schema.props);
  }

  return schema.props;
}

function isNillValue(value) {
  return value == null || (0, _function.isMapObject)(value) && (0, _function.isMapObject)(value.$) && value.$['xsi:nil'] === 'true';
}
/**
 *
 */


function castTypeUsingSchema(value, schema, schemaDict = {}) {
  if ((0, _isArray.default)(schema)) {
    var _context;

    const nillable = schema.length === 2 && schema[0] === '?';
    const schema_ = nillable ? schema[1] : schema[0];

    if (value == null) {
      return nillable ? null : [];
    }

    return (0, _map.default)(_context = (0, _isArray.default)(value) ? value : [value]).call(_context, v => castTypeUsingSchema(v, schema_, schemaDict));
  } else if ((0, _function.isMapObject)(schema)) {
    var _context2;

    // if schema is Schema Definition, not schema element
    if ('type' in schema && 'props' in schema && (0, _function.isMapObject)(schema.props)) {
      const props = getPropsSchema(schema, schemaDict);
      return castTypeUsingSchema(value, props, schemaDict);
    }

    const nillable = ('?' in schema);
    const schema_ = '?' in schema ? schema['?'] : schema;

    if (nillable && isNillValue(value)) {
      return null;
    }

    const obj = (0, _function.isMapObject)(value) ? value : {};
    return (0, _reduce.default)(_context2 = (0, _keys.default)(schema_)).call(_context2, (o, k) => {
      const s = schema_[k];
      const v = obj[k];
      const nillable = (0, _isArray.default)(s) && s.length === 2 && s[0] === '?' || (0, _function.isMapObject)(s) && '?' in s || typeof s === 'string' && s[0] === '?';

      if (typeof v === 'undefined' && nillable) {
        return o;
      }

      return _objectSpread(_objectSpread({}, o), {}, {
        [k]: castTypeUsingSchema(v, s, schemaDict)
      });
    }, obj);
  } else {
    const nillable = typeof schema === 'string' && schema[0] === '?';
    const type = typeof schema === 'string' ? nillable ? schema.substring(1) : schema : 'any';

    switch (type) {
      case 'string':
        return isNillValue(value) ? nillable ? null : '' : String(value);

      case 'number':
        return isNillValue(value) ? nillable ? null : 0 : Number(value);

      case 'boolean':
        return isNillValue(value) ? nillable ? null : false : value === 'true';

      case 'null':
        return null;

      default:
        {
          if (schemaDict[type]) {
            const cvalue = castTypeUsingSchema(value, schemaDict[type], schemaDict);
            const isEmpty = (0, _function.isMapObject)(cvalue) && (0, _keys.default)(cvalue).length === 0;
            return isEmpty && nillable ? null : cvalue;
          }

          return value;
        }
    }
  }
}
/**
 * @private
 */


function lookupValue(obj, propRegExps) {
  const regexp = propRegExps.shift();

  if (!regexp) {
    return obj;
  }

  if ((0, _function.isMapObject)(obj)) {
    for (const prop of (0, _keys.default)(obj)) {
      if (regexp.test(prop)) {
        return lookupValue(obj[prop], propRegExps);
      }
    }

    return null;
  }
}
/**
 * @private
 */


function toXML(name, value) {
  if ((0, _function.isObject)(name)) {
    value = name;
    name = null;
  }

  if ((0, _isArray.default)(value)) {
    return (0, _map.default)(value).call(value, v => toXML(name, v)).join('');
  } else {
    const attrs = [];
    const elems = [];

    if ((0, _function.isMapObject)(value)) {
      for (const k of (0, _keys.default)(value)) {
        const v = value[k];

        if (k[0] === '@') {
          const kk = k.substring(1);
          attrs.push(kk + '="' + v + '"');
        } else {
          elems.push(toXML(k, v));
        }
      }

      value = elems.join('');
    } else {
      value = String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    }

    const startTag = name ? '<' + name + (attrs.length > 0 ? ' ' + attrs.join(' ') : '') + '>' : '';
    const endTag = name ? '</' + name + '>' : '';
    return startTag + value + endTag;
  }
}
/**
 *
 */


/**
 * Class for SOAP endpoint of Salesforce
 *
 * @protected
 * @class
 * @constructor
 * @param {Connection} conn - Connection instance
 * @param {Object} options - SOAP endpoint setting options
 * @param {String} options.endpointUrl - SOAP endpoint URL
 * @param {String} [options.xmlns] - XML namespace for method call (default is "urn:partner.soap.sforce.com")
 */
class SOAP extends _httpApi.default {
  constructor(conn, options) {
    super(conn, options);
    (0, _defineProperty2.default)(this, "_endpointUrl", void 0);
    (0, _defineProperty2.default)(this, "_xmlns", void 0);
    this._endpointUrl = options.endpointUrl;
    this._xmlns = options.xmlns || 'urn:partner.soap.sforce.com';
  }
  /**
   * Invoke SOAP call using method and arguments
   */


  async invoke(method, args, schema, schemaDict) {
    const res = await this.request({
      method: 'POST',
      url: this._endpointUrl,
      headers: {
        'Content-Type': 'text/xml',
        SOAPAction: '""'
      },
      _message: {
        [method]: args
      }
    });
    return schema ? castTypeUsingSchema(res, schema, schemaDict) : res;
  }
  /** @override */


  beforeSend(request) {
    request.body = this._createEnvelope(request._message);
  }
  /** @override **/


  isSessionExpired(response) {
    return response.statusCode === 500 && /<faultcode>[a-zA-Z]+:INVALID_SESSION_ID<\/faultcode>/.test(response.body);
  }
  /** @override **/


  parseError(body) {
    const error = lookupValue(body, [/:Envelope$/, /:Body$/, /:Fault$/]);
    return {
      errorCode: error.faultcode,
      message: error.faultstring
    };
  }
  /** @override **/


  async getResponseBody(response) {
    const body = await super.getResponseBody(response);
    return lookupValue(body, [/:Envelope$/, /:Body$/, /.+/]);
  }
  /**
   * @private
   */


  _createEnvelope(message) {
    const header = {};
    const conn = this._conn;

    if (conn.accessToken) {
      header.SessionHeader = {
        sessionId: conn.accessToken
      };
    }

    if (conn._callOptions) {
      header.CallOptions = conn._callOptions;
    }

    return ['<?xml version="1.0" encoding="UTF-8"?>', '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"', ' xmlns:xsd="http://www.w3.org/2001/XMLSchema"', ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">', '<soapenv:Header xmlns="' + this._xmlns + '">', toXML(header), '</soapenv:Header>', '<soapenv:Body xmlns="' + this._xmlns + '">', toXML(message), '</soapenv:Body>', '</soapenv:Envelope>'].join('');
  }

}

exports.SOAP = SOAP;
var _default = SOAP;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zb2FwLnRzIl0sIm5hbWVzIjpbImdldFByb3BzU2NoZW1hIiwic2NoZW1hIiwic2NoZW1hRGljdCIsImV4dGVuZHMiLCJleHRlbmRTY2hlbWEiLCJwcm9wcyIsImlzTmlsbFZhbHVlIiwidmFsdWUiLCIkIiwiY2FzdFR5cGVVc2luZ1NjaGVtYSIsIm5pbGxhYmxlIiwibGVuZ3RoIiwic2NoZW1hXyIsInYiLCJvYmoiLCJvIiwiayIsInMiLCJ0eXBlIiwic3Vic3RyaW5nIiwiU3RyaW5nIiwiTnVtYmVyIiwiY3ZhbHVlIiwiaXNFbXB0eSIsImxvb2t1cFZhbHVlIiwicHJvcFJlZ0V4cHMiLCJyZWdleHAiLCJzaGlmdCIsInByb3AiLCJ0ZXN0IiwidG9YTUwiLCJuYW1lIiwiam9pbiIsImF0dHJzIiwiZWxlbXMiLCJrayIsInB1c2giLCJyZXBsYWNlIiwic3RhcnRUYWciLCJlbmRUYWciLCJTT0FQIiwiSHR0cEFwaSIsImNvbnN0cnVjdG9yIiwiY29ubiIsIm9wdGlvbnMiLCJfZW5kcG9pbnRVcmwiLCJlbmRwb2ludFVybCIsIl94bWxucyIsInhtbG5zIiwiaW52b2tlIiwibWV0aG9kIiwiYXJncyIsInJlcyIsInJlcXVlc3QiLCJ1cmwiLCJoZWFkZXJzIiwiU09BUEFjdGlvbiIsIl9tZXNzYWdlIiwiYmVmb3JlU2VuZCIsImJvZHkiLCJfY3JlYXRlRW52ZWxvcGUiLCJpc1Nlc3Npb25FeHBpcmVkIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwicGFyc2VFcnJvciIsImVycm9yIiwiZXJyb3JDb2RlIiwiZmF1bHRjb2RlIiwibWVzc2FnZSIsImZhdWx0c3RyaW5nIiwiZ2V0UmVzcG9uc2VCb2R5IiwiaGVhZGVyIiwiX2Nvbm4iLCJhY2Nlc3NUb2tlbiIsIlNlc3Npb25IZWFkZXIiLCJzZXNzaW9uSWQiLCJfY2FsbE9wdGlvbnMiLCJDYWxsT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQVNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxjQUFULENBQ0VDLE1BREYsRUFFRUMsVUFGRixFQUcwQjtBQUN4QixNQUFJRCxNQUFNLENBQUNFLE9BQVAsSUFBa0JELFVBQVUsQ0FBQ0QsTUFBTSxDQUFDRSxPQUFSLENBQWhDLEVBQWtEO0FBQ2hELFVBQU1DLFlBQVksR0FBR0YsVUFBVSxDQUFDRCxNQUFNLENBQUNFLE9BQVIsQ0FBL0I7QUFDQSwyQ0FDS0gsY0FBYyxDQUFDSSxZQUFELEVBQWVGLFVBQWYsQ0FEbkIsR0FFS0QsTUFBTSxDQUFDSSxLQUZaO0FBSUQ7O0FBQ0QsU0FBT0osTUFBTSxDQUFDSSxLQUFkO0FBQ0Q7O0FBRUQsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBcUM7QUFDbkMsU0FDRUEsS0FBSyxJQUFJLElBQVQsSUFDQywyQkFBWUEsS0FBWixLQUNDLDJCQUFZQSxLQUFLLENBQUNDLENBQWxCLENBREQsSUFFQ0QsS0FBSyxDQUFDQyxDQUFOLENBQVEsU0FBUixNQUF1QixNQUozQjtBQU1EO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxTQUFTQyxtQkFBVCxDQUNMRixLQURLLEVBRUxOLE1BRkssRUFHTEMsVUFBNkMsR0FBRyxFQUgzQyxFQUlBO0FBQ0wsTUFBSSxzQkFBY0QsTUFBZCxDQUFKLEVBQTJCO0FBQUE7O0FBQ3pCLFVBQU1TLFFBQVEsR0FBR1QsTUFBTSxDQUFDVSxNQUFQLEtBQWtCLENBQWxCLElBQXVCVixNQUFNLENBQUMsQ0FBRCxDQUFOLEtBQWMsR0FBdEQ7QUFDQSxVQUFNVyxPQUFPLEdBQUdGLFFBQVEsR0FBR1QsTUFBTSxDQUFDLENBQUQsQ0FBVCxHQUFlQSxNQUFNLENBQUMsQ0FBRCxDQUE3Qzs7QUFDQSxRQUFJTSxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNqQixhQUFPRyxRQUFRLEdBQUcsSUFBSCxHQUFVLEVBQXpCO0FBQ0Q7O0FBQ0QsV0FBTyw2QkFBQyxzQkFBY0gsS0FBZCxJQUF1QkEsS0FBdkIsR0FBK0IsQ0FBQ0EsS0FBRCxDQUFoQyxpQkFBOENNLENBQUQsSUFDbERKLG1CQUFtQixDQUFDSSxDQUFELEVBQUlELE9BQUosRUFBYVYsVUFBYixDQURkLENBQVA7QUFHRCxHQVRELE1BU08sSUFBSSwyQkFBWUQsTUFBWixDQUFKLEVBQXlCO0FBQUE7O0FBQzlCO0FBQ0EsUUFBSSxVQUFVQSxNQUFWLElBQW9CLFdBQVdBLE1BQS9CLElBQXlDLDJCQUFZQSxNQUFNLENBQUNJLEtBQW5CLENBQTdDLEVBQXdFO0FBQ3RFLFlBQU1BLEtBQUssR0FBR0wsY0FBYyxDQUFDQyxNQUFELEVBQTBCQyxVQUExQixDQUE1QjtBQUNBLGFBQU9PLG1CQUFtQixDQUFDRixLQUFELEVBQVFGLEtBQVIsRUFBZUgsVUFBZixDQUExQjtBQUNEOztBQUNELFVBQU1RLFFBQVEsSUFBRyxPQUFPVCxNQUFWLENBQWQ7QUFDQSxVQUFNVyxPQUFPLEdBQ1gsT0FBT1gsTUFBUCxHQUFpQkEsTUFBTSxDQUFDLEdBQUQsQ0FBdkIsR0FBMERBLE1BRDVEOztBQUVBLFFBQUlTLFFBQVEsSUFBSUosV0FBVyxDQUFDQyxLQUFELENBQTNCLEVBQW9DO0FBQ2xDLGFBQU8sSUFBUDtBQUNEOztBQUNELFVBQU1PLEdBQUcsR0FBRywyQkFBWVAsS0FBWixJQUFxQkEsS0FBckIsR0FBNkIsRUFBekM7QUFDQSxXQUFPLG9EQUFZSyxPQUFaLG1CQUE0QixDQUFDRyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUMzQyxZQUFNQyxDQUFDLEdBQUdMLE9BQU8sQ0FBQ0ksQ0FBRCxDQUFqQjtBQUNBLFlBQU1ILENBQUMsR0FBR0MsR0FBRyxDQUFDRSxDQUFELENBQWI7QUFDQSxZQUFNTixRQUFRLEdBQ1gsc0JBQWNPLENBQWQsS0FBb0JBLENBQUMsQ0FBQ04sTUFBRixLQUFhLENBQWpDLElBQXNDTSxDQUFDLENBQUMsQ0FBRCxDQUFELEtBQVMsR0FBaEQsSUFDQywyQkFBWUEsQ0FBWixLQUFrQixPQUFPQSxDQUQxQixJQUVDLE9BQU9BLENBQVAsS0FBYSxRQUFiLElBQXlCQSxDQUFDLENBQUMsQ0FBRCxDQUFELEtBQVMsR0FIckM7O0FBSUEsVUFBSSxPQUFPSixDQUFQLEtBQWEsV0FBYixJQUE0QkgsUUFBaEMsRUFBMEM7QUFDeEMsZUFBT0ssQ0FBUDtBQUNEOztBQUNELDZDQUNLQSxDQURMO0FBRUUsU0FBQ0MsQ0FBRCxHQUFLUCxtQkFBbUIsQ0FBQ0ksQ0FBRCxFQUFJSSxDQUFKLEVBQU9mLFVBQVA7QUFGMUI7QUFJRCxLQWRNLEVBY0pZLEdBZEksQ0FBUDtBQWVELEdBNUJNLE1BNEJBO0FBQ0wsVUFBTUosUUFBUSxHQUFHLE9BQU9ULE1BQVAsS0FBa0IsUUFBbEIsSUFBOEJBLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBYyxHQUE3RDtBQUNBLFVBQU1pQixJQUFJLEdBQ1IsT0FBT2pCLE1BQVAsS0FBa0IsUUFBbEIsR0FDSVMsUUFBUSxHQUNOVCxNQUFNLENBQUNrQixTQUFQLENBQWlCLENBQWpCLENBRE0sR0FFTmxCLE1BSE4sR0FJSSxLQUxOOztBQU1BLFlBQVFpQixJQUFSO0FBQ0UsV0FBSyxRQUFMO0FBQ0UsZUFBT1osV0FBVyxDQUFDQyxLQUFELENBQVgsR0FBc0JHLFFBQVEsR0FBRyxJQUFILEdBQVUsRUFBeEMsR0FBOENVLE1BQU0sQ0FBQ2IsS0FBRCxDQUEzRDs7QUFDRixXQUFLLFFBQUw7QUFDRSxlQUFPRCxXQUFXLENBQUNDLEtBQUQsQ0FBWCxHQUFzQkcsUUFBUSxHQUFHLElBQUgsR0FBVSxDQUF4QyxHQUE2Q1csTUFBTSxDQUFDZCxLQUFELENBQTFEOztBQUNGLFdBQUssU0FBTDtBQUNFLGVBQU9ELFdBQVcsQ0FBQ0MsS0FBRCxDQUFYLEdBQ0hHLFFBQVEsR0FDTixJQURNLEdBRU4sS0FIQyxHQUlISCxLQUFLLEtBQUssTUFKZDs7QUFLRixXQUFLLE1BQUw7QUFDRSxlQUFPLElBQVA7O0FBQ0Y7QUFBUztBQUNQLGNBQUlMLFVBQVUsQ0FBQ2dCLElBQUQsQ0FBZCxFQUFzQjtBQUNwQixrQkFBTUksTUFBTSxHQUFHYixtQkFBbUIsQ0FDaENGLEtBRGdDLEVBRWhDTCxVQUFVLENBQUNnQixJQUFELENBRnNCLEVBR2hDaEIsVUFIZ0MsQ0FBbEM7QUFLQSxrQkFBTXFCLE9BQU8sR0FDWCwyQkFBWUQsTUFBWixLQUF1QixtQkFBWUEsTUFBWixFQUFvQlgsTUFBcEIsS0FBK0IsQ0FEeEQ7QUFFQSxtQkFBT1ksT0FBTyxJQUFJYixRQUFYLEdBQXNCLElBQXRCLEdBQTZCWSxNQUFwQztBQUNEOztBQUNELGlCQUFPZixLQUFQO0FBQ0Q7QUF6Qkg7QUEyQkQ7QUFDRjtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU2lCLFdBQVQsQ0FBcUJWLEdBQXJCLEVBQW1DVyxXQUFuQyxFQUFtRTtBQUNqRSxRQUFNQyxNQUFNLEdBQUdELFdBQVcsQ0FBQ0UsS0FBWixFQUFmOztBQUNBLE1BQUksQ0FBQ0QsTUFBTCxFQUFhO0FBQ1gsV0FBT1osR0FBUDtBQUNEOztBQUNELE1BQUksMkJBQVlBLEdBQVosQ0FBSixFQUFzQjtBQUNwQixTQUFLLE1BQU1jLElBQVgsSUFBbUIsbUJBQVlkLEdBQVosQ0FBbkIsRUFBcUM7QUFDbkMsVUFBSVksTUFBTSxDQUFDRyxJQUFQLENBQVlELElBQVosQ0FBSixFQUF1QjtBQUNyQixlQUFPSixXQUFXLENBQUNWLEdBQUcsQ0FBQ2MsSUFBRCxDQUFKLEVBQVlILFdBQVosQ0FBbEI7QUFDRDtBQUNGOztBQUNELFdBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNLLEtBQVQsQ0FBZUMsSUFBZixFQUE2Q3hCLEtBQTdDLEVBQWtFO0FBQ2hFLE1BQUksd0JBQVN3QixJQUFULENBQUosRUFBb0I7QUFDbEJ4QixJQUFBQSxLQUFLLEdBQUd3QixJQUFSO0FBQ0FBLElBQUFBLElBQUksR0FBRyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxzQkFBY3hCLEtBQWQsQ0FBSixFQUEwQjtBQUN4QixXQUFPLGtCQUFBQSxLQUFLLE1BQUwsQ0FBQUEsS0FBSyxFQUFNTSxDQUFELElBQU9pQixLQUFLLENBQUNDLElBQUQsRUFBT2xCLENBQVAsQ0FBakIsQ0FBTCxDQUFpQ21CLElBQWpDLENBQXNDLEVBQXRDLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxVQUFNQyxLQUFLLEdBQUcsRUFBZDtBQUNBLFVBQU1DLEtBQUssR0FBRyxFQUFkOztBQUNBLFFBQUksMkJBQVkzQixLQUFaLENBQUosRUFBd0I7QUFDdEIsV0FBSyxNQUFNUyxDQUFYLElBQWdCLG1CQUFZVCxLQUFaLENBQWhCLEVBQW9DO0FBQ2xDLGNBQU1NLENBQUMsR0FBR04sS0FBSyxDQUFDUyxDQUFELENBQWY7O0FBQ0EsWUFBSUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxLQUFTLEdBQWIsRUFBa0I7QUFDaEIsZ0JBQU1tQixFQUFFLEdBQUduQixDQUFDLENBQUNHLFNBQUYsQ0FBWSxDQUFaLENBQVg7QUFDQWMsVUFBQUEsS0FBSyxDQUFDRyxJQUFOLENBQVdELEVBQUUsR0FBRyxJQUFMLEdBQVl0QixDQUFaLEdBQWdCLEdBQTNCO0FBQ0QsU0FIRCxNQUdPO0FBQ0xxQixVQUFBQSxLQUFLLENBQUNFLElBQU4sQ0FBV04sS0FBSyxDQUFDZCxDQUFELEVBQUlILENBQUosQ0FBaEI7QUFDRDtBQUNGOztBQUNETixNQUFBQSxLQUFLLEdBQUcyQixLQUFLLENBQUNGLElBQU4sQ0FBVyxFQUFYLENBQVI7QUFDRCxLQVhELE1BV087QUFDTHpCLE1BQUFBLEtBQUssR0FBR2EsTUFBTSxDQUFDYixLQUFELENBQU4sQ0FDTDhCLE9BREssQ0FDRyxJQURILEVBQ1MsT0FEVCxFQUVMQSxPQUZLLENBRUcsSUFGSCxFQUVTLE1BRlQsRUFHTEEsT0FISyxDQUdHLElBSEgsRUFHUyxNQUhULEVBSUxBLE9BSkssQ0FJRyxJQUpILEVBSVMsUUFKVCxFQUtMQSxPQUxLLENBS0csSUFMSCxFQUtTLFFBTFQsQ0FBUjtBQU1EOztBQUNELFVBQU1DLFFBQVEsR0FBR1AsSUFBSSxHQUNqQixNQUFNQSxJQUFOLElBQWNFLEtBQUssQ0FBQ3RCLE1BQU4sR0FBZSxDQUFmLEdBQW1CLE1BQU1zQixLQUFLLENBQUNELElBQU4sQ0FBVyxHQUFYLENBQXpCLEdBQTJDLEVBQXpELElBQStELEdBRDlDLEdBRWpCLEVBRko7QUFHQSxVQUFNTyxNQUFNLEdBQUdSLElBQUksR0FBRyxPQUFPQSxJQUFQLEdBQWMsR0FBakIsR0FBdUIsRUFBMUM7QUFDQSxXQUFPTyxRQUFRLEdBQUcvQixLQUFYLEdBQW1CZ0MsTUFBMUI7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBOzs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sTUFBTUMsSUFBTixTQUFxQ0MsZ0JBQXJDLENBQWdEO0FBSXJEQyxFQUFBQSxXQUFXLENBQUNDLElBQUQsRUFBc0JDLE9BQXRCLEVBQTRDO0FBQ3JELFVBQU1ELElBQU4sRUFBWUMsT0FBWjtBQURxRDtBQUFBO0FBRXJELFNBQUtDLFlBQUwsR0FBb0JELE9BQU8sQ0FBQ0UsV0FBNUI7QUFDQSxTQUFLQyxNQUFMLEdBQWNILE9BQU8sQ0FBQ0ksS0FBUixJQUFpQiw2QkFBL0I7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0UsUUFBTUMsTUFBTixDQUNFQyxNQURGLEVBRUVDLElBRkYsRUFHRWxELE1BSEYsRUFJRUMsVUFKRixFQUtFO0FBQ0EsVUFBTWtELEdBQUcsR0FBRyxNQUFNLEtBQUtDLE9BQUwsQ0FBYTtBQUM3QkgsTUFBQUEsTUFBTSxFQUFFLE1BRHFCO0FBRTdCSSxNQUFBQSxHQUFHLEVBQUUsS0FBS1QsWUFGbUI7QUFHN0JVLE1BQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQixVQURUO0FBRVBDLFFBQUFBLFVBQVUsRUFBRTtBQUZMLE9BSG9CO0FBTzdCQyxNQUFBQSxRQUFRLEVBQUU7QUFBRSxTQUFDUCxNQUFELEdBQVVDO0FBQVo7QUFQbUIsS0FBYixDQUFsQjtBQVNBLFdBQU9sRCxNQUFNLEdBQUdRLG1CQUFtQixDQUFDMkMsR0FBRCxFQUFNbkQsTUFBTixFQUFjQyxVQUFkLENBQXRCLEdBQWtEa0QsR0FBL0Q7QUFDRDtBQUVEOzs7QUFDQU0sRUFBQUEsVUFBVSxDQUFDTCxPQUFELEVBQThDO0FBQ3REQSxJQUFBQSxPQUFPLENBQUNNLElBQVIsR0FBZSxLQUFLQyxlQUFMLENBQXFCUCxPQUFPLENBQUNJLFFBQTdCLENBQWY7QUFDRDtBQUVEOzs7QUFDQUksRUFBQUEsZ0JBQWdCLENBQUNDLFFBQUQsRUFBeUI7QUFDdkMsV0FDRUEsUUFBUSxDQUFDQyxVQUFULEtBQXdCLEdBQXhCLElBQ0EsdURBQXVEbEMsSUFBdkQsQ0FBNERpQyxRQUFRLENBQUNILElBQXJFLENBRkY7QUFJRDtBQUVEOzs7QUFDQUssRUFBQUEsVUFBVSxDQUFDTCxJQUFELEVBQWU7QUFDdkIsVUFBTU0sS0FBSyxHQUFHekMsV0FBVyxDQUFDbUMsSUFBRCxFQUFPLENBQUMsWUFBRCxFQUFlLFFBQWYsRUFBeUIsU0FBekIsQ0FBUCxDQUF6QjtBQUdBLFdBQU87QUFDTE8sTUFBQUEsU0FBUyxFQUFFRCxLQUFLLENBQUNFLFNBRFo7QUFFTEMsTUFBQUEsT0FBTyxFQUFFSCxLQUFLLENBQUNJO0FBRlYsS0FBUDtBQUlEO0FBRUQ7OztBQUNBLFFBQU1DLGVBQU4sQ0FBc0JSLFFBQXRCLEVBQThDO0FBQzVDLFVBQU1ILElBQUksR0FBRyxNQUFNLE1BQU1XLGVBQU4sQ0FBc0JSLFFBQXRCLENBQW5CO0FBQ0EsV0FBT3RDLFdBQVcsQ0FBQ21DLElBQUQsRUFBTyxDQUFDLFlBQUQsRUFBZSxRQUFmLEVBQXlCLElBQXpCLENBQVAsQ0FBbEI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBQ0VDLEVBQUFBLGVBQWUsQ0FBQ1EsT0FBRCxFQUFrQjtBQUMvQixVQUFNRyxNQUErQixHQUFHLEVBQXhDO0FBQ0EsVUFBTTVCLElBQUksR0FBRyxLQUFLNkIsS0FBbEI7O0FBQ0EsUUFBSTdCLElBQUksQ0FBQzhCLFdBQVQsRUFBc0I7QUFDcEJGLE1BQUFBLE1BQU0sQ0FBQ0csYUFBUCxHQUF1QjtBQUFFQyxRQUFBQSxTQUFTLEVBQUVoQyxJQUFJLENBQUM4QjtBQUFsQixPQUF2QjtBQUNEOztBQUNELFFBQUk5QixJQUFJLENBQUNpQyxZQUFULEVBQXVCO0FBQ3JCTCxNQUFBQSxNQUFNLENBQUNNLFdBQVAsR0FBcUJsQyxJQUFJLENBQUNpQyxZQUExQjtBQUNEOztBQUNELFdBQU8sQ0FDTCx3Q0FESyxFQUVMLDZFQUZLLEVBR0wsK0NBSEssRUFJTCx5REFKSyxFQUtMLDRCQUE0QixLQUFLN0IsTUFBakMsR0FBMEMsSUFMckMsRUFNTGpCLEtBQUssQ0FBQ3lDLE1BQUQsQ0FOQSxFQU9MLG1CQVBLLEVBUUwsMEJBQTBCLEtBQUt4QixNQUEvQixHQUF3QyxJQVJuQyxFQVNMakIsS0FBSyxDQUFDc0MsT0FBRCxDQVRBLEVBVUwsaUJBVkssRUFXTCxxQkFYSyxFQVlMcEMsSUFaSyxDQVlBLEVBWkEsQ0FBUDtBQWFEOztBQXRGb0Q7OztlQXlGeENRLEkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIE1hbmFnZXMgbWV0aG9kIGNhbGwgdG8gU09BUCBlbmRwb2ludFxuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XG4gKi9cbmltcG9ydCBIdHRwQXBpIGZyb20gJy4vaHR0cC1hcGknO1xuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCB7XG4gIFNjaGVtYSxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwUmVxdWVzdCxcbiAgU29hcFNjaGVtYSxcbiAgU29hcFNjaGVtYURlZixcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBpc01hcE9iamVjdCwgaXNPYmplY3QgfSBmcm9tICcuL3V0aWwvZnVuY3Rpb24nO1xuXG4vKipcbiAqXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BzU2NoZW1hKFxuICBzY2hlbWE6IFNvYXBTY2hlbWFEZWYsXG4gIHNjaGVtYURpY3Q6IHsgW25hbWU6IHN0cmluZ106IFNvYXBTY2hlbWFEZWYgfSxcbik6IFNvYXBTY2hlbWFEZWZbJ3Byb3BzJ10ge1xuICBpZiAoc2NoZW1hLmV4dGVuZHMgJiYgc2NoZW1hRGljdFtzY2hlbWEuZXh0ZW5kc10pIHtcbiAgICBjb25zdCBleHRlbmRTY2hlbWEgPSBzY2hlbWFEaWN0W3NjaGVtYS5leHRlbmRzXTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZ2V0UHJvcHNTY2hlbWEoZXh0ZW5kU2NoZW1hLCBzY2hlbWFEaWN0KSxcbiAgICAgIC4uLnNjaGVtYS5wcm9wcyxcbiAgICB9O1xuICB9XG4gIHJldHVybiBzY2hlbWEucHJvcHM7XG59XG5cbmZ1bmN0aW9uIGlzTmlsbFZhbHVlKHZhbHVlOiB1bmtub3duKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPT0gbnVsbCB8fFxuICAgIChpc01hcE9iamVjdCh2YWx1ZSkgJiZcbiAgICAgIGlzTWFwT2JqZWN0KHZhbHVlLiQpICYmXG4gICAgICB2YWx1ZS4kWyd4c2k6bmlsJ10gPT09ICd0cnVlJylcbiAgKTtcbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FzdFR5cGVVc2luZ1NjaGVtYShcbiAgdmFsdWU6IHVua25vd24sXG4gIHNjaGVtYT86IFNvYXBTY2hlbWEgfCBTb2FwU2NoZW1hRGVmLFxuICBzY2hlbWFEaWN0OiB7IFtuYW1lOiBzdHJpbmddOiBTb2FwU2NoZW1hRGVmIH0gPSB7fSxcbik6IGFueSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNjaGVtYSkpIHtcbiAgICBjb25zdCBuaWxsYWJsZSA9IHNjaGVtYS5sZW5ndGggPT09IDIgJiYgc2NoZW1hWzBdID09PSAnPyc7XG4gICAgY29uc3Qgc2NoZW1hXyA9IG5pbGxhYmxlID8gc2NoZW1hWzFdIDogc2NoZW1hWzBdO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmlsbGFibGUgPyBudWxsIDogW107XG4gICAgfVxuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0pLm1hcCgodikgPT5cbiAgICAgIGNhc3RUeXBlVXNpbmdTY2hlbWEodiwgc2NoZW1hXywgc2NoZW1hRGljdCksXG4gICAgKTtcbiAgfSBlbHNlIGlmIChpc01hcE9iamVjdChzY2hlbWEpKSB7XG4gICAgLy8gaWYgc2NoZW1hIGlzIFNjaGVtYSBEZWZpbml0aW9uLCBub3Qgc2NoZW1hIGVsZW1lbnRcbiAgICBpZiAoJ3R5cGUnIGluIHNjaGVtYSAmJiAncHJvcHMnIGluIHNjaGVtYSAmJiBpc01hcE9iamVjdChzY2hlbWEucHJvcHMpKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IGdldFByb3BzU2NoZW1hKHNjaGVtYSBhcyBTb2FwU2NoZW1hRGVmLCBzY2hlbWFEaWN0KTtcbiAgICAgIHJldHVybiBjYXN0VHlwZVVzaW5nU2NoZW1hKHZhbHVlLCBwcm9wcywgc2NoZW1hRGljdCk7XG4gICAgfVxuICAgIGNvbnN0IG5pbGxhYmxlID0gJz8nIGluIHNjaGVtYTtcbiAgICBjb25zdCBzY2hlbWFfID1cbiAgICAgICc/JyBpbiBzY2hlbWEgPyAoc2NoZW1hWyc/J10gYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgOiBzY2hlbWE7XG4gICAgaWYgKG5pbGxhYmxlICYmIGlzTmlsbFZhbHVlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IGlzTWFwT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDoge307XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNjaGVtYV8pLnJlZHVjZSgobywgaykgPT4ge1xuICAgICAgY29uc3QgcyA9IHNjaGVtYV9ba107XG4gICAgICBjb25zdCB2ID0gb2JqW2tdO1xuICAgICAgY29uc3QgbmlsbGFibGUgPVxuICAgICAgICAoQXJyYXkuaXNBcnJheShzKSAmJiBzLmxlbmd0aCA9PT0gMiAmJiBzWzBdID09PSAnPycpIHx8XG4gICAgICAgIChpc01hcE9iamVjdChzKSAmJiAnPycgaW4gcykgfHxcbiAgICAgICAgKHR5cGVvZiBzID09PSAnc3RyaW5nJyAmJiBzWzBdID09PSAnPycpO1xuICAgICAgaWYgKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyAmJiBuaWxsYWJsZSkge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm8sXG4gICAgICAgIFtrXTogY2FzdFR5cGVVc2luZ1NjaGVtYSh2LCBzLCBzY2hlbWFEaWN0KSxcbiAgICAgIH07XG4gICAgfSwgb2JqKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuaWxsYWJsZSA9IHR5cGVvZiBzY2hlbWEgPT09ICdzdHJpbmcnICYmIHNjaGVtYVswXSA9PT0gJz8nO1xuICAgIGNvbnN0IHR5cGUgPVxuICAgICAgdHlwZW9mIHNjaGVtYSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBuaWxsYWJsZVxuICAgICAgICAgID8gc2NoZW1hLnN1YnN0cmluZygxKVxuICAgICAgICAgIDogc2NoZW1hXG4gICAgICAgIDogJ2FueSc7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXR1cm4gaXNOaWxsVmFsdWUodmFsdWUpID8gKG5pbGxhYmxlID8gbnVsbCA6ICcnKSA6IFN0cmluZyh2YWx1ZSk7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXR1cm4gaXNOaWxsVmFsdWUodmFsdWUpID8gKG5pbGxhYmxlID8gbnVsbCA6IDApIDogTnVtYmVyKHZhbHVlKTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gaXNOaWxsVmFsdWUodmFsdWUpXG4gICAgICAgICAgPyBuaWxsYWJsZVxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgOiB2YWx1ZSA9PT0gJ3RydWUnO1xuICAgICAgY2FzZSAnbnVsbCc6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBpZiAoc2NoZW1hRGljdFt0eXBlXSkge1xuICAgICAgICAgIGNvbnN0IGN2YWx1ZSA9IGNhc3RUeXBlVXNpbmdTY2hlbWEoXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHNjaGVtYURpY3RbdHlwZV0sXG4gICAgICAgICAgICBzY2hlbWFEaWN0LFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgaXNFbXB0eSA9XG4gICAgICAgICAgICBpc01hcE9iamVjdChjdmFsdWUpICYmIE9iamVjdC5rZXlzKGN2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgICAgIHJldHVybiBpc0VtcHR5ICYmIG5pbGxhYmxlID8gbnVsbCA6IGN2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUgYXMgYW55O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvb2t1cFZhbHVlKG9iajogdW5rbm93biwgcHJvcFJlZ0V4cHM6IFJlZ0V4cFtdKTogdW5rbm93biB7XG4gIGNvbnN0IHJlZ2V4cCA9IHByb3BSZWdFeHBzLnNoaWZ0KCk7XG4gIGlmICghcmVnZXhwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBpZiAoaXNNYXBPYmplY3Qob2JqKSkge1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhvYmopKSB7XG4gICAgICBpZiAocmVnZXhwLnRlc3QocHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIGxvb2t1cFZhbHVlKG9ialtwcm9wXSwgcHJvcFJlZ0V4cHMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRvWE1MKG5hbWU6IG9iamVjdCB8IHN0cmluZyB8IG51bGwsIHZhbHVlPzogYW55KTogc3RyaW5nIHtcbiAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgdmFsdWUgPSBuYW1lO1xuICAgIG5hbWUgPSBudWxsO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoKHYpID0+IHRvWE1MKG5hbWUsIHYpKS5qb2luKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBhdHRycyA9IFtdO1xuICAgIGNvbnN0IGVsZW1zID0gW107XG4gICAgaWYgKGlzTWFwT2JqZWN0KHZhbHVlKSkge1xuICAgICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xuICAgICAgICBjb25zdCB2ID0gdmFsdWVba107XG4gICAgICAgIGlmIChrWzBdID09PSAnQCcpIHtcbiAgICAgICAgICBjb25zdCBrayA9IGsuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgIGF0dHJzLnB1c2goa2sgKyAnPVwiJyArIHYgKyAnXCInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtcy5wdXNoKHRvWE1MKGssIHYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFsdWUgPSBlbGVtcy5qb2luKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csICcmYXBvczsnKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRUYWcgPSBuYW1lXG4gICAgICA/ICc8JyArIG5hbWUgKyAoYXR0cnMubGVuZ3RoID4gMCA/ICcgJyArIGF0dHJzLmpvaW4oJyAnKSA6ICcnKSArICc+J1xuICAgICAgOiAnJztcbiAgICBjb25zdCBlbmRUYWcgPSBuYW1lID8gJzwvJyArIG5hbWUgKyAnPicgOiAnJztcbiAgICByZXR1cm4gc3RhcnRUYWcgKyB2YWx1ZSArIGVuZFRhZztcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFNPQVBPcHRpb25zID0ge1xuICBlbmRwb2ludFVybDogc3RyaW5nO1xuICB4bWxucz86IHN0cmluZztcbn07XG5cbi8qKlxuICogQ2xhc3MgZm9yIFNPQVAgZW5kcG9pbnQgb2YgU2FsZXNmb3JjZVxuICpcbiAqIEBwcm90ZWN0ZWRcbiAqIEBjbGFzc1xuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0Nvbm5lY3Rpb259IGNvbm4gLSBDb25uZWN0aW9uIGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNPQVAgZW5kcG9pbnQgc2V0dGluZyBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5lbmRwb2ludFVybCAtIFNPQVAgZW5kcG9pbnQgVVJMXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMueG1sbnNdIC0gWE1MIG5hbWVzcGFjZSBmb3IgbWV0aG9kIGNhbGwgKGRlZmF1bHQgaXMgXCJ1cm46cGFydG5lci5zb2FwLnNmb3JjZS5jb21cIilcbiAqL1xuZXhwb3J0IGNsYXNzIFNPQVA8UyBleHRlbmRzIFNjaGVtYT4gZXh0ZW5kcyBIdHRwQXBpPFM+IHtcbiAgX2VuZHBvaW50VXJsOiBzdHJpbmc7XG4gIF94bWxuczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbm46IENvbm5lY3Rpb248Uz4sIG9wdGlvbnM6IFNPQVBPcHRpb25zKSB7XG4gICAgc3VwZXIoY29ubiwgb3B0aW9ucyk7XG4gICAgdGhpcy5fZW5kcG9pbnRVcmwgPSBvcHRpb25zLmVuZHBvaW50VXJsO1xuICAgIHRoaXMuX3htbG5zID0gb3B0aW9ucy54bWxucyB8fCAndXJuOnBhcnRuZXIuc29hcC5zZm9yY2UuY29tJztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgU09BUCBjYWxsIHVzaW5nIG1ldGhvZCBhbmQgYXJndW1lbnRzXG4gICAqL1xuICBhc3luYyBpbnZva2UoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgYXJnczogb2JqZWN0LFxuICAgIHNjaGVtYT86IFNvYXBTY2hlbWEgfCBTb2FwU2NoZW1hRGVmLFxuICAgIHNjaGVtYURpY3Q/OiB7IFtuYW1lOiBzdHJpbmddOiBTb2FwU2NoZW1hRGVmIH0sXG4gICkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogdGhpcy5fZW5kcG9pbnRVcmwsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC94bWwnLFxuICAgICAgICBTT0FQQWN0aW9uOiAnXCJcIicsXG4gICAgICB9LFxuICAgICAgX21lc3NhZ2U6IHsgW21ldGhvZF06IGFyZ3MgfSxcbiAgICB9IGFzIEh0dHBSZXF1ZXN0KTtcbiAgICByZXR1cm4gc2NoZW1hID8gY2FzdFR5cGVVc2luZ1NjaGVtYShyZXMsIHNjaGVtYSwgc2NoZW1hRGljdCkgOiByZXM7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGJlZm9yZVNlbmQocmVxdWVzdDogSHR0cFJlcXVlc3QgJiB7IF9tZXNzYWdlOiBvYmplY3QgfSkge1xuICAgIHJlcXVlc3QuYm9keSA9IHRoaXMuX2NyZWF0ZUVudmVsb3BlKHJlcXVlc3QuX21lc3NhZ2UpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgaXNTZXNzaW9uRXhwaXJlZChyZXNwb25zZTogSHR0cFJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgLzxmYXVsdGNvZGU+W2EtekEtWl0rOklOVkFMSURfU0VTU0lPTl9JRDxcXC9mYXVsdGNvZGU+Ly50ZXN0KHJlc3BvbnNlLmJvZHkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIHBhcnNlRXJyb3IoYm9keTogc3RyaW5nKSB7XG4gICAgY29uc3QgZXJyb3IgPSBsb29rdXBWYWx1ZShib2R5LCBbLzpFbnZlbG9wZSQvLCAvOkJvZHkkLywgLzpGYXVsdCQvXSkgYXMge1xuICAgICAgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvckNvZGU6IGVycm9yLmZhdWx0Y29kZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLmZhdWx0c3RyaW5nLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBhc3luYyBnZXRSZXNwb25zZUJvZHkocmVzcG9uc2U6IEh0dHBSZXNwb25zZSkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCBzdXBlci5nZXRSZXNwb25zZUJvZHkocmVzcG9uc2UpO1xuICAgIHJldHVybiBsb29rdXBWYWx1ZShib2R5LCBbLzpFbnZlbG9wZSQvLCAvOkJvZHkkLywgLy4rL10pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY3JlYXRlRW52ZWxvcGUobWVzc2FnZTogb2JqZWN0KSB7XG4gICAgY29uc3QgaGVhZGVyOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGNvbnN0IGNvbm4gPSB0aGlzLl9jb25uO1xuICAgIGlmIChjb25uLmFjY2Vzc1Rva2VuKSB7XG4gICAgICBoZWFkZXIuU2Vzc2lvbkhlYWRlciA9IHsgc2Vzc2lvbklkOiBjb25uLmFjY2Vzc1Rva2VuIH07XG4gICAgfVxuICAgIGlmIChjb25uLl9jYWxsT3B0aW9ucykge1xuICAgICAgaGVhZGVyLkNhbGxPcHRpb25zID0gY29ubi5fY2FsbE9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+JyxcbiAgICAgICc8c29hcGVudjpFbnZlbG9wZSB4bWxuczpzb2FwZW52PVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS9cIicsXG4gICAgICAnIHhtbG5zOnhzZD1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hXCInLFxuICAgICAgJyB4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiPicsXG4gICAgICAnPHNvYXBlbnY6SGVhZGVyIHhtbG5zPVwiJyArIHRoaXMuX3htbG5zICsgJ1wiPicsXG4gICAgICB0b1hNTChoZWFkZXIpLFxuICAgICAgJzwvc29hcGVudjpIZWFkZXI+JyxcbiAgICAgICc8c29hcGVudjpCb2R5IHhtbG5zPVwiJyArIHRoaXMuX3htbG5zICsgJ1wiPicsXG4gICAgICB0b1hNTChtZXNzYWdlKSxcbiAgICAgICc8L3NvYXBlbnY6Qm9keT4nLFxuICAgICAgJzwvc29hcGVudjpFbnZlbG9wZT4nLFxuICAgIF0uam9pbignJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU09BUDtcbiJdfQ==