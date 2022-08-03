# plugin-config

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-config.svg?label=@salesforce/plugin-config)](https://www.npmjs.com/package/@salesforce/plugin-config) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-config/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-config/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-config.svg)](https://npmjs.org/package/@salesforce/plugin-config) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-config/main/LICENSE.txt)

Config commands for Salesforce CLI

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sfdx plugins:install config@x.y.z
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
git clone git@github.com:salesforcecli/plugin-config

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run config
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

- [`sfdx config:get [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-configget---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx config:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-configlist---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx config:set name=value... [-g] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-configset-namevalue--g---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx config:unset [-g] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-configunset--g---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:config:get [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceconfigget---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:config:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceconfiglist---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:config:set name=value... [-g] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceconfigset-namevalue--g---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx config:get [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

get config var values for given names

```
USAGE
  $ sfdx config:get [--verbose] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --verbose                                                                         emit additional command output to
                                                                                    stdout

DESCRIPTION
  get config var values for given names

  Gets the Salesforce CLI configuration values for your default scratch org, your default Dev Hub org, your default
  instance URL, or any combination of the three. To see your default scratch org username, include 'defaultusername'.

  To see your default Dev Hub, include 'defaultdevhubusername'.

  To see your default instance URL, include 'instanceUrl'.

  To see the locations where your values are set, include the --verbose flag.

ALIASES
  $ sfdx force:config:get

EXAMPLES
  $ sfdx config:get defaultusername

  $ sfdx config:get defaultusername defaultdevhubusername instanceUrl

  $ sfdx config:get defaultusername defaultdevhubusername --verbose
```

_See code: [src/commands/config/get.ts](https://github.com/salesforcecli/plugin-config/blob/v1.4.13/src/commands/config/get.ts)_

## `sfdx config:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

lists the config variables that the Salesforce CLI uses for various commands and tasks.

```
USAGE
  $ sfdx config:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  lists the config variables that the Salesforce CLI uses for various commands and tasks.

ALIASES
  $ sfdx force:config:list
```

_See code: [src/commands/config/list.ts](https://github.com/salesforcecli/plugin-config/blob/v1.4.13/src/commands/config/list.ts)_

## `sfdx config:set name=value... [-g] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

sets the configuration variables that the Salesforce CLI uses for various commands and tasks.

```
USAGE
  $ sfdx config:set name=value... [-g] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -g, --global                                                                      set config var globally (to be used
                                                                                    from any directory)
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  sets the configuration variables that the Salesforce CLI uses for various commands and tasks.

  Local variables apply only to your current project. Global variables apply in any directory.

ALIASES
  $ sfdx force:config:set

EXAMPLES
  $ sfdx config:set defaultusername=me@my.org defaultdevhubusername=me@myhub.org

  $ sfdx config:set defaultdevhubusername=me@myhub.org -g
```

_See code: [src/commands/config/set.ts](https://github.com/salesforcecli/plugin-config/blob/v1.4.13/src/commands/config/set.ts)_

## `sfdx config:unset [-g] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

unsets the local and global configuration variables for the Salesforce CLI.

```
USAGE
  $ sfdx config:unset [-g] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -g, --global                                                                      unset config var globally (to be
                                                                                    used from any directory)
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  unsets the local and global configuration variables for the Salesforce CLI.

  Local variables apply only to your current project. Global variables apply in any directory.

EXAMPLES
  $ sfdx config:unset defaultusername defaultdevhubusername

  $ sfdx config:unset defaultdevhubusername -g
```

_See code: [src/commands/config/unset.ts](https://github.com/salesforcecli/plugin-config/blob/v1.4.13/src/commands/config/unset.ts)_

## `sfdx force:config:get [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

get config var values for given names

```
USAGE
  $ sfdx force:config:get [--verbose] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --verbose                                                                         emit additional command output to
                                                                                    stdout

DESCRIPTION
  get config var values for given names

  Gets the Salesforce CLI configuration values for your default scratch org, your default Dev Hub org, your default
  instance URL, or any combination of the three. To see your default scratch org username, include 'defaultusername'.

  To see your default Dev Hub, include 'defaultdevhubusername'.

  To see your default instance URL, include 'instanceUrl'.

  To see the locations where your values are set, include the --verbose flag.

ALIASES
  $ sfdx force:config:get

EXAMPLES
  $ sfdx config:get defaultusername

  $ sfdx config:get defaultusername defaultdevhubusername instanceUrl

  $ sfdx config:get defaultusername defaultdevhubusername --verbose
```

## `sfdx force:config:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

lists the config variables that the Salesforce CLI uses for various commands and tasks.

```
USAGE
  $ sfdx force:config:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  lists the config variables that the Salesforce CLI uses for various commands and tasks.

ALIASES
  $ sfdx force:config:list
```

## `sfdx force:config:set name=value... [-g] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

sets the configuration variables that the Salesforce CLI uses for various commands and tasks.

```
USAGE
  $ sfdx force:config:set name=value... [-g] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -g, --global                                                                      set config var globally (to be used
                                                                                    from any directory)
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  sets the configuration variables that the Salesforce CLI uses for various commands and tasks.

  Local variables apply only to your current project. Global variables apply in any directory.

ALIASES
  $ sfdx force:config:set

EXAMPLES
  $ sfdx config:set defaultusername=me@my.org defaultdevhubusername=me@myhub.org

  $ sfdx config:set defaultdevhubusername=me@myhub.org -g
```

<!-- commandsstop -->
