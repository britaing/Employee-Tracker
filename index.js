const inquirer = require("inquirer");
const connection = require("./config/connection");

const getAllDept = () => {
  const sql = "SELECT id, name FROM department";
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("error getting departments");
      return prompts();
    }
    console.table(res);
    return prompts();
  });
};

const prompts = () =>
  inquirer
    .prompt([
      {
        name: "selection",
        type: "list",
        message: "select an option",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.selection) {
        case "view all departments":
          getAllDept();
          break;
        default:
          console.log("option not found");
      }
    });

prompts();
