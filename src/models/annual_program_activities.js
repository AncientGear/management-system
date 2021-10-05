const Sequelize = require('sequelize');
const { sequelize } = require('../../config/dbConnection/database')

const AnnualProgramActivitiesModel = sequelize.define('token', {
    annual_programm_id: {
        type: Sequelize.INTEGER
    },
    activies_programm_annual_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = AnnualProgramActivitiesModel;