/**
 * Module dependencies.
 */

var express = require('express');
var config = require('./config/config');
var routes = require('./config/routes');
var http = require('http');
var app = express();

config.initialize(app, express);
routes.initialize(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
