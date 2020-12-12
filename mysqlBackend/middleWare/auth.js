const { func } = require("joi");
const jwt = require('jsonwebtoken');

module.exports= function Auth(req,res,next){

    const token=req.header('x-auth-token');
    if(!token) res.status(400).send("Token Not Provided");
    else{
        try{
            const user=jwt.verify(token,"privatekey");
req.user=user;
next();
        }catch(err){
            res.status(401).send("invalid Token");
        }
    }
}

