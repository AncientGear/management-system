const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const AuditCalUser = sequelize.define('audit_cal_user', {
    user_id: {
        type: Sequelize.INTEGER
    },
    audit_cal_id: {
        type: Sequelize.INTEGER
    },
    role_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = AuditCalUser;