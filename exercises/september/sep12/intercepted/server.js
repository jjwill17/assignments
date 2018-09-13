const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const firstRoute = require('./routes/first_route')

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log('Looking at firstRoute from /stuff directory, AKA Middleware #1')
    next()
})

app.use('/stuff', firstRoute)

app.post('/stuff', (req, res) => {
    res.send('First line after 2 middleware jobs')
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})