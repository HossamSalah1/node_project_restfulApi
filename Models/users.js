const mongoose=require('mongoose')

const userScima=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trum:true
    },
    email:{
        type:String,
        required:true,
        trum:true
    }
})

const userModel= mongoose.model('users',userScima)

module.exports=userModel