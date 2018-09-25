const express = require('express')
const todoRouter = express.Router()
// Must reference mongoose Model to query for within the routes
const Todos = require('../models/todo')


todoRouter.route('/')
    .get((req, res) => {
        Todos.find((err, todos) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(todos)
        })
    })
    .post((req, res) => {
        // Create a new Todo in you db collection using the Schema and the req.body the user sent you
        const newTodo = new Todos(req.body) 
        newTodo.save((err, newSavedTodo) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newSavedTodo)
        })
    })


// :id is a request Param.  The id the user sends for all of these routes
    // will be found in req.params.id
todoRouter.route('/:id')
    .get((req, res) => {
        Todos.findOne({ _id: req.params.id }, (err, foundTodo) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundTodo)
        })
    })
    .put((req, res) => {
        Todos.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedTodo) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedTodo)
            }
        )
    })
    .delete((req, res) => {
        Todos.findOneAndRemove({ _id: req.params.id }, (err, deletedTodo) => {
                if (err) return res.status(500).send(err)
                return res.status(202).send({ deletedTodo: deletedTodo, msg: "Todo successfully deleted" })
            }
        )
    })


module.exports = todoRouter