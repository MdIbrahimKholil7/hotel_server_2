const mongoose = require('mongoose');
const rate=4
const roomSchema = mongoose.Schema({
    city: {
        require: true,
        type: String
    },
    price: {
        require: true,
        type: Number
    },
    roomType: {
        require: true,
        type: String
    },
    desc: {
        require: true,
        type: String
    },
    img: {
        require: true,
        type: String
    },
    ratings:Number,
   date:{
    type:Date,
    default:Date.now()
   }
}
)



module.exports=roomSchema
