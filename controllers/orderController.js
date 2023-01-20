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
    try {
        const id = req.body.id
        const result = await Order.findOneAndDelete({ _id: id })
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const { _id } = req.body
        const result = await Order.findOneAndUpdate({ _id }, { $set: { pending: true } }, { upsert: true, setDefaultsOnInsert: true })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

updateOrder = async (req, res) => {
    try {


        const a=req.params.id


        const { _id } = req.body
        const result = await Order.findOneAndUpdate({ _id }, { $set: { pending: true } }, { upsert: true, setDefaultsOnInsert: true })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}









