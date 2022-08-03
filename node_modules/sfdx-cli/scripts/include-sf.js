#!/usr/bin/env node

const path = require('path');
const shelljs = require('shelljs');
const fs = require('fs');

const npmShow = JSON.parse(shelljs.exec('npm show @salesforce/cli dist-tags --json').stdout);
// make sure latest-rc tag exists, if not fallback to latest
const tag = npmShow['latest-rc'] ? 'latest-rc' : 'latest';
console.log(`---- Installing  @salesforce/cli@${tag} ----`);
shelljs.exec(`npm install @salesforce/cli@${tag} -g`);

const npmGlobalInstallPath = shelljs.exec('npm list -g --depth 0 | head -1').stdout.trim();
const sfGlobalPath = path.join(npmGlobalInstallPath, 'node_modules', '@salesforce', 'cli');

console.log(`---- Including SF ----`);
console.log(`  Moving sf from ${sfGlobalPath} to ./sf`);
shelljs.mv('-f', sfGlobalPath, 'sf');

const sfUnixPath = 'sf/bin/run';
const sfBin = path.join('bin', 'sf');
const sfdxBin = path.join('bin', 'sfdx');

console.log(`  Updating ${sfdxBin} with references to sf`);
const binContents = fs
  .readFileSync(sfdxBin, 'UTF-8')
  .replace(/sfdx/g, 'sf')
  .replace(/sf\/client/g, 'sfdx/client')
  .replace(/SFDX/g, 'SF')
  .replace(/\$DIR\/run/g, `$(dirname $DIR)/${sfUnixPath}`);

console.log(`  Writing ${sfBin}`);
fs.writeFileSync(sfBin, binContents);
shelljs.chmod('+x', sfBin);

const sfWinPath = 'sf\\bin\\run';
const sfCmd = path.join('bin', 'sf.cmd');
const sfdxCmd = path.join('bin', 'sfdx.cmd');

console.log(`  Updating ${sfdxCmd} with references to sf`);
const cmdContents = fs
  .readFileSync(sfdxCmd, 'UTF-8')
  .replace(/sfdx/g, 'sf')
  .replace(/sf\\client/g, 'sfdx/client')
  .replace(/SFDX/g, 'SF')
  .replace(/bin\\run/g, sfWinPath);

console.log(`  Writing ${sfCmd}`);
fs.writeFileSync(sfCmd, cmdContents);

console.log(`---- Finished ----`);
