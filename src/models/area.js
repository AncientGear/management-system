const Sequelize = require("sequelize");
const sequelize = require('../../config/dbConnection/database');

const AreaModel = sequelize.define('area', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    responsable_id: {
        type: Sequelize.INTEGER
    },
    area_name: {
        type: Sequelize.TEXT
    },
    abbreviation: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

module.exports = AreaModel;