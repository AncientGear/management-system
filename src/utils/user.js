const User = require('../models/user');

const getUserById = async (id) => {
    const project = await User.findOne({
        where: {
            id
        }
    });

    return project;
}

module.exports = {
    getUserById
}