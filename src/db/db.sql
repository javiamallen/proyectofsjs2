CREATE DATABASE proyecto;

CREATE TABLE cliente (
	email VARCHAR(250) PRIMARY KEY
	nombre VARCHAR(20) NOT NULL
	apellido VARCHAR(20) NOT NULL 
	celular INT(10) NOT NULL
	password VARCHAR(60) NOT NULL
	-->OK
);

CREATE TABLE productos (
    id_producto SERIAL PRIMARY KEY,
    producto_descripcion VARCHAR(50),
    precio INT,
    disponible BOOLEAN NOT NULL
); --> OK

CREATE TABLE pedido (
    id_pedido INT PRIMARY KEY,
    fecha DATE,
    email_usuario VARCHAR(50),
    FOREIGN KEY (email_usuario) REFERENCES cliente(email) ON DELETE CASCADE
); --> OK


CREATE TABLE detalle_pedido (
    cantidad_productos INT,
    subtotal INT,
    pedido_id INT,
    producto_id INT,
    FOREIGN KEY (pedido_id) REFERENCES pedido (id_pedido) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos (id_producto) ON DELETE CASCADE
); --> OK