

class Role {
    constructor(id = Number, title = '', salary = Number, department_id = Number) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getSalary() {
        return this.salary;
    }

    getDepartment() {
        return this.department_id;
    }
};

module.exports = Role;