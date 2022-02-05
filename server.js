const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 5001

const {
    Client
} = require('@googlemaps/google-maps-services-js')

const client = new Client({})

const app = express();

const {engine} = require('express-handlebars');
const handlebars = require('express-handlebars');
const bcrypt = require('bcrypt');
const mysql2 = require('mysql2');
const sequelize = require('sequelize');

app.use(express.static("public"));

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.engine("handlebars", handlebars({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// const routes = require("./controllers/api");

// app.use(routes);

// app.get('/', (req, res) => {
//     const options = {
//         hostname: 'www.todo.steellionllc.com',
//         path: '/api/items',
//         method: 'GET'
//     }
//     axios.get('https://imdb-api.com/en/API/Search/k_00eelvgd/inception').then(data => {
//         console.log('DATA', data)
//         res.send(data.data)
//     }).catch(error => {
//         console.log('ERROR', error)
//         res.send(error)
//     })
// }) 

app.get('/places',(req, res) => {
    client
  .placesNearby({
    params: {
      location: { lat: 33.897696, lng: -117.460933 }, 
      radius: 500,
      type: 'parking',
      opennow: true,
      key: "AIzaSyB9hovmDjqkP0Ybn9L35wT3fGwLVf03ieM",
    },
    timeout: 1000, // milliseconds
  })
  .then((r) => {
    res.send(r.data)
  })
  .catch((e) => {
    console.log('ERROR', e.response);
  });
})

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`)
});
