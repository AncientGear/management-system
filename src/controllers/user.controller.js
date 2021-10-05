const Sequelize = require("sequelize");

const User = require('../models/user.js');

const { generateHash } = require('../utils/cryptPassword')
const { getUserById } = require('../utils/getUserById')
const { verifyUserEmail } = require('../utils/verifyUserMail');
const { compareHash } = require('../utils/compareHash');
const { generateToken } = require('../utils/generateToken');
const { getUserByEmail } = require('../utils/getUserByEmail')

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

const updateUser = async (req, res, next) => {
    try {
        
        const body = req.body;
        const password = generateHash(body.password);
        const userInfo = {
            name: body.name,
            last_name: body.last_name,
            prefix: body.prefix,
            email: body.email
        }
        const user = await User.update(userInfo, {
            where: {
                id: req.user.id
            }
        });
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

const authUser = async (req, res, next) => {
    try {
        const body = req.body;

        const password = body.password;
        const email = body.email;
        const userMailVerify = await verifyUserEmail(email);
        if(userMailVerify === false) {
            res.error = {
                statusCode: 401,
                message: 'Invalid Email or Password. Try again'
            };
            throw Error('Invalid Email or Password');
        }

        const user = req.user || await getUserByEmail(email);
        const hashVerify = await compareHash(password, user.id);
        if(hashVerify === false) {
            res.error = {
                statusCode: 401,
                message: 'Invalid Email or Password. Try again'
            };
            throw Error('Invalid Email or Password');
        }


        const token = await generateToken(user.id, user.email);
        await User.update({
            token
        }, {
            where: {
                email: user.email
            }
        })

        return res.status(200).send({
            message: 'User logged succesfully.',
            token
        })
    } catch(err) {
        console.log(err);
        next();
    }
}


module.exports = {
    createUser,
    authUser,
    updateUser
}