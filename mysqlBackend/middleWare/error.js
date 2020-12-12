const winston = require('winston');

module.exports= function(err,req,res,next){
   // console.log(err);
    winston.error(err.stack);
    res.status(500).send(err.message);
    //throw err;
   // next();
}