# plugin-trust

[![NPM](https://img.shields.io/npm/v/@salesforce/plugin-trust.svg?label=@salesforce/plugin-trust)](https://www.npmjs.com/package/@salesforce/plugin-trust) [![CircleCI](https://circleci.com/gh/salesforcecli/plugin-trust/tree/main.svg?style=shield)](https://circleci.com/gh/salesforcecli/plugin-trust/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/@salesforce/plugin-trust.svg)](https://npmjs.org/package/@salesforce/plugin-trust) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-trust/main/LICENSE.txt)

Verify the authenticity of a plugin being installed with `plugins:install`.

This plugin is bundled with the [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli). For more information on the CLI, read the [getting started guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm).

We always recommend using the latest version of these commands bundled with the CLI, however, you can install a specific version or tag if needed.

### Allowlisting

If a plugin needs to be installed in a unattended fashion as is the case with automation. The plugin acceptance prompt can be avoided by placing the plugin name in \$HOME/.config/sfdx/unsignedPluginAllowList.json

```json
[
    "@salesforce/npmName",
    "plugin2",
    ...
]
```

If a plugin is not signed you then won't get a prompt confirming the installation of an unsigned plugin. Instead you'll get a message stating that the plugin was allowlisted and the installation will proceed as normal.

### Additional Verification Information

In addition to signature verification additional checks are in place to help ensure authenticity of plugins.

DNS - The public key url and signature urls must have an https scheme and originate from developer.salesforce.com
Cert Pinning - The digital fingerprint of developer.salesforce.com's certificate is validated. This helps prevent man in the middle attacks.

## Install

```bash
sfdx plugins:install trust@x.y.z
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
git clone git@github.com:salesforcecli/plugin-trust

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/run` or `./bin/run.cmd` file.

```bash
# Run using local run file.
./bin/run plugins:trust
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

- [`@salesforce/plugin-trust plugins:trust:verify -n <string> [-r <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#salesforceplugin-trust-pluginstrustverify--n-string--r-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `@salesforce/plugin-trust plugins:trust:verify -n <string> [-r <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

validate a digital signature for a npm package

```
USAGE
  $ @salesforce/plugin-trust plugins:trust:verify -n <string> [-r <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -n, --npm=<value>                                                                 (required) Specify the npm name.
                                                                                    This can include a tag/version
  -r, --registry=<value>                                                            The registry name. the behavior is
                                                                                    the same as npm
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

DESCRIPTION
  validate a digital signature for a npm package

EXAMPLES
  sfdx plugins:trust:verify --npm @scope/npmName --registry http://my.repo.org:4874

  sfdx plugins:trust:verify --npm @scope/npmName
```

_See code: [src/commands/plugins/trust/verify.ts](https://github.com/salesforcecli/plugin-trust/blob/v2.0.0/src/commands/plugins/trust/verify.ts)_

<!-- commandsstop -->
