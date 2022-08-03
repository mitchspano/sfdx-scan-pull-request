"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SfdxRegistry = void 0;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _child_process = require("child_process");

var _stripAnsi = _interopRequireDefault(require("strip-ansi"));

var _connection = _interopRequireDefault(require("../connection"));

function isNotNullOrUndefined(v) {
  return v != null;
}
/**
 *
 */


class SfdxRegistry {
  constructor({
    cliPath
  }) {
    (0, _defineProperty2.default)(this, "_cliPath", void 0);
    (0, _defineProperty2.default)(this, "_orgList", void 0);
    (0, _defineProperty2.default)(this, "_orgInfoMap", {});
    (0, _defineProperty2.default)(this, "_defaultOrgInfo", void 0);
    this._cliPath = cliPath;
  }

  _createCommand(command, options = {}, args = []) {
    var _context;

    return `${this._cliPath ? this._cliPath + '/' : ''}sfdx ${command} ${(0, _map.default)(_context = (0, _keys.default)(options)).call(_context, option => `${option.length > 1 ? '--' : '-'}${option}${options[option] != null ? ' ' + options[option] : ''}`).join(' ')} --json ${args.join(' ')}`;
  }

  async _execCommand(command, options = {}, args = []) {
    const cmd = this._createCommand(command, options, args);

    const buf = await new _promise.default((resolve, reject) => {
      (0, _child_process.exec)(cmd, (err, ret) => {
        if (err && !ret) {
          reject(err);
        } else {
          resolve(ret);
        }
      });
    });
    const body = (0, _stripAnsi.default)(buf.toString());
    let ret;

    try {
      ret = JSON.parse(body);
    } catch (e) {
      throw new Error(`Unexpectedd output from Sfdx cli: ${body}`);
    }

    if (ret.status === 0 && ret.result) {
      return ret.result;
    } else {
      const err = new Error(ret.message);
      err.name = ret.name;
      throw err;
    }
  }

  async _getOrgList() {
    if (!this._orgList) {
      this._orgList = this._execCommand('force:org:list');
    }

    return this._orgList;
  }

  async getConnectionNames() {
    var _context2, _context3;

    const {
      nonScratchOrgs,
      scratchOrgs
    } = await this._getOrgList();
    return [...(0, _filter.default)(_context2 = (0, _map.default)(nonScratchOrgs).call(nonScratchOrgs, o => o.alias)).call(_context2, isNotNullOrUndefined), ...(0, _filter.default)(_context3 = (0, _map.default)(scratchOrgs).call(scratchOrgs, o => o.alias)).call(_context3, isNotNullOrUndefined), ...(0, _map.default)(nonScratchOrgs).call(nonScratchOrgs, o => o.username), ...(0, _map.default)(scratchOrgs).call(scratchOrgs, o => o.username)];
  }

  async getConnection(name) {
    const config = await this.getConnectionConfig(name);
    return config ? new _connection.default(config) : null;
  }

  async _getOrgInfo(username) {
    const options = username ? {
      u: username
    } : {};

    if (!username || !this._orgInfoMap[username]) {
      const pOrgInfo = this._execCommand('force:org:display', options);

      this._memoOrgInfo(pOrgInfo, username);
    }

    const orgInfo = username ? this._orgInfoMap[username] : this._defaultOrgInfo;

    if (!orgInfo) {
      throw new Error('no orginfo found');
    }

    return orgInfo;
  }

  _memoOrgInfo(pOrgInfo, username) {
    const pOrgInfo_ = pOrgInfo.then(orgInfo => {
      this._orgInfoMap[orgInfo.username] = pOrgInfo_;

      if (orgInfo.alias) {
        this._orgInfoMap[orgInfo.alias] = pOrgInfo_;
      }

      return orgInfo;
    });

    if (username) {
      this._orgInfoMap[username] = pOrgInfo_;
    } else {
      this._defaultOrgInfo = pOrgInfo_;
    }
  }

  async getConnectionConfig(name) {
    const orgInfo = await this._getOrgInfo(name);

    if (!orgInfo) {
      return null;
    }

    const {
      accessToken,
      instanceUrl,
      loginUrl
    } = orgInfo;
    return {
      accessToken,
      instanceUrl,
      loginUrl
    };
  }

  async saveConnectionConfig(_name, _connConfig) {// nothing to do
  }

  async setDefaultConnection(_name) {// nothing to do
  }

  async removeConnectionConfig(name) {
    await this._execCommand('force:org:delete', {
      u: name
    });
  }

  async getClientConfig(_name) {
    return null;
  }

  async getClientNames() {
    return [];
  }

  async registerClientConfig(_name, _clientConfig) {// nothing to do
  }

}

