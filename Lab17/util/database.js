const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'tc2005b',
    password: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
});

module.exports = pool.promise();