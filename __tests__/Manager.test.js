const inquirer = require("inquirer");
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Mananger = require('../lib/Manager')
const Intern = require('../lib/Intern');

test('checks for managers office number', () => {
    const office = new Mananger;

    expect(mananger.office).toEqual(expect.any(String))
})