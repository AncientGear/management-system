const { Router } = require('express');

const AuditInfoController = require('../controllers/audit_info.controller')

const { verifyJWT } = require('../middlewares/verifyToken')
const { verifyAdminRole } =  require('../middlewares/verifyAdminRole')

const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.post('/createAuditInfo/:auditExperienceId', [verifyJWT], AuditInfoController.createAuditInfo, sendResponseError);
router.put('/updateAuditInfo/:id', [verifyJWT], AuditInfoController.updateAuditInfo, sendResponseError);
router.delete('/deleteAuditInfo/:id', [verifyJWT], AuditInfoController.deleteAuditInfo, sendResponseError);

module.exports = router;    