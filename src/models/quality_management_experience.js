const Sequelize = require('sequelize');
const { sequelize } = require('../../config/dbConnection/database')

const QualityManagementExperienceModel = sequelize.define('token', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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

module.exports = QualityManagementExperienceModel;