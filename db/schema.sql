CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

/* job title, role id, the department that role belongs to, and the salary for that role */
CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    departments_id INTEGER NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (departments_id) REFERENCES departments(id)
);

/* employee ids, first names, last names, job title, role_id, departments, salaries, and managers that the employees report to */
CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    manager_id INTEGER,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id),
    roles_id INTEGER NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (roles_id) REFERENCES roles(id)
);