"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

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

exports.default = exports.Cli = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _http = _interopRequireDefault(require("http"));

var _url = _interopRequireDefault(require("url"));

var _crypto = _interopRequireDefault(require("crypto"));

var _open = _interopRequireDefault(require("open"));

var _commander = require("commander");

var _inquirer = _interopRequireDefault(require("inquirer"));

var _request = _interopRequireDefault(require("../request"));

var _base64url = _interopRequireDefault(require("base64url"));

var _repl = _interopRequireDefault(require("./repl"));

var _ = _interopRequireWildcard(require(".."));

var _VERSION = _interopRequireDefault(require("../VERSION"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

const registry = _.default.registry;

/**
 *
 */
class Cli {
  constructor() {
    (0, _defineProperty2.default)(this, "_repl", new _repl.default(this));
    (0, _defineProperty2.default)(this, "_conn", new _.Connection());
    (0, _defineProperty2.default)(this, "_connName", undefined);
    (0, _defineProperty2.default)(this, "_outputEnabled", true);
    (0, _defineProperty2.default)(this, "_defaultLoginUrl", undefined);
  }

  /**
   *
   */
  readCommand() {
    return new _commander.Command().option('-u, --username [username]', 'Salesforce username').option('-p, --password [password]', 'Salesforce password (and security token, if available)').option('-c, --connection [connection]', 'Connection name stored in connection registry').option('-l, --loginUrl [loginUrl]', 'Salesforce login url').option('--sandbox', 'Login to Salesforce sandbox').option('-e, --evalScript [evalScript]', 'Script to evaluate').version(_VERSION.default).parse(process.argv);
  }

  async start() {
    const program = this.readCommand();
    this._outputEnabled = !program.evalScript;

    try {
      await this.connect(program);

      if (program.evalScript) {
        this._repl.start({
          interactive: false,
          evalScript: program.evalScript
        });
      } else {
        this._repl.start();
      }
    } catch (err) {
      console.error(err);
      process.exit();
    }
  }

  getCurrentConnection() {
    return this._conn;
  }

  print(...args) {
    if (this._outputEnabled) {
      console.log(...args);
    }
  }

  saveCurrentConnection() {
    if (this._connName) {
      const conn = this._conn;
      const connName = this._connName;
      const connConfig = {
        oauth2: conn.oauth2 ? {
          clientId: conn.oauth2.clientId || undefined,
          clientSecret: conn.oauth2.clientSecret || undefined,
          redirectUri: conn.oauth2.redirectUri || undefined,
          loginUrl: conn.oauth2.loginUrl || undefined
        } : undefined,
        accessToken: conn.accessToken || undefined,
        instanceUrl: conn.instanceUrl || undefined,
        refreshToken: conn.refreshToken || undefined
      };
      registry.saveConnectionConfig(connName, connConfig);
    }
  }

  setLoginServer(loginServer) {
    if (!loginServer) {
      return;
    }

    if (loginServer === 'production') {
      this._defaultLoginUrl = 'https://login.salesforce.com';
    } else if (loginServer === 'sandbox') {
      this._defaultLoginUrl = 'https://test.salesforce.com';
    } else if ((0, _indexOf.default)(loginServer).call(loginServer, 'https://') !== 0) {
      this._defaultLoginUrl = 'https://' + loginServer;
    } else {
      this._defaultLoginUrl = loginServer;
    }

    this.print(`Using "${this._defaultLoginUrl}" as default login URL.`);
  }
  /**
   *
   */


  async connect(options) {
    const loginServer = options.loginUrl ? options.loginUrl : options.sandbox ? 'sandbox' : null;
    this.setLoginServer(loginServer);
    this._connName = options.connection;
    let connConfig = await registry.getConnectionConfig(options.connection);
    let username = options.username;

    if (!connConfig) {
      connConfig = {};

      if (this._defaultLoginUrl) {
        connConfig.loginUrl = this._defaultLoginUrl;
      }

      username = username || options.connection;
    }

    this._conn = new _.Connection(connConfig);
    const password = options.password;

    if (username) {
      await this.startPasswordAuth(username, password);
      this.saveCurrentConnection();
    } else {
      if (this._connName && this._conn.accessToken) {
        this._conn.on('refresh', () => {
          this.print('Refreshing access token ... ');
          this.saveCurrentConnection();
        });

        try {
          const identity = await this._conn.identity();
          this.print(`Logged in as : ${identity.username}`);
        } catch (err) {
          if (err instanceof Error) {
            this.print(err.message);
          }

          if (this._conn.oauth2) {
            throw new Error('Please re-authorize connection.');
          } else {
            await this.startPasswordAuth(this._connName);
          }
        }
      }
    }
  }
  /**
   *
   */


  async startPasswordAuth(username, password) {
    try {
      await this.loginByPassword(username, password, 2);
    } catch (err) {
      if (err instanceof Error && err.message === 'canceled') {
        console.error('Password authentication canceled: Not logged in');
      } else {
        throw err;
      }
    }
  }
  /**
   *
   */


  async loginByPassword(username, password, retryCount) {
    if (password === '') {
      throw new Error('canceled');
    }

    if (password == null) {
      const pass = await this.promptPassword('Password: ');
      return this.loginByPassword(username, pass, retryCount);
    }

    try {
      const result = await this._conn.login(username, password);
      this.print(`Logged in as : ${username}`);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }

      if (retryCount > 0) {
        return this.loginByPassword(username, undefined, retryCount - 1);
      } else {
        throw new Error('canceled');
      }
    }
  }
  /**
   *
   */


  disconnect(connName) {
    const name = connName || this._connName;

    if (name && registry.getConnectionConfig(name)) {
      registry.removeConnectionConfig(name);
      this.print(`Disconnect connection '${name}'`);
    }

    this._connName = undefined;
    this._conn = new _.Connection();
  }
  /**
   *
   */


  async authorize(clientName) {
    const name = clientName || 'default';
    var oauth2Config = await registry.getClientConfig(name);

    if (!oauth2Config || !oauth2Config.clientId) {
      if (name === 'default' || name === 'sandbox') {
        this.print('No client information registered. Downloading JSforce default client information...');
        return this.downloadDefaultClientInfo(name);
      }

      throw new Error(`No OAuth2 client information registered : '${name}'. Please register client info first.`);
    }

    const oauth2 = new _.OAuth2(oauth2Config);

    const verifier = _base64url.default.encode(_crypto.default.randomBytes(32));

    const challenge = _base64url.default.encode(_crypto.default.createHash('sha256').update(verifier).digest());

    const state = _base64url.default.encode(_crypto.default.randomBytes(32));

    const authzUrl = oauth2.getAuthorizationUrl({
      code_challenge: challenge,
      state
    });
    this.print('Opening authorization page in browser...');
    this.print(`URL: ${authzUrl}`);
    this.openUrl(authzUrl);
    const params = await this.waitCallback(oauth2Config.redirectUri, state);

    if (!params.code) {
      throw new Error('No authorization code returned.');
    }

    if (params.state !== state) {
      throw new Error('Invalid state parameter returned.');
    }

    this._conn = new _.Connection({
      oauth2
    });
    this.print('Received authorization code. Please close the opened browser window.');
    await this._conn.authorize(params.code, {
      code_verifier: verifier
    });
    this.print('Authorized. Fetching user info...');
    const identity = await this._conn.identity();
    this.print(`Logged in as : ${identity.username}`);
    this._connName = identity.username;
    this.saveCurrentConnection();
  }
  /**
   *
   */


  async downloadDefaultClientInfo(clientName) {
    const configUrl = 'https://jsforce.github.io/client-config/default.json';
    const res = await new _promise.default((resolve, reject) => {
      (0, _request.default)({
        method: 'GET',
        url: configUrl
      }).on('complete', resolve).on('error', reject);
    });
    const clientConfig = JSON.parse(res.body);

    if (clientName === 'sandbox') {
      clientConfig.loginUrl = 'https://test.salesforce.com';
    }

    await registry.registerClientConfig(clientName, clientConfig);
    this.print('Client information downloaded successfully.');
    return this.authorize(clientName);
  }

  async waitCallback(serverUrl, state) {
    if (serverUrl && (0, _indexOf.default)(serverUrl).call(serverUrl, 'http://localhost:') === 0) {
      return new _promise.default((resolve, reject) => {
        const server = _http.default.createServer((req, res) => {
          if (!req.url) {
            return;
          }

          const qparams = _url.default.parse(req.url, true).query;

          res.writeHead(200, {
            'Content-Type': 'text/html'
          });
          res.write('<html><script>location.href="about:blank";</script></html>');
          res.end();

          if (qparams.error) {
            reject(new Error(qparams.error));
          } else {
            resolve(qparams);
          }

          server.close();
          req.connection.end();
          req.connection.destroy();
        });

        const port = Number(_url.default.parse(serverUrl).port);
        server.listen(port, 'localhost');
      });
    } else {
      const code = await this.promptMessage('Copy & paste authz code passed in redirected URL: ');
      return {
        code: decodeURIComponent(code),
        state
      };
    }
  }
  /**
   *
   */


  async register(clientName, clientConfig) {
    var _context;

    const name = clientName || 'default';
    const prompts = {
      clientId: 'Input client ID : ',
      clientSecret: 'Input client secret (optional) : ',
      redirectUri: 'Input redirect URI : ',
      loginUrl: 'Input login URL (default is https://login.salesforce.com) : '
    };
    const registered = await registry.getClientConfig(name);

    if (registered) {
      const msg = `Client '${name}' is already registered. Are you sure you want to override ? [yN] : `;
      const ok = await this.promptConfirm(msg);

      if (!ok) {
        throw new Error('Registration canceled.');
      }
    }

    clientConfig = await (0, _reduce.default)(_context = (0, _keys.default)(prompts)).call(_context, async (promise, name) => {
      const cconfig = await promise;
      const promptName = name;
      const message = prompts[promptName];

      if (!cconfig[promptName]) {
        const value = await this.promptMessage(message);

        if (value) {
          return _objectSpread(_objectSpread({}, cconfig), {}, {
            [promptName]: value
          });
        }
      }

      return cconfig;
    }, _promise.default.resolve(clientConfig));
    await registry.registerClientConfig(name, clientConfig);
    this.print('Client registered successfully.');
  }
  /**
   *
   */


  async listConnections() {
    const names = await registry.getConnectionNames();

    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      this.print((name === this._connName ? '* ' : '  ') + name);
    }
  }
  /**
   *
   */


  async getConnectionNames() {
    return registry.getConnectionNames();
  }
  /**
   *
   */


  async getClientNames() {
    return registry.getClientNames();
  }
  /**
   *
   */


  async prompt(type, message) {
    this._repl.pause();

    const answer = await _inquirer.default.prompt([{
      type,
      name: 'value',
      message
    }]);

    this._repl.resume();

    return answer.value;
  }
  /**
   *
   */


  async promptMessage(message) {
    return this.prompt('input', message);
  }

  async promptPassword(message) {
    return this.prompt('password', message);
  }
  /**
   *
   */


  async promptConfirm(message) {
    return this.prompt('confirm', message);
  }
  /**
   *
   */


  openUrl(url) {
    (0, _open.default)(url);
  }
  /**
   *
   */


  openUrlUsingSession(url) {
    let frontdoorUrl = `${this._conn.instanceUrl}/secur/frontdoor.jsp?sid=${this._conn.accessToken}`;

    if (url) {
      frontdoorUrl += '&retURL=' + encodeURIComponent(url);
    }

    this.openUrl(frontdoorUrl);
  }

}
/* ------------------------------------------------------------------------- */


