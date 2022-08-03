# plugin-org

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-org.svg?label=@salesforce/plugin-org)](https://www.npmjs.com/package/@salesforce/plugin-org) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-org/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-org/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-org.svg)](https://npmjs.org/package/@salesforce/plugin-org) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-org/main/LICENSE.txt)

Commands for working with Salesforce orgs. As the Salesforce CLI is transitioning commands owned by various teams to open source, it may not represent all of the `org` commands.

## About Salesforce CLI plugins

Salesforce CLI plugins are based on the [oclif plugin framework](<(https://oclif.io/docs/introduction.html)>). Read the [plugin developer guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_plugins.meta/sfdx_cli_plugins/cli_plugins_architecture_sf_cli.htm) to learn about Salesforce CLI plugin development.

This repository contains a lot of additional scripts and tools to help with general Salesforce node development and enforce coding standards. You should familiarize yourself with some of the [node developer packages](https://github.com/forcedotcom/sfdx-dev-packages/) used by Salesforce. There is also a default circleci config using the [release management orb](https://github.com/forcedotcom/npm-release-management-orb) standards.

Additionally, there are some additional tests that the Salesforce CLI will enforce if this plugin is ever bundled with the CLI. These test are included by default under the `posttest` script and it is recommended to keep these tests active in your plugin, regardless if you plan to have it bundled.

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sfdx plugins:install @salesforce/plugin-org
```

## Issues

Please report any issues at <https://github.com/forcedotcom/cli/issues>

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
Agreement. You can do so by going to <https://cla.salesforce.com/sign-cla>.

### Build

To build the plugin locally, make sure to have yarn installed and run the following commands:

```bash
# Clone the repository
git clone git@github.com:salesforcecli/plugin-org

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run force:org:list
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

- [`sfdx force:org:beta:create [name=value...] [-t scratch|sandbox] [-f <filepath>] [-n] [-c] [-i <string>] [-s] [-a <string>] [-w <minutes>] [-d <integer>] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceorgbetacreate-namevalue--t-scratchsandbox--f-filepath--n--c--i-string--s--a-string--w-minutes--d-integer--v-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:org:clone [name=value...] -t sandbox [-f <filepath>] [-s] [-a <string>] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceorgclone-namevalue--t-sandbox--f-filepath--s--a-string--w-minutes--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:org:delete [-p] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceorgdelete--p--v-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:org:display [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceorgdisplay--u-string---apiversion-string---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:org:list [--all] [-p --clean] [--skipconnectionstatus] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceorglist---all--p---clean---skipconnectionstatus---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:org:open [-b <string> | -r] [-p <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceorgopen--b-string---r--p-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:org:status -n <string> [-s] [-a <string>] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceorgstatus--n-string--s--a-string--w-minutes--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx force:org:beta:create [name=value...] [-t scratch|sandbox] [-f <filepath>] [-n] [-c] [-i <string>] [-s] [-a <string>] [-w <minutes>] [-d <integer>] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

create a scratch or sandbox org

```
USAGE
  $ sfdx force:org:beta:create [name=value...] [-t scratch|sandbox] [-f <filepath>] [-n] [-c] [-i <string>] [-s] [-a
    <string>] [-w <minutes>] [-d <integer>] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            alias for the created org
  -c, --noancestors                                                                 do not include second-generation
                                                                                    package ancestors in the scratch org
  -d, --durationdays=<value>                                                        [default: 7] duration of the scratch
                                                                                    org (in days) (default:7, min:1,
                                                                                    max:30)
  -f, --definitionfile=<value>                                                      path to an org definition file
  -i, --clientid=<value>                                                            connected app consumer key; not
                                                                                    supported for sandbox org creation
  -n, --nonamespace                                                                 create the scratch org with no
                                                                                    namespace
  -s, --setdefaultusername                                                          set the created org as the default
                                                                                    username
  -t, --type=(scratch|sandbox)                                                      [default: scratch] type of org to
                                                                                    create
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -v, --targetdevhubusername=<value>                                                username or alias for the dev hub
                                                                                    org; overrides default dev hub org
  -w, --wait=<value>                                                                [default: 6 minutes] the streaming
                                                                                    client socket timeout (in minutes)
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  create a scratch or sandbox org

  Creates a scratch org or a sandbox org using the values specified in a configuration file or key=value pairs that you
  specify on the command line. Values specified on the command line override values in the configuration file. Specify a
  configuration file or provide key=value pairs while creating a scratch org or a sandbox. When creating scratch orgs,
  —targetdevhubusername (-v) must be a Dev Hub org. When creating sandboxes, the --targetusername (-u) must be a
  production org with sandbox licenses. The —type (-t) is required if creating a sandbox.

EXAMPLES
  $ sfdx force:org:create -f config/enterprise-scratch-def.json -a MyScratchOrg

  $ sfdx force:org:create edition=Developer -a MyScratchOrg -s -v devHub

  $ sfdx force:org:create -f config/enterprise-scratch-def.json -a ScratchOrgWithOverrides username=testuser1@mycompany.org

  $ sfdx force:org:create -t sandbox -f config/dev-sandbox-def.json -a MyDevSandbox -u prodOrg
```

_See code: [src/commands/force/org/beta/create.ts](https://github.com/salesforcecli/plugin-org/blob/v2.0.4/src/commands/force/org/beta/create.ts)_

## `sfdx force:org:clone [name=value...] -t sandbox [-f <filepath>] [-s] [-a <string>] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

clone a sandbox org

```
USAGE
  $ sfdx force:org:clone [name=value...] -t sandbox [-f <filepath>] [-s] [-a <string>] [-w <minutes>] [-u <string>]
    [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            alias for the cloned org
  -f, --definitionfile=<value>                                                      path to the sandbox definition file
  -s, --setdefaultusername                                                          set the cloned org as your default
  -t, --type=(sandbox)                                                              (required) type of org to create
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 6 minutes] number of
                                                                                    minutes to wait while polling for
                                                                                    status
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  clone a sandbox org

  There are two ways to clone a sandbox: either specify a sandbox definition file or provide key=value pairs at the
  command line. Key-value pairs at the command-line override their equivalent sandbox definition file values. In either
  case, you must specify both the "SandboxName" and "SourceSandboxName" options to set the names of the new sandbox and
  the one being cloned, respectively.

  Set the --targetusername (-u) parameter to a production org with sandbox licenses. The --type (-t) parameter is
  required and must be set to "sandbox".

EXAMPLES
  $ sfdx force:org:clone -t sandbox -f config/dev-sandbox-def.json -u prodOrg -a MyDevSandbox

  $ sfdx force:org:clone -t sandbox SandboxName=NewClonedSandbox SourceSandboxName=ExistingSandbox -u prodOrg -a MyDevSandbox
```

_See code: [src/commands/force/org/clone.ts](https://github.com/salesforcecli/plugin-org/blob/v2.0.4/src/commands/force/org/clone.ts)_

## `sfdx force:org:delete [-p] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

mark a scratch or sandbox org for deletion

```
USAGE
  $ sfdx force:org:delete [-p] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -p, --noprompt                                                                    no prompt to confirm deletion
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -v, --targetdevhubusername=<value>                                                username or alias for the dev hub
                                                                                    org; overrides default dev hub org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  mark a scratch or sandbox org for deletion

  To mark the org for deletion without being prompted to confirm, specify --noprompt.

EXAMPLES
  $ sfdx force:org:delete -u me@my.org

  $ sfdx force:org:delete -u MyOrgAlias -p
```

_See code: [src/commands/force/org/delete.ts](https://github.com/salesforcecli/plugin-org/blob/v2.0.4/src/commands/force/org/delete.ts)_

## `sfdx force:org:display [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

get the description for the current or target org

```
USAGE
  $ sfdx force:org:display [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --verbose                                                                         emit additional command output to
                                                                                    stdout

DESCRIPTION
  get the description for the current or target org

  Output includes your access token, client Id, connected status, org ID, instance URL, username, and alias, if
  applicable.

  Use --verbose to include the SFDX auth URL. WARNING: The SFDX auth URL contains sensitive information, such as a
  refresh token that can be used to access an org. Don't share or distribute this URL or token.

  Including --verbose displays the sfdxAuthUrl property only if you authenticated to the org using auth:web:login (not
  auth:jwt:grant)

EXAMPLES
  $ sfdx force:org:display

  $ sfdx force:org:display -u me@my.org

  $ sfdx force:org:display -u TestOrg1 --json

  $ sfdx force:org:display -u TestOrg1 --json > tmp/MyOrgDesc.json
```

_See code: [src/commands/force/org/display.ts](https://github.com/salesforcecli/plugin-org/blob/v2.0.4/src/commands/force/org/display.ts)_

## `sfdx force:org:list [--all] [-p --clean] [--skipconnectionstatus] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

list all orgs you’ve created or authenticated to

```
USAGE
  $ sfdx force:org:list [--all] [-p --clean] [--skipconnectionstatus] [--verbose] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -p, --noprompt                                                                    do not prompt for confirmation
  --all                                                                             include expired, deleted, and
                                                                                    unknown-status scratch orgs
  --clean                                                                           remove all local org authorizations
                                                                                    for non-active scratch orgs.  Use
                                                                                    auth:logout to remove non-scratch
                                                                                    orgs
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --skipconnectionstatus                                                            skip retrieving the connection
                                                                                    status of non-scratch orgs
  --verbose                                                                         list more information about each org

DESCRIPTION
  list all orgs you’ve created or authenticated to

EXAMPLES
  $ sfdx force:org:list

  $ sfdx force:org:list --verbose --json

  $ sfdx force:org:list --verbose --json > tmp/MyOrgList.json
```

_See code: [src/commands/force/org/list.ts](https://github.com/salesforcecli/plugin-org/blob/v2.0.4/src/commands/force/org/list.ts)_

## `sfdx force:org:open [-b <string> | -r] [-p <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

open your default scratch org, or another specified org

```
USAGE
  $ sfdx force:org:open [-b <string> | -r] [-p <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -b, --browser=<option>                                                            browser where the org opens
                                                                                    <options: chrome|edge|firefox>
  -p, --path=<value>                                                                navigation URL path
  -r, --urlonly                                                                     display navigation URL, but don’t
                                                                                    launch browser
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  open your default scratch org, or another specified org

  To open a specific page, specify the portion of the URL after "https://MyDomainName.my.salesforce.com/" as --path.

  For example, specify "--path lightning" to open Lightning Experience, or specify "--path /apex/YourPage" to open a
  Visualforce page.

  To generate a URL but not launch it in your browser, specify --urlonly.

  To open in a specific browser, use the --browser parameter. Supported browsers are "chrome", "edge", and "firefox". If
  you don't specify --browser, the org opens in your default browser.

EXAMPLES
  $ sfdx force:org:open

  $ sfdx force:org:open -u me@my.org

  $ sfdx force:org:open -u MyTestOrg1

  $ sfdx force:org:open -r -p lightning

  $ sfdx force:org:open -u me@my.org -b firefox
```

_See code: [src/commands/force/org/open.ts](https://github.com/salesforcecli/plugin-org/blob/v2.0.4/src/commands/force/org/open.ts)_

## `sfdx force:org:status -n <string> [-s] [-a <string>] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

report status of sandbox creation or clone and authenticate to it

```
USAGE
  $ sfdx force:org:status -n <string> [-s] [-a <string>] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            alias for the created or cloned org
  -n, --sandboxname=<value>                                                         (required) name of the sandbox org
                                                                                    to check status for
  -s, --setdefaultusername                                                          set the created or cloned org as
                                                                                    your default
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 6 minutes] number of
                                                                                    minutes to wait while polling for
                                                                                    status
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  report status of sandbox creation or clone and authenticate to it

  Use this command to check the status of your sandbox creation or clone and, if the sandbox is ready, authenticate to
  it.

  Use the --wait (-w) parameter to specify the number of minutes that the command waits for the sandbox creation or
  clone to complete before returning control of the terminal to you.

  Set the --targetusername (-u) parameter to the username or alias of the production org that contains the sandbox
  license.

EXAMPLES
  $ sfdx force:org:status --sandboxname DevSbx1 --setalias MySandbox -u prodOrg

  $ sfdx force:org:status --sandboxname DevSbx1 --wait 45 --setdefaultusername -u prodOrg
```

_See code: [src/commands/force/org/status.ts](https://github.com/salesforcecli/plugin-org/blob/v2.0.4/src/commands/force/org/status.ts)_

<!-- commandsstop -->
