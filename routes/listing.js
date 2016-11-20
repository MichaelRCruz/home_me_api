var express = require('express');
var Listing = require('../models/listing');
var router = express.Router();
var coors = require('cors');

/* GET home page. */
router.post('/', coors(), function(req, res, next) {
  var newListing = {
    city: req.params.body.city,
    address: req.params.body.address,
    zipcode: req.params.body.zipcode,
    price: req.params.body.price,
    bedrooms: req.params.body.bedrooms,
    bathrooms: req.params.body.bathrooms,
    duration: req.params.body.duration,
    pets: req.params.body.pets,
    furnished: req.params.body.furnished
  }
  console.log(newListing);
  Listing.create(newListing, function(err, listing) {
    if (err) res.send(err);
    res.json(listing);
  });
});

module.exports = router;
