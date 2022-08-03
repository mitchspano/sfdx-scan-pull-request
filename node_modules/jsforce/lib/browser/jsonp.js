"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.promise");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _stream = require("stream");

/**
 *
 */
let _index = 0;

async function processJsonpRequest(params, jsonpParam, timeout) {
  if (params.method.toUpperCase() !== 'GET') {
    throw new Error('JSONP only supports GET request.');
  }

  _index += 1;
  const cbFuncName = `_jsforce_jsonpCallback_${_index}`;
  const callbacks = window;
  let url = params.url;
  url += (0, _indexOf.default)(url).call(url, '?') > 0 ? '&' : '?';
  url += `${jsonpParam}=${cbFuncName}`;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  if (document.documentElement) {
    document.documentElement.appendChild(script);
  }

  let pid;

  try {
    const res = await new _promise.default((resolve, reject) => {
      pid = (0, _setTimeout2.default)(() => {
        reject(new Error('JSONP call time out.'));
      }, timeout);
      callbacks[cbFuncName] = resolve;
    });
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json'
      },
      body: (0, _stringify.default)(res)
    };
  } finally {
    clearTimeout(pid);

    if (document.documentElement) {
      document.documentElement.removeChild(script);
    }

    delete callbacks[cbFuncName];
  }
}

function createRequest(jsonpParam = 'callback', timeout = 10000) {
  return params => {
    const stream = new _stream.Transform({
      transform(chunk, encoding, callback) {
        callback();
      },

      flush() {
        (async () => {
          const response = await processJsonpRequest(params, jsonpParam, timeout);
          stream.emit('response', response);
          stream.emit('complete', response);
          stream.push(response.body);
          stream.push(null);
        })();
      }

    });
    stream.end();
    return stream;
  };
}

