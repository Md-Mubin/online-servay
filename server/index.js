require('dotenv').config()
const express = require("express")
require("./helpers.js/passport")

const app = express()
require("./router/authRoute")(app)

app.listen(8000)