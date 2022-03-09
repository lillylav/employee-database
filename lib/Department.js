

class Department {
    constructor(id = Number, name = '') {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getManager() {
        return this.manager_id;
    }
};

module.exports = Department;