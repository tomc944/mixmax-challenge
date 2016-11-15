var mountainKey = require('../util/key');
var request     = require('request');

module.exports = function(req, res) {
  var url = req.query.url.trim();
  var matches = url.match(/\d+$/);


  if (!matches) {
    res.status(400).send('Invalid url')
    return
  }

  var BASEURL = 'https://www.mountainproject.com/data?action=getRoutes&routeIds='
  var routeId = matches[0];
  var apiUrl = BASEURL + routeId + "&key=" + mountainKey

  request.get(apiUrl, {timeout: 1500, json: true}, function(err, response) {
    if (err) {
      res.status(500).send("Error with API")
    }

    var imageUrl = response.body.routes[0].imgMed;
    var width = 600;

    var html = '<img style="max-width:100%;" src="' + imageUrl + '" width="' + width + '"/>';

    res.json({
      body: html
    })
  });
}
