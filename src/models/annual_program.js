const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const AnnualProgrammActivitiesModel = require('./annual_program_activities')

const AnnualProgramModel = sequelize.define('annual_programm', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.TEXT
    },
    total_weeks: {
        type: Sequelize.INTEGER
    },
    month_start: {
        type: Sequelize.TEXT
    },
    month_end: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    freezeTableName: true
});

// AnnualProgramModel.hasOne(AnnualProgrammActivitiesModel, {
//     foreingKey: 'annual_programm_id',
//     sourceKey: 'id'
// });

module.exports = AnnualProgramModel;