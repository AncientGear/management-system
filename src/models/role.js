const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database');

const UserRoleModel = require('./user_roles')

const RoleModel = sequelize.define('role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = RoleModel;