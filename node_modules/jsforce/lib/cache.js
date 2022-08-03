"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Cache = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = require("events");

/**
 * @file Manages asynchronous method response cache
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

/**
 * Class for managing cache entry
 *
 * @private
 * @class
 * @constructor
 * @template T
 */
class CacheEntry extends _events.EventEmitter {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "_fetching", false);
    (0, _defineProperty2.default)(this, "_value", undefined);
  }

  /**
   * Get value in the cache entry
   *
   * @param {() => Promise<T>} [callback] - Callback function callbacked the cache entry updated
   * @returns {T|undefined}
   */
  get(callback) {
    if (callback) {
      const cb = callback;
      this.once('value', v => cb(v));

      if (typeof this._value !== 'undefined') {
        this.emit('value', this._value);
      }
    }

    return this._value;
  }
  /**
   * Set value in the cache entry
   */


  set(value) {
    this._value = value;
    this.emit('value', this._value);
  }
  /**
   * Clear cached value
   */


  clear() {
    this._fetching = false;
    this._value = undefined;
  }

}
/**
 * create and return cache key from namespace and serialized arguments.
 * @private
 */


function createCacheKey(namespace, args) {
  var _context;

  return `${namespace || ''}(${(0, _map.default)(_context = [...args]).call(_context, a => (0, _stringify.default)(a)).join(',')})`;
}

function generateKeyString(options, scope, args) {
  return typeof options.key === 'string' ? options.key : typeof options.key === 'function' ? options.key.apply(scope, args) : createCacheKey(options.namespace, args);
}
/**
 * Caching manager for async methods
 *
 * @class
 * @constructor
 */


class Cache {
  constructor() {
    (0, _defineProperty2.default)(this, "_entries", {});
  }

  /**
   * retrive cache entry, or create if not exists.
   *
   * @param {String} [key] - Key of cache entry
   * @returns {CacheEntry}
   */
  get(key) {
    if (this._entries[key]) {
      return this._entries[key];
    }

    const entry = new CacheEntry();
    this._entries[key] = entry;
    return entry;
  }
  /**
   * clear cache entries prefix matching given key
   */


  clear(key) {
    for (const k of (0, _keys.default)(this._entries)) {
      if (!key || (0, _indexOf.default)(k).call(k, key) === 0) {
        this._entries[k].clear();
      }
    }
  }
  /**
   * Enable caching for async call fn to lookup the response cache first,
   * then invoke original if no cached value.
   */


  createCachedFunction(fn, scope, options = {
    strategy: 'NOCACHE'
  }) {
    const strategy = options.strategy;

    const $fn = (...args) => {
      const key = generateKeyString(options, scope, args);
      const entry = this.get(key);

      const executeFetch = async () => {
        entry._fetching = true;

        try {
          const result = await fn.apply(scope || this, args);
          entry.set({
            error: undefined,
            result
          });
          return result;
        } catch (error) {
          entry.set({
            error: error,
            result: undefined
          });
          throw error;
        }
      };

      let value;

      switch (strategy) {
        case 'IMMEDIATE':
          value = entry.get();

          if (!value) {
            throw new Error('Function call result is not cached yet.');
          }

          if (value.error) {
            throw value.error;
          }

          return value.result;

        case 'HIT':
          return (async () => {
            if (!entry._fetching) {
              // only when no other client is calling function
              await executeFetch();
            }

            return new _promise.default((resolve, reject) => {
              entry.get(({
                error,
                result
              }) => {
                if (error) reject(error);else resolve(result);
              });
            });
          })();

        case 'NOCACHE':
        default:
          return executeFetch();
      }
    };

    $fn.clear = (...args) => {
      const key = generateKeyString(options, scope, args);
      this.clear(key);
    };

    return $fn;
  }

}

