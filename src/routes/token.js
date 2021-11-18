const { Router } = require('express');

const { verifyJWT } = require('../middlewares/verifyToken')
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');
const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.get('/verifyToken', [verifyJWT],sendResponseError);

module.exports = router;