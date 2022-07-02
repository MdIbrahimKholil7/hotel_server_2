const mongoose = require('mongoose');
const jwt=require('jsonwebtoken')
const userSchema = require('../model/userSchema')
const User = mongoose.model('user', userSchema)

exports.userDataPut = async (req, res) => {
    try {

        const email = req.body.email
        const result=await User.findOneAndUpdate(email,{$set:{email}},{upsert:true,setDefaultsOnInsert:true})
        const accessToken = jwt.sign({email}, process.env.ACCESS_TOKEN,{
            expiresIn: '1d'
        })
        res.status(200).send({
            accessToken,
            result
        })
        console.log(result,accessToken)
    } catch (error) {
        console.log(error)
    }
}
