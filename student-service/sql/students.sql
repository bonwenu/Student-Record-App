drop table if exists student;

    
create table student (
	id bigint not null auto_increment,
    first_name varchar(255),
    last_name varchar(255),
    status varchar(255),
    primary key (id)
) engine=InnoDB;

insert into student (first_name, last_name, status) values ('User', 'One', 'Freshman');
insert into student (first_name, last_name, status) values ('User', 'Two', 'Sophmore');
insert into student (first_name, last_name, status) values ('User', 'Three', 'Junior');
insert into student (first_name, last_name, status) values ('User', 'Four', 'Senior');
insert into student (first_name, last_name, status) values ('User', 'Five', 'Freshman');

commit;