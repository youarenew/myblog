var express = require('express');
var app = express.Router();

var _ = require('underscore');
// var account = require('./mongo/models/account');
var article = require('./mongo/models/article');

var config = require('../config');
var mongoose = require('mongoose');
mongoose.connect(config.db);

/* GET home page. */

app.get('/', function(req, res){
	article.find({}, function(err, result){
		// console.log(result);
		if (err) {
			console.log(err);
		}
		res.render('index', { 
			articles: result
		});
	});
});

app.get('/creates', function(req, res){
	res.render('creates', { title: 'creates' });
});
app.get('/reg', function(req, res){
	res.render('reg', { title: 'reg' });
});
app.post('/creates', function(req, res) {
	console.log(req.body);

	article = new article({
		title: req.body.title,
		author: req.body.author,
		content: req.body.content,
	});
	article.save(function (err, article) {
		if (err) {
			console.log(err);
		}
		console.log(article);
	});
	
	
	// article.insertMany(article, function(err, result) {
	// 	if (err){
	// 		console.log(err);
	// 	}else{
	// 		res.send(
	// 			{code:1, msg:'操作成功', result: result}
	// 		);
	// 	}
	// })
});

app.get('/login', function(req, res){
	res.render('login', { title: 'login' });
});
// app.get('/', function(req, res, next) {
//   res.render('index', blog);
// });


// var articleModel = db.model('articles', articleSchema);
// var article = ({})
// app.get('/', function(req, res, next) {
// 	articleModel.find({}, function(err, doc){
// 		if (err) {
// 			console.log(err);
// 		}else{
// 			console.log('Article find success!');
// 			var blogs = {data:[]};
// 			for (var item in doc){
// 				blogs.data.push(item);
// 			}
// 		};
// 		// close connect
// 		db.close();
// 		res.render('index', blog);
// 	});
// });



module.exports = app;