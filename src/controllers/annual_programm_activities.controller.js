const ActivitiesProgrammAnnualModel = require('../models/activities_programm_annual');
const AnnualProgrammActivitiesModel = require('../models/annual_program_activities');

const createActivityProgrammAnnual = async (req, res, next) => {
    try{
        const body = req.body;
        const annual_programm_id = Number(body.annualProgrammId)
        const programmInfo = {
            activity_name: body.name,
            enumeration: body.enumeration,
            start_week: body.startWeek,
            end_week: body.endWeek
        }

        const actProgrammAnnual = await ActivitiesProgrammAnnualModel.create(programmInfo);
        const id = actProgrammAnnual.dataValues.id;
        console.log(1);
        console.log(id);
        if(!actProgrammAnnual) {
            res.error = {
                statusCode: 401,
                message: 'Activitie cannot be created. Try again'
            }
            throw new Error("Activitie cannot be created.")
        }
        
        console.log(2);
        console.log(annual_programm_id);
        annualProgrammInfo = {
            annual_programm_id,
            activities_programm_annual_id: id
        }
        console.log(annualProgrammInfo);

        const newAnnualProgrammActivities = await AnnualProgrammActivitiesModel.create(annualProgrammInfo);

        console.log(newAnnualProgrammActivities);

        return res.status(201).send({
            message: 'Activitie created succesfully',
            activitie: actProgrammAnnual
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

const getActivitiesByProgramm = async (req, res, next) => {
    try {
        const body = req.body;

        const programmId = body.programmId;

        const activities = await ActivitiesProgrammAnnualModel.findAll({
            include: [{
                model: AnnualProgrammActivitiesModel,
                where: {
                    annual_programm_id: programmId
                }
            }]
        });

        if(!activities) {
            res.error = {
                message: 'Cannot find activities',
                statusCode: 401
            }
        }

        return res.status(200).send({
            message: 'Get all Activities',
            activities
        });
    } catch(err) {
        console.log(err);
        next();
    }
}

module.exports = {
    createActivityProgrammAnnual,
    getActivitiesByProgramm
}