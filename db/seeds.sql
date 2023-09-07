USE employee_db;

INSERT INTO department (id,name)
VALUES (1, 'engineering'),
       (2, 'product management'),
       (3, 'sales and marketing'),
       (4, 'customer support'),
       (5, 'research and development');

INSERT INTO role (title, salary, department_id)
VALUES ('engineering manager', 150000, 1),
       ('software engineer', 100000, 1),
       ('quality assurance engineer', 80000, 1),
       ('product manager', 125000, 2),
       ('user experience designer', 95000, 2),
       ('market research analyst', 70000, 2),
       ('sales manager', 120000, 3),
       ('sales representative', 70000, 3),
       ('content creator', 55000, 3),
       ('customer support manager', 85000, 4),
       ('customer support agent', 45000, 4),
       ('technical support specialist', 60000, 4),
       ('research manager', 120000, 5),
       ('data scientist', 130000, 5),
       ('innovation strategist', 95000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('jasper', 'montgomery', 1, null),
       ('elara', 'santiago', 2, 1),
       ('finnian', 'patel', 3, 1),
       ('seraphina', 'russo', 4, null),
       ('orion', 'chang', 5, 4),
       ('livia', 'donovan', 6, 4),
       ('cassius', 'nguyen', 7, null),
       ('isolde', 'sinclair', 8, 7),
       ('atticus', 'morales', 9, 7),
       ('thalia', 'mercer', 10, null),
       ('lucian', 'harper', 11, 10),
       ('octavia', 'cruz', 12, 10),
       ('silas', 'ramsey', 13, null),
       ('selene', 'fischer', 14, 13),
       ('maximus', 'wallace', 15, 13);