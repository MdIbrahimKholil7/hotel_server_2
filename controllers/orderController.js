const mongoose = require('mongoose');
const orderSchema = require('../model/orderSchema')
const Order = new mongoose.model('order', orderSchema)

exports.getOrder = async (req, res) => {
    try {
        const result = await Order.find({})
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteOrder = async (req, res) => {
    try{
        const id=req.body.id
        console.log(id)
        const result=await Order.findOneAndDelete({_id:id})
        console.log(result)
        res.send(result)
    }catch(error){
        console.log(error)
    }
}