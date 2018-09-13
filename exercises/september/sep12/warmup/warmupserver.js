const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(bodyParser.json())

const crap = [
    {
        title: "Hello World",
        id: 1234
    },
    {
        title: "Poop",
        id: 5678
    }
]

server.get('/craps', (req, res) => {
    res.send(crap)
})

server.listen(4000, () => {
    console.log("It's working, IT'S WORKING! - 'Pre-cool' Anakin")
})

