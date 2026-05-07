const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-app',
  password: 'Rishav@256',
});

module.exports = pool.promise();
