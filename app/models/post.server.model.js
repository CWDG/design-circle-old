'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Post name',
		trim: true
	},
  description: {
    type: String,
    trim: true,
    default: ''
  },
	created: {
		type: Date,
		default: Date.now
  }
});

mongoose.model('Post', PostSchema);
