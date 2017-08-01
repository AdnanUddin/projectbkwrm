var express = require('express');
var router = express.Router();


router.get('/user', function(req,res){
    // console.log(req.query);
    res.send(req.query.name);
});

module.exports = router;