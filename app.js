'use strict'
// library imports
const express = require('express');
const cors = require('cors');

const app = express();

// routes import
const userRoutes = require('./src/routes/user');
const rolesRoutes = require('./src/routes/roles');
const annualProgrammRoutes = require('./src/routes/annual_programm');
const auditCallRoutes = require('./src/routes/audit_cal');
const laboralInformationRoutes = require('./src/routes/laboral_information');
const formationAsAuditorInfoRoutes = require('./src/routes/formation_as_auditor');
const auditInfoRoutes = require('./src/routes/audit_info');
const tokenRoutes = require('./src/routes/token');

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// cors
app.use(cors());

// route charge
app.use('/api/v1', userRoutes);
app.use('/api/v1',  rolesRoutes);
app.use('/api/v1', annualProgrammRoutes);
app.use('/api/v1', auditCallRoutes);
app.use('/api/v1', laboralInformationRoutes)
app.use('/api/v1', formationAsAuditorInfoRoutes)
app.use('/api/v1', auditInfoRoutes);
app.use('/api/v1', tokenRoutes);

// export
module.exports = app;
