/**
 * mongodb db.js
 */

var mongoose = require('mongoose');
var config = require('../config');
var mongoose = require('mongoose');
mongoose.connect(config.db);

// 下面是mongoose对MongoDb实现聚合，主要利用聚合架构
var getArticle = function(accountId) {
	db.account.aggregate([
	{
		$match: {
			_id:accountId
		}
	},
	{ $unwind: "$records"},
	{ $group: 
		{
			_id: "$_id",
			article: {$title: "$Articles.title", $author: "$author: $Articles.author", $content: "$Articles.content"}
	}}
	], function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(result);
	});
}

var data = 
{	title: 'study nodejs (1)',
	author: 'jason',
	content: '一个男孩与鸟的故事，也是一个男孩与父亲的故事。故事发生在希腊某个安静美丽的小岛，失去母亲的男孩尼亚斯，在一个偶然的机会遇到一只受伤的幼弱的鹈鹕！',
	meta: {
		createAt: '2018-07-15 12:12:12',
		updateAt: '2018-07-15 12:12:12',
		}
}

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

var insertArticles = function(accountId, article, numberOfArticle, callback) {
	account.findOne({_ic:accountId}, function(err, account){
		if (err) {
			console.log(err);
			return;
		}
		for (var i=0; i<numberOfArticle; i++) {
			var article = new article();
			article.title = article.title;
			article.date = new Date();
			article.author = 'Jason';
			article.content = article.content;
		}
		account.save(function(err2) {
			if (err2) {
				console.log(err2);
			}
			return callback();
		});
	});
}

