const db = require('../database/db');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../config/keys').token;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, (payload, done) => {
            let user = db.query(`SELECT *
                                 FROM items
                                 WHERE id = ?`, [payload.userId], async (error, result) => {
                if (error) console.log(...data.id);
                if (result.length > 0) {
                    let data = {...result[0]}
                    return data.id
                }
            })

            if (user) {
                done(null, user)
            } else {
                done(null, false)
            }

        })
    )
}