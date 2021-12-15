const inquirer = require("inquirer");
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Mananger = require('../lib/Manager')
const Intern = require('../lib/Intern');

test('checks for interns name, id, email and college attended ', () => {
    const intern = new Intern("George", "4444", "hotmail.com", "Hard Knocks");

    expect(intern.name).toBe("George");
    expect(intern.id).toEqual(expect.any(String))
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.college).toEqual(expect.any(String))
})