const Sequelize = require("sequelize");

const User = require('../models/user.js');

const { generateHash } = require('../utils/cryptPassword')
const { getUserById } = require('../utils/getUserById')

const createUser = async (req, res, next) => {
    try {
        
        const body = req.body;
        const password = generateHash(body.password);
        const userInfo = {
            name: body.name,
            last_name: body.last_name,
            prefix: body.prefix,
            email: body.email,
            password
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

const authUser = (req, res, next) => {
    try {
        const body = req.body;

        const password = body.password;
        const email = body.email;



        return res.status(200).send({
            message: 'User loged succesfully.'
        })
    } catch(err) {
        console.log(err);
        res.error = {
            statusCode: err.statusCode || 500,
            message: err.message || 'Has been occurred an Error. Contact with the admin.'
        }
        next();
    }
}

const authAdmin = (req, res, next) => {
    try {
        

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
    createUser,
    authAdmin,
    authUser
}