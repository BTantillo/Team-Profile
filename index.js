const inquirer = require("inquirer");
const Employee = require('./lib/Employee')
const team = []
const arrayManager = []
const arrayIntern = []
const arrayEngineer = []
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require ('./lib/Engineer')
const fs = require('fs')

function addTeammember() {
    inquirer
    .prompt
    ({ 
        message: "What type of employee do you want to add?",
        type: "list",
        name: "workerType",
        choices: ["Engineer", "Intern", "Manager", "Exit"]

    })
    .then(employeeAdded => {
        if (employeeAdded.workerType === "Manager") {
            addManager()
        } else if (employeeAdded.workerType === "Engineer") {
            addEngineer()
        } else if (employeeAdded.workerType === "Intern") {
            addIntern()
        } else {
            createHtml()
        }
    })
}

function addManager() {
    inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: "What is your employee's name? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your employee's name!")
            }
        }
    },
    {
        type: 'text',
        name: 'idNumber',
        message: "What is the employee's ID number? (Required)",
        validate: numberInput => {
            if (numberInput) {
                return true;
            } else {
                console.log("Please enter your employee's ID number!")
            }
        }
    },
    {
        type: 'text',
        name: 'emailAddress',
        message: "What is your employee's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your employee's email address!")
            }
    }
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: "What is your manager's office number?",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Please enter your manager's office number!")
            }
    }
    },

])
.then(data=>{
    let newManager = new Manager(data.name, data.idNumber, data.emailAddress, data.officeNumber)
    arrayManager.push(newManager)
    addTeammember()
})
}


function addIntern() {
    inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: "What is your employee's name? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your employee's name!")
            }
        }
    },
    {
        type: 'text',
        name: 'idNumber',
        message: "What is the employee's ID number? (Required)",
        validate: numberInput => {
            if (numberInput) {
                return true;
            } else {
                console.log("Please enter your employee's ID number!")
            }
        }
    },
    {
        type: 'text',
        name: 'emailAddress',
        message: "What is your employee's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your employee's email address!")
            }
    }
    },
    {
        type: 'text',
        name: 'whichSchool',
        message: "What school did you graduate from (Required)",
        validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter you school's name!")
                }
            }
        }
    ])
    .then(data=>{
        let newIntern = new Intern(data.name, data.idNumber, data.emailAddress, data.whichSchool)
        arrayIntern.push(newIntern)
        addTeammember()
    })
}



function addEngineer() {
    inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: "What is your employee's name? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your employee's name!")
            }
        }
    },
    {
        type: 'text',
        name: 'idNumber',
        message: "What is the employee's ID number? (Required)",
        validate: numberInput => {
            if (numberInput) {
                return true;
            } else {
                console.log("Please enter your employee's ID number!")
            }
        }
    },
    {
        type: 'text',
        name: 'emailAddress',
        message: "What is your employee's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your employee's email address!")
            }
    }
    },
    {
        type: 'text',
        name: 'whatGithub',
        message: "What is your Github account username? (Required)",
        validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter you Github account name!")
                }
            }
        }
    ])
    .then(data=>{
        let newEngineer = new Engineer(data.name, data.idNumber, data.emailAddress, data.whatGithub)
        arrayEngineer.push(newEngineer)
        addTeammember()
    })
}
function createHtml() {
    console.log(team)
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="dist/style.css">
        <title>Team Profile</title>
    </head>
    <header>
    <h1 class="team-heading">Team Profile</h1>
    </header>

    <body>
    `
    arrayManager.forEach((manager) => {
        html += `
        <h1>${manager.name}</h1>
        <p>${manager.idNumber}</p>
        <p>${manager.emailAddress}</p>
        <p>${manager.officeNumber}</p>
        `
    })

    arrayEngineer.forEach((engineer) => {
        html += `
        <h1>${engineer.name}</h1>
        <p>${engineer.emailAddress}</p>
        <p>${engineer.whatGithub}</p>
        <p>${engineer.idNumber}</p>
        `
    })

    arrayIntern.forEach((intern) => {
        html += `
        <h1>${intern.name}</h1>
        <p>${intern.emailAddress}</p>
        <p>${intern.whichSchool}</p>
        <p>${intern.idNumber}</p>
        `
    })

    html += `
    </body>
    </html>`
 console.log(html)
    fs.writeFileSync('./dist/test.html', html, 'utf-8') 

    process.exit()
}



addTeammember();
