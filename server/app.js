const express = require('express');
const authRoutes = require('./routes/auth')
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
// const mysql = require('mysql');
// const keys = require('./config/keys');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// const db = mysql.createConnection(keys);
// module.exports = db.connect((err) => console.log(err ? err : 'DB is connected'));


app.use('/api/auth', authRoutes);
app.use('/api/users', authRoutes);




module.exports = app