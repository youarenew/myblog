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
		if (err) {
			console.log(err);
		}
		res.render('index', { 
			articles: result
		});
	});
});

app.get('/a', function(req, res){
	res.render('creates', { title: 'creates' });
});
app.get('/reg', function(req, res){
	res.render('reg', { title: 'reg' });
});
app.post('/creates', function(req, res) {
	console.log(req.body);
	var id = req.body.article._id
	var artObj = req.body.article
	var _article


	if (id !='undefined'){
		article.findById(id, function(err, article) {
			if(err){
				console.log(err);
			}
			_article = _.extend(article, artObj);
			_article.save(function (err, article) {
				if(err){
					console.log(err);
				}
				res.redirect('/creates')
			})
		})
	}else{
		_article = new article({
			title: artObj.title,
			author: artObj.author,
			content: artObj.content,
			meta: artObj.meta
		});
		_article.save(function (err, article) {
			if (err) {
				console.log(err);
			}
			res.redirect('/creates')
		});
	}
	
	
	// article.insertMany(newBlog, function(err, result) {
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
