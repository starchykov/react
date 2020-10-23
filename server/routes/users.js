const express = require('express');
const controller = require('../controllers/users')
const passport = require("passport");
const router = express.Router();

//localhost:6000/api/users/all
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
//localhost:6000/api/users/by_id
router.get('/:id', controller.getByID);

module.exports = router;