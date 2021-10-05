const Sequelize = require("sequelize");
const sequelize = require('../../config/dbConnection/database');

const UserRoleModel = sequelize.define('user_roles', {
    role_id: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = UserRoleModel;