const express = require('express')
const bobaServer = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

bobaServer.use(bodyParser.json())
bobaServer.use(morgan('dev'))

bobaServer.use('/bounties', require('./routes/bountyroutes'))

bobaServer.listen(4001, () => {
    console.log("He's no good to me dead on any server other than 4001")
})