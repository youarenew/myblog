var express = require('express');
var router = express.Router();

/* GET home page. */
// var blogs = { title: '使用nodejs搭建个人博客(1)', author:'Jason', date:'2018/07/15'}
var blog = 
	{
		data: [
		{
			'title': '使用nodejs搭建个人博客(1)',
			'comment':'一个男孩与鸟的故事，也是一个男孩与父亲的故事。故事发生在希腊某个安静美丽的小岛，失去母亲的男孩尼亚斯，在一个偶然的机会遇到一只受伤的幼弱的鹈鹕！',
			'author': 'Jason',
			'date': '2018/07/15'
		},
		{
			'title': '使用nodejs搭建个人博客(2)',
			'comment':'一个男孩与鸟的故事，也是一个男孩与父亲的故事。故事发生在希腊某个安静美丽的小岛，失去母亲的男孩尼亚斯，在一个偶然的机会遇到一只受伤的幼弱的鹈鹕！',
			'author': 'Jason',
			'date': '2018/07/20'
		}]
	}
  	
router.get('/', function(req, res, next) {
  res.render('index', blog);
});

// 注册
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });
});

// 登录
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});

// 发表
router.get('/creates', function(req, res, next) {
  res.render('creates', { title: '发表' });
});

// 更新
router.get('/update', function(req, res, next) {
  res.render('index', { title: '更新' });
});

// 查询
router.get('/findAll', function(req, res, next) {
  res.render('index', { title: '查询' });
});

// 删除
router.get('/remove', function(req, res, next) {
  res.render('index', { title: '删除' });
});

// module.exports = function(app){
// 	app.get('/', function(req, res, next){
// 		res.render('index', { title: '首页' });
// 	});
// }

module.exports = router;
