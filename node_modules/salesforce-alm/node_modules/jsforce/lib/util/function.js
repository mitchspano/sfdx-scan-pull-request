"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.isObject = isObject;
exports.isMapObject = isMapObject;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isPromiseLike = isPromiseLike;
exports.identityFunc = identityFunc;
exports.emptyFunc = emptyFunc;

/**
 *
 */
function isObject(v) {
  const t = typeof v;
  return v != null && (t == 'object' || t == 'function');
}
/**
 *
 */


function isMapObject(v) {
  const t = typeof v;
  return v != null && t == 'object';
}
/**
 *
 */


function isFunction(v) {
  return typeof v == 'function';
}
/**
 *
 */


function isNumber(v) {
  return typeof v == 'number';
}
/**
 * Detect whether the value has CommonJS Promise/A+ interface or not
 */


function isPromiseLike(v) {
  return isObject(v) && isFunction(v.then);
}
/**
 *
 */


function identityFunc(a) {
  return a;
}
/**
 *
 */


function emptyFunc() {}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwidiIsInQiLCJpc01hcE9iamVjdCIsImlzRnVuY3Rpb24iLCJpc051bWJlciIsImlzUHJvbWlzZUxpa2UiLCJ0aGVuIiwiaWRlbnRpdHlGdW5jIiwiYSIsImVtcHR5RnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXVDO0FBQzVDLFFBQU1DLENBQUMsR0FBRyxPQUFPRCxDQUFqQjtBQUNBLFNBQU9BLENBQUMsSUFBSSxJQUFMLEtBQWNDLENBQUMsSUFBSSxRQUFMLElBQWlCQSxDQUFDLElBQUksVUFBcEMsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxTQUFTQyxXQUFULENBQXFCRixDQUFyQixFQUErRDtBQUNwRSxRQUFNQyxDQUFDLEdBQUcsT0FBT0QsQ0FBakI7QUFDQSxTQUFPQSxDQUFDLElBQUksSUFBTCxJQUFhQyxDQUFDLElBQUksUUFBekI7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsVUFBVCxDQUFvQkgsQ0FBcEIsRUFBMEQ7QUFDL0QsU0FBTyxPQUFPQSxDQUFQLElBQVksVUFBbkI7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ksUUFBVCxDQUFrQkosQ0FBbEIsRUFBdUM7QUFDNUMsU0FBTyxPQUFPQSxDQUFQLElBQVksUUFBbkI7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ssYUFBVCxDQUF1QkwsQ0FBdkIsRUFBd0Q7QUFDN0QsU0FBT0QsUUFBUSxDQUFDQyxDQUFELENBQVIsSUFBZUcsVUFBVSxDQUFFSCxDQUFELENBQVdNLElBQVosQ0FBaEM7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsWUFBVCxDQUF5QkMsQ0FBekIsRUFBK0I7QUFDcEMsU0FBT0EsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxTQUFTQyxTQUFULEdBQXFCLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2OiBhbnkpOiB2IGlzIG9iamVjdCB7XG4gIGNvbnN0IHQgPSB0eXBlb2YgdjtcbiAgcmV0dXJuIHYgIT0gbnVsbCAmJiAodCA9PSAnb2JqZWN0JyB8fCB0ID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01hcE9iamVjdCh2OiBhbnkpOiB2IGlzIHsgW25hbWU6IHN0cmluZ106IHVua25vd24gfSB7XG4gIGNvbnN0IHQgPSB0eXBlb2YgdjtcbiAgcmV0dXJuIHYgIT0gbnVsbCAmJiB0ID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHY6IGFueSk6IHYgaXMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkge1xuICByZXR1cm4gdHlwZW9mIHYgPT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodjogYW55KTogdiBpcyBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHYgPT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZWN0IHdoZXRoZXIgdGhlIHZhbHVlIGhhcyBDb21tb25KUyBQcm9taXNlL0ErIGludGVyZmFjZSBvciBub3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZUxpa2UodjogYW55KTogdiBpcyB7IHRoZW46IEZ1bmN0aW9uIH0ge1xuICByZXR1cm4gaXNPYmplY3QodikgJiYgaXNGdW5jdGlvbigodiBhcyBhbnkpLnRoZW4pO1xufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eUZ1bmM8VD4oYTogVCkge1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlGdW5jKCkge31cbiJdfQ==