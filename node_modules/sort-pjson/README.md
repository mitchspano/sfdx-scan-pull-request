sort-pjson
==========

[![Version](https://img.shields.io/npm/v/sort-pjson.svg)](https://npmjs.org/package/sort-pjson)
[![CircleCI](https://circleci.com/gh/https://github.com/jdxcode/sort-pjson/tree/master.svg?style=svg)](https://circleci.com/gh/https://github.com/jdxcode/sort-pjson/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/https://github.com/jdxcode/sort-pjson?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sort-pjson/branch/master)
[![Codecov](https://codecov.io/gh/https://github.com/jdxcode/sort-pjson/branch/master/graph/badge.svg)](https://codecov.io/gh/https://github.com/jdxcode/sort-pjson)
[![Greenkeeper](https://badges.greenkeeper.io/https://github.com/jdxcode/sort-pjson.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/npm/sort-pjson/badge.svg)](https://snyk.io/test/npm/sort-pjson)
[![Downloads/week](https://img.shields.io/npm/dw/sort-pjson.svg)](https://npmjs.org/package/sort-pjson)
[![License](https://img.shields.io/npm/l/sort-pjson.svg)](https://github.com/https://github.com/jdxcode/sort-pjson/blob/master/package.json)

Sorts a package.json using [fixpack](https://npmjs.org/package/fixpack) rules but just with an object, not files.

Usage:

```js
const sort = require('sort-pjson')
const pjson = require('./package.json')
const sorted = sort(pjson)
```
