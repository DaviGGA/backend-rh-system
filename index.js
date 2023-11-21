const express = require('express');
const app = express();
const employeeRouter = require('./employee/router');
const pointRouter = require('./point/router');
const userRouter = require('./user/router');

app.use(express.json());

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use('/employee', employeeRouter);
app.use('/point',pointRouter);
app.use('/user',userRouter);

module.exports = app;

