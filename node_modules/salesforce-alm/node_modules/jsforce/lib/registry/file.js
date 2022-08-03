"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.FileRegistry = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _base = require("./base");

/**
 *
 */
function getDefaultConfigFilePath() {
  const homeDir = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

  if (!homeDir) {
    throw new Error('cannot find user home directory to store configuration files');
  }

  return _path.default.join(homeDir, '.jsforce', 'config.json');
}
/**
 *
 */


class FileRegistry extends _base.BaseRegistry {
  constructor({
    configFilePath
  }) {
    super();
    (0, _defineProperty2.default)(this, "_configFilePath", void 0);
    this._configFilePath = configFilePath || getDefaultConfigFilePath();

    try {
      var data = _fs.default.readFileSync(this._configFilePath, 'utf-8');

      this._registryConfig = JSON.parse(data);
    } catch (e) {//
    }
  }

  _saveConfig() {
    const data = (0, _stringify.default)(this._registryConfig, null, 4);

    try {
      _fs.default.writeFileSync(this._configFilePath, data);

      _fs.default.chmodSync(this._configFilePath, '600');
    } catch (e) {
      const configDir = _path.default.dirname(this._configFilePath);

      _fs.default.mkdirSync(configDir);

      _fs.default.chmodSync(configDir, '700');

      _fs.default.writeFileSync(this._configFilePath, data);

      _fs.default.chmodSync(this._configFilePath, '600');
    }
  }

}

