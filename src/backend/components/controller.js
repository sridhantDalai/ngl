const msgModel = require("./models/message")

exports.getData = async (req,res) => {
    try{
        
            const {message} = req.body
            const now = new Date()

            const day = String(now.getDate()).padStart(2, "0")
            const month = String(now.getMonth() + 1).padStart(2, "0")
            const year = now.getFullYear()

            const hours = String(now.getHours()).padStart(2, "0")
            const minutes = String(now.getMinutes()).padStart(2, "0")
            const seconds = String(now.getSeconds()).padStart(2, "0")

            const formatted = `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`

            const time = formatted

            const newUser = await msgModel.create({message,time})
            res.json({
                "data" : newUser
            })
    }catch(err){
         console.log(err)
         res.status(500).json({ message: "Server error" })
    }
}