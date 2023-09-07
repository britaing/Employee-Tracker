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

const getAllRoles = () => {
  const sql = "SELECT id, title, salary, department_id FROM role";
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("error getting roles");
      return prompts();
    }
    console.table(res);
    return prompts();
  });
};

const getAllEmployees = () => {
  const sql =
    "SELECT id, first_name, last_name, role_id, manager_id FROM employee";
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("error getting roles");
      return prompts();
    }
    console.table(res);
    return prompts();
  });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the name of the department to be added?",
      },
    ])
    .then((data) => {
      const newDepartment = { name: data.department };
      const sql = "INSERT INTO department SET ?";
      connection.query(sql, newDepartment, (err, res) => {
        if (err) {
          console.log("error adding department");
          return prompts();
        }
        console.table(res);
        return prompts();
      });
    });
};

const addEmployee = () => {

  const deptOptions = [
    "engineering",
    "product management",
    "sales and marketing",
    "customer support",
    "research and development",
  ];
  const roleOptions = [
    "engineering manager",
    "software engineer",
    "quality assurance",
    "product manager",
    "user experience designer",
    "market research analyst",
    "sales manager",
    "sales representative",
    "content creator",
    "customer support manager",
    "customer support agent",
    "technical support specialist",
    "research manager",
    "data scientist",
    "innovation strategist",
  ];
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the first name of the new employee to be added?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the last name of the new employee to be added?",
      },
      {
        name: "department_id",
        type: "list",
        message: "In which department would you like to add the new employee?",
        choices: deptOptions,
      },
      {
        name: "role_id",
        type: "list",
        message: "What is the role of the new employee?",
        choices: roleOptions,
      },
    ])
    .then((data) => {
      const newEmployee = {
        first_name: data.first_name,
        last_name: data.last_name,
        department_id: department_id,
        role_id: role_id,
      };
      const sql = "INSERT INTO employee SET ?";
      connection.query(sql, newEmployee, (err, res) => {
        if (err) {
          console.log("error adding employee");
          return prompts();
        }
        console.table(res);
        return prompts();
      });
    });
};

// const addRole = () => {};

// const updateRole = () => {};

// const exitProgram = () => {};

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
          "exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.selection) {
        case "view all departments":
          getAllDept();
          break;
        case "view all roles":
          getAllRoles();
          break;
        case "view all employees":
          getAllEmployees();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateRole();
          break;
        case "exit":
          exitProgram();
          break;
        default:
          console.log("OPTION NOT FOUND");
          return prompts();
      }
    });

prompts();
