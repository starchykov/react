const mysql = require('mysql');
const keys = require('../config/keys');

const connection = mysql.createConnection(keys.db);
connection.connect((err) => console.log(err ? err : 'DB is connected'));

module.exports = connection;