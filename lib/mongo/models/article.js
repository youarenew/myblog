
var mongoose = require('mongoose');
var articleSchema = require('../schemas/article');
var article = mongoose.model('article', articleSchema);

module.exports = article;