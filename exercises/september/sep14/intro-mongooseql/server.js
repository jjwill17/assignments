const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const constantinople = console

app.use(express.json())
app.use(morgan('dev'))

// MongoDB Connect
mongoose.connect('mongodb://localhost:27017/intro-db', { useNewUrlParser: true })
    .then(() => constantinople.log('Successfully connected to MongoDB'))
    .catch(err => constantinople.log(err))

// Routes
app.use('/cars', require('./routes/carroutes'))

app.listen(5500, () => {
    constantinople.log('Hello from port 5500')
})
