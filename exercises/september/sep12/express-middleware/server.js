const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const testRoutes = require('./routes/test')

app.use(bodyParser.json())



app.use((req, res, next) => {
    console.log('I am Middleware # 1')
    next()
})


// app.use('/path', (req, res, next) => {
//     // user's request                - req
//     // send a response               - res
//     // call the next middleware      - next
                // Must call next() or res.send()
// })

app.use('/test', testRoutes)



app.post('/test', (req, res) => {
    res.send('Heeeey')
})



app.listen(5000, ()=> {
    console.log(`Server is running on PORT 5000`)
})