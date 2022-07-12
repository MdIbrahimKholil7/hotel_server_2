const express = require('express');
const { postReview, getReview } = require('../controllers/reviewController');
const router=express.Router()
// put review 
router.put('/put-review',postReview)
// get review 
router.get('/get-review',getReview)
module.exports=router
