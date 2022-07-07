const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: {
        require: true,
        type: String
    },
    admin: Boolean,
    userImg:String,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = userSchema