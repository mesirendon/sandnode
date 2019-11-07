#!/usr/bin/env node

const CLI = require('clui');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const { exec } = require('child_process');

const Spinner = CLI.Spinner;


const inquirer = require('./lib/inquirer');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('SandNode', { horizontalLayout: 'universal smushing' })
  )
);

const run = async () => {
  const packs = [
    "@babel/core",
    "@babel/cli",
    "@babel/preset-env",
    "@babel/node",
    "@babel/preset-stage-3",
    "nodemon",
    "babel-register",
  ];
  const packInit = await inquirer.promptProjectQuestions();
  const status = new Spinner('Setting packages');
  status.start();
  exec('pwd', (err, stdout, stderr) => {
    if(err) {
      chalk.red(console.error(err));
    } else {
      console.log(stdout);
      console.log(stderr);
    }
  });
  //if(packInit.packer === 'yarn') {
    //exec(`yarn config set init-author-name ${ packInit.author }`);
    //exec(`yarn config set init-author-email ${ packInit.email }`);
    //exec(`yarn config set init-version ${ packInit.version }`);
    //exec(`yarn config set init-license ${ packInit.license }`);
    //exec('yarn init -y');
    //exec(`yarn add -D ${ packs.join(' ') }`, (err, a, b) => {
      //if(err) console.error(err);
      //else {
        //console.log(a);
        //console.log(b);
      //}
    //});
  //} else {
    //exec('npm init -y');
    //exec(`npm i --save-dev ${ packs.join(' ') }`);
  //}
  status.stop();

}

run();
