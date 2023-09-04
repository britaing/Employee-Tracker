USE employee_db;

INSERT INTO department (id,name)
VALUES (1, 'engineering'),
       (2, 'product management'),
       (3, 'sales and marketing'),
       (4, 'customer support'),
       (5, 'research and development');

INSERT INTO role (title, salary, department_id)
VALUES ('Engineering Manager', 150000, 1),
       ('Software Engineer', 100000, 1),
       ('Quality Assurance Engineer', 80000, 1),
       ('Product Manager', 125000, 2),
       ('User Experience Designer', 95000, 2),
       ('Market Research Analyst', 70000, 2),
       ('Sales Manager', 120000, 3),
       ('Sales Representative', 70000, 3),
       ('Content Creator', 55000, 3),
       ('Customer Support Manager', 85000, 4),
       ('Customer Support Agent', 45000, 4),
       ('Technical Support Specialist', 60000, 4),
       ('Research Manager', 120000, 5),
       ('Data Scientist', 130000, 5),
       ('Innovation Strategist', 95000, 5),

INSERT INTO employees (first_name, last_name, role, manager_id)
VALUES ('Jasper', 'Montgomery', 1, null),
       ('Elara', 'Santiago', 2, 1),
       ('Finnian', 'Patel', 3, 1),
       ('Seraphina', 'Russo', 4, null),
       ('Orion', 'Chang', 5, 4),
       ('Livia', 'Donovan', 6), 4,
       ('Cassius', 'Nguyen', 7, null),
       ('Isolde', 'Sinclair', 8, 7),
       ('Atticus', 'Morales', 9, 7),
       ('Thalia', 'Mercer', 10, null),
       ('Lucian', 'Harper', 11, 10),
       ('Octavia', 'Cruz', 12, 10),
       ('Silas', 'Ramsey', 13, null),
       ('Selene', 'Fischer', 14, 13),
       ('Maximus', 'Wallace', 15, 13);