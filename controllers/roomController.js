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

// get room count 
exports.getRoomCount = async (req, res) => {

    try {
        const result = await Room.count()
        res.send({ result })
    } catch (err) {
        console.log(err)
    }
}
//get all room
exports.getRoomByPagination = async (req, res) => {
    try {
        const page = +req.query.page
        const size = +req.query.size
        const result = await Room.find().skip(page * size).limit(size)
        res.send(result)
    } catch (err) {
        console.log(err)
        res.send({ status: 503, message: 'Server crush' })
    }
}
// get room by id 
exports.getSingleRoom = async (req, res) => {
    console.log()
    try {
        const result = await Room.findById({ _id: req.params.id })
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}

// get search room 
exports.getSearchRoom = async (req, res) => {
    const room = req.query.room
    console.log(req.headers.authorization)
    try {
        const result = await Room.find({ city: room })
        res.status(200).send({
            result,
            message: 'Success'
        })
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
