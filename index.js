const express = require('express');
const app = express();
const employeeRouter = require('./employee/router');
const pointRouter = require('./point/router');

app.use(express.json());

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use('/employee', employeeRouter);
app.use('/point',pointRouter);

module.exports = app;

