const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql2 = require('mysql2');

const server = require('./server');
const Department = require('./lib/Department');
const Role = require('./lib/Role');
const Employee = require('./lib/Employee');

const departmentArr = [];
const roleArr = [];
const employeeArr = [];

// Prompt action
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Please select an action:',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a New Department', 'Add a New Role', 'Add a New Employee', 'Update Employee Role', 'Quit'],
            validate: actionInput => {
                if (actionInput) {
                    return true;
                } else {
                    console.log('Please select an action.')
                    return false;
                }
            }
        }
    ]).then(action => {
        console.log(action);
        updateRole();
    });

    //     {
    //     if (action === 'View All Departments') {
    //         viewDepartments();
    //     } else if (action === 'View All Roles') {
    //         viewRoles();
    //     } else if (action === 'View All Employees') {
    //         viewEmployees();
    //     } else if (action === 'Add a New Department') {
    //         newDepartment();
    //     } else if (action === 'Add a New Role') {
    //         newRole();
    //     } else if (action === 'Add a New Employee') {
    //         newEmployee();
    //     } else if (action === 'Update Employee Role') {
    //         updateRole();
    //     } else {
    //         return;
    //     }
    // })
};

// Display departments table ('View All Departments' selected)
const viewDepartments = () => {
    console.log("here");
    server.fetch('http://localhost:3001/api/departments')
        .then(function(response) {
            console.table(response);
    }).then(promptUser);
};

// Display roles table ('View All Roles' selected)
const viewRoles = () => {
    server.fetch('http://localhost:3001/api/roles')
        .then(function(response) {
            console.table(response);
    }).then(promptUser);
};

// Display employees table ('View All Employees' selected)
const viewEmployees = () => {
    server.fetch('http://localhost:3001/api/employees')
        .then(function(response) {
            console.table(response);
    }).then(promptUser);
};

// Add new department ('Add New Department' selected)
const newDepartment = () => {
    console.log(`
    ----------------------------------------
         Please enter a new department
    ----------------------------------------`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the new department's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('No name has been entered, please try again.');
                    return false;
                }
            }
        }
    ]).then((department) => {
        const newDepartment = new Department(department.name);

        departmentArr.push(newDepartment);

        console.log(departmentArr);

        promptUser();
    });
};

// Add new role ('Add New Role' selected)
const newRole = () => {
    console.log(`
    ----------------------------------------
            Please enter a new role
    ----------------------------------------`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'job_title',
            message: "What's the new role's job title?",
            validate: job_titleInput => {
                if (job_titleInput) {
                    return true;
                } else {
                    console.log("No job title has been entered, please try again.")
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: "What's the new role's salary?",
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log("No salary has been entered, please try again.")
                }
            }
        },
        {
            type: 'input',
            name: 'department_id',
            message: "What's the new role's department id?",
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log("No department id has been entered, please try again.")
                }
            }
        }
    ]).then((role) => {
        const newRole = new Role(role.job_title, role.salary, role.department_id);

        roleArr.push(newRole);

        console.log(roleArr);

        promptUser();
    });
};

// Add new employee ('Add New Employee' selected)
const newEmployee = () => {
    console.log(`
    ----------------------------------------
          Please enter a new employee
    ----------------------------------------`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What's the new employee's first name?",
            validate: first_nameInput => {
                if (first_nameInput) {
                    return true;
                } else {
                    console.log("No first name has been entered, please try again.")
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What's the new employee's last name?",
            validate: last_nameInput => {
                if (last_nameInput) {
                    return true;
                } else {
                    console.log("No last name has been entered, please try again.")
                }
            }
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What's the new employee's manager's employee id?",
            validate: manager_idInput => {
                if (manager_idInput) {
                    return true;
                } else {
                    console.log("No manager id has been entered, please try again.")
                }
            }
        },
        {
            type: 'input',
            name: 'role_id',
            message: "What's the new employee's role id?",
            validate: role_idInput => {
                if (role_idInput) {
                    return true;
                } else {
                    console.log("No role id has been entered, please try again.")
                }
            }
        }
    ]).then((employee) => {
        const newEmployee = new Employee(employee.first_name, employee.last_name, employee.manager_id, employee.role_id);

        employeeArr.push(newEmployee);

        console.log(employeeArr);

        promptUser();
    });
};

// Update an employee's role ('Update Employee Role' selected)
const updateRole = () => {
    return inquirer.prompt([
        // prompt user for employee id
        {
            type: 'input',
            name: 'employee_id',
            message: "What's the id of the employee you'd like to update?",
            validate: employee_idInput => {
                if (employee_idInput) {
                    return true;
                } else {
                    console.log('No id has been entered, please try again.');
                    return false;
                }
            }
        },
        // prompt user for new role id
        {
            type: 'input',
            name: 'role_id',
            message: "What's the role id you'd like to update this employee to?",
            validate: role_idInput => {
                if (role_idInput) {
                    return true;
                } else {
                    console.log('No role id has been entered, please try again.');
                    return false;
                }
            }
        }
    ]).then((employeeRoleUpdate) => {
        console.log(employeeRoleUpdate);

        promptUser();
    });
};


promptUser();

// console.log(`
// ----------------------------------------
//     Welcome to the employee database
// ----------------------------------------`);