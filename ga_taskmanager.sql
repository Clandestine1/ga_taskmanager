DROP DATABASE IF EXISTS ga_taskmanager;
CREATE DATABASE ga_taskmanager;

\c ga_taskmanager;

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
  item VARCHAR,
  minutes INTEGER
);

INSERT INTO tasks (item, minutes)
  VALUES ('Wash the car', 45);