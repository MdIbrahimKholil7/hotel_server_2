const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: {
        require: true,
        type: String
    },
    admin: Boolean,
    img: String,
    transactionId: String,
    roomBook: Boolean,
    phone: Number,
    profession: String,
    address: String,
    active: String,
    name: String,
    roomType: String,
    admin: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = userSchema