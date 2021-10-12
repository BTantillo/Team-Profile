const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        inquirer
        .prompt({
            type: 'text',
            name: 'ManagerOfficeNumber',
            message: "What is your manager's office number? (Required)",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's office number!")
                }
            }
        })
    }

    getRole() {
        return ('Manager')
    }
}

Module.exports = Manager; 