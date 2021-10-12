const AnnualProgrammModel = require('../models/annual_program');

const createAnnualProgramm = async (req, res, next) => {
    try {
        const body = req.body;
        console.log(2);
        const annualProgrammInfo = {
            title: body.title,
            total_weeks: body.totalWeeks,
            month_start: body.monthStart,
            month_end: body.monthEnd
        }

        const newAnnualProgramm = await AnnualProgrammModel.create(annualProgrammInfo);

        if(!newAnnualProgramm) {
            res.error = {
                message: 'Annual Programm Cannot be Created. Try again',
                statusCode: 401
            }
        }

        return res.status(201).send({
            message: 'Annual programm created succesfully',
            annualProgramm: newAnnualProgramm
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

const getAllAnnualProgramm = async (req, res, next) => {
    try {
        const annualProgramms = await AnnualProgrammModel.findAll();

        if(!annualProgramms) {
            res.error = {
                message: 'Cannot find Annual Programms',
                statusCode: 401
            }
        }

        return res.status(200).send({
            message: 'Succesfully search',
            programs: annualProgramms
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

module.exports = {
    createAnnualProgramm,
    getAllAnnualProgramm
}