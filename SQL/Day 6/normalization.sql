create database hospital;
use hospital;
Drop database hospital;

create table patient(
pa_id INT PRIMARY KEY AUTO_INCREMENT,
pa_name VARCHAR(20),
pa_problem varchar(20),
pa_genter varchar(20)
);

create table diease(
di_id INT PRIMARY KEY AUTO_INCREMENT,
di_name VARCHAR(20) ); 

create table department(
 dep_id INT PRIMARY KEY AUTO_INCREMENT,
 dep_name VARCHAR(20));
 
 create table staff(
 st_id INT PRIMARY KEY AUTO_INCREMENT,
 st_name VARCHAR(20),
 st_role VARCHAR(20),
 dep_id INT,FOREIGN KEY (dep_id)references department (dep_id) 
 );
 
 create table payment(
 pay_id INT PRIMARY KEY AUTO_INCREMENT,
 pa_id  int, amount decimal(10,2),
 pay_method varchar(20),
 foreign key (pa_id) references patient(pa_id)
 );
 SELECT * FROM PATIENT;
 
 
 
create database studentmanagement;
use studentmanagement;
drop database studentmanagement;

create table studentcourse (
    studentid int,
    studentname varchar(30),
    coursename varchar(30),
    trainername varchar(30),
    trainerphone varchar(30),
    primary key (studentid, coursename)
);
insert into studentcourse values
(101, 'arun', 'python', 'kumar', '9876543210'),
(101, 'arun', 'java', 'ravi', '9876543211'),
(102, 'priya', 'python', 'kumar', '9876543210'),
(103, 'divya', 'java', 'ravi', '9876543211'),
(104, 'rahul', 'sql', 'suresh', '9876543212');

select * from studentcourse;
create table students (
    studentid int primary key,
    studentname varchar(30)
);

create table courses (
    coursename varchar(30) primary key,
    trainername varchar(30),
    trainerphone varchar(30)
);

create table studentenrollment (
    studentid int,
    coursename varchar(30),
    primary key (studentid, coursename),
    foreign key (studentid) references students(studentid),
    foreign key (coursename) references courses(coursename)
);
insert into students values
(101, 'arun'),
(102, 'priya'),
(103, 'divya'),
(104, 'rahul');

insert into courses values
('python', 'kumar', '9876543210'),
('java', 'ravi', '9876543211'),
('sql', 'suresh', '9876543212');

insert into studentenrollment values
(101, 'python'),
(101, 'java'),
(102, 'python'),
(103, 'java'),
(104, 'sql');

create table trainers (
    trainerid int primary key,
    trainername varchar(30),
    trainerphone varchar(30)
);

insert into trainers values
(1, 'kumar', '9876543210'),
(2, 'ravi', '9876543211'),
(3, 'suresh', '9876543212');

