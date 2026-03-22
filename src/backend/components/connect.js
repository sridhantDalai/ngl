
const mongoose = require("mongoose")
require("dotenv").config()

const DB_Connection = async () => {
    const DB_Connect = await mongoose.connect(process.env.MONGOOSE_URI)
    try{
        console.log("DB Connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = DB_Connection