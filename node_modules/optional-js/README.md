[![npm version](https://badge.fury.io/js/optional-js.svg)](https://badge.fury.io/js/optional-js) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Optional.js
===========

> A container object that wraps possible undefined values in JavaScript - inspired by [Java Optionals](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html)

``` javascript
Optional.ofNullable(promptForUserName)
        .map(getUserId)
        .filter(verify)
        .ifPresent(login);
```

# Features

- Full Java 8 Optional API is supported, and partial Java 9 API implemented (everything minus stream())
- Runs in browser and node environments
- Lightweight and dependency-free (**<1.0 KB minified, gzipped**)

# Installation

Download the [latest release](https://github.com/JasonStorey/Optional.js/releases) from GitHub or from [NPM](https://www.npmjs.com/package/optional-js)

via npm:
``` bash
$ npm install optional-js
```

then just require in node:
``` javascript
var Optional = require('optional-js');
var emptyOptional = Optional.empty();
```

alternatively, use the browser compatible build in the `./dist` directory of the npm package

Not using a module loader? Include the script, and the browser global `Optional` will be added to window.

# Usage

Full docs - [Java 9 Optionals](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html)

JS Example:
``` javascript
// "login.js"

var Optional = require('optional-js');

// Here, we grab a potentially undefined value
var userName = process.argv[2];

// Now we wrap it in an Optional, and use the delicious, functional, sugary sweet API
Optional.ofNullable(userName)
        .map(getUserId)
        .filter(verify)
        .ifPresent(login);

function getUserId(userName) {
    return userName === 'root' ? 1234 : 0;
}

function verify(userId) {
    return userId === 1234;
}

function login(userId) {
    console.log('Logging in as : ' + userId);
}

```
Then, from the terminal...
``` bash
$ node login root
"Logging in as : 1234"
````

# Building

download:
``` bash
git clone git@github.com:JasonStorey/Optional.js.git
```

enter the directory, and install dependencies:
```bash
cd Optional.js && npm install
```

build:
```bash
npm run build
```

run the tests:
```bash
npm test
```

# Contributing

Found a bug or missing feature? Please open an [issue](https://github.com/JasonStorey/Optional.js/issues)!

Send your feedback. Send your pull requests. All contributions are appreciated!

# Copyright and license

Created and copyright (c) 2014-2018 by Jason A. Storey

Optional.js may be freely distributed under the MIT license.
