"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.QuickAction = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

/**
 * @file Represents Salesforce QuickAction
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

/**
 * type definitions
 */

/**
 * A class for quick action
 */
class QuickAction {
  /**
   *
   */
  constructor(conn, path) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "_path", void 0);
    this._conn = conn;
    this._path = path;
  }
  /**
   * Describe the action's information (including layout, etc.)
   */


  async describe() {
    const url = `${this._path}/describe`;
    const body = await this._conn.request(url);
    return body;
  }
  /**
   * Retrieve default field values in the action (for given record, if specified)
   */


  async defaultValues(contextId) {
    let url = `${this._path}/defaultValues`;

    if (contextId) {
      url += `/${contextId}`;
    }

    const body = await this._conn.request(url);
    return body;
  }
  /**
   * Execute the action for given context Id and record information
   */


  async execute(contextId, record) {
    const requestBody = {
      contextId,
      record
    };
    const resBody = await this._conn.requestPost(this._path, requestBody);
    return resBody;
  }

}

exports.QuickAction = QuickAction;
var _default = QuickAction;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWljay1hY3Rpb24udHMiXSwibmFtZXMiOlsiUXVpY2tBY3Rpb24iLCJjb25zdHJ1Y3RvciIsImNvbm4iLCJwYXRoIiwiX2Nvbm4iLCJfcGF0aCIsImRlc2NyaWJlIiwidXJsIiwiYm9keSIsInJlcXVlc3QiLCJkZWZhdWx0VmFsdWVzIiwiY29udGV4dElkIiwiZXhlY3V0ZSIsInJlY29yZCIsInJlcXVlc3RCb2R5IiwicmVzQm9keSIsInJlcXVlc3RQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0E7QUFDQTtBQUNBOztBQVlBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLFdBQU4sQ0FBb0M7QUFJekM7QUFDRjtBQUNBO0FBQ0VDLEVBQUFBLFdBQVcsQ0FBQ0MsSUFBRCxFQUFzQkMsSUFBdEIsRUFBb0M7QUFBQTtBQUFBO0FBQzdDLFNBQUtDLEtBQUwsR0FBYUYsSUFBYjtBQUNBLFNBQUtHLEtBQUwsR0FBYUYsSUFBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxRQUFNRyxRQUFOLEdBQTJEO0FBQ3pELFVBQU1DLEdBQUcsR0FBSSxHQUFFLEtBQUtGLEtBQU0sV0FBMUI7QUFDQSxVQUFNRyxJQUFJLEdBQUcsTUFBTSxLQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUJGLEdBQW5CLENBQW5CO0FBQ0EsV0FBT0MsSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxRQUFNRSxhQUFOLENBQW9CQyxTQUFwQixFQUEyRTtBQUN6RSxRQUFJSixHQUFHLEdBQUksR0FBRSxLQUFLRixLQUFNLGdCQUF4Qjs7QUFDQSxRQUFJTSxTQUFKLEVBQWU7QUFDYkosTUFBQUEsR0FBRyxJQUFLLElBQUdJLFNBQVUsRUFBckI7QUFDRDs7QUFDRCxVQUFNSCxJQUFJLEdBQUcsTUFBTSxLQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUJGLEdBQW5CLENBQW5CO0FBQ0EsV0FBT0MsSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFDRSxRQUFNSSxPQUFOLENBQWNELFNBQWQsRUFBaUNFLE1BQWpDLEVBQTZFO0FBQzNFLFVBQU1DLFdBQVcsR0FBRztBQUFFSCxNQUFBQSxTQUFGO0FBQWFFLE1BQUFBO0FBQWIsS0FBcEI7QUFDQSxVQUFNRSxPQUFPLEdBQUcsTUFBTSxLQUFLWCxLQUFMLENBQVdZLFdBQVgsQ0FBdUIsS0FBS1gsS0FBNUIsRUFBbUNTLFdBQW5DLENBQXRCO0FBQ0EsV0FBT0MsT0FBUDtBQUNEOztBQXhDd0M7OztlQTJDNUJmLFciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIFJlcHJlc2VudHMgU2FsZXNmb3JjZSBRdWlja0FjdGlvblxuICogQGF1dGhvciBTaGluaWNoaSBUb21pdGEgPHNoaW5pY2hpLnRvbWl0YUBnbWFpbC5jb20+XG4gKi9cbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XG5pbXBvcnQge1xuICBEZXNjcmliZVF1aWNrQWN0aW9uRGV0YWlsUmVzdWx0LFxuICBSZWNvcmQsXG4gIE9wdGlvbmFsLFxuICBTY2hlbWEsXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIHR5cGUgZGVmaW5pdGlvbnNcbiAqL1xuZXhwb3J0IHR5cGUgUXVpY2tBY3Rpb25EZWZhdWx0VmFsdWVzID0geyBbbmFtZTogc3RyaW5nXTogYW55IH07XG5cbmV4cG9ydCB0eXBlIFF1aWNrQWN0aW9uUmVzdWx0ID0ge1xuICBpZDogc3RyaW5nO1xuICBmZWVkSXRlbUlkczogT3B0aW9uYWw8c3RyaW5nW10+O1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBjcmVhdGVkOiBib29sZWFuO1xuICBjb250ZXh0SWQ6IHN0cmluZztcbiAgZXJyb3JzOiBPYmplY3RbXTtcbn07XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgcXVpY2sgYWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWlja0FjdGlvbjxTIGV4dGVuZHMgU2NoZW1hPiB7XG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xuICBfcGF0aDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbjxTPiwgcGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29ubiA9IGNvbm47XG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmUgdGhlIGFjdGlvbidzIGluZm9ybWF0aW9uIChpbmNsdWRpbmcgbGF5b3V0LCBldGMuKVxuICAgKi9cbiAgYXN5bmMgZGVzY3JpYmUoKTogUHJvbWlzZTxEZXNjcmliZVF1aWNrQWN0aW9uRGV0YWlsUmVzdWx0PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5fcGF0aH0vZGVzY3JpYmVgO1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLl9jb25uLnJlcXVlc3QodXJsKTtcbiAgICByZXR1cm4gYm9keSBhcyBEZXNjcmliZVF1aWNrQWN0aW9uRGV0YWlsUmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGRlZmF1bHQgZmllbGQgdmFsdWVzIGluIHRoZSBhY3Rpb24gKGZvciBnaXZlbiByZWNvcmQsIGlmIHNwZWNpZmllZClcbiAgICovXG4gIGFzeW5jIGRlZmF1bHRWYWx1ZXMoY29udGV4dElkPzogc3RyaW5nKTogUHJvbWlzZTxRdWlja0FjdGlvbkRlZmF1bHRWYWx1ZXM+IHtcbiAgICBsZXQgdXJsID0gYCR7dGhpcy5fcGF0aH0vZGVmYXVsdFZhbHVlc2A7XG4gICAgaWYgKGNvbnRleHRJZCkge1xuICAgICAgdXJsICs9IGAvJHtjb250ZXh0SWR9YDtcbiAgICB9XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMuX2Nvbm4ucmVxdWVzdCh1cmwpO1xuICAgIHJldHVybiBib2R5IGFzIFF1aWNrQWN0aW9uRGVmYXVsdFZhbHVlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIHRoZSBhY3Rpb24gZm9yIGdpdmVuIGNvbnRleHQgSWQgYW5kIHJlY29yZCBpbmZvcm1hdGlvblxuICAgKi9cbiAgYXN5bmMgZXhlY3V0ZShjb250ZXh0SWQ6IHN0cmluZywgcmVjb3JkOiBSZWNvcmQpOiBQcm9taXNlPFF1aWNrQWN0aW9uUmVzdWx0PiB7XG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7IGNvbnRleHRJZCwgcmVjb3JkIH07XG4gICAgY29uc3QgcmVzQm9keSA9IGF3YWl0IHRoaXMuX2Nvbm4ucmVxdWVzdFBvc3QodGhpcy5fcGF0aCwgcmVxdWVzdEJvZHkpO1xuICAgIHJldHVybiByZXNCb2R5IGFzIFF1aWNrQWN0aW9uUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1aWNrQWN0aW9uO1xuIl19