var express = require('express');
var Listing = require('../models/listing');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Listing.find({}, function(err, listings) {
    if (err) res.send(err);
    res.json(listings);
  });
});

module.exports = router;
