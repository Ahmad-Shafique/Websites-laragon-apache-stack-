create table person(
name varchar(30) not null,
age int(2) not null,
email varchar(200),
phone varchar(100),
interests varchar(1000),
primary key(name)
);
insert into person values('Fatematuj Jahra',30,'kmail@jmail.com','018XXXXXXXX','Painting,Reading');



create table skills(
id int(5) auto_increment,
type varchar(20) not null,
details varchar(100) not null,
unique key(id)
);
insert into skills(type,details) values('painting','oil painting,pencil drawing');


create table graphics(
id int(10) primary key auto_increment,
name varchar(30) not null,
path varchar(500) not null,
description varchar(500)
);
insert into graphics(name,path,description) values('Leather cover design','img/leatherDesignSample.png','A cover design for ipad');


create table profession(
title varchar(100) not null,
start varchar(30) not null,
end varchar(30) not null,
organization varchar(40) not null,
result varchar(30),
type varchar(20) not null
);
insert into profession(title,start,end,organization,type) 
values('Graphics Desginer','2013','2017','Bin Naji group','job');