const inquirer = require("inquirer");
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Mananger = require('../lib/Manager')
const Intern = require('../lib/Intern');

test('checks if the intern lists a school they attended', () => {
    const whichschool = new Intern;

    expect(intern.whichschool).toEqual(expect.any(String));
})