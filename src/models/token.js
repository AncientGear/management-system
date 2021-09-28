import Sequelize from "sequelize";
import { sequelize } from '../../config/dbConnection/database';

import UserModel from './user'

const TokenModel = sequelize.define('token', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    token: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

TokenModel.hasOne(UserModel, {
    foreingKey: 'token_id'
})

export default TokenModel;