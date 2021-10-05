const UserRole = require('../models/user_roles');

const verifyCordRole = (req, res, next) => {
    try {
        const user = req.user;
        const roles = await UserRole.find({
            where: {
                user_id: user.id
            }
        })

        for(let i = 0; i < roles.length; i++) {
            if(roles[i].name === "coordinador de calidad") {
                next();
            }
        }
        res.error = {
            statusCode: 401,
            message: 'Invalid user role'
        };
        throw new Error('Invalid user role.')
    } catch(err) {
        return res.status(res.error.statusCode).send({
            status: res.error.statusCode,
            message: res.error.message
        })
    }
}

module.exports = {
    verifyCordRole
}