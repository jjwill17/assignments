const express = require('express')
const carRouter = express.Router()
const Cars = require('../models/car')

carRouter.get('/', (req, res) => {
    Cars.find((err, allTheCars) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(allTheCars)
    }
)})

carRouter.get('/:id', (req, res) => {
    Cars.findById(req.params.id, (err, foundCar) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(foundCar)
    })
})

carRouter.post('/', (req, res) => {
    const newCar = new Cars(req.body)
    newCar.save((err, newSavedCar) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send({newSavedCar: newSavedCar, msg: "Car successfully posted"})
    })
})

carRouter.put('/:id', (req, res) => {
    Cars.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body,
        {new: true, runValidators: true},
        (err, updatedCar) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(updatedCar)
        })
})

carRouter.delete('/:id', (res, req) => {
    Cars.findOneAndRemove(
        { _id: req.params.id },
        (err, deletedCar) => {
            if(err) return res.status(500).send(err)
            return res.status(204).send({ msg: "Car successfully deleted", deletedCar })
        })
})

module.exports = carRouter