# plugin-telemetry

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-telemetry.svg?label=@salesforce/plugin-telemetry)](https://www.npmjs.com/package/@salesforce/plugin-telemetry) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-telemetry/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-telemetry/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-telemetry.svg)](https://npmjs.org/package/@salesforce/plugin-telemetry) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-telemetry/main/LICENSE.txt)

A plugin to record command usage and error telemetry for the Salesforce CLI.

This plugin is bundled with the CLI and will automatically collect usage data on all commands and plugins. To disable data collection, see [this help document](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_telemetry.htm).

**Note: This plugin should be included at a CLI level ONLY. No CLI plugins should include or depend on this plugin.**

All command usage is recorded by initializing on the `init` oclif hook, recording all events to a log file, then spawning a process on exit to send the data to appinsights.

To debug the telemetry spawned process, run a command with the environment variables `SFDX_TELEMETRY_DEBUG=true` and `DEBUG=sfdx:telemetry*`.

```bash
SFDX_TELEMETRY_DEBUG=true DEBUG=sfdx:telemetry* ./bin/run telemetry
```

## Getting Started

To build the plugin locally, make sure to have yarn installed and run the following commands:

```bash
# Clone the repository
git clone git@github.com:salesforcecli/plugin-telemetry

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run telemetry
```

There should be no differences when running via the Salesforce CLI or using the local run file. However, it can be useful to link the plugin to do some additional testing or run your commands from anywhere on your machine.

```bash
# Link your plugin to the sfdx cli
sfdx plugins:link .
# To verify
sfdx plugins
```

## Commands

- [`sfdx hello:org [-n <string>] [-f] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-helloorg--n-string--f--v-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx hello:org [-n <string>] [-f] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

print a greeting and your org IDs

```
USAGE
  $ sfdx hello:org [-n <string>] [-f] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -f, --force                                                                       example boolean flag
  -n, --name=name                                                                   name to print

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  -v, --targetdevhubusername=targetdevhubusername                                   username or alias for the dev hub
                                                                                    org; overrides default dev hub org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLES
  $ sfdx hello:org --targetusername myOrg@example.com --targetdevhubusername devhub@org.com
     Hello world! This is org: MyOrg and I will be around until Tue Mar 20 2018!
     My hub org id is: 00Dxx000000001234

  $ sfdx hello:org --name myname --targetusername myOrg@example.com
     Hello myname! This is org: MyOrg and I will be around until Tue Mar 20 2018!
```
