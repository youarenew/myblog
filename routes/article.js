/**
 * ----- articleModel -----
 */

var db = mongoose.createConnection(config.db);

// define Article Models
var articleModel = db.model('articles', articleSchema);

// 增加记录 基于model操作
var article = {title: '', author:'zsj', content: 'This is a article for test mongodb option insert.'}
articleModel.create(article, function(err){
	if (err) {
		console.log(err);
	}else{
		console.log('Article created success!');
	}
	// close connect
	db.close();
})


var article = {title: '', author:'zsj', content: 'This is a article for test mongodb option insert.'}
articleModel.findAll(article, function(err){
	if (err) {
		console.log(err);
	}else{
		console.log('Article created success!');
	}
	// close connect
	db.close();
})

