/**
 * mongodb db.js
 */

var mongoose = require('mongoose');


// Blog Schema
var articleSchema = new mongoose.Schema({
	title: {type: String, default: 'New blog',require: true},
	author: {type: String, default: 'jason'},
	date: {type: Date, default: Date.now},
	content: {type: String}
});

// Account Schema
var accountSchema = new mongoose.Schema({
	name: {type: String, dafault: 'Nick Name', require: true},
	date: {type: Date, default: Date.now},
	age: {type: Number},
	passowrd: {type: String},
	email: {type: String},
	phone: {type: String}
});



// 下面是mongoose对MongoDb实现聚合，主要利用聚合架构
// var getArticle = function(accountId) {
// 	db.account.aggregate([
// 	{
// 		$match: {
// 			_id:accountId
// 		}
// 	},
// 	{ $unwind: "$records"},
// 	{ $group: 
// 		{
// 			_id: "$_id",
// 			article: {$title: "$Articles.title", $author: "$author: $Articles.author", $content: "$Articles.content"}
// 	}}
// 	], function (err, result) {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}
// 		console.log(result);
// 	});
// }


// 插入数据
// var insertAccount = function(account, callback){
// 	var Account = new account();
// 	Account.name = account.name;
// 	Account.Articles = [];

// 	Account.save(function(err){
// 		if (err) {
// 			console.log(err);
// 			return null;
// 		}
// 		return callback(Account._id);
// 	});
// };

// var insertArticles = function(accountId, article, numberOfArticle, callback) {
// 	account.findOne({_ic:accountId}, function(err, account){
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}
// 		for (var i=0; i<numberOfArticle; i++) {
// 			var article = new article();
// 			article.title = article.title;
// 			article.date = new Date();
// 			article.author = 'Jason';
// 			article.content = article.content;
// 		}
// 		account.save(function(err2) {
// 			if (err2) {
// 				console.log(err2);
// 			}
// 			return callback();
// 		});
// 	});
// }

