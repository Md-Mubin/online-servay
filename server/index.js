require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose');
require("./models/userSchema")
require("./services/passport")

const app = express()
require('./config/db')
require("./router/authRoute")(app)

app.listen(8000)