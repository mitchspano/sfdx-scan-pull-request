# Custom Metadata Plugin

Tools for working with custom metadata types and their records.

[![Version](https://img.shields.io/npm/v/@salesforce/plugin-custom-metadata.svg)](https://www.npmjs.com/package/@salesforce/plugin-custom-metadata)
[![CircleCI](https://circleci.com/gh/salesforcecli/plugin-custom-metadata/tree/master.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-custom-metadata/tree/master)
[![License](https://img.shields.io/npm/l/@salesforce/plugin-custom-metadata.svg)](https://github.com/salesforcecli/plugin-custom-metadata/blob/master/LICENSE.txt)

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

## Install

```bash
sfdx plugins:install custom-metadata@x.y.z
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
git clone git@github.com:salesforcecli/plugin-custom-metadata

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/dev` or `./bin/dev.cmd` file.

```bash
# Run using local run file.
./bin/dev force:cmdt
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

- [`sfdx force:cmdt:create -n <string> [-l <string>] [-p <string>] [-v PackageProtected|Protected|Public] [-d <directory>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcecmdtcreate--n-string--l-string--p-string--v-packageprotectedprotectedpublic--d-directory---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:cmdt:field:create -n <string> -f Checkbox|Date|DateTime|Email|Number|Percent|Phone|Picklist|Text|TextArea|LongTextArea|Url [-p <array>] [-s <number>] [-l <string>] [-d <directory>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcecmdtfieldcreate--n-string--f-checkboxdatedatetimeemailnumberpercentphonepicklisttexttextarealongtextareaurl--p-array--s-number--l-string--d-directory---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:cmdt:generate -n <string> -s <string> [-l <string>] [-p <string>] [-v PackageProtected|Protected|Public] [-i] [-d <directory>] [-r <directory>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcecmdtgenerate--n-string--s-string--l-string--p-string--v-packageprotectedprotectedpublic--i--d-directory--r-directory--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:cmdt:record:create [name=value...] -t <string> -n <string> [-l <string>] [-p <string>] [-i <directory>] [-d <directory>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcecmdtrecordcreate-namevalue--t-string--n-string--l-string--p-string--i-directory--d-directory---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
- [`sfdx force:cmdt:record:insert -f <string> -t <string> [-i <directory>] [-d <directory>] [-n <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-forcecmdtrecordinsert--f-string--t-string--i-directory--d-directory--n-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx force:cmdt:create -n <string> [-l <string>] [-p <string>] [-v PackageProtected|Protected|Public] [-d <directory>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

creates a new custom metadata type in the current project

```
USAGE
  $ sfdx force:cmdt:create -n <string> [-l <string>] [-p <string>] [-v PackageProtected|Protected|Public] [-d
    <directory>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --outputdir=<value>                                                           directory to store the newly-created
                                                                                    custom metadata type files
  -l, --label=<value>                                                               label for the custom metadata type
  -n, --typename=<value>                                                            (required) unique object name for
                                                                                    the custom metadata type
  -p, --plurallabel=<value>                                                         plural version of the label value;
                                                                                    if blank, uses label
  -v, --visibility=(PackageProtected|Protected|Public)                              [default: Public] visibility of the
                                                                                    custom metadata type
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  creates a new custom metadata type in the current project

EXAMPLES
  Create a custom metadata type with developer name 'MyCustomType'; this name will also be used as the label:

      $ sfdx force:cmdt:create --typename MyCustomType

  Create a protected custom metadata type with a specific label:

      $ sfdx force:cmdt:create --typename MyCustomType --label "Custom Type" --plurallabel "Custom Types" --visibility Protected
```

_See code: [src/commands/force/cmdt/create.ts](https://github.com/salesforcecli/plugin-custom-metadata/blob/v2.0.0/src/commands/force/cmdt/create.ts)_

## `sfdx force:cmdt:field:create -n <string> -f Checkbox|Date|DateTime|Email|Number|Percent|Phone|Picklist|Text|TextArea|LongTextArea|Url [-p <array>] [-s <number>] [-l <string>] [-d <directory>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

generate a custom metadata field based on the field type provided

```
USAGE
  $ sfdx force:cmdt:field:create -n <string> -f
    Checkbox|Date|DateTime|Email|Number|Percent|Phone|Picklist|Text|TextArea|LongTextArea|Url [-p <array>] [-s <number>]
    [-l <string>] [-d <directory>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --outputdir=<value>
      directory to store newly-created field definition files

  -f, --fieldtype=(Checkbox|Date|DateTime|Email|Number|Percent|Phone|Picklist|Text|TextArea|LongTextArea|Url)
      (required) type of field

  -l, --label=<value>
      label for the field

  -n, --fieldname=<value>
      (required) unique name for the field

  -p, --picklistvalues=<value>
      comma-separated list of picklist values; required for Picklist fields

  -s, --decimalplaces=<value>
      number of decimal places to use for Number or Percent fields

  --json
      format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)
      [default: warn] logging level for this command invocation

DESCRIPTION
  generate a custom metadata field based on the field type provided

EXAMPLES
  Create a metadata file for a custom checkbox field:

      $ sfdx force:cmdt:field:create --fieldname MyField --fieldtype Checkbox

  Create a metadata file for a custom picklist field:

      $ sfdx force:cmdt:field:create --fieldname MyField --fieldtype Picklist --picklistvalues "A,B,C"

  Create a metadata file for a custom number field:

      $ sfdx force:cmdt:field:create --fieldname MyField --fieldtype Number --decimalplaces 2
```

_See code: [src/commands/force/cmdt/field/create.ts](https://github.com/salesforcecli/plugin-custom-metadata/blob/v2.0.0/src/commands/force/cmdt/field/create.ts)_

## `sfdx force:cmdt:generate -n <string> -s <string> [-l <string>] [-p <string>] [-v PackageProtected|Protected|Public] [-i] [-d <directory>] [-r <directory>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

generates a custom metadata type and all its records for the provided sObject

```
USAGE
  $ sfdx force:cmdt:generate -n <string> -s <string> [-l <string>] [-p <string>] [-v PackageProtected|Protected|Public]
    [-i] [-d <directory>] [-r <directory>] [-u <string>] [--apiversion <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --typeoutputdir=<value>                                                       [default:
                                                                                    force-app/main/default/objects]
                                                                                    directory to store newly-created
                                                                                    custom metadata type files
  -i, --ignoreunsupported                                                           ignore unsupported field types
  -l, --label=<value>                                                               label for the custom metadata type
  -n, --devname=<value>                                                             (required) name of the custom
                                                                                    metadata type
  -p, --plurallabel=<value>                                                         plural version of the label value;
                                                                                    if blank, uses label
  -r, --recordsoutputdir=<value>                                                    [default: force-app/main/default/cus
                                                                                    tomMetadata] directory to store
                                                                                    newly-created custom metadata record
                                                                                    files
  -s, --sobjectname=<value>                                                         (required) API name of the sObject
                                                                                    source for custom metadata
                                                                                    generation
  -u, --targetusername=<value>                                                      username or alias for the target
                                                                                    org; overrides default target org
  -v, --visibility=(PackageProtected|Protected|Public)                              [default: Public] visibility of the
                                                                                    custom metadata type
  --apiversion=<value>                                                              override the api version used for
                                                                                    api requests made by this command
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  generates a custom metadata type and all its records for the provided sObject

EXAMPLES
  Generate a custom metadata type from an sObject in the default target org:

      $ sfdx force:cmdt:generate --devname MyCMDT --sobjectname MySourceObject__c

  Generate a custom metadata type from an sObject in the specified target org; ignore unsupported field types instead of converting them to text:

      $ sfdx force:cmdt:generate --devname MyCMDT --sobjectname MySourceObject__c  --ignoreunsupported --targetusername 'alias or user email of the org containing the source type'

  Generate a protected custom metadata type from an sObject in the default target org:

      $ sfdx force:cmdt:generate --devname MyCMDT --sobjectname SourceCustomObject__c  --visibility Protected

  Generate a protected custom metadata type with a specific label from an sObject in the default target org:

      $ sfdx force:cmdt:generate --devname MyCMDT --label "My CMDT" --plurallabel "My CMDTs" --sobjectname SourceCustomSetting__c  --visibility Protected

  Generate a custom metadata type from an sObject in the default target org; put the resulting type metadata file in the specified directory:

      $ sfdx force:cmdt:generate --devname MyCMDT --sobjectname SourceCustomSetting__c --typeoutputdir 'path/to/my/cmdt/directory'

  Generate a custom metadata type from an sObject in the default target org; put the resulting record metadata file(s) in the specified directory:

      $ sfdx force:cmdt:generate --devname MyCMDT --sobjectname SourceCustomSetting__c --recordsoutputdir 'path/to/my/cmdt/record/directory'
```

_See code: [src/commands/force/cmdt/generate.ts](https://github.com/salesforcecli/plugin-custom-metadata/blob/v2.0.0/src/commands/force/cmdt/generate.ts)_

## `sfdx force:cmdt:record:create [name=value...] -t <string> -n <string> [-l <string>] [-p <string>] [-i <directory>] [-d <directory>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

create a new record for a given custom metadata type in the current project

```
USAGE
  $ sfdx force:cmdt:record:create [name=value...] -t <string> -n <string> [-l <string>] [-p <string>] [-i <directory>] [-d
    <directory>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --outputdir=<value>                                                           [default: force-app/main/default/cus
                                                                                    tomMetadata] directory to store
                                                                                    newly-created custom metadata record
                                                                                    files
  -i, --inputdir=<value>                                                            [default:
                                                                                    force-app/main/default/objects]
                                                                                    directory to pull the custom
                                                                                    metadata type definition from
  -l, --label=<value>                                                               label for the new record
  -n, --recordname=<value>                                                          (required) name for the new record
  -p, --protected=<option>                                                          [default: false] protect the record
                                                                                    when it is in a managed package
                                                                                    <options: true|false>
  -t, --typename=<value>                                                            (required) API name of the custom
                                                                                    metadata type to create a record for
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  create a new record for a given custom metadata type in the current project

EXAMPLES
  Create a record metadata file for custom metadata type 'MyCMT' with values specified for two custom fields:

      $ sfdx force:cmdt:record:create --typename MyCMT__mdt --recordname MyRecord My_Custom_Field_1=Foo My_Custom_Field_2=Bar

  Create a protected record metadata file for custom metadata type 'MyCMT' with a specific label and values specified for two custom fields:

      $ sfdx force:cmdt:record:create --typename MyCMT__mdt --recordname MyRecord --label "My Record" --protected true My_Custom_Field_1=Foo My_Custom_Field_2=Bar
```

_See code: [src/commands/force/cmdt/record/create.ts](https://github.com/salesforcecli/plugin-custom-metadata/blob/v2.0.0/src/commands/force/cmdt/record/create.ts)_

## `sfdx force:cmdt:record:insert -f <string> -t <string> [-i <directory>] [-d <directory>] [-n <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

create new custom metadata type records from a CSV file

```
USAGE
  $ sfdx force:cmdt:record:insert -f <string> -t <string> [-i <directory>] [-d <directory>] [-n <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -d, --outputdir=<value>                                                           [default: force-app/main/default/cus
                                                                                    tomMetadata] directory to store
                                                                                    newly-created custom metadata record
                                                                                    files
  -f, --filepath=<value>                                                            (required) path to the CSV file
  -i, --inputdir=<value>                                                            [default:
                                                                                    force-app/main/default/objects]
                                                                                    directory to pull the custom
                                                                                    metadata type definition from
  -n, --namecolumn=<value>                                                          [default: Name] column that is used
                                                                                    to determine the name of the record
  -t, --typename=<value>                                                            (required) API name of the custom
                                                                                    metadata type
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  create new custom metadata type records from a CSV file

EXAMPLES
  Create record metadata files for type 'My_CMDT_Name' (from your local project) based on values in a CSV file, using 'Name' as the column that specifies the record name:

      $ sfdx force:cmdt:record:insert --filepath path/to/my.csv --typename My_CMDT_Name

  Create record metadata files for type 'My_CMDT_Name' (from the specified directory) based on values in a CSV file, using 'PrimaryKey' as the column that specifies the record name:

      $ sfdx force:cmdt:record:insert --filepath path/to/my.csv --typename My_CMDT_Name --inputdir "path/to/my/cmdt/directory" --namecolumn "PrimaryKey"
```

_See code: [src/commands/force/cmdt/record/insert.ts](https://github.com/salesforcecli/plugin-custom-metadata/blob/v2.0.0/src/commands/force/cmdt/record/insert.ts)_

<!-- commandsstop -->

<!-- debugging-your-plugin -->

# Debugging your plugin

We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `hello:org` command:

1. Start the inspector

If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch:

```sh-session
sfdx hello:org -u myOrg@example.com --dev-suspend
```

Alternatively, to call your command using the `bin/dev` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:

```sh-session
NODE_OPTIONS=--inspect-brk bin/dev hello:org -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program.
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
   <br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
   Congrats, you are debugging!
