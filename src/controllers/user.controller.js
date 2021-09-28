const Sequelize = require("sequelize");

const User = require('../models/user.js');

const createUser = async (req, res, next) => {
    try {
        
        const body = req.body;
        const userInfo = {
            name: body.name,
            last_name: body.last_name,
            prefix: body.prefix,
            email: body.email,
            password: body.password
        }

        const newUser = await User.create(userInfo);
        if(!newUser) {
            const err = {
                statusCode: 400,
                message: 'User cannot be created.'
            }
            throw Error(err)
        } else {
            return res.status(200).send({
                message: 'User created succesfully.',
                user: newUser
            })
        }

    } catch(err) {
        console.log(err);
        res.error = {
            statusCode: err.statusCode || 500,
            message: err.message || 'Has been occurred an Error. Contact with the admin.'
        }
        next();
    }
}

module.exports = {
    createUser
}