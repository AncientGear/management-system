const AuditCalModel  = require('../models/audit_cal');
const LaboralExperienceModel = require('../models/laboral_experience');
const EducatioModel = require('../models/education');
const QualityManagementExperienceModel = require('../models/quality_management_experience');
const FormationAsAuditorModel = require('../models/formation_as_auditor');
const AuditExperienceModel = require('../models/audit_experience');

const { createAuditCalInfo } = require('../utils/createAuditCalInfo')

const createAuditCal = async (req, res, next) => {
    try{
        const body = req.body;
        console.log(body);
        const educationInfo = {
            max_level_academic: body.education.maxLevelAcademic,
            institute: body.education.institute,
            date: body.education.date,
            score: body.education.score
        };
        console.log(educationInfo);
        console.log(body.qualityManagement);
        
        const qualityManagementInfo = {
            company: body.qualityManagement.company,
            position: body.qualityManagement.position,
            period: body.qualityManagement.period,
            score: body.qualityManagement.score,
        }
        console.log(qualityManagementInfo);
        const laboralExperience = await createAuditCalInfo(LaboralExperienceModel, {},res);
        console.log(laboralExperience);
        const formationAsAuditor = await createAuditCalInfo(FormationAsAuditorModel, {}, res);
        const auditExperience = await createAuditCalInfo(AuditExperienceModel, {}, res);

        const education = await createAuditCalInfo(EducatioModel, educationInfo, res);
        const qualityManagement = await createAuditCalInfo(QualityManagementExperienceModel, qualityManagementInfo, res);


        const auditCalInfo = {
            date: body.auditCal.date,
            total_score: body.auditCal.totalScore,
            score_date_limit: body.auditCal.scoreDateLimit,
            quality_management_experience_id: qualityManagement.id,
            formation_as_auditor_id: formationAsAuditor.id,
            audit_experience_id: auditExperience.id,
            qualify_by_id: req.user.id,
            education_id: education.id,
            laboral_experience_id: laboralExperience.id
        }

        const auditCal = await createAuditCalInfo(AuditCalModel, auditCalInfo);

        return res.status(201).send({
            status: 201,
            message:'Audit Cal Created Succesfully.',
            auditCal
        })

    } catch(err) {
        console.log(err);
        next(); 
    }
}

module.exports = {
    createAuditCal
}