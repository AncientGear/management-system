const { Router } = require('express');

const UserController = require('../controllers/user.controller')

const { verifyJWT } = require('../middlewares/verifyToken')

const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.post('/createUser', [verifyJWT], UserController.createUser, sendResponseError);
router.post('/loginUser' ,UserController.authUser, sendResponseError);

module.exports = router;