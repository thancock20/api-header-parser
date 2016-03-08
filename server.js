var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/main.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/main.css'));
});

router.get('/parser/', function(req, res) {
  res.send('<h1>Hello, World!</h1>');
});

app.use('/', router);

app.listen(port);
