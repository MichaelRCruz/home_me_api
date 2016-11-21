var express = require('express');
var Listing = require('../models/listing');
var router = express.Router();
var cors = require('cors');
var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: process.env.GOOGLE_MAPS_KEY,
  formatter: null
};

var geocoder = NodeGeocoder(options);

/* GET home page. */
router.get('/', function(req, res, next) {
  Listing.find({}, function(err, listings) {
    if (err) res.send(err);
    res.json(listings);
  });
});

router.post('/', cors(), function(req, res, next) {
  var newListing = {
    city: req.body.city,
    state: req.body.state,
    address: req.body.address,
    zipcode: req.body.zipcode,
    price: req.body.price,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    duration: req.body.duration,
    pets: req.body.pets,
    furnished: req.body.furnished
  }
  // geocoder.geocode('1450 Barry Ave, Los Angeles, CA')
  geocoder.geocode(newListing.address + ", " + newListing.city + ", " + newListing.state + " " + newListing.zipcode)
  .then(function(data) {
    Listing.create(newListing, function(err, listing) {
      if (err) res.send(err);
      var firstListing = data[0];
      listing.lat = firstListing.latitude;
      listing.long = firstListing.longitude;
      res.json(listing);
    })
  })
});

router.delete('/', cors(), function(req, res, next) {
  var id = { "_id": req.body.id }
  Listing.find(id).remove(function(err) {
    if (err) console.log(err);
    res.send(204);
  })
})
module.exports = router;
