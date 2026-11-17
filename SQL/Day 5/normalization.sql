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
 
 