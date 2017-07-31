var express = require('express');
var fs = require('fs');
var app = express();


app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/' + 'index.html');
});

var server = app.listen(8081, "127.0.0.1", function(req,res){
    var host = server.address().address;
    var port = server.address().port;
    console.log("example app listening to http://%s:%s", host, port);
});