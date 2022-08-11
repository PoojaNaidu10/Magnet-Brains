const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const OrderSchema = new mongoose.Schema({
    
    UserId:{
        type:ObjectId,
        ref:"User",
        require:true
    },
    Price:{
         type:String,
         require:true
    },
    Quantity:{
         type:String,
         require:true
    },
    ProductId:{
        type:ObjectId,
        ref:"Product",
        require:true,
    },
    TotalPrice:{
        type:String,
        require:true
    },
    TotalQuantity:{
        type:String,
        require:true
    }

},{timestamps:true})

module.exports= mongoose.model('Order',OrderSchema)