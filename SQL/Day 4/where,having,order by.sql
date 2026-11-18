
create database practice_db;

use practice_db;

create table employees (
    employee_id int primary key auto_increment,
    employee_name varchar(30),
    department varchar(30),
    salary decimal(10,2),
    city varchar(30)
);

insert into employees (employee_name, department, salary, city) values
('arun', 'it', 35000, 'chennai'),
('maya', 'hr', 45000, 'madurai'),
('kumar', 'it', 28000, 'salem'),
('divya', 'finance', 50000, 'chennai'),
('priya', 'hr', 30000, 'coimbatore'),
('ravi', 'finance', 55000, 'madurai'),
('anu', 'it', 42000, 'chennai'),
('suresh', 'sales', 25000, 'salem');

select * from employees
where department = 'it' and salary > 30000;


create table students (
    student_id int primary key auto_increment,
    student_name varchar(30),
    age int,
    city varchar(30)
);

insert into students (student_name, age, city) values
('arun', 20, 'chennai'),
('maya', 22, 'madurai'),
('kumar', 19, 'salem'),
('divya', 24, 'chennai'),
('priya', 17, 'madurai'),
('ravi', 25, 'madurai'),
('anu', 21, 'coimbatore'),
('suresh', 23, 'chennai');

select * from students where age between 18 and 25 and city in ('chennai', 'madurai');


select department, count(*) as total_employees group by department;


create table products (
    product_id int primary key auto_increment,
    product_name varchar(30),
    category varchar(30),
    price decimal(10,2),
    stock int
);

insert into products (product_name, category, price, stock) values
('laptop', 'electronics', 45000, 10),
('mouse', 'electronics', 500, 20),
('shirt', 'clothing', 800, 15),
('pant', 'clothing', 1200, 10),
('phone', 'electronics', 25000, 8),
('shoes', 'fashion', 2000, 12),
('watch', 'fashion', 3000, 5);

select category, sum(stock) as total_stock, avg(price) as average_price from products group by category;


select department, avg(salary) as average_salar from employees where salary > 25000 group by department having avg(salary) > 40000;
