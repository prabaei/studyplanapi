module.exports= function(handler) {
    return async(req,res,next)=>{
        try{
await handler(req,res);
        }catch(ex){
            //console.log("man");
            //throw new Error(ex);
            //res.status(500).send(ex);
            next(ex);
        }
    }
}