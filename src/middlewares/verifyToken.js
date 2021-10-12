const jwt = require('jsonwebtoken');

const { jwtkey, url } = require('../../config/config');
const UserModel = require('../models/user');

const verifyJWT = async (req, res, next) => {
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).send({
            message: 'Token not Found'
        })
    }

    try {
        const tokenVerify = await jwt.verify(token, jwtkey);

        const user = await UserModel.findOne({
            where: {
                id: tokenVerify.uid
            }
        });

        if(user.token !== token) {
            res.error = {
                message:'Invalid Token.',
                statusCode: 401
            }
            throw new Error('Invalid Token')
        }
        req.user = user;
        console.log(req.user);
        next();
    } catch(err) {
        console.log(err);
        return res.status(401).send({
            status: res.error.statusCode,
            message: res.error.message
        })
    }
}

module.exports = {
    verifyJWT
};