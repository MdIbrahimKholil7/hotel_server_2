const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
const roomsApi=require('./api/roomsApi.js')
const userApi=require('./api/userApi.js')
const reviewApi=require('./api/reviewApi')
require('dotenv').config()

// middleware 
app.use(cors())
app.use(express.json())

// connecting mongodb 
const run = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.cibnc.mongodb.net/Hotel_Server?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ).then(()=>{
            console.log('connection success')
        })
    } catch (error) {
        console.log(error)
    }

}

run()

// set api 
app.use('/getRoom',roomsApi)
app.use('/user',userApi)
app.use('/review',reviewApi)

app.get('/', async (req, res) => {
    res.send('Server running')
})

// listening server 
app.listen(port, () => {
    console.log('Server running on', port)
})
