var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usermodel = mongoose.model('Users').schema;
var bookmodel = mongoose.model('Books').schema;


var ListingSchema = new Schema({
    owner: usermodel,
    book: bookmodel,
});

module.exports = mongoose.model('Listings', ListingSchema);