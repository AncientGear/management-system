

const createUser = (req, res, next) => {
    try {
        
    } catch(err) {
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