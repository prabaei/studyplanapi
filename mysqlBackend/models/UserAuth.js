const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

//[Id], [UserName], [UserPassword], [FirstName], [LastName], [CreatedDate], [ModifiedDate], [Active]
const schema = Joi.object({
    Id: Joi.number()
        .required(),

        UserName: Joi.string()
        .max(150),

        UserPassword: Joi.string()
        .max(500),

        FirstName:Joi.string()
        .max(200),

        LastName: Joi.string()
        .max(200),

        CreatedDate: Joi.date(),
        ModifiedDate :Joi.date(),
        Active:Joi.bool()
})

// { 
//     BillID:0, BillTitle:'123', BillDesc:"123", BillDate:'2020-11-21 05:54:24.423', PersonID:2, CreatedDate:'2020-11-21 05:54:24.423', ModifiedDate:'2020-11-21 05:54:24.423', Active:true
                
//              }

async function GenerateTokenAsync(model) {
    
    return jwt.sign(_.pick(model,["Id",'UserName',"FirstName","LastName"]),"privatekey");
 //return token;

}
async function validateAsync(model) {
    
        return new Promise(async(resolve,reject)=>{
try{
   await schema.validateAsync(model);
   resolve({valid:true});
}catch(err){
    resolve({valid:false,err:err.details});
}

        });

}
 
module.exports.validateAsync = validateAsync;
module.exports.GenerateTokenAsync = GenerateTokenAsync;