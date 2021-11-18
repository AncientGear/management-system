const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const FormationInfoModel = sequelize.define('formation_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    formation_as_auditor_id: {
        type: Sequelize.INTEGER
    },
    formation_as_auditor_info_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = FormationInfoModel;