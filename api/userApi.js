const express = require('express');
const { userDataPut, getUserData, paymentGateway, userBookedRoom, updateUserData } = require('../controllers/userController');
const { verifyJwt } = require('../jwtToken/jwtToken');
const router=express.Router()


// get user data 
router.get('/user-data',getUserData)
// put user data 
router.put('/user-token',userDataPut)
//post data for payment gateway 
router.post('/payment',verifyJwt,paymentGateway)
//post room booked data 
router.post('/user-roomBooked',userBookedRoom)
// update user data 
router.put(`/put-userInformation`,updateUserData)
module.exports=router
