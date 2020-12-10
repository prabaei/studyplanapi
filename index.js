var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '34.66.185.168',
  user     : 'praba',
  password : '123456',
  database : 'StudyPlan'
});
 
connection.connect();
 
connection.query(`insert into MyDictionary(Word,Meaning,TamilEquivalent) values('Product-1','example','wow');`,
 function (error, results, fields) {
  console.log(results);
  console.log(fields);

  if (error) throw error;
  console.log('The solution is: done');
});
 
connection.end();