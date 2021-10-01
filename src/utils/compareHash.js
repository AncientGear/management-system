const bcrypt = require('bcrypt');

const { getUserById } = require('./getUserById')

const compareHash = async (password, uid) => {
    try {
        const user = await getUserById(uid);
        const response = await bcrypt.compareSync(password, user.password)
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return {
            statusCode: 400,
            message: 'Cannot create user'
        }
    }
}

module.exports = {
    compareHash
}