const mongoose = require('mongoose')

const tireProvider = new mongoose.Schema({
    company: [String],
    isRubber: true
})



module.exports = mongoose.model("TireProvider", tireProvider)