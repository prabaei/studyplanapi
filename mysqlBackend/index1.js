const ExceptionDebugger = require('debug')("app:ExceptionDebug");

const express = require("express");
const config = require("config");
const morgan = require('morgan');
const BillMasterValidate = require('./models/billMaster');
const conn = require('./data/MasterDataBasePool');
const da = require('./data/access/BillMaster');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.use((req,res,next)=>{
    console.log("logging...");
    next();
});
ExceptionDebugger("this is from Debugger");
console.log(app.get('env'));
console.log(process.env.NODE_ENV);
console.log(config.get("DataBase"));
console.log(Date.now());
BillMasterValidate({ 
    BillID:0, BillTitle:'123', BillDesc:"123", BillDate:'2020-11-21 05:54:24.423', PersonID:2, CreatedDate:'2020-02-02', ModifiedDate:'2020-02-02', Active:true
                
             }).then(()=>{console.log("valid")}).catch((err)=>{console.log(err)});
const dd=conn();


    da.Create({ 
        BillID:0, BillTitle:'123', BillDesc:"123", BillDate:'2020-11-21 05:54:24.423', PersonID:2, CreatedDate:'2020-02-02', ModifiedDate:'2020-02-02', Active:true
                    
                 }).then(result=>console.log(result)).catch(err=>console.log(err));



// dd.connect().then((pool)=>{
//   var request=  pool.request();
//   request.query('select 1 as number').then(result=>console.log(result)).catch(err=>console.log(err));
// }).catch((err)=>{console.log(err);});
app.get("/getmy/:id/:year/:day",(req,res)=>{

    res.status(200).send(req.params);
});

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`listening port ${port}`);
});