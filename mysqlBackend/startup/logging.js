const winston = require('winston');
//require("../log/")

module.exports=function () {
  // process.on('uncaughtException',(ex)=>{
  //   //throw new Error(ex);
  // });
    winston.configure({
        transports: [
          new winston.transports.Console(),
          new winston.transports.File({ filename: '../log/combined.log' })
        ],
        exceptionHandlers: [
            new winston.transports.File({ filename: '../log/exceptions.log' })
          ],
          rejectionHandlers: [
            new winston.transports.File({ filename: '../log/rejections.log' })
          ]
      });
    
}