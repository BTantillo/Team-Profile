const inquirer = require("inquirer");
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Mananger = require('../lib/Manager')
const Intern = require('../lib/Intern');

test('checks for engineers name, id, email and github account', () =>{
    const engineer = new Engineer("Jerry", "1234", "yahoo.com", "Github");

    expect(engineer.name).toBe("Jerry");
    expect(engineer.id).toEqual(expect.any(String))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))
})