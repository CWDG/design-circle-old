'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};

exports.landing = function(req, res) {
	res.render('landing', {
		user: req.user || null
	});
};
