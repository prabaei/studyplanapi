const express = require('express');
const router = express.Router();

const MyThesaurusModel = require("../models/MyThesaurus");
const MyThesaurusDataAccess = require("../data/access/MyThesaurus");

const AuthMiddleWare = require("../middleWare/auth");
const asyncMiddleWare = require("../middleWare/asyncMiddleware");

router.post("/", AuthMiddleWare,asyncMiddleWare(async(req,res)=>{
      var mm= await MyThesaurusModel.validateAsync(req.body);
      if(!mm.valid){
        return res.status(400).send(mm.err);
      }
       var result=  await MyThesaurusDataAccess.Create(req.body);
       if(result[0].length==1){
         res.status(200).send(result[0][0]);
       }
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