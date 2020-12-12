const Joi = require('joi');


//[Id], [UserName], [UserPassword], [FirstName], [LastName], [CreatedDate], [ModifiedDate], [Active]
const schema = Joi.object({
    

        UserName: Joi.string()
        .max(150).required(),

        UserPassword: Joi.string()
        .max(200).required()

})

// { 
//     BillID:0, BillTitle:'123', BillDesc:"123", BillDate:'2020-11-21 05:54:24.423', PersonID:2, CreatedDate:'2020-11-21 05:54:24.423', ModifiedDate:'2020-11-21 05:54:24.423', Active:true
                
//              }

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