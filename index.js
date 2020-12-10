var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '34.66.185.168',
  user     : 'prabaei',
  password : '123456',
  database : 'StudyPlan'
});
 
connection.connect();
 
connection.query(`CREATE TABLE MyDictionary
(
   Id int NOT NULL AUTO_INCREMENT,
   Word nvarchar(200) not null,
   Meaning nvarchar(800) not null,
TamilEquivalent nvarchar(200) null
   PRIMARY KEY(Id)
);`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: done');
});
 
connection.end();