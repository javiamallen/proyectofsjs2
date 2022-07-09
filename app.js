const express = require('express');
const exphbs = require("express-handlebars");

const app = express();

app.engine(
    "hbs",
    exphbs.engine({
        extname: ".hbs",
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
);

app.set("view engine, hbs");

app.listen(3000, () => console.log("servidor en http://localhost:3000"));



// llamar enrutadores

app.use('/', require('./src/routes/views'));
app.use('/api', require('./src/routes/api'));


