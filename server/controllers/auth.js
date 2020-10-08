const bcrypt = require('bcrypt');
const db = require('../database/db');
const jwt = require('jsonwebtoken')
const keys = require("../config/keys");


module.exports.login = (req, res) => {
    db.query(`SELECT * FROM items WHERE email = ?`, [req.body.email], async (error, result) => {

        if (error) console.log(...data.email);

        else if (result.length > 0) {

            let data = {...result[0]}

            let passwordCompare = bcrypt.compareSync(req.body.password, data.password);
            if (passwordCompare) {
                let token = jwt.sign({
                    email: data.email,
                    userId: data.id,
                }, keys.jwt.jwt, {expiresIn: 60 * 60})
                res.status(200).json({token: `Bearer ${token}`})
            } else res.status(401).json('Password is wrong')
        } else res.status(404).json(`User ${req.body.email} not found`)
    })
};

module.exports.register = (req, res) => {

    db.query(`SELECT email FROM items WHERE email = ?`, [req.body.email], async (error, result) => {

        if (error) console.log(error);

        else if (result.length > 0) res.status(409).json(`User ${req.body.name} have been created`);

        else {
            let salt = await bcrypt.genSaltSync(10);
            let hashedPass = await bcrypt.hash(req.body.password, salt);
            let data = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: hashedPass
            };
            let sql = 'INSERT INTO items SET ?';
            db.query(sql, data, (err) => {
                if (err) throw err;
                console.log(`User added`);
            })
            res.status(200).json(`User ${req.body.email} created`)
        }
    })
}