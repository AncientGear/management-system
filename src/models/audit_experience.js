const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const AuditExperienceModel = sequelize.define('audit_experience', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = AuditExperienceModel;