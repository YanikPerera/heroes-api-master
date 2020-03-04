const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/",async(req,res)=>{
//create user and save to db

let userToCreated =  new User({
username : req.body.username,
email : req.body.email,
password : req.body.password

});

await userToCreated.save();
return res.send({
username : userToCreated.username,
email : userToCreated.email

});

});



module.exports = router;
