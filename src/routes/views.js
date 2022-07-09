// vistas de la aplicacion

const { Router } = require('express');

const router = Router();

router.get("/", (req, res) => {
    res.send("Hola, estás en la vista inicial");
});

module.exports = router;