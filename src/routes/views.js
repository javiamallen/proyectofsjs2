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

// vista Registrarse 

router.get("/register", (req, res) => {
    res.render("Register");
});

// vista pedido

router.get("/order", (req, res) => {
    res.render("Order");
});

// vista producto indiv

router.get("/product", (req, res) => {
    res.render("Product");
});

// vista Lista de Productos

router.get("/productList", (req, res) => {
    res.render("productList");
});
router.get("/complete", (req, res) => {
    res.render("complete");
});

router.get("/private", (req, res) => {
    res.render("private");
});



module.exports = router;