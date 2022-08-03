"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.replace");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = exports.Repl = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of"));

var _getOwnPropertyNames = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-names"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _events = require("events");

var _repl = require("repl");

var _stream = require("stream");

var _ = _interopRequireDefault(require(".."));

var _function = require("../util/function");

/**
 * @file Creates REPL interface with built in Salesforce API objects and automatically resolves promise object
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 * @private
 */

/**
 * Intercept the evaled value returned from repl evaluator, convert and send back to output.
 * @private
 */
function injectBefore(replServer, method, beforeFn) {
  const _orig = replServer[method];

  replServer[method] = (...args) => {
    const callback = args.pop();
    beforeFn.apply(null, (0, _concat.default)(args).call(args, (err, res) => {
      if (err || res) {
        callback(err, res);
      } else {
        _orig.apply(replServer, (0, _concat.default)(args).call(args, callback));
      }
    }));
  };

  return replServer;
}
/**
 * @private
 */


function injectAfter(replServer, method, afterFn) {
  const _orig = replServer[method];

  replServer[method] = (...args) => {
    const callback = args.pop();

    _orig.apply(replServer, (0, _concat.default)(args).call(args, (...args) => {
      try {
        afterFn.apply(null, (0, _concat.default)(args).call(args, callback));
      } catch (e) {
        callback(e);
      }
    }));
  };

  return replServer;
}
/**
 * When the result was "promise", resolve its value
 * @private
 */


function promisify(err, value, callback) {
  // callback immediately if no value passed
  if (!callback && (0, _function.isFunction)(value)) {
    callback = value;
    return callback();
  }

  if (err) {
    throw err;
  }

  if ((0, _function.isPromiseLike)(value)) {
    value.then(v => {
      callback(null, v);
    }, err => {
      callback(err);
    });
  } else {
    callback(null, value);
  }
}
/**
 * Output object to stdout in JSON representation
 * @private
 */


function outputToStdout(prettyPrint) {
  if (prettyPrint && !(0, _function.isNumber)(prettyPrint)) {
    prettyPrint = 4;
  }

  return (err, value, callback) => {
    if (err) {
      console.error(err);
    } else {
      const str = (0, _stringify.default)(value, null, prettyPrint);
      console.log(str);
    }

    callback(err, value);
  };
}
/**
 * define get accessor using Object.defineProperty
 * @private
 */


function defineProp(obj, prop, getter) {
  if (_defineProperty3.default) {
    (0, _defineProperty3.default)(obj, prop, {
      get: getter
    });
  }
}
/**
 *
 */


class Repl {
  constructor(cli) {
    (0, _defineProperty2.default)(this, "_cli", void 0);
    (0, _defineProperty2.default)(this, "_in", void 0);
    (0, _defineProperty2.default)(this, "_out", void 0);
    (0, _defineProperty2.default)(this, "_interactive", true);
    (0, _defineProperty2.default)(this, "_paused", false);
    (0, _defineProperty2.default)(this, "_replServer", undefined);
    this._cli = cli;
    this._in = new _stream.Transform();
    this._out = new _stream.Transform();

    this._in._transform = (chunk, encoding, callback) => {
      if (!this._paused) {
        this._in.push(chunk);
      }

      callback();
    };

    this._out._transform = (chunk, encoding, callback) => {
      if (!this._paused && this._interactive !== false) {
        this._out.push(chunk);
      }

      callback();
    };
  }
  /**
   *
   */


  start(options = {}) {
    this._interactive = options.interactive !== false;
    process.stdin.resume();

    if (process.stdin.setRawMode) {
      process.stdin.setRawMode(true);
    }

    process.stdin.pipe(this._in);

    this._out.pipe(process.stdout);

    defineProp(this._out, 'columns', () => process.stdout.columns);
    this._replServer = (0, _repl.start)({
      input: this._in,
      output: this._out,
      terminal: true
    });

    this._defineAdditionalCommands();

    this._replServer = injectBefore(this._replServer, 'completer', (line, callback) => {
      this.complete(line).then(rets => {
        callback(null, rets);
      }).catch(err => {
        callback(err);
      });
    });
    this._replServer = injectAfter(this._replServer, 'eval', promisify);

    if (options.interactive === false) {
      this._replServer = injectAfter(this._replServer, 'eval', outputToStdout(options.prettyPrint));
      this._replServer = injectAfter(this._replServer, 'eval', function () {
        process.exit();
      });
    }

    this._replServer.on('exit', () => process.exit());

    this._defineBuiltinVars(this._replServer.context);

    if (options.evalScript) {
      this._in.write(options.evalScript + '\n', 'utf-8');
    }

    return this;
  }
  /**
   *
   */


