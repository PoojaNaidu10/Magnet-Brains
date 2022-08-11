const mongoose = require("mongoose")
const ExtraSchema = new mongoose.Schema({

    topSelling: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    totalSales: Number,
    isDeleted:{
        type:Boolean,
        default:false
    }
}, {
    timestamp: true
})

module.exports = mongoose.model('Extra', ExtraSchema)