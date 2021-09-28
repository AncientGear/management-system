'use strict'
// library imports
const express = require('express');
const cors = require('cors');

const app = express();

// routes import
const userRoutes = require('./src/routes/user');

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// cors
app.use(cors());

// route charge
app.use('/api/v1', userRoutes);

// export
module.exports = app;
