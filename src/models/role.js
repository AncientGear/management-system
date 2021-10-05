import Sequelize from "sequelize";
import { sequelize } from '../../config/dbConnection/database';

import UserRoleModel from './user_roles';

const RoleModel = sequelize.define('role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false,
    freezeTableName: true
});

RoleModel.hasMany(UserRoleModel, {
    foreingKey: 'role_id',
    sourceKey: 'id'
})

export default RoleModel;