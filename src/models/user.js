import Sequelize from "sequelize";
import { sequelize } from '../../config/dbConnection/database';

const UserModel = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,

    },
    name: {
        type: Sequelize.TEXT
    },
    last_name: {
        type: Sequelize.TEXT
    },
    prefix: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.STRING
    },
    token_id: {
        
    }
}, {
    timestamps: false
});

export default UserModel;