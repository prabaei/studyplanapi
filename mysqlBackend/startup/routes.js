const express = require("express");
const morgan = require('morgan');


const error = require("../middleWare/error");

//const billMaster = require("../routes/BillMaster");
const userAuth = require("../routes/UserAuth");
const auth = require("../routes/Auth");
const myThesaurus = require("../routes/MyThesaurus");

module.exports=function(app){
    app.use(express.json());
    app.use(morgan('tiny'));
    //app.use("/api/billmaster",billMaster);
    app.use("/api/userauth",userAuth);
    app.use("/api/auth",auth);
    app.use("/api/mythesaurus",myThesaurus);
    app.use(error);
}