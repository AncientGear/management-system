const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const LaboralInformationModel = sequelize.define('laboral_information', {
    id:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    company: {
        type: Sequelize.TEXT
    },
    position: {
        type: Sequelize.TEXT
    },
    period: {
        type: Sequelize.TEXT
    },
    score: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = LaboralInformationModel;