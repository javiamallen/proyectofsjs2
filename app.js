const express = require('express');

const app = express();

app.listen(3000, () => console.log("servidor en http://localhost:3000"));



// llamar enrutadores

app.use('/', require('./src/routes/views'));
app.use('/api', require('./src/routes/api'));
