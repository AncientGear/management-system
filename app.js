'use strict'
// library imports
const express = require('express');
const cors = require('cors');

const app = express();

// routes import
const userRoutes = require('./src/routes/user');
const rolesRoutes = require('./src/routes/roles');
const annualProgrammRoutes = require('./src/routes/annual_programm');

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// cors
app.use(cors());

// route charge
app.use('/api/v1', userRoutes);
app.use('/api/v1',  rolesRoutes)
app.use('/api/v1', annualProgrammRoutes)

// export
module.exports = app;
