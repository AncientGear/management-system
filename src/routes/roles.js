const { Router } = require('express');

const RolesController = require('../controllers/roles.controller')


const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();


module.exports = router;