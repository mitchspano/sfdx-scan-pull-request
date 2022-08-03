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

require("core-js/modules/es.string.replace");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Bulk = exports.Batch = exports.Job = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _events = require("events");

var _stream = require("stream");

var _multistream = _interopRequireDefault(require("multistream"));

var _recordStream = require("../record-stream");

var _httpApi = _interopRequireDefault(require("../http-api"));

var _jsforce = require("../jsforce");

var _stream2 = require("../util/stream");

var _function = require("../util/function");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context5; _forEachInstanceProperty(_context5 = ownKeys(Object(source))).call(_context5, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Class for Bulk API Job
 */
class Job extends _events.EventEmitter {
  /**
   *
   */
  constructor(bulk, type, operation, options, jobId) {
    super();
    (0, _defineProperty2.default)(this, "type", void 0);
    (0, _defineProperty2.default)(this, "operation", void 0);
    (0, _defineProperty2.default)(this, "options", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "state", void 0);
    (0, _defineProperty2.default)(this, "_bulk", void 0);
    (0, _defineProperty2.default)(this, "_batches", void 0);
    (0, _defineProperty2.default)(this, "_jobInfo", void 0);
    (0, _defineProperty2.default)(this, "_error", void 0);
    this._bulk = bulk;
    this.type = type;
    this.operation = operation;
    this.options = options || {};
    this.id = jobId !== null && jobId !== void 0 ? jobId : null;
    this.state = this.id ? 'Open' : 'Unknown';
    this._batches = {}; // default error handler to keep the latest error

    this.on('error', error => this._error = error);
  }
  /**
   * Return latest jobInfo from cache
   */


  info() {
    // if cache is not available, check the latest
    if (!this._jobInfo) {
      this._jobInfo = this.check();
    }

    return this._jobInfo;
  }
  /**
   * Open new job and get jobinfo
   */


  open() {
    const bulk = this._bulk;
    const options = this.options; // if sobject type / operation is not provided

    if (!this.type || !this.operation) {
      throw new Error('type / operation is required to open a new job');
    } // if not requested opening job


    if (!this._jobInfo) {
      var _context;

      let operation = this.operation.toLowerCase();

      if (operation === 'harddelete') {
        operation = 'hardDelete';
      }

      if (operation === 'queryall') {
        operation = 'queryAll';
      }

      const body = (0, _trim.default)(_context = `
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo  xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <operation>${operation}</operation>
  <object>${this.type}</object>
  ${options.extIdField ? `<externalIdFieldName>${options.extIdField}</externalIdFieldName>` : ''}
  ${options.concurrencyMode ? `<concurrencyMode>${options.concurrencyMode}</concurrencyMode>` : ''}
  ${options.assignmentRuleId ? `<assignmentRuleId>${options.assignmentRuleId}</assignmentRuleId>` : ''}
  <contentType>CSV</contentType>
</jobInfo>
      `).call(_context);

      this._jobInfo = (async () => {
        try {
          const res = await bulk._request({
            method: 'POST',
            path: '/job',
            body,
            headers: {
              'Content-Type': 'application/xml; charset=utf-8'
            },
            responseType: 'application/xml'
          });
          this.emit('open', res.jobInfo);
          this.id = res.jobInfo.id;
          this.state = res.jobInfo.state;
          return res.jobInfo;
        } catch (err) {
          this.emit('error', err);
          throw err;
        }
      })();
    }

    return this._jobInfo;
  }
  /**
   * Create a new batch instance in the job
   */


  createBatch() {
    const batch = new Batch(this);
    batch.on('queue', () => {
      this._batches[batch.id] = batch;
    });
    return batch;
  }
  /**
   * Get a batch instance specified by given batch ID
   */


  batch(batchId) {
    let batch = this._batches[batchId];

    if (!batch) {
      batch = new Batch(this, batchId);
      this._batches[batchId] = batch;
    }

    return batch;
  }
  /**
   * Check the latest job status from server
   */


  check() {
    const bulk = this._bulk;
    const logger = bulk._logger;

    this._jobInfo = (async () => {
      const jobId = await this.ready();
      const res = await bulk._request({
        method: 'GET',
        path: '/job/' + jobId,
        responseType: 'application/xml'
      });
      logger.debug(res.jobInfo);
      this.id = res.jobInfo.id;
      this.type = res.jobInfo.object;
      this.operation = res.jobInfo.operation;
      this.state = res.jobInfo.state;
      return res.jobInfo;
    })();

    return this._jobInfo;
  }
  /**
   * Wait till the job is assigned to server
   */


  ready() {
    return this.id ? _promise.default.resolve(this.id) : this.open().then(({
      id
    }) => id);
  }
  /**
   * List all registered batch info in job
   */


  async list() {
    const bulk = this._bulk;
    const logger = bulk._logger;
    const jobId = await this.ready();
    const res = await bulk._request({
      method: 'GET',
      path: '/job/' + jobId + '/batch',
      responseType: 'application/xml'
    });
    logger.debug(res.batchInfoList.batchInfo);
    const batchInfoList = (0, _isArray.default)(res.batchInfoList.batchInfo) ? res.batchInfoList.batchInfo : [res.batchInfoList.batchInfo];
    return batchInfoList;
  }
  /**
   * Close opened job
   */


  async close() {
    if (!this.id) {
      return;
    }

    try {
      const jobInfo = await this._changeState('Closed');
      this.id = null;
      this.emit('close', jobInfo);
      return jobInfo;
    } catch (err) {
      this.emit('error', err);
      throw err;
    }
  }
  /**
   * Set the status to abort
   */


  async abort() {
    if (!this.id) {
      return;
    }

    try {
      const jobInfo = await this._changeState('Aborted');
      this.id = null;
      this.emit('abort', jobInfo);
      return jobInfo;
    } catch (err) {
      this.emit('error', err);
      throw err;
    }
  }
  /**
   * @private
   */


  async _changeState(state) {
    const bulk = this._bulk;
    const logger = bulk._logger;

    this._jobInfo = (async () => {
      var _context2;

      const jobId = await this.ready();
      const body = (0, _trim.default)(_context2 = ` 
<?xml version="1.0" encoding="UTF-8"?>
  <jobInfo xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <state>${state}</state>
</jobInfo>
      `).call(_context2);
      const res = await bulk._request({
        method: 'POST',
        path: '/job/' + jobId,
        body: body,
        headers: {
          'Content-Type': 'application/xml; charset=utf-8'
        },
        responseType: 'application/xml'
      });
      logger.debug(res.jobInfo);
      this.state = res.jobInfo.state;
      return res.jobInfo;
    })();

    return this._jobInfo;
  }

}
/*--------------------------------------------*/


exports.Job = Job;

class PollingTimeoutError extends Error {
  /**
   *
   */
  constructor(message, jobId, batchId) {
    super(message);
    (0, _defineProperty2.default)(this, "jobId", void 0);
    (0, _defineProperty2.default)(this, "batchId", void 0);
    this.name = 'PollingTimeout';
    this.jobId = jobId;
    this.batchId = batchId;
  }

}
/*--------------------------------------------*/

/**
 * Batch (extends Writable)
 */


class Batch extends _stream.Writable {
  /**
   *
   */
  constructor(job, id) {
    super({
      objectMode: true
    });
    (0, _defineProperty2.default)(this, "job", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "_bulk", void 0);
    (0, _defineProperty2.default)(this, "_uploadStream", void 0);
    (0, _defineProperty2.default)(this, "_downloadStream", void 0);
    (0, _defineProperty2.default)(this, "_dataStream", void 0);
    (0, _defineProperty2.default)(this, "_result", void 0);
    (0, _defineProperty2.default)(this, "_error", void 0);
    (0, _defineProperty2.default)(this, "run", this.execute);
    (0, _defineProperty2.default)(this, "exec", this.execute);
    this.job = job;
    this.id = id;
    this._bulk = job._bulk; // default error handler to keep the latest error

    this.on('error', error => this._error = error); //
    // setup data streams
    //

    const converterOptions = {
      nullValue: '#N/A'
    };
    const uploadStream = this._uploadStream = new _recordStream.Serializable();
    const uploadDataStream = uploadStream.stream('csv', converterOptions);
    const downloadStream = this._downloadStream = new _recordStream.Parsable();
    const downloadDataStream = downloadStream.stream('csv', converterOptions);
    this.on('finish', () => uploadStream.end());
    uploadDataStream.once('readable', async () => {
      try {
        // ensure the job is opened in server or job id is already assigned
        await this.job.ready(); // pipe upload data to batch API request stream

        uploadDataStream.pipe(this._createRequestStream());
      } catch (err) {
        this.emit('error', err);
      }
    }); // duplex data stream, opened access to API programmers by Batch#stream()

    this._dataStream = (0, _stream2.concatStreamsAsDuplex)(uploadDataStream, downloadDataStream);
  }
  /**
   * Connect batch API and create stream instance of request/response
   *
   * @private
   */


  _createRequestStream() {
    const bulk = this._bulk;
    const logger = bulk._logger;

    const req = bulk._request({
      method: 'POST',
      path: '/job/' + this.job.id + '/batch',
      headers: {
        'Content-Type': 'text/csv'
      },
      responseType: 'application/xml'
    });

    (async () => {
      try {
        const res = await req;
        logger.debug(res.batchInfo);
        this.id = res.batchInfo.id;
        this.emit('queue', res.batchInfo);
      } catch (err) {
        this.emit('error', err);
      }
    })();

    return req.stream();
  }
  /**
   * Implementation of Writable
   */


  _write(record_, enc, cb) {
    const {
      Id,
      type,
      attributes
    } = record_,
          rrec = (0, _objectWithoutProperties2.default)(record_, ["Id", "type", "attributes"]);
    let record;

    switch (this.job.operation) {
      case 'insert':
        record = rrec;
        break;

      case 'delete':
      case 'hardDelete':
        record = {
          Id
        };
        break;

      default:
        record = _objectSpread({
          Id
        }, rrec);
    }

    this._uploadStream.write(record, enc, cb);
  }
  /**
   * Returns duplex stream which accepts CSV data input and batch result output
   */


  stream() {
    return this._dataStream;
  }
  /**
   * Execute batch operation
   */


  execute(input) {
    // if batch is already executed
    if (this._result) {
      throw new Error('Batch already executed.');
    }

    this._result = new _promise.default((resolve, reject) => {
      this.once('response', resolve);
      this.once('error', reject);
    });

    if ((0, _function.isObject)(input) && 'pipe' in input && (0, _function.isFunction)(input.pipe)) {
      // if input has stream.Readable interface
      input.pipe(this._dataStream);
    } else {
      if ((0, _isArray.default)(input)) {
        for (const record of input) {
          for (const key of (0, _keys.default)(record)) {
            if (typeof record[key] === 'boolean') {
              record[key] = String(record[key]);
            }
          }

          this.write(record);
        }

        this.end();
      } else if (typeof input === 'string') {
        this._dataStream.write(input, 'utf8');

        this._dataStream.end();
      }
    } // return Batch instance for chaining


    return this;
  }

  /**
   * Promise/A+ interface
   * Delegate to promise, return promise instance for batch result
   */
  then(onResolved, onReject) {
    if (!this._result) {
      this.execute();
    }

    return this._result.then(onResolved, onReject);
  }
  /**
   * Check the latest batch status in server
   */


  async check() {
    const bulk = this._bulk;
    const logger = bulk._logger;
    const jobId = this.job.id;
    const batchId = this.id;

    if (!jobId || !batchId) {
      throw new Error('Batch not started.');
    }

    const res = await bulk._request({
      method: 'GET',
      path: '/job/' + jobId + '/batch/' + batchId,
      responseType: 'application/xml'
    });
    logger.debug(res.batchInfo);
    return res.batchInfo;
  }
  /**
   * Polling the batch result and retrieve
   */


  poll(interval, timeout) {
    const jobId = this.job.id;
    const batchId = this.id;

    if (!jobId || !batchId) {
      throw new Error('Batch not started.');
    }

    const startTime = new Date().getTime();

    const poll = async () => {
      const now = new Date().getTime();

      if (startTime + timeout < now) {
        const err = new PollingTimeoutError('Polling time out. Job Id = ' + jobId + ' , batch Id = ' + batchId, jobId, batchId);
        this.emit('error', err);
        return;
      }

      let res;

      try {
        res = await this.check();
      } catch (err) {
        this.emit('error', err);
        return;
      }

      if (res.state === 'Failed') {
        if ((0, _parseInt2.default)(res.numberRecordsProcessed, 10) > 0) {
          this.retrieve();
        } else {
          this.emit('error', new Error(res.stateMessage));
        }
      } else if (res.state === 'Completed') {
        this.retrieve();
      } else {
        this.emit('progress', res);
        (0, _setTimeout2.default)(poll, interval);
      }
    };

    (0, _setTimeout2.default)(poll, interval);
  }
  /**
   * Retrieve batch result
   */


  async retrieve() {
    const bulk = this._bulk;
    const jobId = this.job.id;
    const job = this.job;
    const batchId = this.id;

    if (!jobId || !batchId) {
      throw new Error('Batch not started.');
    }

    try {
      const resp = await bulk._request({
        method: 'GET',
        path: '/job/' + jobId + '/batch/' + batchId + '/result'
      });
      let results;

      if (job.operation === 'query' || job.operation === 'queryAll') {
        var _context3;

        const res = resp;
        let resultId = res['result-list'].result;
        results = (0, _map.default)(_context3 = (0, _isArray.default)(resultId) ? resultId : [resultId]).call(_context3, id => ({
          id,
          batchId,
          jobId
        }));
      } else {
        const res = resp;
        results = (0, _map.default)(res).call(res, ret => ({
          id: ret.Id || null,
          success: ret.Success === 'true',
          errors: ret.Error ? [ret.Error] : []
        }));
      }

      this.emit('response', results);
      return results;
    } catch (err) {
      this.emit('error', err);
      throw err;
    }
  }
  /**
   * Fetch query result as a record stream
   * @param {String} resultId - Result id
   * @returns {RecordStream} - Record stream, convertible to CSV data stream
   */


  result(resultId) {
    const jobId = this.job.id;
    const batchId = this.id;

    if (!jobId || !batchId) {
      throw new Error('Batch not started.');
    }

    const resultStream = new _recordStream.Parsable();
    const resultDataStream = resultStream.stream('csv');

    this._bulk._request({
      method: 'GET',
      path: '/job/' + jobId + '/batch/' + batchId + '/result/' + resultId,
      responseType: 'application/octet-stream'
    }).stream().pipe(resultDataStream);

    return resultStream;
  }

}
/*--------------------------------------------*/

/**
 *
 */


exports.Batch = Batch;

class BulkApi extends _httpApi.default {
  beforeSend(request) {
    var _this$_conn$accessTok;

    request.headers = _objectSpread(_objectSpread({}, request.headers), {}, {
      'X-SFDC-SESSION': (_this$_conn$accessTok = this._conn.accessToken) !== null && _this$_conn$accessTok !== void 0 ? _this$_conn$accessTok : ''
    });
  }

  isSessionExpired(response) {
    return response.statusCode === 400 && /<exceptionCode>InvalidSessionId<\/exceptionCode>/.test(response.body);
  }

  hasErrorInResponseBody(body) {
    return !!body.error;
  }

  parseError(body) {
    return {
      errorCode: body.error.exceptionCode,
      message: body.error.exceptionMessage
    };
  }

}
/*--------------------------------------------*/

/**
 * Class for Bulk API
 *
 * @class
 */


class Bulk {
  /**
   * Polling interval in milliseconds
   */

  /**
   * Polling timeout in milliseconds
   * @type {Number}
   */

  /**
   *
   */
  constructor(conn) {
    (0, _defineProperty2.default)(this, "_conn", void 0);
    (0, _defineProperty2.default)(this, "_logger", void 0);
    (0, _defineProperty2.default)(this, "pollInterval", 1000);
    (0, _defineProperty2.default)(this, "pollTimeout", 10000);
    this._conn = conn;
    this._logger = conn._logger;
  }
  /**
   *
   */


  _request(request_) {
    const conn = this._conn;
    const {
      path,
      responseType
    } = request_,
          rreq = (0, _objectWithoutProperties2.default)(request_, ["path", "responseType"]);
    const baseUrl = [conn.instanceUrl, 'services/async', conn.version].join('/');

    const request = _objectSpread(_objectSpread({}, rreq), {}, {
      url: baseUrl + path
    });

    return new BulkApi(this._conn, {
      responseType
    }).request(request);
  }
  /**
   * Create and start bulkload job and batch
   */


  load(type, operation, optionsOrInput, input) {
    let options = {};

    if (typeof optionsOrInput === 'string' || (0, _isArray.default)(optionsOrInput) || (0, _function.isObject)(optionsOrInput) && 'pipe' in optionsOrInput && typeof optionsOrInput.pipe === 'function') {
      // when options is not plain hash object, it is omitted
      input = optionsOrInput;
    } else {
      options = optionsOrInput;
    }

    const job = this.createJob(type, operation, options);
    const batch = job.createBatch();

    const cleanup = () => job.close();

    const cleanupOnError = err => {
      if (err.name !== 'PollingTimeout') {
        cleanup();
      }
    };

    batch.on('response', cleanup);
    batch.on('error', cleanupOnError);
    batch.on('queue', () => {
      batch === null || batch === void 0 ? void 0 : batch.poll(this.pollInterval, this.pollTimeout);
    });
    return batch.execute(input);
  }
  /**
   * Execute bulk query and get record stream
   */


  query(soql) {
    const m = soql.replace(/\([\s\S]+\)/g, '').match(/FROM\s+(\w+)/i);

    if (!m) {
      throw new Error('No sobject type found in query, maybe caused by invalid SOQL.');
    }

    const type = m[1];
    const recordStream = new _recordStream.Parsable();
    const dataStream = recordStream.stream('csv');

    (async () => {
      try {
        const results = await this.load(type, 'query', soql);
        const streams = (0, _map.default)(results).call(results, result => this.job(result.jobId).batch(result.batchId).result(result.id).stream());
        (0, _multistream.default)(streams).pipe(dataStream);
      } catch (err) {
        recordStream.emit('error', err);
      }
    })();

    return recordStream;
  }
  /**
   * Create a new job instance
   */


  createJob(type, operation, options = {}) {
    return new Job(this, type, operation, options);
  }
  /**
   * Get a job instance specified by given job ID
   *
   * @param {String} jobId - Job ID
   * @returns {Bulk~Job}
   */


  job(jobId) {
    return new Job(this, null, null, null, jobId);
  }

}
/*--------------------------------------------*/

/*
 * Register hook in connection instantiation for dynamically adding this API module features
 */


exports.Bulk = Bulk;
(0, _jsforce.registerModule)('bulk', conn => new Bulk(conn));
var _default = Bulk;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYnVsay50cyJdLCJuYW1lcyI6WyJKb2IiLCJFdmVudEVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsImJ1bGsiLCJ0eXBlIiwib3BlcmF0aW9uIiwib3B0aW9ucyIsImpvYklkIiwiX2J1bGsiLCJpZCIsInN0YXRlIiwiX2JhdGNoZXMiLCJvbiIsImVycm9yIiwiX2Vycm9yIiwiaW5mbyIsIl9qb2JJbmZvIiwiY2hlY2siLCJvcGVuIiwiRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsImJvZHkiLCJleHRJZEZpZWxkIiwiY29uY3VycmVuY3lNb2RlIiwiYXNzaWdubWVudFJ1bGVJZCIsInJlcyIsIl9yZXF1ZXN0IiwibWV0aG9kIiwicGF0aCIsImhlYWRlcnMiLCJyZXNwb25zZVR5cGUiLCJlbWl0Iiwiam9iSW5mbyIsImVyciIsImNyZWF0ZUJhdGNoIiwiYmF0Y2giLCJCYXRjaCIsImJhdGNoSWQiLCJsb2dnZXIiLCJfbG9nZ2VyIiwicmVhZHkiLCJkZWJ1ZyIsIm9iamVjdCIsInJlc29sdmUiLCJ0aGVuIiwibGlzdCIsImJhdGNoSW5mb0xpc3QiLCJiYXRjaEluZm8iLCJjbG9zZSIsIl9jaGFuZ2VTdGF0ZSIsImFib3J0IiwiUG9sbGluZ1RpbWVvdXRFcnJvciIsIm1lc3NhZ2UiLCJuYW1lIiwiV3JpdGFibGUiLCJqb2IiLCJvYmplY3RNb2RlIiwiZXhlY3V0ZSIsImNvbnZlcnRlck9wdGlvbnMiLCJudWxsVmFsdWUiLCJ1cGxvYWRTdHJlYW0iLCJfdXBsb2FkU3RyZWFtIiwiU2VyaWFsaXphYmxlIiwidXBsb2FkRGF0YVN0cmVhbSIsInN0cmVhbSIsImRvd25sb2FkU3RyZWFtIiwiX2Rvd25sb2FkU3RyZWFtIiwiUGFyc2FibGUiLCJkb3dubG9hZERhdGFTdHJlYW0iLCJlbmQiLCJvbmNlIiwicGlwZSIsIl9jcmVhdGVSZXF1ZXN0U3RyZWFtIiwiX2RhdGFTdHJlYW0iLCJyZXEiLCJfd3JpdGUiLCJyZWNvcmRfIiwiZW5jIiwiY2IiLCJJZCIsImF0dHJpYnV0ZXMiLCJycmVjIiwicmVjb3JkIiwid3JpdGUiLCJpbnB1dCIsIl9yZXN1bHQiLCJyZWplY3QiLCJrZXkiLCJTdHJpbmciLCJvblJlc29sdmVkIiwib25SZWplY3QiLCJwb2xsIiwiaW50ZXJ2YWwiLCJ0aW1lb3V0Iiwic3RhcnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJudW1iZXJSZWNvcmRzUHJvY2Vzc2VkIiwicmV0cmlldmUiLCJzdGF0ZU1lc3NhZ2UiLCJyZXNwIiwicmVzdWx0cyIsInJlc3VsdElkIiwicmVzdWx0IiwicmV0Iiwic3VjY2VzcyIsIlN1Y2Nlc3MiLCJlcnJvcnMiLCJyZXN1bHRTdHJlYW0iLCJyZXN1bHREYXRhU3RyZWFtIiwiQnVsa0FwaSIsIkh0dHBBcGkiLCJiZWZvcmVTZW5kIiwicmVxdWVzdCIsIl9jb25uIiwiYWNjZXNzVG9rZW4iLCJpc1Nlc3Npb25FeHBpcmVkIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwidGVzdCIsImhhc0Vycm9ySW5SZXNwb25zZUJvZHkiLCJwYXJzZUVycm9yIiwiZXJyb3JDb2RlIiwiZXhjZXB0aW9uQ29kZSIsImV4Y2VwdGlvbk1lc3NhZ2UiLCJCdWxrIiwiY29ubiIsInJlcXVlc3RfIiwicnJlcSIsImJhc2VVcmwiLCJpbnN0YW5jZVVybCIsInZlcnNpb24iLCJqb2luIiwidXJsIiwibG9hZCIsIm9wdGlvbnNPcklucHV0IiwiY3JlYXRlSm9iIiwiY2xlYW51cCIsImNsZWFudXBPbkVycm9yIiwicG9sbEludGVydmFsIiwicG9sbFRpbWVvdXQiLCJxdWVyeSIsInNvcWwiLCJtIiwicmVwbGFjZSIsIm1hdGNoIiwicmVjb3JkU3RyZWFtIiwiZGF0YVN0cmVhbSIsInN0cmVhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBUUE7Ozs7OztBQWlHQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7Ozs7QUFDQSw2QkFBZSxNQUFmLEVBQXdCd0gsSUFBRCxJQUFVLElBQUlELElBQUosQ0FBU0MsSUFBVCxDQUFqQztlQUVlRCxJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBNYW5hZ2VzIFNhbGVzZm9yY2UgQnVsayBBUEkgcmVsYXRlZCBvcGVyYXRpb25zXG4gKiBAYXV0aG9yIFNoaW5pY2hpIFRvbWl0YSA8c2hpbmljaGkudG9taXRhQGdtYWlsLmNvbT5cbiAqL1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcbmltcG9ydCB7IER1cGxleCwgUmVhZGFibGUsIFdyaXRhYmxlIH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCBqb2luU3RyZWFtcyBmcm9tICdtdWx0aXN0cmVhbSc7XG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuLi9jb25uZWN0aW9uJztcbmltcG9ydCB7IFNlcmlhbGl6YWJsZSwgUGFyc2FibGUgfSBmcm9tICcuLi9yZWNvcmQtc3RyZWFtJztcbmltcG9ydCBIdHRwQXBpIGZyb20gJy4uL2h0dHAtYXBpJztcbmltcG9ydCB7IHJlZ2lzdGVyTW9kdWxlIH0gZnJvbSAnLi4vanNmb3JjZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgeyBjb25jYXRTdHJlYW1zQXNEdXBsZXggfSBmcm9tICcuLi91dGlsL3N0cmVhbSc7XG5pbXBvcnQge1xuICBIdHRwTWV0aG9kcyxcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbiAgUmVjb3JkLFxuICBTY2hlbWEsXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbC9mdW5jdGlvbic7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5leHBvcnQgdHlwZSBCdWxrT3BlcmF0aW9uID1cbiAgfCAnaW5zZXJ0J1xuICB8ICd1cGRhdGUnXG4gIHwgJ3Vwc2VydCdcbiAgfCAnZGVsZXRlJ1xuICB8ICdoYXJkRGVsZXRlJ1xuICB8ICdxdWVyeSdcbiAgfCAncXVlcnlBbGwnO1xuXG5leHBvcnQgdHlwZSBCdWxrT3B0aW9ucyA9IHtcbiAgZXh0SWRGaWVsZD86IHN0cmluZztcbiAgY29uY3VycmVuY3lNb2RlPzogJ1NlcmlhbCcgfCAnUGFyYWxsZWwnO1xuICBhc3NpZ25tZW50UnVsZUlkPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgSm9iU3RhdGUgPSAnT3BlbicgfCAnQ2xvc2VkJyB8ICdBYm9ydGVkJyB8ICdGYWlsZWQnIHwgJ1Vua25vd24nO1xuXG5leHBvcnQgdHlwZSBKb2JJbmZvID0ge1xuICBpZDogc3RyaW5nO1xuICBvYmplY3Q6IHN0cmluZztcbiAgb3BlcmF0aW9uOiBCdWxrT3BlcmF0aW9uO1xuICBzdGF0ZTogSm9iU3RhdGU7XG59O1xuXG50eXBlIEpvYkluZm9SZXNwb25zZSA9IHtcbiAgam9iSW5mbzogSm9iSW5mbztcbn07XG5cbmV4cG9ydCB0eXBlIEJhdGNoU3RhdGUgPVxuICB8ICdRdWV1ZWQnXG4gIHwgJ0luUHJvZ3Jlc3MnXG4gIHwgJ0NvbXBsZXRlZCdcbiAgfCAnRmFpbGVkJ1xuICB8ICdOb3RQcm9jZXNzZWQnO1xuXG5leHBvcnQgdHlwZSBCYXRjaEluZm8gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGpvYklkOiBzdHJpbmc7XG4gIHN0YXRlOiBCYXRjaFN0YXRlO1xuICBzdGF0ZU1lc3NhZ2U6IHN0cmluZztcbiAgbnVtYmVyUmVjb3Jkc1Byb2Nlc3NlZDogc3RyaW5nO1xuICBudW1iZXJSZWNvcmRzRmFpbGVkOiBzdHJpbmc7XG4gIHRvdGFsUHJvY2Vzc2luZ1RpbWU6IHN0cmluZztcbn07XG5cbnR5cGUgQmF0Y2hJbmZvUmVzcG9uc2UgPSB7XG4gIGJhdGNoSW5mbzogQmF0Y2hJbmZvO1xufTtcblxudHlwZSBCYXRjaEluZm9MaXN0UmVzcG9uc2UgPSB7XG4gIGJhdGNoSW5mb0xpc3Q6IHtcbiAgICBiYXRjaEluZm86IEJhdGNoSW5mbyB8IEJhdGNoSW5mb1tdO1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQnVsa1F1ZXJ5QmF0Y2hSZXN1bHQgPSBBcnJheTx7XG4gIGlkOiBzdHJpbmc7XG4gIGJhdGNoSWQ6IHN0cmluZztcbiAgam9iSWQ6IHN0cmluZztcbn0+O1xuXG5leHBvcnQgdHlwZSBCdWxrSW5nZXN0QmF0Y2hSZXN1bHQgPSBBcnJheTx7XG4gIGlkOiBzdHJpbmcgfCBudWxsO1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBlcnJvcnM6IHN0cmluZ1tdO1xufT47XG5cbmV4cG9ydCB0eXBlIEJhdGNoUmVzdWx0PE9wciBleHRlbmRzIEJ1bGtPcGVyYXRpb24+ID0gT3ByIGV4dGVuZHNcbiAgfCAncXVlcnknXG4gIHwgJ3F1ZXJ5QWxsJ1xuICA/IEJ1bGtRdWVyeUJhdGNoUmVzdWx0XG4gIDogQnVsa0luZ2VzdEJhdGNoUmVzdWx0O1xuXG50eXBlIEJ1bGtJbmdlc3RSZXN1bHRSZXNwb25zZSA9IEFycmF5PHtcbiAgSWQ6IHN0cmluZztcbiAgU3VjY2Vzczogc3RyaW5nO1xuICBFcnJvcjogc3RyaW5nO1xufT47XG5cbnR5cGUgQnVsa1F1ZXJ5UmVzdWx0UmVzcG9uc2UgPSB7XG4gICdyZXN1bHQtbGlzdCc6IHtcbiAgICByZXN1bHQ6IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9O1xufTtcblxudHlwZSBCdWxrUmVxdWVzdCA9IHtcbiAgbWV0aG9kOiBIdHRwTWV0aG9kcztcbiAgcGF0aDogc3RyaW5nO1xuICBib2R5Pzogc3RyaW5nO1xuICBoZWFkZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHJlc3BvbnNlVHlwZT86IHN0cmluZztcbn07XG5cbi8qKlxuICogQ2xhc3MgZm9yIEJ1bGsgQVBJIEpvYlxuICovXG5leHBvcnQgY2xhc3MgSm9iPFxuICBTIGV4dGVuZHMgU2NoZW1hLFxuICBPcHIgZXh0ZW5kcyBCdWxrT3BlcmF0aW9uXG4+IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgdHlwZTogc3RyaW5nIHwgbnVsbDtcbiAgb3BlcmF0aW9uOiBPcHIgfCBudWxsO1xuICBvcHRpb25zOiBCdWxrT3B0aW9ucztcbiAgaWQ6IHN0cmluZyB8IG51bGw7XG4gIHN0YXRlOiBKb2JTdGF0ZTtcbiAgX2J1bGs6IEJ1bGs8Uz47XG4gIF9iYXRjaGVzOiB7IFtpZDogc3RyaW5nXTogQmF0Y2g8UywgT3ByPiB9O1xuICBfam9iSW5mbzogUHJvbWlzZTxKb2JJbmZvPiB8IHVuZGVmaW5lZDtcbiAgX2Vycm9yOiBFcnJvciB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGJ1bGs6IEJ1bGs8Uz4sXG4gICAgdHlwZTogc3RyaW5nIHwgbnVsbCxcbiAgICBvcGVyYXRpb246IE9wciB8IG51bGwsXG4gICAgb3B0aW9uczogQnVsa09wdGlvbnMgfCBudWxsLFxuICAgIGpvYklkPzogc3RyaW5nLFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2J1bGsgPSBidWxrO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmlkID0gam9iSWQgPz8gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pZCA/ICdPcGVuJyA6ICdVbmtub3duJztcbiAgICB0aGlzLl9iYXRjaGVzID0ge307XG4gICAgLy8gZGVmYXVsdCBlcnJvciBoYW5kbGVyIHRvIGtlZXAgdGhlIGxhdGVzdCBlcnJvclxuICAgIHRoaXMub24oJ2Vycm9yJywgKGVycm9yKSA9PiAodGhpcy5fZXJyb3IgPSBlcnJvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBsYXRlc3Qgam9iSW5mbyBmcm9tIGNhY2hlXG4gICAqL1xuICBpbmZvKCkge1xuICAgIC8vIGlmIGNhY2hlIGlzIG5vdCBhdmFpbGFibGUsIGNoZWNrIHRoZSBsYXRlc3RcbiAgICBpZiAoIXRoaXMuX2pvYkluZm8pIHtcbiAgICAgIHRoaXMuX2pvYkluZm8gPSB0aGlzLmNoZWNrKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9qb2JJbmZvO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gbmV3IGpvYiBhbmQgZ2V0IGpvYmluZm9cbiAgICovXG4gIG9wZW4oKTogUHJvbWlzZTxKb2JJbmZvPiB7XG4gICAgY29uc3QgYnVsayA9IHRoaXMuX2J1bGs7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIC8vIGlmIHNvYmplY3QgdHlwZSAvIG9wZXJhdGlvbiBpcyBub3QgcHJvdmlkZWRcbiAgICBpZiAoIXRoaXMudHlwZSB8fCAhdGhpcy5vcGVyYXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndHlwZSAvIG9wZXJhdGlvbiBpcyByZXF1aXJlZCB0byBvcGVuIGEgbmV3IGpvYicpO1xuICAgIH1cblxuICAgIC8vIGlmIG5vdCByZXF1ZXN0ZWQgb3BlbmluZyBqb2JcbiAgICBpZiAoIXRoaXMuX2pvYkluZm8pIHtcbiAgICAgIGxldCBvcGVyYXRpb24gPSB0aGlzLm9wZXJhdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ2hhcmRkZWxldGUnKSB7XG4gICAgICAgIG9wZXJhdGlvbiA9ICdoYXJkRGVsZXRlJztcbiAgICAgIH1cbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICdxdWVyeWFsbCcpIHtcbiAgICAgICAgb3BlcmF0aW9uID0gJ3F1ZXJ5QWxsJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJvZHkgPSBgXG48P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxqb2JJbmZvICB4bWxucz1cImh0dHA6Ly93d3cuZm9yY2UuY29tLzIwMDkvMDYvYXN5bmNhcGkvZGF0YWxvYWRcIj5cbiAgPG9wZXJhdGlvbj4ke29wZXJhdGlvbn08L29wZXJhdGlvbj5cbiAgPG9iamVjdD4ke3RoaXMudHlwZX08L29iamVjdD5cbiAgJHtcbiAgICBvcHRpb25zLmV4dElkRmllbGRcbiAgICAgID8gYDxleHRlcm5hbElkRmllbGROYW1lPiR7b3B0aW9ucy5leHRJZEZpZWxkfTwvZXh0ZXJuYWxJZEZpZWxkTmFtZT5gXG4gICAgICA6ICcnXG4gIH1cbiAgJHtcbiAgICBvcHRpb25zLmNvbmN1cnJlbmN5TW9kZVxuICAgICAgPyBgPGNvbmN1cnJlbmN5TW9kZT4ke29wdGlvbnMuY29uY3VycmVuY3lNb2RlfTwvY29uY3VycmVuY3lNb2RlPmBcbiAgICAgIDogJydcbiAgfVxuICAke1xuICAgIG9wdGlvbnMuYXNzaWdubWVudFJ1bGVJZFxuICAgICAgPyBgPGFzc2lnbm1lbnRSdWxlSWQ+JHtvcHRpb25zLmFzc2lnbm1lbnRSdWxlSWR9PC9hc3NpZ25tZW50UnVsZUlkPmBcbiAgICAgIDogJydcbiAgfVxuICA8Y29udGVudFR5cGU+Q1NWPC9jb250ZW50VHlwZT5cbjwvam9iSW5mbz5cbiAgICAgIGAudHJpbSgpO1xuXG4gICAgICB0aGlzLl9qb2JJbmZvID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBidWxrLl9yZXF1ZXN0PEpvYkluZm9SZXNwb25zZT4oe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBwYXRoOiAnL2pvYicsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3htbDsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXBwbGljYXRpb24veG1sJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmVtaXQoJ29wZW4nLCByZXMuam9iSW5mbyk7XG4gICAgICAgICAgdGhpcy5pZCA9IHJlcy5qb2JJbmZvLmlkO1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSByZXMuam9iSW5mby5zdGF0ZTtcbiAgICAgICAgICByZXR1cm4gcmVzLmpvYkluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2pvYkluZm87XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGJhdGNoIGluc3RhbmNlIGluIHRoZSBqb2JcbiAgICovXG4gIGNyZWF0ZUJhdGNoKCk6IEJhdGNoPFMsIE9wcj4ge1xuICAgIGNvbnN0IGJhdGNoID0gbmV3IEJhdGNoKHRoaXMpO1xuICAgIGJhdGNoLm9uKCdxdWV1ZScsICgpID0+IHtcbiAgICAgIHRoaXMuX2JhdGNoZXNbYmF0Y2guaWQhXSA9IGJhdGNoO1xuICAgIH0pO1xuICAgIHJldHVybiBiYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBiYXRjaCBpbnN0YW5jZSBzcGVjaWZpZWQgYnkgZ2l2ZW4gYmF0Y2ggSURcbiAgICovXG4gIGJhdGNoKGJhdGNoSWQ6IHN0cmluZyk6IEJhdGNoPFMsIE9wcj4ge1xuICAgIGxldCBiYXRjaCA9IHRoaXMuX2JhdGNoZXNbYmF0Y2hJZF07XG4gICAgaWYgKCFiYXRjaCkge1xuICAgICAgYmF0Y2ggPSBuZXcgQmF0Y2godGhpcywgYmF0Y2hJZCk7XG4gICAgICB0aGlzLl9iYXRjaGVzW2JhdGNoSWRdID0gYmF0Y2g7XG4gICAgfVxuICAgIHJldHVybiBiYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgbGF0ZXN0IGpvYiBzdGF0dXMgZnJvbSBzZXJ2ZXJcbiAgICovXG4gIGNoZWNrKCkge1xuICAgIGNvbnN0IGJ1bGsgPSB0aGlzLl9idWxrO1xuICAgIGNvbnN0IGxvZ2dlciA9IGJ1bGsuX2xvZ2dlcjtcblxuICAgIHRoaXMuX2pvYkluZm8gPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgam9iSWQgPSBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBidWxrLl9yZXF1ZXN0PEpvYkluZm9SZXNwb25zZT4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL2pvYi8nICsgam9iSWQsXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgICB9KTtcbiAgICAgIGxvZ2dlci5kZWJ1ZyhyZXMuam9iSW5mbyk7XG4gICAgICB0aGlzLmlkID0gcmVzLmpvYkluZm8uaWQ7XG4gICAgICB0aGlzLnR5cGUgPSByZXMuam9iSW5mby5vYmplY3Q7XG4gICAgICB0aGlzLm9wZXJhdGlvbiA9IHJlcy5qb2JJbmZvLm9wZXJhdGlvbiBhcyBPcHI7XG4gICAgICB0aGlzLnN0YXRlID0gcmVzLmpvYkluZm8uc3RhdGU7XG4gICAgICByZXR1cm4gcmVzLmpvYkluZm87XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB0aGlzLl9qb2JJbmZvO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhaXQgdGlsbCB0aGUgam9iIGlzIGFzc2lnbmVkIHRvIHNlcnZlclxuICAgKi9cbiAgcmVhZHkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5pZFxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5pZClcbiAgICAgIDogdGhpcy5vcGVuKCkudGhlbigoeyBpZCB9KSA9PiBpZCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBhbGwgcmVnaXN0ZXJlZCBiYXRjaCBpbmZvIGluIGpvYlxuICAgKi9cbiAgYXN5bmMgbGlzdCgpIHtcbiAgICBjb25zdCBidWxrID0gdGhpcy5fYnVsaztcbiAgICBjb25zdCBsb2dnZXIgPSBidWxrLl9sb2dnZXI7XG4gICAgY29uc3Qgam9iSWQgPSBhd2FpdCB0aGlzLnJlYWR5KCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYnVsay5fcmVxdWVzdDxCYXRjaEluZm9MaXN0UmVzcG9uc2U+KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBwYXRoOiAnL2pvYi8nICsgam9iSWQgKyAnL2JhdGNoJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgfSk7XG4gICAgbG9nZ2VyLmRlYnVnKHJlcy5iYXRjaEluZm9MaXN0LmJhdGNoSW5mbyk7XG4gICAgY29uc3QgYmF0Y2hJbmZvTGlzdCA9IEFycmF5LmlzQXJyYXkocmVzLmJhdGNoSW5mb0xpc3QuYmF0Y2hJbmZvKVxuICAgICAgPyByZXMuYmF0Y2hJbmZvTGlzdC5iYXRjaEluZm9cbiAgICAgIDogW3Jlcy5iYXRjaEluZm9MaXN0LmJhdGNoSW5mb107XG4gICAgcmV0dXJuIGJhdGNoSW5mb0xpc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2Ugb3BlbmVkIGpvYlxuICAgKi9cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBqb2JJbmZvID0gYXdhaXQgdGhpcy5fY2hhbmdlU3RhdGUoJ0Nsb3NlZCcpO1xuICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgam9iSW5mbyk7XG4gICAgICByZXR1cm4gam9iSW5mbztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0YXR1cyB0byBhYm9ydFxuICAgKi9cbiAgYXN5bmMgYWJvcnQoKSB7XG4gICAgaWYgKCF0aGlzLmlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBqb2JJbmZvID0gYXdhaXQgdGhpcy5fY2hhbmdlU3RhdGUoJ0Fib3J0ZWQnKTtcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgICAgdGhpcy5lbWl0KCdhYm9ydCcsIGpvYkluZm8pO1xuICAgICAgcmV0dXJuIGpvYkluZm87XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIF9jaGFuZ2VTdGF0ZShzdGF0ZTogSm9iU3RhdGUpIHtcbiAgICBjb25zdCBidWxrID0gdGhpcy5fYnVsaztcbiAgICBjb25zdCBsb2dnZXIgPSBidWxrLl9sb2dnZXI7XG5cbiAgICB0aGlzLl9qb2JJbmZvID0gKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGpvYklkID0gYXdhaXQgdGhpcy5yZWFkeSgpO1xuICAgICAgY29uc3QgYm9keSA9IGAgXG48P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgPGpvYkluZm8geG1sbnM9XCJodHRwOi8vd3d3LmZvcmNlLmNvbS8yMDA5LzA2L2FzeW5jYXBpL2RhdGFsb2FkXCI+XG4gIDxzdGF0ZT4ke3N0YXRlfTwvc3RhdGU+XG48L2pvYkluZm8+XG4gICAgICBgLnRyaW0oKTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGJ1bGsuX3JlcXVlc3Q8Sm9iSW5mb1Jlc3BvbnNlPih7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnL2pvYi8nICsgam9iSWQsXG4gICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3htbDsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgICB9KTtcbiAgICAgIGxvZ2dlci5kZWJ1ZyhyZXMuam9iSW5mbyk7XG4gICAgICB0aGlzLnN0YXRlID0gcmVzLmpvYkluZm8uc3RhdGU7XG4gICAgICByZXR1cm4gcmVzLmpvYkluZm87XG4gICAgfSkoKTtcbiAgICByZXR1cm4gdGhpcy5fam9iSW5mbztcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmNsYXNzIFBvbGxpbmdUaW1lb3V0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGpvYklkOiBzdHJpbmc7XG4gIGJhdGNoSWQ6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgam9iSWQ6IHN0cmluZywgYmF0Y2hJZDogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ1BvbGxpbmdUaW1lb3V0JztcbiAgICB0aGlzLmpvYklkID0gam9iSWQ7XG4gICAgdGhpcy5iYXRjaElkID0gYmF0Y2hJZDtcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogQmF0Y2ggKGV4dGVuZHMgV3JpdGFibGUpXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXRjaDxcbiAgUyBleHRlbmRzIFNjaGVtYSxcbiAgT3ByIGV4dGVuZHMgQnVsa09wZXJhdGlvblxuPiBleHRlbmRzIFdyaXRhYmxlIHtcbiAgam9iOiBKb2I8UywgT3ByPjtcbiAgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgX2J1bGs6IEJ1bGs8Uz47XG4gIF91cGxvYWRTdHJlYW06IFNlcmlhbGl6YWJsZTtcbiAgX2Rvd25sb2FkU3RyZWFtOiBQYXJzYWJsZTtcbiAgX2RhdGFTdHJlYW06IER1cGxleDtcbiAgX3Jlc3VsdDogUHJvbWlzZTxCYXRjaFJlc3VsdDxPcHI+PiB8IHVuZGVmaW5lZDtcbiAgX2Vycm9yOiBFcnJvciB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGpvYjogSm9iPFMsIE9wcj4sIGlkPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoeyBvYmplY3RNb2RlOiB0cnVlIH0pO1xuICAgIHRoaXMuam9iID0gam9iO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLl9idWxrID0gam9iLl9idWxrO1xuXG4gICAgLy8gZGVmYXVsdCBlcnJvciBoYW5kbGVyIHRvIGtlZXAgdGhlIGxhdGVzdCBlcnJvclxuICAgIHRoaXMub24oJ2Vycm9yJywgKGVycm9yKSA9PiAodGhpcy5fZXJyb3IgPSBlcnJvcikpO1xuXG4gICAgLy9cbiAgICAvLyBzZXR1cCBkYXRhIHN0cmVhbXNcbiAgICAvL1xuICAgIGNvbnN0IGNvbnZlcnRlck9wdGlvbnMgPSB7IG51bGxWYWx1ZTogJyNOL0EnIH07XG4gICAgY29uc3QgdXBsb2FkU3RyZWFtID0gKHRoaXMuX3VwbG9hZFN0cmVhbSA9IG5ldyBTZXJpYWxpemFibGUoKSk7XG4gICAgY29uc3QgdXBsb2FkRGF0YVN0cmVhbSA9IHVwbG9hZFN0cmVhbS5zdHJlYW0oJ2NzdicsIGNvbnZlcnRlck9wdGlvbnMpO1xuICAgIGNvbnN0IGRvd25sb2FkU3RyZWFtID0gKHRoaXMuX2Rvd25sb2FkU3RyZWFtID0gbmV3IFBhcnNhYmxlKCkpO1xuICAgIGNvbnN0IGRvd25sb2FkRGF0YVN0cmVhbSA9IGRvd25sb2FkU3RyZWFtLnN0cmVhbSgnY3N2JywgY29udmVydGVyT3B0aW9ucyk7XG5cbiAgICB0aGlzLm9uKCdmaW5pc2gnLCAoKSA9PiB1cGxvYWRTdHJlYW0uZW5kKCkpO1xuICAgIHVwbG9hZERhdGFTdHJlYW0ub25jZSgncmVhZGFibGUnLCBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBlbnN1cmUgdGhlIGpvYiBpcyBvcGVuZWQgaW4gc2VydmVyIG9yIGpvYiBpZCBpcyBhbHJlYWR5IGFzc2lnbmVkXG4gICAgICAgIGF3YWl0IHRoaXMuam9iLnJlYWR5KCk7XG4gICAgICAgIC8vIHBpcGUgdXBsb2FkIGRhdGEgdG8gYmF0Y2ggQVBJIHJlcXVlc3Qgc3RyZWFtXG4gICAgICAgIHVwbG9hZERhdGFTdHJlYW0ucGlwZSh0aGlzLl9jcmVhdGVSZXF1ZXN0U3RyZWFtKCkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZHVwbGV4IGRhdGEgc3RyZWFtLCBvcGVuZWQgYWNjZXNzIHRvIEFQSSBwcm9ncmFtbWVycyBieSBCYXRjaCNzdHJlYW0oKVxuICAgIHRoaXMuX2RhdGFTdHJlYW0gPSBjb25jYXRTdHJlYW1zQXNEdXBsZXgoXG4gICAgICB1cGxvYWREYXRhU3RyZWFtLFxuICAgICAgZG93bmxvYWREYXRhU3RyZWFtLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCBiYXRjaCBBUEkgYW5kIGNyZWF0ZSBzdHJlYW0gaW5zdGFuY2Ugb2YgcmVxdWVzdC9yZXNwb25zZVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVJlcXVlc3RTdHJlYW0oKSB7XG4gICAgY29uc3QgYnVsayA9IHRoaXMuX2J1bGs7XG4gICAgY29uc3QgbG9nZ2VyID0gYnVsay5fbG9nZ2VyO1xuICAgIGNvbnN0IHJlcSA9IGJ1bGsuX3JlcXVlc3Q8QmF0Y2hJbmZvUmVzcG9uc2U+KHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGF0aDogJy9qb2IvJyArIHRoaXMuam9iLmlkICsgJy9iYXRjaCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9jc3YnLFxuICAgICAgfSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgfSk7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcTtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKHJlcy5iYXRjaEluZm8pO1xuICAgICAgICB0aGlzLmlkID0gcmVzLmJhdGNoSW5mby5pZDtcbiAgICAgICAgdGhpcy5lbWl0KCdxdWV1ZScsIHJlcy5iYXRjaEluZm8pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gICAgcmV0dXJuIHJlcS5zdHJlYW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBXcml0YWJsZVxuICAgKi9cbiAgX3dyaXRlKHJlY29yZF86IFJlY29yZCwgZW5jOiBzdHJpbmcsIGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgeyBJZCwgdHlwZSwgYXR0cmlidXRlcywgLi4ucnJlYyB9ID0gcmVjb3JkXztcbiAgICBsZXQgcmVjb3JkO1xuICAgIHN3aXRjaCAodGhpcy5qb2Iub3BlcmF0aW9uKSB7XG4gICAgICBjYXNlICdpbnNlcnQnOlxuICAgICAgICByZWNvcmQgPSBycmVjO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICBjYXNlICdoYXJkRGVsZXRlJzpcbiAgICAgICAgcmVjb3JkID0geyBJZCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlY29yZCA9IHsgSWQsIC4uLnJyZWMgfTtcbiAgICB9XG4gICAgdGhpcy5fdXBsb2FkU3RyZWFtLndyaXRlKHJlY29yZCwgZW5jLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkdXBsZXggc3RyZWFtIHdoaWNoIGFjY2VwdHMgQ1NWIGRhdGEgaW5wdXQgYW5kIGJhdGNoIHJlc3VsdCBvdXRwdXRcbiAgICovXG4gIHN0cmVhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVN0cmVhbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIGJhdGNoIG9wZXJhdGlvblxuICAgKi9cbiAgZXhlY3V0ZShpbnB1dD86IHN0cmluZyB8IFJlY29yZFtdIHwgUmVhZGFibGUpIHtcbiAgICAvLyBpZiBiYXRjaCBpcyBhbHJlYWR5IGV4ZWN1dGVkXG4gICAgaWYgKHRoaXMuX3Jlc3VsdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYXRjaCBhbHJlYWR5IGV4ZWN1dGVkLicpO1xuICAgIH1cblxuICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMub25jZSgncmVzcG9uc2UnLCByZXNvbHZlKTtcbiAgICAgIHRoaXMub25jZSgnZXJyb3InLCByZWplY3QpO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzT2JqZWN0KGlucHV0KSAmJiAncGlwZScgaW4gaW5wdXQgJiYgaXNGdW5jdGlvbihpbnB1dC5waXBlKSkge1xuICAgICAgLy8gaWYgaW5wdXQgaGFzIHN0cmVhbS5SZWFkYWJsZSBpbnRlcmZhY2VcbiAgICAgIGlucHV0LnBpcGUodGhpcy5fZGF0YVN0cmVhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlY29yZCBvZiBpbnB1dCkge1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJlY29yZCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVjb3JkW2tleV0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICByZWNvcmRba2V5XSA9IFN0cmluZyhyZWNvcmRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMud3JpdGUocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2RhdGFTdHJlYW0ud3JpdGUoaW5wdXQsICd1dGY4Jyk7XG4gICAgICAgIHRoaXMuX2RhdGFTdHJlYW0uZW5kKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIEJhdGNoIGluc3RhbmNlIGZvciBjaGFpbmluZ1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcnVuID0gdGhpcy5leGVjdXRlO1xuXG4gIGV4ZWMgPSB0aGlzLmV4ZWN1dGU7XG5cbiAgLyoqXG4gICAqIFByb21pc2UvQSsgaW50ZXJmYWNlXG4gICAqIERlbGVnYXRlIHRvIHByb21pc2UsIHJldHVybiBwcm9taXNlIGluc3RhbmNlIGZvciBiYXRjaCByZXN1bHRcbiAgICovXG4gIHRoZW4oXG4gICAgb25SZXNvbHZlZDogKHJlczogQmF0Y2hSZXN1bHQ8T3ByPikgPT4gdm9pZCxcbiAgICBvblJlamVjdDogKGVycjogYW55KSA9PiB2b2lkLFxuICApIHtcbiAgICBpZiAoIXRoaXMuX3Jlc3VsdCkge1xuICAgICAgdGhpcy5leGVjdXRlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZXN1bHQhLnRoZW4ob25SZXNvbHZlZCwgb25SZWplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBsYXRlc3QgYmF0Y2ggc3RhdHVzIGluIHNlcnZlclxuICAgKi9cbiAgYXN5bmMgY2hlY2soKSB7XG4gICAgY29uc3QgYnVsayA9IHRoaXMuX2J1bGs7XG4gICAgY29uc3QgbG9nZ2VyID0gYnVsay5fbG9nZ2VyO1xuICAgIGNvbnN0IGpvYklkID0gdGhpcy5qb2IuaWQ7XG4gICAgY29uc3QgYmF0Y2hJZCA9IHRoaXMuaWQ7XG5cbiAgICBpZiAoIWpvYklkIHx8ICFiYXRjaElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhdGNoIG5vdCBzdGFydGVkLicpO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBidWxrLl9yZXF1ZXN0PEJhdGNoSW5mb1Jlc3BvbnNlPih7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgcGF0aDogJy9qb2IvJyArIGpvYklkICsgJy9iYXRjaC8nICsgYmF0Y2hJZCxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgfSk7XG4gICAgbG9nZ2VyLmRlYnVnKHJlcy5iYXRjaEluZm8pO1xuICAgIHJldHVybiByZXMuYmF0Y2hJbmZvO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvbGxpbmcgdGhlIGJhdGNoIHJlc3VsdCBhbmQgcmV0cmlldmVcbiAgICovXG4gIHBvbGwoaW50ZXJ2YWw6IG51bWJlciwgdGltZW91dDogbnVtYmVyKSB7XG4gICAgY29uc3Qgam9iSWQgPSB0aGlzLmpvYi5pZDtcbiAgICBjb25zdCBiYXRjaElkID0gdGhpcy5pZDtcblxuICAgIGlmICgham9iSWQgfHwgIWJhdGNoSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQmF0Y2ggbm90IHN0YXJ0ZWQuJyk7XG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHBvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGlmIChzdGFydFRpbWUgKyB0aW1lb3V0IDwgbm93KSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBQb2xsaW5nVGltZW91dEVycm9yKFxuICAgICAgICAgICdQb2xsaW5nIHRpbWUgb3V0LiBKb2IgSWQgPSAnICsgam9iSWQgKyAnICwgYmF0Y2ggSWQgPSAnICsgYmF0Y2hJZCxcbiAgICAgICAgICBqb2JJZCxcbiAgICAgICAgICBiYXRjaElkLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHJlcztcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcyA9IGF3YWl0IHRoaXMuY2hlY2soKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0ZSA9PT0gJ0ZhaWxlZCcpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHJlcy5udW1iZXJSZWNvcmRzUHJvY2Vzc2VkLCAxMCkgPiAwKSB7XG4gICAgICAgICAgdGhpcy5yZXRyaWV2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IocmVzLnN0YXRlTWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlcy5zdGF0ZSA9PT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAgICAgdGhpcy5yZXRyaWV2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbWl0KCdwcm9ncmVzcycsIHJlcyk7XG4gICAgICAgIHNldFRpbWVvdXQocG9sbCwgaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH07XG4gICAgc2V0VGltZW91dChwb2xsLCBpbnRlcnZhbCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYmF0Y2ggcmVzdWx0XG4gICAqL1xuICBhc3luYyByZXRyaWV2ZSgpIHtcbiAgICBjb25zdCBidWxrID0gdGhpcy5fYnVsaztcbiAgICBjb25zdCBqb2JJZCA9IHRoaXMuam9iLmlkO1xuICAgIGNvbnN0IGpvYiA9IHRoaXMuam9iO1xuICAgIGNvbnN0IGJhdGNoSWQgPSB0aGlzLmlkO1xuXG4gICAgaWYgKCFqb2JJZCB8fCAhYmF0Y2hJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYXRjaCBub3Qgc3RhcnRlZC4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGJ1bGsuX3JlcXVlc3Q8XG4gICAgICAgIEJ1bGtJbmdlc3RSZXN1bHRSZXNwb25zZSB8IEJ1bGtRdWVyeVJlc3VsdFJlc3BvbnNlXG4gICAgICA+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy9qb2IvJyArIGpvYklkICsgJy9iYXRjaC8nICsgYmF0Y2hJZCArICcvcmVzdWx0JyxcbiAgICAgIH0pO1xuICAgICAgbGV0IHJlc3VsdHM6IEJ1bGtJbmdlc3RCYXRjaFJlc3VsdCB8IEJ1bGtRdWVyeUJhdGNoUmVzdWx0O1xuICAgICAgaWYgKGpvYi5vcGVyYXRpb24gPT09ICdxdWVyeScgfHwgam9iLm9wZXJhdGlvbiA9PT0gJ3F1ZXJ5QWxsJykge1xuICAgICAgICBjb25zdCByZXMgPSByZXNwIGFzIEJ1bGtRdWVyeVJlc3VsdFJlc3BvbnNlO1xuICAgICAgICBsZXQgcmVzdWx0SWQgPSByZXNbJ3Jlc3VsdC1saXN0J10ucmVzdWx0O1xuICAgICAgICByZXN1bHRzID0gKEFycmF5LmlzQXJyYXkocmVzdWx0SWQpXG4gICAgICAgICAgPyByZXN1bHRJZFxuICAgICAgICAgIDogW3Jlc3VsdElkXVxuICAgICAgICApLm1hcCgoaWQpID0+ICh7IGlkLCBiYXRjaElkLCBqb2JJZCB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXMgPSByZXNwIGFzIEJ1bGtJbmdlc3RSZXN1bHRSZXNwb25zZTtcbiAgICAgICAgcmVzdWx0cyA9IHJlcy5tYXAoKHJldCkgPT4gKHtcbiAgICAgICAgICBpZDogcmV0LklkIHx8IG51bGwsXG4gICAgICAgICAgc3VjY2VzczogcmV0LlN1Y2Nlc3MgPT09ICd0cnVlJyxcbiAgICAgICAgICBlcnJvcnM6IHJldC5FcnJvciA/IFtyZXQuRXJyb3JdIDogW10sXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCByZXN1bHRzKTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHF1ZXJ5IHJlc3VsdCBhcyBhIHJlY29yZCBzdHJlYW1cbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlc3VsdElkIC0gUmVzdWx0IGlkXG4gICAqIEByZXR1cm5zIHtSZWNvcmRTdHJlYW19IC0gUmVjb3JkIHN0cmVhbSwgY29udmVydGlibGUgdG8gQ1NWIGRhdGEgc3RyZWFtXG4gICAqL1xuICByZXN1bHQocmVzdWx0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGpvYklkID0gdGhpcy5qb2IuaWQ7XG4gICAgY29uc3QgYmF0Y2hJZCA9IHRoaXMuaWQ7XG4gICAgaWYgKCFqb2JJZCB8fCAhYmF0Y2hJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYXRjaCBub3Qgc3RhcnRlZC4nKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0U3RyZWFtID0gbmV3IFBhcnNhYmxlKCk7XG4gICAgY29uc3QgcmVzdWx0RGF0YVN0cmVhbSA9IHJlc3VsdFN0cmVhbS5zdHJlYW0oJ2NzdicpO1xuICAgIHRoaXMuX2J1bGtcbiAgICAgIC5fcmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcvam9iLycgKyBqb2JJZCArICcvYmF0Y2gvJyArIGJhdGNoSWQgKyAnL3Jlc3VsdC8nICsgcmVzdWx0SWQsXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICB9KVxuICAgICAgLnN0cmVhbSgpXG4gICAgICAucGlwZShyZXN1bHREYXRhU3RyZWFtKTtcbiAgICByZXR1cm4gcmVzdWx0U3RyZWFtO1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKlxuICovXG5jbGFzcyBCdWxrQXBpPFMgZXh0ZW5kcyBTY2hlbWE+IGV4dGVuZHMgSHR0cEFwaTxTPiB7XG4gIGJlZm9yZVNlbmQocmVxdWVzdDogSHR0cFJlcXVlc3QpIHtcbiAgICByZXF1ZXN0LmhlYWRlcnMgPSB7XG4gICAgICAuLi5yZXF1ZXN0LmhlYWRlcnMsXG4gICAgICAnWC1TRkRDLVNFU1NJT04nOiB0aGlzLl9jb25uLmFjY2Vzc1Rva2VuID8/ICcnLFxuICAgIH07XG4gIH1cblxuICBpc1Nlc3Npb25FeHBpcmVkKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDAwICYmXG4gICAgICAvPGV4Y2VwdGlvbkNvZGU+SW52YWxpZFNlc3Npb25JZDxcXC9leGNlcHRpb25Db2RlPi8udGVzdChyZXNwb25zZS5ib2R5KVxuICAgICk7XG4gIH1cblxuICBoYXNFcnJvckluUmVzcG9uc2VCb2R5KGJvZHk6IGFueSkge1xuICAgIHJldHVybiAhIWJvZHkuZXJyb3I7XG4gIH1cblxuICBwYXJzZUVycm9yKGJvZHk6IGFueSkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvckNvZGU6IGJvZHkuZXJyb3IuZXhjZXB0aW9uQ29kZSxcbiAgICAgIG1lc3NhZ2U6IGJvZHkuZXJyb3IuZXhjZXB0aW9uTWVzc2FnZSxcbiAgICB9O1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKipcbiAqIENsYXNzIGZvciBCdWxrIEFQSVxuICpcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgQnVsazxTIGV4dGVuZHMgU2NoZW1hPiB7XG4gIF9jb25uOiBDb25uZWN0aW9uPFM+O1xuICBfbG9nZ2VyOiBMb2dnZXI7XG5cbiAgLyoqXG4gICAqIFBvbGxpbmcgaW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzXG4gICAqL1xuICBwb2xsSW50ZXJ2YWwgPSAxMDAwO1xuXG4gIC8qKlxuICAgKiBQb2xsaW5nIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBwb2xsVGltZW91dCA9IDEwMDAwO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29ubjogQ29ubmVjdGlvbjxTPikge1xuICAgIHRoaXMuX2Nvbm4gPSBjb25uO1xuICAgIHRoaXMuX2xvZ2dlciA9IGNvbm4uX2xvZ2dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgX3JlcXVlc3Q8VD4ocmVxdWVzdF86IEJ1bGtSZXF1ZXN0KSB7XG4gICAgY29uc3QgY29ubiA9IHRoaXMuX2Nvbm47XG4gICAgY29uc3QgeyBwYXRoLCByZXNwb25zZVR5cGUsIC4uLnJyZXEgfSA9IHJlcXVlc3RfO1xuICAgIGNvbnN0IGJhc2VVcmwgPSBbY29ubi5pbnN0YW5jZVVybCwgJ3NlcnZpY2VzL2FzeW5jJywgY29ubi52ZXJzaW9uXS5qb2luKFxuICAgICAgJy8nLFxuICAgICk7XG4gICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgIC4uLnJyZXEsXG4gICAgICB1cmw6IGJhc2VVcmwgKyBwYXRoLFxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBCdWxrQXBpKHRoaXMuX2Nvbm4sIHsgcmVzcG9uc2VUeXBlIH0pLnJlcXVlc3Q8VD4ocmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBzdGFydCBidWxrbG9hZCBqb2IgYW5kIGJhdGNoXG4gICAqL1xuICBsb2FkPE9wciBleHRlbmRzIEJ1bGtPcGVyYXRpb24+KFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBvcGVyYXRpb246IE9wcixcbiAgICBpbnB1dD86IFJlY29yZFtdIHwgUmVhZGFibGUgfCBzdHJpbmcsXG4gICk6IEJhdGNoPFMsIE9wcj47XG4gIGxvYWQ8T3ByIGV4dGVuZHMgQnVsa09wZXJhdGlvbj4oXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIG9wZXJhdGlvbjogT3ByLFxuICAgIG9wdGlvbnNPcklucHV0PzogQnVsa09wdGlvbnMgfCBSZWNvcmRbXSB8IFJlYWRhYmxlIHwgc3RyaW5nLFxuICAgIGlucHV0PzogUmVjb3JkW10gfCBSZWFkYWJsZSB8IHN0cmluZyxcbiAgKTogQmF0Y2g8UywgT3ByPjtcbiAgbG9hZDxPcHIgZXh0ZW5kcyBCdWxrT3BlcmF0aW9uPihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uOiBPcHIsXG4gICAgb3B0aW9uc09ySW5wdXQ/OiBCdWxrT3B0aW9ucyB8IFJlY29yZFtdIHwgUmVhZGFibGUgfCBzdHJpbmcsXG4gICAgaW5wdXQ/OiBSZWNvcmRbXSB8IFJlYWRhYmxlIHwgc3RyaW5nLFxuICApIHtcbiAgICBsZXQgb3B0aW9uczogQnVsa09wdGlvbnMgPSB7fTtcbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygb3B0aW9uc09ySW5wdXQgPT09ICdzdHJpbmcnIHx8XG4gICAgICBBcnJheS5pc0FycmF5KG9wdGlvbnNPcklucHV0KSB8fFxuICAgICAgKGlzT2JqZWN0KG9wdGlvbnNPcklucHV0KSAmJlxuICAgICAgICAncGlwZScgaW4gb3B0aW9uc09ySW5wdXQgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnNPcklucHV0LnBpcGUgPT09ICdmdW5jdGlvbicpXG4gICAgKSB7XG4gICAgICAvLyB3aGVuIG9wdGlvbnMgaXMgbm90IHBsYWluIGhhc2ggb2JqZWN0LCBpdCBpcyBvbWl0dGVkXG4gICAgICBpbnB1dCA9IG9wdGlvbnNPcklucHV0O1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9uc09ySW5wdXQgYXMgQnVsa09wdGlvbnM7XG4gICAgfVxuICAgIGNvbnN0IGpvYiA9IHRoaXMuY3JlYXRlSm9iKHR5cGUsIG9wZXJhdGlvbiwgb3B0aW9ucyk7XG4gICAgY29uc3QgYmF0Y2ggPSBqb2IuY3JlYXRlQmF0Y2goKTtcbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4gam9iLmNsb3NlKCk7XG4gICAgY29uc3QgY2xlYW51cE9uRXJyb3IgPSAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgaWYgKGVyci5uYW1lICE9PSAnUG9sbGluZ1RpbWVvdXQnKSB7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGJhdGNoLm9uKCdyZXNwb25zZScsIGNsZWFudXApO1xuICAgIGJhdGNoLm9uKCdlcnJvcicsIGNsZWFudXBPbkVycm9yKTtcbiAgICBiYXRjaC5vbigncXVldWUnLCAoKSA9PiB7XG4gICAgICBiYXRjaD8ucG9sbCh0aGlzLnBvbGxJbnRlcnZhbCwgdGhpcy5wb2xsVGltZW91dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJhdGNoLmV4ZWN1dGUoaW5wdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgYnVsayBxdWVyeSBhbmQgZ2V0IHJlY29yZCBzdHJlYW1cbiAgICovXG4gIHF1ZXJ5KHNvcWw6IHN0cmluZykge1xuICAgIGNvbnN0IG0gPSBzb3FsLnJlcGxhY2UoL1xcKFtcXHNcXFNdK1xcKS9nLCAnJykubWF0Y2goL0ZST01cXHMrKFxcdyspL2kpO1xuICAgIGlmICghbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTm8gc29iamVjdCB0eXBlIGZvdW5kIGluIHF1ZXJ5LCBtYXliZSBjYXVzZWQgYnkgaW52YWxpZCBTT1FMLicsXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gbVsxXTtcbiAgICBjb25zdCByZWNvcmRTdHJlYW0gPSBuZXcgUGFyc2FibGUoKTtcbiAgICBjb25zdCBkYXRhU3RyZWFtID0gcmVjb3JkU3RyZWFtLnN0cmVhbSgnY3N2Jyk7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB0aGlzLmxvYWQodHlwZSwgJ3F1ZXJ5Jywgc29xbCk7XG4gICAgICAgIGNvbnN0IHN0cmVhbXMgPSByZXN1bHRzLm1hcCgocmVzdWx0KSA9PlxuICAgICAgICAgIHRoaXMuam9iKHJlc3VsdC5qb2JJZClcbiAgICAgICAgICAgIC5iYXRjaChyZXN1bHQuYmF0Y2hJZClcbiAgICAgICAgICAgIC5yZXN1bHQocmVzdWx0LmlkKVxuICAgICAgICAgICAgLnN0cmVhbSgpLFxuICAgICAgICApO1xuICAgICAgICBqb2luU3RyZWFtcyhzdHJlYW1zKS5waXBlKGRhdGFTdHJlYW0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlY29yZFN0cmVhbS5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgICByZXR1cm4gcmVjb3JkU3RyZWFtO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBqb2IgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUpvYjxPcHIgZXh0ZW5kcyBCdWxrT3BlcmF0aW9uPihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgb3BlcmF0aW9uOiBPcHIsXG4gICAgb3B0aW9uczogQnVsa09wdGlvbnMgPSB7fSxcbiAgKSB7XG4gICAgcmV0dXJuIG5ldyBKb2IodGhpcywgdHlwZSwgb3BlcmF0aW9uLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBqb2IgaW5zdGFuY2Ugc3BlY2lmaWVkIGJ5IGdpdmVuIGpvYiBJRFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gam9iSWQgLSBKb2IgSURcbiAgICogQHJldHVybnMge0J1bGt+Sm9ifVxuICAgKi9cbiAgam9iPE9wciBleHRlbmRzIEJ1bGtPcGVyYXRpb24+KGpvYklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IEpvYjxTLCBPcHI+KHRoaXMsIG51bGwsIG51bGwsIG51bGwsIGpvYklkKTtcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qXG4gKiBSZWdpc3RlciBob29rIGluIGNvbm5lY3Rpb24gaW5zdGFudGlhdGlvbiBmb3IgZHluYW1pY2FsbHkgYWRkaW5nIHRoaXMgQVBJIG1vZHVsZSBmZWF0dXJlc1xuICovXG5yZWdpc3Rlck1vZHVsZSgnYnVsaycsIChjb25uKSA9PiBuZXcgQnVsayhjb25uKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1bGs7XG4iXX0=