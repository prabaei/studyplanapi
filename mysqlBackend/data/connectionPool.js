
const mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'mystudy.cddmjc5rfm1o.us-west-2.rds.amazonaws.com',
  user     : 'admin',
  password : '12345678',
  database :'mystudyplan'
});
 

module.exports=pool;