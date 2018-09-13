const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5555
const veggieRouter = require('./veggieRouter')
const fruitRouter = require('./fruitRouter')


app.use(bodyParser.json())

app.use('/veggie', veggieRouter)
app.use('/fruit', fruitRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})