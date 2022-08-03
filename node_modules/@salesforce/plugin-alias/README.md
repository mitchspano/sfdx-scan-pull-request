# plugin-alias

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-alias.svg?label=@salesforce/plugin-alias)](https://www.npmjs.com/package/@salesforce/plugin-alias) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-alias/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-alias/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-alias.svg)](https://npmjs.org/package/@salesforce/plugin-alias) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-alias/main/LICENSE.txt)

Alias commands for Salesforce CLI

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sfdx plugins:install alias@x.y.z
```

## Issues

Please report any issues at https://github.com/forcedotcom/cli/issues

## Contributing

1. Please read our [Code of Conduct](CODE_OF_CONDUCT.md)
2. Create a new issue before starting your project so that we can keep track of
   what you are trying to add/fix. That way, we can also offer suggestions or
   let you know if there is already an effort in progress.
3. Fork this repository.
4. [Build the plugin locally](#build)
5. Create a _topic_ branch in your fork. Note, this step is recommended but technically not required if contributing using a fork.
6. Edit the code in your fork.
7. Write appropriate tests for your changes. Try to achieve at least 95% code coverage on any new code. No pull request will be accepted without unit tests.
8. Sign CLA (see [CLA](#cla) below).
9. Send us a pull request when you are done. We'll review your code, suggest any needed changes, and merge it in.

### CLA

External contributors will be required to sign a Contributor's License
Agreement. You can do so by going to https://cla.salesforce.com/sign-cla.

### Build

To build the plugin locally, make sure to have yarn installed and run the following commands:

```bash
# Clone the repository
git clone git@github.com:salesforcecli/plugin-alias

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run alias
```

There should be no differences when running via the Salesforce CLI or using the local run file. However, it can be useful to link the plugin to do some additional testing or run your commands from anywhere on your machine.

```bash
# Link your plugin to the sfdx cli
sfdx plugins:link .
# To verify
sfdx plugins
```

# Commands

<!-- commands -->

- [`sfdx alias:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-aliaslist---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx alias:set name=value... [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-aliasset-namevalue---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx alias:unset [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-aliasunset---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:alias:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcealiaslist---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:alias:set name=value... [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcealiasset-namevalue---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx alias:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

list username aliases for the Salesforce CLI

```
USAGE
  $ sfdx alias:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  list username aliases for the Salesforce CLI

ALIASES
  $ sfdx force:alias:list
```

_See code: [src/commands/alias/list.ts](https://github.com/salesforcecli/plugin-alias/blob/v2.0.1/src/commands/alias/list.ts)_

## `sfdx alias:set name=value... [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

set username aliases for the Salesforce CLI

```
USAGE
  $ sfdx alias:set name=value... [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  set username aliases for the Salesforce CLI

  You can associate an alias with only one username at a time. If you’ve set an alias multiple times, the alias points
  to the most recent username.

ALIASES
  $ sfdx force:alias:set

EXAMPLES
  $ sfdx alias:set YourAlias=username@example.com

  $ sfdx alias:set YourAlias=username@example.com YourOtherAlias=devhub@example.com
```

_See code: [src/commands/alias/set.ts](https://github.com/salesforcecli/plugin-alias/blob/v2.0.1/src/commands/alias/set.ts)_

## `sfdx alias:unset [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

unsets aliases for the Salesforce CLI

```
USAGE
  $ sfdx alias:unset [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  unsets aliases for the Salesforce CLI

EXAMPLES
  $ sfdx alias:unset YourAlias

  $ sfdx alias:unset YourAlias YourOtherAlias
```

_See code: [src/commands/alias/unset.ts](https://github.com/salesforcecli/plugin-alias/blob/v2.0.1/src/commands/alias/unset.ts)_

## `sfdx force:alias:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

list username aliases for the Salesforce CLI

```
USAGE
  $ sfdx force:alias:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  list username aliases for the Salesforce CLI

ALIASES
  $ sfdx force:alias:list
```

## `sfdx force:alias:set name=value... [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

set username aliases for the Salesforce CLI

```
USAGE
  $ sfdx force:alias:set name=value... [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  set username aliases for the Salesforce CLI

  You can associate an alias with only one username at a time. If you’ve set an alias multiple times, the alias points
  to the most recent username.

ALIASES
  $ sfdx force:alias:set

EXAMPLES
  $ sfdx alias:set YourAlias=username@example.com

  $ sfdx alias:set YourAlias=username@example.com YourOtherAlias=devhub@example.com
```

<!-- commandsstop -->
