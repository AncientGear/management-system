const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const AuditInfoModel = sequelize.define('audit_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    appoitment: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.TEXT
    },
    score: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = AuditInfoModel;