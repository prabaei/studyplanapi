const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');

const AuthModel = require("../models/Auth");
const UserAuthModel = require("../models/UserAuth");
const UserAuthDataAccess = require("../data/access/UserAuth");


const AuthMiddleWare = require("../middleWare/auth");
const asyncMiddleWare = require("../middleWare/asyncMiddleware");


router.post("/", asyncMiddleWare(async(req,res)=>{
      var mm= await AuthModel.validateAsync(req.body);
      if(!mm.valid){
        return res.status(400).send(mm.err);
      }
      var user=await UserAuthDataAccess.CheckUserName(req.body);
      if(user[0].length!=1){
        return res.status(401).send("User Name or Passord is incorrect");
      }
      var UserAuthObj = req.body;
      console.log(user[0][0].UserPassword);
      const validUser=  await bcrypt.compare(UserAuthObj.UserPassword,user[0][0].UserPassword);
      if(validUser){
        const token= await UserAuthModel.GenerateTokenAsync(user[0][0]);
        res.header('x-auth-token',token).status(200).send({"jh0":"mni"});
      }else{
        res.status(401).send("User Name or Passord is incorrect");
      }
}));

router.get("/me",AuthMiddleWare,asyncMiddleWare((req,res)=>{
    res.status(200).send(req.user);
}));
router.put("/:id",asyncMiddleWare((req,res)=>{

    res.status(200).send(req.params);
})); 
router.delete("/:id",asyncMiddleWare((req,res)=>{

    res.status(200).send(req.params);
}));

module.exports = router;