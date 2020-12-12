
const sp = require("./storedProcedure");
//const sql = require('mssql')
const db = require("../MasterDataBasePool")();


//[Id], [UserName], [UserPassword], [FirstName], [LastName], [CreatedDate], [ModifiedDate], [Active]


 async function Create(param){

     
     return new Promise((resolve,reject)=>{
        db.getConnection(function(err, connection) {
            if (err) reject(err); // not connected!
     
      // Use the connection
        connection.query(`CALL ${sp.UserAuthCreate}(1,'${param.UserName}','${param.UserPassword}','${param.FirstName}','${param.LastName}','na','na','na')`, function (error, results, fields) {
        // When done with the connection, release it.
        connection.release();
     
        // Handle error after the release.
        if (error){
    reject(error);
        }else{
            resolve(results);
        }
     
        // Don't use the connection here, it has been returned to the pool.
      });
        });
     });
   
    // const pool= await db().connect();
    // let request =  pool.request();
// request.input('Id', sql.Int, param.Id)
// request.input('UserName', sql.VarChar(150), param.UserName)
// request.input('UserPassword', sql.VarChar(500), param.UserPassword)
// request.input('FirstName', sql.VarChar(200), param.FirstName)
// request.input('LastName', sql.VarChar(200), param.LastName)
// request.input('CreatedDate', sql.DateTime, param.CreatedDate)
// request.input('ModifiedDate', sql.DateTime, param.ModifiedDate)
// request.input('Active', sql.Bit, param.Active)

// return request.execute(sp.UserAuthCreate);
}

async function Single(param){
    

    return new Promise((resolve,reject)=>{
        db.getConnection(function(err, connection) {
            if (err) reject(err); // not connected!
     
      // Use the connection
        connection.query(`CALL ${sp.UserAuthSingle}(${param.Id})`, function (error, results, fields) {
        // When done with the connection, release it.
        connection.release();
     
        // Handle error after the release.
        if (error){
    reject(error);
        }else{
            resolve(results);
        }
     
        // Don't use the connection here, it has been returned to the pool.
      });
        });
     });


//     const pool= await db().connect();
//     let request =  pool.request();
// request.input('Id', sql.Int, param.Id)

// return request.execute(sp.UserAuthSingle);
}


async function CheckUserName(param){
    //console.log(db);
    //console.log(param);
    return new Promise((resolve,reject)=>{
        db.getConnection(function(err, connection) {
            if (err) {reject(err)}; // not connected!
     
      // Use the connection
      //console.log(`CALL ${sp.UserAuthCheckUserName}('${param.UserName}')`);
        connection.query(`CALL ${sp.UserAuthCheckUserName}('${param.UserName}')`, function (error, results, fields) {
        // When done with the connection, release it.
        connection.release();
     
        // Handle error after the release.
        if (error){
            //console.log(error)
    reject(error);
        }else{
            //console.log(results);
            resolve(results);
        }
     
        // Don't use the connection here, it has been returned to the pool.
      });
        });
     });

//     const pool= await db().connect();
//     let request =  pool.request();
// //request.input('Id', sql.Int, param.Id)
// request.input('UserName', sql.VarChar(150), param.UserName)
// request.input('UserPassword', sql.VarChar(500), param.UserPassword)
// request.input('FirstName', sql.VarChar(200), param.FirstName)
// request.input('LastName', sql.VarChar(200), param.LastName)
// request.input('CreatedDate', sql.DateTime, param.CreatedDate)
// request.input('ModifiedDate', sql.DateTime, param.ModifiedDate)
// request.input('Active', sql.Bit, param.Active)

// return request.execute(sp.UserAuthCheckUserName);
}


module.exports.Create=Create;
module.exports.Single=Single;
module.exports.CheckUserName=CheckUserName;