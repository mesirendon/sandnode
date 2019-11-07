#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const inquirer = require('./lib/inquirer');
const packager = require('./lib/package.js');
const files = require('./lib/files.js');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('SandNode', { horizontalLayout: 'universal smushing' })
  )
);

const run = async () => {
  const packInit = await inquirer.promptProjectQuestions();
  console.log(chalk.green('Package initialization...'));
  const result = await packager.installPacks(packInit);
  console.log(chalk.green('Scaffolding directory...'));
  files.copyFiles();
}

run();
