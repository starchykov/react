const express = require('express');
const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const bodyParser = require("body-parser");
const passport = require('passport')
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize())
require('./middleware/passport')(passport)



app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);




module.exports = app