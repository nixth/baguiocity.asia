(function() {
  "use strict";

  var path = require('path'),
    engines = require('consolidate');

  module.exports = function() {

    return {
      initialize: function(app, express) {

        // all environments
        app.set('port', process.env.PORT || 3000);
        app.set('views', __dirname + '/views');
        app.engine('html', engines.hogan);
        app.set('view engine', 'html');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.cookieParser());
        app.use(express.bodyParser());
        app.use(express.session({
          secret: 'QWERTY12345UIOP67890'
        }));
        app.use(express.methodOverride());
        app.use(app.router);

        app.use('/static', express.static(path.join(__dirname, '..', 'static')));

        // development only
        if ('development' == app.get('env')) {
          app.use(express.errorHandler());
        }

      }
    };

  }();

}());
