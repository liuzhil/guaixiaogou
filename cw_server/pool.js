const mysql = require('mysql');
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'tgw',
  connectionLimit: 10 
});
//把创建好的连接池导出
module.exports = pool;
