const Role = require('../lib/Role');

jest.mock();

test('creates role object', () => {
    const role = new Role('Assistant', 60000, 10);

    expect(role.job_title).toBe('Assistant');
    expect(role.salary).toEqual(expect.any(Number));
    expect(role.department_id).toEqual(expect.any(Number));
});