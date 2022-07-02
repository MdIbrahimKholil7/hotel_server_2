const express = require('express');
const { getAllRoom, postRoom, getSearchRoom, updateRoom, getSingleRoom } = require('../controllers/roomController');
const { verifyJwt } = require('../jwtToken/jwtToken');
const router=express.Router()

// get home room 
router.get('/',getAllRoom)
// get room by id 
router.get('/room/:id',getSingleRoom)
// get search room 
router.get('/room',verifyJwt,getSearchRoom)
router.put('/room',updateRoom)
router.post('/',postRoom)

module.exports=router