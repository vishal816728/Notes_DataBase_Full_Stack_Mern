const express=require('express')
const userRegistration = require('../controllers/userRegisterController')
const router=express.Router()
const asyncHandler=require('express-async-handler')
const userLogin=require('../controllers/userLoginController')
const userUpdateController=require('../controllers/userUpdateController')

router.post("/api/users/register",asyncHandler(userRegistration))
router.post("/api/user/login",userLogin)
router.put("/api/user/update/:id",userUpdateController)


module.exports=router