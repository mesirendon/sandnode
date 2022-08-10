import fs from 'fs';
import path from 'path';
import CLI from 'clui';
import shell from 'shelljs';

const Spinner = CLI.Spinner;

export const copyFiles = () => {
  const spinner = new Spinner('Copying files');
  spinner.start();
  shell.cp('-R', path.join(fs.realpathSync(__dirname), '..', 'assets', '*'), path.resolve(process.cwd()));
  shell.cp('-R', path.join(fs.realpathSync(__dirname), '..', 'assets', '.babelrc'), path.resolve(process.cwd()));
  spinner.stop();
}