const Department = require('../lib/Department');

jest.mock();

test('creates department object', () => {
    const department = new Department(10, 'HR');

    expect(department.id).toEqual(expect.any(Number));
    expect(department.name).toBe('HR');
});