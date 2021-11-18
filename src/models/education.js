const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConnection/database')

const EducationModel = sequelize.define('education', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    maxLevelAcademic: {
        type: Sequelize.TEXT,
        field: "max_level_academic"
    },
    institute: {
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


module.exports = EducationModel;