const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const AuditExperienceInfoModel = sequelize.define('audit_experience_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    audit_experience_id: {
        type: Sequelize.INTEGER
    },
    audit_experience_info_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = AuditExperienceInfoModel;