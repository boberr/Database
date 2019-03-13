var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'classmysql.engr.oregonstate.edu',
	user: 'cs290_boberr',
	password: '9068',
	database: 'cs290_boberr'
});

module.exports.pool = pool;

