const express = require('express');
const app = express();
const employeeRouter = require('./employee/router');

app.use(express.json());

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use('/employee', employeeRouter);

module.exports = app;

