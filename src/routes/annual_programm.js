const { Router } = require('express');

const AnnualProgrammController = require('../controllers/annual_programm')
const ActivitiesProgrammAnnualController = require('../controllers/annual_programm_activities.controller');

const { verifyJWT } = require('../middlewares/verifyToken')

const { sendResponseError } = require('../utils/sendResponseError')

const router = Router();

router.post('/createAnnualProgramm', [verifyJWT], AnnualProgrammController.createAnnualProgramm, sendResponseError);
router.post('/createActivityProgramm', [verifyJWT], ActivitiesProgrammAnnualController.createActivityProgrammAnnual, sendResponseError);
router.get('/getAllProgramms', [verifyJWT], AnnualProgrammController.getAllAnnualProgramm, sendResponseError);
router.delete('/deleteProgramm/:id', [verifyJWT], AnnualProgrammController.deletePlan, sendResponseError);

module.exports = router;