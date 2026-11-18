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
 
 
 
create database studentdb;
use studentdb;


create table studentcourse (
    studentid int,
    studentname varchar(30),
    coursename varchar(30),
    trainername varchar(30),
    trainerphone varchar(30),
    primary key (studentid, coursename)
);

insert into studentcourse values
(1, 'arun', 'java', 'kumar', '9876543210'),
(1, 'arun', 'python', 'ravi', '9876543211'),
(2, 'maya', 'java', 'kumar', '9876543210'),
(3, 'priya', 'python', 'ravi', '9876543211'),
(4, 'rahul', 'sql', 'suresh', '9876543212');

create table student (
    studentid int primary key,
    studentname varchar(30)
);

insert into student values
(1, 'arun'),
(2, 'maya'),
(3, 'priya'),
(4, 'rahul');

create table course (
    courseid int primary key,
    coursename varchar(30),
    trainername varchar(30),
    trainerphone varchar(30)
);

insert into course values
(101, 'java', 'kumar', '9876543210'),
(102, 'python', 'ravi', '9876543211'),
(103, 'sql', 'suresh', '9876543212');

create table studentcoursemap (
    studentid int,
    courseid int,
    primary key (studentid, courseid),
    foreign key (studentid) references student(studentid),
    foreign key (courseid) references course(courseid)
);

insert into studentcoursemap values
(1, 101),
(1, 102),
(2, 101),
(3, 102),
(4, 103);


create table trainer (
    trainerid int primary key,
    trainername varchar(30),
    trainerphone varchar(30)
);

insert into trainer values
(1, 'kumar', '9876543210'),
(2, 'ravi', '9876543211'),
(3, 'suresh', '9876543212');

create table course3nf (
    courseid int primary key,
    coursename varchar(30),
    trainerid int,
    foreign key (trainerid) references trainer(trainerid)
);

insert into course3nf values
(101, 'java', 1),
(102, 'python', 2),
(103, 'sql', 3);


select s.studentname, c.coursename, t.trainername
from student s
join studentcoursemap sc on s.studentid = sc.studentid
join course3nf c on sc.courseid = c.courseid
join trainer t on c.trainerid = t.trainerid;