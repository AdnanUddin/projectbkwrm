var mongoose = require('mongoose');
var Listing = mongoose.model('Listings');


exports.list_all_listings = function(req,res){
    Listing.find({},'owner.username price book.title' ,function(err,listing){
        if (err){
            res.send(err);
        }
        res.json(listing);
    });
};

exports.get_listing = function(req,res){
    Listing.findOne({'_id': req.params._id }, function(err,user){
        if (err){
            res.send(err);
        }
        res.json(user);
    });    
};