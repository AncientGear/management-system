const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const UserRoleModel = require('./user_roles');

const UserModel = sequelize.define('"user"', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.TEXT
    },
    last_name: {
        type: Sequelize.TEXT
    },
    prefix: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    token_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

UserModel.hasMany(UserRoleModel, {
    foreingKey: 'user_id',
    sourceKey: 'id'
})

module.exports = UserModel;