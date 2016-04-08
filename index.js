var http = require('http');
var express = require('express');

var app = module.exports.app = exports.app = express();

app.use(express.static('./bower_components'));
app.use(express.static('./app'));

app.engine('html', require('ejs').renderFile);

app.listen(3002, function() {
  console.log('now listening on http://localhost:3002');
});

app.get('/', function(req, res) {
  res.render('index.html');
});
