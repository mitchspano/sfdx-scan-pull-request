"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _context, _context2, _context3, _context4, _context5, _context6;

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {
  Date: true,
  SfDate: true,
  registry: true,
  Registry: true,
  browser: true,
  BrowserClient: true,
  VERSION: true,
  RecordReference: true,
  RecordStream: true
};

_Object$defineProperty(exports, "Date", {
  enumerable: true,
  get: function () {
    return _date.default;
  }
});

_Object$defineProperty(exports, "SfDate", {
  enumerable: true,
  get: function () {
    return _date.default;
  }
});

_Object$defineProperty(exports, "registry", {
  enumerable: true,
  get: function () {
    return _registry.default;
  }
});

_Object$defineProperty(exports, "Registry", {
  enumerable: true,
  get: function () {
    return _registry.Registry;
  }
});

_Object$defineProperty(exports, "browser", {
  enumerable: true,
  get: function () {
    return _client.default;
  }
});

_Object$defineProperty(exports, "BrowserClient", {
  enumerable: true,
  get: function () {
    return _client.BrowserClient;
  }
});

_Object$defineProperty(exports, "VERSION", {
  enumerable: true,
  get: function () {
    return _VERSION.default;
  }
});

_Object$defineProperty(exports, "RecordReference", {
  enumerable: true,
  get: function () {
    return _recordReference.default;
  }
});

_Object$defineProperty(exports, "RecordStream", {
  enumerable: true,
  get: function () {
    return _recordStream.default;
  }
});

exports.default = void 0;

var _jsforce = _interopRequireDefault(require("./jsforce"));

var _date = _interopRequireDefault(require("./date"));

var _registry = _interopRequireWildcard(require("./registry"));

var _client = _interopRequireWildcard(require("./browser/client"));

var _VERSION = _interopRequireDefault(require("./VERSION"));

var _recordReference = _interopRequireDefault(require("./record-reference"));

var _recordStream = _interopRequireDefault(require("./record-stream"));

var _oauth = require("./oauth2");

_forEachInstanceProperty(_context = _Object$keys(_oauth)).call(_context, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _oauth[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _oauth[key];
    }
  });
});

var _connection = require("./connection");

_forEachInstanceProperty(_context2 = _Object$keys(_connection)).call(_context2, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _connection[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _connection[key];
    }
  });
});

var _query = require("./query");

_forEachInstanceProperty(_context3 = _Object$keys(_query)).call(_context3, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _query[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _query[key];
    }
  });
});

var _quickAction = require("./quick-action");

_forEachInstanceProperty(_context4 = _Object$keys(_quickAction)).call(_context4, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _quickAction[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _quickAction[key];
    }
  });
});

var _sobject = require("./sobject");

_forEachInstanceProperty(_context5 = _Object$keys(_sobject)).call(_context5, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sobject[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sobject[key];
    }
  });
});

var _types = require("./types");

_forEachInstanceProperty(_context6 = _Object$keys(_types)).call(_context6, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _default = _jsforce.default;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbImpzZm9yY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O2VBWWVBLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpzZm9yY2UgZnJvbSAnLi9qc2ZvcmNlJztcbmltcG9ydCBTZkRhdGUgZnJvbSAnLi9kYXRlJztcbmltcG9ydCByZWdpc3RyeSwgeyBSZWdpc3RyeSB9IGZyb20gJy4vcmVnaXN0cnknO1xuaW1wb3J0IGJyb3dzZXIsIHsgQnJvd3NlckNsaWVudCB9IGZyb20gJy4vYnJvd3Nlci9jbGllbnQnO1xuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi9WRVJTSU9OJztcblxuaW1wb3J0IFJlY29yZFJlZmVyZW5jZSBmcm9tICcuL3JlY29yZC1yZWZlcmVuY2UnO1xuaW1wb3J0IFJlY29yZFN0cmVhbSBmcm9tICcuL3JlY29yZC1zdHJlYW0nO1xuXG5leHBvcnQgKiBmcm9tICcuL29hdXRoMic7XG5leHBvcnQgKiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9xdWVyeSc7XG5leHBvcnQgKiBmcm9tICcuL3F1aWNrLWFjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NvYmplY3QnO1xuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB7XG4gIFZFUlNJT04sXG4gIFNmRGF0ZSBhcyBEYXRlLFxuICBTZkRhdGUsXG4gIFJlZ2lzdHJ5LFxuICBCcm93c2VyQ2xpZW50LFxuICBSZWNvcmRSZWZlcmVuY2UsXG4gIFJlY29yZFN0cmVhbSxcbiAgcmVnaXN0cnksXG4gIGJyb3dzZXIsXG59O1xuZXhwb3J0IGRlZmF1bHQganNmb3JjZTtcbiJdfQ==