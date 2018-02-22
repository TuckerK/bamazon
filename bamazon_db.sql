DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30)NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("kit_kat", "food", 2, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("skittles", "food", 1.50, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("light_bulbs", "home", 1, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("toilet_paper", "home", 30, 650);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("coffee", "food", 15, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("2pac_vinyl", "music", 30, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("rick_astley_vinyl", "music", 15, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("gtx_1080", "electronics", 1000, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("google_home", "electronics", 50, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("mtg_cards", "hobby", 5, 200);