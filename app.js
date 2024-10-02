const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter'); // Ensure this is included
const productRouter = require('./routes/productRouter'); // Ensure this is included
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,    
    cookie: { secure: false } // Set to true if using HTTPS
}));


app.use('/', userRouter);
app.use('/admin', adminRouter); // Ensure this is included
app.use('/products', productRouter);

app.listen(3003, () => {
    console.log('Server running at http://localhost:3003');
});
