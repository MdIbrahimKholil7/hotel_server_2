const mongoose = require('mongoose');
const orderSchema=require('../model/orderSchema')
const Order=new mongoose('order',orderSchema)

exports.postOrder=async(req,res)=>{
    const body=req.body
    console.log(body)
}
