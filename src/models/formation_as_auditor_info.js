const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const FormationAsAuditorInfoModel = sequelize.define('formation_as_auditor_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_name: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.TEXT
    },
    score: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});


module.exports = FormationAsAuditorInfoModel;