# Utilities for Salesforce CLI development

## What is this?

A collection of commonly needed utilities used by the Salesforce CLI and the libraries it is built on. It includes high level support for parsing and working with JSON data, interacting with environment variables, a common error base type, a minimal lodash replacement, and support for commonly needed design patterns, among other things. It is intended specifically for use in Node.js (version 8 or newer) projects -- YMMV in the browser.

see the [API documentation](https://forcedotcom.github.io/kit) for more details on each of the utilities that `kit` provides.

## References

This library depends upon another Salesforce TypeScript library, [@salesforce/ts-types](https://www.npmjs.com/package/@salesforce/ts-types). The API documentation for this library refers to several types that you will find in `ts-types`. Some `lodash` replacement functions are also found in `ts-types`.
