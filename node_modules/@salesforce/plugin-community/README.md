# plugin-community;

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-community.svg?label=@salesforce/plugin-community)](https://www.npmjs.com/package/@salesforce/plugin-community) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-community/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-community/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-community.svg)](https://npmjs.org/package/@salesforce/plugin-community) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-community/main/LICENSE.txt)

## Learn about the plugin-community

Use the community commands to create and publish an Experience Cloud site, and view a list of available templates in you org.

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sfdx plugins:install community@x.y.z
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
git clone git@github.com:salesforcecli/plugin-community

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run community
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

- [`sfdx force:community:create [name=value...] -n <string> -t <string> -p <string> [-d <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcecommunitycreate-namevalue--n-string--t-string--p-string--d-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:community:publish -n <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcecommunitypublish--n-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:community:template:list [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcecommunitytemplatelist--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx force:community:create [name=value...] -n <string> -t <string> -p <string> [-d <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

creates an Experience Cloud site using a template

```
USAGE
  $ sfdx force:community:create [name=value...] -n <string> -t <string> -p <string> [-d <string>] [-u <string>]
  [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -d, --description=description                                                     description of the site

  -n, --name=name                                                                   (required) name of the site to
                                                                                    create

  -p, --urlpathprefix=urlpathprefix                                                 (required) URL to append to the
                                                                                    domain created when Digital
                                                                                    Experiences was enabled for this org

  -t, --templatename=templatename                                                   (required) template to use to create
                                                                                    a site

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  See 'Which Experience Cloud Template Should I Use?' in Salesforce Help for more information about the different
  template types available for Experience Cloud.

  When creating a site with the Build Your Own (LWR) template, you must also specify the AuthenticationType value using
  the format templateParams.AuthenticationType=value, where value is AUTHENTICATED, UNAUTHENTICATED, or
  AUTHENTICATED_WITH_PUBLIC_ACCESS. Name and values are case-sensitive. See 'ExperienceBundle' in the Metadata API
  Developer Guide for more information.

  When you execute this command, it creates the site in preview status, which means that it isn't yet live. After you
  finish building your site, you can make it live.

  If you have an Experience Builder site, publish the site using the sfdx force:community:publish command to make it
  live.

  If you have a Salesforce Tabs + Visualforce site, activate the site to make it live by updating the status field of
  the Network type in the Metadata API. Alternatively, in Experience Workspaces, go to Administration | Settings, and
  click Activate.

  For Experience Builder sites, activating the site just sends out a welcome email to site members.

EXAMPLES
  $ sfdx force:community:create --name 'My Customer Site' --templatename 'Customer Service' --urlpathprefix customers
  --description 'My customer site'
  $ sfdx force:community:create -n partnercentral -t 'Partner Central' -p partners
  $ sfdx force:community:create -n lwrsite -t 'Build Your Own (LWR)' -p lwrsite
  templateParams.AuthenticationType=UNAUTHENTICATED
```

_See code: [src/commands/force/community/create.ts](https://github.com/salesforcecli/plugin-community/blob/v2.0.0/src/commands/force/community/create.ts)_

## `sfdx force:community:publish -n <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

publishes an Experience Builder site to make it live

```
USAGE
  $ sfdx force:community:publish -n <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -n, --name=name                                                                   (required) name of the Experience
                                                                                    Builder site to publish

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  Each time you publish it, you update the live site with the most recent updates.
  When you publish an Experience Builder site for the first time, you make the site's URL live and enable login access
  for site members.

  Additionally, to send a welcome email to all site members, you must activate the site. (Activation is also required to
   successfully set up SEO for Experience Builder sites.) To activate a site, update the status field of the Network
  type in the Metadata API. Alternatively, in Experience Workspaces, go to Administration | Settings, and click
  Activate.

  Subsequently, each time you publish the site, you update the live site with all changes made to the site since it was
  last published.

  An email notification informs you when your changes are live.

EXAMPLE
  $ sfdx force:community:publish --name 'My Customer Site'
```

_See code: [src/commands/force/community/publish.ts](https://github.com/salesforcecli/plugin-community/blob/v2.0.0/src/commands/force/community/publish.ts)_

## `sfdx force:community:template:list [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

retrieves the list of templates available in your org

```
USAGE
  $ sfdx force:community:template:list [-u <string>] [--apiversion <string>] [--json] [--loglevel
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
  See 'Which Experience Cloud Template Should I Use?' in Salesforce Help for more information about the different
  template types available for Experience Cloud.

EXAMPLE
  $ sfdx force:community:template:list
```

_See code: [src/commands/force/community/template/list.ts](https://github.com/salesforcecli/plugin-community/blob/v2.0.0/src/commands/force/community/template/list.ts)_

<!-- commandsstop -->
