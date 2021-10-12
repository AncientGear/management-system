const RoleModel = require('../models/role');
const UserRoleModel = require('../models/user_roles');
const UserModel = require('../models/user');

const addUserRole = async (req, res, next) => {
    try {
        const body = req.body;
        const role = await RoleModel.findOne({
            where: {
                id: body.roleId
            }
        });
        if(!role) {
            res.error = {
                statusCode: 401,
                message: 'Unreconigned role'
            };

            throw new Error('Role undefined.');
        }
        const user = await UserModel.findOne({
            where: {
                id: body.userId
            }
        })

        if(!user) {
            res.error = {
                statusCode: 401,
                message: 'Unexistent user'
            };

            throw new Error('Unexistent user.');
        }

        const userRole = await UserRoleModel.create({
            role_id: role.id,
            user_id: user.id
        });

        return res.status(201).send({
            message: 'Role added to the user.'
        });
    } catch(err) {
        console.log(err);
        next();
    }
}

const addTeamLeaderRole = async (req, res, next) => {
    try {
        const body = req.body;

        const dataUserRole = {
            role_id: 3,
            user_id: body.userId
        }

        const newTeamLeader = await UserRoleModel.create(dataUserRole);

        if(!newTeamLeader) {
            res.error = {
                statusCode: 401,
                message: 'Cannot set Team Leader'
            }
        }

        return res.status(201).send({
            teamLeader: newTeamLeader,
            message:'New team leader.'
        })
    } catch(err) {
        console.log(err);
        next();
    }
}

module.exports = {
    addUserRole,
    addTeamLeaderRole
}