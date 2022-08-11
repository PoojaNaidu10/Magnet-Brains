const ProductModel = require("../Models/ProductModel")

const CreateProduct = async function (req, res){
 let requestBody = req.body

 let {Name, Quantity, Amount} = requestBody

 let Product = await ProductModel.create(requestBody)
 return res.status(201).send({status:true, msg:"Product Created sucessfully", data:Product}) 
}



module.exports.CreateProduct = CreateProduct