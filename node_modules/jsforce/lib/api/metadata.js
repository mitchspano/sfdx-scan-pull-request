"use strict";

var _context4;

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {
  MetadataApi: true,
  AsyncResultLocator: true,
  RetrieveResultLocator: true,
  DeployResultLocator: true
};
exports.default = exports.DeployResultLocator = exports.RetrieveResultLocator = exports.AsyncResultLocator = exports.MetadataApi = void 0;

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _events = require("events");

var _stream = require("stream");

var _formData = _interopRequireDefault(require("form-data"));

var _jsforce = require("../jsforce");

var _soap = _interopRequireDefault(require("../soap"));

var _function = require("../util/function");

var _schema = require("./metadata/schema");

_forEachInstanceProperty(_context4 = _Object$keys(_schema)).call(_context4, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _schema[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _schema[key];
    }
  });
});

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 *
 */
function deallocateTypeWithMetadata(metadata) {
  const _ref = metadata,
        {
    $
  } = _ref,
        md = (0, _objectWithoutProperties2.default)(_ref, ["$"]);
  return md;
}

function assignTypeWithMetadata(metadata, type) {
  const convert = md => _objectSpread({
    ['@xsi:type']: type
  }, md);

  return (0, _isArray.default)(metadata) ? (0, _map.default)(metadata).call(metadata, convert) : convert(metadata);
}
/**
 * Class for Salesforce Metadata API
 */


class MetadataApi {
  /**
   * Polling interval in milliseconds
   */

  /**
   * Polling timeout in milliseconds
   */

  /**
   *
   */
  constructor(conn) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "pollInterval", 1000);
    (0, _defineProperty2.default)(this, "pollTimeout", 10000);
    this._conn = conn;
  }
  /**
   * Call Metadata API SOAP endpoint
   *
   * @private
   */


  async _invoke(method, message, schema) {
    const soapEndpoint = new _soap.default(this._conn, {
      xmlns: 'http://soap.sforce.com/2006/04/metadata',
      endpointUrl: `${this._conn.instanceUrl}/services/Soap/m/${this._conn.version}`
    });
    const res = await soapEndpoint.invoke(method, message, schema ? {
      result: schema
    } : undefined, _schema.ApiSchemas);
    return res.result;
  }
  /**
   * Add one or more new metadata components to the organization.
   */


  create(type, metadata) {
    const isArray = (0, _isArray.default)(metadata);
    metadata = assignTypeWithMetadata(metadata, type);
    const schema = isArray ? [_schema.ApiSchemas.SaveResult] : _schema.ApiSchemas.SaveResult;
    return this._invoke('createMetadata', {
      metadata
    }, schema);
  }
  /**
   * Read specified metadata components in the organization.
   */


  async read(type, fullNames) {
    var _context;

    const ReadResultSchema = type in _schema.ApiSchemas ? {
      type: _schema.ApiSchemas.ReadResult.type,
      props: {
        records: [type]
      }
    } : _schema.ApiSchemas.ReadResult;
    const res = await this._invoke('readMetadata', {
      type,
      fullNames
    }, ReadResultSchema);
    return (0, _isArray.default)(fullNames) ? (0, _map.default)(_context = res.records).call(_context, deallocateTypeWithMetadata) : deallocateTypeWithMetadata(res.records[0]);
  }
  /**
   * Update one or more metadata components in the organization.
   */


  update(type, metadata) {
    const isArray = (0, _isArray.default)(metadata);
    metadata = assignTypeWithMetadata(metadata, type);
    const schema = isArray ? [_schema.ApiSchemas.SaveResult] : _schema.ApiSchemas.SaveResult;
    return this._invoke('updateMetadata', {
      metadata
    }, schema);
  }
  /**
   * Upsert one or more components in your organization's data.
   */


  upsert(type, metadata) {
    const isArray = (0, _isArray.default)(metadata);
    metadata = assignTypeWithMetadata(metadata, type);
    const schema = isArray ? [_schema.ApiSchemas.UpsertResult] : _schema.ApiSchemas.UpsertResult;
    return this._invoke('upsertMetadata', {
      metadata
    }, schema);
  }
  /**
   * Deletes specified metadata components in the organization.
   */


  delete(type, fullNames) {
    const schema = (0, _isArray.default)(fullNames) ? [_schema.ApiSchemas.SaveResult] : _schema.ApiSchemas.SaveResult;
    return this._invoke('deleteMetadata', {
      type,
      fullNames
    }, schema);
  }
  /**
   * Rename fullname of a metadata component in the organization
   */


  rename(type, oldFullName, newFullName) {
    return this._invoke('renameMetadata', {
      type,
      oldFullName,
      newFullName
    }, _schema.ApiSchemas.SaveResult);
  }
  /**
   * Retrieves the metadata which describes your organization, including Apex classes and triggers,
   * custom objects, custom fields on standard objects, tab sets that define an app,
   * and many other components.
   */


  describe(asOfVersion) {
    if (!asOfVersion) {
      asOfVersion = this._conn.version;
    }

    return this._invoke('describeMetadata', {
      asOfVersion
    }, _schema.ApiSchemas.DescribeMetadataResult);
  }
  /**
   * Retrieves property information about metadata components in your organization
   */


  list(queries, asOfVersion) {
    if (!asOfVersion) {
      asOfVersion = this._conn.version;
    }

    return this._invoke('listMetadata', {
      queries,
      asOfVersion
    }, [_schema.ApiSchemas.FileProperties]);
  }
  /**
   * Checks the status of asynchronous metadata calls
   */


  checkStatus(asyncProcessId) {
    const res = this._invoke('checkStatus', {
      asyncProcessId
    }, _schema.ApiSchemas.AsyncResult);

    return new AsyncResultLocator(this, res);
  }
  /**
   * Retrieves XML file representations of components in an organization
   */


  retrieve(request) {
    const res = this._invoke('retrieve', {
      request
    }, _schema.ApiSchemas.RetrieveResult);

    return new RetrieveResultLocator(this, res);
  }
  /**
   * Checks the status of declarative metadata call retrieve() and returns the zip file contents
   */


  checkRetrieveStatus(asyncProcessId) {
    return this._invoke('checkRetrieveStatus', {
      asyncProcessId
    }, _schema.ApiSchemas.RetrieveResult);
  }
  /**
   * Will deploy a recently validated deploy request
   *
   * @param options.id = the deploy ID that's been validated already from a previous checkOnly deploy request
   * @param options.rest = a boolean whether or not to use the REST API
   * @returns the deploy ID of the recent validation request
   */


  async deployRecentValidation(options) {
    const {
      id,
      rest
    } = options;
    let response;

    if (rest) {
      const messageBody = (0, _stringify.default)({
        validatedDeployRequestId: id
      });
      const requestInfo = {
        method: 'POST',
        url: `${this._conn._baseUrl()}/metadata/deployRequest`,
        body: messageBody,
        headers: {
          'content-type': 'application/json'
        }
      };
      const requestOptions = {
        headers: 'json'
      }; // This is the deploy ID of the deployRecentValidation response, not
      // the already validated deploy ID (i.e., validateddeployrequestid).
      // REST returns an object with an id property, SOAP returns the id as a string directly.

      response = (await this._conn.request(requestInfo, requestOptions)).id;
    } else {
      response = await this._invoke('deployRecentValidation', {
        validationId: id
      });
    }

    return response;
  }
  /**
   * Deploy components into an organization using zipped file representations
   * using the REST Metadata API instead of SOAP
   */


  deployRest(zipInput, options = {}) {
    const form = new _formData.default();
    form.append('file', zipInput, {
      contentType: 'application/zip',
      filename: 'package.xml'
    }); // Add the deploy options

    form.append('entity_content', (0, _stringify.default)({
      deployOptions: options
    }), {
      contentType: 'application/json'
    });
    const request = {
      url: '/metadata/deployRequest',
      method: 'POST',
      headers: _objectSpread({}, form.getHeaders()),
      body: form.getBuffer()
    };

    const res = this._conn.request(request);

    return new DeployResultLocator(this, res);
  }
  /**
   * Deploy components into an organization using zipped file representations
   */


  deploy(zipInput, options = {}) {
    const res = (async () => {
      const zipContentB64 = await new _promise.default((resolve, reject) => {
        if ((0, _function.isObject)(zipInput) && 'pipe' in zipInput && typeof zipInput.pipe === 'function') {
          const bufs = [];
          zipInput.on('data', d => bufs.push(d));
          zipInput.on('error', reject);
          zipInput.on('end', () => {
            resolve((0, _concat.default)(Buffer).call(Buffer, bufs).toString('base64'));
          }); // zipInput.resume();
        } else if (zipInput instanceof Buffer) {
          resolve(zipInput.toString('base64'));
        } else if (zipInput instanceof String || typeof zipInput === 'string') {
          resolve(zipInput);
        } else {
          throw 'Unexpected zipInput type';
        }
      });
      return this._invoke('deploy', {
        ZipFile: zipContentB64,
        DeployOptions: options
      }, _schema.ApiSchemas.DeployResult);
    })();

    return new DeployResultLocator(this, res);
  }
  /**
   * Checks the status of declarative metadata call deploy()
   */


  checkDeployStatus(asyncProcessId, includeDetails = false) {
    return this._invoke('checkDeployStatus', {
      asyncProcessId,
      includeDetails
    }, _schema.ApiSchemas.DeployResult);
  }

}
/*--------------------------------------------*/

