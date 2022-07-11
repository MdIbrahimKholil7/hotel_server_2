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
