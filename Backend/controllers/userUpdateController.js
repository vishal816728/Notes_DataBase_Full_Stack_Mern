const userModel=require("../models/userModel")
async function userUpdateController(req,res){
    const id=req.params.id
    const user=await userModel.findById({_id:id})
    try{
    if(user){
        user.name=req.body.name || user.name
        user.email=req.body.email || user.email
        user.pic=req.body.pic || user.pic

        const newUpdatedUser=await user.save()
        res.send(newUpdatedUser)
    }else{
        res.status(400).json({"message":"user does not exist"})
    }
    
    }catch(err){
            res.status(400).json({"message":"something bad occurs"})
    }
}

module.exports=userUpdateController