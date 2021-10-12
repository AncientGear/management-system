const Sequelize = require("sequelize");
const sequelize = require('../../config/dbConnection/database');

const UserModel = require('./user');

const UserRoleModel = sequelize.define('user_roles', {
    role_id: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});

// UserRoleModel.hasOne(UserModel, {
//     foreingKey: 'user_id'
// });

module.exports = UserRoleModel;