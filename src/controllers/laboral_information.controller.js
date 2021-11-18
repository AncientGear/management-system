const LaboralInformationModel = require('../models/laboral_information');
const LaboralExperienceInformationModel = require('../models/laboral_experience_information');


const createLaboralInformation = async (req, res, next) => {
    try {
        const body = req.body;
        const laboralExperienceId = req.params["laboralExperienceId"]

        const laboralInformation = await LaboralInformationModel.create();

        console.log(laboralInformation);
        const laboralExperienceInformationData = {
            laboral_experience_id: laboralExperienceId,
            laboral_information_id: laboralInformation.id
        }
        await LaboralExperienceInformationModel.create(laboralExperienceInformationData);

        return res.status(201).send({
            status: 201,
            laboralInformation
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

const updateLaboralInformation = async (req, res, next) => {
    try {
        
        const body = req.body;
        
        const laboralInformationData = {
            company: body.company || 'NA',
            position: body.position || 'NA',
            period: body.period || 'NA',
            score: body.score || 'NA'
        }
        console.log(laboralInformationData);
        const laboralInformation = await LaboralInformationModel.update(laboralInformationData, {
            where: {
                id: req.params["id"]
            }
        });

        console.log(laboralInformation);
        return res.status(201).send({
            status: 201,
            laboralInformation
        })
        
    } catch(err) {
        console.log(err);
        next();
    }
}

const deleteLaboralInformation = async (req, res, next) => {
    try {
        const laboralInformationId = req.params["id"]
        const laboralInformationDeleted = await LaboralInformationModel.destroy({
            where: {
                id: laboralInformationId
            }
        })

        return res.status(200).send({
            status: 200,
            message: "Laboral information was deleted",
            laboralInformationDeleted
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

module.exports = {
    createLaboralInformation,
    updateLaboralInformation,
    deleteLaboralInformation
}   