create database  jo;
use jo;
drop database jo;
create table trainer(
trainerid int primary key auto_increment,
trainername varchar(20)

);
insert into trainer(trainername) values("maya"),("subramaniyan"),("parameswari"),("varshini");

create table departnment(
departid int primary key auto_increment,
departname varchar(30),
status boolean default true
);
insert into departnment(departname) values("C"),("Python"),("Java"),("React");

create table student(
studentid int primary key auto_increment,
studentname varchar(20)
);
insert into student(studentname) values("karthi"),("abi"),("raji"),("narayanan");
drop table student;
select*from trainer;
select*from departnment;
select* from student as s inner join eid as e on s.stu_id=e.stu_id inner join trainer as t on t_id inner join cource as con c.cource_id=e.cource_id;