exports.Cache = Cache;
var _default = Cache;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS50cyJdLCJuYW1lcyI6WyJDYWNoZUVudHJ5IiwiRXZlbnRFbWl0dGVyIiwidW5kZWZpbmVkIiwiZ2V0IiwiY2FsbGJhY2siLCJjYiIsIm9uY2UiLCJ2IiwiX3ZhbHVlIiwiZW1pdCIsInNldCIsInZhbHVlIiwiY2xlYXIiLCJfZmV0Y2hpbmciLCJjcmVhdGVDYWNoZUtleSIsIm5hbWVzcGFjZSIsImFyZ3MiLCJhIiwiam9pbiIsImdlbmVyYXRlS2V5U3RyaW5nIiwib3B0aW9ucyIsInNjb3BlIiwia2V5IiwiYXBwbHkiLCJDYWNoZSIsIl9lbnRyaWVzIiwiZW50cnkiLCJrIiwiY3JlYXRlQ2FjaGVkRnVuY3Rpb24iLCJmbiIsInN0cmF0ZWd5IiwiJGZuIiwiZXhlY3V0ZUZldGNoIiwicmVzdWx0IiwiZXJyb3IiLCJFcnJvciIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFKQTtBQUNBO0FBQ0E7QUFDQTs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFVBQU4sU0FBNEJDLG9CQUE1QixDQUF5QztBQUFBO0FBQUE7QUFBQSxxREFDbEIsS0FEa0I7QUFBQSxrREFFUkMsU0FGUTtBQUFBOztBQUl2QztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsRUFBQUEsR0FBRyxDQUFDQyxRQUFELEVBQWlEO0FBQ2xELFFBQUlBLFFBQUosRUFBYztBQUNaLFlBQU1DLEVBQUUsR0FBR0QsUUFBWDtBQUNBLFdBQUtFLElBQUwsQ0FBVSxPQUFWLEVBQW9CQyxDQUFELElBQVVGLEVBQUUsQ0FBQ0UsQ0FBRCxDQUEvQjs7QUFDQSxVQUFJLE9BQU8sS0FBS0MsTUFBWixLQUF1QixXQUEzQixFQUF3QztBQUN0QyxhQUFLQyxJQUFMLENBQVUsT0FBVixFQUFtQixLQUFLRCxNQUF4QjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTyxLQUFL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Q0FBUDtBQU1ELFdBWE0sR0FBUDs7QUFZRixhQUFLLFNBQUw7QUFDQTtBQUNFLGlCQUFPRCxZQUFZLEVBQW5CO0FBekJKO0FBMkJELEtBMUNEOztBQTJDQUQsSUFBQUEsR0FBRyxDQUFDbkIsS0FBSixHQUFZLENBQUMsR0FBR0ksSUFBSixLQUFvQjtBQUM5QixZQUFNTSxHQUFHLEdBQUdILGlCQUFpQixDQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBaUJMLElBQWpCLENBQTdCO0FBQ0EsV0FBS0osS0FBTCxDQUFXVSxHQUFYO0FBQ0QsS0FIRDs7QUFJQSxXQUFPUyxHQUFQO0FBQ0Q7O0FBdkZnQjs7O2VBMEZKUCxLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBNYW5hZ2VzIGFzeW5jaHJvbm91cyBtZXRob2QgcmVzcG9uc2UgY2FjaGVcbiAqIEBhdXRob3IgU2hpbmljaGkgVG9taXRhIDxzaGluaWNoaS50b21pdGFAZ21haWwuY29tPlxuICovXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuXG4vKipcbiAqIHR5cGUgZGVmXG4gKi9cbmV4cG9ydCB0eXBlIENhY2hpbmdPcHRpb25zID0ge1xuICBrZXk/OiBzdHJpbmcgfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiBzdHJpbmcpO1xuICBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gIHN0cmF0ZWd5OiAnTk9DQUNIRScgfCAnSElUJyB8ICdJTU1FRElBVEUnO1xufTtcblxudHlwZSBDYWNoZVZhbHVlPFQ+ID0ge1xuICBlcnJvcj86IEVycm9yO1xuICByZXN1bHQ6IFQ7XG59O1xuXG5leHBvcnQgdHlwZSBDYWNoZWRGdW5jdGlvbjxGbj4gPSBGbiAmIHsgY2xlYXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCB9O1xuXG4vKipcbiAqIENsYXNzIGZvciBtYW5hZ2luZyBjYWNoZSBlbnRyeVxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2xhc3NcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRlbXBsYXRlIFRcbiAqL1xuY2xhc3MgQ2FjaGVFbnRyeTxUPiBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIF9mZXRjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBfdmFsdWU6IENhY2hlVmFsdWU8VD4gfCB2b2lkID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBHZXQgdmFsdWUgaW4gdGhlIGNhY2hlIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSB7KCkgPT4gUHJvbWlzZTxUPn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxiYWNrZWQgdGhlIGNhY2hlIGVudHJ5IHVwZGF0ZWRcbiAgICogQHJldHVybnMge1R8dW5kZWZpbmVkfVxuICAgKi9cbiAgZ2V0KGNhbGxiYWNrPzogKHY6IFQpID0+IGFueSk6IENhY2hlVmFsdWU8VD4gfCB2b2lkIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IGNiID0gY2FsbGJhY2s7XG4gICAgICB0aGlzLm9uY2UoJ3ZhbHVlJywgKHY6IFQpID0+IGNiKHYpKTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZW1pdCgndmFsdWUnLCB0aGlzLl92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdmFsdWUgaW4gdGhlIGNhY2hlIGVudHJ5XG4gICAqL1xuICBzZXQodmFsdWU6IENhY2hlVmFsdWU8VD4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZW1pdCgndmFsdWUnLCB0aGlzLl92YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgY2FjaGVkIHZhbHVlXG4gICAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLl9mZXRjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogY3JlYXRlIGFuZCByZXR1cm4gY2FjaGUga2V5IGZyb20gbmFtZXNwYWNlIGFuZCBzZXJpYWxpemVkIGFyZ3VtZW50cy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlS2V5KG5hbWVzcGFjZTogc3RyaW5nIHwgdm9pZCwgYXJnczogYW55W10pOiBzdHJpbmcge1xuICByZXR1cm4gYCR7bmFtZXNwYWNlIHx8ICcnfSgke1suLi5hcmdzXVxuICAgIC5tYXAoKGEpID0+IEpTT04uc3RyaW5naWZ5KGEpKVxuICAgIC5qb2luKCcsJyl9KWA7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlS2V5U3RyaW5nKFxuICBvcHRpb25zOiBDYWNoaW5nT3B0aW9ucyxcbiAgc2NvcGU6IGFueSxcbiAgYXJnczogYW55W10sXG4pOiBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIG9wdGlvbnMua2V5ID09PSAnc3RyaW5nJ1xuICAgID8gb3B0aW9ucy5rZXlcbiAgICA6IHR5cGVvZiBvcHRpb25zLmtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gb3B0aW9ucy5rZXkuYXBwbHkoc2NvcGUsIGFyZ3MpXG4gICAgOiBjcmVhdGVDYWNoZUtleShvcHRpb25zLm5hbWVzcGFjZSwgYXJncyk7XG59XG5cbi8qKlxuICogQ2FjaGluZyBtYW5hZ2VyIGZvciBhc3luYyBtZXRob2RzXG4gKlxuICogQGNsYXNzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNsYXNzIENhY2hlIHtcbiAgcHJpdmF0ZSBfZW50cmllczogeyBba2V5OiBzdHJpbmddOiBDYWNoZUVudHJ5PGFueT4gfSA9IHt9O1xuXG4gIC8qKlxuICAgKiByZXRyaXZlIGNhY2hlIGVudHJ5LCBvciBjcmVhdGUgaWYgbm90IGV4aXN0cy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldIC0gS2V5IG9mIGNhY2hlIGVudHJ5XG4gICAqIEByZXR1cm5zIHtDYWNoZUVudHJ5fVxuICAgKi9cbiAgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX2VudHJpZXNba2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VudHJpZXNba2V5XTtcbiAgICB9XG4gICAgY29uc3QgZW50cnkgPSBuZXcgQ2FjaGVFbnRyeSgpO1xuICAgIHRoaXMuX2VudHJpZXNba2V5XSA9IGVudHJ5O1xuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGVhciBjYWNoZSBlbnRyaWVzIHByZWZpeCBtYXRjaGluZyBnaXZlbiBrZXlcbiAgICovXG4gIGNsZWFyKGtleT86IHN0cmluZykge1xuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh0aGlzLl9lbnRyaWVzKSkge1xuICAgICAgaWYgKCFrZXkgfHwgay5pbmRleE9mKGtleSkgPT09IDApIHtcbiAgICAgICAgdGhpcy5fZW50cmllc1trXS5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgY2FjaGluZyBmb3IgYXN5bmMgY2FsbCBmbiB0byBsb29rdXAgdGhlIHJlc3BvbnNlIGNhY2hlIGZpcnN0LFxuICAgKiB0aGVuIGludm9rZSBvcmlnaW5hbCBpZiBubyBjYWNoZWQgdmFsdWUuXG4gICAqL1xuICBjcmVhdGVDYWNoZWRGdW5jdGlvbjxGbiBleHRlbmRzIEZ1bmN0aW9uPihcbiAgICBmbjogRm4sXG4gICAgc2NvcGU6IGFueSxcbiAgICBvcHRpb25zOiBDYWNoaW5nT3B0aW9ucyA9IHsgc3RyYXRlZ3k6ICdOT0NBQ0hFJyB9LFxuICApOiBDYWNoZWRGdW5jdGlvbjxGbj4ge1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneTtcbiAgICBjb25zdCAkZm46IGFueSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZ2VuZXJhdGVLZXlTdHJpbmcob3B0aW9ucywgc2NvcGUsIGFyZ3MpO1xuICAgICAgY29uc3QgZW50cnkgPSB0aGlzLmdldChrZXkpO1xuICAgICAgY29uc3QgZXhlY3V0ZUZldGNoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBlbnRyeS5fZmV0Y2hpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuLmFwcGx5KHNjb3BlIHx8IHRoaXMsIGFyZ3MpO1xuICAgICAgICAgIGVudHJ5LnNldCh7IGVycm9yOiB1bmRlZmluZWQsIHJlc3VsdCB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGVudHJ5LnNldCh7IGVycm9yOiBlcnJvciBhcyBFcnJvciwgcmVzdWx0OiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBsZXQgdmFsdWU7XG4gICAgICBzd2l0Y2ggKHN0cmF0ZWd5KSB7XG4gICAgICAgIGNhc2UgJ0lNTUVESUFURSc6XG4gICAgICAgICAgdmFsdWUgPSBlbnRyeS5nZXQoKTtcbiAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIGNhbGwgcmVzdWx0IGlzIG5vdCBjYWNoZWQgeWV0LicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmFsdWUuZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IHZhbHVlLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVzdWx0O1xuICAgICAgICBjYXNlICdISVQnOlxuICAgICAgICAgIHJldHVybiAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbnRyeS5fZmV0Y2hpbmcpIHtcbiAgICAgICAgICAgICAgLy8gb25seSB3aGVuIG5vIG90aGVyIGNsaWVudCBpcyBjYWxsaW5nIGZ1bmN0aW9uXG4gICAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGVGZXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZW50cnkuZ2V0KCh7IGVycm9yLCByZXN1bHQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSgpO1xuICAgICAgICBjYXNlICdOT0NBQ0hFJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZXhlY3V0ZUZldGNoKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAkZm4uY2xlYXIgPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGdlbmVyYXRlS2V5U3RyaW5nKG9wdGlvbnMsIHNjb3BlLCBhcmdzKTtcbiAgICAgIHRoaXMuY2xlYXIoa2V5KTtcbiAgICB9O1xuICAgIHJldHVybiAkZm4gYXMgQ2FjaGVkRnVuY3Rpb248Rm4+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhY2hlO1xuIl19