const express = require('express');

const app = express();

app.listen(3000, () => console.log("servidor en http://localhost:3000"));

app.get('/', (req, res) => {
    res.send("Hola");
})
