const AnnualProgrammModel = require('../models/annual_program');

const createAnnualProgramm = async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const annualProgrammInfo = {
            title: body.title,
            totalWeeks: body.totalWeeks,
            monthStart: body.monthStart,
            monthEnd: body.monthEnd
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

const deletePlan = async (req, res, next) => {
    try {
        const planId = req.params["id"];
        await AnnualProgrammModel.destroy({
            where: {
                id: planId
            }
        });
        const annualProgramms = await AnnualProgrammModel.findAll();
        console.log("ap");
        console.log(annualProgramms);
        return res.status(200).send({
            message: 'Programm Annual Deleted.',
            programs: annualProgramms
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

module.exports = {
    createAnnualProgramm,
    getAllAnnualProgramm,
    deletePlan
}