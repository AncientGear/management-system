const jwt = require("jsonwebtoken");

const { jwtkey } = require("../../config/config")

const decodeToken = (token = '') => {
    return new Promise ((resolve, reject) => {
        const decoded = jwt.decode(token, jwtkey);
    }, (err, decoded) => {
        if(err) {
            console.log(err);
            reject("Invalid Token");
        } else {
            resolve(decoded);
        }
    })
}