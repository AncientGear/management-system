const UserRole = require('../models/user_roles');

const verifyCordRole = (req, res, next) => {
    try {
        const user = req.user;
        const role = await UserRole.find({
            where: {
                user_id: user.id,
                name: "coordinador de calidad"
            }
        })

        if(!role) {
            res.error = {
                message: 'Invalid user role',
                statusCode: 401
            }
            throw new Error('Invalid user role.')
        }
        next();
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