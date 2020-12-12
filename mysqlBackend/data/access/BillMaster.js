
// const sp = require("./storedProcedure");
// const sql = require('mssql')
// const db = require("../MasterDataBasePool");




//  async function Create(param){
// const pool= await db().connect();
// let request =  pool.request();
// request.input('BillID', sql.Int, param.BillID)
// request.input('BillTitle', sql.VarChar(300), param.BillTitle)
// request.input('BillDesc', sql.VarChar(500), param.BillDesc)
// request.input('BillDate', sql.DateTime, param.BillDate)
// request.input('PersonID', sql.Int, param.PersonID)
// request.input('CreatedDate', sql.DateTime, param.CreatedDate)
// request.input('ModifiedDate', sql.DateTime, param.ModifiedDate)
// request.input('Active', sql.Bit, param.Active)
// //request.output('output_parameter', sql.Int)
// // request.execute(sp.BillMasterCreate, (err, result) => {
// //     // ... error checks
// //  console.log(result);
// //     // console.log(result.recordsets.length) // count of recordsets returned by the procedure
// //     // console.log(result.recordsets[0].length) // count of rows contained in first recordset
// //     // console.log(result.recordset) // first recordset from result.recordsets
// //     // console.log(result.returnValue) // procedure return value
// //     // console.log(result.output) // key/value collection of output values
// //     // console.log(result.rowsAffected) // array of numbers, each number represents the number of rows affected by executed statemens
 
// //     // ...
// // })
// return request.execute(sp.BillMasterCreate);
// }

// module.exports.Create=Create;