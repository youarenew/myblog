var mongoose = require('mongoose');

// Blog Schema
var articleSchema = new mongoose.Schema({
	title: {type: String, default: 'New blog',require: true},
	author: {type: String, default: 'zsj'},
	content: {type: String},
	meta: {
		createAt: {
			type: Date, default: Date.now(),
		},
		updateAt: {
			type: Date,
			default: Date.now(),
		}
	}
});


articleSchema.pre('save', function(next){
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	}else{
		this.meta.updateAt = Date.now()
	}
	next()
})

// articleSchema.statics = {
// 	fetch: function(cb) {
// 		return this.find({})
// 		.sort('meta.updateAt')
// 		exec(cb)
// 	},
// 	findByid: function(id, callback) {
// 		return this
// 		.findOne({_id: id})
// 		exec(cb)
// 	}
// }

module.exports = articleSchema;