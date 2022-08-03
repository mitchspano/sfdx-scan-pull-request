"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.iterator");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.registerModule = registerModule;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = require("events");

var _VERSION = _interopRequireDefault(require("./VERSION"));

var _connection = _interopRequireDefault(require("./connection"));

var _oauth = _interopRequireDefault(require("./oauth2"));

var _date = _interopRequireDefault(require("./date"));

var _registry = _interopRequireDefault(require("./registry"));

var _client = _interopRequireWildcard(require("./browser/client"));

/**
 *
 */
class JSforce extends _events.EventEmitter {
  constructor(...args) {
    super(...args);
    (0, _defineProperty3.default)(this, "VERSION", _VERSION.default);
    (0, _defineProperty3.default)(this, "Connection", _connection.default);
    (0, _defineProperty3.default)(this, "OAuth2", _oauth.default);
    (0, _defineProperty3.default)(this, "SfDate", _date.default);
    (0, _defineProperty3.default)(this, "Date", _date.default);
    (0, _defineProperty3.default)(this, "BrowserClient", _client.BrowserClient);
    (0, _defineProperty3.default)(this, "registry", _registry.default);
    (0, _defineProperty3.default)(this, "browser", _client.default);
  }

}

function registerModule(name, factory) {
  jsforce.on('connection:new', conn => {
    let obj = undefined;
    (0, _defineProperty2.default)(conn, name, {
      get() {
        var _obj;

        obj = (_obj = obj) !== null && _obj !== void 0 ? _obj : factory(conn);
        return obj;
      },

      enumerable: true,
      configurable: true
    });
  });
}

const jsforce = new JSforce();
var _default = jsforce;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc2ZvcmNlLnRzIl0sIm5hbWVzIjpbIkpTZm9yY2UiLCJFdmVudEVtaXR0ZXIiLCJWRVJTSU9OIiwiQ29ubmVjdGlvbiIsIk9BdXRoMiIsIlNmRGF0ZSIsIkJyb3dzZXJDbGllbnQiLCJyZWdpc3RyeSIsImNsaWVudCIsInJlZ2lzdGVyTW9kdWxlIiwibmFtZSIsImZhY3RvcnkiLCJqc2ZvcmNlIiwib24iLCJjb25uIiwib2JqIiwidW5kZWZpbmVkIiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsT0FBTixTQUFzQkMsb0JBQXRCLENBQW1DO0FBQUE7QUFBQTtBQUFBLG1EQUNQQyxnQkFETztBQUFBLHNEQUVEQyxtQkFGQztBQUFBLGtEQUdUQyxjQUhTO0FBQUEsa0RBSVRDLGFBSlM7QUFBQSxnREFLWEEsYUFMVztBQUFBLHlEQU1LQyxxQkFOTDtBQUFBLG9EQU9aQyxpQkFQWTtBQUFBLG1EQVFSQyxlQVJRO0FBQUE7O0FBQUE7O0FBVzVCLFNBQVNDLGNBQVQsQ0FDTEMsSUFESyxFQUVMQyxPQUZLLEVBR0w7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxFQUFSLENBQVcsZ0JBQVgsRUFBOEJDLElBQUQsSUFBc0I7QUFDakQsUUFBSUMsR0FBUSxHQUFHQyxTQUFmO0FBQ0Esa0NBQXNCRixJQUF0QixFQUE0QkosSUFBNUIsRUFBa0M7QUFDaENPLE1BQUFBLEdBQUcsR0FBRztBQUFBOztBQUNKRixRQUFBQSxHQUFHLFdBQUdBLEdBQUgsdUNBQVVKLE9BQU8sQ0FBQ0csSUFBRCxDQUFwQjtBQUNBLGVBQU9DLEdBQVA7QUFDRCxPQUorQjs7QUFLaENHLE1BQUFBLFVBQVUsRUFBRSxJQUxvQjtBQU1oQ0MsTUFBQUEsWUFBWSxFQUFFO0FBTmtCLEtBQWxDO0FBUUQsR0FWRDtBQVdEOztBQUVELE1BQU1QLE9BQU8sR0FBRyxJQUFJWixPQUFKLEVBQWhCO2VBQ2VZLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi9WRVJTSU9OJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XG5pbXBvcnQgT0F1dGgyIGZyb20gJy4vb2F1dGgyJztcbmltcG9ydCBTZkRhdGUgZnJvbSAnLi9kYXRlJztcbmltcG9ydCByZWdpc3RyeSwgeyBSZWdpc3RyeSB9IGZyb20gJy4vcmVnaXN0cnknO1xuaW1wb3J0IGNsaWVudCwgeyBCcm93c2VyQ2xpZW50IH0gZnJvbSAnLi9icm93c2VyL2NsaWVudCc7XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgSlNmb3JjZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIFZFUlNJT046IHR5cGVvZiBWRVJTSU9OID0gVkVSU0lPTjtcbiAgQ29ubmVjdGlvbjogdHlwZW9mIENvbm5lY3Rpb24gPSBDb25uZWN0aW9uO1xuICBPQXV0aDI6IHR5cGVvZiBPQXV0aDIgPSBPQXV0aDI7XG4gIFNmRGF0ZTogdHlwZW9mIFNmRGF0ZSA9IFNmRGF0ZTtcbiAgRGF0ZTogdHlwZW9mIFNmRGF0ZSA9IFNmRGF0ZTtcbiAgQnJvd3NlckNsaWVudDogdHlwZW9mIEJyb3dzZXJDbGllbnQgPSBCcm93c2VyQ2xpZW50O1xuICByZWdpc3RyeTogUmVnaXN0cnkgPSByZWdpc3RyeTtcbiAgYnJvd3NlcjogQnJvd3NlckNsaWVudCA9IGNsaWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlKFxuICBuYW1lOiBzdHJpbmcsXG4gIGZhY3Rvcnk6IChjb25uOiBDb25uZWN0aW9uKSA9PiBhbnksXG4pIHtcbiAganNmb3JjZS5vbignY29ubmVjdGlvbjpuZXcnLCAoY29ubjogQ29ubmVjdGlvbikgPT4ge1xuICAgIGxldCBvYmo6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29ubiwgbmFtZSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBvYmogPSBvYmogPz8gZmFjdG9yeShjb25uKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QganNmb3JjZSA9IG5ldyBKU2ZvcmNlKCk7XG5leHBvcnQgZGVmYXVsdCBqc2ZvcmNlO1xuIl19