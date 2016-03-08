var express = require('express');
var app = express();
var path = require('path');
var moment = require('moment');
moment().utc();

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/main.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/main.css'));
});

router.get('/:date', function(req, res) {
  var timestamp = moment.unix(req.params.date);
  timestamp = timestamp.isValid() ? timestamp : moment(new Date(req.params.date));
  if (timestamp.isValid()) {
    res.json({
      unix: moment(timestamp).format('X'),
      natural: moment(timestamp).format('MMMM D, YYYY')
    })
  } else {
    res.json({
      unix: null,
      natural: null
    })
  }
});

app.use('/', router);

app.listen(port);