exports.Cli = Cli;
const cli = new Cli();
var _default = cli;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvY2xpLnRzIl0sIm5hbWVzIjpbInJlZ2lzdHJ5IiwianNmb3JjZSIsIkNsaSIsIlJlcGwiLCJDb25uZWN0aW9uIiwidW5kZWZpbmVkIiwicmVhZENvbW1hbmQiLCJDb21tYW5kIiwib3B0aW9uIiwidmVyc2lvbiIsInBhcnNlIiwicHJvY2VzcyIsImFyZ3YiLCJzdGFydCIsInByb2dyYW0iLCJfb3V0cHV0RW5hYmxlZCIsImV2YWxTY3JpcHQiLCJjb25uZWN0IiwiX3JlcGwiLCJpbnRlcmFjdGl2ZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImV4aXQiLCJnZXRDdXJyZW50Q29ubmVjdGlvbiIsIl9jb25uIiwicHJpbnQiLCJhcmdzIiwibG9nIiwic2F2ZUN1cnJlbnRDb25uZWN0aW9uIiwiX2Nvbm5OYW1lIiwiY29ubiIsImNvbm5OYW1lIiwiY29ubkNvbmZpZyIsIm9hdXRoMiIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwicmVkaXJlY3RVcmkiLCJsb2dpblVybCIsImFjY2Vzc1Rva2VuIiwiaW5zdGFuY2VVcmwiLCJyZWZyZXNoVG9rZW4iLCJzYXZlQ29ubmVjdGlvbkNvbmZpZyIsInNldExvZ2luU2VydmVyIiwibG9naW5TZXJ2ZXIiLCJfZGVmYXVsdExvZ2luVXJsIiwib3B0aW9ucyIsInNhbmRib3giLCJjb25uZWN0aW9uIiwiZ2V0Q29ubmVjdGlvbkNvbmZpZyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdGFydFBhc3N3b3JkQXV0aCIsIm9uIiwiaWRlbnRpdHkiLCJFcnJvciIsIm1lc3NhZ2UiLCJsb2dpbkJ5UGFzc3dvcmQiLCJyZXRyeUNvdW50IiwicGFzcyIsInByb21wdFBhc3N3b3JkIiwicmVzdWx0IiwibG9naW4iLCJkaXNjb25uZWN0IiwibmFtZSIsInJlbW92ZUNvbm5lY3Rpb25Db25maWciLCJhdXRob3JpemUiLCJjbGllbnROYW1lIiwib2F1dGgyQ29uZmlnIiwiZ2V0Q2xpZW50Q29uZmlnIiwiZG93bmxvYWREZWZhdWx0Q2xpZW50SW5mbyIsIk9BdXRoMiIsInZlcmlmaWVyIiwiYmFzZTY0dXJsIiwiZW5jb2RlIiwiY3J5cHRvIiwicmFuZG9tQnl0ZXMiLCJjaGFsbGVuZ2UiLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0Iiwic3RhdGUiLCJhdXRoelVybCIsImdldEF1dGhvcml6YXRpb25VcmwiLCJjb2RlX2NoYWxsZW5nZSIsIm9wZW5VcmwiLCJwYXJhbXMiLCJ3YWl0Q2FsbGJhY2siLCJjb2RlIiwiY29kZV92ZXJpZmllciIsImNvbmZpZ1VybCIsInJlcyIsInJlc29sdmUiLCJyZWplY3QiLCJtZXRob2QiLCJ1cmwiLCJjbGllbnRDb25maWciLCJKU09OIiwiYm9keSIsInJlZ2lzdGVyQ2xpZW50Q29uZmlnIiwic2VydmVyVXJsIiwic2VydmVyIiwiaHR0cCIsImNyZWF0ZVNlcnZlciIsInJlcSIsInFwYXJhbXMiLCJxdWVyeSIsIndyaXRlSGVhZCIsIndyaXRlIiwiZW5kIiwiY2xvc2UiLCJkZXN0cm95IiwicG9ydCIsIk51bWJlciIsImxpc3RlbiIsInByb21wdE1lc3NhZ2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZWdpc3RlciIsInByb21wdHMiLCJyZWdpc3RlcmVkIiwibXNnIiwib2siLCJwcm9tcHRDb25maXJtIiwicHJvbWlzZSIsImNjb25maWciLCJwcm9tcHROYW1lIiwidmFsdWUiLCJsaXN0Q29ubmVjdGlvbnMiLCJuYW1lcyIsImdldENvbm5lY3Rpb25OYW1lcyIsImkiLCJsZW5ndGgiLCJnZXRDbGllbnROYW1lcyIsInByb21wdCIsInR5cGUiLCJwYXVzZSIsImFuc3dlciIsImlucXVpcmVyIiwicmVzdW1lIiwib3BlblVybFVzaW5nU2Vzc2lvbiIsImZyb250ZG9vclVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsImNsaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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QUNEOztBQUNELFNBQUtWLE9BQUwsQ0FBYXVELFlBQWI7QUFDRDs7QUF4YWM7QUEyYWpCOzs7O0FBRUEsTUFBTUUsR0FBRyxHQUFHLElBQUk1SSxHQUFKLEVBQVo7ZUFFZTRJLEciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIENvbW1hbmQgbGluZSBpbnRlcmZhY2UgZm9yIEpTZm9yY2VcbiAqIEBhdXRob3IgU2hpbmljaGkgVG9taXRhIDxzaGluaWNoaS50b21pdGFAZ21haWwuY29tPlxuICovXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBvcGVuVXJsIGZyb20gJ29wZW4nO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2NvbW1hbmRlcic7XG5pbXBvcnQgaW5xdWlyZXIgZnJvbSAnaW5xdWlyZXInO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vcmVxdWVzdCc7XG5pbXBvcnQgYmFzZTY0dXJsIGZyb20gJ2Jhc2U2NHVybCc7XG5pbXBvcnQgUmVwbCBmcm9tICcuL3JlcGwnO1xuaW1wb3J0IGpzZm9yY2UsIHsgQ29ubmVjdGlvbiwgT0F1dGgyIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHZlcnNpb24gZnJvbSAnLi4vVkVSU0lPTic7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IENsaWVudENvbmZpZyB9IGZyb20gJy4uL3JlZ2lzdHJ5L3R5cGVzJztcblxuY29uc3QgcmVnaXN0cnkgPSBqc2ZvcmNlLnJlZ2lzdHJ5O1xuXG5pbnRlcmZhY2UgQ2xpQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICBjb25uZWN0aW9uPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIGxvZ2luVXJsPzogc3RyaW5nO1xuICBzYW5kYm94PzogYm9vbGVhbjtcbiAgZXZhbFNjcmlwdD86IHN0cmluZztcbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgQ2xpIHtcbiAgX3JlcGw6IFJlcGwgPSBuZXcgUmVwbCh0aGlzKTtcbiAgX2Nvbm46IENvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigpO1xuICBfY29ubk5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgX291dHB1dEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBfZGVmYXVsdExvZ2luVXJsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICByZWFkQ29tbWFuZCgpOiBDbGlDb21tYW5kIHtcbiAgICByZXR1cm4gbmV3IENvbW1hbmQoKVxuICAgICAgLm9wdGlvbignLXUsIC0tdXNlcm5hbWUgW3VzZXJuYW1lXScsICdTYWxlc2ZvcmNlIHVzZXJuYW1lJylcbiAgICAgIC5vcHRpb24oXG4gICAgICAgICctcCwgLS1wYXNzd29yZCBbcGFzc3dvcmRdJyxcbiAgICAgICAgJ1NhbGVzZm9yY2UgcGFzc3dvcmQgKGFuZCBzZWN1cml0eSB0b2tlbiwgaWYgYXZhaWxhYmxlKScsXG4gICAgICApXG4gICAgICAub3B0aW9uKFxuICAgICAgICAnLWMsIC0tY29ubmVjdGlvbiBbY29ubmVjdGlvbl0nLFxuICAgICAgICAnQ29ubmVjdGlvbiBuYW1lIHN0b3JlZCBpbiBjb25uZWN0aW9uIHJlZ2lzdHJ5JyxcbiAgICAgIClcbiAgICAgIC5vcHRpb24oJy1sLCAtLWxvZ2luVXJsIFtsb2dpblVybF0nLCAnU2FsZXNmb3JjZSBsb2dpbiB1cmwnKVxuICAgICAgLm9wdGlvbignLS1zYW5kYm94JywgJ0xvZ2luIHRvIFNhbGVzZm9yY2Ugc2FuZGJveCcpXG4gICAgICAub3B0aW9uKCctZSwgLS1ldmFsU2NyaXB0IFtldmFsU2NyaXB0XScsICdTY3JpcHQgdG8gZXZhbHVhdGUnKVxuICAgICAgLnZlcnNpb24odmVyc2lvbilcbiAgICAgIC5wYXJzZShwcm9jZXNzLmFyZ3YpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQoKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMucmVhZENvbW1hbmQoKTtcbiAgICB0aGlzLl9vdXRwdXRFbmFibGVkID0gIXByb2dyYW0uZXZhbFNjcmlwdDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5jb25uZWN0KHByb2dyYW0pO1xuICAgICAgaWYgKHByb2dyYW0uZXZhbFNjcmlwdCkge1xuICAgICAgICB0aGlzLl9yZXBsLnN0YXJ0KHtcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgZXZhbFNjcmlwdDogcHJvZ3JhbS5ldmFsU2NyaXB0LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlcGwuc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRDb25uZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uO1xuICB9XG5cbiAgcHJpbnQoLi4uYXJnczogYW55W10pIHtcbiAgICBpZiAodGhpcy5fb3V0cHV0RW5hYmxlZCkge1xuICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZUN1cnJlbnRDb25uZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jb25uTmFtZSkge1xuICAgICAgY29uc3QgY29ubiA9IHRoaXMuX2Nvbm47XG4gICAgICBjb25zdCBjb25uTmFtZSA9IHRoaXMuX2Nvbm5OYW1lO1xuICAgICAgY29uc3QgY29ubkNvbmZpZyA9IHtcbiAgICAgICAgb2F1dGgyOiBjb25uLm9hdXRoMlxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBjbGllbnRJZDogY29ubi5vYXV0aDIuY2xpZW50SWQgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBjbGllbnRTZWNyZXQ6IGNvbm4ub2F1dGgyLmNsaWVudFNlY3JldCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHJlZGlyZWN0VXJpOiBjb25uLm9hdXRoMi5yZWRpcmVjdFVyaSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGxvZ2luVXJsOiBjb25uLm9hdXRoMi5sb2dpblVybCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBjb25uLmFjY2Vzc1Rva2VuIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgaW5zdGFuY2VVcmw6IGNvbm4uaW5zdGFuY2VVcmwgfHwgdW5kZWZpbmVkLFxuICAgICAgICByZWZyZXNoVG9rZW46IGNvbm4ucmVmcmVzaFRva2VuIHx8IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgICByZWdpc3RyeS5zYXZlQ29ubmVjdGlvbkNvbmZpZyhjb25uTmFtZSwgY29ubkNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgc2V0TG9naW5TZXJ2ZXIobG9naW5TZXJ2ZXI6IE9wdGlvbmFsPHN0cmluZz4pIHtcbiAgICBpZiAoIWxvZ2luU2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsb2dpblNlcnZlciA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0TG9naW5VcmwgPSAnaHR0cHM6Ly9sb2dpbi5zYWxlc2ZvcmNlLmNvbSc7XG4gICAgfSBlbHNlIGlmIChsb2dpblNlcnZlciA9PT0gJ3NhbmRib3gnKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0TG9naW5VcmwgPSAnaHR0cHM6Ly90ZXN0LnNhbGVzZm9yY2UuY29tJztcbiAgICB9IGVsc2UgaWYgKGxvZ2luU2VydmVyLmluZGV4T2YoJ2h0dHBzOi8vJykgIT09IDApIHtcbiAgICAgIHRoaXMuX2RlZmF1bHRMb2dpblVybCA9ICdodHRwczovLycgKyBsb2dpblNlcnZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGVmYXVsdExvZ2luVXJsID0gbG9naW5TZXJ2ZXI7XG4gICAgfVxuICAgIHRoaXMucHJpbnQoYFVzaW5nIFwiJHt0aGlzLl9kZWZhdWx0TG9naW5Vcmx9XCIgYXMgZGVmYXVsdCBsb2dpbiBVUkwuYCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGFzeW5jIGNvbm5lY3Qob3B0aW9uczoge1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICAgIGNvbm5lY3Rpb24/OiBzdHJpbmc7XG4gICAgbG9naW5Vcmw/OiBzdHJpbmc7XG4gICAgc2FuZGJveD86IGJvb2xlYW47XG4gIH0pIHtcbiAgICBjb25zdCBsb2dpblNlcnZlciA9IG9wdGlvbnMubG9naW5VcmxcbiAgICAgID8gb3B0aW9ucy5sb2dpblVybFxuICAgICAgOiBvcHRpb25zLnNhbmRib3hcbiAgICAgID8gJ3NhbmRib3gnXG4gICAgICA6IG51bGw7XG4gICAgdGhpcy5zZXRMb2dpblNlcnZlcihsb2dpblNlcnZlcik7XG4gICAgdGhpcy5fY29ubk5hbWUgPSBvcHRpb25zLmNvbm5lY3Rpb247XG4gICAgbGV0IGNvbm5Db25maWcgPSBhd2FpdCByZWdpc3RyeS5nZXRDb25uZWN0aW9uQ29uZmlnKG9wdGlvbnMuY29ubmVjdGlvbik7XG4gICAgbGV0IHVzZXJuYW1lID0gb3B0aW9ucy51c2VybmFtZTtcbiAgICBpZiAoIWNvbm5Db25maWcpIHtcbiAgICAgIGNvbm5Db25maWcgPSB7fTtcbiAgICAgIGlmICh0aGlzLl9kZWZhdWx0TG9naW5VcmwpIHtcbiAgICAgICAgY29ubkNvbmZpZy5sb2dpblVybCA9IHRoaXMuX2RlZmF1bHRMb2dpblVybDtcbiAgICAgIH1cbiAgICAgIHVzZXJuYW1lID0gdXNlcm5hbWUgfHwgb3B0aW9ucy5jb25uZWN0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9jb25uID0gbmV3IENvbm5lY3Rpb24oY29ubkNvbmZpZyk7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBvcHRpb25zLnBhc3N3b3JkO1xuICAgIGlmICh1c2VybmFtZSkge1xuICAgICAgYXdhaXQgdGhpcy5zdGFydFBhc3N3b3JkQXV0aCh1c2VybmFtZSwgcGFzc3dvcmQpO1xuICAgICAgdGhpcy5zYXZlQ3VycmVudENvbm5lY3Rpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2Nvbm5OYW1lICYmIHRoaXMuX2Nvbm4uYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgdGhpcy5fY29ubi5vbigncmVmcmVzaCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByaW50KCdSZWZyZXNoaW5nIGFjY2VzcyB0b2tlbiAuLi4gJyk7XG4gICAgICAgICAgdGhpcy5zYXZlQ3VycmVudENvbm5lY3Rpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgaWRlbnRpdHkgPSBhd2FpdCB0aGlzLl9jb25uLmlkZW50aXR5KCk7XG4gICAgICAgICAgdGhpcy5wcmludChgTG9nZ2VkIGluIGFzIDogJHtpZGVudGl0eS51c2VybmFtZX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnByaW50KGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX2Nvbm4ub2F1dGgyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSByZS1hdXRob3JpemUgY29ubmVjdGlvbi4nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdGFydFBhc3N3b3JkQXV0aCh0aGlzLl9jb25uTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBzdGFydFBhc3N3b3JkQXV0aCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZD86IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmxvZ2luQnlQYXNzd29yZCh1c2VybmFtZSwgcGFzc3dvcmQsIDIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGVyci5tZXNzYWdlID09PSAnY2FuY2VsZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Bhc3N3b3JkIGF1dGhlbnRpY2F0aW9uIGNhbmNlbGVkOiBOb3QgbG9nZ2VkIGluJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBsb2dpbkJ5UGFzc3dvcmQoXG4gICAgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIHJldHJ5Q291bnQ6IG51bWJlcixcbiAgKTogUHJvbWlzZTx7IGlkOiBzdHJpbmcgfT4ge1xuICAgIGlmIChwYXNzd29yZCA9PT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsZWQnKTtcbiAgICB9XG4gICAgaWYgKHBhc3N3b3JkID09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhc3MgPSBhd2FpdCB0aGlzLnByb21wdFBhc3N3b3JkKCdQYXNzd29yZDogJyk7XG4gICAgICByZXR1cm4gdGhpcy5sb2dpbkJ5UGFzc3dvcmQodXNlcm5hbWUsIHBhc3MsIHJldHJ5Q291bnQpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fY29ubi5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xuICAgICAgdGhpcy5wcmludChgTG9nZ2VkIGluIGFzIDogJHt1c2VybmFtZX1gKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBpZiAocmV0cnlDb3VudCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW5CeVBhc3N3b3JkKHVzZXJuYW1lLCB1bmRlZmluZWQsIHJldHJ5Q291bnQgLSAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGRpc2Nvbm5lY3QoY29ubk5hbWU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBuYW1lID0gY29ubk5hbWUgfHwgdGhpcy5fY29ubk5hbWU7XG4gICAgaWYgKG5hbWUgJiYgcmVnaXN0cnkuZ2V0Q29ubmVjdGlvbkNvbmZpZyhuYW1lKSkge1xuICAgICAgcmVnaXN0cnkucmVtb3ZlQ29ubmVjdGlvbkNvbmZpZyhuYW1lKTtcbiAgICAgIHRoaXMucHJpbnQoYERpc2Nvbm5lY3QgY29ubmVjdGlvbiAnJHtuYW1lfSdgKTtcbiAgICB9XG4gICAgdGhpcy5fY29ubk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY29ubiA9IG5ldyBDb25uZWN0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGFzeW5jIGF1dGhvcml6ZShjbGllbnROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuYW1lID0gY2xpZW50TmFtZSB8fCAnZGVmYXVsdCc7XG4gICAgdmFyIG9hdXRoMkNvbmZpZyA9IGF3YWl0IHJlZ2lzdHJ5LmdldENsaWVudENvbmZpZyhuYW1lKTtcbiAgICBpZiAoIW9hdXRoMkNvbmZpZyB8fCAhb2F1dGgyQ29uZmlnLmNsaWVudElkKSB7XG4gICAgICBpZiAobmFtZSA9PT0gJ2RlZmF1bHQnIHx8IG5hbWUgPT09ICdzYW5kYm94Jykge1xuICAgICAgICB0aGlzLnByaW50KFxuICAgICAgICAgICdObyBjbGllbnQgaW5mb3JtYXRpb24gcmVnaXN0ZXJlZC4gRG93bmxvYWRpbmcgSlNmb3JjZSBkZWZhdWx0IGNsaWVudCBpbmZvcm1hdGlvbi4uLicsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLmRvd25sb2FkRGVmYXVsdENsaWVudEluZm8obmFtZSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBObyBPQXV0aDIgY2xpZW50IGluZm9ybWF0aW9uIHJlZ2lzdGVyZWQgOiAnJHtuYW1lfScuIFBsZWFzZSByZWdpc3RlciBjbGllbnQgaW5mbyBmaXJzdC5gLFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgb2F1dGgyID0gbmV3IE9BdXRoMihvYXV0aDJDb25maWcpO1xuICAgIGNvbnN0IHZlcmlmaWVyID0gYmFzZTY0dXJsLmVuY29kZShjcnlwdG8ucmFuZG9tQnl0ZXMoMzIpKTtcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBiYXNlNjR1cmwuZW5jb2RlKFxuICAgICAgY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZSh2ZXJpZmllcikuZGlnZXN0KCksXG4gICAgKTtcbiAgICBjb25zdCBzdGF0ZSA9IGJhc2U2NHVybC5lbmNvZGUoY3J5cHRvLnJhbmRvbUJ5dGVzKDMyKSk7XG4gICAgY29uc3QgYXV0aHpVcmwgPSBvYXV0aDIuZ2V0QXV0aG9yaXphdGlvblVybCh7XG4gICAgICBjb2RlX2NoYWxsZW5nZTogY2hhbGxlbmdlLFxuICAgICAgc3RhdGUsXG4gICAgfSk7XG4gICAgdGhpcy5wcmludCgnT3BlbmluZyBhdXRob3JpemF0aW9uIHBhZ2UgaW4gYnJvd3Nlci4uLicpO1xuICAgIHRoaXMucHJpbnQoYFVSTDogJHthdXRoelVybH1gKTtcbiAgICB0aGlzLm9wZW5VcmwoYXV0aHpVcmwpO1xuICAgIGNvbnN0IHBhcmFtcyA9IGF3YWl0IHRoaXMud2FpdENhbGxiYWNrKG9hdXRoMkNvbmZpZy5yZWRpcmVjdFVyaSwgc3RhdGUpO1xuICAgIGlmICghcGFyYW1zLmNvZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXV0aG9yaXphdGlvbiBjb2RlIHJldHVybmVkLicpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnN0YXRlICE9PSBzdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0YXRlIHBhcmFtZXRlciByZXR1cm5lZC4nKTtcbiAgICB9XG4gICAgdGhpcy5fY29ubiA9IG5ldyBDb25uZWN0aW9uKHsgb2F1dGgyIH0pO1xuICAgIHRoaXMucHJpbnQoXG4gICAgICAnUmVjZWl2ZWQgYXV0aG9yaXphdGlvbiBjb2RlLiBQbGVhc2UgY2xvc2UgdGhlIG9wZW5lZCBicm93c2VyIHdpbmRvdy4nLFxuICAgICk7XG4gICAgYXdhaXQgdGhpcy5fY29ubi5hdXRob3JpemUocGFyYW1zLmNvZGUsIHsgY29kZV92ZXJpZmllcjogdmVyaWZpZXIgfSk7XG4gICAgdGhpcy5wcmludCgnQXV0aG9yaXplZC4gRmV0Y2hpbmcgdXNlciBpbmZvLi4uJyk7XG4gICAgY29uc3QgaWRlbnRpdHkgPSBhd2FpdCB0aGlzLl9jb25uLmlkZW50aXR5KCk7XG4gICAgdGhpcy5wcmludChgTG9nZ2VkIGluIGFzIDogJHtpZGVudGl0eS51c2VybmFtZX1gKTtcbiAgICB0aGlzLl9jb25uTmFtZSA9IGlkZW50aXR5LnVzZXJuYW1lO1xuICAgIHRoaXMuc2F2ZUN1cnJlbnRDb25uZWN0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGFzeW5jIGRvd25sb2FkRGVmYXVsdENsaWVudEluZm8oY2xpZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29uZmlnVXJsID0gJ2h0dHBzOi8vanNmb3JjZS5naXRodWIuaW8vY2xpZW50LWNvbmZpZy9kZWZhdWx0Lmpzb24nO1xuICAgIGNvbnN0IHJlczogeyBib2R5OiBzdHJpbmcgfSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcXVlc3QoeyBtZXRob2Q6ICdHRVQnLCB1cmw6IGNvbmZpZ1VybCB9KVxuICAgICAgICAub24oJ2NvbXBsZXRlJywgcmVzb2x2ZSlcbiAgICAgICAgLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgfSk7XG4gICAgY29uc3QgY2xpZW50Q29uZmlnID0gSlNPTi5wYXJzZShyZXMuYm9keSk7XG4gICAgaWYgKGNsaWVudE5hbWUgPT09ICdzYW5kYm94Jykge1xuICAgICAgY2xpZW50Q29uZmlnLmxvZ2luVXJsID0gJ2h0dHBzOi8vdGVzdC5zYWxlc2ZvcmNlLmNvbSc7XG4gICAgfVxuICAgIGF3YWl0IHJlZ2lzdHJ5LnJlZ2lzdGVyQ2xpZW50Q29uZmlnKGNsaWVudE5hbWUsIGNsaWVudENvbmZpZyk7XG4gICAgdGhpcy5wcmludCgnQ2xpZW50IGluZm9ybWF0aW9uIGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgIHJldHVybiB0aGlzLmF1dGhvcml6ZShjbGllbnROYW1lKTtcbiAgfVxuXG4gIGFzeW5jIHdhaXRDYWxsYmFjayhcbiAgICBzZXJ2ZXJVcmw6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBzdGF0ZTogc3RyaW5nLFxuICApOiBQcm9taXNlPHsgY29kZTogc3RyaW5nOyBzdGF0ZTogc3RyaW5nIH0+IHtcbiAgICBpZiAoc2VydmVyVXJsICYmIHNlcnZlclVybC5pbmRleE9mKCdodHRwOi8vbG9jYWxob3N0OicpID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcigocmVxLCByZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcS51cmwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcXBhcmFtcyA9IHVybC5wYXJzZShyZXEudXJsLCB0cnVlKS5xdWVyeTtcbiAgICAgICAgICByZXMud3JpdGVIZWFkKDIwMCwgeyAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCcgfSk7XG4gICAgICAgICAgcmVzLndyaXRlKFxuICAgICAgICAgICAgJzxodG1sPjxzY3JpcHQ+bG9jYXRpb24uaHJlZj1cImFib3V0OmJsYW5rXCI7PC9zY3JpcHQ+PC9odG1sPicsXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXMuZW5kKCk7XG4gICAgICAgICAgaWYgKHFwYXJhbXMuZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocXBhcmFtcy5lcnJvciBhcyBzdHJpbmcpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShxcGFyYW1zIGFzIHsgY29kZTogc3RyaW5nOyBzdGF0ZTogc3RyaW5nIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXJ2ZXIuY2xvc2UoKTtcbiAgICAgICAgICByZXEuY29ubmVjdGlvbi5lbmQoKTtcbiAgICAgICAgICByZXEuY29ubmVjdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwb3J0ID0gTnVtYmVyKHVybC5wYXJzZShzZXJ2ZXJVcmwpLnBvcnQpO1xuICAgICAgICBzZXJ2ZXIubGlzdGVuKHBvcnQsICdsb2NhbGhvc3QnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb2RlID0gYXdhaXQgdGhpcy5wcm9tcHRNZXNzYWdlKFxuICAgICAgICAnQ29weSAmIHBhc3RlIGF1dGh6IGNvZGUgcGFzc2VkIGluIHJlZGlyZWN0ZWQgVVJMOiAnLFxuICAgICAgKTtcbiAgICAgIHJldHVybiB7IGNvZGU6IGRlY29kZVVSSUNvbXBvbmVudChjb2RlKSwgc3RhdGUgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGFzeW5jIHJlZ2lzdGVyKGNsaWVudE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCwgY2xpZW50Q29uZmlnOiBDbGllbnRDb25maWcpIHtcbiAgICBjb25zdCBuYW1lID0gY2xpZW50TmFtZSB8fCAnZGVmYXVsdCc7XG4gICAgY29uc3QgcHJvbXB0cyA9IHtcbiAgICAgIGNsaWVudElkOiAnSW5wdXQgY2xpZW50IElEIDogJyxcbiAgICAgIGNsaWVudFNlY3JldDogJ0lucHV0IGNsaWVudCBzZWNyZXQgKG9wdGlvbmFsKSA6ICcsXG4gICAgICByZWRpcmVjdFVyaTogJ0lucHV0IHJlZGlyZWN0IFVSSSA6ICcsXG4gICAgICBsb2dpblVybDogJ0lucHV0IGxvZ2luIFVSTCAoZGVmYXVsdCBpcyBodHRwczovL2xvZ2luLnNhbGVzZm9yY2UuY29tKSA6ICcsXG4gICAgfTtcbiAgICBjb25zdCByZWdpc3RlcmVkID0gYXdhaXQgcmVnaXN0cnkuZ2V0Q2xpZW50Q29uZmlnKG5hbWUpO1xuICAgIGlmIChyZWdpc3RlcmVkKSB7XG4gICAgICBjb25zdCBtc2cgPSBgQ2xpZW50ICcke25hbWV9JyBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBvdmVycmlkZSA/IFt5Tl0gOiBgO1xuICAgICAgY29uc3Qgb2sgPSBhd2FpdCB0aGlzLnByb21wdENvbmZpcm0obXNnKTtcbiAgICAgIGlmICghb2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWdpc3RyYXRpb24gY2FuY2VsZWQuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudENvbmZpZyA9IGF3YWl0IE9iamVjdC5rZXlzKHByb21wdHMpLnJlZHVjZShhc3luYyAocHJvbWlzZSwgbmFtZSkgPT4ge1xuICAgICAgY29uc3QgY2NvbmZpZyA9IGF3YWl0IHByb21pc2U7XG4gICAgICBjb25zdCBwcm9tcHROYW1lID0gbmFtZSBhcyBrZXlvZiB0eXBlb2YgcHJvbXB0cztcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBwcm9tcHRzW3Byb21wdE5hbWVdO1xuICAgICAgaWYgKCFjY29uZmlnW3Byb21wdE5hbWVdKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgdGhpcy5wcm9tcHRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2NvbmZpZyxcbiAgICAgICAgICAgIFtwcm9tcHROYW1lXTogdmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNjb25maWc7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKGNsaWVudENvbmZpZykpO1xuICAgIGF3YWl0IHJlZ2lzdHJ5LnJlZ2lzdGVyQ2xpZW50Q29uZmlnKG5hbWUsIGNsaWVudENvbmZpZyk7XG4gICAgdGhpcy5wcmludCgnQ2xpZW50IHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBsaXN0Q29ubmVjdGlvbnMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBhd2FpdCByZWdpc3RyeS5nZXRDb25uZWN0aW9uTmFtZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgdGhpcy5wcmludCgobmFtZSA9PT0gdGhpcy5fY29ubk5hbWUgPyAnKiAnIDogJyAgJykgKyBuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGFzeW5jIGdldENvbm5lY3Rpb25OYW1lcygpIHtcbiAgICByZXR1cm4gcmVnaXN0cnkuZ2V0Q29ubmVjdGlvbk5hbWVzKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGFzeW5jIGdldENsaWVudE5hbWVzKCkge1xuICAgIHJldHVybiByZWdpc3RyeS5nZXRDbGllbnROYW1lcygpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBhc3luYyBwcm9tcHQodHlwZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBsLnBhdXNlKCk7XG4gICAgY29uc3QgYW5zd2VyOiB7IHZhbHVlOiBzdHJpbmcgfSA9IGF3YWl0IGlucXVpcmVyLnByb21wdChbXG4gICAgICB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIG5hbWU6ICd2YWx1ZScsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHRoaXMuX3JlcGwucmVzdW1lKCk7XG4gICAgcmV0dXJuIGFuc3dlci52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgYXN5bmMgcHJvbXB0TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9tcHQoJ2lucHV0JywgbWVzc2FnZSk7XG4gIH1cblxuICBhc3luYyBwcm9tcHRQYXNzd29yZChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9tcHQoJ3Bhc3N3b3JkJywgbWVzc2FnZSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGFzeW5jIHByb21wdENvbmZpcm0obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbXB0KCdjb25maXJtJywgbWVzc2FnZSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIG9wZW5VcmwodXJsOiBzdHJpbmcpIHtcbiAgICBvcGVuVXJsKHVybCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIG9wZW5VcmxVc2luZ1Nlc3Npb24odXJsPzogc3RyaW5nKSB7XG4gICAgbGV0IGZyb250ZG9vclVybCA9IGAke3RoaXMuX2Nvbm4uaW5zdGFuY2VVcmx9L3NlY3VyL2Zyb250ZG9vci5qc3A/c2lkPSR7dGhpcy5fY29ubi5hY2Nlc3NUb2tlbn1gO1xuICAgIGlmICh1cmwpIHtcbiAgICAgIGZyb250ZG9vclVybCArPSAnJnJldFVSTD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG4gICAgfVxuICAgIHRoaXMub3BlblVybChmcm9udGRvb3JVcmwpO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuY29uc3QgY2xpID0gbmV3IENsaSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGk7XG4iXX0=