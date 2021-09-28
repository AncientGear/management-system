const User = require('../models/user');

const getUserById = async (id) => {
    const user = await User.findOne({
        where: {
            id
        }
    });

    return user;
}

module.exports = {
    getUserById
}