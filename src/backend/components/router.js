
const express = require("express")
const { getData } = require("./controller.js")
const router = express.Router()

router.route("/me").post(getData)

module.exports = router