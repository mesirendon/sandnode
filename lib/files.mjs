import CLI from 'clui';
import fs from 'fs';
import path from 'path';
import shell from 'shelljs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const Spinner = CLI.Spinner;


export const copyFiles = () => {
  console.log(__dirname);
  const spinner = new Spinner('Copying files');
  spinner.start();
  shell.cp('-R', path.join(fs.realpathSync(__dirname), '..', 'assets', '*'), path.resolve(process.cwd()));
  shell.cp('-R', path.join(fs.realpathSync(__dirname), '..', 'assets', '.babelrc'), path.resolve(process.cwd()));
  spinner.stop();
}