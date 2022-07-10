const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: {
        require: true,
        type: String
    },
    admin: Boolean,
    userImg:String,
    transactionId:String,
    roomBook:Boolean,
    phone:Number,
    profession:String,
    address:String,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = userSchema