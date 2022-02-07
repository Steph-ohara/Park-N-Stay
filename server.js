const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
const path = require('path');

const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 5001;

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

const handlebars = require('express-handlebars');
// added from module 14
const hbs = handlebars.create({});

const app = express();

const { engine } = require ('express-handlebars');
const bcrypt = require("bcrypt");
const mysql2 = require("mysql2");
const sequelize = require("sequelize");

// middleware for css 
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', engine({
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

//app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// const routes = require("./controllers/api");

// app.use(routes);

app.get("/", (req, res) => {
    console.log('/ route')
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("homepage");
});

app.listen(PORT, () => {
  console.log(`API server now on ${PORT}!`);
});
