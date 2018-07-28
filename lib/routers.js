var express = require('express');
var app = express.Router();

// var account = require('./mongo/models/account');
var article = require('./mongo/models/article');

var config = require('../config');
var mongoose = require('mongoose');
mongoose.connect(config.db);

/* GET home page. */
		
app.get('/', function(req, res){
	res.render('index', 
		{
			articles: 
			[
			{
				'title': '使用nodejs搭建个人博客(1)',
				'content':'一个男孩与鸟的故事，也是一个男孩与父亲的故事。故事发生在希腊某个安静美丽的小岛，失去母亲的男孩尼亚斯，在一个偶然的机会遇到一只受伤的幼弱的鹈鹕！',
				'author': 'Jason',
				'date': '2018/07/15'
			},
			{
				'title': '使用nodejs搭建个人博客(2)',
				'content':'一个男孩与鸟的故事，也是一个男孩与父亲的故事。故事发生在希腊某个安静美丽的小岛，失去母亲的男孩尼亚斯，在一个偶然的机会遇到一只受伤的幼弱的鹈鹕！',
				'author': 'Jason',
				'date': '2018/07/20'
			}]
		}	
	);
});
app.get('/a', function(req, res){
	article.statics.find(function(err, callback){
		if (err) {
			console.log(err);
		}
		res.render('index', { 
			articles: this.model('article')
		});
	});
});

app.get('/creates', function(req, res){
	res.render('creates', { title: 'creates' });
});
app.get('/reg', function(req, res){
	res.render('reg', { title: 'reg' });
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
