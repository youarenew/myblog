/**
 * mongodb db.js
 */

var mongoose = require('mongoose');


var Article = mongoose.model('Article', {
	title: String,
	author: String,
	content: String,
	createdate: Date,
});

