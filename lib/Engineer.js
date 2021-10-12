const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
      this.github = github   
    }

    getGithub() {
        inquirer
        .prompt({
            type: 'text',
            name: 'githubName',
            message: "What is your engineer's github account name? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's github account name!")
                }
            }
        
            })
        }
    getRole(){
        return ('Engineer');
    }
}

Module.exports = Engineer;
        