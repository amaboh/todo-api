const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todoapiDB", {
            useNewUrlParser: true
        })

        console.log(`MongoDb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB