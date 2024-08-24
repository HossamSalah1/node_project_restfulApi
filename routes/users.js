const express=require('express')
const router=express.Router()
const { create }=require('../Controller/usersController')

router.post("/",create)

module.exports=router