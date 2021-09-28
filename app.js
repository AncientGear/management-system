'use strict'
// library imports
const express = require('express');
const cors = require('cors');

const app = express();

// routes import


// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// cors
app.use(cors());

// route charge


// export

module.exports = app;
