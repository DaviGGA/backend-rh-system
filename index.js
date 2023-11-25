const express = require('express');
const app = express();
const employeeRouter = require('./employee/router');
const pointRouter = require('./point/router');
const userRouter = require('./user/router');
const messageRouter = require('./message/router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use('/employee', employeeRouter);
app.use('/point',pointRouter);
app.use('/user',userRouter);
app.use('/message', messageRouter);

module.exports = app;

