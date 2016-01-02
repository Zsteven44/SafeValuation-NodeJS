var express = require("express");
var app = express();


app.get('/', function (req, res) {
  res.send('This is a response to a request!');
});

app.get('/steve', function (req, res) {
  res.send('hello steve');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listesdfasdf', host, port);
});

