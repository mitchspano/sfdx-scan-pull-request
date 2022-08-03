# plugin-source

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-source.svg?label=@salesforce/plugin-source)](https://www.npmjs.com/package/@salesforce/plugin-source) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-source/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-source/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-source.svg)](https://npmjs.org/package/@salesforce/plugin-source) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-source/main/LICENSE.txt)

Commands for interacting with metadata in Salesforce orgs.

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific plugin version or tag if needed.

## Install

```bash
sfdx plugins:install source@x.y.z
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
git clone git@github.com:salesforcecli/plugin-source

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run source:
```

There should be no differences when running via the Salesforce CLI or using the local run file. However, it can be useful to link the plugin to do some additional testing or run your commands from anywhere on your machine.

```bash
# Link your plugin to the sfdx cli
sfdx plugins:link .
# To verify
sfdx plugins
```

# Usage

<!-- usage -->

```sh-session
$ npm install -g @salesforce/plugin-source
$ sfdx COMMAND
running command...
$ sfdx (--version)
@salesforce/plugin-source/2.0.8 linux-x64 node-v14.20.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`sfdx force:mdapi:beta:convert -r <directory> [-d <directory>] [-p <array> | -x <string> | -m <array>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapibetaconvert--r-directory--d-directory--p-array---x-string---m-array---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:beta:deploy [-d <directory>] [-w <minutes>] [-o] [-g] [-q <id> | -l NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg | -r <array> | -c] [-f <filepath>] [-s] [--soapdeploy] [--purgeondelete] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapibetadeploy--d-directory--w-minutes--o--g--q-id---l-notestrunrunspecifiedtestsrunlocaltestsrunalltestsinorg---r-array---c--f-filepath--s---soapdeploy---purgeondelete---resultsdir-directory---coverageformatters-array---junit--u-string---apiversion-string---verbose---concise---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:beta:deploy:report [-w <minutes>] [-i <id>] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapibetadeployreport--w-minutes--i-id---resultsdir-directory---coverageformatters-array---junit--u-string---apiversion-string---verbose---concise---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:beta:retrieve -r <directory> [-k <filepath> | -d <directory> | -p <array>] [-s] [-n <string>] [-z] [-w <minutes>] [-u <string>] [-a <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapibetaretrieve--r-directory--k-filepath---d-directory---p-array--s--n-string--z--w-minutes--u-string--a-string---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:beta:retrieve:report [-r <directory>] [-i <id>] [-n <string>] [-z] [-w <minutes>] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapibetaretrievereport--r-directory--i-id--n-string--z--w-minutes--u-string---apiversion-string---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:convert -r <directory> [-d <directory>] [-p <array> | -x <string> | -m <array>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapiconvert--r-directory--d-directory--p-array---x-string---m-array---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:deploy [-d <directory>] [-w <minutes>] [-o] [-g] [-q <id> | -l NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg | -r <array> | -c] [-f <filepath>] [-s] [--soapdeploy] [--purgeondelete] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapideploy--d-directory--w-minutes--o--g--q-id---l-notestrunrunspecifiedtestsrunlocaltestsrunalltestsinorg---r-array---c--f-filepath--s---soapdeploy---purgeondelete---resultsdir-directory---coverageformatters-array---junit--u-string---apiversion-string---verbose---concise---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:deploy:cancel [-w <minutes>] [-i <id>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapideploycancel--w-minutes--i-id--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:deploy:report [-w <minutes>] [-i <id>] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapideployreport--w-minutes--i-id---resultsdir-directory---coverageformatters-array---junit--u-string---apiversion-string---verbose---concise---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:describemetadata [-f <filepath>] [-u <string>] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapidescribemetadata--f-filepath--u-string--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:listmetadata -m <string> [-f <filepath>] [--folder <string>] [-u <string>] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapilistmetadata--m-string--f-filepath---folder-string--u-string--a-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:retrieve -r <directory> [-k <filepath> | -d <directory> | -p <array>] [-s] [-n <string>] [-z] [-w <minutes>] [-u <string>] [-a <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapiretrieve--r-directory--k-filepath---d-directory---p-array--s--n-string--z--w-minutes--u-string--a-string---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:mdapi:retrieve:report [-r <directory>] [-i <id>] [-n <string>] [-z] [-w <minutes>] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcemdapiretrievereport--r-directory--i-id--n-string--z--w-minutes--u-string---apiversion-string---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:beta:pull [-f] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcebetapull--f--w-minutes--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:beta:push [-f] [-w <minutes>] [-g] [-u <string>] [--apiversion <string>] [--quiet] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcebetapush--f--w-minutes--g--u-string---apiversion-string---quiet---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:beta:status [-l | -r] [-u <string>] [--apiversion <string>] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcebetastatus--l---r--u-string---apiversion-string---concise---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:beta:tracking:clear [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcebetatrackingclear--p--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:beta:tracking:reset [-r <integer>] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcebetatrackingreset--r-integer--p--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:convert [-r <directory>] [-d <directory>] [-n <string>] [-p <array> | -x <string> | -m <array>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourceconvert--r-directory--d-directory--n-string--p-array---x-string---m-array---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:delete [-w <minutes>] [-l NoTestRun|RunLocalTests|RunAllTestsInOrg] [-r] [-m <array>] [-p <array>] [-f [-t | -c]] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcedelete--w-minutes--l-notestrunrunlocaltestsrunalltestsinorg--r--m-array--p-array--f--t---c--u-string---apiversion-string---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:deploy [--soapdeploy] [-w <minutes>] [-o] [-g] [--purgeondelete -x <filepath>] [-q <id> | -c | -l NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg | -r <array> | -t] [-m <array>] [-p <array>] [--predestructivechanges <filepath> ] [--postdestructivechanges <filepath> ] [-f ] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcedeploy---soapdeploy--w-minutes--o--g---purgeondelete--x-filepath--q-id---c---l-notestrunrunspecifiedtestsrunlocaltestsrunalltestsinorg---r-array---t--m-array--p-array---predestructivechanges-filepath----postdestructivechanges-filepath---f----resultsdir-directory---coverageformatters-array---junit--u-string---apiversion-string---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:deploy:cancel [-w <minutes>] [-i <id>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcedeploycancel--w-minutes--i-id--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:deploy:report [-w <minutes>] [-i <id>] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcedeployreport--w-minutes--i-id---resultsdir-directory---coverageformatters-array---junit--u-string---apiversion-string---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:ignored:list [-p <filepath>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourceignoredlist--p-filepath---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:manifest:create [-m <array>] [-p <array>] [-n <string> | -t pre|post|destroy|package] [-c <array> --fromorg <string>] [-o <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcemanifestcreate--m-array--p-array--n-string---t-prepostdestroypackage--c-array---fromorg-string--o-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:open -f <filepath> [-r] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourceopen--f-filepath--r--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:pull [-f] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcepull--f--w-minutes--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:push [-f] [-w <minutes>] [-g] [-u <string>] [--apiversion <string>] [--quiet] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcepush--f--w-minutes--g--u-string---apiversion-string---quiet---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:retrieve [-p <array> | -x <filepath> | -m <array>] [-w <minutes>] [-n <array>] [-f -t] [-u <string>] [-a <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourceretrieve--p-array---x-filepath---m-array--w-minutes--n-array--f--t--u-string--a-string---verbose---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:status [-l | -r] [-u <string>] [--apiversion <string>] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcestatus--l---r--u-string---apiversion-string---concise---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:tracking:clear [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcetrackingclear--p--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:source:tracking:reset [-r <integer>] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcesourcetrackingreset--r-integer--p--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx force:mdapi:beta:convert -r <directory> [-d <directory>] [-p <array> | -x <string> | -m <array>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

convert metadata from the Metadata API format into the source format

```
USAGE
  $ sfdx force:mdapi:beta:convert -r <directory> [-d <directory>] [-p <array> | -x <string> | -m <array>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --outputdir=<value>                                                           the output directory to store the
                                                                                    source–formatted files
  -m, --metadata=<value>                                                            comma-separated list of metadata
                                                                                    component names to convert
  -p, --metadatapath=<value>                                                        comma-separated list of metadata
                                                                                    file paths to convert
  -r, --rootdir=<value>                                                             (required) the root directory
                                                                                    containing the Metadata
                                                                                    API–formatted metadata
  -x, --manifest=<value>                                                            file path to manifest (package.xml)
                                                                                    of metadata types to convert.
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  convert metadata from the Metadata API format into the source format

  Converts metadata retrieved via Metadata API into the source format used in Salesforce DX projects.

  To use Salesforce CLI to work with components that you retrieved via Metadata API, first convert your files from the
  metadata format to the source format using "sfdx force:mdapi:convert".

  To convert files from the source format back to the metadata format, so that you can deploy them using "sfdx
  force:mdapi:deploy", run "sfdx force:source:convert".

ALIASES
  $ sfdx force:mdapi:beta:convert

EXAMPLES
  $ sfdx force:mdapi:convert -r path/to/metadata

  $ sfdx force:mdapi:convert -r path/to/metadata -d path/to/outputdir
```

## `sfdx force:mdapi:beta:deploy [-d <directory>] [-w <minutes>] [-o] [-g] [-q <id> | -l NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg | -r <array> | -c] [-f <filepath>] [-s] [--soapdeploy] [--purgeondelete] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

deploy metadata to an org using Metadata API

```
USAGE
  $ sfdx force:mdapi:beta:deploy [-d <directory>] [-w <minutes>] [-o] [-g] [-q <id> | -l
    NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg | -r <array> | -c] [-f <filepath>] [-s] [--soapdeploy]
    [--purgeondelete] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion
    <string>] [--verbose] [--concise] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -c, --checkonly
      validate deploy but don’t save to the org

  -d, --deploydir=<value>
      root of directory tree of files to deploy

  -f, --zipfile=<value>
      path to .zip file of metadata to deploy

  -g, --ignorewarnings
      whether a warning will allow a deployment to complete successfully

  -l, --testlevel=(NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg)
      deployment testing level

  -o, --ignoreerrors
      ignore any errors and do not roll back deployment

  -q, --validateddeployrequestid=<value>
      request ID of the validated deployment to run a Quick Deploy

  -r, --runtests=<value>
      tests to run if --testlevel RunSpecifiedTests

  -s, --singlepackage
      Indicates that the zip file points to a directory structure for a single package

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 0 minutes] wait time for command to finish in minutes. Use -1 to wait indefinitely 0

  --apiversion=<value>
      override the api version used for api requests made by this command

  --concise
      omit success messages for smaller JSON output

  --coverageformatters=clover,cobertura,html-spa,html,json,json-summary,lcovonly,none,teamcity,text,text-summary
      format of the code coverage results

  --json
      format output as json

  --junit
      output JUnit test results

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

  --purgeondelete
      specify that deleted components in the destructive changes manifest file are immediately eligible for deletion
      rather than being stored in the Recycle Bin

  --resultsdir=<value>
      output directory for code coverage and JUnit results; defaults to the deploy ID

  --soapdeploy
      deploy metadata with SOAP API instead of REST API

  --verbose
      verbose output of deploy results

DESCRIPTION
  deploy metadata to an org using Metadata API

ALIASES
  $ sfdx force:mdapi:beta:deploy

EXAMPLES
  Return a job ID you can use to check the deploy status:

  $ sfdx force:mdapi:deploy -d some/path

  Deploy and poll for 1000 minutes:

  $ sfdx force:mdapi:deploy -d some/path -w 1000

  Deploy a ZIP file:

  $ sfdx force:mdapi:deploy -f stuff.zip

  Validate a deployment so the ID can be used for a quick deploy:

  $ sfdx force:mdapi:deploy -d some/path -w 1000 -c --testlevel RunAllTestsInOrg

  Quick deploy using a previously validated deployment:

  $ sfdx force:mdapi:deploy -q MyValidatedId
```

## `sfdx force:mdapi:beta:deploy:report [-w <minutes>] [-i <id>] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

check the status of a metadata deployment

```
USAGE
  $ sfdx force:mdapi:beta:deploy:report [-w <minutes>] [-i <id>] [--resultsdir <directory>] [--coverageformatters <array>] [--junit]
    [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --jobid=<value>
      job ID of the deployment to check; required if you’ve never deployed using Salesforce CLI; if not specified,
      defaults to your most recent CLI deployment

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 0 minutes] wait time for command to finish in minutes.  Use -1 to poll indefinitely

  --apiversion=<value>
      override the api version used for api requests made by this command

  --concise
      omit success messages for smaller JSON output

  --coverageformatters=clover,cobertura,html-spa,html,json,json-summary,lcovonly,none,teamcity,text,text-summary
      format of the code coverage results

  --json
      format output as json

  --junit
      output JUnit test results

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

  --resultsdir=<value>
      output directory for code coverage and JUnit results; defaults to the deploy ID

  --verbose
      verbose output of deploy results

DESCRIPTION
  check the status of a metadata deployment

ALIASES
  $ sfdx force:mdapi:beta:deploy:report

EXAMPLES
  Check the status of the most recent deployment

  $ sfdx force:mdapi:deploy:report

  Check the status of a deploy with job ID 1234 and wait for 10 minutes for the result:

  $ sfdx force:mdapi:deploy:report -i 1234 -w 10
```

## `sfdx force:mdapi:beta:retrieve -r <directory> [-k <filepath> | -d <directory> | -p <array>] [-s] [-n <string>] [-z] [-w <minutes>] [-u <string>] [-a <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

retrieve metadata from an org using Metadata API

```
USAGE
  $ sfdx force:mdapi:beta:retrieve -r <directory> [-k <filepath> | -d <directory> | -p <array>] [-s] [-n <string>] [-z] [-w
    <minutes>] [-u <string>] [-a <string>] [--verbose] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --apiversion=<value>                                                          target API version for the retrieve
  -d, --sourcedir=<value>                                                           source dir to use instead of the
                                                                                    default package dir in
                                                                                    sfdx-project.json
  -k, --unpackaged=<value>                                                          file path of manifest of components
                                                                                    to retrieve
  -n, --zipfilename=<value>                                                         file name to use for the retrieved
                                                                                    zip file
  -p, --packagenames=<value>                                                        a comma-separated list of packages
                                                                                    to retrieve
  -r, --retrievetargetdir=<value>                                                   (required) directory root for the
                                                                                    retrieved files
  -s, --singlepackage                                                               indicates that the zip file points
                                                                                    to a directory structure for a
                                                                                    single package
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 1440 minutes] wait time
                                                                                    for command to finish in minutes
  -z, --unzip                                                                       extract all files from the retrieved
                                                                                    zip file
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --verbose                                                                         verbose output of retrieve result

DESCRIPTION
  retrieve metadata from an org using Metadata API

  Uses Metadata API to retrieve a .zip of XML files that represent metadata from the targeted org. The default target
  username is the admin user for the default scratch org. You can retrieve and deploy up to 10,000 files or 400 MB (39
  MB compressed) at one time.

ALIASES
  $ sfdx force:mdapi:beta:retrieve

EXAMPLES
  Retrieve metadata in the default project directory into the target directory:

  $ sfdx force:mdapi:retrieve -r path/to/retrieve/dir

  Retrieve metadata defined in the specified manifest into the target directory:

  $ sfdx force:mdapi:retrieve -r path/to/retrieve/dir -k package.xml

  Retrieve metadata defined by the specified directory, name the retrieved zipfile and extract all contents

  $ sfdx force:mdapi:retrieve -d path/to/apexClasses -r path/to/retrieve/dir --unzip --zipfilename apexClasses.zip

  Enqueue a retrieve request but do not wait for the metadata to be retrieved:

  $ sfdx force:mdapi:retrieve -r path/to/retrieve/dir --wait 0
```

## `sfdx force:mdapi:beta:retrieve:report [-r <directory>] [-i <id>] [-n <string>] [-z] [-w <minutes>] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

check the status of a metadata retrieval

```
USAGE
  $ sfdx force:mdapi:beta:retrieve:report [-r <directory>] [-i <id>] [-n <string>] [-z] [-w <minutes>] [-u <string>] [--apiversion
    <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --jobid=<value>                                                               job ID of the retrieve you want to
                                                                                    check; defaults to your most recent
                                                                                    CLI retrieval if not specified
  -n, --zipfilename=<value>                                                         file name to use for the retrieved
                                                                                    zip file
  -r, --retrievetargetdir=<value>                                                   directory root for the retrieved
                                                                                    files
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 1440 minutes] wait time
                                                                                    for command to finish in minutes
  -z, --unzip                                                                       extract all files from the retrieved
                                                                                    zip file
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --verbose                                                                         verbose output of retrieve result

DESCRIPTION
  check the status of a metadata retrieval

  Specify the job ID and a target directory for the retrieve you want to check. You can also specify a wait time
  (minutes) to check for updates to the retrieve status. If the retrieve was successful, the resulting zip file will be
  saved to the location passed in with the retrieve target parameter.

ALIASES
  $ sfdx force:mdapi:beta:retrieve:report

EXAMPLES
  Poll until the metadata is retrieved (or timeout is reached) using data from the last force:mdapi:retrieve command:

    sfdx force:mdapi:retrieve:report

  Report the current status of the last retrieve command. If the retrieve is complete the zip file of metadata is written to the target directoy:

    sfdx force:mdapi:retrieve:report -r path/to/retrieve/dir -w 0

  Poll until the metadata is retrieved (or timeout is reached) using the provided RetrieveID, naming the zip file and extracting all contents:

    sfdx force:mdapi:retrieve:report -i retrieveId -r path/to/retrieve/dir --unzip --zipfilename apexClasses.zip
```

## `sfdx force:mdapi:convert -r <directory> [-d <directory>] [-p <array> | -x <string> | -m <array>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

convert metadata from the Metadata API format into the source format

```
USAGE
  $ sfdx force:mdapi:convert -r <directory> [-d <directory>] [-p <array> | -x <string> | -m <array>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --outputdir=<value>                                                           the output directory to store the
                                                                                    source–formatted files
  -m, --metadata=<value>                                                            comma-separated list of metadata
                                                                                    component names to convert
  -p, --metadatapath=<value>                                                        comma-separated list of metadata
                                                                                    file paths to convert
  -r, --rootdir=<value>                                                             (required) the root directory
                                                                                    containing the Metadata
                                                                                    API–formatted metadata
  -x, --manifest=<value>                                                            file path to manifest (package.xml)
                                                                                    of metadata types to convert.
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  convert metadata from the Metadata API format into the source format

  Converts metadata retrieved via Metadata API into the source format used in Salesforce DX projects.

  To use Salesforce CLI to work with components that you retrieved via Metadata API, first convert your files from the
  metadata format to the source format using "sfdx force:mdapi:convert".

  To convert files from the source format back to the metadata format, so that you can deploy them using "sfdx
  force:mdapi:deploy", run "sfdx force:source:convert".

ALIASES
  $ sfdx force:mdapi:beta:convert

EXAMPLES
  $ sfdx force:mdapi:convert -r path/to/metadata

  $ sfdx force:mdapi:convert -r path/to/metadata -d path/to/outputdir
```

_See code: [src/commands/force/mdapi/convert.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/mdapi/convert.ts)_

## `sfdx force:mdapi:deploy [-d <directory>] [-w <minutes>] [-o] [-g] [-q <id> | -l NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg | -r <array> | -c] [-f <filepath>] [-s] [--soapdeploy] [--purgeondelete] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

deploy metadata to an org using Metadata API

```
USAGE
  $ sfdx force:mdapi:deploy [-d <directory>] [-w <minutes>] [-o] [-g] [-q <id> | -l
    NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg | -r <array> | -c] [-f <filepath>] [-s] [--soapdeploy]
    [--purgeondelete] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion
    <string>] [--verbose] [--concise] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -c, --checkonly
      validate deploy but don’t save to the org

  -d, --deploydir=<value>
      root of directory tree of files to deploy

  -f, --zipfile=<value>
      path to .zip file of metadata to deploy

  -g, --ignorewarnings
      whether a warning will allow a deployment to complete successfully

  -l, --testlevel=(NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg)
      deployment testing level

  -o, --ignoreerrors
      ignore any errors and do not roll back deployment

  -q, --validateddeployrequestid=<value>
      request ID of the validated deployment to run a Quick Deploy

  -r, --runtests=<value>
      tests to run if --testlevel RunSpecifiedTests

  -s, --singlepackage
      Indicates that the zip file points to a directory structure for a single package

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 0 minutes] wait time for command to finish in minutes. Use -1 to wait indefinitely 0

  --apiversion=<value>
      override the api version used for api requests made by this command

  --concise
      omit success messages for smaller JSON output

  --coverageformatters=clover,cobertura,html-spa,html,json,json-summary,lcovonly,none,teamcity,text,text-summary
      format of the code coverage results

  --json
      format output as json

  --junit
      output JUnit test results

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

  --purgeondelete
      specify that deleted components in the destructive changes manifest file are immediately eligible for deletion
      rather than being stored in the Recycle Bin

  --resultsdir=<value>
      output directory for code coverage and JUnit results; defaults to the deploy ID

  --soapdeploy
      deploy metadata with SOAP API instead of REST API

  --verbose
      verbose output of deploy results

DESCRIPTION
  deploy metadata to an org using Metadata API

ALIASES
  $ sfdx force:mdapi:beta:deploy

EXAMPLES
  Return a job ID you can use to check the deploy status:

  $ sfdx force:mdapi:deploy -d some/path

  Deploy and poll for 1000 minutes:

  $ sfdx force:mdapi:deploy -d some/path -w 1000

  Deploy a ZIP file:

  $ sfdx force:mdapi:deploy -f stuff.zip

  Validate a deployment so the ID can be used for a quick deploy:

  $ sfdx force:mdapi:deploy -d some/path -w 1000 -c --testlevel RunAllTestsInOrg

  Quick deploy using a previously validated deployment:

  $ sfdx force:mdapi:deploy -q MyValidatedId
```

_See code: [src/commands/force/mdapi/deploy.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/mdapi/deploy.ts)_

## `sfdx force:mdapi:deploy:cancel [-w <minutes>] [-i <id>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

cancel a metadata deployment

```
USAGE
  $ sfdx force:mdapi:deploy:cancel [-w <minutes>] [-i <id>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --jobid=<value>                                                               job ID of the deployment you want to
                                                                                    cancel; defaults to your most recent
                                                                                    CLI deployment if not specified
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 33 minutes] wait time for
                                                                                    command to finish in minutes
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  cancel a metadata deployment

  Use this command to cancel a specified asynchronous metadata deployment. You can also specify a wait time (in minutes)
  to check for updates to the canceled deploy status.

EXAMPLES
  Deploy a directory of files to the org

    $ sfdx force:mdapi:deploy -d <directory>

  Now cancel this deployment and wait two minutes

    $ sfdx force:mdapi:deploy:cancel -w 2

  If you have multiple deployments in progress and want to cancel a specific one, specify the job ID

    $ sfdx force:mdapi:deploy:cancel -i <jobid>

  Check the status of the cancel job

    $ sfdx force:mdapi:deploy:report
```

_See code: [src/commands/force/mdapi/deploy/cancel.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/mdapi/deploy/cancel.ts)_

## `sfdx force:mdapi:deploy:report [-w <minutes>] [-i <id>] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

check the status of a metadata deployment

```
USAGE
  $ sfdx force:mdapi:deploy:report [-w <minutes>] [-i <id>] [--resultsdir <directory>] [--coverageformatters <array>] [--junit]
    [-u <string>] [--apiversion <string>] [--verbose] [--concise] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --jobid=<value>
      job ID of the deployment to check; required if you’ve never deployed using Salesforce CLI; if not specified,
      defaults to your most recent CLI deployment

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 0 minutes] wait time for command to finish in minutes.  Use -1 to poll indefinitely

  --apiversion=<value>
      override the api version used for api requests made by this command

  --concise
      omit success messages for smaller JSON output

  --coverageformatters=clover,cobertura,html-spa,html,json,json-summary,lcovonly,none,teamcity,text,text-summary
      format of the code coverage results

  --json
      format output as json

  --junit
      output JUnit test results

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

  --resultsdir=<value>
      output directory for code coverage and JUnit results; defaults to the deploy ID

  --verbose
      verbose output of deploy results

DESCRIPTION
  check the status of a metadata deployment

ALIASES
  $ sfdx force:mdapi:beta:deploy:report

EXAMPLES
  Check the status of the most recent deployment

  $ sfdx force:mdapi:deploy:report

  Check the status of a deploy with job ID 1234 and wait for 10 minutes for the result:

  $ sfdx force:mdapi:deploy:report -i 1234 -w 10
```

_See code: [src/commands/force/mdapi/deploy/report.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/mdapi/deploy/report.ts)_

## `sfdx force:mdapi:describemetadata [-f <filepath>] [-u <string>] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

display details about the metadata types enabled for your org

```
USAGE
  $ sfdx force:mdapi:describemetadata [-f <filepath>] [-u <string>] [-a <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --apiversion=<value>                                                          API version to use
  -f, --resultfile=<value>                                                          path to the file where results are
                                                                                    stored
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  display details about the metadata types enabled for your org

  Use this information to identify the syntax needed for a <name> element in package.xml. The most recent API version is
  the default, or you can specify an older version.

  The default target username is the admin user for the default scratch org. The username must have the Modify All Data
  permission or the Modify Metadata permission (Beta). For more information about permissions, see Salesforce Help.

EXAMPLES
  $ sfdx force:mdapi:describemetadata -a 43.0

  $ sfdx force:mdapi:describemetadata -u me@example.com

  $ sfdx force:mdapi:describemetadata -f /path/to/outputfilename.txt

  $ sfdx force:mdapi:describemetadata -u me@example.com -f /path/to/outputfilename.txt
```

_See code: [src/commands/force/mdapi/describemetadata.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/mdapi/describemetadata.ts)_

## `sfdx force:mdapi:listmetadata -m <string> [-f <filepath>] [--folder <string>] [-u <string>] [-a <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

display properties of metadata components of a specified type

```
USAGE
  $ sfdx force:mdapi:listmetadata -m <string> [-f <filepath>] [--folder <string>] [-u <string>] [-a <string>] [--json]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --apiversion=<value>                                                          API version to use
  -f, --resultfile=<value>                                                          path to the file where results are
                                                                                    stored
  -m, --metadatatype=<value>                                                        (required) metadata type to be
                                                                                    retrieved, such as CustomObject;
                                                                                    metadata type value is
                                                                                    case-sensitive
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --folder=<value>                                                                  folder associated with the
                                                                                    component; required for components
                                                                                    that use folders; folder names are
                                                                                    case-sensitive
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  display properties of metadata components of a specified type

  This command is useful when you want to identify individual components in your manifest file or if you want a
  high-level view of particular components in your organization. For example, you could use this target to return a list
  of names of all Layout components in your org, then use this information in a retrieve operation that returns a subset
  of these components.

EXAMPLES
  $ sfdx force:mdapi:listmetadata -m CustomObject

  $ sfdx force:mdapi:listmetadata -m CustomObject -a 43.0

  $ sfdx force:mdapi:listmetadata -m CustomObject -u me@example.com

  $ sfdx force:mdapi:listmetadata -m CustomObject -f /path/to/outputfilename.txt

  $ sfdx force:mdapi:listmetadata -m Dashboard --folder foldername

  $ sfdx force:mdapi:listmetadata -m Dashboard --folder foldername -a 43.0

  $ sfdx force:mdapi:listmetadata -m Dashboard --folder foldername -u me@example.com

  $ sfdx force:mdapi:listmetadata -m Dashboard --folder foldername -f /path/to/outputfilename.txt

  $ sfdx force:mdapi:listmetadata -m CustomObject -u me@example.com -f /path/to/outputfilename.txt
```

_See code: [src/commands/force/mdapi/listmetadata.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/mdapi/listmetadata.ts)_

## `sfdx force:mdapi:retrieve -r <directory> [-k <filepath> | -d <directory> | -p <array>] [-s] [-n <string>] [-z] [-w <minutes>] [-u <string>] [-a <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

retrieve metadata from an org using Metadata API

```
USAGE
  $ sfdx force:mdapi:retrieve -r <directory> [-k <filepath> | -d <directory> | -p <array>] [-s] [-n <string>] [-z] [-w
    <minutes>] [-u <string>] [-a <string>] [--verbose] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --apiversion=<value>                                                          target API version for the retrieve
  -d, --sourcedir=<value>                                                           source dir to use instead of the
                                                                                    default package dir in
                                                                                    sfdx-project.json
  -k, --unpackaged=<value>                                                          file path of manifest of components
                                                                                    to retrieve
  -n, --zipfilename=<value>                                                         file name to use for the retrieved
                                                                                    zip file
  -p, --packagenames=<value>                                                        a comma-separated list of packages
                                                                                    to retrieve
  -r, --retrievetargetdir=<value>                                                   (required) directory root for the
                                                                                    retrieved files
  -s, --singlepackage                                                               indicates that the zip file points
                                                                                    to a directory structure for a
                                                                                    single package
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 1440 minutes] wait time
                                                                                    for command to finish in minutes
  -z, --unzip                                                                       extract all files from the retrieved
                                                                                    zip file
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --verbose                                                                         verbose output of retrieve result

DESCRIPTION
  retrieve metadata from an org using Metadata API

  Uses Metadata API to retrieve a .zip of XML files that represent metadata from the targeted org. The default target
  username is the admin user for the default scratch org. You can retrieve and deploy up to 10,000 files or 400 MB (39
  MB compressed) at one time.

ALIASES
  $ sfdx force:mdapi:beta:retrieve

EXAMPLES
  Retrieve metadata in the default project directory into the target directory:

  $ sfdx force:mdapi:retrieve -r path/to/retrieve/dir

  Retrieve metadata defined in the specified manifest into the target directory:

  $ sfdx force:mdapi:retrieve -r path/to/retrieve/dir -k package.xml

  Retrieve metadata defined by the specified directory, name the retrieved zipfile and extract all contents

  $ sfdx force:mdapi:retrieve -d path/to/apexClasses -r path/to/retrieve/dir --unzip --zipfilename apexClasses.zip

  Enqueue a retrieve request but do not wait for the metadata to be retrieved:

  $ sfdx force:mdapi:retrieve -r path/to/retrieve/dir --wait 0
```

_See code: [src/commands/force/mdapi/retrieve.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/mdapi/retrieve.ts)_

## `sfdx force:mdapi:retrieve:report [-r <directory>] [-i <id>] [-n <string>] [-z] [-w <minutes>] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

check the status of a metadata retrieval

```
USAGE
  $ sfdx force:mdapi:retrieve:report [-r <directory>] [-i <id>] [-n <string>] [-z] [-w <minutes>] [-u <string>] [--apiversion
    <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --jobid=<value>                                                               job ID of the retrieve you want to
                                                                                    check; defaults to your most recent
                                                                                    CLI retrieval if not specified
  -n, --zipfilename=<value>                                                         file name to use for the retrieved
                                                                                    zip file
  -r, --retrievetargetdir=<value>                                                   directory root for the retrieved
                                                                                    files
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 1440 minutes] wait time
                                                                                    for command to finish in minutes
  -z, --unzip                                                                       extract all files from the retrieved
                                                                                    zip file
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --verbose                                                                         verbose output of retrieve result

DESCRIPTION
  check the status of a metadata retrieval

  Specify the job ID and a target directory for the retrieve you want to check. You can also specify a wait time
  (minutes) to check for updates to the retrieve status. If the retrieve was successful, the resulting zip file will be
  saved to the location passed in with the retrieve target parameter.

ALIASES
  $ sfdx force:mdapi:beta:retrieve:report

EXAMPLES
  Poll until the metadata is retrieved (or timeout is reached) using data from the last force:mdapi:retrieve command:

    sfdx force:mdapi:retrieve:report

  Report the current status of the last retrieve command. If the retrieve is complete the zip file of metadata is written to the target directoy:

    sfdx force:mdapi:retrieve:report -r path/to/retrieve/dir -w 0

  Poll until the metadata is retrieved (or timeout is reached) using the provided RetrieveID, naming the zip file and extracting all contents:

    sfdx force:mdapi:retrieve:report -i retrieveId -r path/to/retrieve/dir --unzip --zipfilename apexClasses.zip
```

_See code: [src/commands/force/mdapi/retrieve/report.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/mdapi/retrieve/report.ts)_

## `sfdx force:source:beta:pull [-f] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

pull source from the scratch org to the project

```
USAGE
  $ sfdx force:source:beta:pull [-f] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --forceoverwrite
      ignore conflict warnings and overwrite changes to the project

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 33 minutes] The number of minutes to wait for the command to complete and display results to the terminal
      window. If the command continues to run after the wait period, the CLI returns control of the terminal window to
      you. The default is 33 minutes.

  --apiversion=<value>
      override the api version used for api requests made by this command

  --json
      format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

DESCRIPTION
  pull source from the scratch org to the project

ALIASES
  $ sfdx force:source:beta:pull
```

## `sfdx force:source:beta:push [-f] [-w <minutes>] [-g] [-u <string>] [--apiversion <string>] [--quiet] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

push source to a scratch org from the project

```
USAGE
  $ sfdx force:source:beta:push [-f] [-w <minutes>] [-g] [-u <string>] [--apiversion <string>] [--quiet] [--json]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --forceoverwrite
      ignore conflict warnings and overwrite changes to scratch org

  -g, --ignorewarnings
      deploy changes even if warnings are generated

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 33 minutes] Number of minutes to wait for the command to complete and display results to the terminal
      window. If the command continues to run after the wait period, the CLI returns control of the terminal window to
      you. The default is 33 minutes.

  --apiversion=<value>
      override the api version used for api requests made by this command

  --json
      format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

  --quiet
      minimize json and sdtout output on success

DESCRIPTION
  push source to a scratch org from the project

ALIASES
  $ sfdx force:source:beta:push
```

## `sfdx force:source:beta:status [-l | -r] [-u <string>] [--apiversion <string>] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

list local changes and/or changes in a scratch org

```
USAGE
  $ sfdx force:source:beta:status [-l | -r] [-u <string>] [--apiversion <string>] [--concise] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -l, --local                                                                       list the changes that have been made
                                                                                    locally
  -r, --remote                                                                      list the changes that have been made
                                                                                    in the scratch org
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --concise                                                                         show only the changes that will be
                                                                                    pushed or pulled; omits files that
                                                                                    are forceignored
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  list local changes and/or changes in a scratch org

ALIASES
  $ sfdx force:source:beta:status

EXAMPLES
  $ sfdx force:source:status -l

  $ sfdx force:source:status -r

  $ sfdx force:source:status

  $ sfdx force:source:status -u me@example.com --json
```

## `sfdx force:source:beta:tracking:clear [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

clear all local source tracking information

```
USAGE
  $ sfdx force:source:beta:tracking:clear [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -p, --noprompt                                                                    do not prompt for source tracking
                                                                                    override confirmation
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  clear all local source tracking information

  WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

  Clears all local source tracking information. When you next run force:source:status, the CLI displays all local and
  remote files as changed, and any files with the same name are listed as conflicts.

ALIASES
  $ sfdx force:source:beta:tracking:clear
```

## `sfdx force:source:beta:tracking:reset [-r <integer>] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

reset local and remote source tracking

```
USAGE
  $ sfdx force:source:beta:tracking:reset [-r <integer>] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -p, --noprompt                                                                    do not prompt for source tracking
                                                                                    override confirmation
  -r, --revision=<value>                                                            reset to a specific SourceMember
                                                                                    revision counter number
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  reset local and remote source tracking

  WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

  Resets local and remote source tracking so that the CLI no longer registers differences between your local files and
  those in the org. When you next run force:source:status, the CLI returns no results, even though conflicts might
  actually exist. The CLI then resumes tracking new source changes as usual.

  Use the --revision parameter to reset source tracking to a specific revision number of an org source member. To get
  the revision number, query the SourceMember Tooling API object with the force:data:soql:query command. For example:

  $ sfdx force:data:soql:query -q "SELECT MemberName, MemberType, RevisionCounter FROM SourceMember" -t

ALIASES
  $ sfdx force:source:beta:tracking:reset
```

## `sfdx force:source:convert [-r <directory>] [-d <directory>] [-n <string>] [-p <array> | -x <string> | -m <array>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

convert source into Metadata API format

```
USAGE
  $ sfdx force:source:convert [-r <directory>] [-d <directory>] [-n <string>] [-p <array> | -x <string> | -m <array>]
    [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --outputdir=<value>                                                           [default:
                                                                                    metadataPackage_1658353377843]
                                                                                    output directory to store the
                                                                                    Metadata API–formatted files in
  -m, --metadata=<value>                                                            comma-separated list of metadata
                                                                                    component names to convert
  -n, --packagename=<value>                                                         name of the package to associate
                                                                                    with the metadata-formatted files
  -p, --sourcepath=<value>                                                          comma-separated list of paths to the
                                                                                    local source files to convert
  -r, --rootdir=<value>                                                             a source directory other than the
                                                                                    default package to convert
  -x, --manifest=<value>                                                            file path to manifest (package.xml)
                                                                                    of metadata types to convert.
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  convert source into Metadata API format

  Converts source-formatted files into metadata that you can deploy using Metadata API.

  To convert source-formatted files into the metadata format, so that you can deploy them using Metadata API,

  run "sfdx force:source:convert". Then deploy the metadata using "sfdx force:mdapi:deploy".

  To convert Metadata API–formatted files into the source format, run "sfdx force:mdapi:convert".

  To specify a package name that includes spaces, enclose the name in single quotes.

EXAMPLES
  $ sfdx force:source:convert -r path/to/source

  $ sfdx force:source:convert -r path/to/source -d path/to/outputdir -n 'My Package'
```

_See code: [src/commands/force/source/convert.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/convert.ts)_

## `sfdx force:source:delete [-w <minutes>] [-l NoTestRun|RunLocalTests|RunAllTestsInOrg] [-r] [-m <array>] [-p <array>] [-f [-t | -c]] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

delete source from your project and from a non-source-tracked org

```
USAGE
  $ sfdx force:source:delete [-w <minutes>] [-l NoTestRun|RunLocalTests|RunAllTestsInOrg] [-r] [-m <array>] [-p <array>]
    [-f [-t | -c]] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -c, --checkonly                                                                   validate delete command but do not
                                                                                    delete from the org or delete files
                                                                                    locally
  -f, --forceoverwrite                                                              ignore conflict warnings and
                                                                                    overwrite changes to the org
  -l, --testlevel=(NoTestRun|RunLocalTests|RunAllTestsInOrg)                        [default: NoTestRun] deployment
                                                                                    testing level
  -m, --metadata=<value>                                                            comma-separated list of names of
                                                                                    metadata components to delete
  -p, --sourcepath=<value>                                                          comma-separated list of source file
                                                                                    paths to delete
  -r, --noprompt                                                                    do not prompt for delete
                                                                                    confirmation
  -t, --tracksource                                                                 If the delete succeeds, update the
                                                                                    source tracking information, similar
                                                                                    to push
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 33 minutes] wait time for
                                                                                    command to finish in minutes
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --verbose                                                                         verbose output of delete result

DESCRIPTION
  delete source from your project and from a non-source-tracked org

  IMPORTANT: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained
  certain terms to avoid any effect on customer implementations.

  Use this command to delete components from orgs that don’t have source tracking.

  To remove deleted items from scratch orgs, which have change tracking, use "sfdx force:source:push".

EXAMPLES
  $ sfdx force:source:delete -m <metadata>

  $ sfdx force:source:delete -p path/to/source
```

_See code: [src/commands/force/source/delete.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/delete.ts)_

## `sfdx force:source:deploy [--soapdeploy] [-w <minutes>] [-o] [-g] [--purgeondelete -x <filepath>] [-q <id> | -c | -l NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg | -r <array> | -t] [-m <array>] [-p <array>] [--predestructivechanges <filepath> ] [--postdestructivechanges <filepath> ] [-f ] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

deploy source to an org

```
USAGE
  $ sfdx force:source:deploy [--soapdeploy] [-w <minutes>] [-o] [-g] [--purgeondelete -x <filepath>] [-q <id> | -c | -l
    NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg | -r <array> | -t] [-m <array>] [-p <array>]
    [--predestructivechanges <filepath> ] [--postdestructivechanges <filepath> ] [-f ] [--resultsdir <directory>]
    [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -c, --checkonly
      validate deploy but don’t save to the org

  -f, --forceoverwrite
      ignore conflict warnings and overwrite changes to the org

  -g, --ignorewarnings
      whether a warning will allow a deployment to complete successfully

  -l, --testlevel=(NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg)
      deployment testing level

  -m, --metadata=<value>
      comma-separated list of metadata component names

  -o, --ignoreerrors
      ignore any errors and do not roll back deployment

  -p, --sourcepath=<value>
      comma-separated list of source file paths to deploy

  -q, --validateddeployrequestid=<value>
      deploy request ID of the validated deployment to run a Quick Deploy

  -r, --runtests=<value>
      tests to run if --testlevel RunSpecifiedTests

  -t, --tracksource
      if the deploy succeeds, update source tracking information; doesn't delete locally deleted files from org unless you
      also specify --predestructivechanges or --postdestructivechanges

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 33 minutes] wait time for command to finish in minutes

  -x, --manifest=<value>
      file path for manifest (package.xml) of components to deploy

  --apiversion=<value>
      override the api version used for api requests made by this command

  --coverageformatters=clover,cobertura,html-spa,html,json,json-summary,lcovonly,none,teamcity,text,text-summary
      format of the code coverage results

  --json
      format output as json

  --junit
      output JUnit test results

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

  --postdestructivechanges=<value>
      file path for a manifest (destructiveChangesPost.xml) of components to delete after the deploy

  --predestructivechanges=<value>
      file path for a manifest (destructiveChangesPre.xml) of components to delete before the deploy

  --purgeondelete
      specify that deleted components in the destructive changes manifest file are immediately eligible for deletion
      rather than being stored in the Recycle Bin

  --resultsdir=<value>
      output directory for code coverage and JUnit results; defaults to the deploy ID

  --soapdeploy
      deploy metadata with SOAP API instead of REST API

  --verbose
      verbose output of deploy result

DESCRIPTION
  deploy source to an org

  IMPORTANT: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained
  certain terms to avoid any effect on customer implementations.

  Use this command to deploy source (metadata that’s in source format) to an org.

  To take advantage of change tracking with scratch orgs, use "sfdx force:source:push".

  To deploy metadata that’s in metadata format, use "sfdx force:mdapi:deploy".

  The source you deploy overwrites the corresponding metadata in your org. This command does not attempt to merge your
  source with the versions in your org.

  To run the command asynchronously, set --wait to 0, which immediately returns the job ID. This way, you can continue
  to use the CLI.

  To check the status of the job, use force:source:deploy:report.

  If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of
  double quotes. On Windows, if the list contains commas, also enclose the entire list in one set of double quotes.

  If you use the --manifest, --predestructivechanges, or --postdestructivechanges parameters, run the
  force:source:manifest:create command to easily generate the different types of manifest files.

EXAMPLES
  To deploy the source files in a directory:

  	 $ sfdx force:source:deploy -p path/to/source

  To deploy a specific Apex class and the objects whose source is in a directory:

  	$ sfdx force:source:deploy -p "path/to/apex/classes/MyClass.cls,path/to/source/objects"

  To deploy source files in a comma-separated list that contains spaces:

     $ sfdx force:source:deploy -p "path/to/objects/MyCustomObject/fields/MyField.field-meta.xml, path/to/apex/classes"

  To deploy all Apex classes:

     $ sfdx force:source:deploy -m ApexClass

  To deploy a specific Apex class:

     $ sfdx force:source:deploy -m ApexClass:MyApexClass

  To deploy a specific Apex class and update source tracking files :

     $ sfdx force:source:deploy -m ApexClass:MyApexClass --tracksource

  To deploy all custom objects and Apex classes:

     $ sfdx force:source:deploy -m "CustomObject,ApexClass"

  To deploy all Apex classes and two specific profiles (one of which has a space in its name):

     $ sfdx force:source:deploy -m "ApexClass, Profile:My Profile, Profile: AnotherProfile"

  To deploy all components listed in a manifest:

     $ sfdx force:source:deploy -x path/to/package.xml

  To run the tests that aren’t in any managed packages as part of a deployment:

     $ sfdx force:source:deploy -m ApexClass -l RunLocalTests

  To check whether a deployment would succeed (to prepare for Quick Deploy):

     $ sfdx force:source:deploy -m ApexClass -l RunAllTestsInOrg -c

  To deploy an already validated deployment (Quick Deploy):

      $ sfdx force:source:deploy -q 0Af9A00000FTM6pSAH`

  To run a destructive operation before the deploy occurs:

      $ sfdx force:source:deploy --manifest package.xml --predestructivechanges destructiveChangesPre.xml

  To run a destructive operation after the deploy occurs:

      $ sfdx force:source:deploy --manifest package.xml --postdestructivechanges destructiveChangesPost.xml
```

_See code: [src/commands/force/source/deploy.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/deploy.ts)_

## `sfdx force:source:deploy:cancel [-w <minutes>] [-i <id>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

cancel a source deployment

```
USAGE
  $ sfdx force:source:deploy:cancel [-w <minutes>] [-i <id>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --jobid=<value>                                                               job ID of the deployment you want to
                                                                                    cancel; defaults to your most recent
                                                                                    CLI deployment if not specified
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 33 minutes] wait time for
                                                                                    command to finish in minutes
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  cancel a source deployment

  Use this command to cancel a specified asynchronous source deployment. You can also specify a wait time (in minutes)
  to check for updates to the canceled deploy status.

  To run the command asynchronously, set --wait to 0, which immediately returns the job ID. This way, you can continue
  to use the CLI.

  To check the status of the job, use force:source:deploy:report.

EXAMPLES
  Deploy a directory of files to the org

    $ sfdx force:source:deploy -d <directory>

  Now cancel this deployment and wait two minutes

    $ sfdx force:source:deploy:cancel -w 2

  If you have multiple deployments in progress and want to cancel a specific one, specify the job ID

    $ sfdx force:source:deploy:cancel -i <jobid>

  Check the status of the cancel job

    $ sfdx force:source:deploy:report
```

_See code: [src/commands/force/source/deploy/cancel.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/deploy/cancel.ts)_

## `sfdx force:source:deploy:report [-w <minutes>] [-i <id>] [--resultsdir <directory>] [--coverageformatters <array>] [--junit] [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

check the status of a metadata deployment

```
USAGE
  $ sfdx force:source:deploy:report [-w <minutes>] [-i <id>] [--resultsdir <directory>] [--coverageformatters <array>] [--junit]
    [-u <string>] [--apiversion <string>] [--verbose] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -i, --jobid=<value>
      job ID of the deployment you want to check; defaults to your most recent CLI deployment if not specified

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 33 minutes] wait time for command to finish in minutes

  --apiversion=<value>
      override the api version used for api requests made by this command

  --coverageformatters=clover,cobertura,html-spa,html,json,json-summary,lcovonly,none,teamcity,text,text-summary
      format of the code coverage results

  --json
      format output as json

  --junit
      output JUnit test results

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

  --resultsdir=<value>
      output directory for code coverage and JUnit results; defaults to the deploy ID

  --verbose
      verbose output of deploy result

DESCRIPTION
  check the status of a metadata deployment

  Specify the job ID for the deploy you want to check. You can also specify a wait time (minutes) to check for updates
  to the deploy status.

EXAMPLES
  Deploy a directory of files to the org

   $ sfdx force:source:deploy -d <directory>

  Now cancel this deployment and wait two minutes

   $ sfdx force:source:deploy:cancel -w 2

  If you have multiple deployments in progress and want to cancel a specific one, specify the job ID

   $ sfdx force:source:deploy:cancel -i <jobid>

  Check the status of the cancel job

   $ sfdx force:source:deploy:report
```

_See code: [src/commands/force/source/deploy/report.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/deploy/report.ts)_

## `sfdx force:source:ignored:list [-p <filepath>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

check your local project package directories for forceignored files

```
USAGE
  $ sfdx force:source:ignored:list [-p <filepath>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -p, --sourcepath=<value>                                                          file or directory of files that the
                                                                                    command checks for foreceignored
                                                                                    files
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  check your local project package directories for forceignored files
```

_See code: [src/commands/force/source/ignored/list.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/ignored/list.ts)_

## `sfdx force:source:manifest:create [-m <array>] [-p <array>] [-n <string> | -t pre|post|destroy|package] [-c <array> --fromorg <string>] [-o <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

create a project manifest that lists the metadata components you want to deploy or retrieve

```
USAGE
  $ sfdx force:source:manifest:create [-m <array>] [-p <array>] [-n <string> | -t pre|post|destroy|package] [-c <array> --fromorg
    <string>] [-o <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -c, --includepackages=<value>                                                     comma-separated list of package
                                                                                    types (managed, unlocked) whose
                                                                                    metadata is included in the
                                                                                    manifest; by default, metadata in
                                                                                    packages is ignored
  -m, --metadata=<value>                                                            comma-separated list of names of
                                                                                    metadata components to include in
                                                                                    the manifest
  -n, --manifestname=<value>                                                        name of a custom manifest file to
                                                                                    create
  -o, --outputdir=<value>                                                           directory to save the created
                                                                                    manifest
  -p, --sourcepath=<value>                                                          comma-separated list of paths to the
                                                                                    local source files to include in the
                                                                                    manifest
  -t, --manifesttype=(pre|post|destroy|package)                                     type of manifest to create; the type
                                                                                    determines the name of the created
                                                                                    file
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --fromorg=<value>                                                                 username or alias of the org that
                                                                                    contains the metadata components
                                                                                    from which to build a manifest
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  create a project manifest that lists the metadata components you want to deploy or retrieve

  Create a manifest from a list of metadata components (--metadata) or from one or more local directories that contain
  source files (--sourcepath). You can specify either of these parameters, not both.

  Use --manifesttype to specify the type of manifest you want to create. The resulting manifest files have specific
  names, such as the standard package.xml or destructiveChanges.xml to delete metadata. Valid values for this parameter,
  and their respective file names, are:

  package :  package.xml (default)

  pre : destructiveChangesPre.xml

  post : destructiveChangesPost.xml

  destroy : destructiveChanges.xml

  See https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm for
  information about these destructive manifest files.

  Use --manifestname to specify a custom name for the generated manifest if the pre-defined ones don’t suit your needs.
  You can specify either --manifesttype or --manifestname, but not both.

EXAMPLES
  $ sfdx force:source:manifest:create -m ApexClass

  $ sfdx force:source:manifest:create -m ApexClass:MyApexClass --manifesttype destroy

  $ sfdx force:source:manifest:create --sourcepath force-app --manifestname myNewManifest

  $ sfdx force:source:manifest:create --fromorg test@myorg.com --includepackages unlocked
```

_See code: [src/commands/force/source/manifest/create.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/manifest/create.ts)_

## `sfdx force:source:open -f <filepath> [-r] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

edit a Lightning Page with Lightning App Builder

```
USAGE
  $ sfdx force:source:open -f <filepath> [-r] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --sourcefile=<value>                                                          (required) file to edit
  -r, --urlonly                                                                     generate a navigation URL; don’t
                                                                                    launch the editor
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  edit a Lightning Page with Lightning App Builder

  Opens the specified Lightning Page in Lightning App Builder. Lightning Page files have the suffix .flexipage-meta.xml,
  and are stored in the flexipages directory.

  If you specify a Visualforce page, which has a .page suffix, the page opens in your browser so you can preview it. If
  you specify a different type of file, this command opens your org’s home page.

  The file opens in your default browser.

  If no browser-based editor is available for the selected file, this command opens your org's home page.

  To generate a URL for the browser-based editor but not open the editor, use --urlonly.

EXAMPLES
  $ sfdx force:source:open -f path/to/source

  $ sfdx force:source:open -r -f path/to/source

  $ sfdx force:source:open -f path/to/source -u my-user@my-org.com
```

_See code: [src/commands/force/source/open.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/open.ts)_

## `sfdx force:source:pull [-f] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

pull source from the scratch org to the project

```
USAGE
  $ sfdx force:source:pull [-f] [-w <minutes>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --forceoverwrite
      ignore conflict warnings and overwrite changes to the project

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 33 minutes] The number of minutes to wait for the command to complete and display results to the terminal
      window. If the command continues to run after the wait period, the CLI returns control of the terminal window to
      you. The default is 33 minutes.

  --apiversion=<value>
      override the api version used for api requests made by this command

  --json
      format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

DESCRIPTION
  pull source from the scratch org to the project

ALIASES
  $ sfdx force:source:beta:pull
```

_See code: [src/commands/force/source/pull.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/pull.ts)_

## `sfdx force:source:push [-f] [-w <minutes>] [-g] [-u <string>] [--apiversion <string>] [--quiet] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

push source to a scratch org from the project

```
USAGE
  $ sfdx force:source:push [-f] [-w <minutes>] [-g] [-u <string>] [--apiversion <string>] [--quiet] [--json]
    [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --forceoverwrite
      ignore conflict warnings and overwrite changes to scratch org

  -g, --ignorewarnings
      deploy changes even if warnings are generated

  -u, --targetusername=<value>
      username or alias for the target org; overrides default target org

  -w, --wait=<value>
      [default: 33 minutes] Number of minutes to wait for the command to complete and display results to the terminal
      window. If the command continues to run after the wait period, the CLI returns control of the terminal window to
      you. The default is 33 minutes.

  --apiversion=<value>
      override the api version used for api requests made by this command

  --json
      format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

  --quiet
      minimize json and sdtout output on success

DESCRIPTION
  push source to a scratch org from the project

ALIASES
  $ sfdx force:source:beta:push
```

_See code: [src/commands/force/source/push.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/push.ts)_

## `sfdx force:source:retrieve [-p <array> | -x <filepath> | -m <array>] [-w <minutes>] [-n <array>] [-f -t] [-u <string>] [-a <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

retrieve source from an org

```
USAGE
  $ sfdx force:source:retrieve [-p <array> | -x <filepath> | -m <array>] [-w <minutes>] [-n <array>] [-f -t] [-u <string>]
    [-a <string>] [--verbose] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -a, --apiversion=<value>                                                          override the api version used for
                                                                                    api requests made by this command
  -f, --forceoverwrite                                                              ignore conflict warnings and
                                                                                    overwrite changes to the project
  -m, --metadata=<value>                                                            comma-separated list of metadata
                                                                                    component names
  -n, --packagenames=<value>                                                        a comma-separated list of packages
                                                                                    to retrieve
  -p, --sourcepath=<value>                                                          comma-separated list of source file
                                                                                    paths to retrieve
  -t, --tracksource                                                                 if the retrieve succeeds, update
                                                                                    source tracking information; doesn't
                                                                                    delete local files that were deleted
                                                                                    in the org
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -w, --wait=<value>                                                                [default: 33 minutes] wait time for
                                                                                    command to finish in minutes
  -x, --manifest=<value>                                                            file path for manifest (package.xml)
                                                                                    of components to retrieve
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
  --verbose                                                                         verbose output of retrieve result

DESCRIPTION
  retrieve source from an org

  Use this command to retrieve source (metadata that’s in source format) from an org.

  To take advantage of change tracking with scratch orgs, use "sfdx force:source:pull".

  To retrieve metadata that’s in metadata format, use "sfdx force:mdapi:retrieve".

  The source you retrieve overwrites the corresponding source files in your local project. This command does not attempt
  to merge the source from your org with your local source files.

  If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of
  double quotes. On Windows, if the list contains commas, also enclose it in one set of double quotes.

EXAMPLES
  To retrieve the source files in a directory:

     $ sfdx force:source:retrieve -p path/to/source

  To retrieve a specific Apex class and the objects whose source is in a directory:

     $ sfdx force:source:retrieve -p "path/to/apex/classes/MyClass.cls,path/to/source/objects"

  To retrieve source files in a comma-separated list that contains spaces:

     $ sfdx force:source:retrieve -p "path/to/objects/MyCustomObject/fields/MyField.field-meta.xml, path/to/apex/classes"

  To retrieve all Apex classes:

     $ sfdx force:source:retrieve -m ApexClass

  To retrieve a specific Apex class:

     $ sfdx force:source:retrieve -m ApexClass:MyApexClass

  To retrieve a specific Apex class and update source tracking files:

     $ sfdx force:source:retrieve -m ApexClass:MyApexClass -t

  To retrieve all custom objects and Apex classes:

     $ sfdx force:source:retrieve -m "CustomObject,ApexClass"

  To retrieve all Apex classes and two specific profiles (one of which has a space in its name):

     $ sfdx force:source:retrieve -m "ApexClass, Profile:My Profile, Profile: AnotherProfile"

  To retrieve all metadata components listed in a manifest:

     $ sfdx force:source:retrieve -x path/to/package.xml

  To retrieve metadata from a package or multiple packages:

     $ sfdx force:source:retrieve -n MyPackageName

     $ sfdx force:source:retrieve -n "Package1, PackageName With Spaces, Package3"

  To retrieve all metadata from a package and specific components that aren’t in the package, specify both -n | --packagenames and one other scoping parameter:

     $ sfdx force:source:retrieve -n MyPackageName -p path/to/apex/classes

     $ sfdx force:source:retrieve -n MyPackageName -m ApexClass:MyApexClass

     $ sfdx force:source:retrieve -n MyPackageName -x path/to/package.xml
```

_See code: [src/commands/force/source/retrieve.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/retrieve.ts)_

## `sfdx force:source:status [-l | -r] [-u <string>] [--apiversion <string>] [--concise] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

list local changes and/or changes in a scratch org

```
USAGE
  $ sfdx force:source:status [-l | -r] [-u <string>] [--apiversion <string>] [--concise] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -l, --local                                                                       list the changes that have been made
                                                                                    locally
  -r, --remote                                                                      list the changes that have been made
                                                                                    in the scratch org
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --concise                                                                         show only the changes that will be
                                                                                    pushed or pulled; omits files that
                                                                                    are forceignored
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  list local changes and/or changes in a scratch org

ALIASES
  $ sfdx force:source:beta:status

EXAMPLES
  $ sfdx force:source:status -l

  $ sfdx force:source:status -r

  $ sfdx force:source:status

  $ sfdx force:source:status -u me@example.com --json
```

_See code: [src/commands/force/source/status.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/status.ts)_

## `sfdx force:source:tracking:clear [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

clear all local source tracking information

```
USAGE
  $ sfdx force:source:tracking:clear [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -p, --noprompt                                                                    do not prompt for source tracking
                                                                                    override confirmation
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  clear all local source tracking information

  WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

  Clears all local source tracking information. When you next run force:source:status, the CLI displays all local and
  remote files as changed, and any files with the same name are listed as conflicts.

ALIASES
  $ sfdx force:source:beta:tracking:clear
```

_See code: [src/commands/force/source/tracking/clear.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/tracking/clear.ts)_

## `sfdx force:source:tracking:reset [-r <integer>] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

reset local and remote source tracking

```
USAGE
  $ sfdx force:source:tracking:reset [-r <integer>] [-p] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -p, --noprompt                                                                    do not prompt for source tracking
                                                                                    override confirmation
  -r, --revision=<value>                                                            reset to a specific SourceMember
                                                                                    revision counter number
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  reset local and remote source tracking

  WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

  Resets local and remote source tracking so that the CLI no longer registers differences between your local files and
  those in the org. When you next run force:source:status, the CLI returns no results, even though conflicts might
  actually exist. The CLI then resumes tracking new source changes as usual.

  Use the --revision parameter to reset source tracking to a specific revision number of an org source member. To get
  the revision number, query the SourceMember Tooling API object with the force:data:soql:query command. For example:

  $ sfdx force:data:soql:query -q "SELECT MemberName, MemberType, RevisionCounter FROM SourceMember" -t

ALIASES
  $ sfdx force:source:beta:tracking:reset
```

_See code: [src/commands/force/source/tracking/reset.ts](https://github.com/salesforcecli/plugin-source/blob/v2.0.8/src/commands/force/source/tracking/reset.ts)_

<!-- commandsstop -->
