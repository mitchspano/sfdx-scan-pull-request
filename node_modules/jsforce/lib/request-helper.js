"use strict";

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

exports.createHttpRequestHandlerStreams = createHttpRequestHandlerStreams;
exports.isRedirect = isRedirect;
exports.performRedirectRequest = performRedirectRequest;
exports.executeWithTimeout = executeWithTimeout;

var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _stream = require("stream");

var _stream2 = require("./util/stream");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 *
 */
function createHttpRequestHandlerStreams(req) {
  const {
    body: reqBody
  } = req;
  const input = new _stream.PassThrough();
  const output = new _stream.PassThrough();
  const duplex = (0, _stream2.concatStreamsAsDuplex)(input, output);

  if (typeof reqBody !== 'undefined') {
    (0, _setTimeout2.default)(() => {
      duplex.end(reqBody, 'utf8');
    }, 0);
  }

  duplex.on('response', async res => {
    if (duplex.listenerCount('complete') > 0) {
      const resBody = await (0, _stream2.readAll)(duplex);
      duplex.emit('complete', _objectSpread(_objectSpread({}, res), {}, {
        body: resBody
      }));
    }
  });
  return {
    input,
    output,
    stream: duplex
  };
}

const redirectStatuses = new _set.default([301, 302, 303, 307, 308]);
/**
 *
 */

function isRedirect(status) {
  return redirectStatuses.has(status);
}
/**
 *
 */


const MAX_REDIRECT_COUNT = 10;
/**
 *
 */

function performRedirectRequest(req, res, followRedirect, counter, redirectCallback) {
  if (counter >= MAX_REDIRECT_COUNT) {
    throw new Error('Reached to maximum redirect count');
  }

  const redirectUrl = res.headers['location'];

  if (!redirectUrl) {
    throw new Error('No redirect URI found');
  }

  const getRedirectRequest = typeof followRedirect === 'function' ? followRedirect : () => ({
    method: 'GET',
    url: redirectUrl,
    headers: req.headers
  });
  const nextReqParams = getRedirectRequest(redirectUrl);

  if (!nextReqParams) {
    throw new Error('Cannot handle redirect for ' + redirectUrl);
  }

  redirectCallback(nextReqParams);
}
/**
 *
 */


