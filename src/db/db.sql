CREATE DATABASE proyecto;

CREATE TABLE cliente (
	email VARCHAR(250) PRIMARY KEY
	nombre VARCHAR(20) NOT NULL
	apellido VARCHAR(20) NOT NULL 
	celular INT(10) NOT NULL
	password VARCHAR(60) NOT NULL
	
);

CREATE TABLE productos (
    id_producto SERIAL PRIMARY KEY,
    producto_descripcion VARCHAR(50),
    precio INT,
    disponible BOOLEAN NOT NULL
);




CREATE TABLE detalle_pedido (
    cantidad_productos INT,
    subtotal INT,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);