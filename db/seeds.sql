INSERT INTO departments (name)
VALUES
    ('HR'),
    ('Front-End Web Development'),
    ('Back-End Web Development'),
    ('Testing'),
    ('Web Design'),
    ('Marketing')
;

INSERT INTO roles (job_title, salary, department_id)
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
    ('Tester', 65000, 4),
    ('Design Manager', 110000, 5),
    ('Designer', 70000, 5),
    ('Marketing Manager', 110000, 6),
    ('Marketing Rep', 65000, 6)
;

INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES
    ('Mary', 'Vigos', NULL, 1),
    ('Cherry', 'Loveless', 1, 1),
    ('Russel', 'Phillips', NULL, 3),
    ('Lilly', 'Leiran', 3, 4),
    ('Hope', 'Saville', 3, 5),
    ('Matt', 'Peterson', NULL, 6),
    ('Aaron', 'Senior', 6, 7),
    ('Steve', 'Kerkman', 6, 8),
    ('Travis', 'Grant', NULL, 9),
    ('Chrissy', 'Meier', 9, 10),
    ('Kim', 'Hinson', NULL, 11),
    ('Denise', 'Sherer', 11, 12),
    ('Chelsea', 'Calhoun', NULL, 13),
    ('Cortney', 'Fronk', 13, 14)
;