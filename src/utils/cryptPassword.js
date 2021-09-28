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

module.exports = {

}