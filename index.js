#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import { promptProjectQuestions } from "./lib/inquirer.mjs";
import { installPacks } from "./lib/package.mjs";
import { copyFiles } from "./lib/files.mjs";

clear();
console.log(
  chalk.yellow(
    figlet.textSync('SandNode', { horizontalLayout: 'universal smushing' })
  )
);

const run = async () => {
  const packInit = await promptProjectQuestions();
  console.log(chalk.green('Package initialization...'));
  const result = await installPacks(packInit);
  console.log(chalk.green('Scaffolding directory...'));
  copyFiles();
}

run();
