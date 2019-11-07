const fs = require('fs');
const path = require('path');
const CLI = require('clui');
const shell = require('shelljs');

const Spinner = CLI.Spinner;

module.exports = {
  copyFiles: () => {
    const spinner = new Spinner('Copying files');
    spinner.start();
    shell.cp('-R', path.join(fs.realpathSync(__dirname), '..', 'assets', '*'), path.resolve(process.cwd()));
    shell.cp('-R', path.join(fs.realpathSync(__dirname), '..', 'assets', '.babelrc'), path.resolve(process.cwd()));
    spinner.stop();
  },
};
