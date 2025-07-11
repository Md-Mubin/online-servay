const mongoose = require('mongoose')
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy

const User = mongoose.model("users")

passport.serializeUser((user,done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    User.findById(id)
    .then(user=> done(null, user))
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then(existUser => {
        if (existUser) done(null, existUser)

        else new User({ googleId: profile.id }).save().then(user => done(null, user))
    })
}))