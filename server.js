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

// app.use(require('./controllers'));




// app.engine('handlebars', engine({
//     layoutsDir: __dirname + '/views/layouts/',
//     partialsDir: __dirname + '/views/partials/'
// }));



// const routes = require("./controllers/api");

// app.use(routes);





//Serves the body of the page (homepage.handlebars) to the template layout (main.handlebars)
app.get("/", (req, res) => {
    console.log('/ route')
  res.render("homepage");
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
