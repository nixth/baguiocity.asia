"use strict";

var IndexController = require('../controllers/IndexController');

module.exports.initialize = function(app) {
  app.get('/', IndexController.index);
};
