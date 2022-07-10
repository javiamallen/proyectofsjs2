const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "admin",
    database: "proyecto",
    port: 5432,
});

const getCliente = async () => {
    const result = await pool.query("SELECT * FROM cliente;");
    return result.rows;
}


// crear cliente

const createCliente = async ({ nombre, apellido, email, celular, comuna, password }) => {
    const result = await pool.query({
        text: "INSERT INTO cliente(nombre, apellido, email, celular, comuna, password) VALUES ($1, $2, $3, $4, $5, $6);",
        values: [nombre, apellido, email, celular, comuna, password]
    })
    return result.rows[0];
}
module.exports = {
    getCliente,
    createCliente
}