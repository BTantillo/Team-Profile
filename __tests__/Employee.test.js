const inquirer = require("inquirer");
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Mananger = require('../lib/Manager')
const Intern = require('../lib/Intern');
const { getMaxListeners } = require("process");

test('creates an employee object', () => {
    const worker = new Employee("George", "12345", 'ge@gmail.com');


expect(worker.name).toBe('George');
expect(worker.id).toEqual(expect.any(String));
expect(worker.email).toEqual(expect.any(String));
})

