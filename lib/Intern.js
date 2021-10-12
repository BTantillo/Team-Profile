const inquirer = require('inquirer');
const { Module } = require('module');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school
    }

    getSchool() {
        inquirer
        .prompt({
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
        })
        .then(({schoolInput}) => {
            this.schoolInput = new Employee(schoolInput)
        })
        
        }

        getRole() {
            return ('Intern')
        }
}

Module.exports = Intern;