

const createAuditCalInfo = async (model, data,res) => {
    try {
        const newData = await model.create(data);
        
        console.log(newData);
        if(!newData) {
            res.error = {
                statusCode: 401,
                message: "Cannot create data"
            }
        }
        return newData;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

module.exports = {
    createAuditCalInfo
}