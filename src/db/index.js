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

const createCliente = async ({ email, nombre, apellido, celular, password }) => {
    const result = await pool.query({
        text: "INSERT INTO cliente(email, nombre, apellido, celular, password) VALUES ($1, $2, $3, $4, $5);",
        values: [email, nombre, apellido, celular, password]
    })
    return result.rows[0];
}
module.exports = {
    getCliente,
    createCliente
}