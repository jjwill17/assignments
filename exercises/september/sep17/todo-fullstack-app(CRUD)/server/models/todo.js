const mongoose = require('mongoose')

// Blueprint from which all Todo object will be saved in the database
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    imgUrl: String,
    completed: Boolean,
    price: Number
})

 // If referencing a resource from another collection (foreign ID)
    // user: {
    //     type: Schema.types.ObjectId,  
    //     ref: "User"
    // }

module.exports = mongoose.model("Todo", todoSchema)

