var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(__dirname + '/' + 'index.html');
});

// router.get('/list_users', function(req,res){
//   var db = req.db;
//   var collection = db.get('users');
//   collection.find({},{}, function(e,docs){
//     res.send(docs);
//   });
// });

module.exports = router;
