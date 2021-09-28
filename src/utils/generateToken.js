const jwt = require("jsonwebtoken");

const { jwtkey } = require("../../config/config")

const generateToken = ( uid = 0 ) => {
    return new Promise ((resolve, reject) => {
        const payload = { uid };

        jwt.sign(payload, jwtkey, {
            expiresIn: '3h'
        })
    }, (err, token) => {
        if(err) {
            console.log(err);
            reject('No se pudo generar el token')
        } else {
            resolve(token);
        }
    });
}

module.exports = {
    generateToken
}