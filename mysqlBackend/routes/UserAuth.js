const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');

const UserAuthModel = require("../models/UserAuth");
const UserAuthDataAccess = require("../data/access/UserAuth");


const asyncMiddleWare = require("../middleWare/asyncMiddleware");


router.post("/", asyncMiddleWare(async(req,res)=>{
    
 
      var mm= await UserAuthModel.validateAsync(req.body);
      if(!mm.valid){
        return res.status(400).send(mm.err);
      }
      var user=await UserAuthDataAccess.CheckUserName(req.body);
//console.log(user[0].length);
      //return; 
      //console.log(user); 
      if(user[0].length==1){
        return res.status(500).send("UserName Already Exist");
      }
      var UserAuthObj = req.body;
      const salt=  await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(UserAuthObj.UserPassword,salt);
      UserAuthObj.UserPassword=hashedPass;
       var result=  await UserAuthDataAccess.Create(UserAuthObj);
       //console.log(result[0][0]);
       if(result[0].length==1){
         res.status(200).send(_.pick(result[0][0],["Id",'UserName',"FirstName","LastName"]));
       }
  
    //res.status(200).send(req.params);
}));

router.get("/:id",asyncMiddleWare((req,res)=>{

    res.status(200).send(req.params);
}));
router.put("/:id",asyncMiddleWare((req,res)=>{

    res.status(200).send(req.params);
})); 
router.delete("/:id",asyncMiddleWare((req,res)=>{

    res.status(200).send(req.params);
}));

module.exports = router;