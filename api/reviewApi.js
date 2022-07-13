const express = require('express');
const { postReview, getReview, updateReview } = require('../controllers/reviewController');
const router=express.Router()
// put review 
router.put('/put-review',postReview)
// get review 
router.get('/get-review',getReview)
// update review 
router.patch('/update-review',updateReview)
module.exports=router