exports.SfdxRegistry = SfdxRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS9zZmR4LnRzIl0sIm5hbWVzIjpbImlzTm90TnVsbE9yVW5kZWZpbmVkIiwidiIsIlNmZHhSZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiY2xpUGF0aCIsIl9jbGlQYXRoIiwiX2NyZWF0ZUNvbW1hbmQiLCJjb21tYW5kIiwib3B0aW9ucyIsImFyZ3MiLCJvcHRpb24iLCJsZW5ndGgiLCJqb2luIiwiX2V4ZWNDb21tYW5kIiwiY21kIiwiYnVmIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsInJldCIsImJvZHkiLCJ0b1N0cmluZyIsIkpTT04iLCJwYXJzZSIsImUiLCJFcnJvciIsInN0YXR1cyIsInJlc3VsdCIsIm1lc3NhZ2UiLCJuYW1lIiwiX2dldE9yZ0xpc3QiLCJfb3JnTGlzdCIsImdldENvbm5lY3Rpb25OYW1lcyIsIm5vblNjcmF0Y2hPcmdzIiwic2NyYXRjaE9yZ3MiLCJvIiwiYWxpYXMiLCJ1c2VybmFtZSIsImdldENvbm5lY3Rpb24iLCJjb25maWciLCJnZXRDb25uZWN0aW9uQ29uZmlnIiwiQ29ubmVjdGlvbiIsIl9nZXRPcmdJbmZvIiwidSIsIl9vcmdJbmZvTWFwIiwicE9yZ0luZm8iLCJfbWVtb09yZ0luZm8iLCJvcmdJbmZvIiwiX2RlZmF1bHRPcmdJbmZvIiwicE9yZ0luZm9fIiwidGhlbiIsImFjY2Vzc1Rva2VuIiwiaW5zdGFuY2VVcmwiLCJsb2dpblVybCIsInNhdmVDb25uZWN0aW9uQ29uZmlnIiwiX25hbWUiLCJfY29ubkNvbmZpZyIsInNldERlZmF1bHRDb25uZWN0aW9uIiwicmVtb3ZlQ29ubmVjdGlvbkNvbmZpZyIsImdldENsaWVudENvbmZpZyIsImdldENsaWVudE5hbWVzIiwicmVnaXN0ZXJDbGllbnRDb25maWciLCJfY2xpZW50Q29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQTZCQSxTQUFTQSxvQkFBVCxDQUFpQ0Ms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RUFBMkM7QUFDekMsVUFBTSxLQUFLaEIsWUFBTCxDQUFrQixrQkFBbEIsRUFBc0M7QUFBRThCLE1BQUFBLENBQUMsRUFBRWQ7QUFBTCxLQUF0QyxDQUFOO0FBQ0Q7O0FBRUQsUUFBTThCLGVBQU4sQ0FBc0JKLEtBQXRCLEVBQXFDO0FBQ25DLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU1LLGNBQU4sR0FBdUI7QUFDckIsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsUUFBTUMsb0JBQU4sQ0FBMkJOLEtBQTNCLEVBQTBDTyxhQUExQyxFQUF1RSxDQUNyRTtBQUNEOztBQWhKMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgc3RyaXBBbnNpIGZyb20gJ3N0cmlwLWFuc2knO1xuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi4vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBSZWdpc3RyeSwgQ29ubmVjdGlvbkNvbmZpZywgQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgU2ZkeENvbW1hbmRPdXRwdXQgPSB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICByZXN1bHQ/OiBhbnk7XG59O1xuXG50eXBlIFNmZHhPcmdMaXN0ID0ge1xuICBub25TY3JhdGNoT3JnczogU2ZkeE9yZ0luZm9bXTtcbiAgc2NyYXRjaE9yZ3M6IFNmZHhPcmdJbmZvW107XG59O1xuXG50eXBlIFNmZHhPcmdJbmZvID0ge1xuICBvcmdJZDogc3RyaW5nO1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBpbnN0YW5jZVVybDogc3RyaW5nO1xuICBsb2dpblVybDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBpc0Rldkh1YjogYm9vbGVhbjtcbiAgY29ubmVjdGVkU3RhdHVzOiBzdHJpbmc7XG4gIGxhc3RVc2VkOiBzdHJpbmc7XG4gIGFsaWFzPzogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gaXNOb3ROdWxsT3JVbmRlZmluZWQ8VD4odjogVCB8IG51bGwgfCB1bmRlZmluZWQpOiB2IGlzIFQge1xuICByZXR1cm4gdiAhPSBudWxsO1xufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTZmR4UmVnaXN0cnkgaW1wbGVtZW50cyBSZWdpc3RyeSB7XG4gIF9jbGlQYXRoOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIF9vcmdMaXN0OiBQcm9taXNlPFNmZHhPcmdMaXN0PiB8IHVuZGVmaW5lZDtcbiAgX29yZ0luZm9NYXA6IHsgW25hbWU6IHN0cmluZ106IFByb21pc2U8U2ZkeE9yZ0luZm8+IH0gPSB7fTtcbiAgX2RlZmF1bHRPcmdJbmZvOiBQcm9taXNlPFNmZHhPcmdJbmZvPiB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcih7IGNsaVBhdGggfTogeyBjbGlQYXRoPzogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9jbGlQYXRoID0gY2xpUGF0aDtcbiAgfVxuXG4gIF9jcmVhdGVDb21tYW5kKFxuICAgIGNvbW1hbmQ6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7IFtvcHRpb246IHN0cmluZ106IGFueSB9ID0ge30sXG4gICAgYXJnczogc3RyaW5nW10gPSBbXSxcbiAgKSB7XG4gICAgcmV0dXJuIGAke1xuICAgICAgdGhpcy5fY2xpUGF0aCA/IHRoaXMuX2NsaVBhdGggKyAnLycgOiAnJ1xuICAgIH1zZmR4ICR7Y29tbWFuZH0gJHtPYmplY3Qua2V5cyhvcHRpb25zKVxuICAgICAgLm1hcChcbiAgICAgICAgKG9wdGlvbikgPT5cbiAgICAgICAgICBgJHtvcHRpb24ubGVuZ3RoID4gMSA/ICctLScgOiAnLSd9JHtvcHRpb259JHtcbiAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSAhPSBudWxsID8gJyAnICsgb3B0aW9uc1tvcHRpb25dIDogJydcbiAgICAgICAgICB9YCxcbiAgICAgIClcbiAgICAgIC5qb2luKCcgJyl9IC0tanNvbiAke2FyZ3Muam9pbignICcpfWA7XG4gIH1cblxuICBhc3luYyBfZXhlY0NvbW1hbmQ8VD4oXG4gICAgY29tbWFuZDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHsgW29wdGlvbjogc3RyaW5nXTogYW55IH0gPSB7fSxcbiAgICBhcmdzOiBzdHJpbmdbXSA9IFtdLFxuICApIHtcbiAgICBjb25zdCBjbWQgPSB0aGlzLl9jcmVhdGVDb21tYW5kKGNvbW1hbmQsIG9wdGlvbnMsIGFyZ3MpO1xuICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZXhlYyhjbWQsIChlcnIsIHJldCkgPT4ge1xuICAgICAgICBpZiAoZXJyICYmICFyZXQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGJvZHkgPSBzdHJpcEFuc2koYnVmLnRvU3RyaW5nKCkpO1xuICAgIGxldCByZXQ6IFNmZHhDb21tYW5kT3V0cHV0O1xuICAgIHRyeSB7XG4gICAgICByZXQgPSBKU09OLnBhcnNlKGJvZHkpIGFzIFNmZHhDb21tYW5kT3V0cHV0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZGQgb3V0cHV0IGZyb20gU2ZkeCBjbGk6ICR7Ym9keX1gKTtcbiAgICB9XG4gICAgaWYgKHJldC5zdGF0dXMgPT09IDAgJiYgcmV0LnJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJldC5yZXN1bHQgYXMgVDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKHJldC5tZXNzYWdlIGFzIHN0cmluZyk7XG4gICAgICBlcnIubmFtZSA9IHJldC5uYW1lIGFzIHN0cmluZztcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfZ2V0T3JnTGlzdCgpIHtcbiAgICBpZiAoIXRoaXMuX29yZ0xpc3QpIHtcbiAgICAgIHRoaXMuX29yZ0xpc3QgPSB0aGlzLl9leGVjQ29tbWFuZDxTZmR4T3JnTGlzdD4oJ2ZvcmNlOm9yZzpsaXN0Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vcmdMaXN0O1xuICB9XG5cbiAgYXN5bmMgZ2V0Q29ubmVjdGlvbk5hbWVzKCkge1xuICAgIGNvbnN0IHsgbm9uU2NyYXRjaE9yZ3MsIHNjcmF0Y2hPcmdzIH0gPSBhd2FpdCB0aGlzLl9nZXRPcmdMaXN0KCk7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLm5vblNjcmF0Y2hPcmdzLm1hcCgobykgPT4gby5hbGlhcykuZmlsdGVyKGlzTm90TnVsbE9yVW5kZWZpbmVkKSxcbiAgICAgIC4uLnNjcmF0Y2hPcmdzLm1hcCgobykgPT4gby5hbGlhcykuZmlsdGVyKGlzTm90TnVsbE9yVW5kZWZpbmVkKSxcbiAgICAgIC4uLm5vblNjcmF0Y2hPcmdzLm1hcCgobykgPT4gby51c2VybmFtZSksXG4gICAgICAuLi5zY3JhdGNoT3Jncy5tYXAoKG8pID0+IG8udXNlcm5hbWUpLFxuICAgIF07XG4gIH1cblxuICBhc3luYyBnZXRDb25uZWN0aW9uPFMgZXh0ZW5kcyBTY2hlbWEgPSBTY2hlbWE+KG5hbWU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCB0aGlzLmdldENvbm5lY3Rpb25Db25maWcobmFtZSk7XG4gICAgcmV0dXJuIGNvbmZpZyA/IG5ldyBDb25uZWN0aW9uPFM+KGNvbmZpZykgOiBudWxsO1xuICB9XG5cbiAgYXN5bmMgX2dldE9yZ0luZm8odXNlcm5hbWU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdXNlcm5hbWUgPyB7IHU6IHVzZXJuYW1lIH0gOiB7fTtcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICF0aGlzLl9vcmdJbmZvTWFwW3VzZXJuYW1lXSkge1xuICAgICAgY29uc3QgcE9yZ0luZm8gPSB0aGlzLl9leGVjQ29tbWFuZDxTZmR4T3JnSW5mbz4oXG4gICAgICAgICdmb3JjZTpvcmc6ZGlzcGxheScsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApO1xuICAgICAgdGhpcy5fbWVtb09yZ0luZm8ocE9yZ0luZm8sIHVzZXJuYW1lKTtcbiAgICB9XG4gICAgY29uc3Qgb3JnSW5mbyA9IHVzZXJuYW1lXG4gICAgICA/IHRoaXMuX29yZ0luZm9NYXBbdXNlcm5hbWVdXG4gICAgICA6IHRoaXMuX2RlZmF1bHRPcmdJbmZvO1xuICAgIGlmICghb3JnSW5mbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBvcmdpbmZvIGZvdW5kJyk7XG4gICAgfVxuICAgIHJldHVybiBvcmdJbmZvO1xuICB9XG5cbiAgX21lbW9PcmdJbmZvKHBPcmdJbmZvOiBQcm9taXNlPFNmZHhPcmdJbmZvPiwgdXNlcm5hbWU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwT3JnSW5mb18gPSBwT3JnSW5mby50aGVuKChvcmdJbmZvKSA9PiB7XG4gICAgICB0aGlzLl9vcmdJbmZvTWFwW29yZ0luZm8udXNlcm5hbWVdID0gcE9yZ0luZm9fO1xuICAgICAgaWYgKG9yZ0luZm8uYWxpYXMpIHtcbiAgICAgICAgdGhpcy5fb3JnSW5mb01hcFtvcmdJbmZvLmFsaWFzXSA9IHBPcmdJbmZvXztcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmdJbmZvO1xuICAgIH0pO1xuICAgIGlmICh1c2VybmFtZSkge1xuICAgICAgdGhpcy5fb3JnSW5mb01hcFt1c2VybmFtZV0gPSBwT3JnSW5mb187XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RlZmF1bHRPcmdJbmZvID0gcE9yZ0luZm9fO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldENvbm5lY3Rpb25Db25maWcobmFtZT86IHN0cmluZykge1xuICAgIGNvbnN0IG9yZ0luZm8gPSBhd2FpdCB0aGlzLl9nZXRPcmdJbmZvKG5hbWUpO1xuICAgIGlmICghb3JnSW5mbykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgYWNjZXNzVG9rZW4sIGluc3RhbmNlVXJsLCBsb2dpblVybCB9ID0gb3JnSW5mbztcbiAgICByZXR1cm4geyBhY2Nlc3NUb2tlbiwgaW5zdGFuY2VVcmwsIGxvZ2luVXJsIH07XG4gIH1cblxuICBhc3luYyBzYXZlQ29ubmVjdGlvbkNvbmZpZyhfbmFtZTogc3RyaW5nLCBfY29ubkNvbmZpZzogQ29ubmVjdGlvbkNvbmZpZykge1xuICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgfVxuXG4gIGFzeW5jIHNldERlZmF1bHRDb25uZWN0aW9uKF9uYW1lOiBzdHJpbmcpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvXG4gIH1cblxuICBhc3luYyByZW1vdmVDb25uZWN0aW9uQ29uZmlnKG5hbWU6IHN0cmluZykge1xuICAgIGF3YWl0IHRoaXMuX2V4ZWNDb21tYW5kKCdmb3JjZTpvcmc6ZGVsZXRlJywgeyB1OiBuYW1lIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q2xpZW50Q29uZmlnKF9uYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIGdldENsaWVudE5hbWVzKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGFzeW5jIHJlZ2lzdGVyQ2xpZW50Q29uZmlnKF9uYW1lOiBzdHJpbmcsIF9jbGllbnRDb25maWc6IENsaWVudENvbmZpZykge1xuICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgfVxufVxuIl19