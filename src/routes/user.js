const { Router } = require('express');

const UserController = require('../controllers/user.controller')
const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.post('/createUser', UserController.createUser, sendResponseError);

module.exports = router;