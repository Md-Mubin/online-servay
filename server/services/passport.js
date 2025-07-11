const mongoose = require('mongoose')
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy

const User = mongoose.model("users")

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then(existUser => {
        if (existUser) console.log("already exists")
        new User({ googleId: profile.id }).save()
    })
}))