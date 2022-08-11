const UserModel = require("../Models/UserModel")
const jwt = require("jsonwebtoken")
//const bcrypt = require("bcrypt")


const CreateUser = async function(req, res){
 
    let requestBody = req.body
    let {fname,lname,email,password,phone,address} = requestBody

    let User = await UserModel.create(requestBody)
    return res.status(201).send({status:true, msg:"User Created", data:User})
}

const UserLogin = async function(req, res){

     let data = req.body
     let {email, password} = data
   //console.log(data)
   const User = await UserModel.findOne({ email, password });
   
  //  console.log(User)
   
     const token = jwt.sign({
        userId : User._id
     },"secret-key", {expiresIn:"30m"})
     res.setHeader("x-api-key",token)

     res.status(200).send({status:true, msg:"User Login Sucessfully", data:token})
}


const UserUpdate = async function(req, res){
    let data = req.body
    let UserId = req.params.UserId
    // console.log(UserId)
    let {fname,lname,email,password,phone,address} = data

    let UserUpdate = await UserModel.findOneAndUpdate({_id:UserId}, data, {new:true})
    res.status(200).send({status:true, msg:"User Updated Sucessfully", data:UserUpdate})

}

module.exports.CreateUser = CreateUser
module.exports.UserLogin=UserLogin
module.exports.UserUpdate=UserUpdate