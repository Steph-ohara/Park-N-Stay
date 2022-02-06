const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
const path = require('path');
console.log(template({ name: "Nils" }));

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
  res.render("test-places");
});

app.get("/places", (req, res) => {

    // let address = req.params.address

    // const args = {
    //    params: {
    //      key: '<your-api-key>',
    //       address: address,
    //    }
    //  };

    // client.geocode(args).then(gcResponse => {
    //     const str = JSON.stringify(gcResponse.data.results[0]);
    //     // console.log(`First result is: ${str}`));
        
    //     });
  client
    .placesNearby({
      params: {
        location: { lat: 33.897696, lng: -117.460933 },
        radius: 500,
        type: "parking",
        opennow: false,
        key: "AIzaSyB9hovmDjqkP0Ybn9L35wT3fGwLVf03ieM",
      },
      timeout: 1000, // milliseconds
    })
    .then((r) => {
        console.log('res data: ', r.data)
      res.send(r.data);
    })
    .catch((e) => {
      console.log("ERROR", e.response);
    });
});

app.listen(PORT, () => {
  console.log(`API server now on ${PORT}!`);
});
