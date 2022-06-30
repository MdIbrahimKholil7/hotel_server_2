const express = require('express');
const { getAllRoom, postRoom, getSearchRoom, updateRoom } = require('../controllers/roomController');
const router=express.Router()

// get home room 
router.get('/',getAllRoom)
// get search room 
router.get('/room',getSearchRoom)
router.put('/room',updateRoom)
router.post('/',postRoom)

module.exports=router