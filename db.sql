-- скрипты для создания базы данных, желательно сохранять их в проекте или в отдельном месте
create database server_test;

use server_test;

create table user(
    id int primary key auto_increment,
    name varchar(255),
    password varchar(255)
);