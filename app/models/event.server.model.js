'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var validateEventName = function(name) {
	return name.length > 0;
};

/**
 * Event Schema
 */
var EventSchema = new Schema({
	name: {
		type: String,
		trim: true,
		default: 'Event',
		validate: [validateEventName, 'Please assign an event name.']
	},
	description: {
		type: String,
		trim: true,
		default: ''
	},
	date: {
		type: Date,
		default: Date.now
	},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	},
});

EventSchema.pre('save', function(next) {
	next();
});

mongoose.model('Event', EventSchema);
