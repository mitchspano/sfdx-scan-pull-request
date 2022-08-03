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

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.BaseRegistry = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _connection = _interopRequireDefault(require("../connection"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 *
 */
class BaseRegistry {
  constructor() {
    (0, _defineProperty2.default)(this, "_registryConfig", {});
  }

  _saveConfig() {
    throw new Error('_saveConfig must be implemented in subclass');
  }

  _getClients() {
    return this._registryConfig.clients || (this._registryConfig.clients = {});
  }

  _getConnections() {
    return this._registryConfig.connections || (this._registryConfig.connections = {});
  }

  async getConnectionNames() {
    return (0, _keys.default)(this._getConnections());
  }

  async getConnection(name) {
    const config = await this.getConnectionConfig(name);
    return config ? new _connection.default(config) : null;
  }

  async getConnectionConfig(name) {
    if (!name) {
      name = this._registryConfig['default'];
    }

    const connections = this._getConnections();

    const connConfig = name ? connections[name] : undefined;

    if (!connConfig) {
      return null;
    }

    const {
      client
    } = connConfig,
          connConfig_ = (0, _objectWithoutProperties2.default)(connConfig, ["client"]);

    if (client) {
      return _objectSpread(_objectSpread({}, connConfig_), {}, {
        oauth2: _objectSpread({}, await this.getClientConfig(client))
      });
    }

    return connConfig_;
  }

  async saveConnectionConfig(name, connConfig) {
    const connections = this._getConnections();

    const {
      oauth2
    } = connConfig,
          connConfig_ = (0, _objectWithoutProperties2.default)(connConfig, ["oauth2"]);
    let persistConnConfig = connConfig_;

    if (oauth2) {
      const clientName = this._findClientName(oauth2);

      if (clientName) {
        persistConnConfig = _objectSpread(_objectSpread({}, persistConnConfig), {}, {
          client: clientName
        });
      }

      delete connConfig.oauth2;
    }

    connections[name] = persistConnConfig;

    this._saveConfig();
  }

  _findClientName({
    clientId,
    loginUrl
  }) {
    const clients = this._getClients();

    for (const name of (0, _keys.default)(clients)) {
      const client = clients[name];

      if (client.clientId === clientId && (client.loginUrl || 'https://login.salesforce.com') === loginUrl) {
        return name;
      }
    }

    return null;
  }

  async setDefaultConnection(name) {
    this._registryConfig['default'] = name;

    this._saveConfig();
  }

  async removeConnectionConfig(name) {
    const connections = this._getConnections();

    delete connections[name];

    this._saveConfig();
  }

  async getClientConfig(name) {
    const clients = this._getClients();

    const clientConfig = clients[name];
    return clientConfig && _objectSpread({}, clientConfig);
  }

  async getClientNames() {
    return (0, _keys.default)(this._getClients());
  }

  async registerClientConfig(name, clientConfig) {
    const clients = this._getClients();

    clients[name] = clientConfig;

    this._saveConfig();
  }

}

exports.BaseRegistry = BaseRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS9iYXNlLnRzIl0sIm5hbWVzIjpbIkJhc2VSZWdpc3RyeSIsIl9zYXZlQ29uZmlnIiwiRXJyb3IiLCJfZ2V0Q2xpZW50cyIsIl9yZWdpc3RyeUNvbmZpZyIsImNsaWVudHMiLCJfZ2V0Q29ubmVjdGlvbnMiLCJjb25uZWN0aW9ucyIsImdldENvbm5lY3Rpb25OYW1lcyIsImdldENvbm5lY3Rpb24iLCJuYW1lIiwiY29uZmlnIiwiZ2V0Q29ubmVjdGlvbkNvbmZpZyIsIkNvbm5lY3Rpb24iLCJjb25uQ29uZmlnIiwidW5kZWZpbmVkIiwiY2xpZW50IiwiY29ubkNvbmZpZ18iLCJvYXV0aDIiLCJnZXRDbGllbnRDb25maWciLCJzYXZlQ29ubmVjdGlvbkNvbmZpZyIsInBlcnNpc3RDb25uQ29uZmlnIiwiY2xpZW50TmFtZSIsIl9maW5kQ2xpZW50TmFtZSIsImNsaWVudElkIiwibG9naW5VcmwiLCJzZXREZWZhdWx0Q29ubmVjdGlvbiIsInJlbW92ZUNvbm5lY3Rpb25Db25maWciLCJjbGllbnRDb25maWciLCJnZXRDbGllbnROYW1lcyIsInJlZ2lzdGVyQ2xpZW50Q29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ08sTUFBTUEsWUFBTixDQUF1QztBQUFBO0FBQUEsMkRBQ1YsRUFEVTtBQUFBOztBQUc1Q0MsRUFBQUEsV0FBVyxHQUFHO0FBQ1osVUFBTSxJQUFJQyxLQUFKLENBQVUsNkNBQVYsQ0FBTjtBQUNEOztBQUVEQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixXQUFPLEtBQUtDLGVBQUwsQ0FBcUJDLE9BQXJCLEtBQWlDLEtBQUtELGVBQUwsQ0FBcUJDLE9BQXJCLEdBQStCLEVBQWhFLENBQVA7QUFDRDs7QUFFREMsRUFBQUEsZUFBZSxHQUFHO0FBQ2hCLFdBQ0UsS0FBS0YsZUFBTCxDQUFxQkcsV0FBckIsS0FDQyxLQUFL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OztBQUVELFFBQU1rQixlQUFOLENBQXNCVCxJQUF0QixFQUFvQztBQUNsQyxVQUFNTCxPQUFPLEdBQUcsS0FBS0YsV0FBTCxFQUFoQjs7QUFDQSxVQUFNeUIsWUFBWSxHQUFHdkIsT0FBTyxDQUFDSyxJQUFELENBQTVCO0FBQ0EsV0FBT2tCLFlBQVksc0JBQVNBLFlBQVQsQ0FBbkI7QUFDRDs7QUFFRCxRQUFNQyxjQUFOLEdBQXVCO0FBQ3JCLFdBQU8sbUJBQVksS0FBSzFCLFdBQUwsRUFBWixDQUFQO0FBQ0Q7O0FBRUQsUUFBTTJCLG9CQUFOLENBQTJCcEIsSUFBM0IsRUFBeUNrQixZQUF6QyxFQUFxRTtBQUNuRSxVQUFNdkIsT0FBTyxHQUFHLEtBQUtGLFdBQUwsRUFBaEI7O0FBQ0FFLElBQUFBLE9BQU8sQ0FBQ0ssSUFBRCxDQUFQLEdBQWdCa0IsWUFBaEI7O0FBQ0EsU0FBSzNCLFdBQUw7QUFDRDs7QUFwRzJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi4vY29ubmVjdGlvbic7XG5pbXBvcnQge1xuICBSZWdpc3RyeUNvbmZpZyxcbiAgUmVnaXN0cnksXG4gIENvbm5lY3Rpb25Db25maWcsXG4gIFBlcnNpc3RDb25uZWN0aW9uQ29uZmlnLFxuICBDbGllbnRDb25maWcsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlUmVnaXN0cnkgaW1wbGVtZW50cyBSZWdpc3RyeSB7XG4gIF9yZWdpc3RyeUNvbmZpZzogUmVnaXN0cnlDb25maWcgPSB7fTtcblxuICBfc2F2ZUNvbmZpZygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ19zYXZlQ29uZmlnIG11c3QgYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3MnKTtcbiAgfVxuXG4gIF9nZXRDbGllbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeUNvbmZpZy5jbGllbnRzIHx8ICh0aGlzLl9yZWdpc3RyeUNvbmZpZy5jbGllbnRzID0ge30pO1xuICB9XG5cbiAgX2dldENvbm5lY3Rpb25zKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9yZWdpc3RyeUNvbmZpZy5jb25uZWN0aW9ucyB8fFxuICAgICAgKHRoaXMuX3JlZ2lzdHJ5Q29uZmlnLmNvbm5lY3Rpb25zID0ge30pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGdldENvbm5lY3Rpb25OYW1lcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZ2V0Q29ubmVjdGlvbnMoKSk7XG4gIH1cblxuICBhc3luYyBnZXRDb25uZWN0aW9uPFMgZXh0ZW5kcyBTY2hlbWEgPSBTY2hlbWE+KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0Q29ubmVjdGlvbkNvbmZpZyhuYW1lKTtcbiAgICByZXR1cm4gY29uZmlnID8gbmV3IENvbm5lY3Rpb248Uz4oY29uZmlnKSA6IG51bGw7XG4gIH1cblxuICBhc3luYyBnZXRDb25uZWN0aW9uQ29uZmlnKG5hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIG5hbWUgPSB0aGlzLl9yZWdpc3RyeUNvbmZpZ1snZGVmYXVsdCddO1xuICAgIH1cbiAgICBjb25zdCBjb25uZWN0aW9ucyA9IHRoaXMuX2dldENvbm5lY3Rpb25zKCk7XG4gICAgY29uc3QgY29ubkNvbmZpZyA9IG5hbWUgPyBjb25uZWN0aW9uc1tuYW1lXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIWNvbm5Db25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IGNsaWVudCwgLi4uY29ubkNvbmZpZ18gfSA9IGNvbm5Db25maWc7XG4gICAgaWYgKGNsaWVudCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29ubkNvbmZpZ18sXG4gICAgICAgIG9hdXRoMjogeyAuLi4oYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoY2xpZW50KSkgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjb25uQ29uZmlnXztcbiAgfVxuXG4gIGFzeW5jIHNhdmVDb25uZWN0aW9uQ29uZmlnKG5hbWU6IHN0cmluZywgY29ubkNvbmZpZzogQ29ubmVjdGlvbkNvbmZpZykge1xuICAgIGNvbnN0IGNvbm5lY3Rpb25zID0gdGhpcy5fZ2V0Q29ubmVjdGlvbnMoKTtcbiAgICBjb25zdCB7IG9hdXRoMiwgLi4uY29ubkNvbmZpZ18gfSA9IGNvbm5Db25maWc7XG4gICAgbGV0IHBlcnNpc3RDb25uQ29uZmlnOiBQZXJzaXN0Q29ubmVjdGlvbkNvbmZpZyA9IGNvbm5Db25maWdfO1xuICAgIGlmIChvYXV0aDIpIHtcbiAgICAgIGNvbnN0IGNsaWVudE5hbWUgPSB0aGlzLl9maW5kQ2xpZW50TmFtZShvYXV0aDIpO1xuICAgICAgaWYgKGNsaWVudE5hbWUpIHtcbiAgICAgICAgcGVyc2lzdENvbm5Db25maWcgPSB7IC4uLnBlcnNpc3RDb25uQ29uZmlnLCBjbGllbnQ6IGNsaWVudE5hbWUgfTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBjb25uQ29uZmlnLm9hdXRoMjtcbiAgICB9XG4gICAgY29ubmVjdGlvbnNbbmFtZV0gPSBwZXJzaXN0Q29ubkNvbmZpZztcbiAgICB0aGlzLl9zYXZlQ29uZmlnKCk7XG4gIH1cblxuICBfZmluZENsaWVudE5hbWUoeyBjbGllbnRJZCwgbG9naW5VcmwgfTogQ2xpZW50Q29uZmlnKSB7XG4gICAgY29uc3QgY2xpZW50cyA9IHRoaXMuX2dldENsaWVudHMoKTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMoY2xpZW50cykpIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IGNsaWVudHNbbmFtZV07XG4gICAgICBpZiAoXG4gICAgICAgIGNsaWVudC5jbGllbnRJZCA9PT0gY2xpZW50SWQgJiZcbiAgICAgICAgKGNsaWVudC5sb2dpblVybCB8fCAnaHR0cHM6Ly9sb2dpbi5zYWxlc2ZvcmNlLmNvbScpID09PSBsb2dpblVybFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHNldERlZmF1bHRDb25uZWN0aW9uKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZ2lzdHJ5Q29uZmlnWydkZWZhdWx0J10gPSBuYW1lO1xuICAgIHRoaXMuX3NhdmVDb25maWcoKTtcbiAgfVxuXG4gIGFzeW5jIHJlbW92ZUNvbm5lY3Rpb25Db25maWcobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbnMgPSB0aGlzLl9nZXRDb25uZWN0aW9ucygpO1xuICAgIGRlbGV0ZSBjb25uZWN0aW9uc1tuYW1lXTtcbiAgICB0aGlzLl9zYXZlQ29uZmlnKCk7XG4gIH1cblxuICBhc3luYyBnZXRDbGllbnRDb25maWcobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2xpZW50cyA9IHRoaXMuX2dldENsaWVudHMoKTtcbiAgICBjb25zdCBjbGllbnRDb25maWcgPSBjbGllbnRzW25hbWVdO1xuICAgIHJldHVybiBjbGllbnRDb25maWcgJiYgeyAuLi5jbGllbnRDb25maWcgfTtcbiAgfVxuXG4gIGFzeW5jIGdldENsaWVudE5hbWVzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9nZXRDbGllbnRzKCkpO1xuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXJDbGllbnRDb25maWcobmFtZTogc3RyaW5nLCBjbGllbnRDb25maWc6IENsaWVudENvbmZpZykge1xuICAgIGNvbnN0IGNsaWVudHMgPSB0aGlzLl9nZXRDbGllbnRzKCk7XG4gICAgY2xpZW50c1tuYW1lXSA9IGNsaWVudENvbmZpZztcbiAgICB0aGlzLl9zYXZlQ29uZmlnKCk7XG4gIH1cbn1cbiJdfQ==