/**
 * ----- accountModel -----
 */

// define Models
var accountModel = db.model('account', accountSchema);

// 增加记录 基于model操作
var user = {name: 'Jason Zhang', password: '123456', age: 25, email: 'abc@163.com', phone: '15021458935'};
accountModel.create(user, function(err){
	if (err) {
		console.log(err);
	}else{
		console.log('user "'+ user.name + '" save ok');
	}
	// close connect
	db.close();
})
