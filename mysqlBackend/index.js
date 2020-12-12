//const ExceptionDebugger = require('debug')("app:ExceptionDebug");

const express = require("express");
const app = express();

console.log('hi');
require("./startup/logging")();

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