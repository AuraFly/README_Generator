// Packages
const inquirer = require('inquirer');
const fs = require('fs');

//Inquirer questions that will populate the readme
const userQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description of the application:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Are there installation instructions? If yes, describe. If no, leave blank.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What should users know if they want to contribute?',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'Select a license for your project:',
        name: 'license',
        choices: ['MIT', 'GNU--GPLv3', 'Apache--2.0', 'ISC'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitUsr',
    },
    {
        type: 'input',
        message: 'What email should users send questions to?',
        name: 'contact',
    },
]);
};

//function to write README file
const generateRM = ({
    title,
    description,
    installation,
    usage,
    contribution,
    license,
    gitUsr,
    contact
}) =>
  `# ${title}
  ![License](https://img.shields.io/badge/license-${license}-brightgreen)

  ## Description:
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Git Info](#git-info)
  - [Contact](#contact-me)


  # Installation
  ${installation}

  # Usage
  ${usage}

  # Contribution
  ${contribution}

  # Git Info
  Username: ${gitUsr}
  https://github.com/${gitUsr}

  # Contact Me
  [Contact Me](mailto:${contact})

  # License
  This application is covered under the ${license} open source license.

  `;

function genRMNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


// TODO: Create a function to initialize app
const init = () => {
    var rmNum = genRMNumber(1,9999);
    userQuestions()
    .then((answers) => fs.writeFileSync('README' + rmNum + ".md", generateRM(answers)))
    .then(() => console.log('Successfully created README'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();
