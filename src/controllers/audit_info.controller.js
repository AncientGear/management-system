const AuditInfoModel = require('../models/audit_info');
const AuditExperienceInfoModel = require('../models/audit_experience_info');


const createAuditInfo = async (req, res, next) => {
    try {
        
        const auditExperienceId = req.params["auditExperienceId"]

        const auditInfo = await AuditInfoModel.create();

        const auditInfoData = {
            audit_experience_id: auditExperienceId,
            audit_experience_info_id: auditInfo.id
        }
        await AuditExperienceInfoModel.create(auditInfoData);

        return res.status(201).send({
            status: 201,
            auditInfo
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

const updateAuditInfo = async (req, res, next) => {
    try {
        
        const body = req.body;
        
        const auditInfoData = {
            appoitment: body.appoitment || 'NA',
            date: body.date || 'NA',
            score: body.score || 'NA'
        }
        console.log(auditInfoData);
        const auditInfo = await AuditInfoModel.update(auditInfoData, {
            where: {
                id: req.params["id"]
            }
        });

        console.log(auditInfo);
        return res.status(201).send({
            status: 201,
            auditInfo,
            message: "Audit Info Was Updated"
        })
        
    } catch(err) {
        console.log(err);
        next();
    }
}

const deleteAuditInfo = async (req, res, next) => {
    try {
        const auditInfoId = req.params["id"]
        const auditInfoDeleted = await AuditInfoModel.destroy({
            where: {
                id: auditInfoId
            }
        })

        return res.status(200).send({
            status: 200,
            message: "Formation As Auditor was deleted",
            auditInfoDeleted
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

module.exports = {
    createAuditInfo,
    updateAuditInfo,
    deleteAuditInfo
}   