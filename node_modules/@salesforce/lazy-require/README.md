# @salesforce/lazy-require

A Node library for lazily loading commonjs modules in order to speed up application execution time.

Note that not all modules are well-suited for lazy loading -- some modules expect to run essential initialization code in addition to exporting types when loaded (BAD!). Modules that do this should not be lazily loaded, or undefined results are likely to occur in your application. _Use with care_ (that is, make sure your app is well tested before using this in production).

## Usage

### TypeScript

### JavaScript

```javascript
// Enable lazy loading of modules
const lazyLoad = require('@salesforce/lazy-require').default.create('name-of-typecache');
lazyLoad.start();
```
