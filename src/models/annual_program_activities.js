const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database');



const AnnualProgramActivitiesModel = sequelize.define('annual_programm_activities', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    annual_programm_id: {
        type: Sequelize.INTEGER
    },
    activities_programm_annual_id: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = AnnualProgramActivitiesModel;