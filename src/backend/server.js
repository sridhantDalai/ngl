
const express = require("express")
const app = express()
require("dotenv").config()
const router = require("./components/router.js")
const CORS = require("cors")
const DB_Connection = require("./components/connect.js")

//port
const PORT = process.env.PORT

dataConfg = {
    origin : "*",
    methods : "GET, POST, PATCH, DELETE, PUT, HEAD",
    credentials : true
}

app.use(CORS(dataConfg))
app.use(express.json())
app.use("/",router)


DB_Connection().then(
    app.listen(PORT,(req,res) => {
        console.log(`running at http://localhost:${PORT}`)
    })
)
