const passport = require('passport');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { JWT_SECRET } = require('./index');
const { User } = require('../models');

passport.use(
  new JwtStrategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (jwt_poyload, done) => {
      try {
        const user = await User.findById({ _id: jwt_poyload.id });
        if (!user) return done(null, false);
        return done(null, true);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

module.exports = passport;
