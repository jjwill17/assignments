const express = require('express')
const veggieRouter = express.Router()
const uuid = require('uuid')

const veggies = [
    {
        type: 'spinach',
        id: '1'
    },{
        type: 'carrot',
        id: '2'
    }
]

veggieRouter.route('/')
    .get((req, res) => {
        res.send(veggies)
    })
    .post((req, res) => {
        const newVeggie = req.body
        newVeggie.id = uuid()
        veggies.push(newVeggie)
        res.send(veggies)
    })

veggieRouter.route('/:id')
    .get((req, res) => {
        const foundVeggie = veggies.filter(item => item.id === req.params.id)
        console.log(typeof veggies[0].id)
        console.log(typeof req.params.id)
        res.send(foundVeggie)
    })
    .put((req, res) => {
        const changeVeggie = veggies.findIndex(item => item.id === req.params.id)
        veggies.splice(changeVeggie, 1, req.body)
        res.send(veggies)
    })
    .delete((req, res) => {
        const deleteVeggie = veggies.findIndex(veggie => veggie.id === req.params.id)
        veggies.splice(deleteVeggie, 1)
        res.send(veggies)
    })


module.exports = veggieRouter
