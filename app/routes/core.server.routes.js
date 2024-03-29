'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core');
	app.route('/').get(core.index);

  // About page
	var core = require('../../app/controllers/core');
	app.route('/about').get(core.about);
};
