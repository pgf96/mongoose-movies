const mongoose = require('mongoose')

mongoose.set("strictQuery", false)

mongoose.connect('mongodb://127.0.0.1:27017/movies')

const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})