const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const FormationAsAuditorModel = sequelize.define('formation_as_auditor', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = FormationAsAuditorModel;