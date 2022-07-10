// enrutador que consume los datos de la BD

const { Router } = require('express');
const db = require('../db/index');
const router = Router();

router.get('/cliente', async (req, res) => {
    const cliente = await db.getCliente();
    res.status(202).send(cliente);

});

router.post('/cliente', async (req, res) => {
try {
const NuevoCliente = await db.createCliente(req.body);
res.status(201).send(NuevoCliente);

} catch (error) {
  res.status(500).send(error);
}
});

module.exports = router;