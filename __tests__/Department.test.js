const Department = require('../lib/Department');

jest.mock();

test('creates department object', () => {
    const department = new Department('HR');

    expect(department.name).toBe('HR');
});