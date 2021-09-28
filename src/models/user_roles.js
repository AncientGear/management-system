import Sequelize from "sequelize";
import { sequelize } from '../../config/dbConnection/database';

const UserRoleModel = sequelize.define('user_roles', {
    role_id: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default UserModel;