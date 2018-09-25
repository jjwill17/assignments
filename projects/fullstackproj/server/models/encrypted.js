const mongoose = require('mongoose')
const Schema = mongoose.Schema

const encryptedSchema = new Schema({
    text: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Text", encryptedSchema)