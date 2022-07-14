const express = require('express');
const { userDataPut, getUserData, paymentGateway, userBookedRoom, updateUserData, getAllUser, updateUse, deleteUser, getAdmin, updateOne } = require('../controllers/userController');
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
// get all user 
router.get('/all-user',getAllUser)
// delete single user 
router.delete('/delete-user',deleteUser)
// get admin 
router.get('/get-admin',getAdmin)
router.get('/get-update',updateOne)
module.exports=router
