const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const userSchema = require('../model/userSchema')
const User = new mongoose.model('user', userSchema)
const roomSchema = require('../model/roomSchema')
const Room = new mongoose.model('room', roomSchema)
const orderSchema = require('../model/orderSchema')
const Order = new mongoose.model('order', orderSchema)

const stripe = require('stripe')
    (`sk_test_51L112oK2utpV7xig0jOmHp2eoSoktIhtmAJ1oCJtV3mM7yYI7w1e3NKQYKkPJqViX4Ihblcenmf1Aag3cye4Ln0o00AKqnzh4A`);

// get user data 
exports.getUserData = async (req, res) => {
    try {
        const result = await User.findOne({ email: req.query.email })
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}

// put user data 
exports.userDataPut = async (req, res) => {
    try {
        console.log(req.body)
        const email = req.body.email
        console.log(req.body)
        const show=await User.find({email})
        console.log(show)
        const result = await User.findOneAndUpdate({email}, { $set: { email,active:'Inactive',name:req.body.name } }, { upsert: true, setDefaultsOnInsert: true })
        console.log(result)
        const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
            expiresIn: '1d'
        })
        res.status(200).send({
            accessToken
        })

    } catch (error) {
        console.log(error)
    }
}

// post room booked 
exports.userBookedRoom = async (req, res) => {
    try {
        console.log(req.body)
        const details= req.body
        const {transactionId,roomDetails,email}=details
        const result1=await User.updateOne({email}, { $set: { transactionId: details?.transactionId,active:'Active' } }, { upsert: true, setDefaultsOnInsert: true })
        const result2=await Room.findByIdAndUpdate({_id:details?.roomDetails?._id},{$set:{booked:true,email}}, { upsert: true, setDefaultsOnInsert: true })
        const result3=await Order.updateOne({email},{$set:{transactionId,email,paid:true,roomType:roomDetails?.roomType}}, { upsert: true, setDefaultsOnInsert: true })

        console.log('result 1',result1)
        console.log('result 2',result2)
        console.log('result 3',result3)
        res.status(200).send(result1)

    } catch (error) {
        console.log(error)
    }
}

// post data for payment gateway 
exports.paymentGateway = async (req, res) => {
    try {
        const { amount: price } = req.body
        console.log(price)
        if (price) {
            const amount = price * 100
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'usd',
                payment_method_types: [
                    'card'
                ]
            })
            console.log(paymentIntent.client_secret)
            res.send({
                clientSecret: paymentIntent.client_secret
            })
        }
    } catch (error) {
        console.log(error)
    }
}


// update user data 
exports.updateUserData=async(req,res)=>{
    console.log(req.body)
    try{
        const {address,profession,phone,email,img,name}=req.body
        const result=await User.updateOne({email},{$set:{address,profession,phone,img,name}},{ upsert: true, setDefaultsOnInsert: true })
        res.send(result)
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

//all user 
exports.getAllUser=async(req,res)=>{
    try{
        const result=await User.find({})
        res.send(result)
    }catch(error){
        console.log(error)
    }
}

// delete single user 
exports.deleteUser=async(req,res)=>{
    try{
        const id=req.body.id
        const result=await User.deleteOne({_id:id})
        res.send(result)
        console.log(result)
    }catch(error){
        console.log(error)
    }
}