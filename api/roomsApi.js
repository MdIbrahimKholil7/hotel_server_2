const express = require('express');
const { getAllRoom, postRoom, getSearchRoom, updateRoom, getSingleRoom, getRoomCount, getRoomByPagination, getBookRoom, getAllRooms, getAllRoomCount, getBookedRoomCount } = require('../controllers/roomController');
const { verifyJwt } = require('../jwtToken/jwtToken');
const router=express.Router()

// get home room 
router.get('/',getAllRoom)
router.get('/all-rooms',getAllRooms)
// get room by id 
router.get('/room/:id',getSingleRoom)
// get room count 
router.get('/getRoomCount',getRoomCount)
// get all room  
router.get('/getRoomByPagination',getRoomByPagination)
// get search room 
router.get('/room',verifyJwt,getSearchRoom)
router.put('/room',updateRoom)
router.post('/post-room',postRoom)

// get search room 
router.get('/book-room',getBookRoom)

// get room count 
router.get('/allRoom-count',getAllRoomCount)
// get booked room count 
router.get('/booked-room-count',getBookedRoomCount)
module.exports=router