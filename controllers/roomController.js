const mongoose = require('mongoose');
const roomSchema = require('../model/roomSchema')
const Room = new mongoose.model('room', roomSchema)

// get all home room 
exports.getAllRoom = async (req, res) => {
    try {
        const result = await Room.find({}).limit(6)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}

// get room by id 
exports.getSingleRoom = async (req, res) => {
    console.log()
    try {
        const result = await Room.findById({_id:req.params.id})
        res.send(result)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

// get search room 
exports.getSearchRoom = async (req, res) => {
    const room = req.query.room
    console.log(room)
    try {
        const result = await Room.find({ city: room })
        console.log(result)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}
// update room 
exports.updateRoom = async (req, res) => {
    try {
        const result = await Room.updateMany({ roomType: /room/i }, { $set: { ratings: 5 } }, { upsert: true, setDefaultsOnInsert: true })
        console.log(result)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}
// post room 
exports.postRoom = async (req, res) => {
    console.log('from body', req.body)
    const room = new Room(req.body)
    const result = await room.save()
    console.log(result)
}
