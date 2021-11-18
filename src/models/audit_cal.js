const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const AuditCalModel = sequelize.define('audit_cal', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: Sequelize.TEXT
    },
    total_score: {
        type: Sequelize.INTEGER
    },
    score_date_limit: {
        type: Sequelize.TEXT
    },
    quality_management_experience_id: {
        type: Sequelize.INTEGER
    },
    formation_as_auditor_id: {
        type: Sequelize.INTEGER
    },
    audit_experience_id: {
        type: Sequelize.INTEGER
    },
    qualify_by_id: {
        type: Sequelize.INTEGER
    },
    education_id: {
        type: Sequelize.INTEGER
    }, 
    laboral_experience_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = AuditCalModel;