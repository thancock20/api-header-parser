var express = require('express');
var app = express();
var path = require('path');
var useragent = require('express-useragent');

var port = process.env.PORT || 8080;

app.set('view engine', 'jade');

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { hostname: req.hostname === 'localhost' ? 'localhost:' + port : req.hostname});
});

router.get('/main.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/main.css'));
});

router.use(useragent.express());

router.get('/parser/', function(req, res) {
  res.json({
    ip: req.ip,
    lang: req.acceptsLanguages()[0],
    os: req.useragent.os
  });
});

app.use('/', router);

app.listen(port);
