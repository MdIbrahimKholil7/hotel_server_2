const express = require('express');
const { getOrder, deleteOrder } = require('../controllers/orderController');
const router=express.Router()

router.get('/all-order',getOrder)
router.delete('/delete-order',deleteOrder)
module.exports=router