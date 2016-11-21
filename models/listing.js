var mongoose = require('mongoose');

var listingSchema = new mongoose.Schema({
  city: String,
  state: String,
  address: String,
  zipcode: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  duration: Number,
  pets: Boolean,
  furnished: Boolean
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
