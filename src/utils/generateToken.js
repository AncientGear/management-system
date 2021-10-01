const jwt = require("jsonwebtoken");

const { jwtkey } = require("../../config/config")

/**
 * 
 * @param {INTEGER} uid - user id
 * @returns token for user identification
 */
const generateToken = async ( uid = 0, email = '' ) => {
    const payload = {uid, email};

    const token = await jwt.sign(payload, jwtkey, {
        expiresIn: '3h'
    });

    return token;

    
}

module.exports = {
    generateToken
}