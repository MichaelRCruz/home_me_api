var express = require('express');
var Listing = require('../models/listing');
var router = express.Router();
var cors = require('cors');

/* GET home page. */
router.post('/', cors(), function(req, res, next) {
  var newListing = {
    city: req.body.city,
    address: req.body.address,
    zipcode: req.body.zipcode,
    price: req.body.price,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    duration: req.body.duration,
    pets: req.body.pets,
    furnished: req.body.furnished
  }
  console.log(newListing);
  Listing.create(newListing, function(err, listing) {
    if (err) res.send(err);
    res.json(listing);
  });
});

module.exports = router;
