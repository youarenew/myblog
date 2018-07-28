var mongoose = require('mongoose');

// Account Schema
var accountSchema = new mongoose.Schema({
	account: {
		name: {type: String, dafault: 'Nick Name', require: true},
		date: {type: Date, default: Date.now()},
		age: {type: Number},
		passowrd: {type: String},
		email: {type: String},
		phone: {type: String}
	}

});

accountSchema.methods.updateAccount = function(request, response) {
	this.account.name = request.body.name;
	this.account.age = request.body.age;
	this.account.passowrd = request.body.passowrd;
	response.redirect('/account');
}

module.exports = mongoose.model('account', accountSchema);