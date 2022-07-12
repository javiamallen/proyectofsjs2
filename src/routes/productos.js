
const { Router } = require('express');

const db = require('../db');
const router = Router();

router.get("/", async (req, res) => {
    try {
        const productos = await db.getProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const respuesta = await db.updateProducto(req.body, req.params.id);
        res.json(respuesta);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;