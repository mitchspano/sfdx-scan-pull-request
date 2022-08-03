# Types and tools for Salesforce TypeScript development

## What is this?

This is a simple TypeScript-oriented library developed for use in Salesforce TypeScript libraries, applications, and plugins consisting of two parts:

1. A collection of commonly desired types.
1. A collection of type-narrowing convenience functions for writing concise type-guards.

See the [API documentation](https://forcedotcom.github.io/sfdx-dev-packages/ts-types) for more details on each of the utilities that `ts-types` provides.

## Why did we create it?

We were interested in developing with _strict_ compiler settings in TypeScript. Among the sub-settings that comprise strict mode are `strictNullChecks`, `strictPropertyInitialization`, and `noImplicitAny`. `tslint` provides additional rules that further improve code quality and type correctness by discouraging explicit `any` usages and other unsafe constructs such as some classes of unwarranted type assertions. Together, these settings have the potential to increase code quality substantially, reducing the frequency of certain classes of runtime errors typical in classical JavaScript applications. They also encourage the writing of clearer, more accurately typed code, which helps teams work together more effectively and more rapidly onboard new hires.

Of course, stricter compiler settings require developers to write more type-safe code -- or to work around the compiler's insistence on type-safety. Often this stricter style leads to more verbose code in the way of type declarations and type guards, and can require new and occasionally unfamiliar patterns to accomplish without subverting the compiler's enforcement of the type system (typically via the use of type assertions).

TypeScript provides both syntax and built-in types designed to help write well-typed code, but we can be more terse and concise by employing additional types and type-narrowing utility functions by leveraging language features like type predicates backed by sound runtime validation, simplified `undefined` and `null` checking, etc. That's where this library comes in.

## How will it help me?

This library has its roots in solving the problem of how to handle untyped JSON data in a type-safe way. It was born when we added some basic type declarations to replace the unsafe `any` type as a stand-in for JSON data with a type that could capture the range of data available in any JSON construct. This yielded the `AnyJson` type, which is effectively a union of all primitive and collection JSON values. The type alone was not enough to make for convenient, type-guarded handling of JSON data, however. TypeScript supports a very elegant system of control flow analysis that will narrow the type of a variable in code after the compiler can prove the set of possible types of the variable has been reduced. Using type guards in your code improves its runtime type safety characteristics, makes it more readable, and provides richer typing information for IDEs. Type guards are implemented as conditional statements, however, and can quickly become noisy and make what was once terse JavaScript code expand into several lines of type checking. This library aimed to simplify the experience of reducing the amount of type guards needed to process a typed-JSON data structure by providing several convenience functions that help extract well-typed data from such JSON structures.

For example, look at the following typical untyped JSON processing in JavaScript:

```javascript
// concise, but not at all null-safe or type-safe; often made to be at least null-safe using lodash fns
JSON.parse(response.body).results.forEach(item => db.save(item.id, item));
```

Then a safe version in bare TypeScript using type guards:

```typescript
const json = JSON.parse(response.body);
// type of json -> `any`, but will not be undefined or JSON.parse would throw
if (json === null && typeof json !== 'object') throw new Error('Unexpected json data type');
let results = json.results;
// type of results -> `any`
if (!Array.isArray(results)) results = [];
// type of results -> `any[]`
results.forEach(item => {
  // type of item -> `any`
  const id = item.id;
  // type of id -> `any`
  if (typeof id !== 'string') throw new Error('Unexpected item id data type');
  // type of id -> `string`
  db.save(id, item);
});
```

While that's pretty safe, it's also a mess to read and write. That's why this library is here to help!

```typescript
const json = ensureJsonMap(JSON.parse(response.body));
// type of json -> `JsonMap` or raises an error
const results = asJsonArray(json.results, []);
// type of results -> `JsonArray` or uses the default of `[]`
results.forEach(item => {
  // type of item -> `AnyJson`
  record = ensureJsonMap(record);
  db.save(ensureString(record.id), record);
});
```

Removing the comments, we can shorten the above somewhat to achieve something not much more complex than the original example, but with robust type and null checking implemented:

```typescript
asJsonArray(ensureJsonMap(JSON.parse(response.body)).results, []).forEach(item => {
  const record = ensureJsonMap(item);
  db.save(ensureString(record.id), record);
});
```

The `ensure*` functions are used in this example since they will raise an error when the value being checked either does not exist or does not match the expected type. Additionally, and perhaps more importantly, the generic `any` and `AnyJson` types get progressively narrowed when using these functions to more specific types. Of course, you don't always want to raise an error when these conditions are not met, so alternative forms exist for each of the JSON data types that allow the types to be tested and narrowed -- see the `is*` and `as*` variants in the API documentation for testing and narrowing capabilities without additionally raising errors.

### Beyond JSON

After a few iterations of working on the JSON support types and utilities, it became apparent that we needed other non-JSON types and functions that provide similar capabilities. Rather than create a new library for those, we instead grew the scope of this one to contain all of our commonly used types and narrowing functions.

### Types

A small library of types is included to help write more concise TypeScript code. These types are in part designed to augment the standard types included with the TypeScript library. Please see the generated API documentation for the complete set of provided types. Here are a few of the most commonly used types:

- **Optional&lt;T&gt;**: An alias for the union type `T | undefined`.
- **NonOptional&lt;T&gt;**: Subtracts `undefined` from a type `T`, when `T` includes `undefined` as a union member.
- **Nullable&lt;T&gt;**: An alias for the union type `Optional<T | null>`, or `T | null | undefined`. `NonNullable` is a TypeScript built-in that subtracts both `null` and `undefined` from a type `T` with either as a union member.
- **Dictionary&lt;T=unknown&gt;**: An alias for a `string`-indexed `object` of the form `{ [key: string]: Optional<T> }`.
- **KeyOf&lt;T&gt;**: An alias for the commonly needed yet verbose `Extract<keyof T, string>`.
- **AnyJson**: A union type of all valid JSON values, equal to `JsonPrimitive | JsonCollection`.
- **JsonPrimitive**: A union of all valid JSON primitive values, qual to `null | string | number| boolean`.
- **JsonMap**: A dictionary of any valid JSON value, defined as `Dictionary<AnyJson>`.
- **JsonArray**: An array of any valid JSON value, defined as `Array<AnyJson>`.
- **JsonCollection**: A union of all JSON collection types, equal to `JsonMap | JsonArray`.

### Narrowing functions

This library provides several categories of functions to help with safely narrowing variables of broadly typed variables, like `unknown` or `object`, to more specific types.

#### is\*

The `is*` suite of functions accept a variable of a broad type such as `unknown` or `object` and returns a `boolean` type-predicate useful for narrowing the type in conditional scopes.

```typescript
// type of value -> string | boolean
if (isString(value)) {
  // type of value -> string
}
// type of value -> boolean
```

#### as\*

The `as*` suite of functions accept a variable of a broad type such as `unknown` or `object` and optionally returns a narrowed type after validating it with a runtime test. If the test is negative or if the value was not defined (i.e. `undefined` or `null`), `undefined` is returned instead.

```typescript
// some function that takes a string or undefined
function upperFirst(s: Optional<string>): Optional<string> {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}
// type of value -> unknown
const name = upperFirst(asString(value));
// type of name -> Optional<string>
```

#### ensure\*

The `ensure*` suite of functions narrow values' types to a definite value of the designated type, or raises an error if the value is `undefined` or of an incompatible type.

```typescript
// type of value -> unknown
try {
  const s = ensureString(value);
  // type of s -> string
} catch (err) {
  // s was undefined, null, or not of type string
}
```

#### has\*

The `has*` suite of functions both tests for the existence and type-compatibility of a given value and, if the runtime value check succeeds, narrows the type to a view of the original value's type intersected with the tested property (e.g. `T & { [_ in K]: V }` where `K` is the test property key and `V` is the test property value type).

```typescript
// type of value -> unknown
if (hasString(value, 'name')) {
  // type of value -> { name: string }
  // value can be further narrowed with additional checks
  if (hasArray(value, 'results')) {
    // type of value -> { name: string } & { results: unknown[] }
  } else if (hasInstance(value, 'error', Error)) {
    // type of value -> { name: string } & { error: Error }
  }
}
```

#### get\*

The `get*` suite of functions search an `unknown` target value for a given path. Search paths follow the same syntax as `lodash`'s `get`, `set`, `at`, etc. These functions are more strictly typed, however, increasingly the likelihood that well-typed code stays well-typed as a function's control flow advances.

```typescript
// imagine response json retrieved from a remote query
const response = {
  start: 0,
  length: 2,
  results: [{ name: 'first' }, { name: 'second' }]
};
const nameOfFirst = getString(response, 'results[0].name');
// type of nameOfFirst = string
```

#### coerce\*

The `coerce` suite of functions accept values of general types and narrow their types to JSON-specific values. They are named with the `coerce` prefix to indicate that they do not perform an exhaustive runtime check of the entire data structure -- only shallow type checks are performed. As a result, _only_ use these functions when you are confident that the broadly typed subject being coerced was derived from a JSON-compatible value. If you are unsure of an object's origins or contents but want to avoid runtime errors handling elements, see the `to*` set of functions.

```typescript
const response = coerceJsonMap(JSON.parse(await http.get('http://example.com/data.json').body));
// type of response -> JsonMap
```

#### to\*

The `to*` suite of functions is a fully type-safe version of the `coerce*` functions for JSON narrowing, but at the expense of some runtime performance. Under the hood, the `to*` functions perform a JSON-clone of their subject arguments, ensuring that the entire data structure is JSON compatible before returning the narrowed type.

```typescript
const obj = {
  name: 'example',
  parse: function(s) {
    return s.split(':');
  }
};
const json = toJsonMap(obj);
// type of json -> JsonMap
// json = { name: 'example' }
// notice that the parse function has been omitted to ensure JSON-compatibility!
```

#### object utilities

This suite of functions are used to iterate the keys, entries, and values of objects with some typing conveniences applied that are not present in their built-in counterparts (i.e. `Object.keys`, `Object.entries`, and `Object.values`), but come with some caveats noted in their documentation. Typical uses include iterating over the properties of an object with more useful `keyof` typings applied during the iterator bodies, and/or filtering out `undefined` or `null` values before invoking the iterator functions.

```typescript
const pets: Dictionary<string> = {
  fido: 'dog',
  bill: 'cat',
  fred: undefined
};
// note that the array is typed as [string, string] rather than [string, string | undefined]
function logPet([name, type]: [string, string]) {
  console.log('%s is a %s', name, type);
}
definiteEntriesOf(pets).forEach(logPet);
// fido is a dog
// bill is a cat
```

## References

Another Salesforce TypeScript library, [@salesforce/kit](https://www.npmjs.com/package/@salesforce/kit), builds on this library to add additional utilities. It includes additional JSON support, a lightweight replacement for some `lodash` functions, and growing support for patterns used in other Salesforce CLI libraries and applications.
