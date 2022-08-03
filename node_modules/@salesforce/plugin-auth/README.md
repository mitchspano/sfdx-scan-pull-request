# plugin-auth

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-auth.svg?label=@salesforce/plugin-auth)](https://www.npmjs.com/package/@salesforce/plugin-auth) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-auth/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-auth/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-auth.svg)](https://npmjs.org/package/@salesforce/plugin-auth) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-auth/main/LICENSE.txt)

Auth commands for Salesforce CLI

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sfdx plugins:install auth@x.y.z
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
git clone git@github.com:salesforcecli/plugin-auth

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run auth
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

- [`sfdx auth:accesstoken:store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-authaccesstokenstore--r-url--d--s--a-string--p---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx auth:device:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-authdevicelogin--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-authjwtgrant--u-string--f-filepath--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx auth:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-authlist---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx auth:logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-authlogout--a--p--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-authsfdxurlstore--f-filepath--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-authweblogin--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:auth:accesstoken:store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceauthaccesstokenstore--r-url--d--s--a-string--p---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:auth:device:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceauthdevicelogin--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceauthjwtgrant--u-string--f-filepath--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:auth:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceauthlist---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:auth:logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceauthlogout--a--p--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceauthsfdxurlstore--f-filepath--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forceauthweblogin--i-string--r-url--d--s--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx auth:accesstoken:store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using an existing Salesforce access token

```
USAGE
  $ sfdx auth:accesstoken:store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -p, --noprompt                                                                    do not prompt for confirmation
  -r, --instanceurl=<value>                                                         (required) the login URL of the
                                                                                    instance the org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using an existing Salesforce access token

  By default, the command runs interactively and asks you for the access token. If you previously authorized the org,
  the command prompts whether you want to overwrite the local file. Specify --noprompt to not be prompted.

  To use the command in a CI/CD script, set the SFDX_ACCESS_TOKEN environment variable to the access token. Then run the
  command with the --noprompt parameter. "<org id>!<accesstoken>"

ALIASES
  $ sfdx force:auth:accesstoken:store

EXAMPLES
  $ sfdx auth:accesstoken:store --instanceurl https://mycompany.my.salesforce.com

  $ export SFDX_ACCESS_TOKEN=00Dxx0000000000!xxxxx

  $ sfdx auth:accesstoken:store --instanceurl https://dev-hub.my.salesforce.com --noprompt
```

_See code: [src/commands/auth/accesstoken/store.ts](https://github.com/salesforcecli/plugin-auth/blob/v2.2.2/src/commands/auth/accesstoken/store.ts)_

## `sfdx auth:device:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using a device code

```
USAGE
  $ sfdx auth:device:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -i, --clientid=<value>                                                            OAuth client ID (sometimes called
                                                                                    the consumer key)
  -r, --instanceurl=<value>                                                         the login URL of the instance the
                                                                                    org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using a device code

  You must open a browser, navigate to the verification URL, and enter the code. Log in, if not already logged in, and
  you’ll be prompted to allow the device to connect to the org.

ALIASES
  $ sfdx force:auth:device:login

EXAMPLES
  $ sfdx auth:device:login -d -a TestOrg1

  $ sfdx auth:device:login -i <OAuth client id>

  $ sfdx auth:device:login -r https://MyDomainName--SandboxName.sandbox.my.salesforce.com
```

_See code: [src/commands/auth/device/login.ts](https://github.com/salesforcecli/plugin-auth/blob/v2.2.2/src/commands/auth/device/login.ts)_

## `sfdx auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using the JWT flow

```
USAGE
  $ sfdx auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -f, --jwtkeyfile=<value>                                                          (required) path to a file containing
                                                                                    the private key
  -i, --clientid=<value>                                                            (required) OAuth client ID
                                                                                    (sometimes called the consumer key)
  -r, --instanceurl=<value>                                                         the login URL of the instance the
                                                                                    org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  -u, --username=<value>                                                            (required) authentication username
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using the JWT flow

  Use a certificate associated with your private key that has been uploaded to a personal connected app.

  If you specify an --instanceurl value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file. To
  specify a My Domain URL, use the format MyDomainName.my.salesforce.com (not MyDomainName.lightning.force.com). To
  specify a sandbox, set --instanceurl to https://MyDomainName--SandboxName.sandbox.my.salesforce.com.

ALIASES
  $ sfdx force:auth:jwt:grant

EXAMPLES
  $ sfdx auth:jwt:grant -u me@my.org -f <path to jwt key file> -i <OAuth client id>

  $ sfdx auth:jwt:grant -u me@my.org -f <path to jwt key file> -i <OAuth client id> -s -a MyDefaultOrg

  $ sfdx auth:jwt:grant -u me@acme.org -f <path to jwt key file> -i <OAuth client id> -r https://acme.my.salesforce.com
```

_See code: [src/commands/auth/jwt/grant.ts](https://github.com/salesforcecli/plugin-auth/blob/v2.2.2/src/commands/auth/jwt/grant.ts)_

## `sfdx auth:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

list auth connection information

```
USAGE
  $ sfdx auth:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  list auth connection information

ALIASES
  $ sfdx force:auth:list
```

_See code: [src/commands/auth/list.ts](https://github.com/salesforcecli/plugin-auth/blob/v2.2.2/src/commands/auth/list.ts)_

## `sfdx auth:logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

log out from authorized orgs

```
USAGE
  $ sfdx auth:logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --all                                                                         include all authenticated orgs
  -p, --noprompt                                                                    do not prompt for confirmation
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  log out from authorized orgs

  By default, this command logs you out from your default scratch org.

ALIASES
  $ sfdx force:auth:logout

EXAMPLES
  $ sfdx auth:logout -u me@my.org

  $ sfdx auth:logout -a

  $ sfdx auth:logout -p
```

_See code: [src/commands/auth/logout.ts](https://github.com/salesforcecli/plugin-auth/blob/v2.2.2/src/commands/auth/logout.ts)_

## `sfdx auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using an SFDX auth URL stored within a file

```
USAGE
  $ sfdx auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -f, --sfdxurlfile=<value>                                                         (required) path to a file containing
                                                                                    the sfdx url
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using an SFDX auth URL stored within a file

  The SFDX auth URL must have the format "force://<clientId>:<clientSecret>:<refreshToken>@<instanceUrl>". NOTE: The
  SFDX auth URL uses the "force" protocol, and not "http" or "https". Also, the "instanceUrl" inside the SFDX auth URL
  doesn't include the protocol ("https://").

  You have three options when creating the auth file. The easiest option is to redirect the output of the `sfdx
  force:org:display --verbose --json` command into a file. For example, using an org you have already authorized:

  $ sfdx force:org:display -u <OrgUsername> --verbose --json > authFile.json

  $ sfdx auth:sfdxurl:store -f authFile.json

  The resulting JSON file contains the URL in the sfdxAuthUrl property inside of a results object. NOTE: The
  `force:org:display --verbose` command displays the refresh token only for orgs authorized with the web server flow,
  and not the JWT bearer flow.

  You can also create a JSON file that has a top-level property named sfdxAuthUrl whose value is the auth URL. Finally,
  you can create a normal text file that includes just the URL and nothing else.

ALIASES
  $ sfdx force:auth:sfdxurl:store

EXAMPLES
  $ sfdx auth:sfdxurl:store -f <path to sfdxAuthUrl file>

  $ sfdx auth:sfdxurl:store -f <path to sfdxAuthUrl file> -s -a MyDefaultOrg
```

_See code: [src/commands/auth/sfdxurl/store.ts](https://github.com/salesforcecli/plugin-auth/blob/v2.2.2/src/commands/auth/sfdxurl/store.ts)_

## `sfdx auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using the web login flow

```
USAGE
  $ sfdx auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -i, --clientid=<value>                                                            OAuth client ID (sometimes called
                                                                                    the consumer key)
  -r, --instanceurl=<value>                                                         the login URL of the instance the
                                                                                    org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using the web login flow

  If you specify an --instanceurl value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file. To
  specify a My Domain URL, use the format MyDomainName.my.salesforce.com (not MyDomainName.lightning.force.com). To log
  in to a sandbox, set --instanceurl to https://MyDomainName--SandboxName.sandbox.my.salesforce.com.

ALIASES
  $ sfdx force:auth:web:login

EXAMPLES
  $ sfdx auth:web:login -a TestOrg1

  $ sfdx auth:web:login -i <OAuth client id>

  $ sfdx auth:web:login -r https://MyDomainName--SandboxName.sandbox.my.salesforce.com
```

_See code: [src/commands/auth/web/login.ts](https://github.com/salesforcecli/plugin-auth/blob/v2.2.2/src/commands/auth/web/login.ts)_

## `sfdx force:auth:accesstoken:store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using an existing Salesforce access token

```
USAGE
  $ sfdx force:auth:accesstoken:store -r <url> [-d] [-s] [-a <string>] [-p] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -p, --noprompt                                                                    do not prompt for confirmation
  -r, --instanceurl=<value>                                                         (required) the login URL of the
                                                                                    instance the org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using an existing Salesforce access token

  By default, the command runs interactively and asks you for the access token. If you previously authorized the org,
  the command prompts whether you want to overwrite the local file. Specify --noprompt to not be prompted.

  To use the command in a CI/CD script, set the SFDX_ACCESS_TOKEN environment variable to the access token. Then run the
  command with the --noprompt parameter. "<org id>!<accesstoken>"

ALIASES
  $ sfdx force:auth:accesstoken:store

EXAMPLES
  $ sfdx auth:accesstoken:store --instanceurl https://mycompany.my.salesforce.com

  $ export SFDX_ACCESS_TOKEN=00Dxx0000000000!xxxxx

  $ sfdx auth:accesstoken:store --instanceurl https://dev-hub.my.salesforce.com --noprompt
```

## `sfdx force:auth:device:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using a device code

```
USAGE
  $ sfdx force:auth:device:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -i, --clientid=<value>                                                            OAuth client ID (sometimes called
                                                                                    the consumer key)
  -r, --instanceurl=<value>                                                         the login URL of the instance the
                                                                                    org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using a device code

  You must open a browser, navigate to the verification URL, and enter the code. Log in, if not already logged in, and
  you’ll be prompted to allow the device to connect to the org.

ALIASES
  $ sfdx force:auth:device:login

EXAMPLES
  $ sfdx auth:device:login -d -a TestOrg1

  $ sfdx auth:device:login -i <OAuth client id>

  $ sfdx auth:device:login -r https://MyDomainName--SandboxName.sandbox.my.salesforce.com
```

## `sfdx force:auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using the JWT flow

```
USAGE
  $ sfdx force:auth:jwt:grant -u <string> -f <filepath> -i <string> [-r <url>] [-d] [-s] [-a <string>] [--json]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -f, --jwtkeyfile=<value>                                                          (required) path to a file containing
                                                                                    the private key
  -i, --clientid=<value>                                                            (required) OAuth client ID
                                                                                    (sometimes called the consumer key)
  -r, --instanceurl=<value>                                                         the login URL of the instance the
                                                                                    org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  -u, --username=<value>                                                            (required) authentication username
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using the JWT flow

  Use a certificate associated with your private key that has been uploaded to a personal connected app.

  If you specify an --instanceurl value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file. To
  specify a My Domain URL, use the format MyDomainName.my.salesforce.com (not MyDomainName.lightning.force.com). To
  specify a sandbox, set --instanceurl to https://MyDomainName--SandboxName.sandbox.my.salesforce.com.

ALIASES
  $ sfdx force:auth:jwt:grant

EXAMPLES
  $ sfdx auth:jwt:grant -u me@my.org -f <path to jwt key file> -i <OAuth client id>

  $ sfdx auth:jwt:grant -u me@my.org -f <path to jwt key file> -i <OAuth client id> -s -a MyDefaultOrg

  $ sfdx auth:jwt:grant -u me@acme.org -f <path to jwt key file> -i <OAuth client id> -r https://acme.my.salesforce.com
```

## `sfdx force:auth:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

list auth connection information

```
USAGE
  $ sfdx force:auth:list [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  list auth connection information

ALIASES
  $ sfdx force:auth:list
```

## `sfdx force:auth:logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

log out from authorized orgs

```
USAGE
  $ sfdx force:auth:logout [-a] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --all                                                                         include all authenticated orgs
  -p, --noprompt                                                                    do not prompt for confirmation
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  log out from authorized orgs

  By default, this command logs you out from your default scratch org.

ALIASES
  $ sfdx force:auth:logout

EXAMPLES
  $ sfdx auth:logout -u me@my.org

  $ sfdx auth:logout -a

  $ sfdx auth:logout -p
```

## `sfdx force:auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using an SFDX auth URL stored within a file

```
USAGE
  $ sfdx force:auth:sfdxurl:store -f <filepath> [-d] [-s] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -f, --sfdxurlfile=<value>                                                         (required) path to a file containing
                                                                                    the sfdx url
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using an SFDX auth URL stored within a file

  The SFDX auth URL must have the format "force://<clientId>:<clientSecret>:<refreshToken>@<instanceUrl>". NOTE: The
  SFDX auth URL uses the "force" protocol, and not "http" or "https". Also, the "instanceUrl" inside the SFDX auth URL
  doesn't include the protocol ("https://").

  You have three options when creating the auth file. The easiest option is to redirect the output of the `sfdx
  force:org:display --verbose --json` command into a file. For example, using an org you have already authorized:

  $ sfdx force:org:display -u <OrgUsername> --verbose --json > authFile.json

  $ sfdx auth:sfdxurl:store -f authFile.json

  The resulting JSON file contains the URL in the sfdxAuthUrl property inside of a results object. NOTE: The
  `force:org:display --verbose` command displays the refresh token only for orgs authorized with the web server flow,
  and not the JWT bearer flow.

  You can also create a JSON file that has a top-level property named sfdxAuthUrl whose value is the auth URL. Finally,
  you can create a normal text file that includes just the URL and nothing else.

ALIASES
  $ sfdx force:auth:sfdxurl:store

EXAMPLES
  $ sfdx auth:sfdxurl:store -f <path to sfdxAuthUrl file>

  $ sfdx auth:sfdxurl:store -f <path to sfdxAuthUrl file> -s -a MyDefaultOrg
```

## `sfdx force:auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

authorize an org using the web login flow

```
USAGE
  $ sfdx force:auth:web:login [-i <string>] [-r <url>] [-d] [-s] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --setalias=<value>                                                            set an alias for the authenticated
                                                                                    org
  -d, --setdefaultdevhubusername                                                    set the authenticated org as the
                                                                                    default dev hub org for scratch org
                                                                                    creation
  -i, --clientid=<value>                                                            OAuth client ID (sometimes called
                                                                                    the consumer key)
  -r, --instanceurl=<value>                                                         the login URL of the instance the
                                                                                    org lives on
  -s, --setdefaultusername                                                          set the authenticated org as the
                                                                                    default username that all commands
                                                                                    run against
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  authorize an org using the web login flow

  If you specify an --instanceurl value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file. To
  specify a My Domain URL, use the format MyDomainName.my.salesforce.com (not MyDomainName.lightning.force.com). To log
  in to a sandbox, set --instanceurl to https://MyDomainName--SandboxName.sandbox.my.salesforce.com.

ALIASES
  $ sfdx force:auth:web:login

EXAMPLES
  $ sfdx auth:web:login -a TestOrg1

  $ sfdx auth:web:login -i <OAuth client id>

  $ sfdx auth:web:login -r https://MyDomainName--SandboxName.sandbox.my.salesforce.com
```

<!-- commandsstop -->
