const express = require('express');
const { userDataPut } = require('../controllers/userController');
const router=express.Router()

router.put('/user-token',userDataPut)

module.exports=router
