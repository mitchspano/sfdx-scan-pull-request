@oclif/plugin-commands
======================

plugin to show the list of all the commands

[![Version](https://img.shields.io/npm/v/@oclif/plugin-commands.svg)](https://npmjs.org/package/@oclif/plugin-commands)
[![CircleCI](https://circleci.com/gh/oclif/plugin-commands/tree/master.svg?style=shield)](https://circleci.com/gh/oclif/plugin-commands/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/plugin-commands?branch=master&svg=true)](https://ci.appveyor.com/project/oclif/plugin-commands/branch/master)
[![Codecov](https://codecov.io/gh/oclif/plugin-commands/branch/master/graph/badge.svg)](https://codecov.io/gh/oclif/plugin-commands)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/plugin-commands.svg)](https://npmjs.org/package/@oclif/plugin-commands)
[![License](https://img.shields.io/npm/l/@oclif/plugin-commands.svg)](https://github.com/oclif/plugin-commands/blob/master/package.json) 

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-commands
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@oclif/plugin-commands/1.3.0 darwin-x64 node-v12.16.1
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example commands`](#oclif-example-commands)

## `oclif-example commands`

list all the commands

```
USAGE
  $ oclif-example commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [src/commands/commands.ts](https://github.com/oclif/plugin-commands/blob/v1.3.0/src/commands/commands.ts)_
<!-- commandsstop -->
