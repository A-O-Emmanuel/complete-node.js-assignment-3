const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

const app = express();



app.use(indexRouter);
app.use(userRouter);
app.use(express.static(path.join(__dirname, 'public')))



const port = 1000;
app.listen(port, () => {
    console.log(`server runing on port: ${port}`)
})