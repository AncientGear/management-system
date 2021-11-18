const { Router } = require('express');

const FormationAsAuditorInfoController = require('../controllers/formation_as_auditor.controller')

const { verifyJWT } = require('../middlewares/verifyToken')

const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.post('/createFormationAsAuditorInfo/:formationAsAuditorId', [verifyJWT], FormationAsAuditorInfoController.createFormationAsAuditorInfo, sendResponseError);
router.put('/updateFormationAsAuditorInfo/:id', [verifyJWT], FormationAsAuditorInfoController.updateFormationAsAuditorInfo, sendResponseError);
router.delete('/deleteFormationAsAuditorInfo/:id', [verifyJWT], FormationAsAuditorInfoController.deleteFormationAsAuditorInfo, sendResponseError);

module.exports = router;