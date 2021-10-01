
const { getUserByEmail } = require('./getUserByEmail')

const verifyUserEmail = async (email, uid) => {
    const user = await getUserByEmail(email);
    if(!user) {
        return false;
    } else {
        if(user.email !== email) {
            return false
        } else {
            return true;
        }
    }
}

module.exports = {
    verifyUserEmail
}