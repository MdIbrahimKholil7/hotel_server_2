const express = require('express');
const { postReview } = require('../controllers/reviewController');
const router=express.Router()

router.post('/put-review',postReview)
module.exports=router
