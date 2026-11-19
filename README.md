# sfdx-scan-pull-request

Runs [Salesforce Code Analyzer](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_code-analyzer.html) (`sf code-analyzer`) on a pull request or individual commit and generates in-line comments with the findings.

![Example](images/sfdx-scan-pull-request.png)

On a pull request, only files changed in the PR are scanned, and a violation is reported when **any** of its lines were added or modified in the PR. In `comments` mode, the comment is placed on the changed lines within the violation. In `check-runs` mode, the annotation covers the violation's full range.

## Inputs

| NOTE: All inputs are optional |
| ----------------------------- |

## `rule-selector`

Space delimited rule selectors. Each is passed to `sf code-analyzer run --rule-selector`. Defaults to `Recommended`. See the [rule selector docs](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/rules-select.html). ie:

```
rule-selector: "pmd:Security eslint:Recommended"
```

## `config-file`

Path to a [`code-analyzer.yml`](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/config-custom.html) file. If omitted, `./code-analyzer.yml` is used when present. Use this file for what used to be `pmdconfig`, `custom-pmd-rules`, `eslintconfig`, and `tsconfig`, ie:

```yml
engines:
  pmd:
    java_classpath_entries: # JARs containing custom Java rules
      - target/pmd-rules-1.0.0.jar
    custom_rulesets: # ruleset XML files on disk, or paths inside a JAR above
      - rulesets/myRuleset.xml
      - category/apex/my-rules.xml
  eslint:
    eslint_config_file: .eslintrc.json
```

Custom rules are tagged `Recommended` and `Custom`, so the default `rule-selector` includes them. To change a rule's severity or tags, use the `rules` section of the config file.

> **PMD 7:** Code Analyzer v5 runs PMD 7. Custom Java rules compiled against PMD 6 fail to load (e.g. `NoSuchMethodError: ...findDescendantsOfType`) and must be ported and rebuilt. See the [PMD 7 migration guide](https://docs.pmd-code.org/latest/pmd_userdocs_migrating_to_pmd7.html). XPath rules mostly work as-is. If an engine fails to load, the action fails rather than reporting partial results.

## `severity-threshold`

Fails the action when violations of this severity (or more severe) are found on changed lines. Severities range from 1 (Critical) to 5 (Info). If not set, only `strictly-enforced-rules` fail the action.

## `strictly-enforced-rules`

A JSON string which defines the rules which will be strictly enforced regardless of their priority. Enforced rules are identified by their engine and rule name.

ex:

```json
[{ "engine": "pmd", "rule": "AvoidDebugStatements" }]
```

## `target`

Optionally provide this to scan a whole directory instead of just the diff. If the action is run on a push, `target` will be respected; because GitHub does not allow the uploading of comments during a PR run for a file that hasn't been changed on the latest commit for that PR, this option is ignored when running for a pull request (in favor of just scanning the diff, as it would if this option wasn't supplied).

## `report-mode`

Details which way to report issues back to GitHub, can be either:

- `check-runs` - Shows findings as annotations on the PR (default)
- `comments` - Shows findings as comments

## `delete-resolved-comments`

When set to true, will delete resolved comments from a PR. Defaults to `false`. Will do nothing unless `report-mode` is set to `comments`.

## Example usage

The workflow token needs `pull-requests: write` for `comments` mode, or `checks: write` for `check-runs` mode. `fetch-depth: 0` is required so the action can compute the PR diff.

```
name: Static Analysis
on:
  pull_request:
    types: [opened, reopened, synchronize]
  workflow_dispatch:
jobs:
  analyze:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
      checks: write
    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0

      - name: Install Salesforce CLI and Code Analyzer
        run: |
          npm install @salesforce/cli -g
          sf plugins install code-analyzer

      - name: Run Code Analyzer - Report findings as comments
        uses: mitchspano/sfdx-scan-pull-request@v[LATEST_VERSION_HERE]
        with:
          report-mode: comments
          severity-threshold: 2
          strictly-enforced-rules: '[{ "engine": "pmd", "rule": "AvoidDebugStatements" }]'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Code Analyzer requires Java 11+ (PMD) and Python 3.10+ (Flow engine); both are preinstalled on `ubuntu-latest`.

## Migrating from v0.1.x

v0.2.0 replaces the retired `@salesforce/sfdx-scanner` plugin with Code Analyzer v5.

| v0.1.x | v0.2.x |
| --- | --- |
| `npm install sfdx-cli -g` + `sfdx plugins:install @salesforce/sfdx-scanner` | `npm install @salesforce/cli -g` + `sf plugins install code-analyzer` |
| `engine`, `category` | `rule-selector` (e.g. `pmd:Security`) |
| `pmdconfig`, `custom-pmd-rules` | `custom_rulesets` / `java_classpath_entries` in `code-analyzer.yml` |
| `eslintconfig`, `eslint-env`, `tsconfig` | `engines.eslint` in `code-analyzer.yml` |
| severities 1–3 | severities 1–5; review your `severity-threshold` |
| `strictly-enforced-rules` with `engine`/`category`/`rule` | `engine`/`rule` (`category` ignored) |
| PMD 6 custom Java rules | rebuild against PMD 7 (see above) |

### Included Dependencies

This package includes the following version of the required dependencies:

| npm package     | included version |
| --------------- | ---------------- |
| @actions/core   | 1.10.0           |
| @actions/github | 5.1.1            |
| @octokit/action | 4.0.4            |
| parse-diff      | 0.9.0            |
| simple-git      | 3.17.0           |


### Making Modifications

To make modifications to this project, be sure to run the following command before raising a pull request:

```
npm run build
```

This will use [ncc](https://github.com/vercel/ncc) to bundle the contents of the project and `node_modules` into the `dist` folder.

For more information regarding the inclusion of these static versioned dependencies and the necessity of the `build` command, check out this [documentation](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github)
