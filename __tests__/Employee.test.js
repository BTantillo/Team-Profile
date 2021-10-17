const inquirer = require("inquirer");
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Mananger = require('../lib/Manager')
const Intern = require('../lib/Intern');

test('creates an employee object', () => {
    const worker = new Employee('');


expect(worker.name).toBe('');
expect(worker.idnumber).toEqual(expect.any(String));
expect(worker.emailaddress).toEqual(expect.any(String));
})

