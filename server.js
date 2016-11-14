var express = require('express');
var app     = express();

app.get('/typeahead', require('./api/typeahead'));
app.get('/resolver',  require('./api/resolver'));

app.listen((process.env.port || 3000), function() {
  console.log('Running');
});
