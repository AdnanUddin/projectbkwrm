var mongoose = require('mongoose');
var Book = mongoose.model('Books');

exports.list_all_books = function(req,res){
    Book.find({}, function(err,book){
        if (err){
            res.send(err);
        }
        res.json(book);
    });
};

exports.get_book = function(req,res){
    Book.findOne({'_id': req.params._id }, function(err,user){
        if (err){
            res.send(err);
        }
        res.json(user);
    });    
};