var _default = {
  supported: typeof window !== 'undefined' && typeof document !== 'undefined',
  createRequest
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icm93c2VyL2pzb25wLnRzIl0sIm5hbWVzIjpbIl9pbmRleCIsInByb2Nlc3NKc29ucFJlcXVlc3QiLCJwYXJhbXMiLCJqc29ucFBhcmFtIiwidGltZW91dCIsIm1ldGhvZCIsInRvVXBwZXJDYXNlIiwiRXJyb3IiLCJjYkZ1bmNOYW1lIiwiY2FsbGJhY2tzIiwid2luZG93IiwidXJsIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInNyYyIsImRvY3VtZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwicGlkIiwicmVzIiwicmVzb2x2ZSIsInJlamVjdCIsInN0YXR1c0NvZGUiLCJoZWFkZXJzIiwiYm9keSIsImNsZWFyVGltZW91dCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlUmVxdWVzdCIsInN0cmVhbSIsIlRyYW5zZm9ybSIsInRyYW5zZm9ybSIsImNodW5rIiwiZW5jb2RpbmciLCJjYWxsYmFjayIsImZsdXNoIiwicmVzcG9uc2UiLCJlbWl0IiwicHVzaCIsImVuZCIsInN1cHBvcnRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUhBO0FBQ0E7QUFDQTtBQUlBLElBQUlBLE1BQU0sR0FBRyxDQUFiOztBQUVBLGVBQWVDLG1CQUFmLENBQ0VDLE1BREYsRUFFRUMsVUFGRixFQUdFQyxPQUhGLEVBSUU7QUFDQSxNQUFJRixNQUFNLENBQUNHLE1BQVAsQ0FBY0MsV0FBZCxPQUFnQyxLQUFwQyxFQUEyQztBQUN6QyxVQUFNLElBQUlDLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0Q7O0FBQ0RQLEVBQUFBLE1BQU0sSUFBSSxDQUFWO0FBQ0EsUUFBTVEsVUFBVSxHQUFJLDBCQUF5QlIsTUFBTyxFQUFwRDtBQUNBLFFBQU1TLFNBQWMsR0FBR0MsTUFBdkI7QUFDQSxNQUFJQyxHQUFHLEdBQUdULE1BQU0sQ0FBQ1MsR0FBakI7QUFDQUEsRUFBQUEsR0FBRyxJQUFJLHNCQUFBQSxHQUFHLE1BQUgsQ0FBQUEsR0FBRyxFQUFTLEdBQVQsQ0FBSCxHQUFtQixDQUFuQixHQUF1QixHQUF2QixHQUE2QixHQUFwQztBQUNBQSxFQUFBQSxHQUFHLElBQUssR0FBRVIsVUFBVyxJQUFHSyxVQUFXLEVBQW5DO0FBQ0EsUUFBTUksTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixFQUFBQSxNQUFNLENBQUNHLElBQVAsR0FBYyxpQkFBZDtBQUNBSCxFQUFBQSxNQUFNLENBQUNJLEdBQVAsR0FBYUwsR0FBYjs7QUFDQSxNQUFJRSxRQUFRLENBQUNJLGVBQWIsRUFBOEI7QUFDNUJKLElBQUFBLFFBQVEsQ0FBQ0ksZUFBVCxDQUF5QkMsV0FBekIsQ0FBcUNOLE1BQXJDO0FBQ0Q7O0FBQ0QsTUFBSU8sR0FBSjs7QUFDQSxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFHLE1BQU0scUJBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ2pESCxNQUFBQSxHQUFHLEdBQUcsMEJBQVcsTUFBTTtBQUNyQkcsUUFBQUEsTUFBTSxDQUFDLElBQUlmLEtBQUosQ0FBVSxzQkFBVixDQUFELENBQU47QUFDRCxPQUZLLEVBRUhILE9BRkcsQ0FBTjtBQUdBSyxNQUFBQSxTQUFTLENBQUNELFVBQUQsQ0FBVCxHQUF3QmEsT0FBeEI7QUFDRCxLQUxpQixDQUFsQjtBQU1BLFdBQU87QUFDTEUsTUFBQUEsVUFBVSxFQUFFLEdBRFA7QUFFTEMsTUFBQUEsT0FBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRko7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLHdCQUFlTCxHQUFmO0FBSEQsS0FBUDtBQUtELEdBWkQsU0FZVTtBQUNSTSxJQUFBQSxZQUFZLENBQUNQLEdBQUQsQ0FBWjs7QUFDQSxRQUFJTixRQUFRLENBQUNJLGVBQWIsRUFBOEI7QUFDNUJKLE1BQUFBLFFBQVEsQ0FBQ0ksZUFBVCxDQUF5QlUsV0FBekIsQ0FBcUNmLE1BQXJDO0FBQ0Q7O0FBQ0QsV0FBT0gsU0FBUyxDQUFDRCxVQUFELENBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTb0IsYUFBVCxDQUNFekIsVUFBa0IsR0FBRyxVQUR2QixFQUVFQyxPQUFlLEdBQUcsS0FGcEIsRUFHRTtBQUNBLFNBQVFGLE1BQUQsSUFBeUI7QUFDOUIsVUFBTTJCLE1BQU0sR0FBRyxJQUFJQyxpQkFBSixDQUFjO0FBQzNCQyxNQUFBQSxTQUFTLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFrQkMsUUFBbEIsRUFBNEI7QUFDbkNBLFFBQUFBLFFBQVE7QUFDVCxPQUgwQjs7QUFJM0JDLE1BQUFBLEtBQUssR0FBRztBQUNOLFNBQUMsWUFBWTtBQUNYLGdCQUFNQyxRQUFRLEdBQUcsTUFBTW5DLG1CQUFtQixDQUN4Q0MsTUFEd0MsRUFFeENDLFVBRndDLEVBR3hDQyxPQUh3QyxDQUExQztBQUtBeUIsVUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVksVUFBWixFQUF3QkQsUUFBeEI7QUFDQVAsVUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVksVUFBWixFQUF3QkQsUUFBeEI7QUFDQVAsVUFBQUEsTUFBTSxDQUFDUyxJQUFQLENBQVlGLFFBQVEsQ0FBQ1gsSUFBckI7QUFDQUksVUFBQUEsTUFBTSxDQUFDUyxJQUFQLENBQVksSUFBWjtBQUNELFNBVkQ7QUFXRDs7QUFoQjBCLEtBQWQsQ0FBZjtBQWtCQVQsSUFBQUEsTUFBTSxDQUFDVSxHQUFQO0FBQ0EsV0FBT1YsTUFBUDtBQUNELEdBckJEO0FBc0JEOztlQUVjO0FBQ2JXLEVBQUFBLFNBQVMsRUFBRSxPQUFPOUIsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPRyxRQUFQLEtBQW9CLFdBRG5EO0FBRWJlLEVBQUFBO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5sZXQgX2luZGV4ID0gMDtcblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0pzb25wUmVxdWVzdChcbiAgcGFyYW1zOiBIdHRwUmVxdWVzdCxcbiAganNvbnBQYXJhbTogc3RyaW5nLFxuICB0aW1lb3V0OiBudW1iZXIsXG4pIHtcbiAgaWYgKHBhcmFtcy5tZXRob2QudG9VcHBlckNhc2UoKSAhPT0gJ0dFVCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT05QIG9ubHkgc3VwcG9ydHMgR0VUIHJlcXVlc3QuJyk7XG4gIH1cbiAgX2luZGV4ICs9IDE7XG4gIGNvbnN0IGNiRnVuY05hbWUgPSBgX2pzZm9yY2VfanNvbnBDYWxsYmFja18ke19pbmRleH1gO1xuICBjb25zdCBjYWxsYmFja3M6IGFueSA9IHdpbmRvdztcbiAgbGV0IHVybCA9IHBhcmFtcy51cmw7XG4gIHVybCArPSB1cmwuaW5kZXhPZignPycpID4gMCA/ICcmJyA6ICc/JztcbiAgdXJsICs9IGAke2pzb25wUGFyYW19PSR7Y2JGdW5jTmFtZX1gO1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgc2NyaXB0LnNyYyA9IHVybDtcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG4gIGxldCBwaWQ7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0pTT05QIGNhbGwgdGltZSBvdXQuJykpO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgICBjYWxsYmFja3NbY2JGdW5jTmFtZV0gPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcyksXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGVhclRpbWVvdXQocGlkKTtcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gICAgZGVsZXRlIGNhbGxiYWNrc1tjYkZ1bmNOYW1lXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KFxuICBqc29ucFBhcmFtOiBzdHJpbmcgPSAnY2FsbGJhY2snLFxuICB0aW1lb3V0OiBudW1iZXIgPSAxMDAwMCxcbikge1xuICByZXR1cm4gKHBhcmFtczogSHR0cFJlcXVlc3QpID0+IHtcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgVHJhbnNmb3JtKHtcbiAgICAgIHRyYW5zZm9ybShjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9LFxuICAgICAgZmx1c2goKSB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm9jZXNzSnNvbnBSZXF1ZXN0KFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAganNvbnBQYXJhbSxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzdHJlYW0uZW1pdCgncmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgICAgICAgc3RyZWFtLmVtaXQoJ2NvbXBsZXRlJywgcmVzcG9uc2UpO1xuICAgICAgICAgIHN0cmVhbS5wdXNoKHJlc3BvbnNlLmJvZHkpO1xuICAgICAgICAgIHN0cmVhbS5wdXNoKG51bGwpO1xuICAgICAgICB9KSgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBzdHJlYW0uZW5kKCk7XG4gICAgcmV0dXJuIHN0cmVhbTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdXBwb3J0ZWQ6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcsXG4gIGNyZWF0ZVJlcXVlc3QsXG59O1xuIl19