  _defineAdditionalCommands() {
    const cli = this._cli;
    const replServer = this._replServer;

    if (!replServer) {
      return;
    }

    replServer.defineCommand('connections', {
      help: 'List currenty registered Salesforce connections',
      action: async () => {
        await cli.listConnections();
        replServer.displayPrompt();
      }
    });
    replServer.defineCommand('connect', {
      help: 'Connect to Salesforce instance',
      action: async (...args) => {
        const [name, password] = args;
        const params = password ? {
          connection: name,
          username: name,
          password: password
        } : {
          connection: name,
          username: name
        };

        try {
          await cli.connect(params);
        } catch (err) {
          if (err instanceof Error) {
            console.error(err.message);
          }
        }

        replServer.displayPrompt();
      }
    });
    replServer.defineCommand('disconnect', {
      help: 'Disconnect connection and erase it from registry',
      action: name => {
        cli.disconnect(name);
        replServer.displayPrompt();
      }
    });
    replServer.defineCommand('use', {
      help: 'Specify login server to establish connection',
      action: loginServer => {
        cli.setLoginServer(loginServer);
        replServer.displayPrompt();
      }
    });
    replServer.defineCommand('authorize', {
      help: 'Connect to Salesforce using OAuth2 authorization flow',
      action: async clientName => {
        try {
          await cli.authorize(clientName);
        } catch (err) {
          if (err instanceof Error) {
            console.error(err.message);
          }
        }

        replServer.displayPrompt();
      }
    });
    replServer.defineCommand('register', {
      help: 'Register OAuth2 client information',
      action: async (...args) => {
        const [clientName, clientId, clientSecret, redirectUri, loginUrl] = args;
        const config = {
          clientId,
          clientSecret,
          redirectUri,
          loginUrl
        };

        try {
          await cli.register(clientName, config);
        } catch (err) {
          if (err instanceof Error) {
            console.error(err.message);
          }
        }

        replServer.displayPrompt();
      }
    });
    replServer.defineCommand('open', {
      help: 'Open Salesforce web page using established connection',
      action: url => {
        cli.openUrlUsingSession(url);
        replServer.displayPrompt();
      }
    });
  }
  /**
   *
   */


  pause() {
    this._paused = true;

    if (process.stdin.setRawMode) {
      process.stdin.setRawMode(false);
    }
  }
  /**
   *
   */


  resume() {
    this._paused = false;
    process.stdin.resume();

    if (process.stdin.setRawMode) {
      process.stdin.setRawMode(true);
    }
  }
  /**
   *
   */


  async complete(line) {
    const tokens = line.replace(/^\s+/, '').split(/\s+/);
    const [command, keyword = ''] = tokens;

    if (command[0] === '.' && tokens.length === 2) {
      let candidates = [];

      if (command === '.connect' || command === '.disconnect') {
        candidates = await this._cli.getConnectionNames();
      } else if (command === '.authorize') {
        candidates = await this._cli.getClientNames();
      } else if (command === '.use') {
        candidates = ['production', 'sandbox'];
      }

      candidates = (0, _filter.default)(candidates).call(candidates, name => (0, _indexOf.default)(name).call(name, keyword) === 0);
      return [candidates, keyword];
    }
  }
  /**
   * Map all jsforce object to REPL context
   * @private
   */


  _defineBuiltinVars(context) {
    const cli = this._cli; // define salesforce package root objects

    for (const key in _.default) {
      if (Object.prototype.hasOwnProperty.call(_.default, key) && !global[key]) {
        context[key] = _.default[key];
      }
    } // expose jsforce package root object in context.


    context.jsforce = _.default;

    function createProxyFunc(prop) {
      return (...args) => {
        const conn = cli.getCurrentConnection();
        return conn[prop](...args);
      };
    }

    function createProxyAccessor(prop) {
      return () => {
        const conn = cli.getCurrentConnection();
        return conn[prop];
      };
    }

    const conn = cli.getCurrentConnection(); // list all props in connection instance, other than EventEmitter or object built-in methods

    const props = {};
    let o = conn;

    while (o && o !== _events.EventEmitter.prototype && o !== Object.prototype) {
      for (const p of (0, _getOwnPropertyNames.default)(o)) {
        if (p !== 'constructor') {
          props[p] = true;
        }
      }

      o = (0, _getPrototypeOf.default)(o);
    }

    for (const prop of (0, _keys.default)(props)) {
      if (typeof global[prop] !== 'undefined') {
        // avoid global override
        continue;
      }

      if ((0, _indexOf.default)(prop).call(prop, '_') === 0) {
        // ignore private
        continue;
      }

      if ((0, _function.isFunction)(conn[prop])) {
        context[prop] = createProxyFunc(prop);
      } else if ((0, _function.isObject)(conn[prop])) {
        defineProp(context, prop, createProxyAccessor(prop));
      }
    } // expose default connection as "$conn"


    defineProp(context, '$conn', () => {
      return cli.getCurrentConnection();
    });
  }

}

