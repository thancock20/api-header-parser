var express = require('express');
var app = express();
var path = require('path');
var useragent = require('express-useragent');

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/main.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/main.css'));
});

router.use(useragent.express());

router.get('/parser/', function(req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages()[0],
    os: req.useragent.os
  });
});

app.use('/', router);

app.listen(port);
