// enrutador que consume los datos de la BD

const { Router } = require('express');
const db = require('../db');
const router = Router();

router.get('/cliente', async (req, res) => {
    const cliente = await db.getCliente();
    res.status(202).send(cliente);

});

router.post('/cliente', async (req, res) => {
try {
    console.log(req.body)
    const { email, nombre, apellido, celular, password } = req.body;

    // create OK
    if (!email) return res.status(400).send("El email es requerido");
    if (!nombre) return res.status(400).send("El nombre es requerido");
    if (!apellido) return res.status(400).send("El apellido es requerido");
    if (!celular) return res.status(400).send("El celular es requerido");
    if (!password) return res.status(400).send("El password es requerido");

const NuevoCliente = await db.createCliente({ email, nombre, apellido, celular, password });
res.status(201).send(NuevoCliente);

} catch (error) {
  res.status(500).send(error);
}
});

module.exports = router;