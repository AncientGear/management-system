
const sendResponseError = (req, res) => {
    return res.status(res.err.statusCode).send({
        message: res.err.message
    })
}

module.exports = {
    sendResponseError
}