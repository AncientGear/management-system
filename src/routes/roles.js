const { Router } = require('express');

const RolesController = require('../controllers/user_role.controller')

const { verifyJWT } = require('../middlewares/verifyToken')
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');
const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.post('/addLeaderTeam', [verifyJWT, verifyAdminRole], RolesController.addTeamLeaderRole, sendResponseError);

module.exports = router;