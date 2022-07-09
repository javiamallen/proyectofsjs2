// vistas de la aplicacion

const { Router } = require('express');

const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});

// vista login / mi cuenta

router.get("/login", (req, res) => {
    res.render("Login");
});

module.exports = router;