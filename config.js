/**
 * config.js
 */

var path = require('path');

var config = {

	// debug为true时，用于本地调试
	debug: true,

	// 服务启动地址或域名
	host: 'localhost',

	// 程序运行的端口
	port: 3000,

	// mongodb配置
	db: 'mongodb://localhost:27017/myblog',

}

module.exports = config;