/**
 * The locator class for Metadata API asynchronous call result
 */


exports.MetadataApi = MetadataApi;

class AsyncResultLocator extends _events.EventEmitter {
  /**
   *
   */
  constructor(meta, promise) {
    super();
    (0, _defineProperty2.default)(this, "_meta", void 0);
    (0, _defineProperty2.default)(this, "_promise", void 0);
    (0, _defineProperty2.default)(this, "_id", void 0);
    this._meta = meta;
    this._promise = promise;
  }
  /**
   * Promise/A+ interface
   * http://promises-aplus.github.io/promises-spec/
   *
   * @method Metadata~AsyncResultLocator#then
   */


  then(onResolve, onReject) {
    return this._promise.then(onResolve, onReject);
  }
  /**
   * Check the status of async request
   */


  async check() {
    const result = await this._promise;
    this._id = result.id;
    return await this._meta.checkStatus(result.id);
  }
  /**
   * Polling until async call status becomes complete or error
   */


  poll(interval, timeout) {
    const startTime = new Date().getTime();

    const poll = async () => {
      try {
        const now = new Date().getTime();

        if (startTime + timeout < now) {
          let errMsg = 'Polling time out.';

          if (this._id) {
            errMsg += ' Process Id = ' + this._id;
          }

          this.emit('error', new Error(errMsg));
          return;
        }

        const result = await this.check();

        if (result.done) {
          this.emit('complete', result);
        } else {
          this.emit('progress', result);
          (0, _setTimeout2.default)(poll, interval);
        }
      } catch (err) {
        this.emit('error', err);
      }
    };

    (0, _setTimeout2.default)(poll, interval);
  }
  /**
   * Check and wait until the async requests become in completed status
   */


  complete() {
    return new _promise.default((resolve, reject) => {
      this.on('complete', resolve);
      this.on('error', reject);
      this.poll(this._meta.pollInterval, this._meta.pollTimeout);
    });
  }

}
/*--------------------------------------------*/

/**
 * The locator class to track retreive() Metadata API call result
 */


exports.AsyncResultLocator = AsyncResultLocator;

class RetrieveResultLocator extends AsyncResultLocator {
  /**
   * Check and wait until the async request becomes in completed status,
   * and retrieve the result data.
   */
  async complete() {
    const result = await super.complete();
    return this._meta.checkRetrieveStatus(result.id);
  }
  /**
   * Change the retrieved result to Node.js readable stream
   */


  stream() {
    const resultStream = new _stream.Readable();
    let reading = false;

    resultStream._read = async () => {
      if (reading) {
        return;
      }

      reading = true;

      try {
        const result = await this.complete();
        resultStream.push(Buffer.from(result.zipFile, 'base64'));
        resultStream.push(null);
      } catch (e) {
        resultStream.emit('error', e);
      }
    };

    return resultStream;
  }

}
/*--------------------------------------------*/

/**
 * The locator class to track deploy() Metadata API call result
 *
 * @protected
 * @class Metadata~DeployResultLocator
 * @extends Metadata~AsyncResultLocator
 * @param {Metadata} meta - Metadata API object
 * @param {Promise.<Metadata~AsyncResult>} result - Promise object for async result of deploy() call
 */


exports.RetrieveResultLocator = RetrieveResultLocator;

class DeployResultLocator extends AsyncResultLocator {
  /**
   * Check and wait until the async request becomes in completed status,
   * and retrieve the result data.
   */
  async complete(includeDetails) {
    const result = await super.complete();
    return this._meta.checkDeployStatus(result.id, includeDetails);
  }

}
/*--------------------------------------------*/

/*
 * Register hook in connection instantiation for dynamically adding this API module features
 */


