const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./components/router.js");
const cors = require("cors");
const DB_Connection = require("./components/connect.js");

const PORT = process.env.PORT || 8081;

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"]
}));

app.use(express.json());
app.use("/", router);

DB_Connection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});