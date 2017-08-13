var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
    title : String,
    isbn : Number,
    edition: String,
    author: String,
    publisher: String
});

module.exports = mongoose.model('Books', BookSchema);