const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "proyecto",
    port: 5432,
});

const getCliente = async () => {
    const result = await pool.query("SELECT * FROM cliente;");
    return result.rows;
}
module.exports = {
    getCliente
}