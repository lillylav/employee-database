

class Role {
    constructor(job_title = '', salary = Number, department_id = Number) {
        this.job_title = job_title;
        this.salary = salary;
        this.department_id = department_id;
    }

    getTitle() {
        return this.job_title;
    }

    getSalary() {
        return this.salary;
    }

    getDepartment() {
        return this.department_id;
    }
};

module.exports = Role;