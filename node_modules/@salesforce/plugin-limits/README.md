# plugin-limits

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-limits.svg?label=@salesforce/plugin-limits)](https://www.npmjs.com/package/@salesforce/plugin-limits) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-limits/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-limits/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-limits.svg)](https://npmjs.org/package/@salesforce/plugin-limits) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-limits/main/LICENSE.txt)

A command to display the api limits of your org

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sfdx plugins:install limits@x.y.z
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
git clone git@github.com:salesforcecli/plugin-limits

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run force:limits
```

There should be no differences when running via the Salesforce CLI or using the local run file. However, it can be useful to link the plugin to do some additional testing or run your commands from anywhere on your machine.

```bash
# Link your plugin to the sfdx cli
sfdx plugins:link .
# To verify
sfdx plugins
```

## Commands

<!-- commands -->

- [`sfdx force:limits:api:display [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcelimitsapidisplay--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:limits:recordcounts:display [-s <array>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcelimitsrecordcountsdisplay--s-array--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx force:limits:api:display [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

display current org’s limits

```
USAGE
  $ sfdx force:limits:api:display [-u <string>] [--apiversion <string>] [--json] [--loglevel
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  When you execute this command in a project, it provides limit information for your default scratch org.

EXAMPLES
  $ sfdx force:limits:api:display
  $ sfdx force:limits:api:display -u me@my.org
```

_See code: [src/commands/force/limits/api/display.ts](https://github.com/salesforcecli/plugin-limits/blob/v2.0.0/src/commands/force/limits/api/display.ts)_

## `sfdx force:limits:recordcounts:display [-s <array>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

display record counts for the specified standard and custom objects

```
USAGE
  $ sfdx force:limits:recordcounts:display [-s <array>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -s, --sobjecttype=sobjecttype                                                     comma-separated list of API names of
                                                                                    standard or custom objects for which
                                                                                    to display record counts

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  Use this command to get an approximate count of the records in standard or custom objects in your org. These record
  counts are the same as the counts listed in the Storage Usage page in Setup. The record counts are approximate because
   they're calculated asynchronously and your org's storage usage isn't updated immediately. To display all available
  record counts, run the command without the '--sobjecttype' parameter.

EXAMPLES
  $ sfdx force:limits:recordcounts:display
  $ sfdx force:limits:recordcounts:display -s Account,Contact,Lead,Opportunity
  $ sfdx force:limits:recordcounts:display -s Account,Contact -u me@my.org
```

_See code: [src/commands/force/limits/recordcounts/display.ts](https://github.com/salesforcecli/plugin-limits/blob/v2.0.0/src/commands/force/limits/recordcounts/display.ts)_

<!-- commandsstop -->
