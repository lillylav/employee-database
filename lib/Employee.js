
class Employee {
    constructor(first_name = '', last_name = '', manager_id = Number, role_id = Number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.manager_id = manager_id;
        this.role_id = role_id;
    }

    getFirstName() {
        return this.first_name;
    }

    getLastName() {
        return this.last_name;
    }

    getManager() {
        return this.manager_id;
    }
    
    getRole() {
        return this.role_id;
    }
};

module.exports = Employee;