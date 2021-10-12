
const sendResponseError = (req, res) => {
    let status;
    (res.error)? status = res.error.statusCode: status = 500;
    return res.status(res.error.statusCode).send({
        message: res.error.message || "500",
        status
    })
}

module.exports = {
    sendResponseError
}