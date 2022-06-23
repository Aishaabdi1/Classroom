-- Drops the inventory_db if it exists currently --
DROP DATABASE IF EXISTS inventory_db;
-- Creates the inventory_db database --
CREATE DATABASE inventory_db;

-- use inventory_db database --
USE inventory_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE produce (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL
);
