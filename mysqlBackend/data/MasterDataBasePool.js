//const { getPool } = require("./connectionPool");
const conn = require("./connectionPool");



module.exports=function GetPool() {

   let pool= conn;
//    if(pool==undefined)
// return conn.createPool({
//     user: 'praba',
//     password: 'Praba@5000',
//     server: 'localhost',
//     database: 'jf',
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     }
    
// },"main");
// else
return pool;
//conn.getPool("main");
    
}

//module.exports=GetPool;