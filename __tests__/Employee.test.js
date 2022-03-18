const Employee = require('../lib/Employee');

jest.mock();

test('creates employee object', () => {
    const employee = new Employee('Mary', 'Vigos', 1, 10);

    expect(employee.first_name).toBe('Mary');
    expect(employee.last_name).toBe('Vigos');
    expect(employee.manager_id).toEqual(expect.any(Number));
    expect(employee.role_id).toEqual(expect.any(Number));
});