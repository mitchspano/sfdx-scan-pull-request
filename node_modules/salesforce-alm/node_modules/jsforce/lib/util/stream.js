"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createLazyStream = createLazyStream;
exports.readAll = readAll;
exports.concatStreamsAsDuplex = concatStreamsAsDuplex;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _stream = require("stream");

function createLazyStream() {
  const ins = new _stream.PassThrough();
  const outs = new _stream.PassThrough();
  const stream = concatStreamsAsDuplex(ins, outs);
  let piped = false;

  const setStream = str => {
    if (piped) {
      throw new Error('stream is already piped to actual stream');
    }

    piped = true;
    ins.pipe(str).pipe(outs);
  };

  return {
    stream,
    setStream
  };
}

class MemoryWriteStream extends _stream.Writable {
  constructor() {
    super();
    (0, _defineProperty2.default)(this, "_buf", void 0);
    this._buf = Buffer.alloc(0);
  }

  _write(chunk, encoding, callback) {
    this._buf = (0, _concat.default)(Buffer).call(Buffer, [this._buf, chunk]);
    callback();
  }

  _writev(data, callback) {
    this._buf = (0, _concat.default)(Buffer).call(Buffer, [this._buf, ...(0, _map.default)(data).call(data, ({
      chunk
    }) => chunk)]);
    callback();
  }

  toString() {
    return this._buf.toString();
  }

}

async function readAll(rs) {
  return new _promise.default((resolve, reject) => {
    const ws = new MemoryWriteStream();
    rs.on('error', reject).pipe(ws).on('finish', () => resolve(ws.toString()));
  });
}

class DuplexifiedStream extends _stream.Duplex {
  constructor(ws, rs, opts = {}) {
    var _opts$writableObjectM, _opts$readableObjectM;

    super({
      writableObjectMode: (_opts$writableObjectM = opts.writableObjectMode) !== null && _opts$writableObjectM !== void 0 ? _opts$writableObjectM : ws.writableObjectMode,
      readableObjectMode: (_opts$readableObjectM = opts.readableObjectMode) !== null && _opts$readableObjectM !== void 0 ? _opts$readableObjectM : rs.readableObjectMode
    });
    (0, _defineProperty2.default)(this, "_writable", void 0);
    (0, _defineProperty2.default)(this, "_readable", void 0);
    this._writable = ws;
    this._readable = rs;
    ws.once('finish', () => {
      this.end();
    });
    this.once('finish', () => {
      ws.end();
    });
    rs.on('readable', () => {
      this._readStream();
    });
    rs.once('end', () => {
      this.push(null);
    });
    ws.on('error', err => this.emit('error', err));
    rs.on('error', err => this.emit('error', err));
  }

  _write(chunk, encoding, callback) {
    this._writable.write(chunk, encoding, callback);
  }

  _read(n) {
    this._readStream(n);
  }

  _readStream(n) {
    let data;

    while ((data = this._readable.read(n)) !== null) {
      this.push(data);
    }
  }

}

