var mongoose = require('mongoose');
var User = mongoose.model('Users');


exports.list_all_users = function(req,res){
    User.find({}, function(err,user){
        if (err){
            res.send(err);
        }
        res.json(user);
    });
};

exports.get_user = function(req,res){
    User.findOne({'_id': req.params._id }, function(err,user){
        if (err){
            res.send(err);
        }
        res.json(user);
    });    
};
