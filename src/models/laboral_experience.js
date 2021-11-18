const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const LaboralExperienceModel = sequelize.define('laboral_experience', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = LaboralExperienceModel;