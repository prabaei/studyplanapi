//const ExceptionDebugger = require('debug')("app:ExceptionDebug");

const express = require("express");
const cors = require("cors");
const app = express();

console.log('hi');
require("./startup/logging")();
app.use(cors({
    origin:"*",
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue:false,
    allowedHeaders:"Origin,Content-Type,x-auth-token,content-type",
    exposedHeaders:"x-auth-token,X-Auth-Token"
    //"Access-Control-Allow-Headers":"Origin, Content-Type, x-auth-token, content-type",
    //"Access-Control-Allow-Headers":"x-auth-token"
}));
require("./startup/routes")(app);



// app.use((req,res,next)=>{
//     console.log("logging...");
//     next();
// });
//ExceptionDebugger("this is from Debugger");
// console.log(app.get('env'));
// console.log(process.env.NODE_ENV);
// console.log(config.get("DataBase"));
//throw new Error("hh");

//Error Middleware function



const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`listening port ${port}`);
});