//dependices
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

const db = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker_db'
});


db.connect(err => {
    if (err) throw err;
    init();
});

// Function initialize app
const init = () => {
    inquirer.prompt({
        name: "start",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "End"
        ]
    }).then((answer) => {
        switch (answer.start) {
            case "View All Departments":
                viewDepartments();
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "View All Employees":
                viewEmployees();
                break;

            case "Add New Department":
                addDepartment();
                break;

            case "Add New Role":
                addRole();
                break;

            case "Add New Employee":
                addEmployee();
                break;

            case "Update Employee Role":
                updateRole();
                break;

            case "End":
                db.end();
                break;
        }
    });
};


const viewDepartments = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
}

const viewRoles = () => {
    db.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
}

const viewEmployees = () => {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
}

// Function for new department
addDepartment = () => {
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What is the name of the department?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    console.log("Invalid Entry.");
                }
            }
        }
    ]).then(answer => {
        const query = "INSERT INTO department (name) VALUES (?)";
        db.query(query, answer.department, (err, res) => {
            if (err) throw err;
            console.log("Successfully added new department.");
            console.table(res)
            init();
        });
    });
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new role name',
            name: 'roleName',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter salary of this role',
            name: 'roleSalary',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
        {
            name: "department",
            type: "list",
            message: "What is the department for the role?",
            choices: departmentNames,
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    console.log("Please enter a department for the role.");
                }
            }
        },
        {
            type: 'select',
            message: 'Please select a department to add this role to',
            name: 'depName',
            choices: ['departments', 'departments2']
        },
    ])
};

addEmp = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter employees first name',
            name: 'empFN',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter employees last name',
            name: 'empLN',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
        {
            type: 'select',
            message: 'Select employees role',
            name: 'empRole',
            choices: ['role', 'role2']
        },
        {
            type: 'input',
            message: 'Enter employees manager',
            name: 'empMang',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log("Please enter a name...");
                    return false;
                }
            }
        },
    ])
};

init();