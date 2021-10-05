const Sequelize = require('sequelize');
const { sequelize } = require('../../config/dbConnection/database')

const ActivitiesProgrammAnnualModel = sequelize.define('token', {
    id: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
    },
    activity_name: {
        type: Sequelize.TEXT
    },
    enumeration: {
        type: Sequelize.INTEGER
    },
    start_week: {
        type: Sequelize.INTEGER
    },
    end_week:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = ActivitiesProgrammAnnualModel;