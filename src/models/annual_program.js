const Sequelize = require('sequelize');
const { sequelize } = require('../../config/dbConnection/database')

const AnnualProgramModel = sequelize.define('token', {
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


module.exports = AnnualProgramModel;