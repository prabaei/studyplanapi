const express = require('express');
const router = express.Router();

const BillMasterModel = require("../models/billMaster");
const BillMasterDataAccess = require("../data/access/BillMaster");

const AuthMiddleWare = require("../middleWare/auth");
const asyncMiddleWare = require("../middleWare/asyncMiddleware");

router.post("/", AuthMiddleWare,asyncMiddleWare(async(req,res)=>{
      var mm= await BillMasterModel.validateAsync(req.body);
      if(!mm.valid){
        return res.status(400).send(mm.err);
      }
       var result=  await BillMasterDataAccess.Create(req.body);
       if(result.recordsets.length==1){
         res.status(200).send(result.recordsets[0]);
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