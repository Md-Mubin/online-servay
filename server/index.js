require('dotenv').config()
const express = require("express")
require("./helpers.js/passport")

const app = express()
require('./config/db')
require("./router/authRoute")(app)

app.listen(8000)