function concatStreamsAsDuplex(ws, rs, opts) {
  return new DuplexifiedStream(ws, rs, opts);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3N0cmVhbS50cyJdLCJuYW1lcyI6WyJjcmVhdGVMYXp5U3RyZWFtIiwiaW5zIiwiUGFzc1Rocm91Z2giLCJvdXRzIiwic3RyZWFtIiwiY29uY2F0U3RyZWFtc0FzRHVwbGV4IiwicGlwZWQiLCJzZXRTdHJlYW0iLCJzdHIiLCJFcnJvciIsInBpcGUiLCJNZW1vcnlXcml0ZVN0cmVhbSIsIldyaXRhYmxlIiwiY29uc3RydWN0b3IiLCJfYnVmIiwiQnVmZmVyIiwiYWxsb2MiLCJfd3JpdGUiLCJjaHVuayIsImVuY29kaW5nIiwiY2FsbGJhY2siLCJfd3JpdGV2IiwiZGF0YSIsInRvU3RyaW5nIiwicmVhZEFsbCIsInJzIiwicmVzb2x2ZSIsInJlamVjdCIsIndzIiwib24iLCJEdXBsZXhpZmllZFN0cmVhbSIsIkR1cGxleCIsIm9wdHMiLCJ3cml0YWJsZU9iamVjdE1vZGUiLCJyZWFkYWJsZU9iamVjdE1vZGUiLCJfd3JpdGFibGUiLCJfcmVhZGFibGUiLCJvbmNlIiwiZW5kIiwiX3JlYWRTdHJlYW0iLCJwdXNoIiwiZXJyIiwiZW1pdCIsIndyaXRlIiwiX3JlYWQiLCJuIiwicmVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTyxTQUFTQSxnQkFBVCxHQUE0QjtBQUNqQyxRQUFNQyxHQUFHLEdBQUcsSUFBSUMsbUJBQUosRUFBWjtBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJRCxtQkFBSixFQUFiO0FBQ0EsUUFBTUUsTUFBTSxHQUFHQyxxQkFBcUIsQ0FBQ0osR0FBRCxFQUFNRSxJQUFOLENBQXBDO0FBQ0EsTUFBSUcsS0FBSyxHQUFHLEtBQVo7O0FBQ0EsUUFBTUMsU0FBUyxHQUFJQyxHQUFELElBQWlCO0FBQ2pDLFFBQUlGLEtBQUosRUFBVztBQUNULFlBQU0sSUFBSUcsS0FBSixDQUFVLDBDQUFWLENBQU47QUFDRDs7QUFDREgsSUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQUwsSUFB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RUFBZ0JZLEdBQUQsSUFBUyxLQUFLQyxJQUFMLENBQVUsT0FBVixFQUFtQkQsR0FBbkIsQ0FBeEI7QUFDRDs7QUFFRHhCLEVBQUFBLE1BQU0sQ0FBQ0MsS0FBRCxFQUFhQyxRQUFiLEVBQTRCQyxRQUE1QixFQUEyQztBQUMvQyxTQUFLZSxTQUFMLENBQWVRLEtBQWYsQ0FBcUJ6QixLQUFyQixFQUE0QkMsUUFBNUIsRUFBc0NDLFFBQXRDO0FBQ0Q7O0FBRUR3QixFQUFBQSxLQUFLLENBQUNDLENBQUQsRUFBWTtBQUNmLFNBQUtOLFdBQUwsQ0FBaUJNLENBQWpCO0FBQ0Q7O0FBRUROLEVBQUFBLFdBQVcsQ0FBQ00sQ0FBRCxFQUFhO0FBQ3RCLFFBQUl2QixJQUFKOztBQUNBLFdBQU8sQ0FBQ0EsSUFBSSxHQUFHLEtBQUtjLFNBQUwsQ0FBZVUsSUFBZixDQUFvQkQsQ0FBcEIsQ0FBUixNQUFvQyxJQUEzQyxFQUFpRDtBQUMvQyxXQUFLTCxJQUFMLENBQVVsQixJQUFWO0FBQ0Q7QUFDRjs7QUE1Q29DOztBQStDaEMsU0FBU2pCLHFCQUFULENBQ0x1QixFQURLLEVBRUxILEVBRkssRUFHTE8sSUFISyxFQUlHO0FBQ1IsU0FBTyxJQUFJRixpQkFBSixDQUFzQkYsRUFBdEIsRUFBMEJILEVBQTFCLEVBQThCTyxJQUE5QixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEdXBsZXgsIFBhc3NUaHJvdWdoLCBSZWFkYWJsZSwgV3JpdGFibGUgfSBmcm9tICdzdHJlYW0nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGF6eVN0cmVhbSgpIHtcbiAgY29uc3QgaW5zID0gbmV3IFBhc3NUaHJvdWdoKCk7XG4gIGNvbnN0IG91dHMgPSBuZXcgUGFzc1Rocm91Z2goKTtcbiAgY29uc3Qgc3RyZWFtID0gY29uY2F0U3RyZWFtc0FzRHVwbGV4KGlucywgb3V0cyk7XG4gIGxldCBwaXBlZCA9IGZhbHNlO1xuICBjb25zdCBzZXRTdHJlYW0gPSAoc3RyOiBEdXBsZXgpID0+IHtcbiAgICBpZiAocGlwZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc3RyZWFtIGlzIGFscmVhZHkgcGlwZWQgdG8gYWN0dWFsIHN0cmVhbScpO1xuICAgIH1cbiAgICBwaXBlZCA9IHRydWU7XG4gICAgaW5zLnBpcGUoc3RyKS5waXBlKG91dHMpO1xuICB9O1xuICByZXR1cm4geyBzdHJlYW0sIHNldFN0cmVhbSB9O1xufVxuXG5jbGFzcyBNZW1vcnlXcml0ZVN0cmVhbSBleHRlbmRzIFdyaXRhYmxlIHtcbiAgX2J1ZjogQnVmZmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYnVmID0gQnVmZmVyLmFsbG9jKDApO1xuICB9XG5cbiAgX3dyaXRlKGNodW5rOiBCdWZmZXIsIGVuY29kaW5nOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIHRoaXMuX2J1ZiA9IEJ1ZmZlci5jb25jYXQoW3RoaXMuX2J1ZiwgY2h1bmtdKTtcbiAgICBjYWxsYmFjaygpO1xuICB9XG5cbiAgX3dyaXRldihcbiAgICBkYXRhOiBBcnJheTx7IGNodW5rOiBCdWZmZXI7IGVuY29kaW5nOiBzdHJpbmcgfT4sXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxuICApIHtcbiAgICB0aGlzLl9idWYgPSBCdWZmZXIuY29uY2F0KFt0aGlzLl9idWYsIC4uLmRhdGEubWFwKCh7IGNodW5rIH0pID0+IGNodW5rKV0pO1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRBbGwocnM6IFJlYWRhYmxlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB3cyA9IG5ldyBNZW1vcnlXcml0ZVN0cmVhbSgpO1xuICAgIHJzLm9uKCdlcnJvcicsIHJlamVjdClcbiAgICAgIC5waXBlKHdzKVxuICAgICAgLm9uKCdmaW5pc2gnLCAoKSA9PiByZXNvbHZlKHdzLnRvU3RyaW5nKCkpKTtcbiAgfSk7XG59XG5cbmNsYXNzIER1cGxleGlmaWVkU3RyZWFtIGV4dGVuZHMgRHVwbGV4IHtcbiAgX3dyaXRhYmxlOiBXcml0YWJsZTtcbiAgX3JlYWRhYmxlOiBSZWFkYWJsZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB3czogV3JpdGFibGUsXG4gICAgcnM6IFJlYWRhYmxlLFxuICAgIG9wdHM6IHsgd3JpdGFibGVPYmplY3RNb2RlPzogYm9vbGVhbjsgcmVhZGFibGVPYmplY3RNb2RlPzogYm9vbGVhbiB9ID0ge30sXG4gICkge1xuICAgIHN1cGVyKHtcbiAgICAgIHdyaXRhYmxlT2JqZWN0TW9kZTogb3B0cy53cml0YWJsZU9iamVjdE1vZGUgPz8gd3Mud3JpdGFibGVPYmplY3RNb2RlLFxuICAgICAgcmVhZGFibGVPYmplY3RNb2RlOiBvcHRzLnJlYWRhYmxlT2JqZWN0TW9kZSA/PyBycy5yZWFkYWJsZU9iamVjdE1vZGUsXG4gICAgfSk7XG4gICAgdGhpcy5fd3JpdGFibGUgPSB3cztcbiAgICB0aGlzLl9yZWFkYWJsZSA9IHJzO1xuICAgIHdzLm9uY2UoJ2ZpbmlzaCcsICgpID0+IHtcbiAgICAgIHRoaXMuZW5kKCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmNlKCdmaW5pc2gnLCAoKSA9PiB7XG4gICAgICB3cy5lbmQoKTtcbiAgICB9KTtcbiAgICBycy5vbigncmVhZGFibGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9yZWFkU3RyZWFtKCk7XG4gICAgfSk7XG4gICAgcnMub25jZSgnZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5wdXNoKG51bGwpO1xuICAgIH0pO1xuICAgIHdzLm9uKCdlcnJvcicsIChlcnIpID0+IHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpKTtcbiAgICBycy5vbignZXJyb3InLCAoZXJyKSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKSk7XG4gIH1cblxuICBfd3JpdGUoY2h1bms6IGFueSwgZW5jb2Rpbmc6IGFueSwgY2FsbGJhY2s6IGFueSkge1xuICAgIHRoaXMuX3dyaXRhYmxlLndyaXRlKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICB9XG5cbiAgX3JlYWQobjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmVhZFN0cmVhbShuKTtcbiAgfVxuXG4gIF9yZWFkU3RyZWFtKG4/OiBudW1iZXIpIHtcbiAgICBsZXQgZGF0YTtcbiAgICB3aGlsZSAoKGRhdGEgPSB0aGlzLl9yZWFkYWJsZS5yZWFkKG4pKSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wdXNoKGRhdGEpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0U3RyZWFtc0FzRHVwbGV4KFxuICB3czogV3JpdGFibGUsXG4gIHJzOiBSZWFkYWJsZSxcbiAgb3B0cz86IHsgd3JpdGFibGVPYmplY3RNb2RlPzogYm9vbGVhbjsgcmVhZGFibGVPYmplY3RNb2RlPzogYm9vbGVhbiB9LFxuKTogRHVwbGV4IHtcbiAgcmV0dXJuIG5ldyBEdXBsZXhpZmllZFN0cmVhbSh3cywgcnMsIG9wdHMpO1xufVxuIl19