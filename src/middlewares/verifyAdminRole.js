const UserRole = require('../models/user_roles');

const { getUserByEmail } = require('../utils/getUserByEmail')

const verifyAdminRole = async (req, res, next) => {
    try {
        const body = req.body;
        let user;
        if(req.user.id) {
            user = req.user;
        } else {
            user = await getUserByEmail(email);
        }
        const roles = await UserRole.findAll({
            where: {
                user_id: user.id
            }
        })
        let accept = false;
        for(let i = 0; i < roles.length; i++) {
            if(roles[i].id === 1) {
                accept = true;
                break;
            }
        }
        if(accept ){
            next();
        } else {
            res.error = {
                statusCode: 401,
                message: 'Invalid user role'
            };
            throw new Error('Invalid user role.')
        }
    } catch(err) {
        console.log(err);
        return res.status(res.error.statusCode).send({
            status: res.error.statusCode,
            message: res.error.message
        })
    }
}

module.exports = {
    verifyAdminRole
}