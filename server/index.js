require('dotenv').config()
const express = require("express")
const cookieSession = require("cookie-session")
const passport = require("passport")
const session = require("express-session")
require("./models/userSchema")
require("./services/passport")

const app = express()

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys : ["asdasdaskhfdula"]
}))
app.use(passport.initialize())
app.use(passport.session())

require('./config/db')
require("./router/authRoute")(app)

app.listen(8000)