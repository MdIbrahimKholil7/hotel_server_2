const express = require('express');
const { getOrder, deleteOrder, updateOrder } = require('../controllers/orderController');
const router=express.Router()

router.get('/all-order',getOrder)
router.delete('/delete-order',deleteOrder)
router.patch('/update-order',updateOrder)
module.exports=router