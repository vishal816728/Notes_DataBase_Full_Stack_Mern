const userModel=require('../models/userModel')
const bcrypt=require("bcrypt")
const generateToken = require('../utils/jwt')

async function userRegistration(req,res){
    const {name,email,password,pic}=req.body
    if(name && email && password){
         const emailcheck=await userModel.findOne({email})
         if(emailcheck){
             res.status(404).json({
                 "message":"user with this email id already exist"
             })
         }
         if(!emailcheck){
             const newUser=new userModel({
                 name,
                 email,
                 password:bcrypt.hashSync(password,10),
                 pic,
                })
                
                const user=await newUser.save()
                res.status(201).json({
                    name,
                    email,
                    token:generateToken(user)
             })
         }
    }
}

module.exports=userRegistration