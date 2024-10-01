const bodyParser = require('body-parser');
const express = require('express');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const productRouter = require('./routes/productRouter');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRouter);

app.listen(3003, () => {
    console.log('Server running at http://localhost:3003');
});
