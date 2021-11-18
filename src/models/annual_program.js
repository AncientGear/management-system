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
    totalWeeks: {
        type: Sequelize.INTEGER,
        field: 'total_weeks'
    },
    monthStart: {
        type: Sequelize.TEXT,
        field: 'month_start'
    },
    monthEnd: {
        type: Sequelize.TEXT,
        field: 'month_end'
    }
}, {
    timestamps: false,
    freezeTableName: true,
    indexes: [ 
        {
            unique: false,
            fields: ['total_weeks']
        },
        {
            unique: false,
            fields: ['month_start']
        },
        {
            unique: false,
            fields: ['month_end']
        }
    ]
});

// AnnualProgramModel.hasOne(AnnualProgrammActivitiesModel, {
//     foreingKey: 'annual_programm_id',
//     sourceKey: 'id'
// });

module.exports = AnnualProgramModel;