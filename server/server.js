const express = require('express');
const mysql = require('mysql');
const keys = require('./config/keys');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
module.exports = app

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//connecting to DB
const mysqlDb = mysql.createConnection(keys);

//server listening
mysqlDb.connect((err) => {
    if (err) console.log(err ? err : 'DB connected error');
    console.log(err ? err : 'DB is connected');//server listening
    // app.listen(3010, () => console.log('Server is working...'))
});


app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM items';
    mysqlDb.query(sql, (err, result, fields) => {
        if (err) throw err;
        let data = {items: result};
        res.send(data);
    });
});

app.get('/user/:id', (req, res) => {
    let sql = `SELECT * FROM items WHERE ID = ${Number(req.params.id)}`;
    mysqlDb.query(sql, (err, result, fields) => {
        if (err) console.log(err);
        let data = result[0];
        res.send(data);
    });
});

app.post('/registration', async (req, res) => {
    let salt = await bcrypt.genSaltSync(10);
    let hashedPass = await bcrypt.hash(req.body.password, salt);
    let data = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: hashedPass
    };
    let sql = 'INSERT INTO items SET ?';
    mysqlDb.query(sql, data, (err, result) => {
        if (err) throw err;
        console.log(`User added`);
        res.send(`User added`);
    })
});

app.put('/user/:id', (req, res) => {
    let data = [req.body];
    let sql = `UPDATE items SET ? WHERE ID = ${Number(req.params.id)}`
    mysqlDb.query(sql, data, (err, result) => {
        if (err) throw err;
        console.log(`'User' ${Number(req.params.id)} updated`);
    })
    res.send(`'User' ${Number(req.params.id)} updated`)
});

app.delete('/user/:id', (req, res) => {
    let sql = `DELETE FROM items WHERE ID = ${Number(req.params.id)}`;
    mysqlDb.query(sql, (err, result) => {
        if (err) throw err
        console.log(`'User' ${Number(req.params.id)} 'deleted'`);
        res.send((`'User' ${Number(req.params.id)} 'deleted'`))
    })
});

