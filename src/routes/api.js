// enrutador que consume los datos de la BD

const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = Router();


// rutas creacion usuario

const secret_key = "secret_key";

router.get('/cliente',

async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send("No token provided");

  jwt.verify (token, secret_key, (err, decoded) => {
    if (err) {
    return res.status(401).send("Token invalido");
  }
  req.cliente = decoded;
  next();
  });
  
},
async (req, res) => {
  console.log(req.cliente);
    const cliente = await db.getCliente();
    res.status(200).send(cliente);
}
);

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
    
// bcrypt password

const passwordHash = await bcrypt.hash(password, 10);



const nuevoCliente = await db.createCliente({ email, nombre, apellido, celular, password: passwordHash });
res.status(201).send(nuevoCliente);

} catch (error) {
  res.status(500).send(error);
}
});


// rutas creacion pedidos



// JWT

router.post('/login', async (req,res) => {
try {
  const { email, password } = req.body;
  if (!email) return res.status(400).send("El email es requerido");
  if (!password) return res.status(400).send("El password es requerido");

// obtener usuario a partir del email

const cliente = await db.getClienteByEmail(email);
if (!cliente) {
  return res.status(400).send("Credenciales invalidas");
}

// comparar contraseña con la que se recibe del formulario 

const passwordValid = await bcrypt.compare(password, cliente.password);
if (!passwordValid) {
  return res.status(400).send("Credenciales invalidas");

}

// metodo sign para firmar token

const token = jwt.sign({email: cliente.email }, secret_key);
delete cliente.password;


  res.status(200).send({cliente, token});
} catch (error) {
  res.status(500).send(error);
}


});

module.exports = router;