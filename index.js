// packages needed for app
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// const generateREADME = ({}) =>
//   `![GitHub license](https://img.shields.io/badge/license-mit-blue.svg)
//   # ${data.title}

//   ## Table of Contents
//   - [Description](#description)
//   - [Installation](#installation)
//   - [Usage](#usage)
//   - [License](#license)
//   - [Contribution]{#contribution}
//   - [Tests](#tests)
//   - [Contact](#contact)

//   ## Description
//   ${description}
  
//   ## Installation Instructions
//   ${installation}
  
//   ## Usage
//   ${usage}
  
//   ## License
  
  
//   ## Contribution
//   ${contributing}
  
//   ## Tests
//   ${tests}
  
//   ## Contact
//   If you have any further questions:
//   Read through the documentation on github.com/${github}
//   Or contact me directly at ${email}`;

//array of questions created with inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title fo your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for the use of your project.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you use for this project?',
      choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can users contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests for your application here and info on how to run them.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
  ])
  // function that writes the README
  .then((answers) => {
    const READMEContent = generateMarkdown(answers);

    fs.writeFile('README.md', READMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
