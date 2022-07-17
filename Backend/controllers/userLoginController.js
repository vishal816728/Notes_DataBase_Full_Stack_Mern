const bcrypt=require('bcrypt')
const userModel=require("../models/userModel")
const generateToken = require('../utils/jwt')

async function userLogin(req,res){
           const user=await userModel.findOne({email:req.body.email})
           if(user && await bcrypt.compareSync(req.body.password,user.password)){
               res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                pic:user.pic,
                isAdmin:user.isAdmin,
                token:generateToken(user)
               })
               return
           }
}


module.exports=userLogin