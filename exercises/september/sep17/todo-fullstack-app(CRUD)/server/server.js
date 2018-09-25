const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000
const todoRoutes = require('./routes/todoRoutes')

// Middlwares to be used on every request that comes into the server
app.use(morgan('dev'))
app.use(express.json())


// Connects to Mongodb on your local hard drive to save your db
mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true}, () => {
    console.log('Connected to the database')
}).catch(err => { console.log(err) })


// The first argument is the endpoint that triggers this middleware
// The second argument is what routes to use when the endpoint is 
// requested by a front end
app.use('/todos', todoRoutes)


app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
})

