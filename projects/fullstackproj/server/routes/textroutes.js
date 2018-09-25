const express = require('express')
const reqRouter = express.Router()
const Encrypted = require('../models/encrypted')

reqRouter.route('/')
    .get((req, res) => {
        Encrypted.find((err, text) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(text)
        })
    })
    .post((req, res) => {
        const newEncrypted = new Encrypted(req.body)
        newEncrypted.save((err, savedText) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(savedText)
        })
    }) 

reqRouter.route('/:id')
    .get((req, res) => {
        Encrypted.findOne({ _id: req.params.id }, (err, foundText) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundText)
        })
    })
    .put((req, res) => {
        Encrypted.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true }, (err, updatedText) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(updatedText)
        })
    })
    .delete((req, res) => {
        Encrypted.findOneAndRemove({ _id: req.params.id }, (err, deletedText) => {
            if (err) return res.status(500).send(err)
            return res.status(202).send({ deletedText: deletedText, message: 'Encrypted text successfully deleted' })
        })
    })

    module.exports = reqRouter
