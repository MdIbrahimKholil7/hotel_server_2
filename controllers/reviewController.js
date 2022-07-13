const mongoose = require('mongoose');
const orderSchema = require('../model/reviewSchema')
const Review = new mongoose.model('review', orderSchema)

exports.postReview = async (req, res) => {
    try {
        const body = req.body
        const review = new Review(body)
        const result = await review.save()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}
exports.getReview = async (req, res) => {
    try {
        const result = await Review.find({})
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

// update review 
exports.updateReview = async (req, res) => {
    try {
        const id = req.body.id
        console.log(id)
        const result = await Review.findOneAndUpdate({ _id: id }, { $set: { accepted: true } }, { upsert: true, setDefaultsOnInsert: true })
        res.send(result)

    } catch (error) {
        console.log(error)
    }
}