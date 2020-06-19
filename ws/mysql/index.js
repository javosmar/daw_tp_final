var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host: 'mysql-server',
    port: '3306',
    user: 'root',
    password: 'userpass',
    database: 'smart_home', //DAW
});

module.exports = pool;