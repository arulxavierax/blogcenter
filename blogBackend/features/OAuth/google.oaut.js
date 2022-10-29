const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require("dotenv").config();
const { v4 } = require("uuid");
const User = require("../users/users.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      let name = profile.displayName;
      let email = profile._json.email;
      let user = await User.create({
        name,
        email,
        password: v4(),
      });
      return cb(null, user);
    }
  )
);

module.exports = passport;
