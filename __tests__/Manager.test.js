const inquirer = require("inquirer");
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Mananger = require('../lib/Manager')
const Intern = require('../lib/Intern');

test('checks for managers name, id, email and office number', () => {
    const manager = new Mananger("Ben", "4321", 'gmail.com', "666666");

    expect(manager.name).toBe("Ben");
    expect(manager.id).toEqual(expect.any(String))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(String))
})