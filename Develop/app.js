const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//declaring empty array for employees
let employees = [];

//list of prompts for gathering employee's information
const prompts = [
    {
        type: 'list',
        name: 'title',
        message: "Which of the following describes this employee's job title?",
        choices: ['Manager','Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is this employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this employee's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this employee's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is this Engineer's Github username?",
        when: (answers) => answers.title === 'Engineer'
    },
    {
        type: "input",
        name: "school",
        message: "Which school does this intern attend?",
        when: (answers) => answers.title === 'Intern'
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is this manager's office phone number?",
        when: (answers) => answers.title === 'Manager'
    },
    {
        type: "confirm",
        name: "anotherEmployee",
        message: "Would you like to add another employee?"    
    }
]

//uses inquirer to prompt user for info
const addEmployee = () => {
    inquirer
    .prompt(prompts)
    .then((answers) => {
        switch (answers.title) {
            case 'Manager':
                employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
            break;
            case 'Engineer':
                employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
            break;
            case 'Intern':
                employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));
            break;
        }
        if (answers.anotherEmployee) {
            addEmployee();
        } else {
            fs.writeFile(outputPath, render(employees), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        }
    });
}

function init() {
    addEmployee();
}

init();