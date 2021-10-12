const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

import UserModel from './user'

const TokenModel = sequelize.define('token', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    freezeTableName: true
});

TokenModel.hasOne(UserModel, {
    foreingKey: 'token_id',
    sourceKey: 'id'
})

module.exports = TokenModel;