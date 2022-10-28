const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { v4 } = require("uuid")
const User = require("../users/users.model");

const GOOGLE_CLIENT_ID =
  "408199502717-7gd3hkhes01fm6s6i8f8lvi32q0ojatv.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
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
