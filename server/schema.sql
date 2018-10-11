CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS messages (
  /* Describe your table here.*/
-- create table students (id int not null primary key, name varchar(20) not null, classes int);
  id int not null AUTO_INCREMENT,
  username varchar(20) not null,
  text varchar(100) not null,
  roomname varchar(20) not null,
  primary key (id)
);

-- CREATE TABLE IF NOT EXISTS table1 LIKE table_template;
/* Create other tables and define schemas for them here! */

CREATE TABLE IF NOT EXISTS users (
  userid int not null AUTO_INCREMENT,
  username varchar(20),
  age int,
  primary key (userid)
);

CREATE TABLE IF NOT EXISTS rooms (
  roomname varchar(20) not null primary key
);


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

