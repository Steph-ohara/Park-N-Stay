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
