DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
USE books_db;

-- How to add to a table into a specific databse -- 

-- Add biography table --
CREATE TABLE biographies (
    id INT,
    name VARCHAR(100)
); 

SHOW DATABASES;
SHOW TABLES;
SHOW COLUMNS FROM biographies;