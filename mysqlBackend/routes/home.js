const express = require('express');
const router = express.Router();


const AuthMiddleWare = require("../middleWare/auth");
const asyncMiddleWare = require("../middleWare/asyncMiddleware");


router.get("/",asyncMiddleWare((req,res)=>{
    res.status(200).send("u reached me");
}));
router.post("/", AuthMiddleWare,asyncMiddleWare(async(req,res)=>{
   
    res.status(200).send(req.params);
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