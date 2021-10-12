const { Router } = require('express');

const UserController = require('../controllers/user.controller')

const { verifyJWT } = require('../middlewares/verifyToken')
const { verifyAdminRole } =  require('../middlewares/verifyAdminRole')

const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.post('/createUser', [verifyJWT, verifyAdminRole], UserController.createUser, sendResponseError);
router.put('/updateUser', [verifyJWT], UserController.updateUser, sendResponseError);
router.post('/loginUser' ,UserController.authUser, sendResponseError);
router.post('/loginAdmin', [verifyAdminRole], UserController.authUser, sendResponseError);

module.exports = router;