exports.FileRegistry = FileRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS9maWxlLnRzIl0sIm5hbWVzIjpbImdldERlZmF1bHRDb25maWdGaWxlUGF0aCIsImhvbWVEaXIiLCJwcm9jZXNzIiwiZW52IiwicGxhdGZvcm0iLCJFcnJvciIsInBhdGgiLCJqb2luIiwiRmlsZVJlZ2lzdHJ5IiwiQmFzZVJlZ2lzdHJ5IiwiY29uc3RydWN0b3IiLCJjb25maWdGaWxlUGF0aCIsIl9jb25maWdGaWxlUGF0aCIsImRhdGEiLCJmcyIsInJlYWRGaWxlU3luYyIsIl9yZWdpc3RyeUNvbmZpZyIsIkpTT04iLCJwYXJzZSIsImUiLCJfc2F2ZUNvbmZpZyIsIndyaXRlRmlsZVN5bmMiLCJjaG1vZFN5bmMiLCJjb25maWdEaXIiLCJkaXJuYW1lIiwibWtkaXJTeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBU0Esd0JBQVQsR0FBb0M7QUFDbEMsUUFBTUMsT0FBTyxHQUNYQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUQsT0FBTyxDQUFDRSxRQUFSLEtBQXFCLE9BQXJCLEdBQStCLGFBQS9CLEdBQStDLE1BQTNELENBREY7O0FBRUEsTUFBSSxDQUFDSCxPQUFMLEVBQWM7QUFDWixVQUFNLElBQUlJLEtBQUosQ0FDSiw4REFESSxDQUFOO0FBR0Q7O0FBQ0QsU0FBT0MsY0FBS0MsSUFBTCxDQUFVTixPQUFWLEVBQW1CLFVBQW5CLEVBQStCLGFBQS9CLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTU8sWUFBTixTQUEyQkMsa0JBQTNCLENBQXdDO0FBRzdDQyxFQUFBQSxXQUFXLENBQUM7QUFBRUMsSUFBQUE7QUFBRixHQUFELEVBQWtEO0FBQzNEO0FBRDJEO0FBRTNELFNBQUtDLGVBQUwsR0FBdUJELGNBQWMsSUFBSVgsd0JBQXdCLEVBQWpFOztBQUNBLFFBQUk7QUFDRixVQUFJYSxJQUFJLEdBQUdDLFlBQUdDLFlBQUgsQ0FBZ0IsS0FBS0gsZUFBckIsRUFBc0MsT0FBdEMsQ0FBWDs7QUFDQSxXQUFLSSxlQUFMLEdBQXVCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsSUFBWCxDQUF2QjtBQUNELEtBSEQsQ0FHRSxPQUFPTSxDQUFQLEVBQVUsQ0FDVjtBQUNEO0FBQ0Y7O0FBRURDLEVBQUFBLFdBQVcsR0FBRztBQUNaLFVBQU1QLElBQUksR0FBRyx3QkFBZSxLQUFLRyxlQUFwQixFQUFxQyxJQUFyQyxFQUEyQyxDQUEzQyxDQUFiOztBQUNBLFFBQUk7QUFDRkYsa0JBQUdPLGFBQUgsQ0FBaUIsS0FBS1QsZUFBdEIsRUFBdUNDLElBQXZDOztBQUNBQyxrQkFBR1EsU0FBSCxDQUFhLEtBQUtWLGVBQWxCLEVBQW1DLEtBQW5DO0FBQ0QsS0FIRCxDQUdFLE9BQU9PLENBQVAsRUFBVTtBQUNWLFlBQU1JLFNBQVMsR0FBR2pCLGNBQUtrQixPQUFMLENBQWEsS0FBS1osZUFBbEIsQ0FBbEI7O0FBQ0FFLGtCQUFHVyxTQUFILENBQWFGLFNBQWI7O0FBQ0FULGtCQUFHUSxTQUFILENBQWFDLFNBQWIsRUFBd0IsS0FBeEI7O0FBQ0FULGtCQUFHTyxhQUFILENBQWlCLEtBQUtULGVBQXRCLEVBQXVDQyxJQUF2Qzs7QUFDQUMsa0JBQUdRLFNBQUgsQ0FBYSxLQUFLVixlQUFsQixFQUFtQyxLQUFuQztBQUNEO0FBQ0Y7O0FBMUI0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEJhc2VSZWdpc3RyeSB9IGZyb20gJy4vYmFzZSc7XG5cbi8qKlxuICpcbiAqL1xuZnVuY3Rpb24gZ2V0RGVmYXVsdENvbmZpZ0ZpbGVQYXRoKCkge1xuICBjb25zdCBob21lRGlyID1cbiAgICBwcm9jZXNzLmVudltwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gJ1VTRVJQUk9GSUxFJyA6ICdIT01FJ107XG4gIGlmICghaG9tZURpcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdjYW5ub3QgZmluZCB1c2VyIGhvbWUgZGlyZWN0b3J5IHRvIHN0b3JlIGNvbmZpZ3VyYXRpb24gZmlsZXMnLFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHBhdGguam9pbihob21lRGlyLCAnLmpzZm9yY2UnLCAnY29uZmlnLmpzb24nKTtcbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRmlsZVJlZ2lzdHJ5IGV4dGVuZHMgQmFzZVJlZ2lzdHJ5IHtcbiAgX2NvbmZpZ0ZpbGVQYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoeyBjb25maWdGaWxlUGF0aCB9OiB7IGNvbmZpZ0ZpbGVQYXRoPzogc3RyaW5nIH0pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2NvbmZpZ0ZpbGVQYXRoID0gY29uZmlnRmlsZVBhdGggfHwgZ2V0RGVmYXVsdENvbmZpZ0ZpbGVQYXRoKCk7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHRoaXMuX2NvbmZpZ0ZpbGVQYXRoLCAndXRmLTgnKTtcbiAgICAgIHRoaXMuX3JlZ2lzdHJ5Q29uZmlnID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvL1xuICAgIH1cbiAgfVxuXG4gIF9zYXZlQ29uZmlnKCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLl9yZWdpc3RyeUNvbmZpZywgbnVsbCwgNCk7XG4gICAgdHJ5IHtcbiAgICAgIGZzLndyaXRlRmlsZVN5bmModGhpcy5fY29uZmlnRmlsZVBhdGgsIGRhdGEpO1xuICAgICAgZnMuY2htb2RTeW5jKHRoaXMuX2NvbmZpZ0ZpbGVQYXRoLCAnNjAwJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgY29uZmlnRGlyID0gcGF0aC5kaXJuYW1lKHRoaXMuX2NvbmZpZ0ZpbGVQYXRoKTtcbiAgICAgIGZzLm1rZGlyU3luYyhjb25maWdEaXIpO1xuICAgICAgZnMuY2htb2RTeW5jKGNvbmZpZ0RpciwgJzcwMCcpO1xuICAgICAgZnMud3JpdGVGaWxlU3luYyh0aGlzLl9jb25maWdGaWxlUGF0aCwgZGF0YSk7XG4gICAgICBmcy5jaG1vZFN5bmModGhpcy5fY29uZmlnRmlsZVBhdGgsICc2MDAnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==