const Sequelize = require("sequelize");
const sequelize = require('../../config/dbConnection/database');

const ResponsableModel = sequelize.define('responsable', {
    role_id: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

module.exports = UserRoleModel;