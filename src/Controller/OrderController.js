const OrderModel = require("../Models/OrderModel")
const ExtraModel = require('../Models/extra')
const CreateOrder = async function(req, res){

    let requestBody = req.body
    let {UserId,Price,Quantity,ProductId,TotalPrice,TotalQuantity} = requestBody

    let item =await ExtraModel.findOne({isDeleted:false});
    let obj = {}
   // obj.TotalPrice =Price * Quantity
    obj.totalSales = TotalPrice * TotalQuantity
    obj.topSelling = [ProductId]
    if(item==null){
        
        let createExtra = await ExtraModel.create(obj)
    }else{
        
    console.log(item)
    item.totalSales = TotalPrice * TotalQuantity;
    
    if(item.topSelling.length<5){
        item.topSelling.push(ProductId)
    }else{
        if(item.topSelling.length>5){
            item.topSelling.shift();
         item.topSelling.push(ProductId)
        }
    }
    item.save();
    }
    let Order = await OrderModel.create(requestBody)



    res.status(201).send({status:true, msg:"Order Placed sucessfully", data:Order})
}

module.exports.CreateOrder=CreateOrder