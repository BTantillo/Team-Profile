const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, college) {
        super(name, id, email)
      this.college = college   
    }

    getSchool() {
  
        return this.college
        }

        getRole() {
            return ('Intern')
        }
}

module.exports = Intern;