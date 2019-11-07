const inquirer = require('inquirer');

module.exports = {
  promptProjectQuestions: () => {
    const questions = [
      {
        name: 'author',
        type: 'input',
        message: 'Author name:',
        validate: ( value ) => {
          if(value.length)
            return true;
          else
            return 'Please, enter your name';
        },
      },
      {
        name: 'email',
        type: 'input',
        message: 'Author email address:',
        validate: ( value ) => {
          if(value.length)
            return true;
          else
            return 'Please, enter your email address';
        },
      },
      {
        name: 'version',
        type: 'input',
        message: 'Project version',
        default: '1.0.0',
      },
      {
        name: 'license',
        type: 'input',
        message: 'License',
        default: 'MIT',
      },
      {
        name: 'packer',
        type: 'list',
        message: 'Start project using:',
        choices: ['yarn', 'npm'],
      },
    ];
    return inquirer.prompt(questions);
  },
};
