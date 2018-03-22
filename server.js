var express = require('express');
var app = express();

var controller = require('./controllers/scriptureController.js')

app.set('port', process.env.PORT || 5000)
  .use(express.static(__dirname + '/public'))
  .get('/scriptures', controller.handleScriptureList)
  .listen(app.get('port'), function() {
   	console.log('Listening on port: ' + app.get('port'));
  });


