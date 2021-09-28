import Sequelize from "sequelize";
import { sequelize } from '../../config/dbConnection/database';

import UserRoleModel from './user_roles';

const RoleModel = sequelize.define('role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,

    },
    name: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

RoleModel.hasMany(UserRoleModel, {
    foreingKey: 'role_id'
})

export default RoleModel;