const express = require('express')
const testRoutes = express()


testRoutes.get('/', (req, res) => {
    res.send('Hello World, I am the Server')
})


module.exports = testRoutes