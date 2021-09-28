
const sendResponseError = (req, res) => {
    return res.status(res.error.statusCode).send({
        message: res.error.message
    })
}

module.exports = {
    sendResponseError
}