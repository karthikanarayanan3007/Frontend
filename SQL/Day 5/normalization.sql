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
 
 
 CREATE DATABASE StudentDB;

USE StudentDB;

-- 1NF
CREATE TABLE StudentCourse (
    Student_ID INT,
    Student_Name VARCHAR(30),
    Course_Name VARCHAR(30),
    Trainer_Name VARCHAR(30),
    Trainer_Phone VARCHAR(30),
    PRIMARY KEY (Student_ID, Course_Name)
);

INSERT INTO StudentCourse VALUES
(1, 'Arun', 'Java', 'Kumar', '9876543210'),
(1, 'Arun', 'Python', 'Ravi', '9876543211'),
(2, 'Maya', 'Java', 'Kumar', '9876543210'),
(3, 'Priya', 'Python', 'Ravi', '9876543211'),
(4, 'Rahul', 'SQL', 'Suresh', '9876543212');

SELECT * FROM StudentCourse;

-- 2NF
CREATE TABLE Student (
    Student_ID INT PRIMARY KEY,
    Student_Name VARCHAR(30)
);

INSERT INTO Student VALUES
(1, 'Arun'),
(2, 'Maya'),
(3, 'Priya'),
(4, 'Rahul');

CREATE TABLE Course (
    Course_ID INT PRIMARY KEY,
    Course_Name VARCHAR(30),
    Trainer_Name VARCHAR(30),
    Trainer_Phone VARCHAR(30)
);

INSERT INTO Course VALUES
(101, 'Java', 'Kumar', '9876543210'),
(102, 'Python', 'Ravi', '9876543211'),
(103, 'SQL', 'Suresh', '9876543212');

CREATE TABLE Student_Course (
    Student_ID INT,
    Course_ID INT,
    PRIMARY KEY (Student_ID, Course_ID)
);

INSERT INTO Student_Course VALUES
(1, 101),
(1, 102),
(2, 101),
(3, 102),
(4, 103);

-- 3NF
CREATE TABLE Trainer (
    Trainer_ID INT PRIMARY KEY,
    Trainer_Name VARCHAR(30),
    Trainer_Phone VARCHAR(30)
);

INSERT INTO Trainer VALUES
(1, 'Kumar', '9876543210'),
(2, 'Ravi', '9876543211'),
(3, 'Suresh', '9876543212');

CREATE TABLE Course_3NF (
    Course_ID INT PRIMARY KEY,
    Course_Name VARCHAR(30),
    Trainer_ID INT
);

INSERT INTO Course_3NF VALUES
(101, 'Java', 1),
(102, 'Python', 2),
(103, 'SQL', 3);

SELECT * FROM Student;
SELECT * FROM Student_Course;
SELECT * FROM Course_3NF;
SELECT * FROM Trainer;
 