const { Router } = require('express');

const LaboralInformationController = require('../controllers/laboral_information.controller')

const { verifyJWT } = require('../middlewares/verifyToken')
const { verifyAdminRole } =  require('../middlewares/verifyAdminRole')

const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.post('/createLaboralInformation/:laboralExperienceId', [verifyJWT], LaboralInformationController.createLaboralInformation , sendResponseError);
router.put('/updateLaboralInformation/:id', [verifyJWT], LaboralInformationController.updateLaboralInformation, sendResponseError);
router.delete('/deleteLaboralInformation/:id', [verifyJWT], LaboralInformationController.deleteLaboralInformation, sendResponseError);

module.exports = router;