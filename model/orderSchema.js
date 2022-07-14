const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    transactionId: String,
    email: String,
    paid: Boolean,
    roomType: String,
    name: String,
    img: String,
    pending:Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = orderSchema

