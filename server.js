const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require('cors');

// parse requests of content-type: application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    app.use(cors());

    // Pass to next layer of middleware
    next();
});

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    return res.json({ message: "Teste..." });
});

require("./routes/usuarios.routes")(app);
require("./routes/computadores.routes")(app);
require("./routes/celulares.routes")(app);

// set port, listen for requests
app.listen(3001, '127.0.0.1',() => {
    console.log("Server is running on port 3001.");
});
