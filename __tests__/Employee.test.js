const Employee = require('../lib/Employee');

jest.mock();

test('creates employee object', () => {
    const employee = new Employee(12345, 'Mary', 'Vigos', 1, 10);

    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.first_name).toBe('Mary');
    expect(employee.last_name).toBe('Vigos');
    expect(employee.role_id).toEqual(expect.any(Number));
    expect(employee.department_id).toEqual(expect.any(Number));
});