exports.DeployResultLocator = DeployResultLocator;
(0, _jsforce.registerModule)('metadata', conn => new MetadataApi(conn));
var _default = MetadataApi;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvbWV0YWRhdGEudHMiXSwibmFtZXMiOlsiZGVhbGxvY2F0ZVR5cGVXaXRoTWV0YWRhdGEiLCJtZXRhZGF0YSIsIiQiLCJtZCIsImFzc2lnblR5cGVXaXRoTWV0YWRhdGEiLCJ0eXBlIiwiY29udmVydCIsIk1ldGFkYXRhQXBpIiwiY29uc3RydWN0b3IiLCJjb25uIiwiX2Nvbm4iLCJfaW52b2tlIiwibWV0aG9kIiwibWVzc2FnZSIsInNjaGVtYSIsInNvYXBFbmRwb2ludCIsIlNPQVAiLCJ4bWxucyIsImVuZHBvaW50VXJsIiwiaW5zdGFuY2VVcmwiLCJ2ZXJzaW9uIiwicmVzIiwiaW52b2tlIiwicmVzdWx0IiwidW5kZWZpbmVkIiwiQXBpU2NoZW1hcyIsImNyZWF0ZSIsImlzQXJyYXkiLCJTYXZlUmVzdWx0IiwicmVhZCIsImZ1bGxOYW1lcyIsIlJlYWRSZXN1bHRTY2hlbWEiLCJSZWFkUmVzdWx0IiwicHJvcHMiLCJyZWNvcmRzIiwidXBkYXRlIiwidXBzZXJ0IiwiVXBzZXJ0UmVzdWx0IiwiZGVsZXRlIiwicmVuYW1lIiwib2xkRnVsbE5hbWUiLCJuZXdGdWxsTmFtZSIsImRlc2NyaWJlIiwiYXNPZlZlcnNpb24iLCJEZXNjcmliZU1ldGFkYXRhUmVzdWx0IiwibGlzdCIsInF1ZXJpZXMiLCJGaWxlUHJvcGVydGllcyIsImNoZWNrU3RhdHVzIiwiYXN5bmNQcm9jZXNzSWQiLCJBc3luY1Jlc3VsdCIsIkFzeW5jUmVzdWx0TG9jYXRvciIsInJldHJpZXZlIiwicmVxdWVzdCIsIlJldHJpZXZlUmVzdWx0IiwiUmV0cmlldmVSZXN1bHRMb2NhdG9yIiwiY2hlY2tSZXRyaWV2ZVN0YXR1cyIsImRlcGxveVJlY2VudFZhbGlkYXRpb24iLCJvcHRpb25zIiwiaWQiLCJyZXN0IiwicmVzcG9uc2UiLCJtZXNzYWdlQm9keSIsInZhbGlkYXRlZERlcGxveVJlcXVlc3RJZCIsInJlcXVlc3RJbmZvIiwidXJsIiwiX2Jhc2VVcmwiLCJib2R5IiwiaGVhZGVycyIsInJlcXVlc3RPcHRpb25zIiwidmFsaWRhdGlvbklkIiwiZGVwbG95UmVzdCIsInppcElucHV0IiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiY29udGVudFR5cGUiLCJmaWxlbmFtZSIsImRlcGxveU9wdGlvbnMiLCJnZXRIZWFkZXJzIiwiZ2V0QnVmZmVyIiwiRGVwbG95UmVzdWx0TG9jYXRvciIsImRlcGxveSIsInppcENvbnRlbnRCNjQiLCJyZXNvbHZlIiwicmVqZWN0IiwicGlwZSIsImJ1ZnMiLCJvbiIsImQiLCJwdXNoIiwiQnVmZmVyIiwidG9TdHJpbmciLCJTdHJpbmciLCJaaXBGaWxlIiwiRGVwbG95T3B0aW9ucyIsIkRlcGxveVJlc3VsdCIsImNoZWNrRGVwbG95U3RhdHVzIiwiaW5jbHVkZURldGFpbHMiLCJFdmVudEVtaXR0ZXIiLCJtZXRhIiwicHJvbWlzZSIsIl9tZXRhIiwiX3Byb21pc2UiLCJ0aGVuIiwib25SZXNvbHZlIiwib25SZWplY3QiLCJjaGVjayIsIl9pZCIsInBvbGwiLCJpbnRlcnZhbCIsInRpbWVvdXQiLCJzdGFydFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsImVyck1zZyIsImVtaXQiLCJFcnJvciIsImRvbmUiLCJlcnIiLCJjb21wbGV0ZSIsInBvbGxJbnRlcnZhbCIsInBvbGxUaW1lb3V0Iiwic3RyZWFtIiwicmVzdWx0U3RyZWFtIiwiUmVhZGFibGUiLCJyZWFkaW5nIiwiX3JlYWQiLCJmcm9tIiwiemlwRmlsZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFnQkE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQXFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSwwQkFBVCxDQUF3REMsUUFBeEQsRUFBd0U7QUFDdEUs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O0FBaUNGOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxNQUFNNUMsbUJBQU4sU0FBb0Q5QixrQkFBcEQsQ0FHTDtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0UsUUFBTXNFLFFBQU4sQ0FBZXZCLGNBQWYsRUFBeUM7QUFDdkMsVUFBTTNFLE1BQU0sR0FBRyxNQUFNLE1BQU1rRyxRQUFOLEVBQXJCO0FBQ0EsV0FBTyxLQUFLbkIsS0FBTCxDQUFXTCxpQkFBWCxDQUE2QjFFLE1BQU0sQ0FBQ29DLEVBQXBDLEVBQXdDdUMsY0FBeEMsQ0FBUDtBQUNEOztBQVJEO0FBV0Y7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsNkJBQWUsVUFBZixFQUE0QnpGLElBQUQsSUFBVSxJQUFJRixXQUFKLENBQWdCRSxJQUFoQixDQUFyQztlQUVlRixXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBNYW5hZ2VzIFNhbGVzZm9yY2UgTWV0YWRhdGEgQVBJXG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cbiAqL1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCBGb3JtRGF0YSBmcm9tICdmb3JtLWRhdGEnO1xuaW1wb3J0IHsgcmVnaXN0ZXJNb2R1bGUgfSBmcm9tICcuLi9qc2ZvcmNlJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4uL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IFNPQVAgZnJvbSAnLi4vc29hcCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL3V0aWwvZnVuY3Rpb24nO1xuaW1wb3J0IHsgU2NoZW1hLCBTb2FwU2NoZW1hRGVmLCBTb2FwU2NoZW1hLCBIdHRwUmVxdWVzdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIEFwaVNjaGVtYXMsXG4gIE1ldGFkYXRhLFxuICBSZWFkUmVzdWx0LFxuICBTYXZlUmVzdWx0LFxuICBVcHNlcnRSZXN1bHQsXG4gIExpc3RNZXRhZGF0YVF1ZXJ5LFxuICBGaWxlUHJvcGVydGllcyxcbiAgRGVzY3JpYmVNZXRhZGF0YVJlc3VsdCxcbiAgUmV0cmlldmVSZXF1ZXN0LFxuICBEZXBsb3lPcHRpb25zLFxuICBSZXRyaWV2ZVJlc3VsdCxcbiAgRGVwbG95UmVzdWx0LFxuICBBc3luY1Jlc3VsdCxcbiAgQXBpU2NoZW1hVHlwZXMsXG59IGZyb20gJy4vbWV0YWRhdGEvc2NoZW1hJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0YWRhdGEvc2NoZW1hJztcblxuLyoqXG4gKlxuICovXG50eXBlIE1ldGFkYXRhVHlwZV88XG4gIEsgZXh0ZW5kcyBrZXlvZiBBcGlTY2hlbWFUeXBlcyA9IGtleW9mIEFwaVNjaGVtYVR5cGVzXG4+ID0gSyBleHRlbmRzIGtleW9mIEFwaVNjaGVtYVR5cGVzXG4gID8gQXBpU2NoZW1hVHlwZXNbS10gZXh0ZW5kcyBNZXRhZGF0YVxuICAgID8gS1xuICAgIDogbmV2ZXJcbiAgOiBuZXZlcjtcblxuZXhwb3J0IHR5cGUgTWV0YWRhdGFUeXBlID0gTWV0YWRhdGFUeXBlXztcblxuZXhwb3J0IHR5cGUgTWV0YWRhdGFEZWZpbml0aW9uPFxuICBUIGV4dGVuZHMgc3RyaW5nLFxuICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YVxuPiA9IE1ldGFkYXRhIGV4dGVuZHMgTVxuICA/IFQgZXh0ZW5kcyBrZXlvZiBBcGlTY2hlbWFUeXBlcyAmIE1ldGFkYXRhVHlwZVxuICAgID8gQXBpU2NoZW1hVHlwZXNbVF0gZXh0ZW5kcyBNZXRhZGF0YVxuICAgICAgPyBBcGlTY2hlbWFUeXBlc1tUXVxuICAgICAgOiBNZXRhZGF0YVxuICAgIDogTWV0YWRhdGFcbiAgOiBNO1xuXG50eXBlIERlZXBQYXJ0aWFsPFQ+ID0gVCBleHRlbmRzIGFueVtdXG4gID8gRGVlcFBhcnRpYWw8VFtudW1iZXJdPltdXG4gIDogVCBleHRlbmRzIG9iamVjdFxuICA/IHsgW0sgaW4ga2V5b2YgVF0/OiBEZWVwUGFydGlhbDxUW0tdPiB9XG4gIDogVDtcblxuZXhwb3J0IHR5cGUgSW5wdXRNZXRhZGF0YURlZmluaXRpb248XG4gIFQgZXh0ZW5kcyBzdHJpbmcsXG4gIE0gZXh0ZW5kcyBNZXRhZGF0YSA9IE1ldGFkYXRhXG4+ID0gRGVlcFBhcnRpYWw8TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+PjtcblxuLyoqXG4gKlxuICovXG5mdW5jdGlvbiBkZWFsbG9jYXRlVHlwZVdpdGhNZXRhZGF0YTxNIGV4dGVuZHMgTWV0YWRhdGE+KG1ldGFkYXRhOiBNKTogTSB7XG4gIGNvbnN0IHsgJCwgLi4ubWQgfSA9IG1ldGFkYXRhIGFzIGFueTtcbiAgcmV0dXJuIG1kO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25UeXBlV2l0aE1ldGFkYXRhKG1ldGFkYXRhOiBNZXRhZGF0YSB8IE1ldGFkYXRhW10sIHR5cGU6IHN0cmluZykge1xuICBjb25zdCBjb252ZXJ0ID0gKG1kOiBNZXRhZGF0YSkgPT4gKHsgWydAeHNpOnR5cGUnXTogdHlwZSwgLi4ubWQgfSk7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG1ldGFkYXRhKSA/IG1ldGFkYXRhLm1hcChjb252ZXJ0KSA6IGNvbnZlcnQobWV0YWRhdGEpO1xufVxuXG4vKipcbiAqIENsYXNzIGZvciBTYWxlc2ZvcmNlIE1ldGFkYXRhIEFQSVxuICovXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFBcGk8UyBleHRlbmRzIFNjaGVtYT4ge1xuICBfY29ubjogQ29ubmVjdGlvbjxTPjtcblxuICAvKipcbiAgICogUG9sbGluZyBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICovXG4gIHBvbGxJbnRlcnZhbDogbnVtYmVyID0gMTAwMDtcblxuICAvKipcbiAgICogUG9sbGluZyB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICAgKi9cbiAgcG9sbFRpbWVvdXQ6IG51bWJlciA9IDEwMDAwO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbjxTPikge1xuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgTWV0YWRhdGEgQVBJIFNPQVAgZW5kcG9pbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIF9pbnZva2UoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogb2JqZWN0LFxuICAgIHNjaGVtYT86IFNvYXBTY2hlbWEgfCBTb2FwU2NoZW1hRGVmLFxuICApIHtcbiAgICBjb25zdCBzb2FwRW5kcG9pbnQgPSBuZXcgU09BUCh0aGlzLl9jb25uLCB7XG4gICAgICB4bWxuczogJ2h0dHA6Ly9zb2FwLnNmb3JjZS5jb20vMjAwNi8wNC9tZXRhZGF0YScsXG4gICAgICBlbmRwb2ludFVybDogYCR7dGhpcy5fY29ubi5pbnN0YW5jZVVybH0vc2VydmljZXMvU29hcC9tLyR7dGhpcy5fY29ubi52ZXJzaW9ufWAsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgc29hcEVuZHBvaW50Lmludm9rZShcbiAgICAgIG1ldGhvZCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBzY2hlbWEgPyAoeyByZXN1bHQ6IHNjaGVtYSB9IGFzIFNvYXBTY2hlbWEpIDogdW5kZWZpbmVkLFxuICAgICAgQXBpU2NoZW1hcyxcbiAgICApO1xuICAgIHJldHVybiByZXMucmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUgb3IgbW9yZSBuZXcgbWV0YWRhdGEgY29tcG9uZW50cyB0byB0aGUgb3JnYW5pemF0aW9uLlxuICAgKi9cbiAgY3JlYXRlPFxuICAgIE0gZXh0ZW5kcyBNZXRhZGF0YSA9IE1ldGFkYXRhLFxuICAgIFQgZXh0ZW5kcyBNZXRhZGF0YVR5cGUgPSBNZXRhZGF0YVR5cGUsXG4gICAgTUQgZXh0ZW5kcyBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPiA9IElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+XG4gID4odHlwZTogVCwgbWV0YWRhdGE6IE1EW10pOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XG4gIGNyZWF0ZTxcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcbiAgICBUIGV4dGVuZHMgTWV0YWRhdGFUeXBlID0gTWV0YWRhdGFUeXBlLFxuICAgIE1EIGV4dGVuZHMgSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxuICA+KHR5cGU6IFQsIG1ldGFkYXRhOiBNRCk6IFByb21pc2U8U2F2ZVJlc3VsdD47XG4gIGNyZWF0ZTxcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcbiAgICBUIGV4dGVuZHMgTWV0YWRhdGFUeXBlID0gTWV0YWRhdGFUeXBlLFxuICAgIE1EIGV4dGVuZHMgSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxuICA+KHR5cGU6IFQsIG1ldGFkYXRhOiBNRCB8IE1EW10pOiBQcm9taXNlPFNhdmVSZXN1bHQgfCBTYXZlUmVzdWx0W10+O1xuICBjcmVhdGUodHlwZTogc3RyaW5nLCBtZXRhZGF0YTogTWV0YWRhdGEgfCBNZXRhZGF0YVtdKSB7XG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkobWV0YWRhdGEpO1xuICAgIG1ldGFkYXRhID0gYXNzaWduVHlwZVdpdGhNZXRhZGF0YShtZXRhZGF0YSwgdHlwZSk7XG4gICAgY29uc3Qgc2NoZW1hID0gaXNBcnJheSA/IFtBcGlTY2hlbWFzLlNhdmVSZXN1bHRdIDogQXBpU2NoZW1hcy5TYXZlUmVzdWx0O1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ2NyZWF0ZU1ldGFkYXRhJywgeyBtZXRhZGF0YSB9LCBzY2hlbWEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgc3BlY2lmaWVkIG1ldGFkYXRhIGNvbXBvbmVudHMgaW4gdGhlIG9yZ2FuaXphdGlvbi5cbiAgICovXG4gIHJlYWQ8XG4gICAgTSBleHRlbmRzIE1ldGFkYXRhID0gTWV0YWRhdGEsXG4gICAgVCBleHRlbmRzIE1ldGFkYXRhVHlwZSA9IE1ldGFkYXRhVHlwZSxcbiAgICBNRCBleHRlbmRzIE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPiA9IE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxuICA+KHR5cGU6IFQsIGZ1bGxOYW1lczogc3RyaW5nW10pOiBQcm9taXNlPE1EW10+O1xuICByZWFkPFxuICAgIE0gZXh0ZW5kcyBNZXRhZGF0YSA9IE1ldGFkYXRhLFxuICAgIFQgZXh0ZW5kcyBNZXRhZGF0YVR5cGUgPSBNZXRhZGF0YVR5cGUsXG4gICAgTUQgZXh0ZW5kcyBNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBNZXRhZGF0YURlZmluaXRpb248VCwgTT5cbiAgPih0eXBlOiBULCBmdWxsTmFtZXM6IHN0cmluZyk6IFByb21pc2U8TUQ+O1xuICByZWFkPFxuICAgIE0gZXh0ZW5kcyBNZXRhZGF0YSA9IE1ldGFkYXRhLFxuICAgIFQgZXh0ZW5kcyBNZXRhZGF0YVR5cGUgPSBNZXRhZGF0YVR5cGUsXG4gICAgTUQgZXh0ZW5kcyBNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBNZXRhZGF0YURlZmluaXRpb248VCwgTT5cbiAgPih0eXBlOiBULCBmdWxsTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxNRCB8IE1EW10+O1xuICBhc3luYyByZWFkKHR5cGU6IHN0cmluZywgZnVsbE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGNvbnN0IFJlYWRSZXN1bHRTY2hlbWEgPVxuICAgICAgdHlwZSBpbiBBcGlTY2hlbWFzXG4gICAgICAgID8gKHtcbiAgICAgICAgICAgIHR5cGU6IEFwaVNjaGVtYXMuUmVhZFJlc3VsdC50eXBlLFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgcmVjb3JkczogW3R5cGVdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9IGFzIGNvbnN0KVxuICAgICAgICA6IEFwaVNjaGVtYXMuUmVhZFJlc3VsdDtcbiAgICBjb25zdCByZXM6IFJlYWRSZXN1bHQgPSBhd2FpdCB0aGlzLl9pbnZva2UoXG4gICAgICAncmVhZE1ldGFkYXRhJyxcbiAgICAgIHsgdHlwZSwgZnVsbE5hbWVzIH0sXG4gICAgICBSZWFkUmVzdWx0U2NoZW1hLFxuICAgICk7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZnVsbE5hbWVzKVxuICAgICAgPyByZXMucmVjb3Jkcy5tYXAoZGVhbGxvY2F0ZVR5cGVXaXRoTWV0YWRhdGEpXG4gICAgICA6IGRlYWxsb2NhdGVUeXBlV2l0aE1ldGFkYXRhKHJlcy5yZWNvcmRzWzBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgb25lIG9yIG1vcmUgbWV0YWRhdGEgY29tcG9uZW50cyBpbiB0aGUgb3JnYW5pemF0aW9uLlxuICAgKi9cbiAgdXBkYXRlPFxuICAgIE0gZXh0ZW5kcyBNZXRhZGF0YSA9IE1ldGFkYXRhLFxuICAgIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXG4gICAgTUQgZXh0ZW5kcyBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPiA9IElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+XG4gID4odHlwZTogVCwgbWV0YWRhdGE6IFBhcnRpYWw8TUQ+W10pOiBQcm9taXNlPFNhdmVSZXN1bHRbXT47XG4gIHVwZGF0ZTxcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcbiAgICBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxuICAgIE1EIGV4dGVuZHMgSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxuICA+KHR5cGU6IFQsIG1ldGFkYXRhOiBQYXJ0aWFsPE1EPik6IFByb21pc2U8U2F2ZVJlc3VsdD47XG4gIHVwZGF0ZTxcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcbiAgICBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxuICAgIE1EIGV4dGVuZHMgSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxuICA+KFxuICAgIHR5cGU6IFQsXG4gICAgbWV0YWRhdGE6IFBhcnRpYWw8TUQ+IHwgUGFydGlhbDxNRD5bXSxcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0IHwgU2F2ZVJlc3VsdFtdPjtcbiAgdXBkYXRlKHR5cGU6IHN0cmluZywgbWV0YWRhdGE6IE1ldGFkYXRhIHwgTWV0YWRhdGFbXSkge1xuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG1ldGFkYXRhKTtcbiAgICBtZXRhZGF0YSA9IGFzc2lnblR5cGVXaXRoTWV0YWRhdGEobWV0YWRhdGEsIHR5cGUpO1xuICAgIGNvbnN0IHNjaGVtYSA9IGlzQXJyYXkgPyBbQXBpU2NoZW1hcy5TYXZlUmVzdWx0XSA6IEFwaVNjaGVtYXMuU2F2ZVJlc3VsdDtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKCd1cGRhdGVNZXRhZGF0YScsIHsgbWV0YWRhdGEgfSwgc2NoZW1hKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcHNlcnQgb25lIG9yIG1vcmUgY29tcG9uZW50cyBpbiB5b3VyIG9yZ2FuaXphdGlvbidzIGRhdGEuXG4gICAqL1xuICB1cHNlcnQ8XG4gICAgTSBleHRlbmRzIE1ldGFkYXRhID0gTWV0YWRhdGEsXG4gICAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgICBNRCBleHRlbmRzIElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+ID0gSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT5cbiAgPih0eXBlOiBULCBtZXRhZGF0YTogTURbXSk6IFByb21pc2U8VXBzZXJ0UmVzdWx0W10+O1xuICB1cHNlcnQ8XG4gICAgTSBleHRlbmRzIE1ldGFkYXRhID0gTWV0YWRhdGEsXG4gICAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZyxcbiAgICBNRCBleHRlbmRzIElucHV0TWV0YWRhdGFEZWZpbml0aW9uPFQsIE0+ID0gSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT5cbiAgPih0eXBlOiBULCBtZXRhZGF0YTogTUQpOiBQcm9taXNlPFVwc2VydFJlc3VsdD47XG4gIHVwc2VydDxcbiAgICBNIGV4dGVuZHMgTWV0YWRhdGEgPSBNZXRhZGF0YSxcbiAgICBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxuICAgIE1EIGV4dGVuZHMgSW5wdXRNZXRhZGF0YURlZmluaXRpb248VCwgTT4gPSBJbnB1dE1ldGFkYXRhRGVmaW5pdGlvbjxULCBNPlxuICA+KHR5cGU6IFQsIG1ldGFkYXRhOiBNRCB8IE1EW10pOiBQcm9taXNlPFVwc2VydFJlc3VsdCB8IFVwc2VydFJlc3VsdFtdPjtcbiAgdXBzZXJ0KHR5cGU6IHN0cmluZywgbWV0YWRhdGE6IE1ldGFkYXRhIHwgTWV0YWRhdGFbXSkge1xuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG1ldGFkYXRhKTtcbiAgICBtZXRhZGF0YSA9IGFzc2lnblR5cGVXaXRoTWV0YWRhdGEobWV0YWRhdGEsIHR5cGUpO1xuICAgIGNvbnN0IHNjaGVtYSA9IGlzQXJyYXlcbiAgICAgID8gW0FwaVNjaGVtYXMuVXBzZXJ0UmVzdWx0XVxuICAgICAgOiBBcGlTY2hlbWFzLlVwc2VydFJlc3VsdDtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKCd1cHNlcnRNZXRhZGF0YScsIHsgbWV0YWRhdGEgfSwgc2NoZW1hKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHNwZWNpZmllZCBtZXRhZGF0YSBjb21wb25lbnRzIGluIHRoZSBvcmdhbml6YXRpb24uXG4gICAqL1xuICBkZWxldGUodHlwZTogc3RyaW5nLCBmdWxsTmFtZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxTYXZlUmVzdWx0W10+O1xuICBkZWxldGUodHlwZTogc3RyaW5nLCBmdWxsTmFtZXM6IHN0cmluZyk6IFByb21pc2U8U2F2ZVJlc3VsdD47XG4gIGRlbGV0ZShcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgZnVsbE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0IHwgU2F2ZVJlc3VsdFtdPjtcbiAgZGVsZXRlKHR5cGU6IHN0cmluZywgZnVsbE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IEFycmF5LmlzQXJyYXkoZnVsbE5hbWVzKVxuICAgICAgPyBbQXBpU2NoZW1hcy5TYXZlUmVzdWx0XVxuICAgICAgOiBBcGlTY2hlbWFzLlNhdmVSZXN1bHQ7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZSgnZGVsZXRlTWV0YWRhdGEnLCB7IHR5cGUsIGZ1bGxOYW1lcyB9LCBzY2hlbWEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmFtZSBmdWxsbmFtZSBvZiBhIG1ldGFkYXRhIGNvbXBvbmVudCBpbiB0aGUgb3JnYW5pemF0aW9uXG4gICAqL1xuICByZW5hbWUoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIG9sZEZ1bGxOYW1lOiBzdHJpbmcsXG4gICAgbmV3RnVsbE5hbWU6IHN0cmluZyxcbiAgKTogUHJvbWlzZTxTYXZlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcbiAgICAgICdyZW5hbWVNZXRhZGF0YScsXG4gICAgICB7IHR5cGUsIG9sZEZ1bGxOYW1lLCBuZXdGdWxsTmFtZSB9LFxuICAgICAgQXBpU2NoZW1hcy5TYXZlUmVzdWx0LFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBtZXRhZGF0YSB3aGljaCBkZXNjcmliZXMgeW91ciBvcmdhbml6YXRpb24sIGluY2x1ZGluZyBBcGV4IGNsYXNzZXMgYW5kIHRyaWdnZXJzLFxuICAgKiBjdXN0b20gb2JqZWN0cywgY3VzdG9tIGZpZWxkcyBvbiBzdGFuZGFyZCBvYmplY3RzLCB0YWIgc2V0cyB0aGF0IGRlZmluZSBhbiBhcHAsXG4gICAqIGFuZCBtYW55IG90aGVyIGNvbXBvbmVudHMuXG4gICAqL1xuICBkZXNjcmliZShhc09mVmVyc2lvbj86IHN0cmluZyk6IFByb21pc2U8RGVzY3JpYmVNZXRhZGF0YVJlc3VsdD4ge1xuICAgIGlmICghYXNPZlZlcnNpb24pIHtcbiAgICAgIGFzT2ZWZXJzaW9uID0gdGhpcy5fY29ubi52ZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFxuICAgICAgJ2Rlc2NyaWJlTWV0YWRhdGEnLFxuICAgICAgeyBhc09mVmVyc2lvbiB9LFxuICAgICAgQXBpU2NoZW1hcy5EZXNjcmliZU1ldGFkYXRhUmVzdWx0LFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHByb3BlcnR5IGluZm9ybWF0aW9uIGFib3V0IG1ldGFkYXRhIGNvbXBvbmVudHMgaW4geW91ciBvcmdhbml6YXRpb25cbiAgICovXG4gIGxpc3QoXG4gICAgcXVlcmllczogTGlzdE1ldGFkYXRhUXVlcnkgfCBMaXN0TWV0YWRhdGFRdWVyeVtdLFxuICAgIGFzT2ZWZXJzaW9uPzogc3RyaW5nLFxuICApOiBQcm9taXNlPEZpbGVQcm9wZXJ0aWVzW10+IHtcbiAgICBpZiAoIWFzT2ZWZXJzaW9uKSB7XG4gICAgICBhc09mVmVyc2lvbiA9IHRoaXMuX2Nvbm4udmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZSgnbGlzdE1ldGFkYXRhJywgeyBxdWVyaWVzLCBhc09mVmVyc2lvbiB9LCBbXG4gICAgICBBcGlTY2hlbWFzLkZpbGVQcm9wZXJ0aWVzLFxuICAgIF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgc3RhdHVzIG9mIGFzeW5jaHJvbm91cyBtZXRhZGF0YSBjYWxsc1xuICAgKi9cbiAgY2hlY2tTdGF0dXMoYXN5bmNQcm9jZXNzSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2ludm9rZShcbiAgICAgICdjaGVja1N0YXR1cycsXG4gICAgICB7IGFzeW5jUHJvY2Vzc0lkIH0sXG4gICAgICBBcGlTY2hlbWFzLkFzeW5jUmVzdWx0LFxuICAgICk7XG4gICAgcmV0dXJuIG5ldyBBc3luY1Jlc3VsdExvY2F0b3IodGhpcywgcmVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgWE1MIGZpbGUgcmVwcmVzZW50YXRpb25zIG9mIGNvbXBvbmVudHMgaW4gYW4gb3JnYW5pemF0aW9uXG4gICAqL1xuICByZXRyaWV2ZShyZXF1ZXN0OiBQYXJ0aWFsPFJldHJpZXZlUmVxdWVzdD4pIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLl9pbnZva2UoXG4gICAgICAncmV0cmlldmUnLFxuICAgICAgeyByZXF1ZXN0IH0sXG4gICAgICBBcGlTY2hlbWFzLlJldHJpZXZlUmVzdWx0LFxuICAgICk7XG4gICAgcmV0dXJuIG5ldyBSZXRyaWV2ZVJlc3VsdExvY2F0b3IodGhpcywgcmVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIHN0YXR1cyBvZiBkZWNsYXJhdGl2ZSBtZXRhZGF0YSBjYWxsIHJldHJpZXZlKCkgYW5kIHJldHVybnMgdGhlIHppcCBmaWxlIGNvbnRlbnRzXG4gICAqL1xuICBjaGVja1JldHJpZXZlU3RhdHVzKGFzeW5jUHJvY2Vzc0lkOiBzdHJpbmcpOiBQcm9taXNlPFJldHJpZXZlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcbiAgICAgICdjaGVja1JldHJpZXZlU3RhdHVzJyxcbiAgICAgIHsgYXN5bmNQcm9jZXNzSWQgfSxcbiAgICAgIEFwaVNjaGVtYXMuUmV0cmlldmVSZXN1bHQsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaWxsIGRlcGxveSBhIHJlY2VudGx5IHZhbGlkYXRlZCBkZXBsb3kgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucy5pZCA9IHRoZSBkZXBsb3kgSUQgdGhhdCdzIGJlZW4gdmFsaWRhdGVkIGFscmVhZHkgZnJvbSBhIHByZXZpb3VzIGNoZWNrT25seSBkZXBsb3kgcmVxdWVzdFxuICAgKiBAcGFyYW0gb3B0aW9ucy5yZXN0ID0gYSBib29sZWFuIHdoZXRoZXIgb3Igbm90IHRvIHVzZSB0aGUgUkVTVCBBUElcbiAgICogQHJldHVybnMgdGhlIGRlcGxveSBJRCBvZiB0aGUgcmVjZW50IHZhbGlkYXRpb24gcmVxdWVzdFxuICAgKi9cbiAgcHVibGljIGFzeW5jIGRlcGxveVJlY2VudFZhbGlkYXRpb24ob3B0aW9uczoge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgcmVzdD86IGJvb2xlYW47XG4gIH0pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHsgaWQsIHJlc3QgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHJlc3BvbnNlOiBzdHJpbmc7XG4gICAgaWYgKHJlc3QpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VCb2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB2YWxpZGF0ZWREZXBsb3lSZXF1ZXN0SWQ6IGlkLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlcXVlc3RJbmZvOiBIdHRwUmVxdWVzdCA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVybDogYCR7dGhpcy5fY29ubi5fYmFzZVVybCgpfS9tZXRhZGF0YS9kZXBsb3lSZXF1ZXN0YCxcbiAgICAgICAgYm9keTogbWVzc2FnZUJvZHksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0geyBoZWFkZXJzOiAnanNvbicgfTtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGRlcGxveSBJRCBvZiB0aGUgZGVwbG95UmVjZW50VmFsaWRhdGlvbiByZXNwb25zZSwgbm90XG4gICAgICAvLyB0aGUgYWxyZWFkeSB2YWxpZGF0ZWQgZGVwbG95IElEIChpLmUuLCB2YWxpZGF0ZWRkZXBsb3lyZXF1ZXN0aWQpLlxuICAgICAgLy8gUkVTVCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGFuIGlkIHByb3BlcnR5LCBTT0FQIHJldHVybnMgdGhlIGlkIGFzIGEgc3RyaW5nIGRpcmVjdGx5LlxuICAgICAgcmVzcG9uc2UgPSAoXG4gICAgICAgIGF3YWl0IHRoaXMuX2Nvbm4ucmVxdWVzdDx7IGlkOiBzdHJpbmcgfT4ocmVxdWVzdEluZm8sIHJlcXVlc3RPcHRpb25zKVxuICAgICAgKS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9pbnZva2UoJ2RlcGxveVJlY2VudFZhbGlkYXRpb24nLCB7XG4gICAgICAgIHZhbGlkYXRpb25JZDogaWQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVwbG95IGNvbXBvbmVudHMgaW50byBhbiBvcmdhbml6YXRpb24gdXNpbmcgemlwcGVkIGZpbGUgcmVwcmVzZW50YXRpb25zXG4gICAqIHVzaW5nIHRoZSBSRVNUIE1ldGFkYXRhIEFQSSBpbnN0ZWFkIG9mIFNPQVBcbiAgICovXG4gIGRlcGxveVJlc3QoXG4gICAgemlwSW5wdXQ6IEJ1ZmZlcixcbiAgICBvcHRpb25zOiBQYXJ0aWFsPERlcGxveU9wdGlvbnM+ID0ge30sXG4gICk6IERlcGxveVJlc3VsdExvY2F0b3I8Uz4ge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtLmFwcGVuZCgnZmlsZScsIHppcElucHV0LCB7XG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3ppcCcsXG4gICAgICBmaWxlbmFtZTogJ3BhY2thZ2UueG1sJyxcbiAgICB9KTtcblxuICAgIC8vIEFkZCB0aGUgZGVwbG95IG9wdGlvbnNcbiAgICBmb3JtLmFwcGVuZCgnZW50aXR5X2NvbnRlbnQnLCBKU09OLnN0cmluZ2lmeSh7IGRlcGxveU9wdGlvbnM6IG9wdGlvbnMgfSksIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXF1ZXN0OiBIdHRwUmVxdWVzdCA9IHtcbiAgICAgIHVybDogJy9tZXRhZGF0YS9kZXBsb3lSZXF1ZXN0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAuLi5mb3JtLmdldEhlYWRlcnMoKSB9LFxuICAgICAgYm9keTogZm9ybS5nZXRCdWZmZXIoKSxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2Nvbm4ucmVxdWVzdDxBc3luY1Jlc3VsdD4ocmVxdWVzdCk7XG5cbiAgICByZXR1cm4gbmV3IERlcGxveVJlc3VsdExvY2F0b3IodGhpcywgcmVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXBsb3kgY29tcG9uZW50cyBpbnRvIGFuIG9yZ2FuaXphdGlvbiB1c2luZyB6aXBwZWQgZmlsZSByZXByZXNlbnRhdGlvbnNcbiAgICovXG4gIGRlcGxveShcbiAgICB6aXBJbnB1dDogUmVhZGFibGUgfCBCdWZmZXIgfCBzdHJpbmcsXG4gICAgb3B0aW9uczogUGFydGlhbDxEZXBsb3lPcHRpb25zPiA9IHt9LFxuICApOiBEZXBsb3lSZXN1bHRMb2NhdG9yPFM+IHtcbiAgICBjb25zdCByZXMgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgemlwQ29udGVudEI2NCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzT2JqZWN0KHppcElucHV0KSAmJlxuICAgICAgICAgICdwaXBlJyBpbiB6aXBJbnB1dCAmJlxuICAgICAgICAgIHR5cGVvZiB6aXBJbnB1dC5waXBlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGJ1ZnM6IEJ1ZmZlcltdID0gW107XG4gICAgICAgICAgemlwSW5wdXQub24oJ2RhdGEnLCAoZCkgPT4gYnVmcy5wdXNoKGQpKTtcbiAgICAgICAgICB6aXBJbnB1dC5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgICAgIHppcElucHV0Lm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKEJ1ZmZlci5jb25jYXQoYnVmcykudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyB6aXBJbnB1dC5yZXN1bWUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh6aXBJbnB1dCBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgICAgICAgIHJlc29sdmUoemlwSW5wdXQudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcbiAgICAgICAgfSBlbHNlIGlmICh6aXBJbnB1dCBpbnN0YW5jZW9mIFN0cmluZyB8fCB0eXBlb2YgemlwSW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmVzb2x2ZSh6aXBJbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgJ1VuZXhwZWN0ZWQgemlwSW5wdXQgdHlwZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5faW52b2tlKFxuICAgICAgICAnZGVwbG95JyxcbiAgICAgICAge1xuICAgICAgICAgIFppcEZpbGU6IHppcENvbnRlbnRCNjQsXG4gICAgICAgICAgRGVwbG95T3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgQXBpU2NoZW1hcy5EZXBsb3lSZXN1bHQsXG4gICAgICApO1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gbmV3IERlcGxveVJlc3VsdExvY2F0b3IodGhpcywgcmVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIHN0YXR1cyBvZiBkZWNsYXJhdGl2ZSBtZXRhZGF0YSBjYWxsIGRlcGxveSgpXG4gICAqL1xuICBjaGVja0RlcGxveVN0YXR1cyhcbiAgICBhc3luY1Byb2Nlc3NJZDogc3RyaW5nLFxuICAgIGluY2x1ZGVEZXRhaWxzOiBib29sZWFuID0gZmFsc2UsXG4gICk6IFByb21pc2U8RGVwbG95UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcbiAgICAgICdjaGVja0RlcGxveVN0YXR1cycsXG4gICAgICB7XG4gICAgICAgIGFzeW5jUHJvY2Vzc0lkLFxuICAgICAgICBpbmNsdWRlRGV0YWlscyxcbiAgICAgIH0sXG4gICAgICBBcGlTY2hlbWFzLkRlcGxveVJlc3VsdCxcbiAgICApO1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKipcbiAqIFRoZSBsb2NhdG9yIGNsYXNzIGZvciBNZXRhZGF0YSBBUEkgYXN5bmNocm9ub3VzIGNhbGwgcmVzdWx0XG4gKi9cbmV4cG9ydCBjbGFzcyBBc3luY1Jlc3VsdExvY2F0b3I8XG4gIFMgZXh0ZW5kcyBTY2hlbWEsXG4gIFIgZXh0ZW5kcyB7fSA9IEFzeW5jUmVzdWx0XG4+IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgX21ldGE6IE1ldGFkYXRhQXBpPFM+O1xuICBfcHJvbWlzZTogUHJvbWlzZTxBc3luY1Jlc3VsdD47XG4gIF9pZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IobWV0YTogTWV0YWRhdGFBcGk8Uz4sIHByb21pc2U6IFByb21pc2U8QXN5bmNSZXN1bHQ+KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9tZXRhID0gbWV0YTtcbiAgICB0aGlzLl9wcm9taXNlID0gcHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9taXNlL0ErIGludGVyZmFjZVxuICAgKiBodHRwOi8vcHJvbWlzZXMtYXBsdXMuZ2l0aHViLmlvL3Byb21pc2VzLXNwZWMvXG4gICAqXG4gICAqIEBtZXRob2QgTWV0YWRhdGF+QXN5bmNSZXN1bHRMb2NhdG9yI3RoZW5cbiAgICovXG4gIHRoZW48VSwgVj4oXG4gICAgb25SZXNvbHZlPzogKChyZXN1bHQ6IEFzeW5jUmVzdWx0KSA9PiBVIHwgUHJvbWlzZTxVPikgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIG9uUmVqZWN0PzogKChlcnI6IEVycm9yKSA9PiBWIHwgUHJvbWlzZTxWPikgfCBudWxsIHwgdW5kZWZpbmVkLFxuICApOiBQcm9taXNlPFUgfCBWPiB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2UudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgc3RhdHVzIG9mIGFzeW5jIHJlcXVlc3RcbiAgICovXG4gIGFzeW5jIGNoZWNrKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3Byb21pc2U7XG4gICAgdGhpcy5faWQgPSByZXN1bHQuaWQ7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX21ldGEuY2hlY2tTdGF0dXMocmVzdWx0LmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb2xsaW5nIHVudGlsIGFzeW5jIGNhbGwgc3RhdHVzIGJlY29tZXMgY29tcGxldGUgb3IgZXJyb3JcbiAgICovXG4gIHBvbGwoaW50ZXJ2YWw6IG51bWJlciwgdGltZW91dDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgcG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoc3RhcnRUaW1lICsgdGltZW91dCA8IG5vdykge1xuICAgICAgICAgIGxldCBlcnJNc2cgPSAnUG9sbGluZyB0aW1lIG91dC4nO1xuICAgICAgICAgIGlmICh0aGlzLl9pZCkge1xuICAgICAgICAgICAgZXJyTXNnICs9ICcgUHJvY2VzcyBJZCA9ICcgKyB0aGlzLl9pZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcihlcnJNc2cpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jaGVjaygpO1xuICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlJywgcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Byb2dyZXNzJywgcmVzdWx0KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHBvbGwsIGludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgfVxuICAgIH07XG4gICAgc2V0VGltZW91dChwb2xsLCBpbnRlcnZhbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYW5kIHdhaXQgdW50aWwgdGhlIGFzeW5jIHJlcXVlc3RzIGJlY29tZSBpbiBjb21wbGV0ZWQgc3RhdHVzXG4gICAqL1xuICBjb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Uj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5vbignY29tcGxldGUnLCByZXNvbHZlKTtcbiAgICAgIHRoaXMub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICAgIHRoaXMucG9sbCh0aGlzLl9tZXRhLnBvbGxJbnRlcnZhbCwgdGhpcy5fbWV0YS5wb2xsVGltZW91dCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKipcbiAqIFRoZSBsb2NhdG9yIGNsYXNzIHRvIHRyYWNrIHJldHJlaXZlKCkgTWV0YWRhdGEgQVBJIGNhbGwgcmVzdWx0XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXRyaWV2ZVJlc3VsdExvY2F0b3I8UyBleHRlbmRzIFNjaGVtYT4gZXh0ZW5kcyBBc3luY1Jlc3VsdExvY2F0b3I8XG4gIFMsXG4gIFJldHJpZXZlUmVzdWx0XG4+IHtcbiAgLyoqXG4gICAqIENoZWNrIGFuZCB3YWl0IHVudGlsIHRoZSBhc3luYyByZXF1ZXN0IGJlY29tZXMgaW4gY29tcGxldGVkIHN0YXR1cyxcbiAgICogYW5kIHJldHJpZXZlIHRoZSByZXN1bHQgZGF0YS5cbiAgICovXG4gIGFzeW5jIGNvbXBsZXRlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGVyLmNvbXBsZXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuX21ldGEuY2hlY2tSZXRyaWV2ZVN0YXR1cyhyZXN1bHQuaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0aGUgcmV0cmlldmVkIHJlc3VsdCB0byBOb2RlLmpzIHJlYWRhYmxlIHN0cmVhbVxuICAgKi9cbiAgc3RyZWFtKCkge1xuICAgIGNvbnN0IHJlc3VsdFN0cmVhbSA9IG5ldyBSZWFkYWJsZSgpO1xuICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG4gICAgcmVzdWx0U3RyZWFtLl9yZWFkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHJlYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVhZGluZyA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgIHJlc3VsdFN0cmVhbS5wdXNoKEJ1ZmZlci5mcm9tKHJlc3VsdC56aXBGaWxlLCAnYmFzZTY0JykpO1xuICAgICAgICByZXN1bHRTdHJlYW0ucHVzaChudWxsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzdWx0U3RyZWFtLmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0U3RyZWFtO1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBUaGUgbG9jYXRvciBjbGFzcyB0byB0cmFjayBkZXBsb3koKSBNZXRhZGF0YSBBUEkgY2FsbCByZXN1bHRcbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAY2xhc3MgTWV0YWRhdGF+RGVwbG95UmVzdWx0TG9jYXRvclxuICogQGV4dGVuZHMgTWV0YWRhdGF+QXN5bmNSZXN1bHRMb2NhdG9yXG4gKiBAcGFyYW0ge01ldGFkYXRhfSBtZXRhIC0gTWV0YWRhdGEgQVBJIG9iamVjdFxuICogQHBhcmFtIHtQcm9taXNlLjxNZXRhZGF0YX5Bc3luY1Jlc3VsdD59IHJlc3VsdCAtIFByb21pc2Ugb2JqZWN0IGZvciBhc3luYyByZXN1bHQgb2YgZGVwbG95KCkgY2FsbFxuICovXG5leHBvcnQgY2xhc3MgRGVwbG95UmVzdWx0TG9jYXRvcjxTIGV4dGVuZHMgU2NoZW1hPiBleHRlbmRzIEFzeW5jUmVzdWx0TG9jYXRvcjxcbiAgUyxcbiAgRGVwbG95UmVzdWx0XG4+IHtcbiAgLyoqXG4gICAqIENoZWNrIGFuZCB3YWl0IHVudGlsIHRoZSBhc3luYyByZXF1ZXN0IGJlY29tZXMgaW4gY29tcGxldGVkIHN0YXR1cyxcbiAgICogYW5kIHJldHJpZXZlIHRoZSByZXN1bHQgZGF0YS5cbiAgICovXG4gIGFzeW5jIGNvbXBsZXRlKGluY2x1ZGVEZXRhaWxzPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGVyLmNvbXBsZXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuX21ldGEuY2hlY2tEZXBsb3lTdGF0dXMocmVzdWx0LmlkLCBpbmNsdWRlRGV0YWlscyk7XG4gIH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKlxuICogUmVnaXN0ZXIgaG9vayBpbiBjb25uZWN0aW9uIGluc3RhbnRpYXRpb24gZm9yIGR5bmFtaWNhbGx5IGFkZGluZyB0aGlzIEFQSSBtb2R1bGUgZmVhdHVyZXNcbiAqL1xucmVnaXN0ZXJNb2R1bGUoJ21ldGFkYXRhJywgKGNvbm4pID0+IG5ldyBNZXRhZGF0YUFwaShjb25uKSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFkYXRhQXBpO1xuIl19