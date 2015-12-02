var express = require('express');
var winston = require('winston');
var expressWinston = require('express-winston');

var app = express();

app.use(expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: 'logs/app.log',
    })
  ],
  msg: "HTTP {{req.method}} {{req.url}}",
}));

app.get('/hello', function (req, res) {
  res.status(200);
  res.send('Hello World!');
});

app.get('/bad', function (req, res) {
  res.status(500);
  res.send('Error!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
