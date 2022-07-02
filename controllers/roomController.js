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
    } catch (err) {
        console.log(err)
    }
}

// get search room 
exports.getSearchRoom = async (req, res) => {
    const room = req.query.room
    try {
        const result = await Room.find({ city: room })
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}
// update room 
exports.updateRoom = async (req, res) => {
    try {
        const result = await Room.updateMany({ roomType: /room/i }, { $set: { ratings: 5 } }, { upsert: true, setDefaultsOnInsert: true })
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}
// post room 
exports.postRoom = async (req, res) => {
    const room = new Room(req.body)
    const result = await room.save()
}
