const express = require('express');
const { getAllRoom, postRoom, getSearchRoom, updateRoom, getSingleRoom, getRoomCount, getRoomByPagination, getBookRoom } = require('../controllers/roomController');
const { verifyJwt } = require('../jwtToken/jwtToken');
const router=express.Router()

// get home room 
router.get('/',getAllRoom)
// get room by id 
router.get('/room/:id',getSingleRoom)
// get room count 
router.get('/getRoomCount',getRoomCount)
// get all room  
router.get('/getRoomByPagination',getRoomByPagination)
// get search room 
router.get('/room',verifyJwt,getSearchRoom)
router.put('/room',updateRoom)
router.post('/',postRoom)

// get search room 
router.get('/book-room',getBookRoom)

module.exports=router