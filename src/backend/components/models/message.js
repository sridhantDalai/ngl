
const mongoose = require("mongoose")

const msgSchema = new mongoose.Schema({
    message : {
        type : String,
        required : true
    },
    time : {
        type : String ,
        required : true
    }
})

const msgModel = new mongoose.model("UserMsg",msgSchema)

module.exports = msgModel