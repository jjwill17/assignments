const express = require('express')
const firstRoute = express()

// const obj = [
//     {
//         type: "obj1",
//         number: 5,
//         id: '123'
//     },
//     {
//         type: "obj2",
//         number: 10,
//         id: '456'
//     }
// ]

// firstRoute.get('/', (req, res) => {
//     res.send(obj)
// })

firstRoute.get('/', (req, res) => {
        res.send('Here is the data from the server AKA Middleware #2')
    })

// firstRoute.post('/', (req, res) => {
//     const newPost = req.body
//     newPost.id = '789'
//     obj.push(newPost)
//     res.send(obj)
// })

module.exports = firstRoute