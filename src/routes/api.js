// enrutador que consume los datos de la BD

const { Router } = require('express');
const db = require('../db/index');
const router = Router();

router.get('/cliente', async (req, res) => {
    const cliente = await db.getCliente();
    res.send(cliente);

});

module.exports = router;