async function executeWithTimeout(execFn, msec, cancelCallback) {
  let timeout = false;
  let pid = msec != null ? (0, _setTimeout2.default)(() => {
    timeout = true;
    cancelCallback === null || cancelCallback === void 0 ? void 0 : cancelCallback();
  }, msec) : undefined;
  let res;

  try {
    res = await execFn();
  } finally {
    if (pid) {
      clearTimeout(pid);
    }
  }

  if (timeout) {
    throw new Error('Request Timeout');
  }

  return res;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1ZXN0LWhlbHBlci50cyJdLCJuYW1lcyI6WyJjcmVhdGVIdHRwUmVxdWVzdEhhbmRsZXJTdHJlYW1zIiwicmVxIiwiYm9keSIsInJlcUJvZHkiLCJpbnB1dCIsIlBhc3NUaHJvdWdoIiwib3V0cHV0IiwiZHVwbGV4IiwiZW5kIiwib24iLCJyZXMiLCJsaXN0ZW5lckNvdW50IiwicmVzQm9keSIsImVtaXQiLCJzdHJlYW0iLCJyZWRpcmVjdFN0YXR1c2VzIiwiaXNSZWRpcmVjdCIsInN0YXR1cyIsImhhcyIsIk1BWF9SRURJUkVDVF9DT1VOVCIsInBlcmZvcm1SZWRpcmVjdFJlcXVlc3QiLCJmb2xsb3dSZWRpcmVjdCIsImNvdW50ZXIiLCJyZWRpcmVjdENhbGxiYWNrIiwiRXJyb3IiLCJyZWRpcmVjdFVybCIsImhlYWRlcnMiLCJnZXRSZWRpcmVjdFJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJuZXh0UmVxUGFyYW1zIiwiZXhlY3V0ZVdpdGhUaW1lb3V0IiwiZXhlY0ZuIiwibXNlYyIsImNhbmNlbENhbGxiYWNrIiwidGltZW91dCIsInBpZCIsInVuZGVmaW5lZCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSwrQkFBVCxDQUF5Q0MsR0FBekMsRUFBMkQ7QUFDaEUsUUFBTTtBQUFFQyxJQUFBQSxJQUFJLEVBQUVDO0FBQVIsTUFBb0JGLEdBQTFCO0FBQ0EsUUFBTUcsS0FBSyxHQUFHLElBQUlDLG1CQUFKLEVBQWQ7QUFDQSxRQUFNQyxNQUFNLEdBQUcsSUFBSUQsbUJBQUosRUFBZjtBQUNBLFFBQU1FLE1BQU0sR0FBRyxvQ0FBc0JILEtBQXRCLEVBQTZCRSxNQUE3QixDQUFmOztBQUNBLE1BQUksT0FBT0gsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNsQyw4QkFBVyxNQUFNO0FBQ2ZJLE1B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ZXNDb250ZW50IjpbImltcG9ydCB7IFBhc3NUaHJvdWdoIH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCB7IGNvbmNhdFN0cmVhbXNBc0R1cGxleCwgcmVhZEFsbCB9IGZyb20gJy4vdXRpbC9zdHJlYW0nO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBSZXF1ZXN0T3B0aW9ucywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0dHBSZXF1ZXN0SGFuZGxlclN0cmVhbXMocmVxOiBIdHRwUmVxdWVzdCkge1xuICBjb25zdCB7IGJvZHk6IHJlcUJvZHkgfSA9IHJlcTtcbiAgY29uc3QgaW5wdXQgPSBuZXcgUGFzc1Rocm91Z2goKTtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFBhc3NUaHJvdWdoKCk7XG4gIGNvbnN0IGR1cGxleCA9IGNvbmNhdFN0cmVhbXNBc0R1cGxleChpbnB1dCwgb3V0cHV0KTtcbiAgaWYgKHR5cGVvZiByZXFCb2R5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZHVwbGV4LmVuZChyZXFCb2R5LCAndXRmOCcpO1xuICAgIH0sIDApO1xuICB9XG4gIGR1cGxleC5vbigncmVzcG9uc2UnLCBhc3luYyAocmVzKSA9PiB7XG4gICAgaWYgKGR1cGxleC5saXN0ZW5lckNvdW50KCdjb21wbGV0ZScpID4gMCkge1xuICAgICAgY29uc3QgcmVzQm9keSA9IGF3YWl0IHJlYWRBbGwoZHVwbGV4KTtcbiAgICAgIGR1cGxleC5lbWl0KCdjb21wbGV0ZScsIHtcbiAgICAgICAgLi4ucmVzLFxuICAgICAgICBib2R5OiByZXNCb2R5LFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHsgaW5wdXQsIG91dHB1dCwgc3RyZWFtOiBkdXBsZXggfTtcbn1cblxuY29uc3QgcmVkaXJlY3RTdGF0dXNlcyA9IG5ldyBTZXQoWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XSk7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIpIHtcbiAgcmV0dXJuIHJlZGlyZWN0U3RhdHVzZXMuaGFzKHN0YXR1cyk7XG59XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgTUFYX1JFRElSRUNUX0NPVU5UID0gMTA7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1SZWRpcmVjdFJlcXVlc3QoXG4gIHJlcTogSHR0cFJlcXVlc3QsXG4gIHJlczogT21pdDxIdHRwUmVzcG9uc2UsICdib2R5Jz4sXG4gIGZvbGxvd1JlZGlyZWN0OiBOb25OdWxsYWJsZTxIdHRwUmVxdWVzdE9wdGlvbnNbJ2ZvbGxvd1JlZGlyZWN0J10+LFxuICBjb3VudGVyOiBudW1iZXIsXG4gIHJlZGlyZWN0Q2FsbGJhY2s6IChyZXE6IEh0dHBSZXF1ZXN0KSA9PiB2b2lkLFxuKSB7XG4gIGlmIChjb3VudGVyID49IE1BWF9SRURJUkVDVF9DT1VOVCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY2hlZCB0byBtYXhpbXVtIHJlZGlyZWN0IGNvdW50Jyk7XG4gIH1cbiAgY29uc3QgcmVkaXJlY3RVcmwgPSByZXMuaGVhZGVyc1snbG9jYXRpb24nXTtcbiAgaWYgKCFyZWRpcmVjdFVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gcmVkaXJlY3QgVVJJIGZvdW5kJyk7XG4gIH1cbiAgY29uc3QgZ2V0UmVkaXJlY3RSZXF1ZXN0ID1cbiAgICB0eXBlb2YgZm9sbG93UmVkaXJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgID8gZm9sbG93UmVkaXJlY3RcbiAgICAgIDogKCkgPT4gKHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnIGFzIGNvbnN0LFxuICAgICAgICAgIHVybDogcmVkaXJlY3RVcmwsXG4gICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgIH0pO1xuICBjb25zdCBuZXh0UmVxUGFyYW1zID0gZ2V0UmVkaXJlY3RSZXF1ZXN0KHJlZGlyZWN0VXJsKTtcbiAgaWYgKCFuZXh0UmVxUGFyYW1zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaGFuZGxlIHJlZGlyZWN0IGZvciAnICsgcmVkaXJlY3RVcmwpO1xuICB9XG4gIHJlZGlyZWN0Q2FsbGJhY2sobmV4dFJlcVBhcmFtcyk7XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVXaXRoVGltZW91dDxUPihcbiAgZXhlY0ZuOiAoKSA9PiBQcm9taXNlPFQ+LFxuICBtc2VjOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGNhbmNlbENhbGxiYWNrPzogKCkgPT4gdm9pZCxcbik6IFByb21pc2U8VD4ge1xuICBsZXQgdGltZW91dCA9IGZhbHNlO1xuICBsZXQgcGlkID1cbiAgICBtc2VjICE9IG51bGxcbiAgICAgID8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGltZW91dCA9IHRydWU7XG4gICAgICAgICAgY2FuY2VsQ2FsbGJhY2s/LigpO1xuICAgICAgICB9LCBtc2VjKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIGxldCByZXM7XG4gIHRyeSB7XG4gICAgcmVzID0gYXdhaXQgZXhlY0ZuKCk7XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKHBpZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHBpZCk7XG4gICAgfVxuICB9XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IFRpbWVvdXQnKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuIl19