const mongoose = require('mongoose');
const orderSchema=mongoose.Schema({
    transactionId:String,
    email:String,
    paid:Boolean,
    roomType:String,
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports=orderSchema

