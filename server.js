const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 5001

const app = express();

const handlebars = require('express-handlebars');
const bcrypt = require('bcrypt');
const mysql2 = require('mysql2');
const sequelize = require('sequelize');

app.use(express.static("public"));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// const routes = require("./controllers/api");

// app.use(routes);


app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`)
});
