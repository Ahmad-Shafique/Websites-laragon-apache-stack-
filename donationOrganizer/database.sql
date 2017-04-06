create table causes(
cause_id int(10) auto_increment,
amount_needed double(10,2) not null,
amount_received DOUBLE(10,2) not null,
primary key (cause_id)
);

create table accounts(
transaction_id int(15) auto_increment,
amount double(10,2) not null,
cause_id int(10) not null,
primary key (transaction_id),
foreign key (cause_id) references causes(cause_id)
);

create table users(
id int(10) auto_increment,
username varchar(20)not null unique,
password varchar(1000) not null,
first_name varchar(30) not null,
last_name varchar(20) not null,
date_of_birth date not null,
nid_number varchar(30) not null,
primary key (id)
);

create table emails(
id int(10) not null ,
email varchar(100) not null,
primary key (id,email),
foreign key (id) references users(id)
);

create table phones(
id int(10) not null ,
phone varchar(18) not null,
primary key (id,phone),
foreign key (id) references users(id)
);

create table user_transactions(
id int(10) ,
transaction_id int(15),
foreign key (id) references users(id) not null,
foreign key (transaction_id) references accounts(transaction_id),
primary key (id,transaction_id)
);

create table user_privileges(
id int(10) not null ,
privilege varchar(20) not null,
primary key (id,privilege),
foreign key (id) references users(id)
);

create table donors(
id int(10) not null,
cause_id int(10) not null,
foreign key (id) references users(id) ,
foreign key (cause_id) references causes(cause_id),
primary key (id,cause_id)
);

create table needy(
id int(10) not null,
short_description varchar(300) not null,
contact_address varchar(200) not null,
payment_description varchar(300) not null,
cause_id int(10) not null,
primary key(id),
foreign key (cause_id) references causes(cause_id)
);

create table collectors(
id int(10) not null,
needy_id int(10) not null,
cause_id int(10) not null,
primary key (id,needy_id),
foreign key (id) references users(id),
foreign key (needy_id) references needy(id),
foreign key (cause_id) references causes(cause_id)
);
