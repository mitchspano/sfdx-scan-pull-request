[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-data.svg?label=@salesforce/plugin-data)](https://www.npmjs.com/package/@salesforce/plugin-data) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-data/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-data/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-data.svg)](https://npmjs.org/package/@salesforce/plugin-data) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-data/main/LICENSE.txt)

# plugin-data

`data` commands for Salesforce CLI.

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information
on the CLI, read
the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
.

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific
version or tag if needed.

## Install

```bash
sfdx plugins:install data@x.y.z
```

## Issues

Please report any issues at https://github.com/forcedotcom/cli/issues

## Contributing

1. Please read our [Code of Conduct](CODE_OF_CONDUCT.md)
2. Create a new issue before starting your project so that we can keep track of what you are trying to add/fix. That
   way, we can also offer suggestions or let you know if there is already an effort in progress.
3. Fork this repository.
4. [Build the plugin locally](#build)
5. Create a _topic_ branch in your fork. Note, this step is recommended but technically not required if contributing
   using a fork.
6. Edit the code in your fork.
7. Write appropriate tests for your changes. Try to achieve at least 95% code coverage on any new code. No pull request
   will be accepted without unit tests.
8. Sign CLA (see [CLA](#cla) below).
9. Send us a pull request when you are done. We'll review your code, suggest any needed changes, and merge it in.

### CLA

External contributors will be required to sign a Contributor's License Agreement. You can do so by going
to https://cla.salesforce.com/sign-cla.

### Build

To build the plugin locally, make sure to have yarn installed and run the following commands:

```bash
# Clone the repository
git clone git@github.com:salesforcecli/plugin-data

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run force:data
```

There should be no differences when running via the Salesforce CLI or using the local run file. However, it can be
useful to link the plugin to do some additional testing or run your commands from anywhere on your machine.

```bash
# Link your plugin to the sfdx cli
sfdx plugins:link .
# To verify
sfdx plugins
```

# Commands

<!-- commands -->

- [`sfdx force:data:bulk:delete -f <filepath> -s <string> [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatabulkdelete--f-filepath--s-string--w-minutes--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:data:bulk:status -i <string> [-b <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatabulkstatus--i-string--b-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:data:bulk:upsert -i <string> -f <filepath> -s <string> [-w <minutes>] [-r] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatabulkupsert--i-string--f-filepath--s-string--w-minutes--r--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:data:record:create -s <string> -v <string> [-t] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatarecordcreate--s-string--v-string--t---perflog---json--u-string---apiversion-string---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:data:record:delete -s <string> [-i <id> | -w <string>] [-t] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatarecorddelete--s-string--i-id---w-string--t---perflog---json--u-string---apiversion-string---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:data:record:get -s <string> [-i <id> | -w <string>] [-t] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatarecordget--s-string--i-id---w-string--t---perflog---json--u-string---apiversion-string---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:data:record:update -s <string> -v <string> [-i <id> | -w <string>] [-t] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatarecordupdate--s-string--v-string--i-id---w-string--t---perflog---json--u-string---apiversion-string---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:data:soql:query -q <string> [-t] [-r human|csv|json] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatasoqlquery--q-string--t--r-humancsvjson---perflog---json--u-string---apiversion-string---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:data:tree:export -q <string> [-p] [-x <string>] [-d <directory>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatatreeexport--q-string--p--x-string--d-directory--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:data:tree:import [-f <array> | -p <filepath>] [--confighelp] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcedatatreeimport--f-array---p-filepath---confighelp--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx force:data:bulk:delete -f <filepath> -s <string> [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

bulk delete records from a csv file

```
USAGE
  $ sfdx force:data:bulk:delete -f <filepath> -s <string> [-w <minutes>] [-u <string>] [--apiversion <string>] [--json]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --csvfile=<value>                                                             (required) the path to the CSV file
                                                                                    containing the ids of the records to
                                                                                    delete
  -s, --sobjecttype=<value>                                                         (required) the sObject type of the
                                                                                    records you’re deleting
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                the number of minutes to wait for
                                                                                    the command to complete before
                                                                                    displaying the results
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  bulk delete records from a csv file

  The file must be a CSV file with only one column: "Id".

  One job can contain many batches, depending on the length of the CSV file.

  Returns a job ID and a batch ID. Use these IDs to check job status with data:bulk:status.

EXAMPLES
  $ sfdx force:data:bulk:delete -s Account -f ./path/to/file.csv

  $ sfdx force:data:bulk:delete -s MyObject__c -f ./path/to/file.csv
```

_See code: [src/commands/force/data/bulk/delete.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/bulk/delete.ts)_

## `sfdx force:data:bulk:status -i <string> [-b <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

view the status of a bulk data load job or batch

```
USAGE
  $ sfdx force:data:bulk:status -i <string> [-b <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -b, --batchid=<value>                                                             the ID of the batch whose status you
                                                                                    want to view
  -i, --jobid=<value>                                                               (required) the ID of the job you
                                                                                    want to view or of the job whose
                                                                                    batch you want to view
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  view the status of a bulk data load job or batch

  Run this command using the job ID or batch ID returned from the force:data:bulk:delete or force:data:bulk:upsert
  commands.

EXAMPLES
  $ sfdx force:data:bulk:status -i 750xx000000005sAAA

  $ sfdx force:data:bulk:status -i 750xx000000005sAAA -b 751xx000000005nAAA
```

_See code: [src/commands/force/data/bulk/status.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/bulk/status.ts)_

## `sfdx force:data:bulk:upsert -i <string> -f <filepath> -s <string> [-w <minutes>] [-r] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

bulk upsert records from a CSV file

```
USAGE
  $ sfdx force:data:bulk:upsert -i <string> -f <filepath> -s <string> [-w <minutes>] [-r] [-u <string>] [--apiversion
    <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --csvfile=<value>                                                             (required) the path to the CSV file
                                                                                    that defines the records to upsert
  -i, --externalid=<value>                                                          (required) the column name of the
                                                                                    external ID
  -r, --serial                                                                      run batches in serial mode
  -s, --sobjecttype=<value>                                                         (required) the sObject type of the
                                                                                    records you want to upsert
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                the number of minutes to wait for
                                                                                    the command to complete before
                                                                                    displaying the results
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  bulk upsert records from a CSV file

  Inserts or updates records from a CSV file.

  One job can contain many batches, depending on the length of the CSV file.

  Returns a job ID and a batch ID. Use these IDs to check job status with data:bulk:status.

  For information about formatting your CSV file, see "Prepare CSV Files" in the Bulk API Developer Guide.

  By default, the job runs the batches in parallel. Specify --serial to run them serially.

EXAMPLES
  $ sfdx force:data:bulk:upsert -s MyObject__c -f ./path/to/file.csv -i MyField__c

  $ sfdx force:data:bulk:upsert -s MyObject__c -f ./path/to/file.csv -i Id -w 2
```

_See code: [src/commands/force/data/bulk/upsert.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/bulk/upsert.ts)_

## `sfdx force:data:record:create -s <string> -v <string> [-t] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

creates and inserts a record

```
USAGE
  $ sfdx force:data:record:create -s <string> -v <string> [-t] [--perflog --json] [-u <string>] [--apiversion <string>]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -s, --sobjecttype=<value>                                                         (required) the type of the record
                                                                                    you’re creating
  -t, --usetoolingapi                                                               create the record with tooling api
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -v, --values=<value>                                                              (required) the <fieldName>=<value>
                                                                                    pairs you’re creating
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --perflog                                                                         get API performance data

DESCRIPTION
  creates and inserts a record

  The format of a field-value pair is <fieldName>=<value>.

  Enclose all field-value pairs in one set of double quotation marks, delimited by spaces.

  Enclose values that contain spaces in single quotes.

  To get data on API performance metrics, specify both --perflog and --json.

EXAMPLES
  $ sfdx force:data:record:create -s Account -v "Name=Acme"

  $ sfdx force:data:record:create -s Account -v "Name='Universal Containers'"

  $ sfdx force:data:record:create -s Account -v "Name='Universal Containers' Website=www.example.com"

  $ sfdx force:data:record:create -t -s TraceFlag -v "DebugLevelId=7dl170000008U36AAE StartDate=2017-12-01T00:26:04.000+0000 ExpirationDate=2017-12-01T00:56:04.000+0000 LogType=CLASS_TRACING TracedEntityId=01p17000000R6bLAAS"

  $ sfdx force:data:record:create -s Account -v "Name=Acme" --perflog --json
```

_See code: [src/commands/force/data/record/create.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/record/create.ts)_

## `sfdx force:data:record:delete -s <string> [-i <id> | -w <string>] [-t] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

deletes a single record

```
USAGE
  $ sfdx force:data:record:delete -s <string> [-i <id> | -w <string>] [-t] [--perflog --json] [-u <string>] [--apiversion
    <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --sobjectid=<value>                                                           the ID of the record you’re deleting
  -s, --sobjecttype=<value>                                                         (required) the type of the record
                                                                                    you’re deleting
  -t, --usetoolingapi                                                               delete the record with Tooling API
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --where=<value>                                                               a list of <fieldName>=<value> pairs
                                                                                    to search for
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --perflog                                                                         get API performance data

DESCRIPTION
  deletes a single record

  Specify an sObject type and either an ID or a list of <fieldName>=<value> pairs.

  The format of a field-value pair is <fieldName>=<value>.

  Enclose all field-value pairs in one set of double quotation marks, delimited by spaces.

  Enclose values that contain spaces in single quotes.

  To get data on API performance metrics, specify both --perflog and --json.

EXAMPLES
  $ sfdx force:data:record:delete -s Account -i 001D000000Kv3dl

  $ sfdx force:data:record:delete -s Account -w "Name=Acme"

  $ sfdx force:data:record:delete -s Account -w "Name='Universal Containers'"

  $ sfdx force:data:record:delete -s Account -w "Name='Universal Containers' Phone='(123) 456-7890'"

  $ sfdx force:data:record:delete -t -s TraceFlag -i 7tf170000009cU6AAI --perflog --json
```

_See code: [src/commands/force/data/record/delete.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/record/delete.ts)_

## `sfdx force:data:record:get -s <string> [-i <id> | -w <string>] [-t] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

displays a single record

```
USAGE
  $ sfdx force:data:record:get -s <string> [-i <id> | -w <string>] [-t] [--perflog --json] [-u <string>] [--apiversion
    <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --sobjectid=<value>                                                           the ID of the record you’re
                                                                                    retrieving
  -s, --sobjecttype=<value>                                                         (required) the type of the record
                                                                                    you’re retrieving
  -t, --usetoolingapi                                                               retrieve the record with Tooling API
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --where=<value>                                                               a list of <fieldName>=<value> pairs
                                                                                    to search for
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --perflog                                                                         get API performance data

DESCRIPTION
  displays a single record

  Specify an sObject type and either an ID or a list of <fieldName>=<value> pairs.

  The format of a field-value pair is <fieldName>=<value>.

  Enclose all field-value pairs in one set of double quotation marks, delimited by spaces.

  Enclose values that contain spaces in single quotes.

  To get data on API performance metrics, specify both --perflog and --json.

EXAMPLES
  $ sfdx force:data:record:get -s Account -i 001D000000Kv3dl

  $ sfdx force:data:record:get -s Account -w "Name=Acme"

  $ sfdx force:data:record:get -s Account -w "Name='Universal Containers'"

  $ sfdx force:data:record:get -s Account -w "Name='Universal Containers' Phone='(123) 456-7890'"

  $ sfdx force:data:record:get -t -s TraceFlag -i 7tf170000009cUBAAY --perflog --json
```

_See code: [src/commands/force/data/record/get.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/record/get.ts)_

## `sfdx force:data:record:update -s <string> -v <string> [-i <id> | -w <string>] [-t] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

updates a single record

```
USAGE
  $ sfdx force:data:record:update -s <string> -v <string> [-i <id> | -w <string>] [-t] [--perflog --json] [-u <string>]
    [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --sobjectid=<value>                                                           the ID of the record you’re updating
  -s, --sobjecttype=<value>                                                         (required) the sObject type of the
                                                                                    record you’re updating
  -t, --usetoolingapi                                                               update the record with Tooling API
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -v, --values=<value>                                                              (required) the <fieldName>=<value>
                                                                                    pairs you’re updating
  -w, --where=<value>                                                               a list of <fieldName>=<value> pairs
                                                                                    to search for
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --perflog                                                                         get API performance data

DESCRIPTION
  updates a single record

  The format of a field-value pair is <fieldName>=<value>.

  Enclose all field-value pairs in one set of double quotation marks, delimited by spaces.

  Enclose values that contain spaces in single quotes.

  To get data on API performance metrics, specify both --perflog and --json.

EXAMPLES
  $ sfdx force:data:record:update -s Account -i 001D000000Kv3dl -v "Name=NewAcme"

  $ sfdx force:data:record:update -s Account -w "Name='Old Acme'" -v "Name='New Acme'"

  $ sfdx force:data:record:update -s Account -i 001D000000Kv3dl -v "Name='Acme III' Website=www.example.com"

  $ sfdx force:data:record:update -t -s TraceFlag -i 7tf170000009cUBAAY -v "ExpirationDate=2017-12-01T00:58:04.000+0000"

  $sfdx force:data:record:update -s Account -i 001D000000Kv3dl -v "Name=NewAcme" --perflog --json
```

_See code: [src/commands/force/data/record/update.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/record/update.ts)_

## `sfdx force:data:soql:query -q <string> [-t] [-r human|csv|json] [--perflog --json] [-u <string>] [--apiversion <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

execute a SOQL query

```
USAGE
  $ sfdx force:data:soql:query -q <string> [-t] [-r human|csv|json] [--perflog --json] [-u <string>] [--apiversion
    <string>] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -q, --query=<value>                                                               (required) SOQL query to execute
  -r, --resultformat=(human|csv|json)                                               [default: human] result format
                                                                                    emitted to stdout; --json flag
                                                                                    overrides this parameter
  -t, --usetoolingapi                                                               execute query with Tooling API
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --perflog                                                                         get API performance data

DESCRIPTION
  execute a SOQL query

  When you execute this command in a project, it executes the query against the data in your default scratch org.

  To get data on API performance metrics, specify both --perflog and --json.

EXAMPLES
  $ sfdx force:data:soql:query -q "SELECT Id, Name, Account.Name FROM Contact"

  $ sfdx force:data:soql:query -q "SELECT Id, Name FROM Account WHERE ShippingState IN ('CA', 'NY')"

  $ sfdx force:data:soql:query -q "SELECT Id, Name FROM Account WHERE ShippingState IN ('CA', 'NY')" --perflog --json

  $ sfdx force:data:soql:query -q "SELECT Name FROM ApexTrigger" -t
```

_See code: [src/commands/force/data/soql/query.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/soql/query.ts)_

## `sfdx force:data:tree:export -q <string> [-p] [-x <string>] [-d <directory>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

export data from an org

```
USAGE
  $ sfdx force:data:tree:export -q <string> [-p] [-x <string>] [-d <directory>] [-u <string>] [--apiversion <string>]
    [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --outputdir=<value>                                                           directory to store files'
  -p, --plan                                                                        generate mulitple sobject tree files
                                                                                    and a plan definition file for
                                                                                    aggregated import
  -q, --query=<value>                                                               (required) soql query, or filepath
                                                                                    of file containing a soql query, to
                                                                                    retrieve records
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -x, --prefix=<value>                                                              prefix of generated files
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  export data from an org

  Exports data from an org into sObject tree format for use with the force:data:tree:import command.

  The query for export can return a maximum of 2,000 records. For more information, see the REST API Developer Guide:
  https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm

EXAMPLES
  $ sfdx force:data:tree:export -q "SELECT Id, Name, (SELECT Name, Address__c FROM Properties__r) FROM Broker__c"

  $ sfdx force:data:tree:export -q <path to file containing soql query> -x export-demo -d /tmp/sfdx-out -p
```

_See code: [src/commands/force/data/tree/export.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/tree/export.ts)_

## `sfdx force:data:tree:import [-f <array> | -p <filepath>] [--confighelp] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

import data into an org

```
USAGE
  $ sfdx force:data:tree:import [-f <array> | -p <filepath>] [--confighelp] [-u <string>] [--apiversion <string>] [--json]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --sobjecttreefiles=<value>                                                    comma-delimited, ordered paths of
                                                                                    json files containing collection of
                                                                                    record trees to insert
  -p, --plan=<value>                                                                path to plan to insert multiple data
                                                                                    files that have master-detail
                                                                                    relationships
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --confighelp                                                                      display schema information for the
                                                                                    --plan configuration file to stdout;
                                                                                    if you use this option, all other
                                                                                    options except --json are ignored
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  import data into an org

  IMPORTANT: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained
  certain terms to avoid any effect on customer implementations.

  Imports data into an org using the SObject Tree Save API.  This data can include master-detail relationships.

  To generate JSON files for use with force:data:tree:import, run "sfdx force:data:tree:export".

  The SObject Tree API supports requests that contain up to 200 records. For more information, see the REST API
  Developer Guide:
  https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm

EXAMPLES
  $ sfdx force:data:tree:import -f Contact.json,Account.json -u me@my.org

  $ sfdx force:data:tree:import -p Account-Contact-plan.json -u me@my.org
```

_See code: [src/commands/force/data/tree/import.ts](https://github.com/salesforcecli/plugin-data/blob/v2.0.3/src/commands/force/data/tree/import.ts)_

<!-- commandsstop -->
