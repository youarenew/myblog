
var mongoose = require('mongoose');
var articleSchema = require('../schemas/article');
var article = mongoose.model('article', articleSchema, 'article');

module.exports = article;