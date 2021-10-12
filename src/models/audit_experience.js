const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const TokenModel = sequelize.define('token', {
    
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = TokenModel;