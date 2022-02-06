const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

// 
const path = require('path');


const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 5001

const app = express();

const handlebars = require('express-handlebars');
// added from module 14
const hbs = handlebars.create({});

const bcrypt = require('bcrypt');
const mysql2 = require('mysql2');
const sequelize = require('sequelize');

app.use(express.static('public'));

// middleware for css 
app.use(express.static(path.join(__dirname, 'public')));

// added from module 14
app.engine('handlebars', hbs.engine);
//app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// const routes = require("./controllers/api");

// app.use(routes);


app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`)
});
