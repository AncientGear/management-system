const FormationAsAuditorInfoModel = require('../models/formation_as_auditor_info');
const FormationInfoModel = require('../models/formation_info');


const createFormationAsAuditorInfo = async (req, res, next) => {
    try {
        
        const formationAsAuditorId = req.params["formationAsAuditorId"]

        const formationAsAuditorInfo = await FormationAsAuditorInfoModel.create();

        const formationInfoData = {
            formation_as_auditor_id: formationAsAuditorId,
            formation_as_auditor_info_id: formationAsAuditorInfo.id
        }
        console.log(formationInfoData);
        await FormationInfoModel.create(formationInfoData);

        return res.status(201).send({
            status: 201,
            formationAsAuditorInfo
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

const updateFormationAsAuditorInfo = async (req, res, next) => {
    try {
        
        const body = req.body;
        
        const formationAsAuditorInfoData = {
            course_name: body.courseName || 'NA',
            date: body.date || 'NA',
            score: body.score || 'NA'
        }
        console.log(formationAsAuditorInfoData);
        const formationAsAuditorInfo = await FormationAsAuditorInfoModel.update(formationAsAuditorInfoData, {
            where: {
                id: req.body["formationAsAuditorId"]
            }
        });

        console.log(formationAsAuditorInfo);
        return res.status(201).send({
            status: 201,
            formationAsAuditorInfo,
            message: "Formation As Auditor Info Was Updated"
        })
        
    } catch(err) {
        console.log(err);
        next();
    }
}

const deleteFormationAsAuditorInfo = async (req, res, next) => {
    try {
        const formationAsAuditorInfoId = req.params["id"]
        const formationAsAuditorInfoDeleted = await FormationAsAuditorInfoModel.destroy({
            where: {
                id: formationAsAuditorInfoId
            }
        })

        return res.status(200).send({
            status: 200,
            message: "Formation As Auditor was deleted",
            formationAsAuditorInfoDeleted
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

module.exports = {
    createFormationAsAuditorInfo,
    updateFormationAsAuditorInfo,
    deleteFormationAsAuditorInfo
}   