const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


getName() {
    inquirer
    .prompt({
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
    })
    .then(({name}) => {
        this.name = new Employee(name)
    })
    
    }

getId() {
    inquirer
    .prompt({
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
    })
    .then(({idNumber}) => {
        this.id = new Employee(id)
    })
    }

getEmail() {
    inquirer
    .prompt({
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
    })
    .then(({emailInput}) => {
        this.email = new Employee(email)
    })
    }
    getRole(){
        return ('Employee')
    }
}
Module.exports = Employee;