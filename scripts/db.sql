create database demo character set utf8 collate utf8_bin;

use demo;

create table users(
	id bigint(12) not null auto_increment primary key,
	displayName varchar(255) not null,
  	username varchar(255) not null,
  	email varchar(500) not null,
  	phone varchar(50) default null,
  	password varchar(1000) not null,
  	hash_type varchar(50) default 'MD5',
  	active bit(1) default 1
);
