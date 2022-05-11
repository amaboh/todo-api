const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db')


const app = express()

connectDB()
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send("HELLO WORLD")
})

app.listen(PORT,
    console.log(`server running ON PORT ${PORT} `));