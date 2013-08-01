(function() {
  "use strict";

  var IndexController = require('../controllers/IndexController');

  module.exports = function() {

    return {
      initialize: function(app) {

        // Index
        app.get('/', IndexController.index);

      }
    };
  }();
}());
