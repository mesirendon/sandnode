import CLI from 'clui';
import shell from 'shelljs';
import npmAddScript from 'npm-add-script';

const Spinner = CLI.Spinner;

const packs = [
  "@babel/core",
  "@babel/cli",
  "@babel/preset-env",
  "@babel/node",
  "@babel/preset-stage-3",
  "@babel/plugin-syntax-import-meta",
  "@babel/plugin-proposal-class-properties",
  "nodemon",
  "mocha",
  "chai",
  "babel-register",
];

export const installPacks = (packInit) => new Promise((resolve) => {
  const spinner = new Spinner('Setting packages');
  spinner.start();

  if (packInit.packer === 'yarn') {
    shell.exec(`yarn config set init-author-name '${packInit.author}'`, { silent: true });
    shell.exec(`yarn config set init-author-email ${packInit.email}`, { silent: true });
    shell.exec(`yarn config set init-version ${packInit.version}`, { silent: true });
    shell.exec(`yarn config set init-license ${packInit.license}`, { silent: true });
    shell.exec('yarn init -y', { silent: true }, (err) => {
      if (err) console.log(err);
      shell.rm('~/.yarnrc');
    });
    shell.exec(`yarn add -D ${packs.join(' ')}`, { silent: true }, (code) => {
      spinner.stop();
      npmAddScript({ key: 'test', value: 'mocha --require @babel/register test/**/*.spec.js' });
      npmAddScript({ key: 'start', value: 'nodemon --exec babel-node index.js' });
      resolve(true);
    });
  } else {
    shell.exec(`npm set init.author.name '${packInit.author}'`);
    shell.exec(`npm set init.author.email ${packInit.email}`);
    shell.exec(`npm set init.version ${packInit.version}`);
    shell.exec(`npm set init.license ${packInit.license}`);
    shell.exec('npm init -y', { silent: true }, (err) => {
      if (err) console.log(err);
      shell.rm('~/.npmrc');
    });
    shell.exec(`npm i --save-dev ${packs.join(' ')}`, { silent: true }, (code) => {
      spinner.stop();
      npmAddScript({ key: 'test', value: 'mocha --require @babel/register test/**/*.spec.js', force: true });
      npmAddScript({ key: 'start', value: 'nodemon --exec \'clear;babel-node\' index.js' });
      resolve(true);
    });
  }
});