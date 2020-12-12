const Joi = require('joi');

//[BillID], [BillTitle], [BillDesc], [BillDate], [PersonID], [CreatedDate], [ModifiedDate], [Active]

const schema = Joi.object({
    BillID: Joi.number()
        .required(),

        BillTitle: Joi.string()
        .max(300),

        BillDesc: Joi.string()
        .max(500),

        BillDate:Joi.date(),

        PersonID: Joi.number()
        .integer().required(),

        CreatedDate: Joi.date(),
        ModifiedDate :Joi.date(),
        
Active:Joi.bool()
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