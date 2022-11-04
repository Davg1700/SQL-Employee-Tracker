INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Tech"),
       ("Government");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Rep", 10000, 1),
       ("Cook", 8000, 1),
       ("Engineer", 150000, 2),
       ("Software Engineer", 120000, 3),
       ("Electical Engineer", 10000, 3),
       ("Military", 12500, 4),
       ("Teacher", 25000, 4),
       ("President", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David", "Smith", 1, NULL),
       ("Mike", "Shadow", 2, 1),
       ("Emma", "Rodriguez", 3, NULL),
       ("Mario", "Lopez", 4, 3),
       ("Clarisa", "Jones", 5, NULL),
       ("Mria", "Smith", 6, 5),
       ("Lisa", "Moldonado", 7, NULL);