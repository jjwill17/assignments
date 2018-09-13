const express = require('express')
const fruitRouter = express.Router()
const uuid = require('uuid')

const fruits = [
    {
        type: 'strawberry',
        id: '1'
    },{
        type: 'apple',
        id: '2'
    }
]

fruitRouter.route('/') 
    .get((req, res) => {
        res.send(fruits)
    })
    .post((req, res) => {
        const newFruit = req.body;
        newFruit.id = uuid()
        fruits.push(newFruit)
        res.send(fruits)
    })

fruitRouter.route('/:id') 
    .get((req, res) => {
        res.send(`request to specific fruit with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send('put request')
    })
    .delete((req, res) => {
        res.send('delete request')
    })

module.exports = fruitRouter