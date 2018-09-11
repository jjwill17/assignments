const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// MIDDLEWARE
app.use(bodyParser.json())


const sockStore = [
    {
        type: 'poop',
        cost: 1
    },
    {
        type: 'cotton',
        cost: 10
    }
]



// GET ROUTE
// req means request, res means response
// '/' is the endpoint, always required as the first argument in a get request
app.get('/', (req, res) => {
    res.send('You Suck - This is the home page')
})

app.get('/socks', (req, res) => {
    res.send(sockStore)
})

// GET A SINGLE SOCK
app.get('/socks/:id', (req, res) => {
    const foundSock = sockStore.filter(sock => sock.id === req.params.id)
    res.send(foundSock[0])
})

// POST
app.post('/socks', (req, res) => {
    sockStore.push(req.body)
    res.send(sockStore)
})


// SERVER SETUP & PORT
app.listen(6002, ()=>{
    console.log('Yo your server is running on port 6002')
})

