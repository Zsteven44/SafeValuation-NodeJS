var express = require("express");
var app = express();


app.get('/', function (req, res) {
  res.render('index')
});

app.get('/contactme', function (req, res) {
  res.render('contactme');
});
app.get('/products', function (req, res) {
  res.render('products');
});
app.get('/types', function (req, res) {
  res.render('types');
});


app.set('view engine', 'ejs');
app.set('views', __dirname+'/public/html');
app.use('/css', express.static(__dirname+'/public/css'));
app.use('/js', express.static(__dirname+'/public/js'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listesdfasdf', host, port);
});

