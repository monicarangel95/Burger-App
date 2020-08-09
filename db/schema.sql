##Schema
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
    );