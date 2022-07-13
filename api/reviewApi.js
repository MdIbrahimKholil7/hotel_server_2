const express = require('express');
const { postReview, getReview, updateReview, deleteReview } = require('../controllers/reviewController');
const router=express.Router()
// put review 
router.put('/put-review',postReview)
// get review 
router.get('/get-review',getReview)
// update review 
router.patch('/update-review',updateReview)
// delete review 
router.delete('/delete-review',deleteReview)
module.exports=router
