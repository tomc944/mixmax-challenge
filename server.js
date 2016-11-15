var express   = require('express');
var app       = express();
var cors      = require('cors');
var resolver  = require('./api/resolver');

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
}

app.get('/resolver',  cors(corsOptions), resolver);

app.listen(process.env.port || 3000)
