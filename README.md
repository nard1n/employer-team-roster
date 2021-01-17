# Employee Summary

## Description
![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)


Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

Screenshot of application:
![Screenshot](image.png)

To watch a screencast of the running application, please click here: [Screencast](https://...)

This application allows management to generate a webpage that diplays the employees' basic information with quick access to emails and Github profiles

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Installation
To install, simply clone or download the repository

## Usage
The application prompts the user to build an engineering team. The team consists of a manager, and any number of engineers and interns
team consists of a manager, and any number of engineers and interns.
- The application will prompt the user for information about the team manager and then information about the team members.
- User has the ability to input any number of team members
- Team members can have different titles (e.g. software engineer or interns)
- Application passes included unit tests
- When user completes building their team, application creates an HTML file that displays the team roster based on provided info
-- Inquirer to to prompt the user for their email, id, and specific information based on role (engineer = github, intern = school)
-- Jest for running tests

      ````````````````````````````````````
      recommended to start with a directory structure that looks like this:

      lib/           // classes and helper code
      output/        // rendered output
      templates/     // HTML template(s)
      test/          // jest tests
        Employee.test.js
        Engineer.test.js
        Intern.test.js
        Manager.test.js
      app.js         // Runs the application

      ````````
      create multiple HTML templates (main.html, intern.html, engineer.html, manager.htm)
      ``````````````````````````````````

## Contributing
We love seeing community contribution to any opensource project! If you would like to contribute, please do.

## Tests
Unit tests included in test files. Make sure when making edits that all unit tests pass.

## License
This project is released under BSD 2 Clause opensource license:

https://opensource.org/licenses/BSD-2-Clause

## Questions
For more about my work, check out my Github profile: https://github.com/nard1n

If you have any questions and would like to chat, please feel free to send me an email directly to nardin.lachowski@gmail.com
