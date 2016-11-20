var express = require('express');
var Listing = require('../models/listing');
var router = express.Router();
var coors = require('cors');

/* GET home page. */
router.post('/', coors(), function(req, res, next) {
  var newListing = {
    city: req.params.city,
    address: req.params.address,
    zipcode: req.params.zipcode,
    price: req.params.price,
    bedrooms: req.params.bedrooms,
    bathrooms: req.params.bathrooms,
    duration: req.params.duration,
    pets: req.params.pets,
    furnished: req.params.furnished
  }
  Listing.create(newListing, function(err, listing) {
    if (err) res.send(err);
    res.json(listing);
  });
});

module.exports = router;
