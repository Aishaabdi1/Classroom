DROP DATABASE IF EXISTS schema_db;
CREATE DATABASE schema_db;

USE schema_db;


CREATE TABLE products (
  id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  in_stock BOOLEAN NOT NULL
);


CREATE TABLE categories (
  id INT NOT NULL,
  category_name VARCHAR(30) NOT NULL,
);