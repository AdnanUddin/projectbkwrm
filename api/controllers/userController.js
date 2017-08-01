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
    User.findOne({'username': req.params.username }, function(err,user){
        if (err){
            res.send(err);
        }
        res.json(user);
    });    
};