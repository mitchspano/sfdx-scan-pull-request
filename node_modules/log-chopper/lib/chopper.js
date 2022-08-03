'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _byline = require('byline');

var _byline2 = _interopRequireDefault(_byline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LOG_CHOPPER_MAX = parseInt(process.env.LOG_CHOPPER_MAX || 100000

/**
 * Utility for truncating logs
 * @class
 */
);
class LogChopper {
  /**
   * truncates a log file
   * @param {string} filepath - log path
   * @example
   * ```js
   * const chopper = require('log-chopper')
   * await chopper.chop('/path/to/log')
   * ```
   */
  static chop(filepath, logLineMax = LOG_CHOPPER_MAX) {
    return new Promise((resolve, reject) => {
      let file = _path2.default.normalize(filepath);
      let lines = [];
      let fileStream = _fs2.default.createReadStream(filepath, { encoding: 'utf8' });
      fileStream.on('error', reject);
      let stream = (0, _byline2.default)(fileStream);
      stream.on('error', reject);
      stream.on('data', line => {
        if (lines.length >= logLineMax) stream.end();else lines.push(line);
      });
      stream.on('end', () => {
        _fs2.default.writeFileSync(file, lines.join('\n'));
        resolve();
      });
    });
  }
}
exports.default = LogChopper;