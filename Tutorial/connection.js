var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'himanshu',
    password : 'Pass@123',
    database : 'testdb'
});

connection.connect();

module.exports.connection = connection;

