
var express = require('express');
var app = express();
// var fs = require("fs"); 

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// app.get('/userInfo', function (req, res) {
//    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
//        console.log( data );
//        res.end( data );
//    });
// });
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});