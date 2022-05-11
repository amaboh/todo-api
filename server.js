const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const Task = require('./models/tasks.model')

const app = express()

connectDB()
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send("HELLO WORLD")
})

app.get('/getTasks', async (req, res) => {
    try {
        const response = await Task.find()
        res.json(response)
    } catch (err) {
        res.json({message: err})
    }
});


app.post("/postTask", async (req, res) => {
    try {
        const response = await Task.create(req.body);
        res.json(response)
    } catch (err) {
        res.json({message: err})
    }
});


app.delete("/deleteTask/:id", async (req, res) => {
    try {
        const response = await Task.remove({_id: req.params.id})
        res.json(response)
    } catch (error) {
        res.json({message: err})
    }
})

app.patch("/editTask/:id", async (req, res) => {
    try {
        const response = await Task.updateOne({_id: req.params.id},
             {$set: req.body});
             res.json(response)
    } catch (err) {
        res.json({message: err})
    }
})

app.listen(PORT,
    console.log(`server running ON PORT ${PORT} `));