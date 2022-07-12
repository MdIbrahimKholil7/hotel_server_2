const mongoose = require('mongoose');

const reviewSchema= mongoose.Schema({
    review:String,
    rating:Number,
    img:String,
    accepted:Boolean,
    name:String,
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports=reviewSchema