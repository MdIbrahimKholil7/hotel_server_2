const express = require('express');
const { userDataPut, getUserData, paymentGateway } = require('../controllers/userController');
const { verifyJwt } = require('../jwtToken/jwtToken');
const router=express.Router()


// get user data 
router.get('/user-data',getUserData)
// put user data 
router.put('/user-token',userDataPut)
//post data for payment gateway 
router.post('/payment',verifyJwt,paymentGateway)
module.exports=router
