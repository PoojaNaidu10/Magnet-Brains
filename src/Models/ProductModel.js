const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({

    Name:{
        type:String,
        require:true
    },
    Quantity:{
         type:Number,
         require:true
    },
    Amount:{
         type:Number,
         require:true
    }
}, {timestamp:true})

module.exports = mongoose.model('Product', productSchema)