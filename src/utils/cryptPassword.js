const bcrypt = require('bcrypt');

const generateHash = (password) => {
    try{
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    } catch(err){
        console.log(err);
        return {
            err: {
                statusCode: 400,
                message: 'Cannot create user'
            }
        }
    }
}

const compareHash = (password, hash) => {
    try{
        const response = bcrypt.compareSync(password, hash)

        return response;
    } catch(err){
        console.log(err);
        return {
            err: {
                statusCode: 400,
                message: 'Cannot create user'
            }
        }
    }
}

module.exports = {
    generateHash,
    compareHash
}