"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StreamPromise = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _stream = require("stream");

/**
 *
 */

/**
 *
 */
class StreamPromise extends _promise.default {
  stream() {
    // dummy
    return new _stream.Duplex();
  }

  static create(builder) {
    const {
      stream,
      promise
    } = builder();
    const streamPromise = new StreamPromise((resolve, reject) => {
      promise.then(resolve, reject);
    });

    streamPromise.stream = () => stream;

    return streamPromise;
  }

}

exports.StreamPromise = StreamPromise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3Byb21pc2UudHMiXSwibmFtZXMiOlsiU3RyZWFtUHJvbWlzZSIsInN0cmVhbSIsIkR1cGxleCIsImNyZWF0ZSIsImJ1aWxkZXIiLCJwcm9taXNlIiwic3RyZWFtUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBOztBQUhBO0FBQ0E7QUFDQTs7QUFXQTtBQUNBO0FBQ0E7QUFDTyxNQUFNQSxhQUFOLDBCQUEwQztBQUMvQ0MsRUFBQUEsTUFBTSxHQUFHO0FBQ1A7QUFDQSxXQUFPLElBQUlDLGNBQUosRUFBUDtBQUNEOztBQUVELFNBQU9DLE1BQVAsQ0FBaUJDLE9BQWpCLEVBQW1EO0FBQ2pELFVBQU07QUFBRUgsTUFBQUEsTUFBRjtBQUFVSSxNQUFBQTtBQUFWLFFBQXNCRCxPQUFPLEVBQW5DO0FBQ0EsVUFBTUUsYUFBYSxHQUFHLElBQUlOLGFBQUosQ0FBcUIsQ0FBQ08sT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQzlESCxNQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYUYsT0FBYixFQUFzQkMsTUFBdEI7QUFDRCxLQUZxQixDQUF0Qjs7QUFHQUYsSUFBQUEsYUFBYSxDQUFDTCxNQUFkLEdBQXVCLE1BQU1BLE1BQTdCOztBQUNBLFdBQU9LLGFBQVA7QUFDRDs7QUFiOEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKi9cbmltcG9ydCB7IER1cGxleCB9IGZyb20gJ3N0cmVhbSc7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgU3RyZWFtUHJvbWlzZUJ1aWxkZXI8VD4gPSAoKSA9PiB7XG4gIHN0cmVhbTogRHVwbGV4O1xuICBwcm9taXNlOiBQcm9taXNlPFQ+O1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtUHJvbWlzZTxUPiBleHRlbmRzIFByb21pc2U8VD4ge1xuICBzdHJlYW0oKSB7XG4gICAgLy8gZHVtbXlcbiAgICByZXR1cm4gbmV3IER1cGxleCgpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZTxUPihidWlsZGVyOiBTdHJlYW1Qcm9taXNlQnVpbGRlcjxUPikge1xuICAgIGNvbnN0IHsgc3RyZWFtLCBwcm9taXNlIH0gPSBidWlsZGVyKCk7XG4gICAgY29uc3Qgc3RyZWFtUHJvbWlzZSA9IG5ldyBTdHJlYW1Qcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICAgIHN0cmVhbVByb21pc2Uuc3RyZWFtID0gKCkgPT4gc3RyZWFtO1xuICAgIHJldHVybiBzdHJlYW1Qcm9taXNlO1xuICB9XG59XG4iXX0=