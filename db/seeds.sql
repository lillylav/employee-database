INSERT INTO departments (name)
VALUES
    ('HR'),
    ('Front-End Web Development'),
    ('Back-End Web Development'),
    ('Testing'),
    ('Web Design'),
    ('Marketing')
;

INSERT INTO roles (job_title, salary, departments_id)
VALUES
    ('HR Manager', 110000, 1),
    ('HR Rep', 90000, 1),
    ('Frontend Manager', 110000, 2),
    ('Junior Developer', 70000, 2),
    ('Senior Developer', 90000, 2),
    ('Backend Manager', 110000, 3),
    ('Junior Developer', 70000, 3),
    ('Senior Developer', 90000, 3),
    ('Testing Manager', 110000, 4),
    ('Tester', 65000, 4);
    ('Design Manager', 110000, 5),
    ('Designer', 70000, 5),
    ('Marketing Manager', 110000, 6),
    ('Marketing Rep', 65000, 6)
;

INSERT INTO employees (first_name, last_name, job_title, manager_id, roles_id)
VALUES
    ('Mary', 'Vigos', 'HR Manager', NULL, 1),
    ('Cherry', 'Loveless', 'HR Rep', 1, 1),
    ('Russel', 'Phillips', 'Frontend Manager', NULL, 3),
    ('Lilly', 'Leiran', 'Junior Developer', 3, 4),
    ('Hope', 'Saville', 'Senior Developer', 3, 5),
    ('Matt', 'Peterson', 'Backend Manager', NULL, 6),
    ('Aaron', 'Senior', 'Junior Developer', 6, 7),
    ('Steve', 'Kerkman', 'Senior Developer', 6, 8),
    ('Travis', 'Grant', 'Testing Manager', NULL, 9),
    ('Chrissy', 'Meier', 'Tester', 9, 10),
    ('Kim', 'Hinson', 'Design Manager', NULL, 11),
    ('Denise', 'Sherer', 'Designer', 11, 12),
    ('Chelsea', 'Calhoun', 'Marketing Manager', NULL, 13),
    ('Cortney', 'Fronk', 'Marketing Rep', 13, 14)
;