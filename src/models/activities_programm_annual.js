const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const AnnualProgrammActivitiesModel = require('./annual_program_activities')

const ActivitiesProgrammAnnualModel = sequelize.define('activities_programm_annual', {
    id: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
    },
    activity_name: {
        type: Sequelize.TEXT
    },
    enumeration: {
        type: Sequelize.INTEGER
    },
    start_week: {
        type: Sequelize.INTEGER
    },
    end_week:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

// ActivitiesProgrammAnnualModel.hasOne(AnnualProgrammActivitiesModel, {
//     foreingKey: 'activities_programm_annual_id',
//     sourceKey: 'id'
// });

module.exports = ActivitiesProgrammAnnualModel;