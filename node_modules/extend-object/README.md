# extend-object

[underscore's](http://underscorejs.org/) extend method adapted and extracted as a standalone CommonJS module.

Note this does *not* shim `Array.prototype.forEach` so if you're in <IE8 you'll need to polyfill it. But basically any other browser will work. 

## usage

```javascript
var extend = require('extend-object');

var obj = {hi: 'there'};

extend(obj, {hello: 'you'});

console.log(obj); // {hi: 'there', hello: 'you'}

// it extends the first object in place
console.log(obj === extend(obj, {})); // 'true'

// you can pass as many objects as you want
extend(obj, {something: 'else'}, {other: 'item'});

// if there are conflicting keys the last one wins
extend(obj, {something: 'ok'}, {something: 'newer'});
console.log(obj.something); // 'newer'

```

## install

```
npm install extend-object
```

## credits

All credit goes to Jeremy Ashkenas and the other underscore.js authors.

## license

MIT as per underscore.
