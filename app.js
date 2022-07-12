const express = require('express');
const exphbs = require("express-handlebars");




const app = express();

// middlewares principales

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.engine(
    "hbs",
    exphbs.engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
);

app.set("view engine", "hbs");

app.listen(3000, () => console.log("servidor en http://localhost:3000"));


// llamar axios

app.use('/axios', express.static(__dirname + '/node_modules/axios/dist'));

// llamar bootstrap

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));



// llamar enrutadores

app.use('/', require('./src/routes/views'));
app.use('/api', require('./src/routes/api'));
app.use('/', require('./src/routes/productos'));

