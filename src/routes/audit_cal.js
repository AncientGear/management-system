const { Router } = require('express');

const AuditCallController = require('../controllers/audit_cal.controller')

const { verifyJWT } = require('../middlewares/verifyToken')
const { verifyAdminRole } =  require('../middlewares/verifyAdminRole')

const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.post('/createAuditCal', [verifyJWT], AuditCallController.createAuditCal, sendResponseError);

module.exports = router;