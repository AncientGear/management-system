const User = require('../models/user');

const verifyUserExistenceByMail = (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if(user) {
            res.error = {
                statusCode: 401,
                message: 'Email in use. Try another.'
            }
        }

        next();
    } catch(err) {
        return res.status(res.error.statusCode).send({
            
        })
    }
}

module.exports = {
    verifyUserExistenceByMail
}