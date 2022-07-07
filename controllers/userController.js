const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const userSchema = require('../model/userSchema')
const User = mongoose.model('user', userSchema)
const stripe = require('stripe')(`sk_test_51L112oK2utpV7xig0jOmHp2eoSoktIhtmAJ1oCJtV3mM7yYI7w1e3NKQYKkPJqViX4Ihblcenmf1Aag3cye4Ln0o00AKqnzh4A`);

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

        const email = req.body.email
        const result = await User.findOneAndUpdate(email, { $set: { email } }, { upsert: true, setDefaultsOnInsert: true })
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


// post data for payment gateway 
exports.paymentGateway = async (req, res) => {
    try {
        const { amount:price } = req.body
        console.log(price)
        if (price) {
            const amount = price * 100
            const paymentIntent =await stripe.paymentIntents.create({
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
