const inquirer = require("inquirer");
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Mananger = require('../lib/Manager')
const Intern = require('../lib/Intern');

test('checks if engineer has a github account', () =>{
    const github = new Engineer;

    expect(engineer.github).toEqual(expect.any(String))
})