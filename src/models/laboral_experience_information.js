const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const LaboralExperienceInformationModel = sequelize.define('laboral_experience_information', {
    laboral_information_id: {
        type: Sequelize.INTEGER
    },
    laboral_experience_id: {
        type: Sequelize.INTEGER
    },
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = LaboralExperienceInformationModel;