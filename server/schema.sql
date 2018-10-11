CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
-- create table students (id int not null primary key, name varchar(20) not null, classes int);
  id int not null primary key,
  username varchar(20) not null,
  text varchar(30) not null,
  roomname varchar(20) not null
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  username varchar(20) not null primary key
)

CREATE TABLE rooms (
  roomname varchar(20) not null primary key
)


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

