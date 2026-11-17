create database college_db;
use college_db;

create table customers (
    customer_id int primary key auto_increment,
    name varchar(30),
    email varchar(30),
    city varchar(30),
    age int,
    registration_date date
);

insert into customers (name, email, city, age, registration_date) values
('arun', 'arun@gmail.com', 'chennai', 22, '2026-01-10'),
('maya', 'maya@gmail.com', 'madurai', 24, '2026-01-12'),
('kumar', 'kumar@gmail.com', 'salem', 25, '2026-02-01'),
('divya', 'divya@gmail.com', 'trichy', 23, '2026-02-05'),
('priya', 'priya@gmail.com', 'chennai', 26, '2026-02-10'),
('ravi', 'ravi@gmail.com', 'coimbatore', 28, '2026-02-15'),
('anu', 'anu@gmail.com', 'erode', 21, '2026-03-01'),
('suresh', 'suresh@gmail.com', 'vellore', 27, '2026-03-05'),
('kavya', 'kavya@gmail.com', 'chennai', 22, '2026-03-10'),
('vijay', 'vijay@gmail.com', 'salem', 29, '2026-03-15');

insert into customers (name, email, city, age, registration_date)
values ('ram', 'ram@gmail.com', 'trichy', 25, '2026-03-20');

insert into customers (name, email, city, age, registration_date)
values ('meena', 'meena@gmail.com', 'chennai', 23, '2026-03-25');

insert into customers (name, city)
values ('hari', 'madurai');


create table staff (
    staff_id int primary key auto_increment,
    name varchar(30),
    department varchar(30),
    salary decimal(10,2),
    city varchar(30)
);

insert into staff (name, department, salary, city) values
('arun', 'hr', 25000, 'madurai'),
('maya', 'it', 35000, 'chennai'),
('kumar', 'hr', 30000, 'salem'),
('divya', 'finance', 28000, 'trichy'),
('priya', 'sales', 32000, 'coimbatore'),
('ravi', 'it', 40000, 'erode'),
('anu', 'hr', 27000, 'vellore'),
('suresh', 'finance', 45000, 'madurai');

update staff
set salary = 45000
where staff_id = 3;

update staff
set department = 'it'
where staff_id = 5;

update staff
set salary = salary + 5000
where department = 'hr';

update staff
set city = 'chennai'
where salary > 30000;


create table orders (
    order_id int primary key auto_increment,
    customer_name varchar(30),
    product_name varchar(30),
    quantity int,
    price decimal(10,2),
    order_date date
);

insert into orders (customer_name, product_name, quantity, price, order_date) values
('arun', 'laptop', 2, 45000, '2026-01-01'),
('maya', 'mouse', 1, 300, '2026-01-02'),
('kumar', 'keyboard', 3, 800, '2026-01-03'),
('divya', 'monitor', 2, 12000, '2026-01-04'),
('priya', 'pen drive', 1, 400, '2026-01-05'),
('ravi', 'headphone', 4, 1500, '2026-01-06'),
('anu', 'speaker', 2, 2500, '2026-01-07'),
('suresh', 'charger', 1, 450, '2026-01-08'),
('kavya', 'tablet', 3, 15000, '2026-01-09'),
('vijay', 'cable', 5, 200, '2026-01-10');

delete from orders
where order_id = 4;


delete from orders
where quantity < 2;


delete from orders
where price < 500 and quantity < 5;

select * from orders;


create database library_db;

use library_db;

create table books (
    book_id int primary key auto_increment,
    book_name varchar(30),
    author varchar(30),
    price decimal(10,2),
    published_date date
);

insert into books (book_name, author, price, published_date) values
('wings of fire', 'abdul kalam', 350, '1999-01-01'),
('ponniyin selvan', 'kalki', 450, '1950-10-29'),
('the alchemist', 'paulo coelho', 300, '1988-01-01'),
('harry potter', 'j.k.rowling', 500, '1997-06-26'),
('the guide', 'r.k.narayan', 250, '1958-01-01');

select * from books;

truncate table books;

select * from books;

describe books;


create database company_db;

use company_db;

create table departments (
    department_id int primary key auto_increment,
    department_name varchar(30),
    location varchar(30)
);

insert into departments (department_name, location) values
('hr', 'chennai'),
('it', 'bangalore'),
('sales', 'madurai'),
('finance', 'coimbatore'),
('marketing', 'salem');

create table employees (
    employee_id int primary key auto_increment,
    employee_name varchar(30),
    department varchar(30),
    salary decimal(10,2),
    city varchar(30)
);

insert into employees (employee_name, department, salary, city) values
('arun', 'hr', 25000, 'chennai'),
('maya', 'it', 35000, 'madurai'),
('kumar', 'sales', 30000, 'salem'),
('divya', 'finance', 40000, 'trichy'),
('priya', 'marketing', 45000, 'coimbatore');

drop table departments;

show tables;

drop database company_db;


