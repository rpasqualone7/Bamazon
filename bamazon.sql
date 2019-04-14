DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR (100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL (10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (112, "Sisters of mercy - Floodland", "music", 15, 35),
(213, "Fender Jazz Bass", "instruments", 699.99, 10),
(301, "The Chameleons UK - Script of the bridge", "music", 15, 30),
(440, "Gibson Les Paul", "instruments", 1199.99, 5),
(505, "Bose Bluteooth Speaker", "audio", 299.99, 20),
(623, "The Cure - Desintigration", "music", 15, 45),
(700, "Casio Keyboard", "instruments", 199.99, 20),
(884, "Audio Technica Headphones", "audio", 149.99, 15),
(924, "Joy Division - Unknown Pleasures", "music", 15, 30),
(1001,"Ampeg VST Full Stack", "audio", 5, 999.99)
