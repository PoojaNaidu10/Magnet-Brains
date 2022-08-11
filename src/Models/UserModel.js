const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({

    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports=mongoose.model('User',UserSchema)