# Description

This is the generator plugin for building plugins for the Salesforce CLI. The generated sfdx plugin and command are built on top of the [oclif cli framework](https://github.com/oclif/oclif). A plug-in adds functionality to Salesforce CLI. Some plug-ins are provided by Salesforce and are installed by default when you install the CLI. Some plug-ins, built by Salesforce and others, you install. When you have a requirement that an existing plug-in doesn’t meet, you can build your own using Node.js.

**Note:** As of @salesforce/command@1.3.0, if you want to override the static usage property you must use a getter. For consistency, we recommend keeping the standard behavior rather than overriding the usage property.


# Usage

## Check Your Salesforce CLI Version

Starting with Salesforce CLI version 6.8.2, the plug-in generator is offered as a core plugin and can be used out of the box. To check your Salesforce CLI version:


```
$ sfdx --version
sfdx-cli/6.42.0-ae478b3cb8 (darwin-x64) node-v8.9.4
```

## Generate a Salesforce CLI Plugin

Follow the **[Salesforce CLI Plug-In Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_plugins.meta/sfdx_cli_plugins/cli_plugins.htm) **to create and update your plug-in. In the guide you will discover how to develop your own plug-ins for Salesforce CLI. Explore the Salesforce CLI architecture. Learn how to generate a plug-in using Salesforce Plug-In Generator, how to use Salesforce’s libraries to add functionality to your plug-in, and how to debug issues. Learn about our suggested style guidelines for naming and messages, and about our recommended best practices for plug-ins. And, peruse useful resources.


# Related Docs and Repositories

* [@forcedotcom/cli-packages](https://github.com/forcedotcom/cli-packages) - Lerna repository containing Salesforce CLI command api.
* [@forcedotcom/sfdx-core](https://github.com/forcedotcom/sfdx-core) - API for working with a Salesforce DX project and managing Salesforce orgs
* [@oclif/command](https://github.com/oclif/command) - Base command for oclif; this can be used directly without the generator
* [@oclif/config](https://github.com/oclif/config) - Most of the core setup for oclif lives here
* [@oclif/errors](https://github.com/oclif/errors) - Renders and logs errors from commands
* [@oclif/cli-ux](https://github.com/oclif/cli-ux) - Library for common CLI UI utilities
* [@oclif/test](https://github.com/oclif/test) - Test helper for oclif
