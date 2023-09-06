const inquirer = require('inquirer');

const prompts = () => inquirer.prompt([
    {
        name: 'options',
        type: 'list',
        message: 'select an option',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role'
        ]

    }
]).then((choices) => {
    console.log(choices.options);

    // switch (key) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }
});

prompts()