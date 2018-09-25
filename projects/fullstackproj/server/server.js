const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(morgan('dev'))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/encryptme', { useNewUrlParser: true }, () => {
    console.log('Database is working')
}).catch(err => {console.log(err)})

app.use('/encrypted', require('./routes/textroutes'))

app.listen(4001, () => {
    console.log("Server is up and running")
})