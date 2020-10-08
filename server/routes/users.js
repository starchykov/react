const express = require('express');
const controller = require('../controllers/users')
const router = express.Router();

//localhost:6000/api/auth/login
router.get('/', controller.getAll);
//localhost:6000/api/auth/register
router.get('/:id', controller.getByID);

module.exports = router;