exports.Repl = Repl;
var _default = Repl;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvcmVwbC50cyJdLCJuYW1lcyI6WyJpbmplY3RCZWZvcmUiLCJyZXBsU2VydmVyIiwibWV0aG9kIiwiYmVmb3JlRm4iLCJfb3JpZyIsImFyZ3MiLCJjYWxsYmFjayIsInBvcCIsImFwcGx5IiwiZXJyIiwicmVzIiwiaW5qZWN0QWZ0ZXIiLCJhZnRlckZuIiwiZSIsInByb21pc2lmeSIsInZhbHVlIiwidGhlbiIsInYiLCJvdXRwdXRUb1N0ZG91dCIsInByZXR0eVByaW50IiwiY29uc29sZSIsImVycm9yIiwic3RyIiwibG9nIiwiZGVmaW5lUHJvcCIsIm9iaiIsInByb3AiLCJnZXR0ZXIiLCJnZXQiLCJSZXBsIiwiY29uc3RydWN0b3IiLCJjbGkiLCJ1bmRlZmluZWQiLCJfY2xpIiwiX2luIiwiVHJhbnNmb3JtIiwiX291dCIsIl90cmFuc2Zvcm0iLCJjaHVuayIsImVuY29kaW5nIiwiX3BhdXNlZCIsInB1c2giLCJfaW50ZXJhY3RpdmUiLCJzdGFydCIsIm9wdGlvbnMiLCJpbnRlcmFjdGl2ZSIsInByb2Nlc3MiLCJzdGRpbiIsInJlc3VtZSIsInNldFJhd01vZGUiLCJwaXBlIiwic3Rkb3V0IiwiY29sdW1ucyIsIl9yZXBsU2VydmVyIiwiaW5wdXQiLCJvdXRwdXQiLCJ0ZXJtaW5hbCIsIl9kZWZpbmVBZGRpdGlvbmFsQ29tbWFuZHMiLCJsaW5lIiwiY29tcGxldGUiLCJyZXRzIiwiY2F0Y2giLCJleGl0Iiwib24iLCJfZGVmaW5lQnVpbHRpblZhcnMiLCJjb250ZXh0IiwiZXZhbFNjcmlwdCIsIndyaXRlIiwiZGVmaW5lQ29tbWFuZCIsImhlbHAiLCJhY3Rpb24iLCJsaXN0Q29ubmVjdGlvbnMiLCJkaXNwbGF5UHJvbXB0IiwibmFtZSIsInBhc3N3b3JkIiwicGFyYW1zIiwiY29ubmVjdGlvbiIsInVzZXJuYW1lIiwiY29ubmVjdCIsIkVycm9yIiwibWVzc2FnZSIsImRpc2Nvbm5lY3QiLCJsb2dpblNlcnZlciIsInNldExvZ2luU2VydmVyIiwiY2xpZW50TmFtZSIsImF1dGhvcml6ZSIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwicmVkaXJlY3RVcmkiLCJsb2dpblVybCIsImNvbmZpZyIsInJlZ2lzdGVyIiwidXJsIiwib3BlblVybFVzaW5nU2Vzc2lvbiIsInBhdXNlIiwidG9rZW5zIiwicmVwbGFjZSIsInNwbGl0IiwiY29tbWFuZCIsImtleXdvcmQiLCJsZW5ndGgiLCJjYW5kaWRhdGVzIiwiZ2V0Q29ubmVjdGlvbk5hbWVzIiwiZ2V0Q2xpZW50TmFtZXMiLCJrZXkiLCJqc2ZvcmNlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZ2xvYmFsIiwiY3JlYXRlUHJveHlGdW5jIiwiY29ubiIsImdldEN1cnJlbnRDb25uZWN0aW9uIiwiY3JlYXRlUHJveHlBY2Nlc3NvciIsInByb3BzIiwibyIsIkV2ZW50RW1pdHRlciIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxZQUFULENBQ0VDLFVBREYsRUFFRUMsTUFGRixFQUdFQyxRQUhGLEVBSUU7QUFDQSxRQUFNQyxLQUFlLEdBQUlILFVBQUQsQ0FBb0JDLE1BQXBCLENBQXhCOztBQUNDRCxFQUFBQSxVQUFELENBQW9CQyxNQUFwQixJQUE4QixDQUFDLEdBQUdHLElBQUosS0FBb0I7QUFDaEQsVUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsRUFBakI7QUFDQUosSUFBQUEsUUFBUSxDQUFDSyxLQUFULENBQ0UsSUFERixFQUVFLHFCQUFBSCxJQUFJLE1BQUosQ0FBQUEsSUFBSSxFQUFRLENBQUNJLEdBQUQsRUFBV0MsR0FBWCxLQUF3QjtBQUNsQyxVQUFJRCxHQUFHLElBQUlDLEdBQVgsRUFBZ0I7QUFDZEosUUFBQUEsUUFB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Q0Q7O0FBQ0QsVUFBSSwwQkFBWXNGLElBQUQsQ0FBY3RGLElBQWQsQ0FBWCxDQUFKLEVBQXFDO0FBQ25DdUMsUUFBQUEsT0FBTyxDQUFDdkMsSUFBRCxDQUFQLEdBQWdCcUYsZUFBZSxDQUFDckYsSUFBRCxDQUEvQjtBQUNELE9BRkQsTUFFTyxJQUFJLHdCQUFVc0YsSUFBRCxDQUFjdEYsSUFBZCxDQUFULENBQUosRUFBbUM7QUFDeENGLFFBQUFBLFVBQVUsQ0FBQ3lDLE9BQUQsRUFBVXZDLElBQVYsRUFBZ0J3RixtQkFBbUIsQ0FBQ3hGLElBQUQsQ0FBbkMsQ0FBVjtBQUNEO0FBQ0YsS0F2RHFELENBeUR0RDs7O0FBQ0FGLElBQUFBLFVBQVUsQ0FBQ3lDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE1BQU07QUFDakMsYUFBT2xDLEdBQUcsQ0FBQ2tGLG9CQUFKLEVBQVA7QUFDRCxLQUZTLENBQVY7QUFHRDs7QUFoU2U7OztlQW1TSHBGLEkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIENyZWF0ZXMgUkVQTCBpbnRlcmZhY2Ugd2l0aCBidWlsdCBpbiBTYWxlc2ZvcmNlIEFQSSBvYmplY3RzIGFuZCBhdXRvbWF0aWNhbGx5IHJlc29sdmVzIHByb21pc2Ugb2JqZWN0XG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgeyBSRVBMU2VydmVyLCBzdGFydCBhcyBzdGFydFJlcGwgfSBmcm9tICdyZXBsJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ3N0cmVhbSc7XG5pbXBvcnQganNmb3JjZSBmcm9tICcuLic7XG5pbXBvcnQge1xuICBpc1Byb21pc2VMaWtlLFxuICBpc051bWJlcixcbiAgaXNGdW5jdGlvbixcbiAgaXNPYmplY3QsXG59IGZyb20gJy4uL3V0aWwvZnVuY3Rpb24nO1xuaW1wb3J0IHsgQ2xpIH0gZnJvbSAnLi9jbGknO1xuXG4vKipcbiAqIEludGVyY2VwdCB0aGUgZXZhbGVkIHZhbHVlIHJldHVybmVkIGZyb20gcmVwbCBldmFsdWF0b3IsIGNvbnZlcnQgYW5kIHNlbmQgYmFjayB0byBvdXRwdXQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbmplY3RCZWZvcmUoXG4gIHJlcGxTZXJ2ZXI6IFJFUExTZXJ2ZXIsXG4gIG1ldGhvZDogc3RyaW5nLFxuICBiZWZvcmVGbjogRnVuY3Rpb24sXG4pIHtcbiAgY29uc3QgX29yaWc6IEZ1bmN0aW9uID0gKHJlcGxTZXJ2ZXIgYXMgYW55KVttZXRob2RdO1xuICAocmVwbFNlcnZlciBhcyBhbnkpW21ldGhvZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3MucG9wKCk7XG4gICAgYmVmb3JlRm4uYXBwbHkoXG4gICAgICBudWxsLFxuICAgICAgYXJncy5jb25jYXQoKGVycjogYW55LCByZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyIHx8IHJlcykge1xuICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfb3JpZy5hcHBseShyZXBsU2VydmVyLCBhcmdzLmNvbmNhdChjYWxsYmFjaykpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuICByZXR1cm4gcmVwbFNlcnZlcjtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbmplY3RBZnRlcihcbiAgcmVwbFNlcnZlcjogUkVQTFNlcnZlcixcbiAgbWV0aG9kOiBzdHJpbmcsXG4gIGFmdGVyRm46IEZ1bmN0aW9uLFxuKSB7XG4gIGNvbnN0IF9vcmlnOiBGdW5jdGlvbiA9IChyZXBsU2VydmVyIGFzIGFueSlbbWV0aG9kXTtcbiAgKHJlcGxTZXJ2ZXIgYXMgYW55KVttZXRob2RdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgIF9vcmlnLmFwcGx5KFxuICAgICAgcmVwbFNlcnZlcixcbiAgICAgIGFyZ3MuY29uY2F0KCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGFmdGVyRm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoY2FsbGJhY2spKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuICByZXR1cm4gcmVwbFNlcnZlcjtcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSByZXN1bHQgd2FzIFwicHJvbWlzZVwiLCByZXNvbHZlIGl0cyB2YWx1ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcHJvbWlzaWZ5KFxuICBlcnI6IEVycm9yIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgdmFsdWU6IGFueSxcbiAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxuKSB7XG4gIC8vIGNhbGxiYWNrIGltbWVkaWF0ZWx5IGlmIG5vIHZhbHVlIHBhc3NlZFxuICBpZiAoIWNhbGxiYWNrICYmIGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgY2FsbGJhY2sgPSB2YWx1ZTtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuICBpZiAoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIGlmIChpc1Byb21pc2VMaWtlKHZhbHVlKSkge1xuICAgIHZhbHVlLnRoZW4oXG4gICAgICAodjogYW55KSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHYpO1xuICAgICAgfSxcbiAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKG51bGwsIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIE91dHB1dCBvYmplY3QgdG8gc3Rkb3V0IGluIEpTT04gcmVwcmVzZW50YXRpb25cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG91dHB1dFRvU3Rkb3V0KHByZXR0eVByaW50Pzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIGlmIChwcmV0dHlQcmludCAmJiAhaXNOdW1iZXIocHJldHR5UHJpbnQpKSB7XG4gICAgcHJldHR5UHJpbnQgPSA0O1xuICB9XG4gIHJldHVybiAoZXJyOiBhbnksIHZhbHVlOiBhbnksIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RyID0gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIHByZXR0eVByaW50KTtcbiAgICAgIGNvbnNvbGUubG9nKHN0cik7XG4gICAgfVxuICAgIGNhbGxiYWNrKGVyciwgdmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIGRlZmluZSBnZXQgYWNjZXNzb3IgdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZWZpbmVQcm9wKG9iajogT2JqZWN0LCBwcm9wOiBzdHJpbmcsIGdldHRlcjogKCkgPT4gYW55KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7IGdldDogZ2V0dGVyIH0pO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFJlcGwge1xuICBfY2xpOiBDbGk7XG4gIF9pbjogVHJhbnNmb3JtO1xuICBfb3V0OiBUcmFuc2Zvcm07XG4gIF9pbnRlcmFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gIF9wYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX3JlcGxTZXJ2ZXI6IFJFUExTZXJ2ZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoY2xpOiBDbGkpIHtcbiAgICB0aGlzLl9jbGkgPSBjbGk7XG4gICAgdGhpcy5faW4gPSBuZXcgVHJhbnNmb3JtKCk7XG4gICAgdGhpcy5fb3V0ID0gbmV3IFRyYW5zZm9ybSgpO1xuICAgIHRoaXMuX2luLl90cmFuc2Zvcm0gPSAoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9wYXVzZWQpIHtcbiAgICAgICAgdGhpcy5faW4ucHVzaChjaHVuayk7XG4gICAgICB9XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH07XG4gICAgdGhpcy5fb3V0Ll90cmFuc2Zvcm0gPSAoY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9wYXVzZWQgJiYgdGhpcy5faW50ZXJhY3RpdmUgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX291dC5wdXNoKGNodW5rKTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgc3RhcnQoXG4gICAgb3B0aW9uczoge1xuICAgICAgaW50ZXJhY3RpdmU/OiBib29sZWFuO1xuICAgICAgcHJldHR5UHJpbnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBldmFsU2NyaXB0Pzogc3RyaW5nO1xuICAgIH0gPSB7fSxcbiAgKSB7XG4gICAgdGhpcy5faW50ZXJhY3RpdmUgPSBvcHRpb25zLmludGVyYWN0aXZlICE9PSBmYWxzZTtcblxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG4gICAgaWYgKHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSkge1xuICAgICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHRydWUpO1xuICAgIH1cbiAgICBwcm9jZXNzLnN0ZGluLnBpcGUodGhpcy5faW4pO1xuXG4gICAgdGhpcy5fb3V0LnBpcGUocHJvY2Vzcy5zdGRvdXQpO1xuXG4gICAgZGVmaW5lUHJvcCh0aGlzLl9vdXQsICdjb2x1bW5zJywgKCkgPT4gcHJvY2Vzcy5zdGRvdXQuY29sdW1ucyk7XG5cbiAgICB0aGlzLl9yZXBsU2VydmVyID0gc3RhcnRSZXBsKHtcbiAgICAgIGlucHV0OiB0aGlzLl9pbixcbiAgICAgIG91dHB1dDogdGhpcy5fb3V0LFxuICAgICAgdGVybWluYWw6IHRydWUsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9kZWZpbmVBZGRpdGlvbmFsQ29tbWFuZHMoKTtcblxuICAgIHRoaXMuX3JlcGxTZXJ2ZXIgPSBpbmplY3RCZWZvcmUoXG4gICAgICB0aGlzLl9yZXBsU2VydmVyLFxuICAgICAgJ2NvbXBsZXRlcicsXG4gICAgICAobGluZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShsaW5lKVxuICAgICAgICAgIC50aGVuKChyZXRzKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXRzKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuX3JlcGxTZXJ2ZXIgPSBpbmplY3RBZnRlcih0aGlzLl9yZXBsU2VydmVyLCAnZXZhbCcsIHByb21pc2lmeSk7XG5cbiAgICBpZiAob3B0aW9ucy5pbnRlcmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX3JlcGxTZXJ2ZXIgPSBpbmplY3RBZnRlcihcbiAgICAgICAgdGhpcy5fcmVwbFNlcnZlcixcbiAgICAgICAgJ2V2YWwnLFxuICAgICAgICBvdXRwdXRUb1N0ZG91dChvcHRpb25zLnByZXR0eVByaW50KSxcbiAgICAgICk7XG4gICAgICB0aGlzLl9yZXBsU2VydmVyID0gaW5qZWN0QWZ0ZXIodGhpcy5fcmVwbFNlcnZlciwgJ2V2YWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX3JlcGxTZXJ2ZXIub24oJ2V4aXQnLCAoKSA9PiBwcm9jZXNzLmV4aXQoKSk7XG5cbiAgICB0aGlzLl9kZWZpbmVCdWlsdGluVmFycyh0aGlzLl9yZXBsU2VydmVyLmNvbnRleHQpO1xuXG4gICAgaWYgKG9wdGlvbnMuZXZhbFNjcmlwdCkge1xuICAgICAgdGhpcy5faW4ud3JpdGUob3B0aW9ucy5ldmFsU2NyaXB0ICsgJ1xcbicsICd1dGYtOCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBfZGVmaW5lQWRkaXRpb25hbENvbW1hbmRzKCkge1xuICAgIGNvbnN0IGNsaSA9IHRoaXMuX2NsaTtcbiAgICBjb25zdCByZXBsU2VydmVyID0gdGhpcy5fcmVwbFNlcnZlcjtcbiAgICBpZiAoIXJlcGxTZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVwbFNlcnZlci5kZWZpbmVDb21tYW5kKCdjb25uZWN0aW9ucycsIHtcbiAgICAgIGhlbHA6ICdMaXN0IGN1cnJlbnR5IHJlZ2lzdGVyZWQgU2FsZXNmb3JjZSBjb25uZWN0aW9ucycsXG4gICAgICBhY3Rpb246IGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgY2xpLmxpc3RDb25uZWN0aW9ucygpO1xuICAgICAgICByZXBsU2VydmVyLmRpc3BsYXlQcm9tcHQoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmVwbFNlcnZlci5kZWZpbmVDb21tYW5kKCdjb25uZWN0Jywge1xuICAgICAgaGVscDogJ0Nvbm5lY3QgdG8gU2FsZXNmb3JjZSBpbnN0YW5jZScsXG4gICAgICBhY3Rpb246IGFzeW5jICguLi5hcmdzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICBjb25zdCBbbmFtZSwgcGFzc3dvcmRdID0gYXJncztcbiAgICAgICAgY29uc3QgcGFyYW1zID0gcGFzc3dvcmRcbiAgICAgICAgICA/IHsgY29ubmVjdGlvbjogbmFtZSwgdXNlcm5hbWU6IG5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9XG4gICAgICAgICAgOiB7IGNvbm5lY3Rpb246IG5hbWUsIHVzZXJuYW1lOiBuYW1lIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgY2xpLmNvbm5lY3QocGFyYW1zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVwbFNlcnZlci5kaXNwbGF5UHJvbXB0KCk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlcGxTZXJ2ZXIuZGVmaW5lQ29tbWFuZCgnZGlzY29ubmVjdCcsIHtcbiAgICAgIGhlbHA6ICdEaXNjb25uZWN0IGNvbm5lY3Rpb24gYW5kIGVyYXNlIGl0IGZyb20gcmVnaXN0cnknLFxuICAgICAgYWN0aW9uOiAobmFtZSkgPT4ge1xuICAgICAgICBjbGkuZGlzY29ubmVjdChuYW1lKTtcbiAgICAgICAgcmVwbFNlcnZlci5kaXNwbGF5UHJvbXB0KCk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlcGxTZXJ2ZXIuZGVmaW5lQ29tbWFuZCgndXNlJywge1xuICAgICAgaGVscDogJ1NwZWNpZnkgbG9naW4gc2VydmVyIHRvIGVzdGFibGlzaCBjb25uZWN0aW9uJyxcbiAgICAgIGFjdGlvbjogKGxvZ2luU2VydmVyKSA9PiB7XG4gICAgICAgIGNsaS5zZXRMb2dpblNlcnZlcihsb2dpblNlcnZlcik7XG4gICAgICAgIHJlcGxTZXJ2ZXIuZGlzcGxheVByb21wdCgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXBsU2VydmVyLmRlZmluZUNvbW1hbmQoJ2F1dGhvcml6ZScsIHtcbiAgICAgIGhlbHA6ICdDb25uZWN0IHRvIFNhbGVzZm9yY2UgdXNpbmcgT0F1dGgyIGF1dGhvcml6YXRpb24gZmxvdycsXG4gICAgICBhY3Rpb246IGFzeW5jIChjbGllbnROYW1lKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgY2xpLmF1dGhvcml6ZShjbGllbnROYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVwbFNlcnZlci5kaXNwbGF5UHJvbXB0KCk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlcGxTZXJ2ZXIuZGVmaW5lQ29tbWFuZCgncmVnaXN0ZXInLCB7XG4gICAgICBoZWxwOiAnUmVnaXN0ZXIgT0F1dGgyIGNsaWVudCBpbmZvcm1hdGlvbicsXG4gICAgICBhY3Rpb246IGFzeW5jICguLi5hcmdzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICBjb25zdCBbXG4gICAgICAgICAgY2xpZW50TmFtZSxcbiAgICAgICAgICBjbGllbnRJZCxcbiAgICAgICAgICBjbGllbnRTZWNyZXQsXG4gICAgICAgICAgcmVkaXJlY3RVcmksXG4gICAgICAgICAgbG9naW5VcmwsXG4gICAgICAgIF0gPSBhcmdzO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7IGNsaWVudElkLCBjbGllbnRTZWNyZXQsIHJlZGlyZWN0VXJpLCBsb2dpblVybCB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGNsaS5yZWdpc3RlcihjbGllbnROYW1lLCBjb25maWcpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXBsU2VydmVyLmRpc3BsYXlQcm9tcHQoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmVwbFNlcnZlci5kZWZpbmVDb21tYW5kKCdvcGVuJywge1xuICAgICAgaGVscDogJ09wZW4gU2FsZXNmb3JjZSB3ZWIgcGFnZSB1c2luZyBlc3RhYmxpc2hlZCBjb25uZWN0aW9uJyxcbiAgICAgIGFjdGlvbjogKHVybCkgPT4ge1xuICAgICAgICBjbGkub3BlblVybFVzaW5nU2Vzc2lvbih1cmwpO1xuICAgICAgICByZXBsU2VydmVyLmRpc3BsYXlQcm9tcHQoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHBhdXNlKCkge1xuICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgaWYgKHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSkge1xuICAgICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHJlc3VtZSgpIHtcbiAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcbiAgICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuICAgIGlmIChwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUpIHtcbiAgICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGFzeW5jIGNvbXBsZXRlKGxpbmU6IHN0cmluZykge1xuICAgIGNvbnN0IHRva2VucyA9IGxpbmUucmVwbGFjZSgvXlxccysvLCAnJykuc3BsaXQoL1xccysvKTtcbiAgICBjb25zdCBbY29tbWFuZCwga2V5d29yZCA9ICcnXSA9IHRva2VucztcbiAgICBpZiAoY29tbWFuZFswXSA9PT0gJy4nICYmIHRva2Vucy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGxldCBjYW5kaWRhdGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgaWYgKGNvbW1hbmQgPT09ICcuY29ubmVjdCcgfHwgY29tbWFuZCA9PT0gJy5kaXNjb25uZWN0Jykge1xuICAgICAgICBjYW5kaWRhdGVzID0gYXdhaXQgdGhpcy5fY2xpLmdldENvbm5lY3Rpb25OYW1lcygpO1xuICAgICAgfSBlbHNlIGlmIChjb21tYW5kID09PSAnLmF1dGhvcml6ZScpIHtcbiAgICAgICAgY2FuZGlkYXRlcyA9IGF3YWl0IHRoaXMuX2NsaS5nZXRDbGllbnROYW1lcygpO1xuICAgICAgfSBlbHNlIGlmIChjb21tYW5kID09PSAnLnVzZScpIHtcbiAgICAgICAgY2FuZGlkYXRlcyA9IFsncHJvZHVjdGlvbicsICdzYW5kYm94J107XG4gICAgICB9XG4gICAgICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoKG5hbWUpID0+IG5hbWUuaW5kZXhPZihrZXl3b3JkKSA9PT0gMCk7XG4gICAgICByZXR1cm4gW2NhbmRpZGF0ZXMsIGtleXdvcmRdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXAgYWxsIGpzZm9yY2Ugb2JqZWN0IHRvIFJFUEwgY29udGV4dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2RlZmluZUJ1aWx0aW5WYXJzKGNvbnRleHQ6IHsgW3Zhck5hbWU6IHN0cmluZ106IGFueSB9KSB7XG4gICAgY29uc3QgY2xpID0gdGhpcy5fY2xpO1xuXG4gICAgLy8gZGVmaW5lIHNhbGVzZm9yY2UgcGFja2FnZSByb290IG9iamVjdHNcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBqc2ZvcmNlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqc2ZvcmNlLCBrZXkpICYmXG4gICAgICAgICEoZ2xvYmFsIGFzIGFueSlba2V5XVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRleHRba2V5XSA9IChqc2ZvcmNlIGFzIGFueSlba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZXhwb3NlIGpzZm9yY2UgcGFja2FnZSByb290IG9iamVjdCBpbiBjb250ZXh0LlxuICAgIGNvbnRleHQuanNmb3JjZSA9IGpzZm9yY2U7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm94eUZ1bmMocHJvcDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbm4gPSBjbGkuZ2V0Q3VycmVudENvbm5lY3Rpb24oKTtcbiAgICAgICAgcmV0dXJuIChjb25uIGFzIGFueSlbcHJvcF0oLi4uYXJncyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3h5QWNjZXNzb3IocHJvcDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25uID0gY2xpLmdldEN1cnJlbnRDb25uZWN0aW9uKCk7XG4gICAgICAgIHJldHVybiAoY29ubiBhcyBhbnkpW3Byb3BdO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25uID0gY2xpLmdldEN1cnJlbnRDb25uZWN0aW9uKCk7XG4gICAgLy8gbGlzdCBhbGwgcHJvcHMgaW4gY29ubmVjdGlvbiBpbnN0YW5jZSwgb3RoZXIgdGhhbiBFdmVudEVtaXR0ZXIgb3Igb2JqZWN0IGJ1aWx0LWluIG1ldGhvZHNcbiAgICBjb25zdCBwcm9wczogeyBbcHJvcDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gICAgbGV0IG86IG9iamVjdCA9IGNvbm47XG4gICAgd2hpbGUgKG8gJiYgbyAhPT0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZSAmJiBvICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgICBmb3IgKGNvbnN0IHAgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobykpIHtcbiAgICAgICAgaWYgKHAgIT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICBwcm9wc1twXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhwcm9wcykpIHtcbiAgICAgIGlmICh0eXBlb2YgKGdsb2JhbCBhcyBhbnkpW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBhdm9pZCBnbG9iYWwgb3ZlcnJpZGVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocHJvcC5pbmRleE9mKCdfJykgPT09IDApIHtcbiAgICAgICAgLy8gaWdub3JlIHByaXZhdGVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbigoY29ubiBhcyBhbnkpW3Byb3BdKSkge1xuICAgICAgICBjb250ZXh0W3Byb3BdID0gY3JlYXRlUHJveHlGdW5jKHByb3ApO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdCgoY29ubiBhcyBhbnkpW3Byb3BdKSkge1xuICAgICAgICBkZWZpbmVQcm9wKGNvbnRleHQsIHByb3AsIGNyZWF0ZVByb3h5QWNjZXNzb3IocHJvcCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBkZWZhdWx0IGNvbm5lY3Rpb24gYXMgXCIkY29ublwiXG4gICAgZGVmaW5lUHJvcChjb250ZXh0LCAnJGNvbm4nLCAoKSA9PiB7XG4gICAgICByZXR1cm4gY2xpLmdldEN1cnJlbnRDb25uZWN0aW9uKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwbDtcbiJdfQ==