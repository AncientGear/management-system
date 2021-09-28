const jwt = require('jsonwebtoken');

const { jwtkey, url } = require('../../config/config')

const verifyJWT = (req, res, next) => {
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).send({
            message: 'Token not Found'
        })
    }

    try {
        jwt.verify(token, jwtkey)

        next();
    } catch(err) {
        console.log(err);
        return res.redirect(`${url}/login`)
    }
}

module.exports = {
    verifyJWT
};