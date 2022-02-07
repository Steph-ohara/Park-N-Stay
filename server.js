const path = require('path');
const express = require('express');
const axios = require('axios');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 5001;

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

const bcrypt = require("bcrypt");
const mysql2 = require("mysql2");
const sequelize = require("sequelize");

// middleware for css 
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname + 'public')));

//Serves the body of the page (homepage.handlebars) to the template layout (main.handlebars)
app.get("/", (req, res) => {
    console.log('/ route')
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("homepage");
});

app.listen(PORT, () => {
  console.log(`API server now on ${PORT}!`);
});
