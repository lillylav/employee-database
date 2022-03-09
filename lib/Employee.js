
class Employee {
    constructor(id = INT, first_name = '', last_name = '', role_id = INT, department_id = INT) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.department_id = department_id;
    }

    getId() {
        return this.id;
    }

    getFirstName() {
        return this.first_name;
    }

    getLastName() {
        return this.last_name;
    }

    getRole() {
        return this.role_id;
    }

    getDepartment() {
        return this.department_id;
    }
};

module.exports = Employee;