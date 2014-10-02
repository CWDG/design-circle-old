'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core');
	app.route('/tut').get(core.index);
	app.route('/').get(core.landing);
};
