# plugin-schema

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-schema.svg?label=@salesforce/plugin-schema)](https://www.npmjs.com/package/@salesforce/plugin-schema) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-schema/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-schema/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-schema.svg)](https://npmjs.org/package/@salesforce/plugin-schema) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-schema/main/LICENSE.txt)

Commands to interact with salesforce sobject schemas

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sfdx plugins:install schema@x.y.z
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
git clone git@github.com:salesforcecli/plugin-schema

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run schema
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

- [`sfdx force:schema:sobject:describe -s <string> [-t] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceschemasobjectdescribe--s-string--t--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:schema:sobject:list [-c <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceschemasobjectlist--c-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx force:schema:sobject:describe -s <string> [-t] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

displays the metadata for a standard or custom object

```
USAGE
  $ sfdx force:schema:sobject:describe -s <string> [-t] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -s, --sobjecttype=<value>                                                         (required) the API name of the
                                                                                    object to describe
  -t, --usetoolingapi                                                               execute with Tooling API
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  displays the metadata for a standard or custom object

EXAMPLES
  $ sfdx force:schema:sobject:describe -s Account

  $ sfdx force:schema:sobject:describe -s MyObject__c

  $ sfdx force:schema:sobject:describe -s ApexClass -t
```

_See code: [src/commands/force/schema/sobject/describe.ts](https://github.com/salesforcecli/plugin-schema/blob/v2.1.0/src/commands/force/schema/sobject/describe.ts)_

## `sfdx force:schema:sobject:list [-c <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

list all objects of a specified category

```
USAGE
  $ sfdx force:schema:sobject:list [-c <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -c, --sobjecttypecategory=<value>                                                 [default: ALL] the type of objects
                                                                                    to list (all|custom|standard)
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  list all objects of a specified category

EXAMPLES
  $ sfdx force:schema:sobject:list -c all

  $ sfdx force:schema:sobject:list -c custom

  $ sfdx force:schema:sobject:list -c standard
```

_See code: [src/commands/force/schema/sobject/list.ts](https://github.com/salesforcecli/plugin-schema/blob/v2.1.0/src/commands/force/schema/sobject/list.ts)_

<!-- commandsstop -->
