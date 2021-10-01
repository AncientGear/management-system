const UserRole = require('../models/user_roles');

const verifyAdminRole = (req, res, next) => {
    try {
        const user = req.user;
        const roles = await UserRole.find({
            where: {
                user_id: user.id
            }
        })

        console.log(roles);
        next();
    } catch(err) {
        return res.status(res.error.statusCode).send({
            status: res.error.statusCode,
            message: res.error.message
        })
    }
}

module.exports = {
    verifyAdminRole
}