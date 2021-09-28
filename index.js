
'use strict'

const config = require('./config/config.js');
const app = require('./app');


try{
    app.listen(config.port, () => {
        console.log("API Connection Succesfully at port", config.port);
    })
} catch(err) {
    console.log("API Connection Failed");
}